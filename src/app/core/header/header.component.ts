import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  expand = 'icons8-pantalla-completa-24';


  isDarkTheme = false;


  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.getDarkTheme();
  }

}