const questions = [
  {
    id: 1,
    question: "mongoose 語法當中，下列何者是可以設定資料關聯性",
    options: ["findOne", "populate", "find"],
  },
  {
    id: 2,
    question: "node.js 當中，送出一個POST會用到以下哪個method",
    options: ["req.body", "req.params", "req.query"],
  },
  {
    id: 3,
    question: "請問什麼middleware",
    options: ["中間件", "路由", "資料庫架構"],
  },
  {
    id: 4,
    question: "請問下列哪個不是express.urlencoded( [options] )的用法",
    options: ["驗證", "建立路由", "限制"],
  },
  {
    id: 5,
    question: "React 當中的虛擬DOM是指什麼",
    options: ["Virtual DOM", "Parse DOM", "Convert DOM"],
  },
  {
    id: 6,
    question: "請問以下哪個可以進行轉址",
    options: ["window.open()", "useNavigate()", "windows.location.href"],
  },
];
const answers = [1, 0, 0, 1, 0, 0];

module.exports = { answers, questions };
