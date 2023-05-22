let loopDePares =(numero) => {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
    let calculo = i+numero
    if (calculo % 2 === 0) {
      console.log(`El número ${calculo} es par`);
    }
  }
}
loopDePares(9)