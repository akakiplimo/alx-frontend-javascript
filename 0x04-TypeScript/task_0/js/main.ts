interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Adrian",
  lastName: "Kip",
  age: 26,
  location: "NBI",
};

const studentTwo: Student = {
  firstName: "Claire",
  lastName: "Chep",
  age: 20,
  location: "DAR"
};

const studentList: Student[] = [studentOne, studentTwo];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lightgray";
table.appendChild(tbody);

studentList.forEach((student: Student): void => {
  const row = document.createElement('tr');

  const nameData = document.createElement('td');
  const locationData = document.createElement('td');

  nameData.textContent = student.firstName;
  locationData.textContent = student.location;

  nameData.style.border = "2px solid black";
  locationData.style.border = "2px solid black";
  nameData.style.padding = "4px";
  locationData.style.padding = "4px";

  row.appendChild(nameData);
  row.appendChild(locationData);
  tbody.appendChild(row);
});

document.body.appendChild(table);
