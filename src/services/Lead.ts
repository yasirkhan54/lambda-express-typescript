import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Lead } from '../models'

export const LIST_OF_LEAD = async () => { 
  console.log('LIST_OF_LEAD')
  try {
    const leads = await SQL<Lead[]>`SELECT * FROM ${SQL(DATABASE_TABLES.LEADS)}` // Get all leads
    return leads
  } catch (error) { 
    console.log('LIST_OF_LEAD error', error)
    throw error;
  }
}

export const GET_LEAD_BY_ID = async (id: string) => { 
  const leads = await SQL<Lead[]>`SELECT * FROM ${SQL(DATABASE_TABLES.LEADS)} where lead_id = ${id}` // Get lead by id
  if (leads.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return leads.at(0)
}

export const CREATE_LEAD = async (lead: Lead) => { 
  const leads = await SQL<Lead[]>`INSERT INTO ${SQL(DATABASE_TABLES.LEADS)} VALUES ${SQL(lead)} returning *` // Create lead
  if (leads.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return leads
}

export const EDIT_LEAD_BY_ID = async (id: string, lead: Lead) => { 
  const leads = await SQL<Lead[]>`UPDATE ${SQL(DATABASE_TABLES.LEADS)} SET ${SQL(lead)} where lead_id = ${id} returning *` // Update lead by id
  if (leads.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return leads
}

export const DELETE_LEAD_BY_ID = async (id: string) => { 
  const leads = await SQL<Lead[]>`DELETE FROM ${SQL(DATABASE_TABLES.LEADS)} where lead_id = ${id} returning *` // Delete lead by id
  if (leads.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return leads
}