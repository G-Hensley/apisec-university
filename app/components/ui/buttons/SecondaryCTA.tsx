export default function SecondaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-transparent text-slate-300 font-semibold py-3 px-6 rounded-lg 
      shadow-md transition duration-300 cursor-pointer border border-primary hover:bg-primary/20">
      {children}
    </button>
  );
}