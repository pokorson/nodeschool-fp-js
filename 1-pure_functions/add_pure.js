const test = require('tape')

const add = (x, y) => {
    return x + y;
}

test('add test', function (t) {
    t.equal(add(1, 2), 3);
    t.equal(add(5, 6), 11);

    t.end()
});