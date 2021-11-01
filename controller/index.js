const router = require('express').Router();
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes')
//const dboardRoutes = require('./dashboard-routes');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
//router.use('/dashboard', dboardRoutes);

module.exports = router;