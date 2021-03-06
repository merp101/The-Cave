/*function loadMap(r,c) { //rows, columns
  var map = document.getElementById("map");
  for (r; r--; r>0) {
    let row = document.createElement("ul");
    row.style = "";
    map.appendChild("row");
    for (c; c--; c>0) {
      let column = document.createElement("li");
      column.style = "width: 10%; padding-top: 0.526316vh; padding-bottom: 0.526316vh; font-size: 1.71429vh; border: 5px solid black; text-shadow: rgb(251, 117, 63) 0px 0px 15px;";
      map.appendChild("column");
    }
  }
}*/

var generalArt = {
	player: "\\o/", //the 'o' is the 6th char (index 5)
	enemy: "x" //the 'x' is the 4th char (index 3)
};

var invArt =
	"_________________________________________________________________________________ <br>|       |       |       |       |       |       |       |       |       |       | <br>|       |       |       |       |       |       |       |       |       |       | <br>|_______|_______|_______|_______|_______|_______|_______|_______|_______|_______| <br>|       |       |       |       |       |       |       |       |       |       | <br>|       |       |       |       |       |       |       |       |       |       | <br>|_______|_______|_______|_______|_______|_______|_______|_______|_______|_______| <br>|       |       |       |       |       |       |       |       |       |       | <br>|       |       |       |       |       |       |       |       |       |       | <br>|_______|_______|_______|_______|_______|_______|_______|_______|_______|_______| <br>|       |       |       |       |       |       |       |       |       |       | <br>|       |       |       |       |       |       |       |       |       |       | <br>|_______|_______|_______|_______|_______|_______|_______|_______|_______|_______| <br>";

var conv;
const maps = {
	// (length x height) chars. USE <u> TAGS INSTEAD OF UNDERLINES ON FLOORS
	hub: [
		"__ ______ _____ ________ _ ____________ ______________ _________",
		"| v      v     v        V v            v              v         ",
		"|                                             xx                ",
		"|                                             xx                ",
		"|                                            |  |               ",
		"|       _____          ____                  |  |               ",
		"|      /bbbbb\\        /    \\___________     /    \\____________  ",
		"|     |bbbbbbb|      |  +++  \\         \\   |  --#  \\          \\ ",
		"|     |bbbbbbb|      |   O      __     |   |   O        __    | ",
		"|     /       \\      |  \\|/    |  |    |   |  \\|/      |  |   | ",
		"|<u>    /         \\     |  / \\    |° |    |   |  / \\      |° |   | </u>"
	],
	cave: [
		" ________________ ", // 18x5
		"/                \\",
		"|                 ",
		"|                 ",
		"|<u>                 </u>"
	],
	caveEnemyPos: ["5,1", "8,1"], //x,y
	caveDiff: 0,
	fireCave: [
		"                  .                             ",
		"                . M                             ",
		"               ,M M                             ",
		"               M M:                             ",
		"      .       Y M M,                            ",
		"      M       'M M M,           ,               ",
		"      M .     ` M M M         . M               ",
		"      M M ,    ,M M M       , M M               ",
		"       \"M M , M M M '     , M M'               ",
		"     , M M M . M M M M M . M M M ,              ",
		"     M M M M M M M M M M M M M M M              ",
		"    M                             M             ",
		"    M                             M             ",
		"     M                           M              "
	],
	desert: []
};

export { maps, conv, invArt, generalArt };
