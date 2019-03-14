//bit.ly/github-jsdc-b1-3



var nama_planet = "";
for (i = 0; i <= 9; i++) {
    var planet = obj.results[i].name;
    nama_planet += "<li>" + planet + "</li>";
}

console.log(planet);
document.getElementById('planet').innerHTML = nama_planet;

