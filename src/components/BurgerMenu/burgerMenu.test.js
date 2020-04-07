
const someFunc = (a,b) => {
  return a+b;
};


it('some test',()=>{
  expect(someFunc(1,2)).toEqual(3);
});
