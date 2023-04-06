import { UTM } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_UTMS = async () => await GET_RECORDS(DATABASE_TABLES.UTMS)
export const GET_UTM_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.UTMS, id)
export const CREATE_UTM_BY_ID = async (user: UTM) => await CREATE_RECORD(DATABASE_TABLES.UTMS, user)
export const EDIT_UTM_BY_ID = async (id: string, user: UTM) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.UTMS, id, user)
export const DELETE_UTM_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.UTMS, id)