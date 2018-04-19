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
    closeModal();
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
    const printTotal = document.querySelector('#totalBacklogTasks');
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');
    const allLanes = [];
    const allCounts = [];
    
    allLanes.push(backlog, progress, review, complete)

    allLanes.forEach(lane => {
        let count = lane.childElementCount;
        allCounts.push(count)
    })

    printTaskCount(allCounts);
}

const printTaskCount = (tasks) => {
    const backlog = document.querySelector('#totalBacklogTasks');
    const progress = document.querySelector('#totalProgressTasks');
    const review = document.querySelector('#totalReviewTasks');
    const complete = document.querySelector('#totalCompletedTasks');
    const stylePage = []
    stylePage.push(backlog, progress, review, complete)

    stylePage.forEach(page => {
        page.classList.add('total-tasks')
    })

    backlog.textContent = `(${tasks[0]} total)`
    progress.textContent = `(${tasks[1]} total)`
    review.textContent = `(${tasks[2]} total)`
    complete.textContent = `(${tasks[3]} total)`
}

taskCount();