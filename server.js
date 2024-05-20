//importar pacotes do NODE
//biblioteca http já está instalada na máquina assim que instala o NODE
const http = require('http');
const host = '127.0.0.1';  // maquina local/servidor local
const port = 3001;

//criar servidor
//req = requisição, res = resposta
//req: tudo que o usuário passar de inf.
//res: tudo que retornar 
const server = http.createServer((req, res) => {
    res.statusCode = 200; //código de status
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello word com Node.JS!');
})

//instânciar o servidor
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})

//ignorar a node_modules quando publicar no git (pesa mt) e podemos ignorar também o package-lock.json