function addGoal() {
    const goalList = document.getElementById('goal-list');
    const newGoal = document.createElement('div');
    newGoal.classList.add('goal-item');
    newGoal.innerHTML = 'New Goal - Edit Me';
    goalList.appendChild(newGoal);
}
