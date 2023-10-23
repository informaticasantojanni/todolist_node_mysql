
const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();


router.get('/:serviceId/estado:status', (req, res) => {
  // const id = req.params.id;
  const {
    serviceId,
    status
  } = req.params;
  res.json({
    serviceId,
    status,
  })
});

module.exports = router;
