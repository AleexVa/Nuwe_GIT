/**
 * Given an array of people (a person has age and name) get an object 
 * where the keys are the age of the people and the value is an array 
 * of all the people with that age.
 */

const arr =  [["edgar", 10], ["pablo", 15], ["carlos", 10],[ "alex", 9],["Oscar", 9],["Julio", 15]]

const grouper = (arr)=> {

    const people = {}
    // Recorremos array
    // element --> corresponse a cada subarray dentro de arr
    // element = [0,1] --> [element[0],element[1]]
    arr.forEach(element => {
        // Condición apra ver si la key del objeto existe
        const condition = people[element[1]]!== undefined
        if(condition) {
            // Si existe, añadimos valores al array
            // ... --> es un operador que copia todo lo que encuentra después de este
            people[element[1]] = [...people[element[1]],element[0]]
        } else {
            // Inicializamos y le damos valor en un array []
            people[element[1]] = [element[0]]
        } 
    });

   console.log(people)

}

grouper(arr)

module.exports = grouper