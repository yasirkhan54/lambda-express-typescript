import { Address } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_ADDRESSS = async () => await GET_RECORDS(DATABASE_TABLES.ADDRESSS)
export const GET_ADDRESS_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.ADDRESSS, id)
export const CREATE_ADDRESS_BY_ID = async (user: Address) => await CREATE_RECORD(DATABASE_TABLES.ADDRESSS, user)
export const EDIT_ADDRESS_BY_ID = async (id: string, user: Address) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.ADDRESSS, id, user)
export const DELETE_ADDRESS_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.ADDRESSS, id)