---
to: src/services/<%= name %>.ts
unless_exists: true
---
import { <%= Name %> } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_<%= name.toUpperCase() %>S = async () => await GET_RECORDS(DATABASE_TABLES.<%= name.toUpperCase() %>S)
export const GET_<%= name.toUpperCase() %>_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.<%= name.toUpperCase() %>S, id)
export const CREATE_<%= name.toUpperCase() %>_BY_ID = async (user: <%= Name %>) => await CREATE_RECORD(DATABASE_TABLES.<%= name.toUpperCase() %>S, user)
export const EDIT_<%= name.toUpperCase() %>_BY_ID = async (id: string, user: <%= Name %>) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.<%= name.toUpperCase() %>S, id, user)
export const DELETE_<%= name.toUpperCase() %>_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.<%= name.toUpperCase() %>S, id)