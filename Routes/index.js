const express = require('express');
const router = express.Router();



// @desc    part one of project
// @route   GET /part1
router.get('/part1', (req, res) => {
    res.render('quotesPart1');
})

// @desc    Part two of project
// @route   GET /part1
router.get('/part2', (req, res) => {
    res.render('quotesPart2');
})

router.get('/', (req, res) => {
    res.render('landing');
})

module.exports = router;