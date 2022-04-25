import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      var selectedClass = "";
      $("p").click(function () {
        selectedClass = $().attr("data-rel");
        $("#portfolio").fadeTo(50, 0.1);
        $("#portfolio div")
          .not("." + selectedClass)
          .fadeOut();
        setTimeout(function () {
          $("." + selectedClass).fadeIn();
          $("#portfolio").fadeTo(50, 1);
        }, 500);
      });
      });

    // Menu Dropdown Toggle
   if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $().toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $("#top").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  }


}
