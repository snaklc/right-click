import { Component, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'right-click'; 

  isHidden: Boolean = true;
  contextMenuX: Number;
  contextMenuY: Number;


  onRightClick(event) {
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
    console.log(this.contextMenuX, this.contextMenuY);
    this.isHidden = false;
    return false;
  }

  @HostListener("click") onClick() {
    this.isHidden = true;

  }
  
}
