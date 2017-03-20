const express = require('express');
const albums = require('./albums');
const photos = require('./photos');
const picture = require('./picture');

const router = express.Router();

router.use('/albums', albums);
router.use('/photos', photos);
router.use('/picture', picture);

module.exports = router;