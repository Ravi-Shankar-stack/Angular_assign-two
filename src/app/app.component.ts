import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-assignment-two';
  flag: boolean = false;
  newlyAddedIssue: any = {};
  onIssueGenerated(issue: any): void {
    this.newlyAddedIssue = issue;
    this.flag = true
  }
}
