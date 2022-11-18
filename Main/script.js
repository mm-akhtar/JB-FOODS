console.log('hello');
const form = document.getElementById('order');
const order = form.elements['orderNumber'];
const orderCapacity = form.elements['orderCapacity'];
const startDate = form.elements['startDate'];
const endDate = form.elements['endDate'];

const table = document.getElementById('tableBody');

const dataArray = [
	{
		sales_order: 548287,
		scheduled_deliver_date: 20220829,
		scheduled_deliver_date_parsed: 1661731200000,
		scheduled_deliver_time: 190000,
		product_code: 12490,
		order_plant: 972,
		max_age: 4,
		estimated_weight_sum: 2050.0,
		quantity_ordered: 1.0,
		net_weight: 2050,
		'Realization Code': 'BHSBBONELESS HAM SEMI-BONELESS',
		City: 'ERLANGER',
		STATE: 'KY',
		optimised_plant: '250',
		proc_date: 1661472000000,
		solver_note: 'Using all three variables',
	},
	{
		sales_order: 548287,
		scheduled_deliver_date: 20220829,
		scheduled_deliver_date_parsed: 1661731200000,
		scheduled_deliver_time: 190000,
		product_code: 12490,
		order_plant: 972,
		max_age: 4,
		estimated_weight_sum: 2050.0,
		quantity_ordered: 1.0,
		net_weight: 2050,
		'Realization Code': 'BHSBBONELESS HAM SEMI-BONELESS',
		City: 'ERLANGER',
		STATE: 'KY',
		optimised_plant: '250',
		proc_date: 1661472000000,
		solver_note: 'Using all three variables',
	},
];

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
	dataset.map((data, index) => {
		let row = document.createElement('tr');
		if (index % 2 == 0) {
			row.className = 'text-center bg-white';
		} else {
			row.className = 'text-center light_blue_row';
		}
		let c1 = document.createElement('td');
		let c2 = document.createElement('td');
		let c3 = document.createElement('td');
		let c4 = document.createElement('td');
		let c5 = document.createElement('td');
		let c6 = document.createElement('td');
		let c7 = document.createElement('td');
		let c8 = document.createElement('td');
		c1.innerText = data.sales_order;
		c2.innerText = data.optimised_plant;
		c3.innerText = '';
		c4.innerText = '';
		c5.innerText = '';
		c6.innerText = '';
		c7.innerText = '';
		c8.innerText = data.solver_note;
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);
		row.appendChild(c4);
		row.appendChild(c5);
		row.appendChild(c6);
		row.appendChild(c7);
		row.appendChild(c8);
		table.appendChild(row);
	});
});
