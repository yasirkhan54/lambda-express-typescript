import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

export const UTMType = new GraphQLObjectType({
  name: 'UTM',
  description: 'Represents the UTM parameters associated with a lead',
  fields: () => ({
    utm_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    source: { type: GraphQLString },
    medium: { type: GraphQLString },
    campaign: { type: GraphQLString },
    content: { type: GraphQLString },
    term: { type: GraphQLString },
    supplier_id: { type: GraphQLString },
    sub_id: { type: GraphQLString },
    ad_id: { type: GraphQLString },
  })
});
