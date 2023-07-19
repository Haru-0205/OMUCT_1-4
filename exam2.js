var json_data;
fetch("./exam2.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		// jsonにJSONオブジェクトで結果が渡される
		json_data = json;
	})
	.catch(function (error) {
		alert("JSONファイルの取得に失敗しました");
	});

function data(subject_no) {
	document.getElementById("subject").innerText = json_data[subject_no]["subject_jp"];
	document.getElementById("date").innerText = json_data[subject_no]["date"];
	function get_array2(contents_name, element, element2, id) {
		if (
			json_data[subject_no][contents_name] != null &&
			json_data[subject_no][element][element2] != null &&
			id != null
		) {
			let property_text = json_data[subject_no][contents_name];
			for (var i = 0; i < json_data[subject_no][element][element2]["length"]; i++) {
				property_text += "<li>" + json_data[subject_no][element][element2][i] + "</li>"; // = ではなく += を使う
			}
			document.getElementById(id).innerHTML = property_text;
		} else {
		}
	}

	if (typeof json_data[subject_no]["text"] === "undefined") {
		disappear("range");
	} else if (typeof json_data[subject_no]["range"] === "undefined") {
		disappear("range");
	} else if (typeof json_data[subject_no]["range"]["text"] === "undefined") {
		disappear("range");
	} else {
		appear("range");
		get_array2("text", "range", "text", "range");
	}

	if (typeof json_data[subject_no].work1 === "undefined") {
		disappear("work1");
	} else {
		document.getElementById("work1").style.display = "block";
		get_array2("work1", "range", "work1", "work1");
	}
	if (typeof json_data[subject_no].work2 === "undefined") {
		disappear("work2");
	} else {
		document.getElementById("work2").style.display = "block";
		get_array2("work2", "range", "work2", "range2");
	}

	if (json_data[subject_no].bring == null) {
		disappear("bring-midashi");
		disappear("bring");
	} else {
		document.getElementById("bring-midashi").style.display = "block";
		document.getElementById("bring").style.display = "block";
		document.getElementById("bring").innerText = json_data[no][bring];
	}

	if (typeof json_data[subject_no].homework === "undefined") {
		disappear("hw1");
		disappear("hw2");
		disappear("hw3");
		disappear("hw4");
	} else {
		if (typeof json_data[subject_no].homework.work1 === "undefined") {
			disappear("hw1");
		} else {
			appear("hw1");
			get_array2("work1", "homework", "work1", "hw1");
		}
		if (typeof json_data[subject_no]["homework"]["work2"] === "undefined") {
			disappear("hw2");
		} else {
			appear("hw2");
			get_array2("work2", "homework", "work2", "hw2");
		}
		if (typeof json_data[subject_no]["homework"]["other1"] === "undefined") {
			disappear("hw3");
		} else {
			appear("hw3");
			get_array2("other1", "homework", "other1", "hw3");
		}
		if (typeof json_data[subject_no]["homework"]["other2"] === "undefined") {
			disappear("hw4");
		} else {
			appear("hw4");
			get_array2("other2", "homework", "other2", "hw4");
		}
	}
	if (typeof json_data[subject_no]["date"] === "undefined") {
		disappear("date");
	} else {
		appear("date");
	}

	return subject_no;
}

function disappear(target) {
	document.getElementById(target).style.display = "none";
}
function appear(target) {
	document.getElementById(target).style.display = "inline";
}
