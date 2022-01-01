
const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')

const {requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3.js')

const { Photo, Photo_Album, Album } = require('../../db/models')


const validateUpload = [
    handleValidationErrors
]

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const photos = await Photo.findAll()
    res.json(photos);
}))

router.get('/favorites', requireAuth, asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({
        where: {
            favorite: true
        }
    })
    res.json(photos);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const photos = await Photo.findAll({
        where: {
            userId: id
        },

    })
    res.json(photos);
}))

router.post('/:id/edit', asyncHandler(async (req, res) => {
    const {id} = req.params
    const {imageUrl, albumName} = req.body

    const photoToUpdate = await Photo.findByPk(id)
    let photo = {};

    photo = {imageUrl}
    updatedPhoto = await photoToUpdate.update(photo)

    const album = await Album.findOne({
        where: {
            name: albumName
        }
    })
    const albumId = album.id

    const photo_albumsToDelete = await Photo_Album.findAll({
        where: {
            photoId: id
        }
    })

    if (!photo_albumsToDelete) {
        const photo_album = await Photo_Album.create({
            photoId: id,
            albumId,

        });

    } else {
        for (let i = 0; i < photo_albumsToDelete.length; i++) {
            let photo_albumRow = photo_albumsToDelete[i];
            photo_albumRow.destroy();
        }
        const photo_album = await Photo_Album.create({
            photoId: id,
            albumId,

        });
    }

    return res.json(updatedPhoto)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const photo = await Photo.findByPk((parseInt(req.params.id)))
    photo.destroy();
    return res.json({id})
}))


router.post('/', singleMulterUpload("file"), validateUpload, asyncHandler(async (req, res) => {
    const {userId} = req.body
    const photoURL = await singlePublicFileUpload(req.file)
    const photo = await Photo.create({
        imageUrl: photoURL,
        userId
    });
    return res.json(photo)
}))

router.post('/:id/favorite', asyncHandler(async (req, res) => {
    const {photoId} = req.body
    const photo = await Photo.findByPk(photoId)
    if (photo.favorite === false) {
        photo.update({favorite: true})
    } else if (photo.favorite === true) {
        photo.update({favorite: false})
    }
    return res.json(photo)
}))

module.exports = router
