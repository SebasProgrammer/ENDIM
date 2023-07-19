let numeros = [1,2,3,4,5,6]

let suma = 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma)

let suma2 = numeros.reduce((acumulador, valorActual) => 
acumulador + valorActual)
console.log(suma2)