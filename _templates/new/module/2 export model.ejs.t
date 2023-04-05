---
inject: true
to: src/models/index.ts
append: true
skip_if: './<%= name %>'
---
export { <%= Name %> } from './<%= name %>'