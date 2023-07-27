import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{}


// INNECESARIO????


// export class AppComponent implements OnInit {

  
//   ngOnInit(): void {
//   //   const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//   //  // const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

//   //  // console.log(userPrefersLight);
//   //   console.log(userPrefersDark);


//   //   // if (userPrefersDark) {
//   //   //   this.setThema('dark')
//   //   // }
//   //   // if (userPrefersLight) {
//   //   //   this.setThema('light')
//   //   // }

//   //   //this.setThema('')
//   // }

//   // //js normal 
//   // //const setTheme = theme => document.documentElement.className = theme;
//   // setThema(t: string) {
//   //   //document.body.classList.toggle('light')
    
//   //   document.documentElement.className = t;
//   //   console.log(document.documentElement.className);

//   }
// }