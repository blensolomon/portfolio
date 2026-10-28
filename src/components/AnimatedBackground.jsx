export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-aurora-1 absolute -top-32 left-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent opacity-[0.08] blur-3xl" />
      <div className="animate-aurora-2 absolute bottom-[-15%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-violet-500 opacity-[0.07] blur-3xl" />
    </div>
  );
}
