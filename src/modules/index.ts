import { ADDRESS_PATH, ADDRESS_ROUTER } from './Address'
import { CONSENT_PATH, CONSENT_ROUTER } from './Consent'
import { LEAD_PATH, LEAD_ROUTER } from './Lead'
import { LEADSTATUS_PATH, LEADSTATUS_ROUTER } from './LeadStatus'
import { PROFILE_PATH, PROFILE_ROUTER } from './Profile'
import { PROFILECRITERIA_PATH, PROFILECRITERIA_ROUTER } from './ProfileCriteria'
import { QUALIFICATION_PATH, QUALIFICATION_ROUTER } from './Qualification'
import { SESSION_PATH, SESSION_ROUTER } from './Session'
import { THIRDPARTYTOKEN_PATH, THIRDPARTYTOKEN_ROUTER } from './ThirdPartyToken'
import { UTM_PATH, UTM_ROUTER } from './UTM'

export const MODULES_LIST = [                                     // List of all modules
  { PATH: ADDRESS_PATH, ROUTER: ADDRESS_ROUTER },                 // ADDRESS is available for GET,PUT,POST,DELETE
  { PATH: CONSENT_PATH, ROUTER: CONSENT_ROUTER },                 // CONSENT is available for GET,PUT,POST,DELETE
  { PATH: LEAD_PATH, ROUTER: LEAD_ROUTER },                       // LEAD is available for GET,PUT,POST,DELETE
  { PATH: LEADSTATUS_PATH, ROUTER: LEADSTATUS_ROUTER },           // LEADSTATUS is available for GET,PUT,POST,DELETE
  { PATH: PROFILE_PATH, ROUTER: PROFILE_ROUTER },                 // PROFILE is available for GET,PUT,POST,DELETE
  { PATH: PROFILECRITERIA_PATH, ROUTER: PROFILECRITERIA_ROUTER }, // PROFILECRITERIA is available for GET,PUT,POST,DELETE
  { PATH: QUALIFICATION_PATH, ROUTER: QUALIFICATION_ROUTER },     // QUALIFICATION is available for GET,PUT,POST,DELETE
  { PATH: SESSION_PATH, ROUTER: SESSION_ROUTER },                 // SESSION is available for GET,PUT,POST,DELETE
  { PATH: THIRDPARTYTOKEN_PATH, ROUTER: THIRDPARTYTOKEN_ROUTER }, // THIRDPARTYTOKEN is available for GET,PUT,POST,DELETE
  { PATH: UTM_PATH, ROUTER: UTM_ROUTER },                         // UTM is available for GET,PUT,POST,DELETE
]
