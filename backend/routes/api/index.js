const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photoRouter = require('./photos')
const albumRouter = require('./albums')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/photos', photoRouter)

router.use('/albums', albumRouter)





module.exports = router;
