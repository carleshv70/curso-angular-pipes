import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {

    // los parametros se pueden recoger tambien con variables
    // transform(value: string, arg1:any, arg2:any): string {
    // transform(value: string, ...args:any[]): string {
    transform(value: string, todas:boolean = true): string {

        let result = "";
        value = value.toLowerCase();
        let nombres = value.split(' ');

        if(todas){
            if (value) {
                nombres.forEach(element => {
                    result += element.substr(0, 1).toUpperCase() + element.substr(1) + ' ';
                });
                result = result.substr(0, result.length - 1);
            }
        }
        else {
            // continuar aquí      
            nombres[0] = nombres[0][0].toUpperCase()+ nombres[0].substr(1);
            result = nombres.join(' ');
        }
        return result
    }
}