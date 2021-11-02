const router = require('express').Router();

const homeRoutes = require('./home-routes.js')
const dbRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api');
router.use('/', homeRoutes);

router.use('/dashboard', dbRoutes);
router.use('/api', apiRoutes);

module.exports = router;