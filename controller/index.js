const router = require('express').Router();
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes')
const dbRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dbRoutes);

module.exports = router;