const express = require('express');
const router = express.Router();



// @desc    Main page
// @route   GET /part1
router.get('/part1', (req, res) => {
    res.render('quotesPart1');
})

// @desc    Main page
// @route   GET /part1
router.get('/part2', (req, res) => {
    res.render('quotesPart2');
})

module.exports = router;