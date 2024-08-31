document.addEventListener("DOMContentLoaded", () => {
    const todoData = {
        backlog: ["Task 1", "Task 2", "Task 3"],
        todo: ["Task 4", "Task 5"],
        ongoing: ["Task 6"],
        done: ["Task 7"]
    };

    function renderTodos() {
        Object.keys(todoData).forEach(status => {
            const listElement = document.getElementById(`${status}-list`);
            listElement.innerHTML = "";
            todoData[status].forEach(todo => {
                const li = document.createElement("li");
                li.textContent = todo;
                li.appendChild(createNavButtons(status, todo));
                listElement.appendChild(li);
            });
        });
    }

    function createNavButtons(currentStatus, todo) {
        const buttonContainer = document.createElement("div");

        const leftButton = document.createElement("button");
        leftButton.textContent = "←";
        if (currentStatus === "backlog") {
            leftButton.disabled = true;
        } else {
            leftButton.onclick = () => moveTodoLeft(currentStatus, todo);
        }

        const rightButton = document.createElement("button");
        rightButton.textContent = "→";
        if (currentStatus === "done") {
            rightButton.disabled = true;
        } else {
            rightButton.onclick = () => moveTodoRight(currentStatus, todo);
        }

        buttonContainer.appendChild(leftButton);
        buttonContainer.appendChild(rightButton);
        return buttonContainer;
    }

    function moveTodoLeft(currentStatus, todo) {
        const statuses = ["backlog", "todo", "ongoing", "done"];
        const currentIndex = statuses.indexOf(currentStatus);
        if (currentIndex > 0) {
            const previousStatus = statuses[currentIndex - 1];
            todoData[currentStatus] = todoData[currentStatus].filter(t => t !== todo);
            todoData[previousStatus].push(todo);
            renderTodos();
        }
    }

    function moveTodoRight(currentStatus, todo) {
        const statuses = ["backlog", "todo", "ongoing", "done"];
        const currentIndex = statuses.indexOf(currentStatus);
        if (currentIndex < statuses.length - 1) {
            const nextStatus = statuses[currentIndex + 1];
            todoData[currentStatus] = todoData[currentStatus].filter(t => t !== todo);
            todoData[nextStatus].push(todo);
            renderTodos();
        }
    }

    renderTodos();
});
