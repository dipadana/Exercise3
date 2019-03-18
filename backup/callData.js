//bit.ly/github-jsdc-b1-3
function callData(a) {
    dataTabel = "";
    for (i = 0; i <= 9; i++) {
        dataTabel += "<tr>" +
            "<td>" + a[i].name + "</td>" +
            "<td>" + parseInt(a[i].rotation_period) + "</td>" +
            "<td>" + a[i].orbital_period + "</td>" +
            "<td>" + a[i].diameter + "</td>" +
            "<td>" + a[i].climate + "</td>" +
            "<td>" + a[i].gravity + "</td>" +
            "<td>" + a[i].terrain + "</td>" +
            "<td>" + a[i].surface_water + "</td>" +
            "<td>" + a[i].population + "</td>" +
            "</tr>";
    }
    ;
    console.log("OK! Normal1");
    return dataTabel;
}
;
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
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
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
    });
    //console.log(data);
    let nameSortResult = data;
    return nameSortResult;
}
;
//sort by rotation
function rotationSort() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.rotation_period);
        var numberB = parseInt(b.rotation_period);
        if (numberA < numberB) {
            return -1;
        }
        if (numberA > numberB) {
            return 1;
        }
        return 0;
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
function rotationSortReverse() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.rotation_period);
        var numberB = parseInt(b.rotation_period);
        if (numberA > numberB) {
            return -1;
        }
        if (numberA < numberB) {
            return 1;
        }
        return 0;
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
//sort by orbital
function orbitalSort() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.orbital_period);
        var numberB = parseInt(b.orbital_period);
        if (numberA < numberB) {
            return -1;
        }
        if (numberA > numberB) {
            return 1;
        }
        return 0;
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
function orbitalSortReverse() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.orbital_period);
        var numberB = parseInt(b.orbital_period);
        if (numberA > numberB) {
            return -1;
        }
        if (numberA < numberB) {
            return 1;
        }
        return 0;
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
//sort by orbital
function orbitalSort() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.orbital_period);
        var numberB = parseInt(b.orbital_period);
        if (numberA < numberB) {
            return -1;
        }
        if (numberA > numberB) {
            return 1;
        }
        return 0;
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
function orbitalSortReverse() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.orbital_period);
        var numberB = parseInt(b.orbital_period);
        if (numberA > numberB) {
            return -1;
        }
        if (numberA < numberB) {
            return 1;
        }
        return 0;
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
//sort by climate
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
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
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
    });
    let nameSortResult = data;
    return nameSortResult;
}
;
document.getElementById('dataTabel').innerHTML = callData(rotationSortReverse(data));
function sortName() {
    if (document.getElementById('dataTabel').innerHTML == callData(nameSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(nameSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name˄";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(nameSort(data));
        document.getElementById('sortName').innerHTML = "Name˅";
    }
}
function sortOrbital() {
    if (document.getElementById('dataTabel').innerHTML == callData(orbitalSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(orbitalSortReverse(data));
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(orbitalSort(data));
    }
}
function sortRotation() {
    if (document.getElementById('dataTabel').innerHTML == callData(rotationSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(rotationSortReverse(data));
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(rotationSort(data));
    }
}
function sortClimate() {
    if (document.getElementById('dataTabel').innerHTML == callData(climateSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(climateSortReverse(data));
        document.getElementById('sortClimate').innerHTML = "Climate˄";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(climateSort(data));
        document.getElementById('sortClimate').innerHTML = "Climate˅";
    }
}
