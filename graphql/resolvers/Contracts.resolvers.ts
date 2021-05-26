import contractApi from "../../api/ContractApi";
import IOGraphQL from "../../api/IOGraphQL";

const gqlHandler = (endpointHandler) => (parent, args, context, info) => {
  const io = new IOGraphQL({
    args: args,
  });
  const response = endpointHandler(io);
  return io.writeOutput(response);
};

export const ContractsResolvers = {
  Query: {
    listContracts: gqlHandler(contractApi.listContracts),
    getContract: gqlHandler(contractApi.getContract),
  },

  Mutation: {
    createContract: gqlHandler(contractApi.createContract),
    updateContract: gqlHandler(contractApi.updateContract),
    deleteContract: gqlHandler(contractApi.deleteContract),
  },
};
