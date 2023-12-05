import {Component} from "@angular/core";

@Component({
  selector: 'app-vote-taker-by-me',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>

   <app-voter-by-me *ngFor="let voter of voters" (voted)="onVote($event)" [name]="voter"></app-voter-by-me>
  `
})

export class VotetankerByMeComponent{
  agreed = 0;
  disagreed = 0;
  voters = ['Tao ten Tân1','Tao ten Tân2','Tao ten Tân3',"Tao ten Tân4"]

  onVote(angree:boolean){
    if(angree){
      this.agreed++;
    }else{
      this.disagreed++;
    }
  }
}
