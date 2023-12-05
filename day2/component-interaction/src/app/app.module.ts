import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeroChildComponent} from "./hero-child.component";
import {HeroParentComponent} from "./hero-parent.component";
import {NameChildComponent} from "./name-child.component";
import {NameParentComponent} from "./name-parent.component";
import {VoterComponent} from "./voter.component";
import {VoteTakerComponent} from "./votetaker.component";
import {VersionChildComponent} from "./version-child.component";
import {VersionParentComponent} from "./version-parent.component";
import {CountdownLocalVarParentComponent} from "./countdown-parent.component";
import {CountdownTimerComponent} from "./countdown-timer.component";
import {VoterByMeComponent} from "./voter-by-me.component";
import {VotetankerByMeComponent} from "./votetanker-by-me.component";


@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VoterComponent,
    VoteTakerComponent,
    VersionChildComponent,
    VersionParentComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    VoterByMeComponent,
    VotetankerByMeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
