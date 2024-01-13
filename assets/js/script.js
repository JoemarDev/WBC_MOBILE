const swiper = new Swiper(".swiper", {
	// Optional parameters
	// direction: "vertical",
	speed: 500,
	loop: true,
	autoplay: {
		delay: 1000,
	},
	centeredSlides: true,
	slidesPerView: "auto",
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		type: "custom", // use custom rendering
		renderCustom: function (swiper, current, total) {
			return current + " / " + total; // format it as 'current/total'
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

const gameMenuSwiper = new Swiper(".swiper-game-menu", {
	speed: 500,
	loop: false,

	spaceBetween: 4,
	slidesPerView: 5,
});

const footerSwiper = new Swiper(".footer-marquee", {
	speed: 3000,
	allowTouchMove: false,
	autoplay: {
		delay: 0,
	},
	freeMode: true,
	loop: true,
	spaceBetween: 20,
	slidesPerView: 8,
});

const pageLogin = () => {
	$(".guess-box").hide();
	$(".user-box").show();
	closeLoginForm();
};
const pageLogout = () => {
	$(".guess-box").show();
	$(".user-box").hide();
};

const openLoginForm = () => {
	$(".modal-overlay").show();
	$(".login-form").show();
	$("body").css({
		overflow: "hidden",
	});
};

const closeLoginForm = () => {
	$(".modal-overlay").hide();
	$(".login-form").hide();

	$("body").css({
		overflowY: "scroll",
	});
};

const openRegisterForm = () => {
	$(".modal-overlay").show();
	$(".register-form").show();
	$("body").css({
		overflow: "hidden",
	});
};

const closeRegisterForm = () => {
	$(".modal-overlay").hide();
	$(".register-form").hide();
	$("body").css({
		overflowY: "scroll",
	});
};

let transaction_amount = 0;

const incrementAmount = (value) => {
	transaction_amount += value;

	const formattedAmount = transaction_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	$("#transaction-input").val(formattedAmount);
};

const resetTransactionAmount = () => {
	transaction_amount = 0;
	$("#transaction-input").val(null);
};

const openAnnouncement = (elem) => {
	$(elem).parent().next().toggle();
};
