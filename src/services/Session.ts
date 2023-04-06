import { Session } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_SESSIONS = async () => await GET_RECORDS(DATABASE_TABLES.SESSIONS)
export const GET_SESSION_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.SESSIONS, id)
export const CREATE_SESSION_BY_ID = async (user: Session) => await CREATE_RECORD(DATABASE_TABLES.SESSIONS, user)
export const EDIT_SESSION_BY_ID = async (id: string, user: Session) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.SESSIONS, id, user)
export const DELETE_SESSION_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.SESSIONS, id)