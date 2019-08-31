'use strict'

const btn = $('button');
const nav = $(".nav li"); 
const sub = $('.sub ');
const saleBtn = $('.sale-btn');
const disBtn = $('.dis-btn');

btn.attr('class', 'btn'); 

nav.on('click', (event)=> {
    if($(event.target).hasClass('active')) {
        $(event.target).removeClass('active');
        $(event.target).children().css('height', '0');
    } else {
        $(event.target).addClass('active');
        $(event.target).siblings().removeClass('active');
        $(event.target).children().css('height', '120px');
        $(event.target).siblings().children().css('height', '0');
    };
});

saleBtn.on('click', (event) => {
   if($(event.target).hasClass('sale')) {
       $(event.target).removeClass('sale');
       $([nav[0], nav[2], nav[3], nav[12], nav[13]]).removeClass('sale');
} else {
       $(event.target).addClass('sale');
       console.log(nav);
       $([nav[0], nav[2], nav[3], nav[12], nav[13]]).addClass('sale');
}
});

disBtn.on('click', (event) => { 
    if($(event.target).hasClass('discount')) {
        $(event.target).removeClass('discount');
        $([nav[4], nav[5], nav[7], nav[8], nav[10]]).removeClass('discount');
    } else {
        $(event.target).addClass('discount');
        $([nav[4], nav[5], nav[7], nav[8], nav[10]]).addClass('discount');
    }
})


