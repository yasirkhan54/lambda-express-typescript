import createError from 'http-errors'
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Consent } from 'src/models'

export const LIST_OF_CONSENT = async () => {
  const consents = await SQL<Consent[]>`SELECT * FROM ${SQL(DATABASE_TABLES.CONSENTS)}` // Get all consents
  return consents
}
export const GET_CONSENT_BY_ID = async (id: string) => {
  const consents = await SQL<Consent[]>`SELECT * FROM ${SQL(DATABASE_TABLES.CONSENTS)} where consent_id = ${id}` // Get consent by id
  if (consents.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return consents.at(0)
}
export const CREATE_CONSENT = async (consent: Consent) => {
  const consents = await SQL<Consent[]>`INSERT INTO ${SQL(DATABASE_TABLES.CONSENTS)} VALUES ${SQL(consent)} returning *` // Create consent
  if (consents.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return consents
}
export const EDIT_CONSENT_BY_ID = async (id: string, consent: Consent) => {
  const consents = await SQL<Consent[]>`UPDATE ${SQL(DATABASE_TABLES.CONSENTS)} SET ${SQL(consent)} where consent_id = ${id} returning *` // Update consent by id
  if (consents.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return consents
}
export const DELETE_CONSENT_BY_ID = async (id: string) => {
  const consents = await SQL<Consent[]>`DELETE FROM ${SQL(DATABASE_TABLES.CONSENTS)} where consent_id = ${id} returning *` // Delete consent by id
  if (consents.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return consents
}