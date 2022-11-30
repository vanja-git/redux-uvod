

export const addToCartHelper = (cart, newItem) => {
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