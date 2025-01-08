// billets 2, 10, 5
// entier > 4

export const getMoney = (sum: number) => {
  let nb2 = 0;
  let nb5 = 0;
  let nb10 = 0;
  let rest = sum;

  if (sum % 5 > 0) {
    for (nb2 = 1; nb2 <= 8; nb2++) {
      rest = sum - 2 * nb2;
      if (rest % 5 === 0) {
        break;
      }
    }
  } else {
    rest = sum;
  }

  if (rest > 10) {
    nb10 = Math.floor(rest / 10);
    rest = rest - 10 * nb10;
  }
  console.log("Après billets de 10 ??", rest);
  if (rest >= 5) {
    nb5 = Math.floor(rest / 5);
    rest = rest - nb5 * 5;
  }
  if (rest >= 2) {
    const monnaie = rest % 2 > 0;
    if (monnaie) {
      rest = rest + nb5 * 5;
      nb5 = 0;
    }
    nb2 = Math.floor(rest / 2);
  }

  //verif
  const verif = 2 * nb2 + 5 * nb5 + 10 * nb10;
  console.log(sum, verif);
  if (verif !== sum) {
    alert(
      "La banque s'est trompée, veuillez nous excuser pour la gêne occasionnée"
    );
  }

  return { nb2, nb10, nb5 };
};
