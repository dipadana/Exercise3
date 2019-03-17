//bit.ly/github-jsdc-b1-3

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

//sort by name
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
    let nameSortResult = data;
    return nameSortResult;
};
function nameSortReverse() {
    data.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    })
    //console.log(data);
    let nameSortResult = data;
    return nameSortResult;
};

function climateSort() {
    data.sort(function (a, b) {
        var nameA = a.climate.toUpperCase();
        var nameB = b.climate.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};
function climateSortReverse() {
    data.sort(function (a, b) {
        var nameA = a.climate.toUpperCase();
        var nameB = b.climate.toUpperCase();
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    })
    //console.log(data);
    let nameSortResult = data;
    return nameSortResult;
};

document.getElementById('dataTabel').innerHTML = callData(data);

var nameBtn = document.getElementById('sortName');
nameBtn.addEventListener('click', myFunction);
function myFunction() {
    if (document.getElementById('dataTabel').innerHTML == callData(nameSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(nameSortReverse(data));
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(nameSort(data));
    }
}
