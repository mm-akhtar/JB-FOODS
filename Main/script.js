console.log('hello');
const form = document.getElementById('order');
const order = form.elements['orderNumber'];
const orderCapacity = form.elements['orderCapacity'];
const startDate = form.elements['startDate'];
const endDate = form.elements['endDate'];

const table = document.getElementById('tableBody');
let row = document.createElement('tr');

// Create cells
let c1 = document.createElement('td');
let c2 = document.createElement('td');
let c3 = document.createElement('td');
let c4 = document.createElement('td');
let c5 = document.createElement('td');
let c6 = document.createElement('td');
let c7 = document.createElement('td');
let c8 = document.createElement('td');

// Insert data to cells
c1.innerText = 'Elon';
c2.innerText = '42';
c3.innerText = 'Houston';
c4.innerText = 'C++';
c5.innerText = 'C++';
c6.innerText = 'C++';
c7.innerText = 'C++';
c8.innerText = 'C++';

// Append cells to row
row.appendChild(c1);
row.appendChild(c2);
row.appendChild(c3);
row.appendChild(c4);
row.appendChild(c5);
row.appendChild(c6);
row.appendChild(c7);
row.appendChild(c8);

// Append row to table body

form.addEventListener('submit', async (event) => {
	// handle the form data
	event.preventDefault();
	const invoices = order.value.split(',');
	const dateRanges = [startDate.value, endDate.value];
	const capacity = parseFloat(orderCapacity.value);
	const formData = {
		invoices,
		dateRanges,
		capacity,
	};
	console.log(formData);
	const response = await fetch('url', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});
	console.log(response.json());
	table.appendChild(row);
});
