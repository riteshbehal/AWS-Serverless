import { UnsubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {    
    SubscriptionArn: "arn:aws:sns:us-east-1:878893308172:new-topic:5359daa1-e8bb-4570-a5a0-9b5e1a77dfbc"    
};

export const run = async () => {
    try {
      const data = await snsClient.send(new UnsubscribeCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();