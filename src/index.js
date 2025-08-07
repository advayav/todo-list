import loadSingleNote from "./singletodo"
import loadAllTodoItems from "./alltodos"
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

        project.innerHTML = `<h3>Project 1</h3>`

        allprojs.appendChild(project)

        
    }
    
    
    content.appendChild(allprojs)

}

localStorage.clear()
localStorage.setItem("projects", JSON.stringify(["Project 1"])) 

loadAllProjects()

const newProj = document.getElementById("new-proj")
    newProj.addEventListener("click", () => {
        alert("new proj button clicked")

    })




