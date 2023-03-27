const url="https://jsonplaceholder.typicode.com/todos/";
//async function para una función asíncrona, el fetch y json debe tener un await

async function obtenerTodo(id){
    //Versiones superirores de 18 en node.js  y fetch función para conectarse
    const respuesta=await fetch(`${url}${id}`);
    const datos=await respuesta.json(); //convierte el objeto fetch  un objeto json
    procesarJson(datos);
    return datos; //Para poder hacer el test
}

function procesarJson(dato){
    console.log(dato);

}
module.exports=obtenerTodo;
