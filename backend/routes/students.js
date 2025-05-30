const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all students
router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
