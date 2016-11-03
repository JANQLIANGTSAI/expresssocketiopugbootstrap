/**
 * 
 * expresspugbootstrap
 * -----------------------------------------------
 * An Node.JS template with 
 *   — Express
 *   — Pug (formerly Jade) 
 *   — Bootstrap (pug-bootstrap)
 *
 * https://github.com/JANQLIANGTSAI/expresspugbootstrap
 * Copyright 2016-present, Max J. Tsai
 * All rights reserved.
 * -----------------------------------------------
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('This is Index.html!');
});

router.get('/aloha', function(req, res, next) {
  res.send('This is aloha.html!');
});


router.get('/pug', function(req, res, next) {
  res.render('default', { title: 'PUG-Bootstrap' });
});

module.exports = router;
