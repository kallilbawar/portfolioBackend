import { GraphQLScalarType, Kind} from "graphql";

  export const GQLDateTime =  new GraphQLScalarType({

    name: "GQLDateTime",
    description: "DateTime Scalar Type",

    parseLiteral(ast) {
        if(ast.kind === Kind.INT){
          return parseInt(ast.value, 10)
        }
        return null
    },


    parseValue(value) {
      return new Date(value);
    },

    serialize(value) {

        const date = new Date(value)

        return date.toISOString()
    },
  })

  export const GraphQLType = {
 
    GQLDateTime: GQLDateTime

  }

