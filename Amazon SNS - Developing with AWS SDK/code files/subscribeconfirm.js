import { SubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
    Token: "xxxxxxxxx",
    TopicArn: "arn:aws:sns:us-east-1:878893308172:new-topic",
    AuthenticateOnUnsubscribe: "true"
};

export const run = async () => {
    try {
      const data = await snsClient.send(new SubscribeCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};
run();