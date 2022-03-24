console.log('***** Music Collection *****');

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`.
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
function addToCollection(title, artist, yearPublished, tracks) {
    let album = {}
    let track = {}
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    album.tracks = [];
    for (track of album.tracks){
    track.trackName = trackName;
    track.trackDuration = trackDuration;
    album.tracks.push(track);
    }
    collection.push(album);
    return album;
} // end addToCollection



// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
// > When testing your functions, write all tests in the JavaScript file!

console.log('Added', addToCollection('Tidal', 'Apple, Fiona', 1996,[{trackName: 'Sleep to Dream', trackDuration: '4:08'},{trackName: 'Sullen Girl', trackDuration: '3:54'},{trackName: 'Shadowboxer', trackDuration: '5:24'},{trackName: 'Criminal', trackDuration: '5:41'},{trackName: 'Slow Like Honey', trackDuration: '5:56'},{trackName: 'The First Taste', trackDuration: '4:46'},{trackName: 'Never Is a Promise', trackDuration: '5:54'},{trackName: 'The Child is Gone', trackDuration: '4:14'},{trackName: 'Pale September', trackDuration: '5:50'},{trackName: 'Carrion', trackDuration: '5:43'}]), 'to the collection!');
console.log('Added', addToCollection('Say I Am You', 'The Weepies', 2006), 'to the collection!');
console.log('Added', addToCollection('Welcome to the Cruel World', 'Harper, Ben', 1994), 'to the collection!');
console.log('Added', addToCollection('The Miseducation of Lauryn Hill', 'Hill, Ms. Lauryn', 1998), 'to the collection!');
console.log('Added', addToCollection('CINCORIGINALS', 'Nwigwe, Tobe', 2020), 'to the collection!');
console.log('Added', addToCollection('All at Once', 'Screaming Females', 2018), 'to the collection!');
console.log('Collection now contains', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. 
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

// - Test the `findByArtist` function.
// > When testing your functions, write all tests in the JavaScript file!

console.log('testing findByArtist!');
console.log('Searching for albums by Ben Harper, expect 1 result =>', findByArtist('Harper, Ben'));
console.log('Searching for albums by Dolly Parton , expect empty array =>', findByArtist('Parton, Dolly'));
addToCollection('When The Pawn...', 'Apple, Fiona', 1999);
console.log('Searching for albums by Fiona Apple, expect 2 results =>', findByArtist('Apple, Fiona'));


// - Create a function called `search`.

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

//I left this in because I put a lot of work into it but there's a search that meets the requirements below.

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
//   - Update `search` to allow a `trackName` search criteria. NOTE HERE: I INTERPRETED THIS AS OVERRIDING the ALL from line 118 and changed my code from && to ||

function search(input) {
    let results = [];
    if (typeof input !== 'object' || Object.keys(input).length === 0) {
        results = collection;
        return results;
    }  // end if undefined 
    for (let record of collection) {
        if (input.artist === record.artist
            || input.yearPublished === record.yearPublished) {
            results.push(record);
        }
    } // end for loop
    return results;
    console.log(results);
} // end search

console.log('Testing search function, expect full collection =>', search());
console.log('Testing search function, expect empty array =>', search({ artist: 'Ray Charles', yearPublished: 1957 }));





//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME