const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

//追加ボタンを押す
addButton.onclick = function () {
  //入力をinputに格納
  const input = memoInput.value
  //コンソールに表示
  console.log(input)

  //memoを作成
  const memo = document.createElement("div")
  memo.textContent = input
  //memoをcontainerに追加
  memoContainer.append(memo)

  //削除ボタン作成
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  //削除ボタンを押す
  deleteButton.onclick = function () {
    memo.remove()
  }
  //memoの中に削除ボタン追加
  memo.append(deleteButton)

  //入力欄を空に
  memoInput.value = ""
}
