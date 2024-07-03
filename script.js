document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.classList.add('removing');
            setTimeout(() => {
                todoList.removeChild(li);
            }, 300);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        setTimeout(() => {
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        }, 10); // Small delay to ensure the transition takes effect

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    }
});