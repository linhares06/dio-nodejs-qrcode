import prompt from "prompt";
import promptSchemaDelivery from "../../prompts-schema/prompt-schema-deliveryfee.js";
import handle from "./handle.js";

async function createDeliveryFee() {
  prompt.get(promptSchemaDelivery, handle);
  prompt.start();
}

export default createDeliveryFee;