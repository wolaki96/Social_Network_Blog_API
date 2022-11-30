//requiring express and routes to access the api data
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//when the wrong route is inserted in the database, it tells the user that they are using the wrong route
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;