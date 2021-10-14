const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const PhotoRepository = require('../../db/photo-repository')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const {Album, Photo, Photo_Album} = require('../../db/models')



router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
        where: {
            userId: req.user.id
        }
    })
    res.json(albums)
}))

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const {id: albumId} = req.params
    const photos = await Photo.findAll({
        include: [
            {model: Photo_Album, where: {albumId: albumId}}
        ]
    })
    res.json(photos)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {name, userId} = req.body
    const album = await Album.create({name, userId})
    return res.json(album)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const album = await Album.findByPk((parseInt(req.params.id)))
    album.destroy();
    return res.json({id})
}))

module.exports = router;
