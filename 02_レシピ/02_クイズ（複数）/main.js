const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuiz = document.getElementById("next-quiz")

// クイズの内容
let quizNumber = 0
const quiz = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        isCorrect: true,
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function (quizNumber) {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz[quizNumber].text

  // 画像を表示
  quizImage.src = "./images/" + quiz[quizNumber].image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz[quizNumber].choices[0].text
  choice2.textContent = quiz[quizNumber].choices[1].text
  choice3.textContent = quiz[quizNumber].choices[2].text

  //フィードバックを消す
  feedback.textContent = ""

  //「次の問題へ」を隠す
  nextQuiz.classList.add("hidden")
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz[quizNumber].choices[choiceNumber].feedback

  //正解なら
  if (quiz[quizNumber].choices[choiceNumber].isCorrect) {
    if (quizNumber < quiz.length - 1) {
      nextQuiz.classList.remove("hidden")
    }
  }
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

//次の問題ボタンを押したら
nextQuiz.onclick = function () {
  quizNumber += 1
  reloadQuiz(quizNumber)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz(0)
