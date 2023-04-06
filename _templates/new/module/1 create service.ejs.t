---
to: src/services/<%= name %>.ts
unless_exists: true
---
import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { <%= Name %> } from '../models'

export const LIST_OF_LEAD = async () => { 
  try {
    const <%= name %>s = await SQL<<%= Name %>[]>`SELECT * FROM ${SQL(DATABASE_TABLES.LEADS)}` // Get all <%= name %>s
    return <%= name %>s
  } catch (error) { 
    console.log('LIST_OF_LEAD error', error)
    throw error;
  }
}

export const GET_LEAD_BY_ID = async (id: string) => { 
  const <%= name %>s = await SQL<<%= Name %>[]>`SELECT * FROM ${SQL(DATABASE_TABLES.LEADS)} where lead_id = ${id}` // Get <%= name %> by id
  if (<%= name %>s.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return <%= name %>s.at(0)
}

export const CREATE_LEAD = async (<%= name %>: <%= Name %>) => { 
  const <%= name %>s = await SQL<<%= Name %>[]>`INSERT INTO ${SQL(DATABASE_TABLES.LEADS)} VALUES ${SQL(<%= name %>)} returning *` // Create <%= name %>
  if (<%= name %>s.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return <%= name %>s
}

export const EDIT_LEAD_BY_ID = async (id: string, <%= name %>: <%= Name %>) => { 
  const <%= name %>s = await SQL<<%= Name %>[]>`UPDATE ${SQL(DATABASE_TABLES.LEADS)} SET ${SQL(<%= name %>)} where lead_id = ${id} returning *` // Update <%= name %> by id
  if (<%= name %>s.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return <%= name %>s
}

export const DELETE_LEAD_BY_ID = async (id: string) => { 
  const <%= name %>s = await SQL<<%= Name %>[]>`DELETE FROM ${SQL(DATABASE_TABLES.LEADS)} where lead_id = ${id} returning *` // Delete <%= name %> by id
  if (<%= name %>s.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return <%= name %>s
}