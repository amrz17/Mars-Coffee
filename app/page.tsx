"use client";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/redux/features/counter/counterSlice";
import { AppDispatch, useAppSelector } from "../redux/store";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Popular from "@/components/popular";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <Popular />
        {/*
        <div>
          <h1 className="text-center">Coffee Shop</h1>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <span>{count}</span>
          <Button onClick={() => dispatch(increment())}>+</Button>
        </div>
        */}
      </main>
    </>
  );
}
