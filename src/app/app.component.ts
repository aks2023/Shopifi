import { Component } from "@angular/core";
import { PreLoginComponent } from "./feature-module/shared/pre-login/pre-login.component";

@Component({
  selector: 'app-root',
  imports: [PreLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
