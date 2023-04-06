import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Profile } from 'src/models'

export const LIST_OF_PROFILE = async () => {
  const profiles = await SQL<Profile[]>`SELECT * FROM ${DATABASE_TABLES.PROFILES}` // Get all profiles
  return profiles
}
export const GET_PROFILE_BY_ID = async (id: string) => {
  const profiles = await SQL<Profile[]>`SELECT * FROM ${DATABASE_TABLES.PROFILES} where profile_id = ${id}` // Get profile by id
  if (profiles.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return profiles.at(0)
}
export const CREATE_PROFILE = async (profile: Profile) => {
  const profiles = await SQL<Profile[]>`INSERT INTO ${DATABASE_TABLES.PROFILES} VALUES ${SQL(profile)} returning *` // Create profile
  if (profiles.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return profiles
}
export const EDIT_PROFILE_BY_ID = async (id: string, profile: Profile) => {
  const profiles = await SQL<Profile[]>`UPDATE ${DATABASE_TABLES.PROFILES} SET ${SQL(profile)} where profile_id = ${id} returning *` // Update profile by id
  if (profiles.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return profiles
}
export const DELETE_PROFILE_BY_ID = async (id: string) => {
  const profiles = await SQL<Profile[]>`DELETE FROM ${DATABASE_TABLES.PROFILES} where profile_id = ${id} returning *` // Delete profile by id
  if (profiles.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return profiles
}