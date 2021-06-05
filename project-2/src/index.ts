import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([5, 1, 6, 8, 9,])
const charactersCollection = new CharactersCollection('xzahb')
const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(3)
linkedList.add(2)
linkedList.add(5)
linkedList.add(9)
linkedList.add(7)

numbersCollection.sort()
charactersCollection.sort()
linkedList.sort()

console.log(numbersCollection)
console.log(charactersCollection)
console.log(linkedList)