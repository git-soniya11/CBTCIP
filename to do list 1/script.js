document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const timestamp = document.createElement('span');
    timestamp.textContent = ` (Added: ${new Date().toLocaleString()})`;
    timestamp.style.fontSize = '0.8em';
    timestamp.style.marginLeft = '10px';
    li.appendChild(timestamp);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function() {
        completeTask(li, taskText);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});

function completeTask(taskItem, taskText) {
    taskItem.remove();

    const li = document.createElement('li');
    li.textContent = taskText;

    const timestamp = document.createElement('span');
    timestamp.textContent = ` (Completed: ${new Date().toLocaleString()})`;
    timestamp.style.fontSize = '0.8em';
    timestamp.style.marginLeft = '10px';
    li.appendChild(timestamp);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('completed-task-list').appendChild(li);
}

