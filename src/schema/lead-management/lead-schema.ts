import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLBoolean } from 'graphql';
import { ProfileType } from './profile-schema';
import { LeadStatusType } from './lead-status-schema';
import { SessionType } from './session-schema';
import { ConsentType } from './consent-schema';
import { ThirdPartyTokenType } from './third-party-token-schema';
import { UTMType } from './utm-schema';

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

export const LeadType = new GraphQLObjectType({
  name: 'Lead',
  description: 'A lead object',
  fields: () => ({
    lead_id: { type: GraphQLFloat },
    external_lead_id: { type: GraphQLString },
    traffic_source: { type: GraphQLString },
    lead_cost: { type: GraphQLFloat },
    total_revenue: { type: GraphQLFloat },
    is_test_lead: { type: GraphQLBoolean },

    profile: {
      type: ProfileType,
      resolve(parent, args) {
        return profileTestData.find(profile => profile.lead_id == parent.lead_id);
      }
    },
    leadStatus: {
      type: LeadStatusType,
      resolve(parent, args) {
        return profileTestData.find(profile => profile.lead_id == parent.lead_id);
      }
    },
    sessoin: {
      type: SessionType,
      resolve(parent, args) {
        return profileTestData.find(profile => profile.lead_id == parent.lead_id);
      }
    },
    consent: {
      type: ConsentType,
      resolve(parent, args) {
        return profileTestData.find(profile => profile.lead_id == parent.lead_id);
      }
    },
    thirdPartyToken: {
      type: ThirdPartyTokenType,
      resolve(parent, args) {
        return profileTestData.find(profile => profile.lead_id == parent.lead_id);
      }
    },
    utm: {
      type: UTMType,
      resolve(parent, args) {
        return profileTestData.find(profile => profile.lead_id == parent.lead_id);
      }
    }
  })
});