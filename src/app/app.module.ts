import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { MatchupComponent } from './matchup/matchup.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { CreateTeamComponent } from './create-team/create-team.component';
import { LeagueHomeComponent } from './league-home/league-home.component';

import { DraftComponent } from './draft/draft.component';
import { AboutComponent } from './about/about.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayerListComponent,
    TeamPageComponent,
    MatchupComponent,
    DraftComponent,
    CreateTeamComponent,
    LeagueHomeComponent,
    AboutComponent,
    EditTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
