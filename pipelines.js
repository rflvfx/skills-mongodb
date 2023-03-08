// Reusable aggregation pipelines
const salesByMonth = [
  { $match: { status: "paid" } },
  { $group: { _id: { $dateTrunc: { date: "$createdAt", unit: "month" } }, total: { $sum: "$amount" } } },
  { $sort: { _id: 1 } },
];
module.exports = { salesByMonth };
