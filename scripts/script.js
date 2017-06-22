// loader function ------------
function loader() {
  setTimeout(showLoader,200);
}
function showLoader() {
  $('.loader').slideUp(1000);
}

$(document).ready(function () {
  var $panel1 = $('#home');
  var $panel2 = $('#me');
  var $panel3 = $('#about');
  var $panel4 = $('#works');
  var $panel5 = $('#pics')
  var $panel6 = $('#contact')
  var winHeight = $(window).height();


  // setting height ----------------
  $(".height").css("height", winHeight);

// smoothScroll ---------------------------
  function smoothScroll(duration) {
    $("a[href^='#']").on("click",function (event) {
      var target = $($(this).attr('href'));
      if (target.length) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: target.offset().top
        },duration);
      }
    });
  }
  smoothScroll(500);

  // function setPage(index) {
  //   $('nav ul li').removeClass('active');
  //   $('nav ul li').eq(index).addClass('active');
  // }
  // $('nav ul li').on('click', function () {
  //   var index = $('nav ul li').index($(this));
  //   setPage(index)
  // })

  // Arrow Pointer animation ---------------
  $('.pointer-grp').on({
    mouseenter : function () {
      $('.arrow').css({
        borderColor : 'white'
      },400)
      $('.black-circ').animate({
        height : '35px',
        width : '35px'
      },200)
    },
    mouseleave : function () {
      $('.arrow').css({
        borderColor : '#3c3c3c'
      },300)
      $('.black-circ').animate({
        height : '0px',
        width : '0px'
      },200)
    }
  })

  function setPage(index) {
    $panel4.find(".down-nav ul li").removeClass('is-active');
    $(".down-nav ul li").eq(index).addClass('is-active');
    $panel4.find('.wor').removeClass("active-wor");
    $panel4.find('.wor').eq(index).addClass("active-wor");
  }
  $panel4.find(".down-nav ul li").click(function () {
    var index = $panel4.find(".down-nav ul li").index($(this));
    curIndex = index;
    setPage(curIndex);
  });

  var curIndex = 0;
  $panel4.find("#circle-right").click(function () {
    if (curIndex < 3) {
      curIndex = curIndex+1;
      setPage(curIndex)
    }
  })
  $panel4.find("#circle-left").click(function () {
    if (curIndex > 0) {
      curIndex = curIndex-1;
      setPage(curIndex)
    }
  })




  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    // Parallax Scrolling -------------
    $(".speed-1").css({
      "transform" : "translate(0%, "+ scrollTop / 3 +"%) rotate(45deg)"
    })
    $(".speed-2").css({
      "transform" : "translate(0%, "+ scrollTop / 4 +"%) rotate(45deg)"
    })
    $(".speed-3").css({
      "transform" : "translate(0%, "+ scrollTop / 6 +"%) rotate(45deg)"
    })
    $(".speed-4").css({
      "transform" : "translate(0%, "+ scrollTop / 8 +"%) rotate(45deg)"
    })
    $(".speed-5").css({
      "transform" : "translate(0%, "+ scrollTop / 10 +"%) rotate(45deg)"
    })

    // Active Dots Navigation ---------------
    var len = $('.panel').length;
    for (var i = 0; i < (len); i++) {
      var id = $("nav ul a").eq(i).attr('href');
      if (scrollTop > $(id).offset().top - (winHeight / 3)) {
        $('nav ul li').removeClass('active');
        $('nav ul li').eq(i).addClass('active')
      }
    }

    if (scrollTop >= (winHeight * .65)) {
      $panel1.find('nav').fadeIn(200);
      $('.pointer-grp').fadeOut(300);
      $('.logo').addClass('go-down');
      $panel2.find('.my-name').addClass('is-showing');
    } else if (scrollTop <= winHeight / 4) {
      $panel1.find('nav').fadeOut(100);
      $('.pointer-grp').fadeIn(300);
      $('.logo').removeClass('go-down');
      $panel2.find('.my-name').removeClass('is-showing');
    }
  })

  $($panel3).mousemove(function (e) {
    var prev = 50 * -1;
    var divider = 80;
    var y = e.pageY;
    var x = e.pageX;
    var pgY = y - ($(window).height() / 2);
    var pgX = x - ($(window).width() / 2);
    $panel3.find('.info').css({
      transform : 'translate('+ ((pgX / divider) + prev) + '%,' +((pgY / divider) - 25 + prev) + '%)'
    })



  })
});
