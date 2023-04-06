---
to: src/services/<%= name %>.ts
unless_exists: true
---
import { <%= Name %> } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const LIST_OF_<%= name.toUpperCase() %> = async () => await GET_RECORDS(DATABASE_TABLES.<%= table.toUpperCase() %>)
export const GET_<%= name.toUpperCase() %>_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.<%= table.toUpperCase() %>, id)
export const CREATE_<%= name.toUpperCase() %> = async (<%= h.changeCase.camel(name) %>: <%= Name %>) => await CREATE_RECORD(DATABASE_TABLES.<%= table.toUpperCase() %>, <%= h.changeCase.camel(name) %>)
export const EDIT_<%= name.toUpperCase() %>_BY_ID = async (id: string, <%= h.changeCase.camel(name) %>: <%= Name %>) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.<%= table.toUpperCase() %>, id, <%= h.changeCase.camel(name) %>)
export const DELETE_<%= name.toUpperCase() %>_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.<%= table.toUpperCase() %>, id)