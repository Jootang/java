// NOT !
const a = !true;
console.log(a);

//AND $$(양쪽갑이 둘다 true)
const b = true && true;
console.log(b);

//OR || (둘중에 하나)
const c = false || true;
console.log(c);

const value = !((true && false) || (true && false) || !false);
// !(true && false || true && false || true);
// !(false || false || true);
// !(true);
// false
console.log(value);
