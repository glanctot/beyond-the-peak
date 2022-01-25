const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require("./homepage-routes");
const commentboardRoutes = require("./commentboard-routes");
const morningAfterRoutes = require('./morningafter-routes');

router.use('/api', apiRoutes);
router.use("/", homepageRoutes);
router.use("/commentboard", commentboardRoutes);
router.use('/morningafter', morningAfterRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;