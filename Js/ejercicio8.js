let alumno = [
    {nombre: "David Marcelo", edad: 20, clase:"Ingenería Web"},  
    {nombre: "Charamusca", edad: 27, clase:"Programación"},  
    {nombre: "Jorge", edad: 16, clase:"Cálculo"},  
    {nombre: "Pepito", edad: 34, clase:"Ética"},  
    {nombre: "Juanito", edad: 23,clase:"Desarrollo de Software"},  
    {nombre: "Susana", edad: 21,clase:"TIC"},  
    {nombre: "Pancho", edad: 17,clase:"Metología"},  
    {nombre: "Messi", edad: 20,clase:"Deportes"},  
    {nombre: "Cristiano", edad: 21,clase:"Atletismo"},  
    {nombre: "Puyol", edad: 22,clase:"Desportes"}
  ]
    let Viejos = alumno.filter(alumno => alumno.edad > 18 && alumno.edad < 25 );
    console.log("Los estudiantes mayores de 18 años y menores de 25 son: ");
    console.log(Viejos);
    

    let Veinte = alumno.find(alumno => alumno.edad === 20);
    console.log("El alumno que tiene 20 años es:");
    console.log(Veinte);
    


    console.log("Los estudiantes que tienen tienen entre 20 y 22 años son:");
    const jovenes = alumno.reduce((filteralumnos, alumno)=>{
    if(alumno.edad >=20 && alumno.edad<=22){
      filteralumnos.push(alumno.nombre)
    }
return filteralumnos;
    }, []);
    console.log(jovenes);