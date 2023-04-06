import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

export const SessionType = new GraphQLObjectType({
  name: 'Session',
  description: 'Represents a session of a lead',
  fields: () => ({
    session_id: { type: new GraphQLNonNull(GraphQLInt) },
    lead_id: { type: new GraphQLNonNull(GraphQLInt) },
    ip: { type: new GraphQLNonNull(GraphQLString) },
    web_url: { type: new GraphQLNonNull(GraphQLString) },
    traffic_brand_name: { type: GraphQLString },
    traffic_source_detail: { type: GraphQLString },
    traffic_source_type: { type: GraphQLString },
    web_access_key: { type: GraphQLString },
    web_session_id: { type: GraphQLString },
    landing_page: { type: GraphQLString },
    device_type: { type: GraphQLString },
  })
});
