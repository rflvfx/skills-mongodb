// Seed script (mongosh)
db.users.insertMany([
  { name: "Ana", email: "ana@example.com", roles: ["admin"] },
  { name: "Bruno", email: "bruno@example.com", roles: ["user"] },
]);
db.orders.insertMany([
  { customerId: db.users.findOne({ email: "ana@example.com" })._id, amount: 199.9, status: "paid" },
]);
