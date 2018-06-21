import { Injectable } from '@angular/core';
import { Team } from './models/team.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class TeamService {
  teams: FirebaseListObservable<any[]> = null;
  players: FirebaseListObservable<any[]>;
  userId: string = "";
  constructor(private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        // console.log(this);
        this.userId = user.uid;
        this.teams = database.list(`teams/${this.userId}`);
        // console.log(this.userId);
        this.teams.subscribe(team => {
          //console.log(team);
        })
      }
    })
    this.players = database.list('dailyplayerstats/activeplayers/playerentry');
  }

  addTeam(newTeam: Team) {
    this.teams.push(newTeam);
  }

  getPlayers() {
    return this.players;
  }

  getTeams(): FirebaseListObservable<Team[]> {
    if(!this.userId) return;
    this.teams = this.database.list(`teams/${this.userId}`);
    return this.teams;
  }

  getTeamById(teamId: string) {
    return this.database.object(`teams/${this.userId}/${teamId}`);
  }
}
