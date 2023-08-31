import { StackContext, Api, AstroSite, Table } from "sst/constructs";

export function API({ stack }: StackContext) {
  // Create the table
  const table = new Table(stack, "Bangerz", {
    fields: {
      // TODO: create a Table according to Song Interface
      // https://sst.dev/chapters/create-a-dynamodb-table-in-sst.html
    },
    primaryIndex: { partitionKey: "" }, // TODO: create a nice and unique partition key (title)
  });
  // Create the HTTP API
  const api = new Api(stack, "Api", {
    // TODO: Cors is not working nd I don't know why, it doesn't even matter how hard I try
    // https://sst.dev/chapters/handle-cors-in-serverless-apis.html
    defaults: {
      function: {
        // TODO: Bind the table to our API to allow iam access etc
        // https://docs.sst.dev/resource-binding
        bind: [],
        runtime: "nodejs18.x",
        timeout: 120,
        nodejs: {
          esbuild: {
            loader: {
              ".node": "file",
            }
          }
        },
      },
    },
    routes: {
      // lambda is the name of the file and init is the name of the exported APiHandler Method written in NodeJS.
      "POST /init": "packages/functions/src/lambda.init",
      // TODO: Create two Get Methods to use the Lambdas in functions/src
    },
  });
  // Deploy our React app
  const site = new AstroSite(stack, "BangerDerNeunziger", {
    path: "packages/frontend",
    buildCommand: "yarn astro build",
    environment: {
      ASTRO_PUBLIC_API_URL: api.url,
    }
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });

}
