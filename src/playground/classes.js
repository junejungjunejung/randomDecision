//--> babel src/playground/classes.js --out-file=public/scripts/app.js --presets=env,react --watch

class Person {
  constructor(name = 'Anon', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi, ${this.name}!`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age); 
    this.major =major;
  }

  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, homeLocation){
    super(name);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    let msg = super.getGreeting();
    if(this.homeLocation){
      msg += ` I'm visiting from ${this.homeLocation}.`
    }
    return msg;
  }
}
const me = new Traveler('June Jung', 'Korea');
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());
