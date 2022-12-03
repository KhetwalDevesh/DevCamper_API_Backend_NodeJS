const Bootcamp = require('../models/Bootcamp');
// @desc : Get all bootcamps
// @route : GET /api/v1/bootcamps
// @access : Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc : Get single bootcamp
// @route : GET /api/v1/bootcamp/:id
// @access : Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp with id ${req.params.id}` });
};

// @desc : Create a bootcamp
// @route : POST /api/v1/bootcamp
// @access : Private
exports.createBootcamp = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ success: true, msg: `Create bootcamp` });
};

// @desc : Update a bootcamp
// @route : PUT /api/v1/bootcamp/:id
// @access : Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp with id ${req.params.id}` });
};

// @desc : Delete a bootcamp
// @route : DELETE /api/v1/bootcamp/:id
// @access : Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp with id ${req.params.id}` });
};
