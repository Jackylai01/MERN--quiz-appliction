const Questions = require("../models/questionSchema");
const { questions, answers } = require("../database/data");

const questionsCtrl = {
  getQuestions: async (req, res) => {
    try {
      const question = await Questions.find();

      res.status(201).json(question);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //index 第0項為第一題的題目，回答次數為1
  inserQuestions: async (req, res) => {
    try {
      Questions.insertMany({ questions, answers }, function (err, data) {
        res.json({ msg: "Data Saved Successfully...!" });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  dropQuestions: async (req, res) => {
    try {
      await Questions.deleteMany();
      res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = questionsCtrl;
