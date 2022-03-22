console.log('***** Music Collection *****');

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished) {
    let album = {}
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    // found this syntax on https://www.dofactory.com/javascript/function-objects
    collection.push(album);
    return album;
} // end addToCollection

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
// > When testing your functions, write all tests in the JavaScript file!

console.log('Added', addToCollection('Tidal', 'Apple, Fiona', 1996), 'to the collection!');
console.log('Added', addToCollection('Say I Am You', 'The Weepies', 2006), 'to the collection!');
console.log('Added', addToCollection('Welcome to the Cruel World', 'Harper, Ben', 1994), 'to the collection!');
console.log('Added', addToCollection('The Miseducation of Lauryn Hill', 'Hill, Ms. Lauryn', 1998), 'to the collection!');
console.log('Added', addToCollection('CINCORIGINALS', 'Nwigwe, Tobe', 2020), 'to the collection!');
console.log('Added', addToCollection('All at Once', 'Screaming Females', 2018), 'to the collection!');
console.log('Collection now contains', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(someArray) {
    console.log('There are', someArray.length, 'albums in the collection');
    for (i = 0; i < someArray.length; i++) {
        console.log(someArray[i].title, 'by', someArray[i].artist, 'published in', someArray[i].yearPublished);
    } //end loop
} // end showCollection

// - Test the `showCollection` function.
// > When testing your functions, write all tests in the JavaScript file!

showCollection(collection);
addToCollection('Judee Sill', 'Sill, Judee', 1971);
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist) {
    let results = [];
    for (i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            results.push(collection[i]);
        }
    } // end artist found
    return results
    console.log(results)
} // end findByArtist

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
// > When testing your functions, write all tests in the JavaScript file!

console.log('testing findByArtist!');
console.log('Searching for albums by Ben Harper, expect 1 result =>', findByArtist('Harper, Ben'));
console.log('Searching for albums by Dolly Parton , expect empty array =>', findByArtist('Parton, Dolly'));
addToCollection('When The Pawn...', 'Apple, Fiona', 1999);
console.log('Searching for albums by Fiona Apple, expect 2 results =>', findByArtist('Apple, Fiona'));


// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function searchPartials(inp0, inp1) {
    let results = [];
    for (i = 0; i < collection.length; i++) {
        if (inp0 === collection[i].artist
            || inp1 === collection[i].artist
            || inp0 === collection[i].title
            || inp1 === collection[i].title
            || inp0 === collection[i].yearPublished
            || inp1 === collection[i].yearPublished) {
            results.push(collection[i]);
        }
    } // end if found
    return results;
    console.log(results);
} // end searchPartials

console.log('testing searchPartials, expect empty array =>', searchPartials('Charles, Ray', 1957));
console.log('testing searchPartials, expect one result =>', searchPartials('Charles, Ray', 1999));
console.log('testing searchPartials, expect two results =>', searchPartials('Tidal', 2006));



// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search(input) {
    let results = [];
    if (input === null) {
        results = collection;
        return results;
    } //end if null
    for (record of collection) {
        if (input === collection[record].album 
            || input === collection[record].artist 
            || input === collection[record].yearPublished) {
            results.push(collection[i]);
        }
    } // end for loop
    return results;
    console.log(results);
} // end search

console.log('Testing search function, expect full collection =>', search());
console.log('Testing search function, expect empty array =>', search('Ray Charles', 1957));
console.log('Testing search function, expect two results =>', search('Apple, Fiona'));

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME