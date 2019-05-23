function Requerimiento() {
    
    this.setCodigo = function(value){
        this._setCodigo = value;
    }

    this.getCodigo = function(){
        return this._setCodigo;
    }


    this.setDescripcion = function(value){
        this._descripcion = value;
    }

    this.getDescription = function(){
        return this._descripcion;
    }
}

Requerimiento.prototype.toString = function () {
    return 'Requerimiento: inherits Object';
}

function RequerimientoEspecial() {

    this._fecha = new Date();

    this.getFecha = function () {
        return this._fecha.toLocaleDateString();
    }
}

RequerimientoEspecial.prototype = Object.create(new Requerimiento());
RequerimientoEspecial.prototype.constructor = RequerimientoEspecial;

RequerimientoEspecial.prototype.toString = function () {
    return 'RequerimientoEspecial inherits Requerimiento';
}


function Dominio() {

    this.requerimientos = new Array();

    this.agregarRequerimiento = function (req)
    {
        this.requerimientos.push(req);
    }

    this.listarRequerimientos = function ()
    {
        return this.requerimientos;
    }
}

var dominio = new Dominio();
var code = 0;

function crearListar() {

    var req = new RequerimientoEspecial();
    req.setCodigo(code);
    req.setDescripcion("Descripción del req " + code);

    code++;

    dominio.agregarRequerimiento(req);

    var reqs = this.dominio.listarRequerimientos();

    var table = document.getElementById("reqTable");

    table.innerHTML = "";

    table.createTHead();
    var hdRow = table.tHead.insertRow();
    var codeHdCell = hdRow.insertCell(0);
    var descHdCell = hdRow.insertCell(1);
    var fechaHdCell = hdRow.insertCell(2);

    codeHdCell.innerHTML = "Código";
    descHdCell.innerHTML = "Descripción";
    fechaHdCell.innerHTML = "Fecha";

    for (i = 0; i < reqs.length; i++) {       

        var row = table.insertRow();
        var codeCell = row.insertCell(0);
        var descCell = row.insertCell(1);
        var fechaCell = row.insertCell(2);
        codeCell.innerHTML = reqs[i].getCodigo();
        descCell.innerHTML = reqs[i].getDescription();
        fechaCell.innerHTML = reqs[i].getFecha();
    }

    document.getElementById("cantReq").innerText = reqs.length;       
}