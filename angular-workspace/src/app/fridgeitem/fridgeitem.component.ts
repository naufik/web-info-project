import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridgeitem',
  templateUrl: './fridgeitem.component.html',
  styleUrls: ['./fridgeitem.component.css']
})
export class FridgeitemComponent implements OnInit {


  constructor() {
    (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  }

  ngOnInit() {
  }

  collapsed = true;

  collapseItem(){
    this.collapsed = !this.collapsed;
  }
}
