let valores = [true, 5, false, "hola", "adios", 2];
        var max = 0;
        var textM;

        valores.forEach(function(valor) {
         if((typeof(valor) == 'string' ) && (valor.length > max)){
         max = valor.length;
         textM = valor;
        }
        });
        console.log( "El elemento de texto mayor es: '"+ textM + "'");