const wfrm = document.querySelector("#wfrm")
class Board {
    constructor(index, subject, content, writer) {
        this.index = index
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

    const boards = JSON.parse(localStorage.getItem("boards"))
    let index = boards.length - 1
    const instance = new Board(index, subject, writer, content)

    boards.push(instance)


    const item = JSON.stringify(boards)
    localStorage.setItem("boards", item)

    e.target.reset()

    location.href = `/board/view.html?index=` + index
}

wfrm.addEventListener("submit", init)