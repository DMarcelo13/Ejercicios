var n1, primo;
n1 = parseInt(prompt("Introduce un número"));
i=0;
primo=true;

for(i=2; i<n1;i++){
    if(n1%i==0){
        primo=false;
    }
}

if(primo==true){
    console.log("El número "+n1+" es primo");
}else{
    console.log("El número "+n1+" no es primo");
}