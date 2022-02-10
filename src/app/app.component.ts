import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm-tsk';
  leadClick = false;
  leadOfferte = false;

  constructor(private router: Router) {

  }

  onLeadClick() {
    if (this.leadClick == false) {
      this.leadOfferte = false;
      this.leadClick = true;
      this.router.navigate(["user"]);
    }
    else {
      this.leadClick = false;
      this.router.navigate([""])
    }
  }
  onClickOfferte() {
    if (this.leadOfferte == false) {
      this.leadClick = false;
      this.leadOfferte = true;
      this.router.navigate(["offerte"]);
    }
    else {
      this.leadOfferte = false;
      this.router.navigate([""])
    }
  }
}
