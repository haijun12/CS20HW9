

$(document).ready(function(){
    $.getJSON('songlists.json', function(songs) {
            serialize(songs);
            createTable(songs, "songs");
        })
});
// Part 2 - serializing data
function serialize(songs){
    var songString = JSON.stringify(songs);
    document.getElementById("serializeData").innerHTML = songString;
}
// Part 3 - tabilizing data
function createTable(songs, id)
{
    for (var i = 0; i < songs.length; i++) {
        var song = "<tr>" + "<td>" + songs[i].name + "</td>"
            + "<td>" + songs[i].artist + "</td>"
            + "<td>" + songs[i].genre.first + "</td>"
            + "<td>" + songs[i].genre.second + "</td>"
            + "<td>" + songs[i].released + "</td>"
            + "</tr>";
        document.getElementById(id).innerHTML += song;
    }
}
// Part 4 - filtering data
function filterForm(data)
{
    document.getElementById("filteredData").style.visibility = "visible";
    var table = document.getElementById("songs");
    var filter = document.getElementById("genres").value;
    $("#filteredSongs > tbody").html(" ");
    for (i = 1; i < table.rows.length; i++) {
        var firstGenre = table.rows[i].cells[2].innerHTML;
        var secondGenre = table.rows[i].cells[3].innerHTML;
        if ((firstGenre == filter) || (secondGenre == filter))
        {   var row = "<tr>";
            for (var j = 0; j < 5; j++) {
                row += "<td>" + table.rows[i].cells[j].innerHTML + "</td>"
            }
            row += "</tr>";
            $(row).appendTo("#filteredSongs tbody");
        }
    }
}