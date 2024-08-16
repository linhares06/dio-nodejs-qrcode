import chalk from "chalk";
import calculateShippingCost from "./utils/calculate-shipping-cost.js";

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }

  console.log(chalk.green("Taxa de entrega:\n"));

  const totalCost = await calculateShippingCost(result);
  console.log(`Custo total: R$ ${totalCost}`); // return cost with 2 decimal places
}

export default handle;
