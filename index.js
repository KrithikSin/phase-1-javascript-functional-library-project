let values;
function collectionToValues(collection) {
    if (Array.isArray(collection)) {
        values = collection;
    } else if (typeof collection === 'object' && collection !== null) {
        values = Object.values(collection);
    } else {
        console.log('Provided collection is not an array or object.');
        return;
    }
}

function myEach(collection, callBack) {
    collectionToValues(collection);

    for (let i = 0; i < values.length; i++) {
        callBack(values[i]);
    }
    return collection;
}

function myMap(collection, callBack) {
    collectionToValues(collection);

    const newCollection = [];
    for (let i = 0; i < values.length; i++) {
        let newElement = callBack(values[i]);
        newCollection.push(newElement);
    }
    return newCollection;
}

function myReduce(collection, callBack, acc) {
    collectionToValues(collection);

    let startValue = 0;

    if (acc === undefined) {
        acc = values[0];
        startValue = 1;
    }

    for (let i = startValue; i < values.length; i++) {
        acc = callBack(acc, values[i], i, collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    collectionToValues(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            const found = values[i];
            return found;
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    collectionToValues(collection);
    let found = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            found.push(values[i]);
        }
    }
    return found;
}

function mySize(collection) {
    collectionToValues(collection);
    return values.length;
}

function myFirst(array, number) {
    if (number === undefined) {
        return array[0];
    } else {
        return array.slice(0, number);
    }
}

function myLast(array, number) {
    if (number === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(array.length - number);
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
