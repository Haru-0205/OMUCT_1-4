<<<<<<< HEAD
<<<<<<< HEAD
// let no=0;
// for ( var i = 0;i<5;i++ ) {
//     if (i == 0) {
//         Quiz = "本校の現在の正式名称は?";
//         Answer1 = "大阪公立大学工業高等専門学校";
//         Answer2 = "大阪府立工業高等専門学校";
//         Answer3 = "大阪府立大学工業高等専門学校";
//         CollectAnswer = Answer1;
//     } else if (i == 1) {
Quiz = "本校の創立年は?";
Answer1 = "1962年";
Answer2 = "1963年";
Answer3 = "1964年";
CollectAnswer = Answer2;
// } else if (i == 2) {
//     Quiz = "本校の敷地面積として最も近いものは?";
//     Answer1 = "96000m^2";
//     Answer2 = "97000m^2";
//     Answer3 = "98000m^2";
//     CollectAnswer = Answer3;
// } else if (i == 3){
//     Quiz = "本校の学科名として正しいものは?";
//     Answer1 = "総合工業システム学科";
//     Answer2 = "総合工学システム学科";
//     Answer3 = "専門工業システム学科";
//     CollectAnswer = Answer2;
// }else if(i == 4) {
//     Quiz = "本校創立時に存在していた学科として正しくないものは?";
//     Answer1 = "土木工学科";
//     Answer2 = "機械工学科";
//     Answer3 = "電気工学科";
//     CollectAnswer = Answer1;
// }

document.write(Quiz);

=======

=======

>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
Quiz = "H";
Answer1 = "水素";
Answer2 = "酸素";
Answer3 = "窒素";
CollectAnswer = Answer1;

// document.write(Quiz);
document.getElementById("Q").innerHTML=Quiz;
<<<<<<< HEAD
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
=======
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
document.write("<br>")
document.write("1." + Answer1)
document.write("<br>")
document.write("2." + Answer2)
document.write("<br>")
document.write("3." + Answer3)
document.write("<br>")
<<<<<<< HEAD
<<<<<<< HEAD
document.write("<button type='button' onclick='Answer1_check()'>1</button>");
document.write("<button type='button' onclick='Answer2_check()'>2</button>");
document.write("<button type='button' onclick='Answer3_check()'>3</button>");
=======
// document.write("<button type='button' onclick='Answer1_check()'>1</button>");
// document.write("<button type='button' onclick='Answer2_check()'>2</button>");
// document.write("<button type='button' onclick='Answer3_check()'>3</button>");
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
=======
// document.write("<button type='button' onclick='Answer1_check()'>1</button>");
// document.write("<button type='button' onclick='Answer2_check()'>2</button>");
// document.write("<button type='button' onclick='Answer3_check()'>3</button>");
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
document.write("<br>")
let Answer;



function Answer1_check() {
    Answer = Answer1;
<<<<<<< HEAD
<<<<<<< HEAD
    //no = ++i;
=======
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
=======
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
    Decision();
}

function Answer2_check() {
    Answer = Answer2
    Decision();
}

function Answer3_check() {
    Answer = Answer3
    Decision();
}

function Decision() {
    if (Answer == CollectAnswer) {
        alert("正解!")
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
        alert("不正解")
    }
}
// }
=======
        alert("不正解…")
    }
}
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
=======
        alert("不正解…")
    }
}
>>>>>>> 86508c42b2a74078f82283caa792cc99c68b68ff
