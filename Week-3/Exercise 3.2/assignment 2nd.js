let name1 = {
  fName: "Kavish",
  lName: "Garg",
};

let name2 = {
    fName: "Nishu",
    lName: "Garg",
  };

let printNameCall = function () {
  console.log(this.fName + " " + this.lName);
};

let printNameApply = function (age, city) {
  console.log(
    this.fName + " " + this.lName + " ,Age is " + age + " Lives in " + city
  );
};


//Function Call Method
printNameCall.call(name1);
printNameCall.call(name2);

//Function Apply Method
printNameApply.apply(name1, ["20", "Indore"]);
printNameApply.apply(name2, ["25", "Bhopal"]);

//Function Bind Method
let bindFun1 = printNameCall.bind(name1);
bindFun1();
let bindFun2 = printNameApply.bind(name2,"30","Goa");
bindFun2();
