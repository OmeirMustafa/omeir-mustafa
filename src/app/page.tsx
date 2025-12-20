import { GravityScene } from "@/components/gravity/GravityScene";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omeir Mustafa | Digital Systems Designer",
  description: "High-performance websites and digital systems for founders and agencies. Replacing fragile websites with clarity and momentum.",
};

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-slate-950">
      <GravityScene />
    </main>
  );
}
