/**
 * Crea un nuevo proyecto de Node
 *
 * - [X] Configura el proyecto para utilizar los módulos de ES6
 * - [X] Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
 * - [X] En el entrypoint index.js, importa el módulo controller.js
 * - [X] El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
 * - [X] Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
 * - [X] Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
 */

import { suma, multiplica } from './controller.js'
import chalk from 'chalk'

const resultadoSuma = suma(1, 2)
const resultadoMultiplica = multiplica(4, 5)

console.log(`resultadoSuma: ${resultadoSuma}`)
console.log(chalk.green(`resultadoMultiplica: ${resultadoMultiplica}`))
