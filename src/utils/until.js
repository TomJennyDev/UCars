// random integer from 0 to endNum
export function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

export function dateCompare(d1, d2) {
  const date1 = new Date(d1.updatedAt);
  const date2 = new Date(d2.updatedAt);

  let comparison = 0;
  if (date1 > date2) {
    comparison = -1;
  } else if (date1 < date2) {
    comparison = 1;
  }
  return comparison;
}

export function numCompare(n1, n2) {
  return +n1.totalModels - +n2.totalModels;
}

export function alphabetCompare(n1, n2) {
  const name1 = n1.name.toLowerCase();
  const name2 = n2.name.toLowerCase();

  let comparison = 0;
  if (name1 < name2) {
    comparison = -1;
  } else if (name1 < name2) {
    comparison = 1;
  }
  return comparison;
}
