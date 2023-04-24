import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "issue-list",
    templateUrl: './issueList.component.html',
    styleUrls: ['./issueList.component.css']
})

export class IssueListComponent {
    status: string[] = ['Open', 'In Progress', 'Closed'];
    @Input() issueName: string = "";

    issues: any[] = [
        { desc: 'On clicing Delete, the applicatio crashes', severity: 'Critical', status: 'Open' },
        { desc: 'The heading Add is wrongly displayed as Edit', severity: 'Minor', status: 'Closed' },
        { desc: 'The payment functionality is missing', severity: 'Major', status: 'In Progress' },
    ];

    newIssue: any = {};
    @Output() issueGenerated: EventEmitter<any> = new EventEmitter<any>();

    addIssue() {
        this.issues.push(this.newIssue);
        this.newIssue = {};

    }

    Onclick(issue: any) {
        this.issueGenerated.emit(issue);
    }

}