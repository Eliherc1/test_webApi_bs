$(function () {
    $.ajax({
        url: 'https://startup.bolsadesantiago.com/api/consulta/ClienteMD/getIndicesRV?access_token={tu_apy_key}',
        type: 'POST',
        data: {},
        dataType: 'json',
        timeout: 1000,
        cache: false,
        beforeSend: LoadFunction, // Método de ejecución de carga
        error: erryFunction, // Método de ejecución de error
        success: succFunction // Método de ejecución exitoso
    });
    function LoadFunction() {
        $("#lista").html('Cargando ...');
    }
    function erryFunction() {
        alert("Error no se pueden obtener los datos");
    }

    function succFunction(tt) {
        $("#deptId").click(function () {
            $("#list").html('');
            var deptId = $('#deptId');
            //var listId = $("#indices");
            //console.log(tt);
            for (let i = 0; i < tt.listaResult.length; i++) {
                htmlStr = '';
                htmlStr += '<option  value="aa">' + tt.listaResult[i].indice /*+ ' Price: ' + tt.listaResult[i].price */ + '</option>';
                deptId.append(htmlStr)
                console.log(htmlStr)
                //listId.append(htmlStr)


            }
        })





    }
})