const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');

router.route('/locations')
.get(ctrlLocations.locationsListByDistance)
.post(ctrlLocations.createLocation);

router.route('/location/:locationid')
.get(ctrlLocations.locationReadOne)
.delete(ctrlLocations.deleteLocation)
.put(ctrlLocations.updateLocation);


module.exports = router;
