"use strict";!function(e){function o(){e(this).prev().addClass("form_callback__active")}function r(){0==e(this).val()&&e(this).prev().removeClass("form_callback__active")}e(document).ready(function(){svg4everybody({}),setTimeout(function(){e("body").css({opacity:1,transition:"all .5s ease-in-out"})},1e3)}),e("#modal").iziModal({focusInput:!0,bodyOverflow:!0,overlayColor:"rgba(0, 0, 0, 0.9)"});var a=e("#certificat1"),i=e("#certificat2"),t=e("#certificat3");a.iziModal({bodyOverflow:!1,overlayColor:"rgba(0, 0, 0, 0.9)",title:"ПРОТОКОЛ ВИПРОБУВАНЬ",headerColor:"#F69328",background:"lightgray",group:"cert",loop:!0,arrowKeys:!0}),i.iziModal({bodyOverflow:!1,overlayColor:"rgba(0, 0, 0, 0.9)",title:"ПАСПОРТ РАДIАЦIЙНОЇ ЯКОСТI СИРОВИНИ ТА БУДIВЕЛЬНОГО МАТЕРIАЛУ",headerColor:"#F69328",background:"lightgray",group:"cert",loop:!0,arrowKeys:!0}),t.iziModal({bodyOverflow:!1,overlayColor:"rgba(0, 0, 0, 0.9)",title:"СЕРТИФІКАТ ВІДПОВІДНОСТІ",headerColor:"#F69328",background:"lightgray",group:"cert",loop:!0,arrowKeys:!0}),e(document).on("click",".certificat1",function(){a.iziModal("open")}),e(document).on("click",".certificat2",function(){i.iziModal("open")}),e(document).on("click",".certificat3",function(){t.iziModal("open")}),e("a[href*='#']").mPageScroll2id({autoScrollSpeed:!0});var n=(new Swiper(".about_slider_this .swiper-container",{speed:800,loop:!0,pagination:{el:".swiper-pagination",clickable:!1}}),new Swiper(".certification_wrap .swiper-container",{loop:!0,slidesPerView:3,spaceBetween:50,breakpoints:{992:{slidesPerView:2,spaceBetween:10,centeredSlides:!0}}}),new Swiper(".steps_wrap .about__info .swiper-container",{speed:800,navigation:{nextEl:".swiper__next",prevEl:".swiper__prev"},loop:!0,loopedSlides:4})),l=new Swiper(".steps_wrap .about__slider .swiper-container",{speed:800,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0,loop:!0,loopedSlides:4});n.controller.control=l,l.controller.control=n,e(document).on("click",".trigger",function(){e("#modal").iziModal("open"),e(".btn_global").tilt({scale:1.02,speed:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:20}),e(".phone_mask").mask("+00 (000) 000-00-00"),e.fn.datepicker.language.ua={days:["Неділля","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"],daysShort:["Нед","Пон","Вів","Сер","Чет","П'ят","Суб"],daysMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthsShort:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],today:"Сьогодні",clear:"Очистити",dateFormat:"dd.mm.yyyy",timeFormat:"hh:ii",firstDay:1},e("#date").datepicker({minDate:new Date,autoClose:!0,language:"ua"})}),e(".btn_global").tilt({scale:1.05,speed:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:10}),e(document).on("focusin",".form_callback__input, .form_callback__area",o),e(document).on("focusout",".form_callback__input, .form_callback__area",r),e(document).ready(function(){e(".form_callback").validate({rules:{name:{required:!0},phone:{required:!0,minlength:19},number:{required:!0,number:!0},address:{required:!0,minlength:15},date:{required:!0}},messages:{name:{required:"Введіть ваше ім'я"},phone:{required:"Введіть ваш телефон",minlength:"Введіть коректний номер телефону"},number:{required:"Введіть кількість",number:"Введіть кількість числом"},address:{required:"Введіть адресу",minlength:"Адреса має мітити мінімум 15 літер"},date:{required:"Введіть дату доставки"}},errorElement:"b",errorPlacement:function(o,r){var a=e(r).data("error");a?e(a).append(o):o.insertAfter(r)}}),e(".form_callback__btn .btn_global").click(function(o){for(var r=e(this).parents(".form_callback"),a=r.find("input"),i=!0,t=0;t<a.length;t++)e(a[t]).valid()||(i=!1);i&&(o.preventDefault(),e(this).attr("disabled",!0).text("надіслано").css({background:"#F69328",opacity:.3}).addClass("no_hover"),setTimeout(function(){e("#modal").iziModal("close",{transition:"bounceOutDown"})},1e3))})});var c=new slidebars;c.init(),e(document).on("click",".header_burger__this",function(o){o.stopPropagation(),o.preventDefault(),c.toggle("nav"),c.isActiveSlidebar("nav")&&e(".button_close_wrap").addClass("button_close_right").fadeIn(10)}),e(document).on("click",".wrapper, .button_close_wrap",function(){c.close("nav"),e(".button_close_wrap").hide().removeClass("button_close_right")})}(jQuery);