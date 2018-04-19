// Opens modal to create new task
const taskModal = () => {
    let modal = document.querySelector('#modal');
    close = document.querySelector('#closeModal').addEventListener('click', closeModal);
    const priorities = document.querySelectorAll('.priority');

    priorities.forEach(priority => {
        priority.addEventListener('click', getPriority);
    })

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
    const name = document.querySelector('#taskName');
    const details = document.querySelector('#taskDetails');

    name.value = "";
    details.value = "";
}

const getPriority = (e) => {
    const priorities = document.querySelectorAll('.priority');
    const selected = e.target;

    priorities.forEach(priority => {
        if (selected === priority) {
            priority.classList.add('selected')
            priority.classList.remove('not-selected')
        }
        else {
            priority.classList.remove('selected')
            priority.classList.add('not-selected')
        }
    })
    return selected.id;
}

// Creates an object for the task and triggers posting to DOM
const createTask = () => {
    const name = document.querySelector('#taskName').value;
    const details = document.querySelector('#taskDetails').value;
    const priority = '';
    const progress = '';

    const task = Object.create(null, {
        title: { writable: true, value: name },
        details: { writable: true, value: details },
        priority: { writable: true, value: priority },
        progress: { writable: true, value: progress }
    })

    clearFields();
    allTasks.push(task);
    postTask(task)
    taskCount();
}

const createNewTask = document.querySelector('#createTask').addEventListener('click', createTask)

// Posts tasks to the DOM
const postTask = (task) => {
    let name = task.title,
        details = task.details,
        structure = document.createElement('span'),
        taskHead = document.createElement('h2'),
        taskBody = document.createElement('p'),
        backlog = document.querySelector('#tasks-backlog');

    taskHead.textContent = name;
    taskBody.textContent = details;

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

const printTaskCount = () => {

}

taskCount();