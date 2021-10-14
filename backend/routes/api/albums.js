const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const PhotoRepository = require('../../db/photo-repository')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const {Album} = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
    const albums = await Album.findAll()
    res.json(albums)
}))

module.exports = router;
