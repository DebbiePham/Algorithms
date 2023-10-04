/* 


Given an array of objects, a searchFor string, and searchBy key that exists
in the object return a new array of only those objects whose value for the
given key starts with the given search string.

You can assume the key will exist on the object and the value of that key
will be a string.


Bonus: make the search case insensitive.
Bonus: re-write it with functional programming, using built in methods.
Bonus: allow the search method to be provided as a parameter, e.g.,
        MDN String Methods(For functional): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
        string methods: includes, startsWith, endsWith.
        - you can assume the searchMethod will be valid.

    This kind of algorithm can be used in react onChange as you type into a
    search bar to live-filter a list.
*/

const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
];

/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchFor The value of the given key to search for.
 * @param {string} searchBy The key to search by.
 * @returns {Array<Objects>} The matched items.
 */

/**
 * The functionalFilterByKey function filters an array of objects based on a specified key and a search
 * string, returning only the objects whose key value starts with the search string.
 * @param items - An array of objects that you want to filter.
 * @param searchFor - The value you want to search for in the specified key of each item in the items
 * array.
 * @param searchBy - The searchBy parameter is the key of the property in each item that you want to
 * search for a specific value.
 * @returns The function `functionalFilterByKey` returns an array of items that match the specified
 * search criteria.
 */

function functionalFilterByKey(items, searchFor, searchBy) {
    return items.filter((item) => {
        // Get the value of the specified key and convert it to lowercase for case-insensitive comparison
        const value = item[searchBy].toLowerCase();
        searchFor = searchFor.toLowerCase(); // Convert searchFor to lowercase

        // Check if the value starts with the searchFor string
        return value.startsWith(searchFor);
    });
}

// console.log(functionalFilterByKey(people, searchFor1, searchBy1), 'expect', expected1);
// console.log(functionalFilterByKey(people, searchFor2, searchBy2), 'expect', expected2);
// console.log(functionalFilterByKey(people, searchFor3, searchBy3), 'expect', expected3);
// console.log(functionalFilterByKey(people, searchFor4, searchBy4), 'expect', expected4);

/*****************************************************************************/

/**
 * The `functionalFilterByKey1` function filters an array of objects based on a specified key and
 * search value using a specified search method.
 * @param items - The `items` parameter is an array of objects. Each object in the array represents an
 * item and has properties that can be searched.
 * @param searchFor - The value you want to search for in the items array.
 * @param searchBy - The `searchBy` parameter is the key or property of the items in the `items` array
 * that you want to search for a match.
 * @param [searchMethod=startsWith] - The `searchMethod` parameter is an optional parameter that
 * specifies the method to use for searching. It has a default value of `'startsWith'`, which means
 * that if no value is provided for `searchMethod`, the function will use the `'startsWith'` method for
 * searching.
 * @returns The function `functionalFilterByKey1` returns an array of items that match the specified
 * search criteria.
 */

function functionalFilterByKey1(items, searchFor, searchBy, searchMethod = 'startsWith') {
    return items.filter((item) => {
        const value = item[searchBy].toLowerCase();
        searchFor = searchFor.toLowerCase();

        // Use the specified search method
        if (searchMethod === "includes") {
            return value.includes(searchFor);
        } else if (searchMethod === "endsWith") {
            return value.endsWith(searchFor);
        } else {
            // Default to "startsWith"
            return value.startsWith(searchFor);
        }
    });
}
console.log(functionalFilterByKey1(people, searchFor1, searchBy1), 'expect', expected1);
console.log(functionalFilterByKey1(people, searchFor2, searchBy2), 'expect', expected2);
console.log(functionalFilterByKey1(people, searchFor3, searchBy3), 'expect', expected3);
console.log(functionalFilterByKey1(people, searchFor4, searchBy4, searchMethod4), 'expect', expected4);