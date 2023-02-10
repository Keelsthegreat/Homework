// // 1.////////////////////////////////

for(let i = 1; i <= 20; i++) 
  console.log(i);
////////////////////////////////
2.// 
for(let i = 0; i <= 200; i++) 
 if (i % 2 ===0){
  console.log(i)
 }

// 3./////////////FIZZ BUZZ///////////////////
for(let i = 1; i <= 100; i++) 
 if (i % 3 ===0){
  console.log("Fizz")
 } else if(i % 5 ===0){
    console.log("Buzz")
} else if (i % 3 === 0  && i % 5 === 0){
    console.log("FizzBuzz")
} else {
    console.log(i)
}

// 4.//Wild Wild Life ////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee.splice(2,1,5001)
console.log(plantee)

wolfy.splice(3,1,"Gotham City")
console.log(wolfy)
dart.splice(4,0,"Hawkins")
console.log(dart)
wolfy.splice(1,1,"Gameboy")

 5. //Yell At the Ninja Turtles//////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
console.log(ninjaTurtles)
for (string of ninjaTurtles) { 
console.log(string.toUpperCase())
}
6. //Methods Revisited///////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8])


console.log(favMovies.sort())


console.log(favMovies.pop())

console.log(favMovies.push('Guardians of the Galaxy'))

console.log(favMovies.shift())

console.log( favMovies.unshift('Home Alone'))
 
//This method adds an item(s) to the beginning of an array and changes the original array.


console.log(favMovies.splice(3,1,'Avatar'))
//
console.log(favMovies.slice(9))
//
console.log(favMovies)
//
console.log(favMovies[19])

//// Where is Waldo ///

const whereIsWaldo = [
['Timmy','Frank'],
//0
'Eggbert',
//1
['Lucinda', 'Jacc','Neff','Snoop']
//2
['Petunia','Baked Goods','Waldo']]

console.log(whereIsWaldo.length)
console.log(whereIsWaldo.splice(2,1))

console.log(whereIsWaldo.splice(5,1,"No One"))

console.log("Waldo")

/// Excited Kitten ///////////

for(let i = 1; i <= 20; i++) 
 console.log(i,"Love me, pet me! HSSSSSS!");
if (i % 2 ===0) {
  console.log(i,"...human...why you taking pictures of me?...", "...the catnip made me do it...") 
}













