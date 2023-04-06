import { GraphQLObjectType, GraphQLID, GraphQLSchema } from 'graphql';
import { LeadType } from '../../schema'

const rootQueryLead = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root Query',
  fields: {
    lead: {
      type: LeadType,
      description: 'A single lead',
      args: {
        lead_id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return LEADS.find(lead => lead.lead_id == args.lead_id);
      }
    }
  }
});

export const ROOT_QUERY_LEAD = new GraphQLSchema({
  query: rootQueryLead
})

const LEADS = [
  {
    "lead_id": 1,
    "external_lead_id": "abcd1234",
    "traffic_source": "Google Ads",
    "lead_cost": 10.50,
    "total_revenue": 100.00,
    "is_test_lead": false
  },
  {
    "lead_id": 2,
    "external_lead_id": "efgh5678",
    "traffic_source": "Facebook Ads",
    "lead_cost": 8.20,
    "total_revenue": 75.50,
    "is_test_lead": true
  },
  {
    "lead_id": 3,
    "external_lead_id": "ijkl9101",
    "traffic_source": "Organic Search",
    "lead_cost": 12.75,
    "total_revenue": 150.25,
    "is_test_lead": false
  }
]
