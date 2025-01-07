let dogFoodPrice = 5;
let catFoodPrice = 10;


let nebojsaPopust = "CODENEBOJSA"
let vrijednostKupona = 10;

function calculateTotal(dogQuantity, catQuantity) {
  return dogQuantity * dogFoodPrice + catQuantity * catFoodPrice;
}

function applyDiscount(total, coupon) {
  if (coupon === nebojsaPopust) {
    total -= vrijednostKupona;
    alert(`Primijenjen je popust od ${vrijednostKupona} eura. Nova cijena je ${total} eura.`);
  }
  return total;
}

function WhatsBuy() {
  let total = 0;
  let kolicinaZaPse = 0;
  let kolicinaZaMacke = 0;
  let pitanje = confirm("Da li zelite da kupite hranu i za pse i za macke?");

  if (pitanje) {
    kolicinaZaPse = parseFloat(prompt("Koliko zelite hrane za pse?"));
    kolicinaZaMacke = parseFloat(prompt("Koliko zelite hrane za macke?"));

    if (!isNaN(kolicinaZaPse) && !isNaN(kolicinaZaMacke)) {
      total = calculateTotal(kolicinaZaPse, kolicinaZaMacke);
      let kupon = prompt("Unesite kupon (ako ga imate):");
      total = applyDiscount(total, kupon);
      alert(`Ukupna cijena je ${total} eura`);
    } else {
      alert("Kolicinu hrane i za pse i za macke morate unijeti kao brojcanu vrijednost !");
    }
  } else {
    pitanje = confirm("Da li kupujete za pse?");
    if (pitanje) {
      kolicinaZaPse = parseFloat(prompt("Koliko zelite hrane za pse?"));
      if (!isNaN(kolicinaZaPse)) {
        total = kolicinaZaPse * dogFoodPrice;
        let kupon = prompt("Unesite kupon (ako ga imate):");
        total = applyDiscount(total, kupon);
        alert(`Ukupna cijena je ${total} eura`);
      } else {
        alert("Kolicinu hrane za pse morate unijeti kao brojcanu vrijednost !");
      }
    } else {
      pitanje = confirm("Da li kupujete za macke?");
      if (pitanje) {
        kolicinaZaMacke = parseFloat(prompt("Koliko zelite hrane za macke?"));
        if (!isNaN(kolicinaZaMacke)) {
          total = kolicinaZaMacke * catFoodPrice;
          let kupon = prompt("Unesite kupon (ako ga imate):");
          total = applyDiscount(total, kupon);
          alert(`Ukupna cijena je ${total} eura`);
        } else {
          alert("Kolicinu hrane za macke morate unijeti kao brojcanu vrijednost !");
        }
      } else {
        alert("Morate odabrati hranu za pse, mačke ili oboje.");
        setTimeout(WhatsBuy,2000)
      }
    }
  }
}
WhatsBuy();