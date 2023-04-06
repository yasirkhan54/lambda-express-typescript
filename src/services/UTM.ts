import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { UTM } from '../models'

export const LIST_OF_UTM = async () => {
  const utms = await SQL<UTM[]>`SELECT * FROM ${DATABASE_TABLES.UTMS}` // Get all utms
  return utms
}
export const GET_UTM_BY_ID = async (id: string) => {
  const utms = await SQL<UTM[]>`SELECT * FROM ${DATABASE_TABLES.UTMS} where utm_id = ${id}` // Get utm by id
  if (utms.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return utms.at(0)
}
export const CREATE_UTM = async (utm: UTM) => {
  const utms = await SQL<UTM[]>`INSERT INTO ${DATABASE_TABLES.UTMS} VALUES ${SQL(utm)} returning *` // Create utm
  if (utms.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return utms
}
export const EDIT_UTM_BY_ID = async (id: string, utm: UTM) => {
  const utms = await SQL<UTM[]>`UPDATE ${DATABASE_TABLES.UTMS} SET ${SQL(utm)} where utm_id = ${id} returning *` // Update utm by id
  if (utms.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return utms
}
export const DELETE_UTM_BY_ID = async (id: string) => {
  const utms = await SQL<UTM[]>`DELETE FROM ${DATABASE_TABLES.UTMS} where utm_id = ${id} returning *` // Delete utm by id
  if (utms.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return utms
}