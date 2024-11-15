First read the document for better understanding. 
Create the lambda function. 
Create function URL also enable CORS. 
Then update the code to generate cloudwatch events. use the below the line and add this in your default code. 

console.log("EVENT: \n" + JSON.stringify(event, null, 2));

Then update your code to use the GET method and invoke your function. 

export const handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  
  const method = event.requestContext.http.method;
  const queryParam = event.queryStringParameters.message;
  console.log(`Received ${method} request with ${queryParam}`);

  const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello from ${queryParam}`),
  };
  return response;
};


Finally use the index.js file and update your code to use the POST method and use the single calculator microservice. 