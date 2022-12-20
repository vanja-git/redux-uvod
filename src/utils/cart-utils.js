




export const addToCartHelper1 = (cart, newItem) => {
  // Verzija 1.
  // u ovoj verziji funkcija dodaje u cart ali ne proverava da li ta stavka vec postoji u cartu pa parvu duplikate i ignorise kolicine.
  const updatedCart = [...cart, newItem];
  return updatedCart;
};

export const addToCartHelper2 = (cart, newItem) => {
  // Verzija 2.
  // U ovoj verziji je unapredjeno da se ne stvaraju duplikatim ukoliko taj proizvod vec postoji u cartu, nego se samo uveca kolicina.
  const id = newItem.id;
  // 1) najpre provera da l ito vec ima u cartu
  let vecPostoji = false;
  cart.forEach(item => {
    if (id === item.id) {
      vecPostoji = true;
    }
  });
  // 2) zavisno od toga da li vec postoji upisujemo ga sa kolicinom 1 ili mu povecavamo kolicinu
  if (vecPostoji) {
    // ako vec spotoji
    const updatedCart = cart.map((item) => {
      if (id === item.id) {
        // to je taj kojeg OPET dodajemo
        const updatedItem = {
          ...item,
          kolicina: item.kolicina + 1
        }
        return updatedItem;
      }
      // svi ostali neizmenjni ostaju u nizu
      return item;
    })
    return updatedCart; // KONACNI RETURN
  } else {
    // ako je skroz novi
    const pripremljeniItem = {
      ...newItem,
      kolicina: 1
    }
    const updatedCart = [...cart, pripremljeniItem];
    return updatedCart; // KONACNI RETURN
  }
};


export const cartPlusHelper = (cart, id) => {
  // id je id artikla u cartu kojem treba da uvecamo kolicinu
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      // ako je taj kojem menjamo kolicinu 
      const pripremljeniItem = {
        ...item,
        kolicina: item.kolicina + 1
      };
      return pripremljeniItem;
    }
    return item; // svi ostali ostaju neizmenjeni.
  });
  return updatedCart; //KONACNI RETURN
};


export const prebrojCart = (cart) => {
  let brojac = 0;
  // prebrojavanje itema u cartu
  cart.forEach(item => {
    // const itemBrojka = item.kolicina * item.cena;
    brojac += item.kolicina;
  });
  return brojac;
};