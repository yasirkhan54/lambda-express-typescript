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

  const [LEAD, LEAD_STATUS, SESSION, CONSENT, THIRD_PARTY_TOKENS, UTMS, PROFILE, ADDRESSES, PROFILE_CRITERIA, QUALIFICATIONS] = await SQL.begin(async SQL => {

    // lead creation
    const [LEAD] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.LEADS)} ${SQL(leadModel.lead, 'external_lead_id', 'traffic_source', 'lead_cost', 'total_revenue', 'is_test_lead')} returning *`;

    // lead status creation
    leadModel.leadStatus.lead_id = LEAD.lead_id;
    const [LEAD_STATUS] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.LEAD_STATUS)} ${SQL(leadModel.leadStatus, 'lead_id', 'api_response_json', 'original_status', 'current_status', 'status_update_timestamp', 'reject_reason')} returning *`;

    // session creation
    leadModel.session.lead_id = LEAD.lead_id;
    const [SESSION] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.SESSIONS)} ${SQL(leadModel.session, 'lead_id', 'ip', 'web_url', 'traffic_brand_name', 'traffic_source_detail', 'traffic_source_type', 'web_access_key', 'web_session_id', 'landing_page', 'device_type')} returning *`;

    // consent creation
    leadModel.consent.lead_id = LEAD.lead_id;
    const [CONSENT] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.CONSENTS)} ${SQL(leadModel.consent, 'lead_id', 'tcpa_timestamp_traffic', 'tcpa_timestamp_marketing', 'tcpa_text_traffic', 'tcpa_timestamp_client')} returning *`;

    // third party token creation
    leadModel.thirdPartyToken.lead_id = LEAD.lead_id;
    const [THIRD_PARTY_TOKENS] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.THIRD_PARTY_TOKENS)} ${SQL(leadModel.thirdPartyToken, 'lead_id', 'traffic_jornaya_lead_id', 'traffic_trusted_form_url', 'traffic_trustedform_token')} returning *`;

    // utm creation
    leadModel.utm.lead_id = LEAD.lead_id;
    const [UTMS] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.UTMS)} ${SQL(leadModel.utm, 'lead_id', 'source', 'medium', 'campaign', 'content', 'term', 'supplier_id', 'sub_id', 'ad_id')} returning *`;

    // profile creation
    leadModel.profile.lead_id = LEAD.lead_id;
    const [PROFILE] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.PROFILES)} ${SQL(leadModel.profile, 'lead_id', 'salutation', 'first_name', 'last_name', 'phone_primary', 'phone_secondary', 'email')} returning *`;

    // address creation
    leadModel.address.profile_id = PROFILE.profile_id;
    const [ADDRESSES] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.ADDRESSES)} ${SQL(leadModel.address, 'profile_id', 'address_line_one', 'address_line_two', 'city', 'state', 'zip_code')} returning *`

    // profile criteria creation
    leadModel.profileCriteria.lead_id = LEAD.lead_id;
    const [PROFILE_CRITERIA] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.PROFILE_CRITERIA)} ${SQL(leadModel.profileCriteria, 'lead_id', 'age', 'gender', 'is_us_citizen', 'is_us_military', 'military_status', 'military_branch', 'high_school_graduation_year')} returning *`

    // qualification creation
    leadModel.qualification.lead_id = LEAD.lead_id;
    leadModel.qualification.profile_id = PROFILE.profile_id;
    const [QUALIFICATIONS] = await SQL`INSERT INTO ${SQL(DATABASE_TABLES.QUALIFICATIONS)} ${SQL(leadModel.qualification, 'profile_id', 'lead_id', 'enrollment_timeline', 'current_edu_level', 'preferred_edu_level', 'learning_preference', 'is_graduated_in_us', 'computer_internet_access', 'level_of_interest', 'time_of_day', 'previously_contacted')} returning *`

    return [LEAD, LEAD_STATUS, SESSION, CONSENT, THIRD_PARTY_TOKENS, UTMS, PROFILE, ADDRESSES, PROFILE_CRITERIA, QUALIFICATIONS]
  })

  //  response data
  return {
    lead: LEAD,
    leadStatus: LEAD_STATUS,
    session: SESSION,
    consent: CONSENT,
    thirdPartyToken: THIRD_PARTY_TOKENS,
    utm: UTMS,
    profile: PROFILE,
    address: ADDRESSES,
    profileCriteria: PROFILE_CRITERIA,
    qualification: QUALIFICATIONS,
  }
}

export const CREATE_LEAD = async (lead: Lead) => {
  const leads = await SQL<Lead[]>`INSERT INTO ${SQL(DATABASE_TABLES.LEADS)} (external_lead_id, traffic_source, lead_cost, total_revenue, is_test_lead) VALUES ${SQL(lead)} returning *` // Create lead
  if (leads.length === 0) {
    throw createError[500](ERROR_MESSAGE.RECORD_NOT_CREATED)
  }
  return leads.at(0)
}

export const EDIT_LEAD_BY_ID = async (id: string, lead: Lead) => {
  const leads = await SQL<Lead[]>`UPDATE ${SQL(DATABASE_TABLES.LEADS)} SET ${SQL(lead)} where lead_id = ${id} returning *` // Update lead by id
  if (leads.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_UPDATED)
  }
  return leads.at(0)
}

export const DELETE_LEAD_BY_ID = async (id: string) => {
  const leads = await SQL<Lead[]>`DELETE FROM ${SQL(DATABASE_TABLES.LEADS)} where lead_id = ${id} returning *` // Delete lead by id
  if (leads.length === 0) {
    throw createError[404](ERROR_MESSAGE.RECORD_NOT_DELETE)
  }
  return leads.at(0)
}