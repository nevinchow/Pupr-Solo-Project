const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const PhotoRepository = require('../../db/photo-repository')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const {Album, Photo} = require('../../db/models')



router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
        where: {
            userId: req.user.id
        }
    })
    res.json(albums)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {name, userId} = req.body
    const album = await Album.create({name, userId})
    return res.json(album)
}))

module.exports = router;
