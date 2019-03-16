//bit.ly/github-jsdc-b1-3

function nameSort() {
    data.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    //console.log(data);
    let nameSortResult = data;
    return nameSortResult;
};

function callData(a) {
    dataTabel = "";
    for (i = 0; i <= 9; i++) {
        dataTabel += "<tr>" +
            "<td>" + a[i].name + "</td>" +
            "<td>" + a[i].rotation_period + "</td>" +
            "<td>" + a[i].orbital_period + "</td>" +
            "<td>" + a[i].diameter + "</td>" +
            "<td>" + a[i].climate + "</td>" +
            "<td>" + a[i].gravity + "</td>" +
            "<td>" + a[i].terrain + "</td>" +
            "<td>" + a[i].surface_water + "</td>" +
            "<td>" + a[i].population + "</td>" +
            "</tr>";
    };
    console.log("OK! Normal1");
    return dataTabel;
};

document.getElementById('dataTabel').innerHTML = callData(nameSort(data));

