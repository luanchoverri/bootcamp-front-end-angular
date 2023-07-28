import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 export class AppComponent{}


// Resulta inncesario usar el window media porque ya lo reconoce solo el navegador?
/** export class AppComponent implements OnInit {

  
  ngOnInit(): void {
    const userPrefersDark = false;

    const userPrefersLight=true;

   // console.log(userPrefersLight);
    console.log(userPrefersDark);
    if (userPrefersDark) {
      this.setThema('dark')
    }
    if (userPrefersLight) {
      this.setThema('light')
    }

   
  }
  //js normal 
  //const setTheme = theme => document.documentElement.className = theme;
  setThema(t: string) {
    //document.body.classList.toggle('light')
    
    document.documentElement.className = t;
    console.log(document.documentElement.className);
  }


  
}
*/