import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

export const ConsentType = new GraphQLObjectType({
  name: 'Consent',
  description: 'Represents the consent given by a lead',
  fields: () => ({
    consent_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    tcpa_timestamp_traffic: { type: GraphQLString },
    tcpa_timestamp_marketing: { type: GraphQLString },
    tcpa_text_traffic: { type: GraphQLString },
    tcpa_timestamp_client: { type: GraphQLString },
  })
});
