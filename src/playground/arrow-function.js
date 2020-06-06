//babel src/playground/arrow-function.js --out-file=public/scripts/app.js --presets=env,react  --watch

// const square = (x) => x*x;
// console.log(square(4))

// const getFirstName = (name) => name.split(' ')[0];
// console.log(getFirstName('June Jung'))

const user = {
  name: 'June',
  cities: ['Vancouver', 'Seoul', 'Hanoi', 'Melbourn'],
  printPlaceLived () {
    const cityMsg = this.cities.map((city) => city.toUpperCase())
    return cityMsg;
    // this.cities.forEach((city)=>{
    //   console.log(this.name + ' has lived in ' + city)
    // })
  }
}
//console.log(user.printPlaceLived());

const mutiplier = {
  numbers: [2,4,6],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number)=>number*this.multiplyBy);
  }
}
console.log(mutiplier.multiply());
