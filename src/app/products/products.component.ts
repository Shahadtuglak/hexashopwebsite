import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.html']
})
export class ProductsComponent implements OnInit {

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
