'use strict';
const qs = require('qs')

const data = [
          { id: 0, url: '', rateValue: 0, rateCount: 0 },
          ]

module.exports = {

  'GET /api/gallery': function (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: data,
      });
    }, 500);
  },
  'PATCH /api/gallery/*': function (req, res) {
    const patchData = req.body
    const id = req.params[0]
    data[id].rateValue = patchData
    data[id].rateCount += 1
    setTimeout(function () {
      res.json({
        success: true,
        data: data,
      });
    }, 500);
  },


};
