//bit.ly/github-jsdc-b1-3

// var nama_planet = "";
// for (i = 0; i <= 9; i++) {
//     var planet = obj.results[i].name;
//     nama_planet += "<td>" + planet + "</td>";
// }

// var data_planet = "";
// var planet_array = [];
// var rotation_array = [];

// for (j = 0; j <= 9; j++) {
//     var planet = obj.results[j].name;
//     var rotation = obj.results[j].rotation_period;
//     var orbital = obj.results[j].orbital_period;
//     var diameter = obj.results[j].diameter;
//     var climate = obj.results[j].climate;
//     var gravity = obj.results[j].gravity;
//     var terrain = obj.results[j].terrain;
//     var surface = obj.results[j].surface_water;
//     var population = obj.results[j].population;

//     planet_array[j] = planet;
//     rotation_array[j] = rotation;
// }

// for (k = 0; k <= 1; k++) {
//     data_planet += "<tr>" +
//         "<td>" + planet_array[k] + "</td>" +
//         "<td>" + rotation_array[k] + "</td>" +
//         "<td>" + orbital + "</td>" +
//         "<td>" + diameter + "</td>" +
//         "<td>" + climate + "</td>" +
//         "<td>" + gravity + "</td>" +
//         "<td>" + terrain + "</td>" +
//         "<td>" + surface + "</td>" +
//         "<td>" + population + "</td>" +
//         "</tr>";
// }
// document.getElementById('planet').innerHTML = data_planet;

// document.getElementById('btn').addEventListener("click", function () {
//     planet_array.sort();
//     console.log(planet_array);
//     console.log(rotation_array);
//     document.getElementById('planet').innerHTML = data_planet;
// });

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

data.results.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

console.log(data.results);




