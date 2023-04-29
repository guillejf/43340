const fs = require("fs");

async function cosasAsincronas() {
  await fs.promises.unlink("test.txt");
  await fs.promises.writeFile("test.txt", "");

  const contenidoInicial = await fs.promises.readFile("test.txt", "utf-8");
  console.log("contenido inicial del archivo");
  console.log(contenidoInicial);

  const arrayPersonas = [
    {
      nombre: "Juan",
      apellido: "Perez",
    },
    {
      nombre: "monica",
      apellido: "Algo",
    },
  ];

  await fs.promises.appendFile("test.txt", JSON.stringify(arrayPersonas));

  let contenidoFinal = await fs.promises.readFile("test.txt", "utf-8");
  contenidoFinal = JSON.parse(contenidoFinal);
  contenidoFinal.push({
    nombre: "santiago",
    apellido: "del moro",
  });
}

cosasAsincronas();
