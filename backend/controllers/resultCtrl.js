const Results = require("../models/resultSchema");

const resultCtrl = {
  getResult: async (req, res) => {
    try {
      const result = await Results.find();
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  storeResult: async (req, res) => {
    try {
      const { username, result, attempts, points, achived } = req.body;
      if (!username && !result) throw new Error("Data Not Provided...!");

      Results.create(
        { username, result, attempts, points, achived },
        function (err, data) {
          res.json({ msg: "Result Saved Successfully...!" });
        }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },

  dropResult: async (req, res) => {
    try {
      await Results.deleteMany();
      res.json({ msg: "Result Deleted Successfully...!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = resultCtrl;
