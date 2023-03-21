const findTheOldest = function(object) {
  object.map((person) => {
    if (!person.yearOfDeath) { person.age = 2023 - person.yearOfBirth}
    else {person.age = person.yearOfDeath - person.yearOfBirth}
    return person
  })

  
  return object.reduce((oldest,person)=> {
      if( person.age>oldest.age  ) {return person}
      else {return oldest}
  })

};


// Do not edit below this line
module.exports = findTheOldest;

