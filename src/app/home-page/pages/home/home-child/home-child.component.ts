import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ProfileInterface} from "../../../models/profile.interface";

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnChanges {

  @Input() receivedData:ProfileInterface;
  @Output() response:EventEmitter<string> = new EventEmitter<string>();

  public data:ProfileInterface[]=[];
  firstrun:boolean=true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.firstrun){
      this.firstrun = false;
    } else {
      this.data.push(
        this.receivedData
      );
    }
  }

  removeData(line:number):void {
    this.data.splice(line, 1);
  }

}
