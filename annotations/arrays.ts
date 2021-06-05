const carMakers: string[] = ['ford', 'toyota', 'chevy']
const arr: string[] = []
const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Type inference
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent adding incompatible values
carMakers.push(0)

// help with map
carMakers.map((car: string): string => {
    return car
})

// array with multiple values
const importantDates: (string | Date)[] = [new Date(), '2021-03-23']
importantDates.push(new Date())
importantDates.push('2121-21-21')
importantDates.push(9)
