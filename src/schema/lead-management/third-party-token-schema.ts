import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

export const ThirdPartyTokenType = new GraphQLObjectType({
  name: 'ThirdPartyToken',
  description: 'Represents a third party token associated with a lead',
  fields: () => ({
    third_party_tokens_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    traffic_jornaya_lead_id: { type: GraphQLString },
    traffic_trusted_form_url: { type: GraphQLString },
    traffic_trustedform_token: { type: GraphQLString },
  })
});
