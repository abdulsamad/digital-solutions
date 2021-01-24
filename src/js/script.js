import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

window.addEventListener('load', loading(), false);

function loading() {
	const main = document.getElementById('main');
	const loader = document.getElementById('loader');

	loader.classList.add('d-none');
	main.classList.remove('d-none');
}
