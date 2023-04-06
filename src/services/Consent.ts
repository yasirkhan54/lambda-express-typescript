import { Consent } from 'src/models'
import { DATABASE_TABLES, GET_RECORDS, GET_RECORD_BY_ID, CREATE_RECORD, UPDATE_RECORD_BY_ID, DELETE_RECORD_BY_ID } from '../shared'

export const GET_CONSENTS = async () => await GET_RECORDS(DATABASE_TABLES.CONSENTS)
export const GET_CONSENT_BY_ID = async (id: string) => await GET_RECORD_BY_ID(DATABASE_TABLES.CONSENTS, id)
export const CREATE_CONSENT_BY_ID = async (user: Consent) => await CREATE_RECORD(DATABASE_TABLES.CONSENTS, user)
export const EDIT_CONSENT_BY_ID = async (id: string, user: Consent) => await UPDATE_RECORD_BY_ID(DATABASE_TABLES.CONSENTS, id, user)
export const DELETE_CONSENT_BY_ID = async (id: string) => await DELETE_RECORD_BY_ID(DATABASE_TABLES.CONSENTS, id)