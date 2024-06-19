class Galeh {
    constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  class Cicak extends Galeh {
    constructor(name, age) {
      super(name, age, true);
    }
  
    eat() {
      return `${this.name} lupa  puasa`;
    }
  }
  
  class Puyuh extends Galeh {
    constructor(name, age) {
      super(name, age, false);
    }
  
    nyelem() {
      return `${this.name} burung penyelam`;
    }
  }
  
  
  const myCicak = new Cicak("Arul", 15);
  
 
  const myPuyuh = new Puyuh("puyuh", 8);
  
  
  console.log(myCicak.eat());
  console.log(myPuyuh.nyelem()); 
  console.log(`Cicak { name: '${myCicak.name}', age: ${myCicak.age}, isMammal: ${myCicak.isMammal} }`);
  console.log(`Puyuh { name: '${myPuyuh.name}', age: ${myPuyuh.age}, isMammal: ${myPuyuh.isMammal} }`);
  

  console.log(`Nama cicak: ${myCicak.name}`);
  console.log(`Usia cicak: ${myCicak.age} tahun`);
  console.log(`Emang cicaknya islam? ${myCicak.isMammal}`);
  
  console.log(`Nama puyuh: ${myPuyuh.name}`);
  console.log(`Usia puyuh: ${myPuyuh.age} tahun`);
  console.log(`Emang puyuh bisa nyelem? ${myPuyuh.isMammal}`);
  
