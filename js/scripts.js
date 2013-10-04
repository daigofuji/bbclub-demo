$(function() {
	/* enable bootstrap date picker */
	$('#pickadate').datepicker();

	/* cheating */
	var games = [{"game ":1,"visitor":"bos","vrun":13,"home":"nyy","hrun":9},
	{"game ":2,"visitor":"cws","vrun":3,"home":"bal","hrun":4},
	{"game ":3,"visitor":"lad","vrun":3,"home":"cin","hrun":4},
	{"game ":4,"visitor":"hou","vrun":1,"home":"oak","hrun":2},
	{"game ":5,"visitor":"mil","vrun":5,"home":"chc","hrun":3},
	{"game ":6,"visitor":"nym","vrun":4,"home":"cle","hrun":9},
	{"game ":7,"visitor":"atl","vrun":5,"home":"phi","hrun":6},
	{"game ":8,"visitor":"det","vrun":3,"home":"kc","hrun":4},
	{"game ":9,"visitor":"tor","vrun":11,"home":"min","hrun":2},
	{"game ":10,"visitor":"wsh","vrun":9,"home":"mia","hrun":2},
	{"game ":11,"visitor":"pit","vrun":0,"home":"stl","hrun":5},
	{"game ":12,"visitor":"col","vrun":1,"home":"sd","hrun":2},
	{"game ":13,"visitor":"ari","vrun":2,"home":"sf","hrun":1},
	{"game ":14,"visitor":"tex","vrun":3,"home":"laa","hrun":8},
	{"game ":15,"visitor":"tb","vrun":2,"home":"sea","hrun":6}];


	/* adjust this to change dates */


	//console.log("Run?");
	var sportsdataAPI = "ajax/getbox.php?y=2013&m=09&d=07";

	$.get(sportsdataAPI, function(data) {
		var xmlDoc = $.parseXML( data ),
			$xml = $( xmlDoc ),
			$boxscores = $xml.find( "boxscore" );
	
		$("#numgames").text(""+$boxscores.length + " games found for 2013-09-07");
		//console.log(boxscores);
		$.each($boxscores, function (key, value) {
			var $this = $( this );
			//console.log($this.children.visitor);
			//console.log($gamedata[vistor]);
		});

		$.each(games, function (k,v) {
				console.log(v.visitor);
				var $html = $('<div class="game"></div>'), vsize = ((parseInt(v.vrun, 10)*10)+50), hsize = ((parseInt(v.hrun, 10)*10)+50);
				
				$html.append($('<i>').addClass("bbclub-"+v.visitor).css("font-size",vsize));
				$html.append(" <strong>"+v.vrun +"</strong> vs. <strong>" +v.hrun +"</strong> ");
				
				$html.append($('<i>').addClass("bbclub-"+v.home).css("font-size",hsize));

				$("#results").append($html);
		});

	});

});