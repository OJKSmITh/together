const wfrm = document.querySelector("#wfrm")
class Board {
    constructor(subject, content, writer) {
        this.index = 0
        this.subject = subject
        this.writer = writer
        this.content = content
        this.date = "22-11-25"
        this.num = 0
    }
}


function init(e) {
    e.preventDefault()
    const subject = e.target.subject.value
    const writer = e.target.writer.value
    const content = e.target.content.value

    const instance = new Board(subject, writer, content)

    const boards = JSON.parse(localStorage.getItem("boards"))
    boards.push(instance)

    let index = boards.length - 1

    const item = JSON.stringify(boards)
    localStorage.setItem("boards", item)

    e.target.reset()

    location.href = `/board/view.html?index=` + index
}

wfrm.addEventListener("submit", init)