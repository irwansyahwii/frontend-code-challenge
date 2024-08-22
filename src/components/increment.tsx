'use client';

import { useCounterStore } from "@/providers/counter-store-provider";

export const Increment = ()=> {
  const {count, incrementCount, decrementCount} = useCounterStore((state)=> state);
  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={incrementCount}>Increment</button>
      <button  type="button" onClick={decrementCount}>Decrement</button>
    </>
  )
}