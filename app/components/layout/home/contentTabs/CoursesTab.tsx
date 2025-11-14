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
    <section className="w-full h-full flex flex-wrap justify-center gap-8 rounded-lg rounded-tl-none text-white">
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>Level: {course.level}</p>
          <p>CPE Credits: {course.cpe}</p>
        </div>
      ))}
    </section>
  )

}