import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
  name = 'Aniket';
  togglestatus: Boolean =false;
  clickLogs =[];
  counter = 0;
  onClickToggle(event:Event){
    this.togglestatus = !this.togglestatus;  
    //console.log(event);
    this.clickLogs.push(new Date());
  }
}



