export default function CoursesTab() {

  const courses = [
    {
      title: 'API Penetration Testing',
      description: 'Learn how to hack APIs like a professional penetration tester and find vulnerabilities.',
      level: 'Advanced',
      cpe: 12
    },
    {
      title : 'API Security Fundamentals',
      description: 'Learn about the OWASP API Top 10, real-world API breaches, and more.',
      level: 'Beginner',
      cpe: 3
    },
    {
      title: 'OWASP API Top 10 & Beyond!',
      description: 'Build your API security foundation with a strong understanding of the OWASP API Top 10.',
      level: 'Beginner',
      cpe: 3
    }
  ]

  return (
    <section 
      className="w-fit h-full flex flex-wrap justify-center gap-8 rounded-lg rounded-tl-none border
      border-primary/50 p-8"
    >
      {courses.map((course, index) => (
        <div 
          key={index}
          className="w-sm border border-primary rounded-lg p-4 pb-0 flex flex-col bg-radial from-primary/20 to-primary/5
            hover:brightness-125 transition-all duration-300 ease-in-out cursor-pointer relative gap-4 shadow-lg shadow-black/40"
        >
          <h3 className="text-center font-primary text-xl border-b border-secondary/50 pb-1 text-slate-200">{course.title}</h3>
          <p className="text-slate-300">{course.description}</p>
          <p className="text-slate-300 text-center p-2 border-b-0 border-primary border w-fit mx-auto rounded-t-lg">{course.level}</p>
          <p className="text-slate-900 absolute -top-3 -right-3 bg-secondary text-sm p-1.5 rounded-2xl shadow-md
            shadow-black/30 font-medium">
            {course.cpe} CPEs
          </p>
        </div>
      ))}
    </section>
  )

}