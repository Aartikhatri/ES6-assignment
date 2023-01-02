var a=10; // Here value of a is 10
var b=8; // Here value of b is 8
var c=6; // Here value of c is 6
{
    let a = 2;// Here value of a is 2 but only within the blockvar
    var b = 10;// Here value of b is 10 inside and outside the block it will remain 10 
    const c = 8;// Here value of c is 8 but only within the block
   // const cannot be reassigned
   //  c=5;
};

document.write("The value of a is : " +a);// let has block scope
document.write("<br>");
document.write("The value of b is : " +b);

// var does not have block scope
document.write("<br>");
document.write("The value of c is  : " +c);
document.write("<br>");
// const has block scope

// class ==>  
// parent class

class Employee{
     constructor( name, company , year){
        this.emp_name = name;
        this.companys = company;
        this.years = year
     }

     sayHello(){
        document.write (` employee name is ${this.emp_name} , worked in ${this.companys} , for ${this.years} `
        )
    }
}

// let employee1 = new Employee("aarti" , "vipro" , "5 years");
// let employee2 = new Employee("sanju" , "TCS" , "6 years");
// employee1.sayHello()
// employee2.sayHello()

// ===================================================================

// child class ==>  targeting parent class with child class method   

class manager extends Employee{
    constructor(n, c, y ,  manager_name){
        super(n , c , y) // to connect the parent constrctor we will pass super() methode here 

        this.manager_n = manager_name 
        console.log("ohk");
    }
      
    new_function(){
        super.sayHello();
        document.write(`with manager "${this.manager_n}" <br> `)
    }
}

let manager1 = new manager( "aarti" , "vipro" , "5 years", "jagdish")
manager1.new_function();

// note --> In child contructor function , we have to pass same parameter as  parent constructor , to use it in child class as welll as we can pass new parameter in it 
// note-2 ==> super function contain all parent constructor parameter
