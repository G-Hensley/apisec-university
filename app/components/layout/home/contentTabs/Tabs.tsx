export default function Tabs() {

  const tabs = ['Courses', 'Certifications', 'Tools'];

  return (
    <div className="flex items-center">
      {tabs.map((tab) => (
        <button 
          key={tab} 
          className="px-4 py-2 rounded-t-lg transition-all text-lg text-slate-300 border-secondary/80 border 
            border-b-primary cursor-pointer duration-300 ease-in-out hover:brightness-200 hover:text-white">
          {tab}
        </button>
      ))}
    </div>
  )
}