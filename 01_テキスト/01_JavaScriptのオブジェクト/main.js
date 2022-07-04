const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()
// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const Jun = {
  name: "じゅん",
  age: 23,
  hobbies: ["寝る", "テーマパークに行く", "ジム"],
  isHappy: true,
  address: {
    country: "日本",
    pref: "埼玉",
    city: "戸田",
  },
  sayHello: function () {
    console.log("こんにちは！じゅんです！！よろしくね！")
  },
}

Jun.sayHello()
