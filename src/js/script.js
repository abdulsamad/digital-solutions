import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import AOS from 'aos';

window.addEventListener('load', loading(), false);

function loading() {
	const main = document.getElementById('main');
	const loader = document.getElementById('loader');

	loader.classList.add('d-none');
	main.classList.remove('d-none');
}

/* Init AOS */

AOS.init();
