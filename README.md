## DESCRIPTION
Angular (Latest Version) **User Idle / Session Timout Warning Popup** detector service. It's a straight forward **user idle / No Activity / session timout** detector for Angular. You can use this for session timeout package, user idle restriction after a period of time etc..


## INSTALLATION
```sh
npm i session-timer-alert-lib
```

## How to use angular idle detector in your angular app

### API List
1. **sessionLogout$** - This subject you need to subscribe in your component and it will notify you, when you need to reset your timer or logout your application once timer completed
2. **totalDurationminutes** - Pass Total Duration In Minutes
1. **warningDurationMinutes** - Pass Warning dialog display Duration In Minutes
1. **isShowTimer*** - When you want to display a timer on the screen


## Sample Code for Angular Session Timer Warning Popup

### app.module.ts - Import the SessionTimerAlertLibModule in your module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionTimerAlertLibModule } from 'session-timer-warning-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SessionTimerAlertLibModule // Import SessionTimerAlertLibModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### app.component.ts - Import the SessionTimerService in your component

```typescript
import { Component } from '@angular/core';
import { SessionTimerService } from 'session-timer-warning-lib'; // import SessionTimerService to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sessionTimerService: SessionTimerService) {

  }

  // initiate it in your component OnInit
  ngOnInit(): void {
    this.sessionTimerService
      .sessionLogout$.subscribe((isTimedComplted) => {
      console.log("Call Back From Library", isTimedComplted)
        // Do it any of the action when getting notified
       // this.authService.logout(true);
  })
  }
}

```

### app.component.html - Bind the tag in your component template

```html

<lib-session-timer-alert-lib
    [totalDurationminutes]="10"
    [warningDurationMinutes]="1"
    [isShowTimer]="true"
></lib-session-timer-alert-lib>

```

In the above example, I have invoked the `sessionLogout` Subject when getting notified from Library when timer gone completed and subscribed to the observable, once the user is idle for one minute then the subscribe method will get invoked with the `isTimedComplted` parameter's value (which is a boolean) as `true`.

By checking whether the `isTimedComplted` is true or not, you can do your any action and logout your application.

## VERSION

14.2.12 - Supports all the angular versions till 14.2.12 one.
