var UrlApiGetAll = 'http://localhost:5006/avion/getall';
var UrlApiInsert = 'http://localhost:5006/avion/insertar';
var UrlApiGetUno = 'http://localhost:5006/avion/getone/:numeroavion';

$(document).ready( function(){
    CargarAvion();
});


function CargarAvion(){
    $.ajax({
        url: UrlApiGetAll,
        type:'GET',
        datatype:'JSON',
        success: function(response){ 
            var MisItems = response;
            var Valores ='';
            for(i = 0; i < MisItems.length; i++)
            {
                Valores +=
                '<tr>'+
                    '<td>'+ MisItems[i].numeroavion + '</td>'+
                    '<td>'+ MisItems[i].tipoavion + '</td>'+
                    '<td>'+ MisItems[i].horasvuelo + '</td>'+
                    '<td>'+ MisItems[i].capacidadpasajero +'</td>'+
                    '<td>'+ MisItems[i].fechaprimervuelo +'</td>'+
                    '<td>'+ MisItems[i].paisconstruccion +'</td>'+
                    '<td>'+ MisItems[i].cantidadvuelo + '</td>'+
                    '<td>'+
                    '<button class="btn btn-primary" onclick="CargarAvion('+MisItems[i].numeroavion +')">Editar</button>'+
                    '</td>'+
                    '</tr>';
                    $('#DatosAvion').html(Valores);

            }
        },
        error : function(tetxError, errorThrown){

            alert('Error '+tetxError+ errorThrown);
            
            }

    });
}

function AgregarAvion(){
    var datosavion={
        numeroavion : $('#numeroavion').val(),
        tipoavion : $('#tipoavion').val(),
        horasvuelo :$('#horasvuelo').val(),
        capacidadpasajero :$('#capacidadpasajero').val(),
        fechaprimervuelo : $('#fechaprimervuelo').val(),
        paisconstruccion : $('#paisconstruccion').val(),
        cantidadvuelo : $('#cantidasvuelo').val(),
    }
    var datosalumnojson = JSON.stringify(datosavion);

    alert(datosalumnojson);

    $.ajax({
        UrlApiInsert,
        type: 'POST',
        data: datosalumnojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            alert('Avion ingresado de forma correcta');
            $('#MiFormulario').submit();
        },
        error : function(textError,errorThrown){
            alert('Error: '+ textError +errorThrown);
        }
    });

}

function CargarAvionn(pnumeroavion){

    var datosalumno = {
        numeroavion : pnumeroavion
    };

    var datosalumnojson = JSON.stringify(datosavion);

    $.ajax({
        url : UrlApiGetUno,
        type: 'POST',
        data: datosalumnojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success : function(response){
            var MisItems = response;
            for(i = 0; i < MisItems.length; i++)
            {
                $('#numeroavion').val(MisItems[i].numeroavion);
                $('tipoavion').val(MisItems[i].tipoavion);
                $('horasvuelo').val(MisItems[i].horasvuelo);
                $('#capacidadpasajero').val(MisItems[i].capacidadpasajero);
                $('#fechaprimervuelo').val(MisItems[i].fechaprimervuelo);
                $('#paiscontruccion').val(MisItems[i].paisconstruccion);
                $('#cantidadvuelo').val(MisItems[i].cantidadvuelo);
                var btnactualizar = ' <input type="submit" value="Actualizar Avion" class="btn btn-primary" id="btnagregar"'+
                'onclick="ActualizarAvion('+ MisItems[i].numeroavion +')">';
                $('#btnagregaravion').html(btnagregaravion);
            }
    
        }

    });
}

function ActualizarAvion(pnumeroavion){

}