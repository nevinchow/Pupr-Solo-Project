
const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const PhotoRepository = require('../../db/photo-repository')


const { Photo } = require('../../db/models')
const { User } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
    const {id} = req.params
    const photos = await Photo.findAll({
        where: {
            userId: id
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
    const {imageUrl} = req.body

    const photoToUpdate = await Photo.findByPk(id)
    let photo = {};

    photo = {imageUrl}
    updatedPhoto = await photoToUpdate.update(photo)
    return res.json(updatedPhoto)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const photo = await Photo.findByPk((parseInt(req.params.id)))
    photo.destroy();
    const photos = await Photo.findAll({
        where: {
            userId: id
        }
    })
    return res.json(photos)
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
    return res.redirect(`/api/photos`)
}))

module.exports = router
