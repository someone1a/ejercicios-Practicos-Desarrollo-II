const arreglo = [
    { name: "lucas", edad: 20 },
    { name: "santi", edad: 22 }
  ];
let  oneProperty = (arreglo, propiedad) => {
    const nuevoArreglo = []
    let objeto = {}
    for (let i = 0; i < arreglo.length; i++) {
      objeto[propiedad] = arreglo[i][propiedad]
      nuevoArreglo.push(objeto)
      return objeto
    }
    nuevoArreglo.forEach((p)=>{
        console.log(p)
    })
}
console.log(oneProperty(arreglo))