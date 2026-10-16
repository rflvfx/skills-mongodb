<div align="center">
<img src="https://cdn.simpleicons.org/mongodb" height="70"/>

# skills-mongodb

**MongoDB** — modelagem de documentos, aggregation pipelines e indexes.

</div>

## 📋 Sobre

Estudos de banco orientado a documentos: modelagem embed vs reference, pipelines de agregação e estratégia de índices.

## 📂 Conteúdo

- `models.js` — shapes de documentos
- `seed.js` — script de seed (mongosh)
- `queries.js` — find, projection, índices
- `pipelines.js` — aggregation pipelines reutilizáveis
- `server.js` — app de exemplo
- `schema-design.md` — regras de modelagem

## 🚀 Quick start

```bash
docker compose up -d
mongosh < seed.js
```

## 🧠 Tópicos cobertos

`documents` `aggregation` `indexes` `change streams` `shard keys` `schema validation`
