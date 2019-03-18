//bit.ly/github-jsdc-b1-3
document.getElementById('dataTabel').innerHTML = callData(data);

/* call data */
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
    };
    console.log("OK! Normal1");
    return dataTabel;
};

/* sort funtion */
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
    })
    let nameSortResult = data;
    return nameSortResult;
};
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
    })
    let nameSortResult = data;
    return nameSortResult;
};

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
    })
    let nameSortResult = data;
    return nameSortResult;
};
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
    })
    let nameSortResult = data;
    return nameSortResult;
};

//sort by diameter
function diameterSort() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.diameter);
        var numberB = parseInt(b.diameter);
        if (numberA < numberB) {
            return -1;
        }
        if (numberA > numberB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};
function diameterSortReverse() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.diameter);
        var numberB = parseInt(b.diameter);
        if (numberA > numberB) {
            return -1;
        }
        if (numberA < numberB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};

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
    let nameSortResult = data;
    return nameSortResult;
};

//sort by gravity
function gravitySort() {
    data.sort(function (a, b) {
        var nameA = a.gravity.toUpperCase();
        var nameB = b.gravity.toUpperCase();
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
function gravitySortReverse() {
    data.sort(function (a, b) {
        var nameA = a.gravity.toUpperCase();
        var nameB = b.gravity.toUpperCase();
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};

//sort by surface
function surfaceSort() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.surface_water);
        var numberB = parseInt(b.surface_water);
        if (numberA < numberB) {
            return -1;
        }
        if (numberA > numberB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};
function surfaceSortReverse() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.surface_water);
        var numberB = parseInt(b.surface_water);
        if (numberA > numberB) {
            return -1;
        }
        if (numberA < numberB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};

//sort by population
function populationSort() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.population);
        var numberB = parseInt(b.population);
        if (numberA < numberB) {
            return -1;
        }
        if (numberA > numberB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};
function populationSortReverse() {
    data.sort(function (a, b) {
        var numberA = parseInt(a.population);
        var numberB = parseInt(b.population);
        if (numberA > numberB) {
            return -1;
        }
        if (numberA < numberB) {
            return 1;
        }
        return 0;
    })
    let nameSortResult = data;
    return nameSortResult;
};

/* click sort fungtion */

function sortName() {
    if (document.getElementById('dataTabel').innerHTML == callData(nameSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(nameSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name˄";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(nameSort(data));
        document.getElementById('sortName').innerHTML = "Name˅"
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";;
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortOrbital() {
    if (document.getElementById('dataTabel').innerHTML == callData(orbitalSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(orbitalSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period˄";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(orbitalSort(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period˅";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortRotation() {
    if (document.getElementById('dataTabel').innerHTML == callData(rotationSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(rotationSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period˄";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(rotationSort(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period˅";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortDiameter() {
    if (document.getElementById('dataTabel').innerHTML == callData(diameterSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(diameterSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter˄";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(diameterSort(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter˅";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortClimate() {
    if (document.getElementById('dataTabel').innerHTML == callData(climateSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(climateSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate˄";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(climateSort(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate˅";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortGravity() {
    if (document.getElementById('dataTabel').innerHTML == callData(gravitySort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(gravitySortReverse(data));
        document.getElementById('sortGravity').innerHTML = "Gravity˄";
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(gravitySort(data));
        document.getElementById('sortGravity').innerHTML = "Gravity˅";
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortSurface() {
    if (document.getElementById('dataTabel').innerHTML == callData(surfaceSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(surfaceSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface˄";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(surfaceSort(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface˅";
        document.getElementById('sortPopulation').innerHTML = "Population";
    }
}

function sortPopulation() {
    if (document.getElementById('dataTabel').innerHTML == callData(populationSort(data))) {
        document.getElementById('dataTabel').innerHTML = callData(populationSortReverse(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population˄";
    }
    else {
        document.getElementById('dataTabel').innerHTML = callData(populationSort(data));
        document.getElementById('sortName').innerHTML = "Name";
        document.getElementById('sortRotation').innerHTML = "Rotation Period";
        document.getElementById('sortOrbital').innerHTML = "Orbital Period";
        document.getElementById('sortDiameter').innerHTML = "Diameter";
        document.getElementById('sortClimate').innerHTML = "Climate";
        document.getElementById('sortGravity').innerHTML = "Gravity";
        document.getElementById('sortSurface').innerHTML = "Surface";
        document.getElementById('sortPopulation').innerHTML = "Population˅";
    }
}



