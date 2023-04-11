import createError from 'http-errors';
import { SQL, DATABASE_TABLES, ERROR_MESSAGE } from '../shared'
import { Lead, LeadModel } from '../models'

export const LIST_OF_LEAD = async () => {
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

export const INSERT_LEAD = async (leadModel: LeadModel) => {
  const createdLeads = await SQL<Lead[]>`INSERT INTO ${SQL(DATABASE_TABLES.LEADS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.lead)} returning *` // Create lead
  if (createdLeads.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  const lead = createdLeads.at(0)
  leadModel.lead_status.lead_id = lead.lead_id;
  leadModel.session.lead_id = lead.lead_id;
  leadModel.consent.lead_id = lead.lead_id;
  leadModel.third_party_token.lead_id = lead.lead_id;
  leadModel.utm.lead_id = lead.lead_id;
  leadModel.profileModel.profile.lead_id = lead.lead_id;
  leadModel.profileModel.profile_criteria.lead_id = lead.lead_id;
  leadModel.profileModel.qualification.lead_id = lead.lead_id;

  const result = await SQL.begin(SQL => [ // Create lead
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.LEAD_STATUS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.lead_status)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.SESSIONS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.session)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.CONSENTS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.consent)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.third_party_token)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.UTMS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.utm)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.PROFILES)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.profileModel.profile)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.ADDRESSES)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.profileModel.address)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.PROFILE_CRITERIA)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.profileModel.profile_criteria)}`,
    SQL`INSERT INTO ${SQL(DATABASE_TABLES.QUALIFICATIONS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(leadModel.profileModel.qualification)}`,
  ]) // Create lead

  return result
}

export const CREATE_LEAD = async (lead: Lead) => {
  const leads = await SQL<Lead[]>`INSERT INTO ${SQL(DATABASE_TABLES.LEADS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(lead)} returning *` // Create lead
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