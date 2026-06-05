# MongoDB Schema Design

- Embed what you read together (user + address)
- Reference when data grows unbounded (user -> posts)
- Index every query pattern; check with .explain("executionStats")
- Prefer computed/denormalized counters over COUNT(*) scans
