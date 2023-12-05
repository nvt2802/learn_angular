import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  ngOnInit(): void {
    console.log("innit from parent");
  }
    userName = 'maria';

    updateUser(){
      this.userName = 'Tan'
    }
}
