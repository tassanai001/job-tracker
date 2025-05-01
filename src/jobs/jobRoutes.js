const express = require("express");
const router = express.Router();

const auth = require("../auth/authMiddleware");
const controller = require("./jobController");
const JobService = require("./jobService");
const MongoRepo = require("./mongoJobRepository");

// Wire dependencies via middleware
router.use(auth, (req, res, next) => {
    req.jobService = new JobService(new MongoRepo());
    next();
});

router.post("/", controller.createJob);
router.get("/", controller.getJobs);
router.put("/:id", controller.updateJob);
router.delete("/:id", controller.deleteJob);

module.exports = router;