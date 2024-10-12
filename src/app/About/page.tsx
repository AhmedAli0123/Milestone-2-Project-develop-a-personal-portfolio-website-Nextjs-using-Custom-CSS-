import Contact from "../Contact/page";

export default function About(){
    return (
      <>
        <section id="about">
      <div className="container">
        <h1 className="title">About Me</h1>
        <h2 className="subtitle">Get to know me!</h2>
        
        <div className="about-content">
          <div className="about-img">
            
          </div>
          
          <div className="about-text">
            <p>
              I am a student passionate about both front-end and back-end
              development. As part of the Governor Initiative for Generative
              AI and the Presidential Initiative for Cloud Native Generative AI,
              I am learning the latest technologies in the field. I have
              experience with HTML, CSS, TypeScript, JavaScript, Python,
              Next.js, React, and Tailwind CSS.
            </p>
            <p>
              I have worked on several projects, building user-friendly websites
              and reliable backend systems. I am eager to apply my skills to
              real-world projects and continue growing as a developer.
            </p>
            <p>
              I enjoy solving problems through coding and am committed to
              delivering quality work in every project I take on.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Contact></Contact>
    </>
    );
}