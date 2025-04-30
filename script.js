const form = document.getElementById('tracker-form');
const tableBody = document.querySelector('#application-table tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const company = document.getElementById('company').value;
  const role = document.getElementById('role').value;
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${company}</td>
    <td>${role}</td>
    <td>${date}</td>
    <td>${status}</td>
  `;

  tableBody.appendChild(newRow);

  form.reset();
});
