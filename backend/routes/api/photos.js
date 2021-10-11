const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')


const { Photo } = require('../../db/models')

router.get('', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll();
    res.json(photos);
}))


module.exports = router
