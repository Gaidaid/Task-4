const readline = require('readline')

const readl = readline.createInterface
(
{
  input: process.stdin,
  output: process.stdout
})

function isPrime(num) 
{
  if (num <= 1) return false
  if (num <= 3) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  for (let nm = 5; nm * nm <= num; nm += 6) {
    if (num % nm === 0 || num % (nm + 2) === 0) return false
  }

  return true
}

function generatePrimesUpToLength(startingnumber, length) 
{
  const prime = []
  let currentnumber = startingnumber

  while (prime.length < length) 
  {
    if (isPrime(currentnumber)) 
    {
      prime.push(currentnumber)
    }
    currentnumber++
  }

  return prime
}

readl.question("Введіть початкове число: ", (startingnumber) => {
  readl.question("Введіть бажану довжину масиву: ", (desiredLength) => {
    const parsedStartingnumber = parseInt(startingnumber)
    const parsedDesiredLength = parseInt(desiredLength)

    if (!isNaN(parsedStartingnumber) && !isNaN(parsedDesiredLength) && parsedStartingnumber > 1 && parsedDesiredLength > 0) 
    {
      const primenumbersArray = generatePrimesUpToLength(parsedStartingnumber, parsedDesiredLength)
      console.log(primenumbersArray)
    } else 
    {
      console.log("Будь ласка, введіть коректні значення.")
    }

    readl.close()
  })
})