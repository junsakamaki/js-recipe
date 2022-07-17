const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const input = memoInput.value
  console.log(input)
  const memo = document.createElement("div")
  memo.textContent = input
  memoContainer.append(memo)
}
