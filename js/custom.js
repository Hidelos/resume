document.querySelector('.btn-menu').addEventListener('click', function(){
    this.classList.toggle('active');
});
$(function(){
    $('.btn-menu').on('click', function(){
        $('#overlay-menu').toggleClass('active');
        $('#page-top').toggleClass('scrolling-none')
    });
});
