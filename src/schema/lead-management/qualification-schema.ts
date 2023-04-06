import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull } from 'graphql';

export const QualificationType = new GraphQLObjectType({
  name: 'Qualification',
  description: 'Represents the qualification information associated with a lead',
  fields: () => ({
    qualification_id: { type: new GraphQLNonNull(GraphQLInt) },
    profile_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    enrollment_timeline: { type: GraphQLString },
    current_edu_level: { type: GraphQLString },
    preferred_edu_level: { type: GraphQLString },
    learning_preference: { type: GraphQLString },
    is_graduated_in_us: { type: GraphQLString },
    computer_internet_access: { type: GraphQLString },
    level_of_interest: { type: GraphQLString },
    time_of_day: { type: GraphQLString },
    previously_contacted: { type: GraphQLBoolean },
  })
});
