import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-voter-by-me',
  template: `
    <h4>{{name}}</h4>
    <button type="button" (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})

export class VoterByMeComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(angree: boolean){
    this.voted.emit(angree);
    this.didVote = true;
  }
}
