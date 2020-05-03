import { Component, OnInit } from '@angular/core';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-bin2dec',
  templateUrl: './bin2dec.component.html',
  styleUrls: ['./bin2dec.component.css']
})
export class Bin2decComponent implements OnInit {
  bin: any;
  dec: number;



  constructor() { }

  ngOnInit(): void {
  }

  converter(){
    this.dec=0;

    for(let i= this.bin.length-1; i>=0;i--){
      this.dec += parseInt(this.bin[i]) *Math.pow(2, this.bin.length-1-i)
    }
   
    
  }
  onkeypress(event:any){
    this.dec=0;

    for(let i= this.bin.length-1; i>=0;i--){
      this.dec += parseInt(this.bin[i]) *Math.pow(2, this.bin.length-1-i)
    }

  }

}
