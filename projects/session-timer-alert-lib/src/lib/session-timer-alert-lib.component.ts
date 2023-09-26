import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'lib-session-timer-alert-lib',
  templateUrl: './session-timer-alert-lib.component.html',
  styleUrls: ['./session-timer-alert-lib.component.css']
})
export class SessionTimerAlertLibComponent implements OnInit {
  @Input() totalDurationminutes: any = 10;
  @Input() warningDurationMinutes: any = 5;
  @Input() isShowTimer: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
