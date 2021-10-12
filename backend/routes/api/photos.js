const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')


const { Photo } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {

    const photos = await Photo.findAll();

    res.json(photos);
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
