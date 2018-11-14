// `require`s necessários
// `fs` e `fast-csv` para nossa mágica com CSV
const fs = require('fs');
const csv = require('fast-csv');

// Vamos usar o módulo `fs`do NodeJS para ler nosso CSV.
// e para gravar nosso arquivo de output.
const stream = fs.createReadStream('meucsv.csv');
const outputFile = fs.createWriteStream('output.txt');

// Criamos um array para guardar as informações do par `key, value`
// e um array para os dados criptografados
const myArray = [];
const mySaltedArray = [];
const salt = `` //salt vai aqui

const csvStream = csv()
  .on('data', data => {
    myArray.push(data)
  })
  .on('end', () => {
    console.log("Acabei de ler o CSV, let's go");
    myArray.forEach(rows => {
      writeFile(rows);
    })
    console.log("Acabei de escrever o arquivo...ufa")
  })


stream.pipe(csvStream);

const writeFile = (rows) => {
  rows.forEach(row => {
    const shajs = require('sha.js');
    // Exemplo de função para criptografar
    outputFile.write(`${shajs('sha256').update(row).digest('hex')}\n`)
    // Exemplo de função para criptografar com salt
    //outputFile.write(`${shajs('sha256').update(salt).update(row).digest('hex')}\n`)
  })

}

