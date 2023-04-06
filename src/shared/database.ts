import postgres from 'postgres'
// import createError from 'http-errors';

// import { ERROR_MESSAGE } from '../shared'

export const SQL = postgres({
  host: 'localhost',                            // Postgres ip address[s] or domain name[s]
  port: 5432,                                   // Postgres server port[s]
  database: 'leads_backend_ed',                 // Name of database to connect to
  username: 'postgres',                         // Username of database user
  password: 'postgres',                         // Password of database user
})

export const DATABASE_TABLES = {
  ADDRESSES: 'addresses',
  CONSENTS: 'consents',
  LEAD_STATUS: 'lead_status',
  LEADS: 'leads',
  PROFILE_CRITERIA: 'profile_criteria',
  PROFILES: 'profiles',
  QUALIFICATIONS: 'qualifications',
  SESSIONS: 'sessions',
  THIRD_PARTY_TOKENS: 'third_party_tokens',
  UTMS: 'utms',
}

// export const GET_RECORDS = async (table: string) => {
//   try {
//     const RECORDS = await SQL`SELECT * FROM ${SQL(table)}`.catch((e) => { throw createError[500](ERROR_MESSAGE.DATABASE_ERROR) })
//     if (RECORDS.length === 0) {
//       throw createError[404](ERROR_MESSAGE.TABLE_IS_EMPTY)
//     }
//     return RECORDS
//   } catch (error) {
//     throw error;
//   }
// }

// export const GET_RECORD_BY_ID = async (table: string, id: string) => {
//   try {
//     const RECORDS = await SQL`SELECT * FROM ${SQL(table)} where ${table}_id = ${id}`.catch((e) => { throw createError[500](ERROR_MESSAGE.DATABASE_ERROR) })
//     if (RECORDS.length === 0) {
//       throw createError[404](ERROR_MESSAGE.RECORD_NOT_FOUND)
//     }
//     return RECORDS.at(0);
//   } catch (error) {
//     throw error;
//   }
// }

// export const CREATE_RECORD = async (table: string, values: object) => {
//   try {
//     const RECORDS = await SQL`INSERT INTO ${SQL(table)} VALUES ${SQL(values)} returning *`.catch((e) => { throw createError[500](ERROR_MESSAGE.DATABASE_ERROR) })
//     if (RECORDS.length === 0) {
//       throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
//     }
//     return RECORDS;
//   } catch (error) {
//     throw error;
//   }
// }

// export const UPDATE_RECORD_BY_ID = async (table: string, id: string, values: object) => {
//   try {
//     const RECORDS = await SQL`UPDATE ${SQL(table)} SET ${SQL(values)} where ${table}_id = ${id} returning *`.catch((e) => { throw createError[500](ERROR_MESSAGE.DATABASE_ERROR) })
//     if (RECORDS.length === 0) {
//       throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
//     }
//     return RECORDS;
//   } catch (error) {
//     throw error;
//   }
// }

// export const DELETE_RECORD_BY_ID = async (table: string, id: string) => {
//   try {
//     const RECORDS = await SQL`DELETE FROM ${SQL(table)} where ${table}_id = ${id} returning *`.catch((e) => { throw createError[500](ERROR_MESSAGE.DATABASE_ERROR) })
//     if (RECORDS.length === 0) {
//       throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
//     }
//     return RECORDS;
//   } catch (error) {
//     throw error;
//   }
// }