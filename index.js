function additionner(a, b) {
  const result = a + b;
  console.log('Le résultat est', result);
  return result;
}

function division(x, y) {
  if (y === 0) {
    console.log('Division par zéro !');
    return;
  }
  return x / y;
}

console.log(additionner(5, 3));

//if (true) {
//  console.log('Ce code s\'exécutera');
//}

const nombre = '10';
if (Number(nombre) === 10) {
  console.log('Nombre égal à 10');
}

function afficher() {
  console.log('Début');
  const a = 1;
  const b = 2;
  const c = 3;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  console.log(a, b, c, e, f, g, h, i, j);
  console.log('Fin');
}

afficher();

setTimeout(() => {
  console.log('Timeout');
}, 1000);

const nombres = [1, 2, 3].map(n => {
  return n * 2;
});

console.log('Nombres doublés:', nombres);

module.exports = {
  additionner,
  division,
  afficher,
  nombres
};