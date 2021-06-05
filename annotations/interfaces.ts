// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }

// interface Reportable {
//     summary(): string;
// }

// const oldCivic = {
//     name: 'civic',
//     year: new Date(),
//     broken: false,
//     summary(): string {
//         return `Name: ${this.name}`
//     }
// }

// const juice = {
//     color: 'brown',
//     carbonated: true,
//     sugar: 40,
//     summary(): string {
//         return `My drink is ${this.color}`
//     }
// }

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(vehicle.summary())
// }

// const printSummary = (item: Reportable): void => {
//     console.log(item.summary())
// }

// printVehicle(oldCivic)
// printSummary(oldCivic)
// printSummary(juice)