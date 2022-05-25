interface MyInterface {
  name: string;
  prices: (number | null)[];
}

export default function searchCourses(
  arrSeach: (number | null)[],
  arrCourses: MyInterface[]
): MyInterface[] {
  let result: MyInterface[] = [];

  arrCourses.forEach((item) => {
    /*
     *** Проверка от нуля  до заданного конечного значения и поиск в диапозоне
     */
    if (!arrSeach[0] && arrSeach[1]) {
      if (item.prices[0] === null && item.prices[1]! > arrSeach[1]) {
        result.push(item);
      } else if (
        item.prices[0]! < arrSeach[1] &&
        item.prices[1]! > arrSeach[1]
      ) {
        result.push(item);
      } else if (
        item.prices[0] !== null &&
        item.prices[0]! < arrSeach[1] &&
        item.prices[1]! <= arrSeach[1]
      ) {
        result.push(item);
      }
    }

    /*
     *** Проверка от заданного начального значения до заданного конечного значения
         и поиск в диапозоне
    */

    if (arrSeach[0] && arrSeach[1]) {
      if (item.prices[0] === null && item.prices[1]! > arrSeach[1]) {
        result.push(item);
      } else if (
        item.prices[0] !== null &&
        item.prices[1] !== null &&
        item.prices[0]! < arrSeach[1] &&
        item.prices[1]! > arrSeach[0]
      ) {
        result.push(item);
      } else if (
        item.prices[1] === null &&
        item.prices[0]! > arrSeach[0] &&
        item.prices[0]! < arrSeach[1]
      ) {
        result.push(item);
      }
    }

    /*
     *** Проверка без  заданного начального значения до заданного конечного значения
         и поиск в диапозоне
    */

    if (arrSeach[0] && !arrSeach[1]) {
      if (item.prices[0] === null && item.prices[1]! > arrSeach[0]) {
        result.push(item);
      } else if (
        item.prices[0] !== null &&
        item.prices[1] !== null &&
        item.prices[0]! < arrSeach[0] &&
        item.prices[1]! > arrSeach[0]
      ) {
        result.push(item);
      } else if (
        item.prices[0] !== null &&
        item.prices[1] === null &&
        item.prices[0]! <= arrSeach[0]
      ) {
        result.push(item);
      }
    }
  });

  return result;
}
