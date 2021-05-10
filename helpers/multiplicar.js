const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';

		for (let i = 1; i <= hasta; i++) {
			salida += `${5} x ${i} = ${5 * i}\n`;
		}

		if (listar === true) {
			console.log('====================='.rainbow);
			console.log(`Tabla del ${base}`.yellow.bold);
			console.log('====================='.rainbow);

			console.log(salida.yellow.bold);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivo,
};
