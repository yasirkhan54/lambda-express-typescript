import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLBoolean } from 'graphql';

export const LeadType = new GraphQLObjectType({
  name: 'Lead',
  description: 'A lead object',
  fields: () => ({
    lead_id: { type: GraphQLFloat },
    external_lead_id: { type: GraphQLString },
    traffic_source: { type: GraphQLString },
    lead_cost: { type: GraphQLFloat },
    total_revenue: { type: GraphQLFloat },
    is_test_lead: { type: GraphQLBoolean }
  })
});