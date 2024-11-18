import { SNSClient } from "@aws-sdk/client-sns";
const REGION = "us-east-1";
const snsClient = new SNSClient({ region: REGION });
export { snsClient };