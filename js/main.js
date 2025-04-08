const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
const langIco = document.querySelector('.lang_wrap button span')

langBtn.addEventListener('click', function() {
  langList.classList.toggle('active')
  langIco.classList.toggle('active')
})

const swiper1 = new Swiper('#all_product_content', {
		autoplay: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
	})


const swiper2 = new Swiper('#kitchen', {
		autoplay: true,
		loop: true,
		pagination: { 
				el: '.swiper-pagination',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
						return `
								<span class="${currentClass}"></span>
								/
								<span class="${totalClass}"></span>
						`
				},
		},
	})
