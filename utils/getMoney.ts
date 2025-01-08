// billets 2, 10, 5
// entier > 4

export const getMoney = (sum: number) => {
  let nb2 = 0;
  let nb5 = 0;
  let nb10 = 0;
  let rest = sum;
  // si la somme n'est pas divisible par 5 on utilise des pièces de 2 jusqu'à obtenir un multiple de 5
  if (sum % 5 > 0) {
    for (nb2 = 1; nb2 <= 8; nb2++) {
      rest = sum - 2 * nb2;
      if (rest % 5 === 0) {
        break;
      }
    }
  }
  // si la somme restante est supérieure à 10 on utilise en priorité des billets de 10
  if (rest > 10) {
    nb10 = Math.floor(rest / 10);
    rest = rest - 10 * nb10;
  }
  // on complète par des billets de 5
  if (rest >= 5) {
    nb5 = Math.floor(rest / 5);
    rest = rest - nb5 * 5;
  }
  //on vérifie que la distribution est correcte
  const verif = 2 * nb2 + 5 * nb5 + 10 * nb10;
  if (verif !== sum) {
    alert(
      "La banque s'est trompée, veuillez nous excuser pour la gêne occasionnée"
    );
    // on ne donne aucun billet en cas d'erreur
    return { nb2: 0, nb5: 0, nb10: 0 };
  }
  return { nb2, nb10, nb5 };
};
