let questionNum = 0;
let correctNum = 0;
const startBtnEl = document.getElementById("startBtn");
const startScreenEl = document.getElementById("startScreen");
const quizScreenEl = document.getElementById("quizScreen");
const resultAreaEl = document.getElementById("resultArea");
const resultScreenEl = document.getElementById("resultScreen");
const questionTextEl = document.getElementById("questionText");
const questionNumberEl = document.getElementById("questionNumber");
const choice1El = document.getElementById("choice1");
const choice2El = document.getElementById("choice2");
const choice3El = document.getElementById("choice3");
const choice4El = document.getElementById("choice4");
const judgeTextEl = document.getElementById("judgeText");
const answerTextEl = document.getElementById("answerText");
const explanationTextEl = document.getElementById("explanationText");
const nextBtnEl = document.getElementById("nextBtn");
const scoreTextEl = document.getElementById("scoreText");
const scoreCommentEl = document.getElementById("scoreComment");
const restartBtnEl = document.getElementById("restartBtn");

const questions = [
  "第1問: HTMLは何の略称でしょう？",
  "第2問: Webページの文字の色や大きさ、レイアウト（見た目）を整える言語はどれ？",
  "第3問: ボタンを押したときに画面を切り替えるなど、Webページに「動き」をつける言語はどれ？",
  "第4問: HTMLで「一番大きな見出し（タイトル）」を表すタグはどれ？",
  "第5問: HTMLで「箇条書きリスト」を作るときに使うタグの組み合わせはどれ？",
  "第6問: CSSで「id='title'」がついたHTML要素を指定するときの記号はどれ？",
  "第7問: JavaScriptで「あとから中身を書き換える変数」を宣言するときに使うキーワードはどれ？",
  "第8問: 関数の中で計算した結果を、呼び出し元に返すときに使うキーワードはどれ？",
  "第9問: JavaScriptで、HTMLの特定のidを持つ要素を取得する命令はどれ？",
  "第10問: プログラムのソースコードを保存・管理したり、チームで共有したりできるWebサービスはどれ？"];

const explanations = [
  "直訳すると「ハイパーテキスト・マークアップ・ランゲージ」。見出しや段落などの意味をタグで印（マークアップ）していく言語です。",
  "正式名称は「Cascading Style Sheets」。余白の調整やアニメーションなど、デザイン全般を担当します。",
  "HTMLとCSSが「見た目」を作るのに対し、JavaScriptはユーザーの操作に合わせて画面を変化させる役割を持ちます。",
  "h1〜h6まで6段階あり、数字が小さいほど重要な見出しになります。1ページに1回だけ使うのが基本です。",
  "ulは「黒丸（・）付きの箇条書き」を作ります。ちなみに数字付きのリストを作りたいときは「ol」タグを使います。",
  "idはページ内に1つだけの目印、classは複数の場所に使い回せる目印として使い分けるのがルールです。",
  "昔は「var」という書き方も使われていましたが、現在は安全性の高い「let」と「const」を使うのが主流です。",
  "returnが実行されると、その時点で関数の処理は終了し、指定した値が呼び出し元に渡されます。",
  "取得した要素の「.textContent」を書き換えることで、画面上の文字を自由にチェンジできます。",
  "世界中のエンジニアが使っているサービスで、「GitHub Pages」という機能を使えば作ったサイトを無料でインターネットに公開できます。"];

const scoreComments = [
  "まだまだこれから! 解説を読んで知識を身につけ、次の挑戦で高得点を目指そう！",
  "悪くないね! 多少は身についているけどまだ甘いところがある。全問正解を目指して実践と座学を繰り返そう!",
  "おしい！あと少しでパーフェクト! 全問正解して、Web開発マスターへの第一歩を踏み出そう!",
  "初級編クリアおめでとう! 君は今、Web開発マスターへの第一歩を力強く踏み出した!!",
];

const answerTexts = [
  "HyperText Markup Language",
  "CSS",
  "JavaScript",
  "<h1>",
  "<ul> と <li>",
  "#title",
  "let",
  "return",
  "document.getElementById()",
  "GitHub"];

const choice1 = [
  "HighTech Modern Language",
  "Java",
  "JavaScript",
  "<p>",
  "<h1> と <p>",
  ".title",
  "const",
  "send",
  "document.getElementById()",
  "VSCode"];

const choice2 = [
  "Home Tool Markup Language",
  "C#",
  "GitHub",
  "<h1>",
  "<div> と <span>",
  "*title",
  "let",
  "back",
  "document.querySelectorAll()",
  "Excel"];

const choice3 = [
  "Hyper Technic Man Legend",
  "CSS",
  "Swift",
  "<div>",
  "<table> と <tr>",
  "#title",
  "var_dump",
  "break",
  "console.log()",
  "GitHub"];

const choice4 = [
  "HyperText Markup Language",
  "PHP",
  "Scratch",
  "<ul>",
  "<ul> と <li>",
  "@title",
  "function",
  "return",
  "alert()",
  "Photoshop"];

//クイズの問題と選択肢を表示させる関数
function showQuiz() {
  questionNumberEl.textContent = `第${questionNum + 1}問/全${questions.length}問中`
  questionTextEl.textContent = questions[questionNum];
  choice1El.textContent = choice1[questionNum];
  choice2El.textContent = choice2[questionNum];
  choice3El.textContent = choice3[questionNum];
  choice4El.textContent = choice4[questionNum];
  choice1El.disabled = false;
  choice2El.disabled = false;
  choice3El.disabled = false;
  choice4El.disabled = false;
  choice1El.style.display = "block";
  choice2El.style.display = "block";
  choice3El.style.display = "block";
  choice4El.style.display = "block";
  resultAreaEl.style.display = "none";
}

//スタートした時にスタート画面を非表示にし、クイズ画面を表示させる
startBtnEl.addEventListener("click", () => {
  startScreenEl.style.display = "none";
  quizScreenEl.style.display = "block";
  showQuiz();
});

//クイズの正誤判定をして、結果を表示させる関数
function judge(selectedAnswer) {
  if (selectedAnswer === answerTexts[questionNum]) {
    judgeTextEl.textContent = "正解！";
    judgeTextEl.style.color = "rgb(74, 34, 236)";
    correctNum++;
  } else {
    judgeTextEl.textContent = "残念...";
    judgeTextEl.style.color = "rgb(236, 34, 34)";
  }
  if (questionNum === questions.length - 1) {
    nextBtnEl.textContent = "結果を見る";
  } else {
    nextBtnEl.textContent = "次の問題へ";
  }
  choice1El.disabled = true;
  choice2El.disabled = true;
  choice3El.disabled = true;
  choice4El.disabled = true;
  answerTextEl.textContent = answerTexts[questionNum];
  explanationTextEl.textContent = explanations[questionNum];
  choice1El.style.display = "none";
  choice2El.style.display = "none";
  choice3El.style.display = "none";
  choice4El.style.display = "none";
  resultAreaEl.style.display = "block";
}

//解答をクリックしたら引数を正誤判定関数に渡す
choice1El.addEventListener("click", () => {
  judge(choice1El.textContent);
});
choice2El.addEventListener("click", () => {
  judge(choice2El.textContent);
});
choice3El.addEventListener("click", () => {
  judge(choice3El.textContent);
});
choice4El.addEventListener("click", () => {
  judge(choice4El.textContent);
});

//結果を表示する関数
function showResult() {
  if(correctNum === 10){
    scoreCommentEl.textContent = scoreComments[3];
  } else if (correctNum >= 7 && correctNum < 10) {
    scoreCommentEl.textContent = scoreComments[2];
  } else if (correctNum >= 4 && correctNum < 7) {
    scoreCommentEl.textContent = scoreComments[1];
  } else {
    scoreCommentEl.textContent = scoreComments[0];
  }
  scoreTextEl.textContent = `あなたは全${questions.length}問中${correctNum}問正解しました！`;
  quizScreenEl.style.display = "none";
  resultScreenEl.style.display = "block";
} 

//ボタンを押した時に問題数で条件分岐して次の問題に行く、もしくは結果発表画面を表示させる
nextBtnEl.addEventListener("click", () => {
  questionNum++
  if (questionNum < questions.length) {
    showQuiz();
  } else {
    showResult();
  }
});

//再挑戦ボタンを押した時に問題番号と正解数をリセットし、初めの画面に戻す
restartBtnEl.addEventListener("click", () => {
  questionNum = 0;
  correctNum = 0;
  resultScreenEl.style.display = "none";
  startScreenEl.style.display = "block";
});