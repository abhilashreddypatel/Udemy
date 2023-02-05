import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewApp';

 selection:string;
 Navigate(data:string){
  this.selection = data;
 }
}
