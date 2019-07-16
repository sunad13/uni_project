/**********************************/
/*Header*/
/**********************************/
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-110px";
  }
  prevScrollPos = currentScrollPos;
}

/**********************************/
/*Search Bar*/
/**********************************/
$(document).ready(function(){
    $('a[href="#search"]').on('click', function(event) {                    
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });            
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });            
});

/**********************************/
/*Dropdown Menu*/
/**********************************/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");

        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

/**********************************/
/*Smooth Scroll*/
/**********************************/
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top - 0 + 'px'
            }, 1000);
            return false;
        }
        }
    });
});    

/**********************************/
/*Go-To-Top Button Visibility*/
/**********************************/
document.addEventListener('scroll', function() {
    if(scrollY > 200) {
        document.getElementById('goToTopBtn').classList.add('active');
    } else {
        document.getElementById('goToTopBtn').classList.remove('active');
    }
});