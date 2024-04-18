function Usuarios(array){
    const users = {}; // Objeto para almacenar los resultados
    for(let i = 0; i < array.length; i++){
        const user = array[i];
        users[user.name] = { // La clave del objeto será el nombre del usuario
            resultsArray: [{subject: user.subject, points: user.points}], // Utilizar directamente el array 'points' como 'resultsArray'
            avgPoints: avg(user.points) // Calcular la media de los puntos del usuario
        };
    }
    return users; // Devolver el objeto 'users'
}

function avg(points){
    let sum = 0;
    for(let i = 0; i < points.length; i++){
        sum += points[i];
    }
    return sum / points.length;
}

const users = new Usuarios([
    {name: 'John', subject: "Mate", points: [3, 5, 4, 6, 6]},
    {name: 'Jane', subject: "FTI", points: [5, 5, 3, 6, 6]},
    {name: 'Jim', subject: "PDS", points: [4, 5, 4, 6, 6]}
]);

console.log(users);
