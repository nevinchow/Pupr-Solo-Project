const csrf = require('csurf')
const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')



const { Photo } = require('../../db/models')

async function update(details) {
    const id = details.id
    delete details.id
    await Photo.update(
        details,
        {
            where: {id},
            returning: true,
            plain: true
        }
    )
    return id
}

async function one(id) {
    return await Photo.findByPk(id)
}

router.get('/', asyncHandler(async (req, res) => {

    const photos = await Photo.findAll()

    res.json(photos);
}))

router.put('/:id', asyncHandler(async (req, res) => {
    const id = await Photo.update(req.body);
    const photo = await Photo.one(id)
    return res.json(photo)
}))


// router.get('/:id', asyncHandler(async (req, res) => {

//     const photos = await Photo.findByPk(req.params.id)

//     return res.json(photos);
// }))



router.post('/', asyncHandler(async (req, res) => {
    const {imageUrl, userId} = req.body
    const photo = await Photo.create({
        imageUrl,
        userId
    });
    return res.redirect(`/api/photos`)
}))

// {
//     where: {
//         userId: res.locals.user.id
//     }
// }
// {
//     where: {
//         userId: res.locals.
//       }
// }
// router.post(
//     '/',
//     asyncHandler(async (req, res, next) => {
//       const { imageUrl } = req.body;

//       const photo = await Photo.uploadPhotos({ photos });

//       return res.json({
//         photo,
//       });
//     }),
//   );


module.exports = router
