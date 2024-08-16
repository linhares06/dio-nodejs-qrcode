import chalk from "chalk";

const promptSchemaDelivery = [
  {
    name: "weight",
    description: chalk.yellow("Digite o peso do pacote"),
  },
  {
    name: "distance",
    description: chalk.yellow("Digite a distance em quilômetros"),
  },
];

export default promptSchemaDelivery;
