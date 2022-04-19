import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  }

}
