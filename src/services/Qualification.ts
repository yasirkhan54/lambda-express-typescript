import { Qualification } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_QUALIFICATIONS = async () => await GET_RECORDS(DATABASE_TABLES.QUALIFICATIONS)
export const GET_QUALIFICATION_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.QUALIFICATIONS, id)
export const CREATE_QUALIFICATION_BY_ID = async (user: Qualification) => await CREATE_RECORD(DATABASE_TABLES.QUALIFICATIONS, user)
export const EDIT_QUALIFICATION_BY_ID = async (id: string, user: Qualification) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.QUALIFICATIONS, id, user)
export const DELETE_QUALIFICATION_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.QUALIFICATIONS, id)