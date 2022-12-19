const str = 'pppposssiibbbbbiiillllittttttiieeessss';
const newStr = str.replace('bbbbb', '');

const list = newStr.split('');

const count = {};

list.forEach(e => {
    count[e] = (count[e] || 0) + 1;
});

console.log(Object.values(count));

// Four P's
// One O
// Seven S's
// Eight I's
// Four L's
// Six T's
// Three E's