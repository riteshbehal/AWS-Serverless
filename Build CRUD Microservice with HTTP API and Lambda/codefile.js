// Use ES Module (ESM) syntax to define the handler
export const handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));  // Log incoming event for debugging
  let body;

  try {
      // Switch based on the route key to determine the operation
      switch (event.routeKey) {
          case "GET /product":
              body = `Processing Get All Products`;  // Handle GET request to fetch all products
              break;
          case "GET /product/{id}":
              if(event.pathParameters != null) {
                  body = `Processing Get Product Id with "${event.pathParameters.id}"`;  // Handle GET request for a specific product by ID
              }
              break;
          case "POST /product":
              let payload = JSON.parse(event.body);  // Parse incoming JSON body for POST request
              body = `Processing Post Product Id with "${payload}"`;  // Handle POST request to create a new product
              break;
          case "DELETE /product/{id}":
              if(event.pathParameters != null) {
                  body = `Processing Delete Product Id with "${event.pathParameters.id}"`;  // Handle DELETE request for a specific product by ID
              }
              break;
          default:
              throw new Error(`Unsupported route: "${event.routeKey}"`);  // If route is not supported, throw an error
      }

      console.log(body);  // Log the body for debugging

      return {
          statusCode: 200,  // Return HTTP 200 OK for successful operations
          body: JSON.stringify({
              message: `Successfully finished operation: "${event.routeKey}"`,
              body: body
          })
      };

  } catch (e) {
      console.error(e);  // Log any error encountered
      return {
          statusCode: 400,  // Return HTTP 400 Bad Request for errors
          body: JSON.stringify({
              message: "Failed to perform operation.",
              errorMsg: e.message  // Return the error message for debugging
          })
      };
  }
};
