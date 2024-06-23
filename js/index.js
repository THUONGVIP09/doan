  const loader = document.querySelector(".loader");
    window.addEventListener("load", () => {
      console.log("Page loaded"); // Log để kiểm tra sự kiện load
      setTimeout(() => {
        console.log("Hiding loader"); // Log để kiểm tra setTimeout
        loader.classList.add("hidden");
      }, 2000);
    });
$(window).on('scroll', function() {
    const header = $('#title');
    if ($(window).scrollTop() > 0) {
        header.css('position', 'fixed'); // New background color when scrolling down
    } else {
        header.css('position', 'relative'); // Original background color when scrolling up
    }
});
function hideads(argument) {
    /*exit ads*/
    document.getElementById("exitads").style.display="none";
    document.getElementById("content_ads").style.display = "none";
 
    /*back to top*/
    window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
 
 if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
 document.getElementById("myBtn").style.display = "block";
 } else {
 document.getElementById("myBtn").style.display = "none";
 }
 }
 
 document.getElementById('myBtn').addEventListener("click", function(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 });
 }
 $(document).ready(function(){
    $('#carouselExample').carousel({
      interval: 3000, // Thời gian giữa các slide
      pause: 'hover', // Tạm dừng khi di chuột vào carousel
      wrap: true // Quay lại slide đầu tiên sau khi đến slide cuối cùng
    });
  });
  //start the scroll top
  jQuery(document).ready(function($) {
    if ($(".btn-top").length > 0) {
        $(window).scroll(function() {
            var e = $(window).scrollTop();
            if (e > 500) {
                $(".btn-top").show()
            } else {
                $(".btn-top").hide()
            }
        });
        $(".btn-top").click(function() {
            $('body,html').animate({
                scrollTop: 0
            })
        })
    }
});
// end th scroll top
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function() {
        // Toggle class 'active' để hiện/ẩn menu dọc
        sidebar.classList.toggle('active');
    });
});