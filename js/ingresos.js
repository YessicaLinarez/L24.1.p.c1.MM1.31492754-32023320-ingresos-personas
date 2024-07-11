export default class cl_ingresos{
    constructor(){
        this.menor= 1000;
        this.auxIngreso= " ";
        this.acumIngreso =0;
        this.contPersona= 0;
    }
    procesarPersona(pe){
        //vemos el menor ingreso
        if(pe.ingresos<this.menor){
            this.menor=pe.ingresos;
            this.auxIngreso=pe.ingresos;
        }
        //acumulamos los ingresos
        this.acumIngreso+=pe.ingresos;
        //contamos a las personas
        this.contPersona++;
    }
    devolverAuxIngreso(){
        return this.auxIngreso;
    }
    promedioIngreso(){
        return this.acumIngreso/this.contPersona;
    }
}