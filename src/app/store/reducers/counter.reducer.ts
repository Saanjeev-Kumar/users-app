import * as counterActions  from './../actions/counter.action';
import { Action } from "@ngrx/store";

const initialState=
{
  counter:0
}

export function counterReducer( state:{counter:number}=initialState,
  action: counterActions.CounterAction){
    switch (action.type) {
      case counterActions.INCREMENT:{
        return {
          counter:state.counter+1
        }
      }
      case counterActions.DECREMENT:{
        return{
          counter:state.counter-1
        }
      }
      case counterActions.ADD:{
        return {
          counter:state.counter+action.value
        }
      }
      case counterActions.SUB:{
        return{
          counter :state.counter-action.value
        }
      }



      default:
        return state;

    }

}
