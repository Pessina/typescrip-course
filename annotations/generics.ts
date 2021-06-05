class Car {
    print(): void {
        console.log('Im a car')
    }
}

class House {
    print(): void {
        console.log('Im a house')
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i of arr)
        i.print()
}
printHousesOrCars<Printable>([1, 2, 3, 4])
printHousesOrCars<Printable>([new Car(), new House()])