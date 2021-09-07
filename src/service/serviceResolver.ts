export const ServiceResolvers = {
  Query: {
    getAllUsers: async (_: any, __: any) => [{ name: "xyz" }, { name: "abc" }],
  },
};
