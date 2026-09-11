import { BackendStatus } from "@/components/BackendStatus";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-white px-6 font-sans dark:bg-black">
      <h1 className="text-7xl font-bold tracking-[0.2em] text-black sm:text-8xl dark:text-zinc-50">
        PMDM
      </h1>
      <BackendStatus />
    </main>
  );
}
