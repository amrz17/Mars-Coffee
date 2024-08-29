"use client";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/redux/features/counter/counterSlice";
import { AppDispatch, useAppSelector } from "../redux/store";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center">Coffee Shop</h1>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <span>{count}</span>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>
    </main>
  );
}
