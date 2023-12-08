export function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(args)
        console.log(`Ejecutando: ${propertyKey}`);//esta es la funcionalidad adicional
        //aunque el método modificado recibe los argumenots, no los usa pero sí podría hacerlo.
        //por ejemplo podría validarlos o algo así. Sin embargo, solo los recibe y los pasa al original.
        return originalMethod.apply(this, args);//apply es para que se ejecute el metodo original 
        //es decir llama a una función
    }
}


export function generarId(): number {
    return Math.floor(Math.random() * Date.now());
}
/*
export function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const { value: originalMethod } = descriptor;
    descriptor.value = function(...args: any[]) {
        console.log(`Ejecutando: ${propertyKey}`);
        return originalMethod.apply(this, args);
    }
}


*/