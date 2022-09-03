function  sumaProductos (mother, procesador, almacenamiento, ram, Fuente, gabinete){
    let costo =0;
    if(mother == 1){
        costo = costo + 9500;
    }else{
        costo = costo + 18400;
    }
    if(procesador == 1){
        costo = costo + 35900;
    }else{
        costo = costo + 69000;
    }
    if(almacenamiento == 1){
        costo = costo + 7000;
    }else{
        costo = costo + 6400;
    }
    if(ram == 1){
        costo = costo + 7200;
    }else{
        costo = costo + 12100;
    }
    if(Fuente == 1){
        costo = costo + 5000;
    }else{
        costo = costo + 7400;
    }
    if(gabinete == 1){
        costo = costo + 7800;
    }else{
        costo = costo + 8400;
    }
    return costo
}

let opcion = parseInt(prompt("Bienvenido a nuestro sistema de ayuda para presupuestos de computadoras gamers.\n Por el momento solo contamos con servicio para componentes de gama baja.\n¿Quiere que su computadora sea gama: \n 1) baja\n 2) media\n 3)alta"))
do{
    if( opcion < 1 || opcion > 3 ){
        alert("opcion incorrecta")
        opcion = parseInt(prompt("Biemvenido a nuestro sistema de ayuda para presupuestos de computadoras gamers.\n Por el momento solo contamos con servicio para componentes de gama baja.\n¿Quiere que su computadora sea gama: \n 1) baja\n 2) media\n 3) alta?"))
    }

    if( opcion = 1 ){
        let mother = parseInt( prompt("Elija el modelo de motherboard: \n 1) a320. Precio: $9500 \n 2) b450. Precio: $18400") )
        let procesador = parseInt(prompt("elija el procesador: \n 1) Ryzen 5 5600g. Precio = $35900 \n 2) Ryzen 7 5700g. Precio = $69000"))
        let almacenamiento = parseInt(prompt("Elija entre un \n 1) HDD. Precio: $7000 o \n 2) SDD. Precio: $6400"))
        let ram = parseInt(prompt("Elija entre \n 1) 8gb. Precio: $7200 o \n 2) 16gb. Precio: $12100"))
        let Fuente = parseInt(prompt("Elija una fuente: \n 1) generica de 600w. Precio: $5000 \n 2) fuente 550w 80plus bronze. Precio $7400"))
        let gabinete = parseInt(prompt("Elija entre los gbainetes: \n 1) Knight Black Fan RGB. Precio $7800 \n 2) Kolink inspire K5 RGB ATX. Precio $8400"))
        computadora = alert(`El resultado final seria este:\nMotherBoard:${mother}\nProcesador:${procesador}\nAlmacenamiento:${almacenamiento}\nRam:${ram}\nFuente:${Fuente}\nGabinete:${gabinete}\n Costo final: $${ sumaProductos (mother, procesador, almacenamiento, ram, Fuente, gabinete)}`)
        computadora = prompt("¿Quiere confirmar? si/no")
        if(computadora.toLowerCase() == "si"){
            alert("Muchas gracias por elegirnos.")
        }
    }
}while( opcion < 1 || opcion > 3 )


