import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Session } from 'src/models'

export const LIST_OF_SESSION = async () => {
  const sessions = await SQL<Session[]>`SELECT * FROM ${SQL(DATABASE_TABLES.SESSIONS)}` // Get all sessions
  return sessions
}
export const GET_SESSION_BY_ID = async (id: string) => {
  const sessions = await SQL<Session[]>`SELECT * FROM ${SQL(DATABASE_TABLES.SESSIONS)} where session_id = ${id}` // Get session by id
  if (sessions.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return sessions.at(0)
}
export const CREATE_SESSION = async (session: Session) => {
  const sessions = await SQL<Session[]>`INSERT INTO ${SQL(DATABASE_TABLES.SESSIONS)} (lead_id, ip, web_url, traffic_brand_name, traffic_source_detail, traffic_source_type, web_access_key, web_session_id, landing_page, device_type) VALUES ${SQL(session)} returning *` // Create session
  if (sessions.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return sessions
}
export const EDIT_SESSION_BY_ID = async (id: string, session: Session) => {
  const sessions = await SQL<Session[]>`UPDATE ${SQL(DATABASE_TABLES.SESSIONS)} SET ${SQL(session)} where session_id = ${id} returning *` // Update session by id
  if (sessions.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return sessions
}
export const DELETE_SESSION_BY_ID = async (id: string) => {
  const sessions = await SQL<Session[]>`DELETE FROM ${SQL(DATABASE_TABLES.SESSIONS)} where session_id = ${id} returning *` // Delete session by id
  if (sessions.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return sessions
}