// MongoDB shell examples

// Aggregation pipeline
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
]);

// Index
db.orders.createIndex({ customerId: 1, createdAt: -1 });

// Find with projection
db.users.find({ active: true }, { name: 1, email: 1, _id: 0 });
