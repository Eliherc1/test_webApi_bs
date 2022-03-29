
$(".listar").click(function () {
    $.post('https://startup.bolsadesantiago.com/api/consulta/ClienteMD/getIndicesRV?access_token={tu_apy_key}', function (data) {
        $("#indices").html("");
        //console.log(data)
        for (let i = 0; i < data.listaResult.length; i++) {
            var tr = `<tr>
                    <td>`+ data.listaResult[i].indice + `</td>
                    <td>`+ data.listaResult[i].nemo + `</td>
                    <td>`+ data.listaResult[i].price + `</td>
                    <td>`+ data.listaResult[i].variation + `</td>

                    </tr>`;
            $("#indices").append(tr)
        }
    })



})

