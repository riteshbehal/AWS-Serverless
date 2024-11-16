module.exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    // Check if event.body exists and is not empty before parsing
    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Request body is missing or empty"
            })
        };
    }
  
    let payload;
    try {
        // Try parsing the body
        payload = JSON.parse(event.body);
    } catch (error) {
        // If parsing fails, return an error response
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Invalid JSON format in request body",
                details: error.message
            })
        };
    }
    
    let result = 0;
    try {
        if (payload.a === undefined || payload.b === undefined || payload.op === undefined) {
            throw new Error(`event should have properties a, b, and op: "${JSON.stringify(payload)}"`);
        }
  
        switch (payload.op) {
            case "+":
                result = payload.a + payload.b;
                break;
            case "-":
                result = payload.a - payload.b;
                break;
            case "*":
                result = payload.a * payload.b;
                break;
            case "/":
                result = payload.b === 0 ? NaN : payload.a / payload.b;
                break;
            default:
                throw new Error(`Unsupported operation: ${payload.op}`);
        }
        console.log('Result is : ', result);
    } catch (error) {
        console.error(error);
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Error processing the request",
                details: error.message
            }),
        };
    }
  
    return {
        statusCode: 200,
        body: JSON.stringify({
            processed: true,
            result: result
        }),
    };
};
