---
inject: true
to: src/modules/index.ts
append: true
skip_if: <%= name.toUpperCase() %> is available for GET,PUT,POST,DELETE
---
  { PATH: <%= name.toUpperCase() %>_PATH, ROUTER: <%= name.toUpperCase() %>_ROUTER },   // <%= name.toUpperCase() %> is available for GET,PUT,POST,DELETE