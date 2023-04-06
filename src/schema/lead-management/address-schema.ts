import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

export const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: 'Represents the address information associated with a lead',
  fields: () => ({
    address_id: { type: new GraphQLNonNull(GraphQLInt) },
    profile_id: { type: new GraphQLNonNull(GraphQLInt) },
    address_line_one: { type: GraphQLString },
    address_line_two: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip_code: { type: GraphQLString },
  })
});
