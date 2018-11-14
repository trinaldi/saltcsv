# Salt CSV

Pequeno `POC` que pega um arquivo `CSV` e criptografa os conteúdos em NodeJS.

## Usage

- Certifique-se que tenha o NodeJS instalado na sua máquina:

`$ node -v`

- Clone o repositório

`$ git clone https://github.com/trinaldi/saltcsv`

- Insira os pacotes necessários, pode ser com `npm` ou `yarn`:

**NPM**

`npm i --save fast-csv sha.js`

**Yarn**

`yarn add fast-csv sha.js`

- Para executar digite:

`node index.js`

---
#### Caveats:

O arquivo que é lido fica na mesma pasta e tem o nome de `meucsv.csv`, assim como
o arquivo de _output_ ficará na mesma pasta com o nome `output.txt`

Estas opções podem ser alteradas diretamente no arquivo `index.js` deste repositório
