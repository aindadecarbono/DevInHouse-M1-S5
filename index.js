function sleep(valor) {
  let minhaPromise = new Promise((resolve, reject) => {
    if (valor) {
      setTimeout(() => {
        resolve(valor)
      }, 3000)
    } else {
      reject('Erro')
    }
  })

  minhaPromise.then(
    valor => console.log(valor),
    valor => console.log(valor)
  )
}

sleep('valor qualquer')
