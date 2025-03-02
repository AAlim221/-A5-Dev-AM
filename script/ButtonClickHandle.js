// Task Update Logic
function handleTaskComplete(taskButton) {
    // Decrement assigned task count
    const assignedTaskEl = document.querySelector('.assigned-task-count');
    let assignedTaskCount = parseInt(assignedTaskEl.textContent);
    if (assignedTaskCount > 0) {
        assignedTaskEl.textContent = assignedTaskCount - 1;

        // Increment total task count
        const totalTaskEl = document.querySelector('.total-task-count');
        let totalTaskCount = parseInt(totalTaskEl.textContent);
        totalTaskEl.textContent = totalTaskCount + 1;

        // Log task to activity history
        const taskCard = taskButton.closest('.card');
        const taskTitle = taskCard.querySelector('h3').textContent;
        const activityLogEl = document.querySelector('.activity-log');
        const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newLog = document.createElement('li');
        newLog.classList.add('text-sm', 'text-gray-500');
        newLog.textContent = `Completed task: ${taskTitle} at ${timeNow}`;
        activityLogEl.appendChild(newLog);

        // Disable the completed button
        taskButton.disabled = true;
        taskButton.classList.add('bg-gray-400');
        taskButton.classList.remove('bg-blue-500');
        taskButton.textContent = 'Completed';
    }
}