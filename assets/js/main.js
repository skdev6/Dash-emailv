$(function() {
	
// Wow Js Init
new WOW().init();


function header_fun(){

		var Header = $(".header-area"); 

		var spaceEl = document.createElement('div');
		spaceEl.classList.add('spacing-top');
		Header.append(spaceEl);

		var headerHeight = Header.find('.top-nav').innerHeight();

		spaceEl.style.height = headerHeight+"px";

		window.addEventListener('resize',function(){
			var headerHeight = Header.find('.top-nav').innerHeight();
			console.log(headerHeight);
			spaceEl.style.height = headerHeight+"px";
		});

		Header.find('.nav-collapse-btn').click(function() {

			Header.toggleClass('collapse-nav-active');
			$('body').toggleClass('collapse-nav-active');
			$(this).toggleClass('collapse-nav-active')

		});
		
		if(!Header.hasClass('collapse-nav-active')){
		    $('[nav-toggle="tooltip"]').tooltip({
				customClass:'light-tooltip right-toltip',
				placement:"right",
				animation:false,
		    });
		}

		var ResSearchBtn = $('.header-area .top-nav .e-search-lg-btn');
		var ResInfohBtn = $('.header-area .top-nav .right-info-btn');
		ResSearchBtn.click(function() {
			Header.toggleClass('open-e-search');
			Header.removeClass('open-info-area');
		});

		ResInfohBtn.click(function() {
			Header.toggleClass('open-info-area');
			Header.removeClass('open-e-search');
		});



        if (!$.fn.tooltip) {
	        throw new Error('Bootstrap Tooltip must be included first!');
	    }
	    var Tooltip = $.fn.tooltip.Constructor;
	    $.extend(Tooltip.Default, {
	        customClass: ''
	    });
	    var _show = Tooltip.prototype.show;
	    Tooltip.prototype.show = function () {
	        _show.apply(this);
	        if (this.config.customClass) {
	            var tip = this.getTipElement();
	            $(tip).addClass(this.config.customClass);
	        }
	    };

		$('[integrations-toggle="tooltip"]').tooltip({
			customClass:'light-tooltip bottom-toltip',
			placement:"bottom",
			animation:false,
			show:true,
	    });

} header_fun();


	$('.sticky-leftside, .sticky-rightside').theiaStickySidebar({
		'additionalMarginTop': 90,

	});

	$('.collection-view').each(function(){

		$('.email-card-list-view').click(function(){

			$('.e-card-wrapper').addClass('email-card-list-wrapper');
			$('.e-card-wrapper').removeClass('email-card-box-wrapper');

			$(this).addClass('selected').siblings().removeClass('selected');

		});
		$('.email-card-box-view').click(function(){

			$('.e-card-wrapper').addClass('email-card-box-wrapper');
			$('.e-card-wrapper').removeClass('email-card-list-wrapper');
			$(this).addClass('selected').siblings().removeClass('selected');

		});

	});

	// Line Chart Scripts
	// Line Chart Scripts

	 new Chart($("#lineChart"), {
	    type: 'line',
	    data: {
	        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
	        datasets: [
	        	{ label: "Deliverable", fill: !1, backgroundColor: "#00DCD3", borderColor: "#00DCD3", radius:4, data: [40, -20, 50, -40, 20, 30, 60, 25, 20, 40] },
	            { label: "Invalid", fill: !1, backgroundColor: "#FF3838", borderColor: "#FF3838",radius:4, data: [-90, -50, -70, 20, -35, 20, 10, 50, 30, 80] },
	            { label: "Risky", fill: !1, backgroundColor: "#FFAB38", borderColor: "#FFAB38", borderDash: [5, 5],radius:4, data: [10, -50, 30, -80, 50, -30, 30, -80, 10, -10] },
	        ],
	    },
	    options: {
	        responsive: !0,
	        tooltips: { mode: "index", intersect: !1 },
	        hover: { mode: "nearest", intersect: !0 },
	        scales: {
	            xAxes: [{ display: !0, gridLines: { color: "rgba(137, 151, 189, 0.15)" }, ticks: { fontColor: "#8997bd" } }],
	            yAxes: [{ gridLines: { color: "rgba(137, 151, 189, 0.15)" }, ticks: { max: 100, min: -100, stepSize: 20, fontColor: "#8997bd" } }],
	        },
	        legend:{
	        	display: true,
	        	position:"bottom",
	        	align:"start",
	        	labels:{
	        		usePointStyle: true,
	        		radius:0,
	        		fontSize: 15, 
                	fontColor: '#161637'
	        	}
	        }
	    }
	});


});