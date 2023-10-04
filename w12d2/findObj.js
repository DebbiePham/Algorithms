/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.

    return any object that matches all the key value pairs in the search
    criteria object.

    Try without built in methods (remember to check MDN/the .hasOwnProperty from yesterday!)

    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
    For functional remember we can use things like .filter 😉
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];


/**
 * The function `findObjects` takes in a criteria object and a collection of objects, and returns an
 * array of objects that match the criteria.
 * @param criteria - The criteria parameter is an object that specifies the properties and values that
 * the objects in the collection should match.
 * @param collection - The `collection` parameter is an array of objects.
 * @returns The function `findObjects` returns an array of objects that match the given criteria.
 * 
 * https://www.geeksforgeeks.org/javascript-object-hasownproperty-method/#
 * 
 * https://stackoverflow.com/questions/9396569/what-is-property-in-hasownproperty-in-javascript
 */
function findObjects(criteria, collection) {
    const results = [];

    for(const obj of collection) {
        let isMatch = true

        for(const key in criteria) {
            if(criteria.hasOwnProperty(key)) {
                if(obj.hasOwnProperty(key) && obj[key] === criteria[key]) {
                    continue;
                } else {
                    isMatch = false;
                    break;
                }
            }
        }
        if(isMatch) {
            results.push(obj);
        }
    }

    return results;
}


console.log(findObjects(searchCriteria1, items), 'should equal', expected1);
console.log(findObjects(searchCriteria2, items), 'should equal', expected2);

console.log('********************************************************');



/**
 * The function `findObjectsFunctional` filters a collection of objects based on a set of criteria.
 * @param criteria - An object containing the criteria to filter the collection by. Each key-value pair
 * in the criteria object represents a property and its desired value in the objects of the collection.
 * @param collection - The collection parameter is an array of objects.
 * @returns The function `findObjectsFunctional` returns an array of objects that match the given
 * criteria.
 * 
 * https://stackoverflow.com/questions/40336345/search-array-of-object-with-filter-and-keyword
 */
function findObjectsFunctional(criteria, collection) {
    return collection.filter((obj) => {
        for(const key in criteria) {
            if(criteria.hasOwnProperty(key)) {
                if(!(key in obj) || obj[key] !== criteria[key]) {
                    return false;
                }
            }
        }
        return true;
    });
}

// console.log(findObjectsFunctional(searchCriteria1, items), 'should equal', expected1);
// console.log(findObjectsFunctional(searchCriteria2, items), 'should equal', expected2);
/*****************************************************************************/