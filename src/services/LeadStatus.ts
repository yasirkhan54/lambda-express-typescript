import { LeadStatus } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_LEADSTATUSS = async () => await GET_RECORDS(DATABASE_TABLES.LEADSTATUSS)
export const GET_LEADSTATUS_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.LEADSTATUSS, id)
export const CREATE_LEADSTATUS_BY_ID = async (user: LeadStatus) => await CREATE_RECORD(DATABASE_TABLES.LEADSTATUSS, user)
export const EDIT_LEADSTATUS_BY_ID = async (id: string, user: LeadStatus) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.LEADSTATUSS, id, user)
export const DELETE_LEADSTATUS_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.LEADSTATUSS, id)