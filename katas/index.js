// /* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18 */
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

// const filtered = ages.filter((age) => age > 18)

// //console.log(filtered)

// /* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par. */
// const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]

// //const filtered2 = ages2.filter((age) => age % 2 === 0)

// //console.log(filtered)

// /* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
// const streamers = [
//   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ]

// const filtered2 = streamers.filter(
//   (streamer) => streamer.gameMorePlayed === 'League of Legends'
// )

// //console.log(filtered2)

// /* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación. */
// const streamers2 = [
//   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ]

// const filtered3 = streamers2.filter((streamer) => streamer.name.includes('u'))

// //console.log(filtered3)

// ///QUIERO ACLARAR QUE TODO LO ANTERIORMENTE HECHO HA SIDO UN COPY & PASTE PORQUE ELIMINE TODO SIN QUERER Y NO PUDE RECUPERARLO

// /* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35. */

// const UpperG = streamers.filter((Games) =>
//   Games.gameMorePlayed.includes('Legends')
// )
// function Upper(UpperG) {
//   for (const Streames of UpperG) {
//     if (Streames.age <= 35) {
//       Streames.gameMorePlayed = Streames.gameMorePlayed.toUpperCase()
//     }
//     //console.log(Streames)
//   }
// }
// Upper(UpperG)

// // Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input.
// //De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'.
// //Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// const Streamers = [
//   { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
//   { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
//   { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
//   { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
// ]

// // //const filterr = document.querySelector('#Filter')

// // ////////////////explicarlo bien
// // const Input = (ev) => {
// //   const ValueStreamer = Streamers.filter((Streamer) =>
// //     Streamer.name.toLowerCase().includes(ev.target.value)
// //   )
// //   //console.log(ValueStreamer)
// // }
// // filterr.addEventListener('input', Input)
// /////
// // 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
// const numbers = [32, 21, 63, 95, 100, 67, 43]
// const numeros = numbers.find((numero100) => numero100 === 100)
// console.log(numeros)
// // 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
// const movies = [
//   { title: 'Madagascar', stars: 4.5, date: 2015 },
//   { title: 'Origen', stars: 5, date: 2010 },
//   { title: 'Your Name', stars: 5, date: 2016 }
// ]
// const peliculas = movies.find((pelis) => pelis.date === 2010)
// //console.log(peliculas)
// // 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
// // 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres,
// //usa spread operator para fusionarlos
// //teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.
// const aliens = [
//   { name: 'Zalamero', planet: 'Eden', age: 4029 },
//   { name: 'Paktu', planet: 'Andromeda', age: 32 },
//   { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
// ]
// const mutations = [
//   {
//     name: 'Porompompero',
//     description:
//       ' Hace que el alien pueda adquirir la habilidad de tocar el tambor'
//   },
//   {
//     name: 'Fly me to the moon',
//     description: 'Permite volar, solo y exclusivamente a la luna'
//   },
//   {
//     name: 'Andando que es gerundio',
//     description: 'Invoca a un señor mayor como Personal Trainer'
//   }
// ]

// const alien = {
//   ...aliens.find((alien) => alien.name === 'Cucushumushu'), ///asi podre incluir y fusionar varios arryas con objetos distintos
//   mutation: {
//     ////y poniendo como si fuera un objeto puedo hacerlo tambien
//     ...mutations.find((mutacion) => mutacion.name === 'Porompompero')
//   }
// }
// ///console.log(alien)

// // 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// // los alumnos usando la función .reduce().

// const exams = [
//   { name: 'Yuyu Cabeza Crack', score: 5 },
//   { name: 'Maria Aranda Jimenez', score: 1 },
//   { name: 'Cristóbal Martínez Lorenzo', score: 6 },
//   { name: 'Mercedez Regrera Brito', score: 7 },
//   { name: 'Pamela Anderson', score: 3 },
//   { name: 'Enrique Perez Lijó', score: 6 },
//   { name: 'Pedro Benitez Pacheco', score: 8 },
//   { name: 'Ayumi Hamasaki', score: 4 },
//   { name: 'Robert Kiyosaki', score: 2 },
//   { name: 'Keanu Reeves', score: 10 }
// ]
// const totalScore = exams.reduce(
//   (accumulator, exam) => accumulator + exam.score,
//   0
// )
// //console.log(totalScore

// // 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// // alumnos que esten aprobados usando la función .reduce().
// function Name(exams) {
//   let examenes = (acumulator, currentvalue) => {
//     if (exams.score < 5) {
//       return acumulator + currentvalue
//     }
//   }
//   return examenes
// }
// Name(exams)
// // 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

// // let examneses = exams.reduce(
// //   ((acumulator, exam) => acumulator + exam.score, 0) / exams.length
// // )
// // console.log(examneses)

// const averageScore =
//   exams.reduce((accumulator, exam) => accumulator + exam.score, 0) /
//   exams.length

// //console.log(averageScore)

// /* 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter()
// y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.
//  */
// const videogames = [
//   { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
//   { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
//   { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
//   { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
//   { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
//   { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
// ]

// let filter_First = videogames.filter((juegos) => juegos.genders.includes('RPG'))
// console.log(filter_First)

// const reduce = filter_First.reduce(
//   (acumulator, currentvalue) => acumulator + currentvalue.score,
//   0
// )
// const avergaefinal = reduce / filter_First.length
// //console.log(avergaefinal)

// // Dado el siguiente javascript usa forof para recorrer el array de películas,
// // genera un nuevo array con las categorías de las películas
// // e imprime por consola el array de categorías.
// // Ten en cuenta que las categorías no debería repetirse.

// // Para filtrar las categorías puedes ayudarte de la función .includes().

// const movie = [
//   {
//     title: 'Bracula: Condemor II',
//     duration: 192,
//     categories: ['comedia', 'aventura']
//   },
//   {
//     title: 'Spider-Man: No Way Home',
//     duration: 122,
//     categories: ['aventura', 'acción']
//   },
//   {
//     title: 'The Voices',
//     duration: 223,
//     categories: ['comedia', 'thriller']
//   },
//   {
//     title: 'Shrek',
//     duration: 111,
//     categories: ['comedia', 'aventura', 'animación']
//   }
// ]
// let new_array = []
// for (const pelisculas of movie) {
//   for (const moviete of pelisculas.categories) {
//     if (!new_array.includes(moviete)) {
//       new_array.push(moviete)
//     }
//   }
// }
// //console.log(new_array)

// // Dado el siguiente javascript usa forof y forin para hacer la media del
// // volumen de todos los sonidos favoritos que tienen los usuarios.

// const users = [
//   {
//     name: 'Alberto',
//     favoritesSounds: {
//       waves: { format: 'mp3', volume: 50 },
//       rain: { format: 'ogg', volume: 60 },
//       firecamp: { format: 'mp3', volume: 80 }
//     }
//   },
//   {
//     name: 'Antonio',
//     favoritesSounds: {
//       waves: { format: 'mp3', volume: 30 },
//       shower: { format: 'ogg', volume: 55 },
//       train: { format: 'mp3', volume: 60 }
//     }
//   },
//   {
//     name: 'Pedro',
//     favoritesSounds: {
//       shower: { format: 'mp3', volume: 50 },
//       train: { format: 'ogg', volume: 60 },
//       firecamp: { format: 'mp3', volume: 80 }
//     }
//   },
//   {
//     name: 'Cristina',
//     favoritesSounds: {
//       waves: { format: 'mp3', volume: 67 },
//       wind: { format: 'ogg', volume: 35 },
//       firecamp: { format: 'mp3', volume: 60 }
//     }
//   }
// ]
// let total = 0
// let contador = 0
// for (const useres of users) {
//   for (const sound in useres.favoritesSounds) {
//     total += useres.favoritesSounds[sound].volume
//     contador++
//   }
// }
// let resultado = total / contador
// //console.log(resultado)

// // Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

// // Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// // de los sonidos que el usuario tenga como favoritos.

// // Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
// // vez que ese sonido se repita como favorito en cada usuario.

// // Este ejercicio es un poco complicado con los conocimientos actuales pero...a
// // la vez un buen reto y oportunidad para comprender que hay muchas formas de
// // hacer las cosas en javascript.

// const User = [
//   {
//     name: 'Alberto',
//     favoritesSounds: {
//       waves: { format: 'mp3', volume: 50 },
//       rain: { format: 'ogg', volume: 60 },
//       firecamp: { format: 'mp3', volume: 80 }
//     }
//   },
//   {
//     name: 'Antonio',
//     favoritesSounds: {
//       waves: { format: 'mp3', volume: 30 },
//       shower: { format: 'ogg', volume: 55 },
//       train: { format: 'mp3', volume: 60 }
//     }
//   },
//   {
//     name: 'Pedro',
//     favoritesSounds: {
//       shower: { format: 'mp3', volume: 50 },
//       train: { format: 'ogg', volume: 60 },
//       firecamp: { format: 'mp3', volume: 80 }
//     }
//   },
//   {
//     name: 'Cristina',
//     favoritesSounds: {
//       waves: { format: 'mp3', volume: 67 },
//       wind: { format: 'ogg', volume: 35 },
//       firecamp: { format: 'mp3', volume: 60 }
//     }
//   }
// ]
// const conteo1 = []
// for (const usuarios of User) {
//   for (const usuarietes in usuarios.favoritesSounds) {
//     // console.log(usuarietes)
//   }
// }

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
function findArrayIndex(mainCharacters, text) {
  return mainCharacters.indexOf(text)
}
//console.log(findArrayIndex(mainCharacters, 'Anakin'))

// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

function remeoveItem(mainCharacters, text) {
  const index = findArrayIndex(mainCharacters, text)
  if (index !== -1) {
    mainCharacters.splice(index)
  }
  return mainCharacters
}

// console.log(remeoveItem(mainCharacters, 'Anakin'))
// console.log(remeoveItem(mainCharacters, 'Rey'))

// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado
//que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te
// preocupes! Busca información sobre la función de javascript Math.random()

function RollDice(numeroOffaces) {
  ramdom = Math.floor(Math.random() * numeroOffaces) + 1
  return ramdom
}
var numeroOffaces = 10
const result = RollDice(numeroOffaces)
console.log(
  `el numero de caras es ${numeroOffaces} y el numero que da es ${result}`
)

/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(array, indice1, indice2) {
  const change = array[indice1]
  array[indice1] = array[indice2]
  array[indice2] = change
  return array
}

var resultado = swap(fantasticFour, 1, 2)
console.log(resultado)
