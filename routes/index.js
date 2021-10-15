//requires express
const express = require('express')

//links to notes
const notesRoutes = require('./notes');
const router = express();

router.use('/notes',notesRoutes);

module.exports = router;