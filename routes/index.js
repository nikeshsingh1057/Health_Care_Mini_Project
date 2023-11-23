const express = require('express');
const path = require('path');

const router = express.Router({ mergeParams: true });

// GET ROUTES

// home and logout access

router.get('/', (req, res) => {
  const data = {};
  data.user = req.user;
  
  res.render('home', { data });
});

 
// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
