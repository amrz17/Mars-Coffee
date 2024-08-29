import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center">Coffee Shop</h1>
        <Button>Buy me a coffee</Button>
      </div>
    </main>
  );
}
