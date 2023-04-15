import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { ThirdPartyToken } from '../models'

export const LIST_OF_THIRDPARTYTOKEN = async () => {
  const thirdPartyTokens = await SQL<ThirdPartyToken[]>`SELECT * FROM ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)}` // Get all thirdPartyTokens
  return thirdPartyTokens
}
export const GET_THIRDPARTYTOKEN_BY_ID = async (id: string) => {
  const thirdPartyTokens = await SQL<ThirdPartyToken[]>`SELECT * FROM ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)} where third_party_token_id = ${id}` // Get thirdPartyToken by id
  if (thirdPartyTokens.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return thirdPartyTokens.at(0)
}
export const CREATE_THIRDPARTYTOKEN = async (thirdPartyTokenValue: ThirdPartyToken) => {
  const thirdPartyToken = await SQL<ThirdPartyToken[]>`INSERT INTO ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)} (lead_id, traffic_jornaya_lead_id, traffic_trusted_form_url, traffic_trustedform_token) VALUES ${SQL(thirdPartyTokenValue)} returning *` // Create thirdPartyToken
  if (thirdPartyToken.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return thirdPartyToken
}
export const EDIT_THIRDPARTYTOKEN_BY_ID = async (id: string, thirdPartyTokenValues: ThirdPartyToken) => {
  const thirdPartyToken = await SQL<ThirdPartyToken[]>`UPDATE ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)} SET ${SQL(thirdPartyTokenValues)} where third_party_token_id = ${id} returning *` // Update thirdPartyToken by id
  if (thirdPartyToken.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return thirdPartyToken
}
export const DELETE_THIRDPARTYTOKEN_BY_ID = async (id: string) => {
  const thirdPartyToken = await SQL<ThirdPartyToken[]>`DELETE FROM ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)} where third_party_token_id = ${id} returning *` // Delete thirdPartyToken by id
  if (thirdPartyToken.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return thirdPartyToken
}