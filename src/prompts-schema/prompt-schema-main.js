import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE, (2- PASSWORD ou (3- CALCULAR TAXA DE ENTREGA"
    ),
    pattern: /^[1-2-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1, 2 ou 3"),
    required: true,
  },
];

export default promptSchemaMain;
