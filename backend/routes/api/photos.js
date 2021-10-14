
const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const PhotoRepository = require('../../db/photo-repository')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');


const { Photo, Photo_Album, Album } = require('../../db/models')
const {User} = require('../../db/models')

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({
        where: {
            userId: req.user.id
        }
    })
    res.json(photos);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const photos = await Photo.findAll({
        where: {
            userId: id
        }
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
    const photo_album = await Photo_Album.create({
        photoId: id,
        albumId,

    });

    return res.json(updatedPhoto)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const photo = await Photo.findByPk((parseInt(req.params.id)))
    photo.destroy();
    return res.json({id})
}))


// router.get('/:id', asyncHandler(async (req, res) => {

//     const photos = await Photo.findByPk(req.params.id)

//     return res.json(photos);
// }))



router.post('/', asyncHandler(async (req, res) => {
    const {name, imageUrl, userId} = req.body
    const photo = await Photo.create({
        name,
        imageUrl,
        userId
    });
    return res.json(photo)
}))

module.exports = router
