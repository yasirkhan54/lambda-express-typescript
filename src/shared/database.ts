import postgres from 'postgres'

// TODO: Move to environment variables
export const SQL = postgres({
  host: 'educationdirectory-dev.clnzezx2g6fi.us-west-2.rds.amazonaws.com',  // Postgres ip address[s] or domain name[s]
  port: 5432,                                                               // Postgres server port[s]
  database: 'leads_management',                                             // Name of database to connect to
  username: 'postgres',                                                     // Username of database user
  password: 'cm1234ed!',                                                    // Password of database user
})

export const DATABASE_TABLES = {
  LEADS: 'leads',
  LEAD_STATUS: 'lead_status',
  SESSIONS: 'sessions',
  CONSENTS: 'consents',
  THIRD_PARTY_TOKENS: 'third_party_tokens',
  UTMS: 'utms',
  PROFILES: 'profiles',
  ADDRESSES: 'addresses',
  PROFILE_CRITERIA: 'profile_criteria',
  QUALIFICATIONS: 'qualifications',
}
