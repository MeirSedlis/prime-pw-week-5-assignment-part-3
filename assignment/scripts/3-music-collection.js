console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

let collection = [];


// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished){
  let album ={  }  
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished
 // found this syntax on https://www.dofactory.com/javascript/function-objects
collection.push(album)
return album;
} // end addToCollection

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
// > When testing your functions, write all tests in the JavaScript file!

console.log('Added', addToCollection('Tidal','Apple, Fiona', 1996), 'to the collection!');
console.log('Added', addToCollection('Say I Am You','The Weepies', 2006), 'to the collection!');
console.log('Added', addToCollection('Welcome to the Cruel World','Harper, Ben', 1994), 'to the collection!');
console.log('Added', addToCollection('The Miseducation of Lauryn Hill','Hill, Ms. Lauryn', 1998), 'to the collection!');
console.log('Added', addToCollection('CINCORIGINALS','Nwigwe, Tobe', 2020), 'to the collection!');
console.log('Added', addToCollection('All at Once','Screaming Females', 2018), 'to the collection!');
console.log('Collection now contains', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.
// > When testing your functions, write all tests in the JavaScript file!



// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
// > When testing your functions, write all tests in the JavaScript file!


