const express = require('express')


const notesRoutes = require('./notes');
const router = express();

router.use('/notes',notesRoutes);

module.exports = router;