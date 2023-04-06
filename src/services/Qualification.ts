import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Qualification } from 'src/models'

export const LIST_OF_QUALIFICATION = async () => {
  const qualifications = await SQL<Qualification[]>`SELECT * FROM ${DATABASE_TABLES.QUALIFICATIONS}` // Get all qualifications
  return qualifications
}
export const GET_QUALIFICATION_BY_ID = async (id: string) => {
  const qualifications = await SQL<Qualification[]>`SELECT * FROM ${DATABASE_TABLES.QUALIFICATIONS} where qualification_id = ${id}` // Get qualification by id
  if (qualifications.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return qualifications.at(0)
}
export const CREATE_QUALIFICATION = async (qualification: Qualification) => {
  const qualifications = await SQL<Qualification[]>`INSERT INTO ${DATABASE_TABLES.QUALIFICATIONS} VALUES ${SQL(qualification)} returning *` // Create qualification
  if (qualifications.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return qualifications
}
export const EDIT_QUALIFICATION_BY_ID = async (id: string, qualification: Qualification) => {
  const qualifications = await SQL<Qualification[]>`UPDATE ${DATABASE_TABLES.QUALIFICATIONS} SET ${SQL(qualification)} where qualification_id = ${id} returning *` // Update qualification by id
  if (qualifications.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return qualifications
}
export const DELETE_QUALIFICATION_BY_ID = async (id: string) => {
  const qualifications = await SQL<Qualification[]>`DELETE FROM ${DATABASE_TABLES.QUALIFICATIONS} where qualification_id = ${id} returning *` // Delete qualification by id
  if (qualifications.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return qualifications
}