import { ProfileCriteria } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_PROFILECRITERIAS = async () => await GET_RECORDS(DATABASE_TABLES.PROFILECRITERIAS)
export const GET_PROFILECRITERIA_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.PROFILECRITERIAS, id)
export const CREATE_PROFILECRITERIA_BY_ID = async (user: ProfileCriteria) => await CREATE_RECORD(DATABASE_TABLES.PROFILECRITERIAS, user)
export const EDIT_PROFILECRITERIA_BY_ID = async (id: string, user: ProfileCriteria) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.PROFILECRITERIAS, id, user)
export const DELETE_PROFILECRITERIA_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.PROFILECRITERIAS, id)