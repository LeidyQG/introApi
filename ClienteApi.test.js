const obtenerTodo=require('./ClienteApi');


//Si la prueba es sobre una función asíncrona, la funci9ón de callback debe ser async también
test("Retorno de datos desde la API", async ()=>{
    const datos=await obtenerTodo(1); //Si la función es asíncrna, siempre se debe poner el await
    expect(datos.userId).toEqual(1);
}
);

test("Retorno de datos desde la API con dos items", async ()=>{
    const datos=await obtenerTodo(3); //Si la función es asíncrna, siempre se debe poner el await
    expect(datos.userId).toEqual(1);
    expect(datos.id).toEqual(3);//No se recomienda porer más de un expect en cada test
}
);