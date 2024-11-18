import { SubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

const params = {
    Protocol: "email",
    TopicArn: "arn:aws:sns:us-east-1:878893308172:new-topic",
    Endpoint: "tegivej747@gitated.com"
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