import { Card, CardContent } from "@/components/ui/Card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Kashifa Khan</h1>
        <p className="text-lg text-gray-600">Senior Full-Stack & Cloud Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:khankashifa.1996@gmail.com"><Mail /></a>
          <a href="https://github.com/kashifakhan1996"><Github /></a>
          <a href="https://www.linkedin.com/in/kashifa-khan-520102127/"><Linkedin /></a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Passionate full-stack engineer with 6.5+ years of hands-on experience in developing
          scalable applications using a wide range of backend & frontend skills. Skilled in
          Node.js, Python, PHP, HTML, CSS, React.js, Typescript, AWS, Shopify, and various
          databases. Developed 10+ scalable web applications.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc pl-5">
          <li>React.js, Next.js, React Native</li>
          <li>Node.js, Nest.js, Express.js, Hapi.js</li>
          <li>Python, Django, Flask, LangChain</li>
          <li>PHP, Laravel, Yii2</li>
          <li>MongoDB, MySQL, PostgreSQL, Firebase</li>
          <li>AWS, Docker, Kubernetes</li>
          <li>GraphQL, REST APIs, Ajax</li>
          <li>MaterialUI, TailwindCSS, Bootstrap</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Medical Chatbot</h3>
              <p>Flask + LangChain + GPT + Pinecone + AWS CICD</p>
              <a href="https://github.com/kashifakhan1996/Medical-Chatbot-Generative-AI" className="text-blue-500">GitHub</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Product Quality Prediction</h3>
              <p>Python + LangChain + Flask + GPT + Pinecone</p>
              <a href="https://github.com/kashifakhan1996/End-To-End-Wine-Quality" className="text-blue-500">GitHub</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Resume Chatbot</h3>
              <p>OpenAI integrated resume-builder chatbot.</p>
            </CardContent>
          </Card>
           <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Real Real Estate</h3>
              <p>Property management and search portal using Next.js, Node.js, and MongoDB.</p>
              <a href="https://www.realrealestate.in" className="text-blue-500">Live Site</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Local Dekho</h3>
              <p>Service provider finder with Firebase auth, Google Maps API, and location-based filters.</p>
              <a href="https://localdekho.netlify.app/" className="text-blue-500">Live Site</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Savings Tracker</h3>
              <p>Visualize and manage savings and expenses. Built with React, Node.js, AWS.</p>
              <a href="https://savings-tracker-111.netlify.app/savings" className="text-blue-500">Live Site</a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc pl-5">
          <li>PG Diploma in AI & ML, IIIT Bangalore (2023–2025)</li>
          <li>B.Tech in Information Technology, UPTU (2013–2017)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-5">
          <li>Google Project Manager Certification</li>
          <li>Google Analytics (Basic & Advanced)</li>
          <li>Python Advanced</li>
          <li>AWS for Professionals</li>
        </ul>
      </section>
    </div>
  );
}
