var arr1 = ["a", "b", "c", "d", "e", "f", "g"];
var removeIdx1 = 2;
var expected1 = "c";

function removeAt(items, idx) {
    
    for (i=idx; i < items.length -1; i++) {
        items[i] = items[i+1];
    }
    items.pop();
    return items;
}

console.log(removeAt(arr1, removeIdx1));


