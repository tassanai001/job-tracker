const express = require('express');
const router = express.Router();

const auth = require('../auth/authMiddleware');
const controller = require('./jobController');
const { createJobService } = require('../../diContainer');

router.use(auth, (req, res, next) => {
  req.jobService = createJobService(); // Inject from DI container
  next();
});

router.post('/', controller.createJob);
router.get('/', controller.getJobs);
router.put('/:id', controller.updateJob);
router.delete('/:id', controller.deleteJob);

module.exports = router;