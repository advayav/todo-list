import loadSingleNote from "./singletodo"
import loadAllTodoItems from "./alltodos"
import addNewProj from "./addNewProj"
import addNewTodo from "./addNewTodo"
import "./styles/allprojs.css"

function loadAllProjects() {
    const content = document.getElementById("content")
    content.innerHTML = ""

    const allprojs = document.createElement("div")
    allprojs.className = "project-grid"

    const projList = JSON.parse(localStorage.getItem("projects"))
    console.log("Project List: ", projList)

    for (let i = 0; i < projList.length; i++) {
        const project = document.createElement("div")
        project.className = "project"
        project.id = `proj-${i}`

        project.innerHTML = `<span>${projList[i]}</span>`

        allprojs.appendChild(project)
    }
    
    content.appendChild(allprojs)

}

localStorage.clear()
localStorage.setItem("projects", JSON.stringify(["Project 1"]))
localStorage.setItem("Project 1", JSON.stringify([]))

loadAllProjects()

const newProj = document.getElementById("new-proj")

newProj.addEventListener("click", () => {
        addNewProj()
})

const newTodo = document.getElementById("new-todo")

newTodo.addEventListener("click", () =>
    addNewTodo()
)

export default loadAllProjects

