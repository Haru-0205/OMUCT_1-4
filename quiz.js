let Quiz;
let Answer;
let Type;
let Ans1;
let Ans2;
let Ans3;
let Ans;
let No = 1;
document.getElementById('Question').style.visibility = 'hidden';
document.getElementById('QuestionNumber').style.visibility = 'hidden';
document.getElementById('button1').style.visibility = 'hidden';
document.getElementById('button2').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';
document.getElementById('textbox').style.visibility = 'hidden';
document.getElementById('submit').style.visibility = 'hidden';
document.getElementById('hantei').style.visibility = 'hidden';
document.getElementById('QuestionNumber').style.visibility = 'hidden';
document.getElementById('next').style.visibility = 'hidden';
document.getElementById('hantei_text').style.visibility = 'hidden';

function SetQA (){
    switch (No) {
        case 1:
            Quiz = "本校の現在の正式名称は？";
            Answer = "大阪公立大学工業高等専門学校";
            Type = 1;
            break;
        case 2:
            Quiz = "原子番号１の元素は？";
            Answer = "水素";
            Ans1 = "水素";
            Ans2 = "窒素";
            Ans3 = "酸素";
            Type = 2;
            break;
        case 3:
            Quiz = "本校の面積に一番近いのは？(単位:平方メートル)";
            Answer = "10万";
            Ans1 = "6万";
            Ans2 = "10万";
            Ans3 = "12万";
            Type = 2;
            break;
        case 4:
            Quiz = "本校で生徒会にあたる組織は？"
            Answer = "学友会"
            Type = 1;
            break;
        case 5:
            Quiz = "日本で一番高い山は？"
            Answer = "富士山"
            Type = 1;
            break;
        default:
            Quiz = null;
            Answer = null;
            Type = null;
    }

    document.getElementById('Question').style.visibility = 'visible';
    document.getElementById('hantei').style.visibility = 'visible';
    document.getElementById('QuestionNumber').style.visibility = 'visible';
    document.getElementById('next').style.visibility = 'visible';
    document.getElementById('hantei_text').style.visibility = 'visible';
    document.getElementById('start').style.visibility = 'hidden';
    if (Type == 1){
        document.getElementById('button1').style.visibility = 'hidden';
        document.getElementById('button2').style.visibility = 'hidden';
        document.getElementById('button3').style.visibility = 'hidden';
        document.getElementById('textbox').style.visibility = 'visible';
        document.getElementById('submit').style.visibility = 'visible';
    }else if(Type == 2){
        document.getElementById('button1').style.visibility = 'visible';
        document.getElementById('button2').style.visibility = 'visible';
        document.getElementById('button3').style.visibility = 'visible';
        document.getElementById('textbox').style.visibility = 'hidden';
        document.getElementById('submit').style.visibility = 'hidden';
    }
    // 各ボタンに文字を代入
    document.getElementById('Question').innerText = Quiz;
    document.getElementById('button1').innerText = Ans1;
    document.getElementById('button2').innerText = Ans2;
    document.getElementById('button3').innerText = Ans3;
    document.getElementById('QuestionNumber').innerText = "第" + No + "問";
}

function Ans1_Checked(){
    Ans = document.getElementById('button1').innerText;
    decesion();
}


function Ans2_Checked(){
    Ans = document.getElementById('button2').innerText;
    decesion();
}

function Ans3_Checked(){
    Ans = document.getElementById('button3').innerText;
    decesion();
}

function Answer_Text(){
    Ans = document.getElementById('textbox').value;
    decesion()
}
function  decesion(){
    if (Ans == Answer){
        document.getElementById("hantei").innerText = '正解'
    }else{
        document.getElementById("hantei").innerText = '不正解'
    }
}

function Next(){
    No = No + 1;
    document.getElementById("hantei").innerText = null;
    document.getElementById('textbox').value = null;
    SetQA();
}