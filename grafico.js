let miCanvas = document.getElementById("MiGrafico").getContext("2d");

$(function () {
    $(".grafico").click(function () {
        $.post('https://startup.bolsadesantiago.com/api/consulta/ClienteMD/getIndicesRV?access_token={tu_apy_key}', function (data) {
            var chart = new Chart(miCanvas, {
                type: "bar",
                data: {
                    labels: [data.listaResult[1].indice, data.listaResult[43].indice, data.listaResult[50].indice, data.listaResult[53].indice], //aqui van los indices SPCLXIGPA, SP IPSA y SPMILA
                    datasets: [
                        {
                            label: "Grafico de indicadores",
                            backgroundColor: "#0BBACB",
                            data: [data.listaResult[1].price, data.listaResult[43].price, data.listaResult[50].price, data.listaResult[53].price]

                        }
                    ]
                }
            })
        })
    })
})