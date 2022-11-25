let boardsStr = localStorage.getItem("boards");

// localStorage 초기값 지정
if (boardsStr === null) {
  const listStr = JSON.stringify([]);
  localStorage.setItem("boards", listStr);
  boardsStr = listStr;
}

const boardsObj = JSON.parse(boardsStr);

// 템플릿 생성
const template = (objValue) => {
  return `
    <tr>
        <td></td>
        <td>${objValue.subject}</td>
        <td>${objValue.writer}</td>
        <td>${objValue.date}</td>
        <td>${objValue.num}</td>
    </tr>
    `;
};

const tbody = document.querySelector("tbody");

for (let i = 0; i < boardsObj.length; i++) {
  tbody.innerHTML += template(boardsObj[i]);
}
