import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { LeadStatus } from '../models'

export const LIST_OF_LEADSTATUS = async () => {
  const leadStatuses = await SQL<LeadStatus[]>`SELECT * FROM ${SQL(DATABASE_TABLES.LEAD_STATUS)}` // Get all lead status
  return leadStatuses
}
export const GET_LEADSTATUS_BY_ID = async (id: string) => {
  const leadStatuses = await SQL<LeadStatus[]>`SELECT * FROM ${SQL(DATABASE_TABLES.LEAD_STATUS)} where lead_status_id = ${id}` // Get lead status by id
  if (leadStatuses.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return leadStatuses.at(0)
}
export const CREATE_LEADSTATUS = async (leadStatus: LeadStatus) => {
  const leadStatuses = await SQL<LeadStatus[]>`INSERT INTO ${SQL(DATABASE_TABLES.LEAD_STATUS)} (lead_id, api_response_json, original_status, current_status, status_update_timestamp, reject_reason, type) VALUES ${SQL(leadStatus)} returning *` // Create lead status
  if (leadStatuses.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return leadStatuses
}
export const EDIT_LEADSTATUS_BY_ID = async (id: string, leadStatus: LeadStatus) => {
  const leadStatuses = await SQL<LeadStatus[]>`UPDATE ${SQL(DATABASE_TABLES.LEAD_STATUS)} SET ${SQL(leadStatus)} where lead_status_id = ${id} returning *` // Update lead status by id
  if (leadStatuses.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return leadStatuses
}
export const DELETE_LEADSTATUS_BY_ID = async (id: string) => {
  const leadStatuses = await SQL<LeadStatus[]>`DELETE FROM ${SQL(DATABASE_TABLES.LEAD_STATUS)} where lead_status_id = ${id} returning *` // Delete lead status by id
  if (leadStatuses.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return leadStatuses
}