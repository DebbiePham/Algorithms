function removeAt(items, idx) {
    for (i=idx; i<items.length-1; i++) {
        [items[i],items[i+1]] = [items[i+1],items[i]];
    }
    var number = 0;
    number = items.pop();
    return number;
}
var expected = removeAt(["a","b","c","d","e"], 1);