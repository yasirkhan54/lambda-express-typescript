import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Qualification } from 'src/models'

export const LIST_OF_QUALIFICATION = async () => {
  const qualifications = await SQL<Qualification[]>`SELECT * FROM ${SQL(DATABASE_TABLES.QUALIFICATIONS)}` // Get all qualifications
  return qualifications
}
export const GET_QUALIFICATION_BY_ID = async (id: string) => {
  const qualifications = await SQL<Qualification[]>`SELECT * FROM ${SQL(DATABASE_TABLES.QUALIFICATIONS)} where qualification_id = ${id}` // Get qualification by id
  if (qualifications.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return qualifications.at(0)
}
export const CREATE_QUALIFICATION = async (qualification: Qualification) => {
  const qualifications = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.QUALIFICATIONS)} ${SQL(qualification, 'profile_id', 'lead_id', 'enrollment_timeline', 'current_edu_level', 'preferred_edu_level', 'learning_preference', 'is_graduated_in_us', 'computer_internet_access', 'level_of_interest', 'time_of_day', 'previously_contacted')} returning *` // Create qualification
  if (qualifications.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return qualifications.at(0)
}
export const EDIT_QUALIFICATION_BY_ID = async (id: string, qualification: Qualification) => {
  const qualifications = await SQL<Qualification[]>`UPDATE ${SQL(DATABASE_TABLES.QUALIFICATIONS)} SET ${SQL(qualification)} where qualification_id = ${id} returning *` // Update qualification by id
  if (qualifications.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return qualifications.at(0)
}
export const DELETE_QUALIFICATION_BY_ID = async (id: string) => {
  const qualifications = await SQL<Qualification[]>`DELETE FROM ${SQL(DATABASE_TABLES.QUALIFICATIONS)} where qualification_id = ${id} returning *` // Delete qualification by id
  if (qualifications.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return qualifications.at(0)
}