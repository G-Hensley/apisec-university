export default function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-secondary text-black font-semibold py-3 px-6 rounded-lg 
      shadow-md transition duration-300 cursor-pointer hover:bg-secondary/50">
      {children}
    </button>
  );
}