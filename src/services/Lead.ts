import { Lead } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_LEADS = async () => await GET_RECORDS(DATABASE_TABLES.LEADS)
export const GET_LEAD_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.LEADS, id)
export const CREATE_LEAD_BY_ID = async (user: Lead) => await CREATE_RECORD(DATABASE_TABLES.LEADS, user)
export const EDIT_LEAD_BY_ID = async (id: string, user: Lead) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.LEADS, id, user)
export const DELETE_LEAD_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.LEADS, id)