let no, Quiz, Answer1, Answer2, Answer3, CollectAnswer,AnswerNo;

for (no=1;no<=2;no++)
    if (no == 1) {
        Quiz = "H";
        Answer1 = "水素";
        Answer2 = "酸素";
        Answer3 = "窒素";
        CollectAnswer = Answer1;
    } else if (no == 2) {
        Quiz = "O"
        Answer1 = "水素";
        Answer2 = "酸素";
        Answer3 = "窒素";
        CollectAnswer = Answer2;
    }
// Quiz.htmlのSpanタグの内容取得&書き換え
    document.getElementById("Q").innerHTML = Quiz;
    document.getElementById("button1").innerText = Answer1;
    document.getElementById("button2").innerText = Answer2;
    document.getElementById("button3").innerText = Answer3;

// 正答を保存する変数を定義
    let Answer;

    if (AnswerNo == 1)
        Answer1_check()
    else if (AnswerNo == 2)
        Answer2_check()
    else if (AnswerNo == 3)
        Answer3_check()

    function Answer1_check() {
        Answer = Answer1;
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
            alert("不正解")
        }

    }