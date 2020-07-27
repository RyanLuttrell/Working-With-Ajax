const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const employeeStatus = document.createElement('ul');
        const employees = JSON.parse(xhr.responseText);
        const employeeList = document.querySelector('#employeeList');
        employeeStatus.className = 'bulleted';
        employeeList.appendChild(employeeStatus);
        for (let i = 0; i < employees.length; i++) {
            const newLi = document.createElement('li');
            if (employees[i].inoffice === true) {
                newLi.className = 'in';
            } else {
                newLi.className = 'out';
            }
            newLi.textContent = `${employees[i].name}`;
            employeeStatus.appendChild(newLi);
        }
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

const newxhr = new XMLHttpRequest();
newxhr.onreadystatechange = function () {
    if (newxhr.readyState === 4) {
        const roomStatus = document.createElement('ul');
        roomStatus.className = 'rooms';
        const rooms = JSON.parse(newxhr.responseText);
        const roomList = document.querySelector('#roomList');
        roomList.appendChild(roomStatus);
        for (let i = 0; i < rooms.length; i++) {
            const newLi = document.createElement('li');
            if (rooms[i].available === true) {
                newLi.className = 'empty';
            } else {
                newLi.className = 'full';
            }
            newLi.textContent = `${rooms[i].room}`;
            roomStatus.appendChild(newLi);
        }
    }
};
newxhr.open('GET', 'data/rooms.json');
newxhr.send();