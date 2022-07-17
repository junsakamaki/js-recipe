const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

//追加ボタンを押す
addButton.onclick = function () {
  const memo = createMemo(memoInput.value)
  //memoをcontainerに追加
  memoContainer.append(memo)
  //入力欄を空に
  memoInput.value = ""
}

const createMemo = function (text) {
  //memoを作成
  const memo = document.createElement("div")
  memo.textContent = text

  //削除ボタン作成
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  //削除ボタンを押す
  deleteButton.onclick = function () {
    memo.remove()
  }
  //memoの中に削除ボタン追加
  memo.append(deleteButton)

  return memo
}
