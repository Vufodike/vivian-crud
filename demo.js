// var studentName = 'Vee';


// console.log(studentName);

// studentName = 10

// console.log(studentName);



function render(view, info){
   return `VIEW NAME: ${view} \nADDITIONAL INFO: ${info}`;
}


function addValues(number1, number2){
    return number1 + number2;
}

// console.log(addValues(2, 6))

// console.log(addValues(6, 6))

let returnedvalue = render('index', 'This is an additional information');

//console.log(returnedvalue)

//OPERATORS
//console.log(20/8)


//OBJECTS

let Person = {
    'property': 'value',
    name: 'Vee',
    age: 14,
    greet: function(){
        return 'Hello Vee'
    }
};

const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car['model']);
for (let property in car) {
     console.log(car[property])
}

// console.log(car.model)
// console.log(Person);
//ARRAYS
let ages = [1,2,3,4,5,6];

let cars = ['Saab', 'Volvo', 'BMW', 'Mazda', 'WG']
//let cars = [0,1,2]
//let saab = cars[4];
//console.log(saab)

//FOR LOOP
// for(let index=0; index < cars.length; index++){
//     console.log(cars[index])
// }




