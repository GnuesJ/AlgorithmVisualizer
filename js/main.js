function createBoard(container)
{
	var doc = document.getElementById(container);
	var innerHtmlString = "";
	for (var i = 0; i < 15; i++) {
		innerHtmlString+= "<div class=\"board-row\">";
		for (var j = 0; j < 10; j++) {
			innerHtmlString+="<div class=\"box-style\"></div>";
		}
		innerHtmlString+="</div>";
	}
	doc.innerHTML = innerHtmlString;
}

// function createBoard(container)
// {
// 	var doc = document.getElementById(container);
// 	var innerHtmlString = "";
// 	innerHtmlString+= "<div class=\"board-row\">";
// 	for (var i = 0; i < 10; i++) {
// 		innerHtmlString+="<div class=\"box-style\">";
// 		for (var j = 0; j < 10; j++) {
// 			innerHtmlString+="<div class=\"box-style\"></div>";
// 		}
// 		innerHtmlString+="</div>";
// 	}
// 	innerHtmlString+="</div>";
// 	doc.innerHTML = innerHtmlString;
// }