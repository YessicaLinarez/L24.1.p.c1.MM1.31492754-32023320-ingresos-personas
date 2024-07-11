export default class Cl_persona{
    constructor(n,i){
        this.nombre=n;
        this.ingresos=i;
    }
    set nombre(n){
        this._nombre=n;

    }
    get nombre(){
        return this._nombre;
    }
    set ingresos(i){
        this._ingresos=i;
    }
    get ingresos(){
        return this._ingresos;
    }
}