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

export const cartMinusHelper1 = (cart, id) => {
  // Verzija 1
  // U ovoj verziji ima nedostatak jer ce uvek da smanjuje pa moze da dodje i na kolicinu nula pa cak i manje od nule (a idelano bi bilo da artikal nestane kad kolicina dodje na nula)
  // id je id artikla u cartu kojem treba da umanjimo kolicinu
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      // ako je taj kojem menjamo kolicinu 
      const pripremljeniItem = {
        ...item,
        kolicina: item.kolicina - 1
      };
      return pripremljeniItem;
    }
    return item; // svi ostali ostaju neizmenjeni.
  });
  return updatedCart; //KONACNI RETURN
};


export const cartMinusHelper2 = (cart, id) => {
  // Verzija 2
  // U ovoj verziji kad kolicina ddje na nula artikal ce biti obrisan iz carta.
  //
  let updatedCart = [];
  cart.forEach((item) => {
    if (item.id === id) {
      // ovo je taj kojem treba da smanjimo kolicinu
      // ‚rovera da li ce kolicina da mu dodje na nula
      if (item.kolicina > 1) {
        // znaci nakon smanjenja ipak nece biti nula
        const pripremljeniItem = {
          ...item,
          kolicina: item.kolicina - 1
        };
        updatedCart.push(pripremljeniItem);
      } else {
        // ukoliko je kolicina 1 znaci da ce nakon smanjenja biti 0, znaci treba da ga brisemo iz cart-a.
        // brisemo ga tako sto ga ne pushujemo u novi niz
        // do nothing
      }
    } else {
      // svi ostali ostaju neizmenjeni
      updatedCart.push(item);
    }
  })
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