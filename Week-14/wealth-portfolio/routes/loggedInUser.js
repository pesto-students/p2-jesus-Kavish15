const router = require("express").Router();
const verify = require("./verifyToken");
const Expense = require("../models/expense");

//Login Route
router.get("/", verify, async (req, res) => {
  //   res.send(req.user)
  const expense = await Expense.find({ userid: req.user._id });
  if (expense.length == 0)
    return res.status(400).send({
      message: "No Data for Entered User Visit POST api/posts/newExpense ",
    });
  res.send(expense);
});

//New User
router.post("/newExpense", verify, async (req, res) => {
  const expense = await new Expense({
    userid: req.user._id,
    asset: req.body.asset,
    fixedIncome: req.body.fixedIncome,
    extraIncome: req.body.extraIncome,
    year: req.body.year,
  });

  try {
    const savedExpense = await expense.save();
    res.send("Entry Created got to api/posts to see data");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Filter By Year
router.get("/:year", verify, async (req, res) => {
  const outExpense = await Expense.find({
    userid: req.user._id,
    year: req.params.year,
  });
  if (outExpense.length == 0) {
    return res.status(400).send(`No Data for year ${req.params.year} `);
  } else {
    res.send(outExpense);
  }
});

//Update Data
router.put("/:id", verify, async (req, res) => {
  // console.log(req.body.asset);
  const updateExpense = await Expense.updateOne(
    { _id: req.params.id },
    {
      $set: {
        asset: req.body.asset,
        fixedIncome: req.body.fixedIncome,
        extraIncome: "2223",
        year: "2023",
      },
    }
  );
  // res.send(updateExpense);
  if(updateExpense.modifiedCount>0)return res.send("Updating Done Rows Successfully")

  res.status(400).send("No Updates Done");
});

//Delete by Year
router.delete("/:year", verify, async (req, res) => {
  const deletedExpense = await Expense.deleteMany({
    userid: req.user._id,
    year: req.params.year,
  });
  if (deletedExpense.deletedCount > 0) {
    res.send(
      `${deletedExpense.deletedCount} Item Deleted for ${req.params.year}`
    );
  } else {
    res.send(`No Expenses Present for ${req.params.year} Year `);
  }
});

module.exports = router;

// {
//     "asset":"500",
//     "fixedIncome":"5000",
//     "extraIncome":"1000",
//     "year":"2022"
// }
