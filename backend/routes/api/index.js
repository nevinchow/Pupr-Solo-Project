const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photoRouter = require('./photos')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

router.use('/photos', photoRouter)



module.exports = router;
