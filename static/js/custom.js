
// TileSize
function updateSize() {
	var projectTile = document.querySelectorAll("#projects .tile.is-child");
	projectTile.forEach( function(tile, index) {
		if (window.innerWidth > 768) {
			tile.style.height = getComputedStyle(tile).width;
		} else {
			tile.style.height = null;
		}
	});
}


window.onload = updateSize;
window.onresize = updateSize;

// Modals
var rootEl = document.documentElement;
var modals = document.querySelectorAll('.modal');
var modalButtons = document.querySelectorAll('.modal-button');
var modalCloses = document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

if (modalButtons.length > 0) {
	modalButtons.forEach(function (el) {
			el.addEventListener('click', function () {
					var target = el.dataset.target;
					openModal(target);
					});
			});
}

if (modalCloses.length > 0) {
	modalCloses.forEach(function (el) {
			el.addEventListener('click', function () {
					closeModals();
					});
			});
}

function openModal(target) {
	var target = document.getElementById(target);
	rootEl.classList.add('is-clipped');
	target.classList.add('is-active');
}

function closeModals() {
	rootEl.classList.remove('is-clipped');
	modals.forEach(function (el) {
			el.classList.remove('is-active');
			});
}

document.addEventListener('keydown', function (event) {
		var e = event || window.event;
		if (e.keyCode === 27) {
		closeModals();
		closeDropdowns();
		}
		});


