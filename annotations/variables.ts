let apples: number = 5
let speed: string = 'fast'
let hashName: boolean = true

let nothing: null = null
let nothing2: undefined = undefined
let now: Date = new Date()


// Arrays 
let colors: string[] = ['red', 'blue', 'green']
let myNumbers: number[] = [1, 2, 3]


// Classses
class Car {

}
let car: Car = new Car()

// Object literals
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// 1) Function return any
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates.x)

// 2) Variable not initialized
const numbers: number[] = [1, 2, 3]
let is2: boolean;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2)
        is2 = true;
}


// 3) Variable with multiple types
const numbers2: number[] = [1, 2, 3]
let numberAbove0: boolean | number = false;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 0)
        numberAbove0 = numbers2[i];
}
