/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.

Given an array of objects that contain a category key,
return a hash table to group the objects by their category.

Make the grouping case-insensitive.

Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
   // Create an empty object to represent the hash table.
   const categoryObj = {}; // Step 1
   // Iterate over the input array of objects.
   for (const item of items) { // Step 2
   // For each object, convert the category to lowercase (to make it case-insensitive).
    const category = item.category.toLowerCase(); // Step 3
   // Check if the category already exists in the hash table.
   // If it exists, push the object into the existing category array.
   // If it doesn't exist, create a new category array with the object and add it to the hash table.
    if (categoryObj[category]) { // Step 4
        categoryObj[category].push(item);
        continue;
    }
    categoryObj[category] = [item];
}
   // Return the hash table with categories as keys and arrays of objects as values.
   return categoryObj; // Step 5
}


console.log(groupObjects(objects));
/*****************************************************************************/