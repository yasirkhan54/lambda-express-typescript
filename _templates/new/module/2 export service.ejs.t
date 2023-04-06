---
inject: true
to: src/services/index.ts
append: true
skip_if: './<%= name %>'
---
export { LIST_OF_<%= name.toUpperCase() %>, GET_<%= name.toUpperCase() %>_BY_ID, CREATE_<%= name.toUpperCase() %>, EDIT_<%= name.toUpperCase() %>_BY_ID, DELETE_<%= name.toUpperCase() %>_BY_ID } from './<%= name %>'