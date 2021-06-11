
export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";

export const ADD="ADD";
export const SUB="SUB";

export class Increment{
  readonly type=INCREMENT;
}
export class Decrement{
  readonly type=DECREMENT;
}
export class Add{
  readonly type=ADD;
  constructor(public value:number){}

}
export class Sub{
  readonly type=SUB;
  constructor(public value:number){}

}
export type CounterAction=Add | Increment | Decrement | Sub;
