import mysql from 'mysql2/promise'

let conexao

async function createCon() {
  conexao = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    timezone: '+00:00',
    typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1');
        } else {
            return next();
        }
    }
});

    conexao.on('error', async err => {
        console.log(err.message);
        if (err.message.includes('closed')) {
            await createCon();
        }
    })   
}

await createCon();
console.log('BD conectado');

export { conexao }