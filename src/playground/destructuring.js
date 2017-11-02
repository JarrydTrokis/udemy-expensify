const person = {
  name: 'Jarryd',
  age: 27,
  location: {
    city: 'Lincolnshire',
    temp: 14
  }
}

const {name = 'anon', age} = person

console.log(`${name} is ${age}.`)

const {temp: t, city} = person.location

console.log(`It's ${t} in ${city}.`)

const book = {
  title: 'Money',
  author: 'Rob Moore',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'self published' } = book.publisher

console.log(`${publisherName}`)
