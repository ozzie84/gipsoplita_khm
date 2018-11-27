"use strict";!function(e){function t(){e(this).prev().addClass("form_callback__active")}function i(){0==e(this).val()&&e(this).prev().removeClass("form_callback__active")}e(document).ready(function(){svg4everybody({}),setTimeout(function(){e("body").css({opacity:1,transition:"all .5s ease-in-out"})},1e3)}),e("#modal").iziModal({focusInput:!0,bodyOverflow:!0,overlayColor:"rgba(0, 0, 0, 0.9)"});var n=e("#certificat1"),s=e("#certificat2"),a=e("#certificat3");n.iziModal({bodyOverflow:!0,overlayColor:"rgba(0, 0, 0, 0.9)",title:"ПРОТОКОЛ ВИПРОБУВАНЬ",headerColor:"#F69328",background:"lightgray",group:"cert",loop:!0,arrowKeys:!0}),s.iziModal({bodyOverflow:!0,overlayColor:"rgba(0, 0, 0, 0.9)",title:"ПАСПОРТ РАДIАЦIЙНОЇ ЯКОСТI СИРОВИНИ ТА БУДIВЕЛЬНОГО МАТЕРIАЛУ",headerColor:"#F69328",background:"lightgray",group:"cert",loop:!0,arrowKeys:!0}),a.iziModal({bodyOverflow:!0,overlayColor:"rgba(0, 0, 0, 0.9)",title:"СЕРТИФІКАТ ВІДПОВІДНОСТІ",headerColor:"#F69328",background:"lightgray",group:"cert",loop:!0,arrowKeys:!0}),e(document).on("click",".certificat1",function(){n.iziModal("open")}),e(document).on("click",".certificat2",function(){s.iziModal("open")}),e(document).on("click",".certificat3",function(){a.iziModal("open")}),e("a[href*='#']").mPageScroll2id({autoScrollSpeed:!0});var r=(new Swiper(".about_slider_this .swiper-container",{speed:800,loop:!0,pagination:{el:".swiper-pagination",clickable:!1}}),new Swiper(".certification_wrap .swiper-container",{loop:!0,slidesPerView:3,spaceBetween:50,breakpoints:{992:{slidesPerView:2,spaceBetween:10,centeredSlides:!0}}}),new Swiper(".steps_wrap .about__info .swiper-container",{speed:800,navigation:{nextEl:".swiper__next",prevEl:".swiper__prev"},loop:!0,loopedSlides:4})),o=new Swiper(".steps_wrap .about__slider .swiper-container",{speed:800,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0,loop:!0,loopedSlides:4});r.controller.control=o,o.controller.control=r,e(document).on("click",".trigger",function(){e("#modal").iziModal("open",{bodyOverflow:!1}),e(".btn_global").tilt({scale:1.02,speed:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:20}),e(".phone_mask").mask("+00 (000) 000-00-00"),e.fn.datepicker.language.ua={days:["Неділля","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"],daysShort:["Нед","Пон","Вів","Сер","Чет","П'ят","Суб"],daysMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthsShort:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],today:"Сьогодні",clear:"Очистити",dateFormat:"dd.mm.yyyy",timeFormat:"hh:ii",firstDay:1},e("#date").datepicker({minDate:new Date,autoClose:!0,language:"ua"})}),e(".btn_global").tilt({scale:1.05,speed:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:10}),e(document).on("focusin",".form_callback__input, .form_callback__area",t),e(document).on("focusout",".form_callback__input, .form_callback__area",i),e(document).ready(function(){e(".form_callback").validate({rules:{name:{required:!0},phone:{required:!0,minlength:19},number:{required:!0,number:!0},address:{required:!0,minlength:15},date:{required:!0}},messages:{name:{required:"Введіть ваше ім'я"},phone:{required:"Введіть ваш телефон",minlength:"Введіть коректний номер телефону"},number:{required:"Введіть кількість",number:"Введіть кількість числом"},address:{required:"Введіть адресу",minlength:"Адреса має мітити мінімум 15 літер"},date:{required:"Введіть дату доставки"}},errorElement:"b",errorPlacement:function(t,i){var n=e(i).data("error");n?e(n).append(t):t.insertAfter(i)}}),e(".form_callback__btn .btn_global").click(function(t){for(var i=e(this).parents(".form_callback"),n=i.find("input"),s=!0,a=0;a<n.length;a++)e(n[a]).valid()||(s=!1);s&&(t.preventDefault(),e(this).attr("disabled",!0).text("надіслано").css({background:"#F69328",opacity:.3}).addClass("no_hover"),setTimeout(function(){e("#modal").iziModal("close",{transition:"bounceOutDown"})},1e3))})});var l=new slidebars;l.init(),e(document).on("click",".header_burger__this",function(t){t.stopPropagation(),t.preventDefault(),l.toggle("nav"),l.isActiveSlidebar("nav")&&e("body").css("overflow","hidden"),e(l.events).on("closing",function(t,i){e("body").css("overflow","scroll")})}),e(document).on("click",".wrapper, .button_close_wrap",function(){l.close("nav"),e(".button_close_wrap").hide().removeClass("button_close_right")})}(jQuery);