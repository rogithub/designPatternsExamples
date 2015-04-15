var calculadora = require('./calculadoraDeArea')();


var areaCirculo = calculadora.calcularArea('circulo', 3.14, 10);
var areaRectangulo = calculadora.calcularArea('rectangulo', 3, 5);
var areaTriangulo = calculadora.calcularArea('triangulo', 3, 5);


console.log('Áreas: ')
console.log('Circulo radio 10: ' + areaCirculo);
console.log('Rectángulo 3x15: ' + areaRectangulo);
console.log('Triángulo 3x5: ' + areaTriangulo);
