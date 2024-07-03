import Mutation from "./mutations.js";
import Query from "./queries.js";
import { Resolvers } from "../__graphql_generated__/resolvers-types";

const resolvers: Resolvers = { Query, Mutation };

export default resolvers;
