const boardsStr = localStorage.getItem("boards");
const boardsObj = JSON.parse(boardsStr);

const idx = location.search;
const index = idx.split("=")[1];
const board = boardsObj[index];

const viewFrm = document.querySelectorAll("#viewFrm > div");
for (let i = 0; i < viewFrm.length; i++) {
  const id = viewFrm[i].id;
  const span = viewFrm[i].querySelector("span");
  span.innerHTML += board[id];
}

const modifyBtn = document.querySelector("#modify");

const modifyBtnHandler = (e) => {
  location.href = "/board/modify.html" + idx;
};

modifyBtn.addEventListener("click", modifyBtnHandler);

const deleteBtn = document.querySelector("#delete");

const deleteBtnHandler = (e) => {
  boardsObj.splice(index, 1);
  for (let i = 0; i < boardsObj.length; i++) {
    boardsObj[i].index = i;
  }

  const setBoardsStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", setBoardsStr);
  location.href = "/board/list.html";
};

deleteBtn.addEventListener("click", deleteBtnHandler);
