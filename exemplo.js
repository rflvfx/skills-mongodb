// mongodb.js
// Consulta exemplo em MongoDB

db.usuarios.insertOne({
  nome: "Rafael",
  email: "rafael@email.com",
  habilidades: ["MongoDB", "NoSQL"]
});

db.usuarios.find({ habilidades: "MongoDB" });
