let age: number

age = 21

/**
 * @type array of string
 */
let hobbies: string[]

hobbies = ['Sports', 'Traveling']

type Person = {
    name: string, 
    age: number
}

/**
 * using type alias
 */

let person: Person

type People = Person[]

let people: People

/**
 * using generics for function declaration
 */

function insertAtBeginning<Type>(array: Type[], value: Type) {
    const newArray = [value, ...array]

    return newArray
}

const numberArray = [1, 2, 3]

/**
 * @returns [0, 1, 2, 3]
 */
const updatedNumberArray = insertAtBeginning(numberArray, 0)

const stringArray = ['c', 'd']

/**
 * @returns ['b', 'c', 'd']
 */
const updatedStringArray = insertAtBeginning(stringArray, 'b')