import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } from 'graphql';
import {
  AddressType,
  ConsentType,
  LeadStatusType,
  LeadType,
  ProfileCriteriaType,
  ProfileType,
  QualificationType,
  SessionType,
  ThirdPartyTokenType,
  UTMType
} from '../../schema'

const rootQueryLead = new GraphQLObjectType({
  name: 'RootQueryLead',
  description: 'Root Query',
  fields: {
    address: {
      type: AddressType,
      description: 'A single address',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return addressData.find(address => address.address_id == args.id);
      }
    },
    addresses: {
      type: new GraphQLList(AddressType),
      description: 'List of addresses',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return addressData;
      }
    },
    consent: {
      type: ConsentType,
      description: 'A single consent',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return consentData.find(consent => consent.consent_id == args.id);
      }
    },
    consents: {
      type: new GraphQLList(ConsentType),
      description: 'List of consents',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return consentData;
      }
    },
    leadStatus: {
      type: LeadStatusType,
      description: 'A single lead status',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return leadStatusData.find(leadStatus => leadStatus.lead_status_id == args.id);
      }
    },
    leadStatuses: {
      type: new GraphQLList(LeadStatusType),
      description: 'List of lead statuses',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return leadStatusData;
      }
    },
    lead: {
      type: LeadType,
      description: 'A single lead',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return leadData.find(lead => lead.lead_id == args.id);
      }
    },
    leads: {
      type: new GraphQLList(LeadType),
      description: 'List of leads',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return leadData;
      }
    },
    profileCriteria: {
      type: ProfileCriteriaType,
      description: 'A single profile criteria',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return profileCriteriaTestData.find(profileCriteria => profileCriteria.profile_criteria_id == args.id);
      }
    },
    profileCriterias: {
      type: new GraphQLList(ProfileCriteriaType),
      description: 'List of profile criterias',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return profileCriteriaTestData;
      }
    },
    profile: {
      type: ProfileType,
      description: 'A single profile',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return profileTestData.find(profile => profile.profile_id == args.id);
      }
    },
    profiles: {
      type: new GraphQLList(ProfileType),
      description: 'List of profiles',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return profileTestData;
      }
    },
    qualification: {
      type: QualificationType,
      description: 'A single qualification',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return qualificationTestData.find(qualification => qualification.qualification_id == args.id);
      }
    },
    qualifications: {
      type: new GraphQLList(QualificationType),
      description: 'List of qualifications',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return qualificationTestData;
      }
    },
    session: {
      type: SessionType,
      description: 'A single session',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return sessionTestData.find(session => session.session_id == args.id);
      }
    },
    sessions: {
      type: new GraphQLList(SessionType),
      description: 'List of sessions',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return sessionTestData;
      }
    },
    thirdPartyToken: {
      type: ThirdPartyTokenType,
      description: 'A single third party token',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return thirdPartyTokenTestData.find(thirdPartyToken => thirdPartyToken.third_party_tokens_id == args.id);
      }
    },
    thirdPartyTokens: {
      type: new GraphQLList(ThirdPartyTokenType),
      description: 'List of third party tokens',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return thirdPartyTokenTestData;
      }
    },
    utm: {
      type: UTMType,
      description: 'A single utm',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return utmTestData.find(utm => utm.utm_id == args.id);
      }
    },
    utms: {
      type: new GraphQLList(UTMType),
      description: 'List of utms',
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return utmTestData;
      }
    }
  }
});

export const ROOT_QUERY_LEAD = new GraphQLSchema({
  query: rootQueryLead
})

// Test Data 

const addressData = [
  {
    address_id: 1,
    profile_id: 1,
    address_line_one: '123 Main St',
    address_line_two: 'Apt 456',
    city: 'Anytown',
    state: 'CA',
    zip_code: '12345',
  },
  {
    address_id: 2,
    profile_id: 2,
    address_line_one: '456 Elm St',
    address_line_two: null,
    city: 'Othertown',
    state: 'NY',
    zip_code: '67890',
  },
];

const consentData = [
  {
    consent_id: 1,
    lead_id: 123,
    tcpa_timestamp_traffic: '2022-03-15T13:20:00.000Z',
    tcpa_timestamp_marketing: '2022-03-15T13:21:00.000Z',
    tcpa_text_traffic: 'I agree to receive SMS and calls',
    tcpa_timestamp_client: '2022-03-15T13:22:00.000Z',
  },
  {
    consent_id: 2,
    lead_id: 456,
    tcpa_timestamp_traffic: '2022-03-16T14:20:00.000Z',
    tcpa_timestamp_marketing: '2022-03-16T14:21:00.000Z',
    tcpa_text_traffic: 'I agree to receive SMS',
    tcpa_timestamp_client: '2022-03-16T14:22:00.000Z',
  },
];

const leadStatusData = [
  {
    lead_status_id: 1,
    type: 'status type 1',
    lead_id: 123,
    api_response_json: { key1: 'value1', key2: 'value2' },
    original_status: 'original status 1',
    current_status: 'current status 1',
    status_update_timestamp: '2022-03-15T13:20:00.000Z',
    reject_reason: 'reject reason 1',
  },
  {
    lead_status_id: 2,
    type: 'status type 2',
    lead_id: 456,
    api_response_json: { key1: 'value1', key2: 'value2' },
    original_status: 'original status 2',
    current_status: 'current status 2',
    status_update_timestamp: '2022-03-16T14:20:00.000Z',
    reject_reason: 'reject reason 2',
  },
];

const leadData = [
  {
    lead_id: 123,
    created_at: '2022-03-14T12:30:00.000Z',
    updated_at: '2022-03-15T14:30:00.000Z',
    campaign_id: 1,
    source_id: 1,
    sub_id: 'sub id 1',
    ad_id: 'ad id 1',
    user_agent: 'user agent 1',
    browser_language: 'browser language 1',
    os: 'os 1',
    browser: 'browser 1',
    device: 'device 1',
    ip_address: '123.45.67.89',
    user_id: 1,
  },
  {
    lead_id: 456,
    created_at: '2022-03-15T13:30:00.000Z',
    updated_at: '2022-03-16T15:30:00.000Z',
    campaign_id: 2,
    source_id: 2,
    sub_id: 'sub id 2',
    ad_id: 'ad id 2',
    user_agent: 'user agent 2',
    browser_language: 'browser language 2',
    os: 'os 2',
    browser: 'browser 2',
    device: 'device 2',
    ip_address: '123.45.67.90',
    user_id: 2,
  },
];

const profileCriteriaTestData = [
  {
    profile_criteria_id: 1,
    lead_id: 123,
    age: 25,
    gender: "Male",
    is_us_citizen: true,
    is_us_military: false,
    military_status: null,
    military_branch: null,
    high_school_graduation_year: 2015
  },
  {
    profile_criteria_id: 2,
    lead_id: 456,
    age: 30,
    gender: "Female",
    is_us_citizen: true,
    is_us_military: true,
    military_status: "Veteran",
    military_branch: "Army",
    high_school_graduation_year: 2008
  }
];

const profileTestData = [
  {
    profile_id: 1,
    lead_id: 123,
    salutation: "Mr.",
    first_name: "John",
    last_name: "Doe",
    phone_primary: "123-456-7890",
    phone_secondary: null,
    email: "johndoe@example.com"
  },
  {
    profile_id: 2,
    lead_id: 456,
    salutation: "Ms.",
    first_name: "Jane",
    last_name: "Doe",
    phone_primary: "555-555-5555",
    phone_secondary: "777-777-7777",
    email: "janedoe@example.com"
  }
];

const qualificationTestData = [
  {
    qualification_id: 1,
    profile_id: 1,
    lead_id: 123,
    enrollment_timeline: "3 months",
    current_edu_level: "High School",
    preferred_edu_level: "Bachelor's Degree",
    learning_preference: "Online",
    is_graduated_in_us: "Yes",
    computer_internet_access: "Yes",
    level_of_interest: "High",
    time_of_day: "Morning",
    previously_contacted: false
  },
  {
    qualification_id: 2,
    profile_id: 2,
    lead_id: 456,
    enrollment_timeline: "6 months",
    current_edu_level: "Associate's Degree",
    preferred_edu_level: "Master's Degree",
    learning_preference: "In-person",
    is_graduated_in_us: "No",
    computer_internet_access: "Yes",
    level_of_interest: "Low",
    time_of_day: "Evening",
    previously_contacted: true
  }
];

const sessionTestData = [
  {
    session_id: 789,
    lead_id: 123,
    ip: "192.168.1.1",
    web_url: "https://example.com",
    traffic_brand_name: "Example Brand",
    traffic_source_detail: "Google search",
    traffic_source_type: "organic",
    web_access_key: "abc123",
    web_session_id: "xyz456",
    landing_page: "/home",
    device_type: "desktop",
  },
  {
    session_id: 321,
    lead_id: 456,
    ip: "192.168.1.2",
    web_url: "https://example.org",
    traffic_brand_name: "Another Brand",
    traffic_source_detail: "Social media",
    traffic_source_type: "paid",
    web_access_key: "def789",
    web_session_id: "uvw987",
    landing_page: "/contact",
    device_type: "mobile",
  },
];

const thirdPartyTokenTestData = [
  {
    third_party_tokens_id: 101,
    lead_id: 123,
    traffic_jornaya_lead_id: "jornaya-123",
    traffic_trusted_form_url: "https://trustedform.com/form123",
    traffic_trustedform_token: "token123",
  },
  {
    third_party_tokens_id: 102,
    lead_id: 456,
    traffic_jornaya_lead_id: "jornaya-456",
    traffic_trusted_form_url: "https://trustedform.com/form456",
    traffic_trustedform_token: "token456",
  },
];

const utmTestData = [
  {
    utm_id: 201,
    lead_id: 123,
    source: "google",
    medium: "cpc",
    campaign: "summer_campaign",
    content: "ad_copy_1",
    term: "summer_camp",
    supplier_id: "supplier_1",
    sub_id: "sub_1",
    ad_id: "ad_1",
  },
  {
    utm_id: 202,
    lead_id: 456,
    source: "facebook",
    medium: "social",
    campaign: "fall_campaign",
    content: "ad_copy_2",
    term: "fall_camp",
    supplier_id: "supplier_2",
    sub_id: "sub_2",
    ad_id: "ad_2",
  },
];
