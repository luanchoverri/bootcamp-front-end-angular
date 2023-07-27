
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;

  setDarkTheme(isDarkTheme: boolean): void {
    this.isDarkTheme = isDarkTheme;
  }

  getDarkTheme(): boolean {
    return this.isDarkTheme;
  }
}