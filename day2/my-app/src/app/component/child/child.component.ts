import {
  AfterContentInit,
  Component, ContentChild,

  DoCheck, ElementRef,

  Input,
  OnChanges,
  SimpleChanges, ViewChild,

} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, DoCheck, AfterContentInit {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
  @Input() userName = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }

  ngDoCheck(): void {
    console.log("check from child")
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper',this.wrapper)
    console.log('ngAfterContentInit - contentWrapper',this.content)
  }
}
