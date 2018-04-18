let allTasks = [];

// Opens modal to create new task
const taskModal = () => {
    let modal = document.querySelector('#modal'),
        close = document.querySelector('#closeModal').addEventListener('click', closeModal);

    modal.classList.toggle('hide')
}

const addTask = document.querySelector('#addTask').addEventListener('click', taskModal);

// Closes modal after user clicks 'x' button
const closeModal = () => {
    let modal = document.querySelector('#modal');
    modal.classList.toggle('hide');
}

// Clears fields after the create task button is clicked
const clearFields = () => {
    let name = document.querySelector('#taskName'),
        description = document.querySelector('#taskDescription');

    name.value = "";
    description.value = "";
}

// Creates an object for the task and triggers posting to DOM
const createTask = () => {
    let name = document.querySelector('#taskName').value,
        description = document.querySelector('#taskDescription').value;

    const task = Object.create(null, {
        taskName: { writable: true, value: name },
        taskDescript: { writable: true, value: description }
    })

    clearFields();
    allTasks.push(task);
    postTask(task)
    taskCount();
}

const createNewTask = document.querySelector('#createTask').addEventListener('click', createTask)

function* idMaker() {
    let index = 3;
    while (index < index + 1)
        yield index++;
}
let gen = idMaker();

// Posts tasks to the DOM
const postTask = (task) => {
    let name = task.taskName,
        description = task.taskDescript,
        structure = document.createElement('span'),
        taskHead = document.createElement('h2'),
        taskBody = document.createElement('p'),
        backlog = document.querySelector('#tasks-backlog');

    taskHead.textContent = name;
    taskBody.textContent = description;

    structure.setAttribute('draggable', 'true');
    structure.setAttribute('ondragstart', 'drag(event)');
    structure.setAttribute('id', `task__${gen.next().value}`);
    structure.classList.add('indiv-task', 'drag');

    structure.appendChild(taskHead);
    structure.appendChild(taskBody);

    backlog.appendChild(structure)
}

const taskCount = () => {
    const printTotal = document.querySelector('#totalTasks');
    const backLog = document.querySelector('#tasks-backlog');
    const children = backLog.childNodes;
    let count = 0;

    children.forEach(child => {
        if (child.nodeName === 'SPAN') {
            count += 1;
        }
    })

    printTotal.classList.add('total-tasks');
    printTotal.textContent = `(${count} tasks)`
}

taskCount();