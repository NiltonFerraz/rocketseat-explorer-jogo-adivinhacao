let number = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

let aleatoryNumber = Math.round(Math.random() * 10)

// let match = Number(number) == aleatoryNumber

let x = 1

while (Number(number) != aleatoryNumber) {
  number = prompt("Erro, tente novamente:")
  x++
}
  alert(`Parabéns! O número que eu pensei foi ${aleatoryNumber} e você advinhou o número em ${x} tentativas`)
