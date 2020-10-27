const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('========================='.green);
    console.log(`====tabla del ${base}=====`.green);
    console.log('========================='.green);
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`El valor introducido ${base} y/o ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i+1} = ${base*(i+1)}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}