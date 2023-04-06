import { Profile } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_PROFILES = async () => await GET_RECORDS(DATABASE_TABLES.PROFILES)
export const GET_PROFILE_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.PROFILES, id)
export const CREATE_PROFILE_BY_ID = async (user: Profile) => await CREATE_RECORD(DATABASE_TABLES.PROFILES, user)
export const EDIT_PROFILE_BY_ID = async (id: string, user: Profile) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.PROFILES, id, user)
export const DELETE_PROFILE_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.PROFILES, id)