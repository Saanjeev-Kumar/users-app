import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as count from '../../store/actions/counter.action'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter:number;

  constructor(private store:Store<{counter:number}>) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      console.log("[STATE]",state);
      this.counter=state['ctr'].counter;
    })
  }
  onIncrement(){
    // this.store.dispatch({type:"INCREMENT"})
    this.store.dispatch(new count.Increment())
  }

  onDecrement(){
    // this.store.dispatch({type:"DECREMENT"})
    this.store.dispatch(new count.Decrement())

  }
  onAdd(value:number){
    // this.store.dispatch({type:"ADD",value:value})
    this.store.dispatch(new count.Add(value));

  }
  onSub(val:number){
    this.store.dispatch(new count.Sub(val))
  }
}
