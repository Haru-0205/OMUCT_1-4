fetch("./exam2.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		// jsonにJSONオブジェクトで結果が渡される
		document.getElementById("subject").innerText = json[0].subject_jp;
		document.getElementById("text-name").innerText = json[0].text;
		document.getElementById("date").innerText = json[0].date;
		var range_text = "";
		for (var i = 0; i < json[0].range.text.length; i++) {
			range_text += "<li>" + json[0].range.text[i] + "</li>"; // = ではなく += を使う
		}
		document.getElementById("range").innerHTML = range_text;

		if (json[0].work1 != null) {
			document.getElementById("work1-name").style.display = "block";
			document.getElementById("work1-range").style.display = "block";
			document.getElementById("work1-name").innerText = json[0].work1;
			var work1_range_text = "";
			for (var i = 0; i < json[0].range.work1.length; i++) {
				work1_range_text += "<li>" + json[0].range.work1[i] + "</li>"; // = ではなく += を使う
			}
			document.getElementById("work1-range").innerHTML = work1_range_text;
		} else {
			document.getElementById("work1-name").style.display = "none";
			document.getElementById("work1-range").style.display = "none";
		}
		if (json[0].work2 != null) {
			document.getElementById("work2-name").style.display = "block";
			document.getElementById("work2-range").style.display = "block";
			document.getElementById("work2-name").innerText = json[0].work2;
			document.getElementById("work2-range").style.display = "none";
		} else {
			document.getElementById("work2-name").style.display = "none";
			document.getElementById("work2-range").style.display = "none";
		}

		if (json[0].bring == null) {
			document.getElementById("bring-midashi").style.display = "none";
			document.getElementById("bring").style.display = "none";
		} else {
			document.getElementById("bring-midashi").style.display = "block";
			document.getElementById("bring").style.display = "block";
			document.getElementById("bring").innerText = json[0].bring;
		}
	})
	.catch(function (error) {
		alert("JSONファイルの取得に失敗しました");
	});
