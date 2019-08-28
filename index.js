'use strict'

const btn = $('button');
const nav = $(".nav li"); 

btn.attr('class', 'btn'); 

nav.on('click', (event)=> {
    $(event.target).addClass('active');
    $(event.target).siblings().removeClass('active');
    $(event.target).children().attr('height', '120px')   
    // if(nav.hasClass("active")) {
    //     console.log($(event.target).text())
    // }
});




  