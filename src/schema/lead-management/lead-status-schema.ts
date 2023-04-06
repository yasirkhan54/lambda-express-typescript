import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export const LeadStatusType = new GraphQLObjectType({
  name: 'LeadStatus',
  description: 'Represents the status of a lead',
  fields: () => ({
    lead_status_id: { type: new GraphQLNonNull(GraphQLInt) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    api_response_json: { type: new GraphQLNonNull(new GraphQLScalarType(JSON.stringify)) },
    original_status: { type: new GraphQLNonNull(GraphQLString) },
    current_status: { type: new GraphQLNonNull(GraphQLString) },
    status_update_timestamp: { type: new GraphQLNonNull(GraphQLDateTime) },
    reject_reason: { type: GraphQLString },
  })
});
