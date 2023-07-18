function get_array(property,id){
  var property;
  for (var i = 0; i < json[subject_no].property.length; i++) {
  			property += "<li>" + json[subject_no].property[i] + "</li>"; // = ではなく += を使う
  }
  document.getElementById(id).innerHTML = property;
}
		function data(subject_no){
  		document.getElementById("subject").innerText = json[subject_no].subject_jp;
  		document.getElementById("text-name").innerText = json[subject_no].text;
  		document.getElementById("date").innerText = json[subject_no].date;
  		get_array(range.text,range)
  	  
  		if (json[subject_no].work1 != null) {
  			document.getElementById("work1-name").style.display = "block";
  			document.getElementById("work1-range").style.display = "block";
  			document.getElementById("work1-name").innerText = json[subject_no].work1;
  			get_array(range.work1,work1-range)
  			
  		} else {
  			document.getElementById("work1-name").style.display = "none";
  			document.getElementById("work1-range").style.display = "none";
  		}
  		if (json[subject_no].work2 != null) {
  			document.getElementById("work2-name").style.display = "block";
  			document.getElementById("work2-range").style.display = "block";
  			document.getElementById("work2-name").innerText = json[subject_no].work2;
  			document.getElementById("work2-range").style.display = "none";
  		} else {
  			document.getElementById("work2-name").style.display = "none";
  			document.getElementById("work2-range").style.display = "none";
  		}
  
  		if (json[subject_no].bring == null) {
  			document.getElementById("bring-midashi").style.display = "none";
  			document.getElementById("bring").style.display = "none";
  		} else {
  			document.getElementById("bring-midashi").style.display = "block";
  			document.getElementById("bring").style.display = "block";
  			document.getElementById("bring").innerText = json[subject_no].bring;
  		}
		}
fetch("./exam2.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		// jsonにJSONオブジェクトで結果が渡される
  
  
	})
	.catch(function (error) {
		alert("JSONファイルの取得に失敗しました");
	});
