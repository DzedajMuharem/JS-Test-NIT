// 1.
// Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog
// broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

let broj = +prompt("Unesite realan broj");

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else {
  console.log(broj ** 2);
}
