import createError from 'http-errors'
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Address } from '../models'

export const LIST_OF_ADDRESS = async () => {
  const addresses = await SQL<Address[]>`SELECT * FROM ${SQL(DATABASE_TABLES.ADDRESSES)}` // Get all addresses
  return addresses
}

export const GET_ADDRESS_BY_ID = async (id: string) => {
  const addresses = await SQL<Address[]>`SELECT * FROM ${SQL(DATABASE_TABLES.ADDRESSES)} where address_id = ${id}` // Get address by id
  if (addresses.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
  }
  return addresses.at(0)
}

export const CREATE_ADDRESS = async (address: Address) => {
  const addresses = await SQL<Address[]>`INSERT INTO ${SQL(DATABASE_TABLES.ADDRESSES)} VALUES ${SQL(address)} returning *` // Create address
  if (addresses.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return addresses
}

export const EDIT_ADDRESS_BY_ID = async (id: string, address: Address) => {
  const addresses = await SQL<Address[]>`UPDATE ${SQL(DATABASE_TABLES.ADDRESSES)} SET ${SQL(address)} where address_id = ${id} returning *` // Update address by id
  if (addresses.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return addresses
}

export const DELETE_ADDRESS_BY_ID = async (id: string) => {
  const addresses = await SQL<Address[]>`DELETE FROM ${SQL(DATABASE_TABLES.ADDRESSES)} where address_id = ${id} returning *` // Delete address by id
  if (addresses.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return addresses
}