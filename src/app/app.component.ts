import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shopifi';
   constructor(private readonly firebaseApp: FirebaseApp) {}

  ngOnInit() {
    console.log('🔥 Firebase App initialized:', this.firebaseApp.name);
  }
}
