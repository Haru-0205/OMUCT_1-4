var json_data;
var subject_array_no;
fetch("./exam2.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		// jsonにJSONオブジェクトで結果が渡される
		json_data = json;
		alert("成功");
	})
	.catch(function (error) {
		alert("JSONファイルの取得に失敗しました");
	});

function data(subject_no) {
	document.getElementById("subject").innerText = json_data[subject_no]["subject_jp"];
	document.getElementById("date").innerText = json_data[subject_no]["date"];
	get_array2("text", "range", "text", "range");
	function get_array2(c, p, p2, id) {
		let property_text = json_data[subject_no][c];
		for (var i = 0; i < json_data[subject_no][p][p2]["length"]; i++) {
			property_text += "<li>" + json_data[subject_no][p][p2][i] + "</li>"; // = ではなく += を使う
		}
		document.getElementById(id).innerHTML = property_text;
	}

	if (json_data[subject_no]["work1"] != null) {
		document.getElementById("work1").style.display = "block";
		get_array2("work1", "range", "work1", "work1");
		console.log(completed);
	} else {
		document.getElementById("work1").style.display = "none";
	}
	if (json_data[subject_no]["work2"] != null) {
		document.getElementById("work2-name").style.display = "block";
		document.getElementById("work2-range").style.display = "block";
		document.getElementById("work2-name").innerText = json_data[subject_no].work2;
		document.getElementById("work2-range").style.display = "none";
	} else {
		document.getElementById("work2-range").style.display = "none";
	}

	if (json_data[subject_no].bring == null) {
		document.getElementById("bring-midashi").style.display = "none";
		document.getElementById("bring").style.display = "none";
	} else {
		document.getElementById("bring-midashi").style.display = "block";
		document.getElementById("bring").style.display = "block";
		document.getElementById("bring").innerText = json_data[no][bring];
	}
	return subject_no;
}
