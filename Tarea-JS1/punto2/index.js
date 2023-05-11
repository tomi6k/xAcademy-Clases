function elementosCoincidentes(array1, array2) {
    let coincidentes = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        coincidentes.push(array1[i]);
      }
    }
    return coincidentes;
  }

const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];
const coincidentes = elementosCoincidentes(array1, array2);
console.log(coincidentes); // Salida: ['rojo']

const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];
const coincidentes2 = elementosCoincidentes(array3, array4);
console.log(coincidentes2); // Salida: [3, true]
