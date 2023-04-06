import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull } from 'graphql';

export const ProfileCriteriaType = new GraphQLObjectType({
  name: 'ProfileCriteria',
  description: 'Represents the profile criteria information associated with a lead',
  fields: () => ({
    profile_criteria_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    is_us_citizen: { type: GraphQLBoolean },
    is_us_military: { type: GraphQLBoolean },
    military_status: { type: GraphQLString },
    military_branch: { type: GraphQLString },
    high_school_graduation_year: { type: GraphQLInt },
  })
});
