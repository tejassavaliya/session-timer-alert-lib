import { NgModule } from '@angular/core';
import { SessionTimerAlertLibComponent } from './session-timer-alert-lib.component';
import { MaterialModule } from './material/material.module';
import { SessionTimerComponent } from './session-timer/session-timer.component';
import { SessionTimerDialogComponent } from './session-timer-dialog/session-timer-dialog.component';
import { SessionTimerService } from './service/session-timer/session-timer.service';



@NgModule({
  declarations: [
    SessionTimerAlertLibComponent,
    SessionTimerComponent,
    SessionTimerDialogComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: [
    SessionTimerService
  ],
  exports: [
    SessionTimerAlertLibComponent
  ]
})
export class SessionTimerAlertLibModule { }
