import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

export const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  description: 'Represents a profile associated with a lead',
  fields: () => ({
    profile_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    salutation: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_primary: { type: GraphQLString },
    phone_secondary: { type: GraphQLString },
    email: { type: GraphQLString },
  })
});
