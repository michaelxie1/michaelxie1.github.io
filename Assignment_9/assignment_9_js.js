//John Object

const John = {
    firstName: "John",
    lastName: "Williams",
    birthYear: 1996,
    job: "student",
    friends: ["Mike", "Jack", "Peter"],
    
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    
    getSummary: function (){
        return `${this.firstName} is ${this.calAge()} years old, and he has ${this.age >= 18? this.license="a":this.license = "no"} driver's license` 
    }
}
console.log(`${John.firstName} has ${John.friends.length} friends, and his best friends are called ${John.friends[0]}`)
//console.log(John.calAge)
console.log(John.getSummary());

let closing = document.getElementById("close_button");
let modal = document.getElementById("modal_window");
let btn = document.getElementById("buttons");



btn.onclick = function(){
    modal.style.display = "block";
}
closing.onclick = function(){
    document.getElementById(modal).style.display='none';
}// unsure of how to call.
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
