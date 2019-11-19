// YDKJS - prototypes - page 53

const obj_1 = { a: "hello" };
const obj_2 = { ...obj_1, b: "world" };
console.log('obj_2 - ',obj_2);

const obj_3 = Object.create(obj_2);
obj_3.c = "Test complete";
console.log('obj_3 - ',obj_3);
console.log('Key a, which is not present in obj_3, called from obj_2 - ',obj_3.a); //prototyping
