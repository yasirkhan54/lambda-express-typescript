import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { ProfileCriteria } from 'src/models'

export const LIST_OF_PROFILECRITERIA = async () => {
  const profileCriteria = await SQL<ProfileCriteria[]>`SELECT * FROM ${DATABASE_TABLES.PROFILE_CRITERIA}` // Get all profileCriteria
  return profileCriteria
}
export const GET_PROFILECRITERIA_BY_ID = async (id: string) => {
  const profileCriteria = await SQL<ProfileCriteria[]>`SELECT * FROM ${DATABASE_TABLES.PROFILE_CRITERIA} where profile_criteria_id = ${id}` // Get profileCriteria by id
  if (profileCriteria.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return profileCriteria.at(0)
}
export const CREATE_PROFILECRITERIA = async (profileCriteriaValues: ProfileCriteria) => {
  const profileCriteria = await SQL<ProfileCriteria[]>`INSERT INTO ${DATABASE_TABLES.PROFILE_CRITERIA} VALUES ${SQL(profileCriteriaValues)} returning *` // Create profileCriteria
  if (profileCriteria.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return profileCriteriaValues
}
export const EDIT_PROFILECRITERIA_BY_ID = async (id: string, profileCriteriaValues: ProfileCriteria) => {
  const profileCriteria = await SQL<ProfileCriteria[]>`UPDATE ${DATABASE_TABLES.PROFILE_CRITERIA} SET ${SQL(profileCriteriaValues)} where profile_criteria_id = ${id} returning *` // Update profileCriteria by id
  if (profileCriteria.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return profileCriteria
}
export const DELETE_PROFILECRITERIA_BY_ID = async (id: string) => {
  const profileCriteria = await SQL<ProfileCriteria[]>`DELETE FROM ${DATABASE_TABLES.PROFILE_CRITERIA} where profile_criteria_id = ${id} returning *` // Delete profileCriteria by id
  if (profileCriteria.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return profileCriteria
}