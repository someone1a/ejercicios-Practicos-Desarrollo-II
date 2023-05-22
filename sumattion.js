let sumattion = (number) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      console.log(sum += i)
    }
    return sum
  }
console.log(sumattion(10))