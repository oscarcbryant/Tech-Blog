const router = require('express').Router();

//const apiRoutes = require('.');
const blogpostRoutes = require('./blogpostRoutes');
const userRoutes = require('./userRoutes');


//router.use('/api', apiRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/user', userRoutes);


module.exports = router;