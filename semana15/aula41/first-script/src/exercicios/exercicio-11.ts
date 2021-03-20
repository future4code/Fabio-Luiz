export const fatorial = (n: number) => {
  let fat = 1;
  if (n === 0) {
    // console.log(`${n}! = ${fat}`);
    return 1;
  }
  if (n >= 1) {
    for (let i = 1; i < n + 1; i++) {
      fat *= i;
    }
    // console.log(`${n}! = ${fat}`);
    return fat;
  } else {
    return 0;
  }
};

// fatorial(5);
