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
