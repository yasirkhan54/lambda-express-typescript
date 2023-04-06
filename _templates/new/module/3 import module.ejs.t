---
inject: true
to: src/modules/index.ts
prepend: true
skip_if: './<%= name %>'
---
import { <%= name.toUpperCase() %>_PATH, <%= name.toUpperCase() %>_ROUTER } from './<%= name %>'