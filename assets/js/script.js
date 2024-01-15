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

const swiperTransaction = new Swiper(".transaction-swiper", {
	direction: "vertical",
	speed: 1000,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	spaceBetween: 20,
});

const swiperEvent = new Swiper(".swiper-event", {
	// Optional parameters
	// direction: "vertical",
	speed: 500,
	loop: true,

	centeredSlides: true,
	spaceBetween: 20,
	slidesPerView: "auto",
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		type: "custom", // use custom rendering
		renderCustom: function (swiper, current, total) {
			return current + " / " + total; // format it as 'current/total'
		},
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
	slidesPerView: 4,
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

const openSidebar = () => {
	$(".modal-overlay").show();
	$(".sidebar-wrapper").css({
		left: "0%",
	});
	$("body").css({
		overflow: "hidden",
	});
};

const closeSidebar = () => {
	$(".modal-overlay").hide();
	$(".sidebar-wrapper").css({
		left: "-100%",
	});
	$("body").css({
		overflow: "scroll",
	});
};

const openLoginFromSideBar = () => {
	closeSidebar();
	setTimeout(() => {
		openLoginForm();
	}, 200);
};

const openRegisterFromSidebar = () => {
	closeSidebar();
	setTimeout(() => {
		openRegisterForm();
	}, 200);
};

const closeTransactionSlide = () => {
	$(".transaction-slide").hide();
};

let firstMenuToogle = false;
let secondMenuToogle = false;
const toogleFirstMenu = (elem) => {
	$(".first-menu").toggle();

	if (firstMenuToogle) {
		$(elem).find(".show-icon").show();
		$(elem).find(".close-icon").hide();
	} else {
		$(elem).find(".show-icon").hide();
		$(elem).find(".close-icon").show();
	}

	firstMenuToogle = !firstMenuToogle;
};

const toogleSecondMenu = (elem) => {
	$(".second-menu").toggle();

	if (secondMenuToogle) {
		$(elem).find(".show-icon").show();
		$(elem).find(".close-icon").hide();
	} else {
		$(elem).find(".show-icon").hide();
		$(elem).find(".close-icon").show();
	}

	secondMenuToogle = !secondMenuToogle;
};
