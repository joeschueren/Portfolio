import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="nav">
        <div className="nav-link">
          <a href="https://github.com/joeschueren">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
        </div>
        <div className="nav-link">
          <a href="mailto:jschueren1431@gmail.com"><i className="fa-solid fa-envelope fa-xl"></i></a>
        </div>
        <div className="nav-link">
          <p>About</p>
        </div>
        <div className="nav-link">
          <a href="#projects">Projects</a>
        </div>
      </div>
      <section id="projects" className="landing-section flex justify-center w-full h-screen items-center">
        <div className="flex flex-row justify-end">
          <div className="intro-div intro h-1/5 w-2/5 flex justify-center items-center flex-col">
            <div>
              <h1 className="name-text">Hi, I'm Joe.</h1>
              <h3>A Software Developer</h3>
            </div>
          </div>
          <div className="block justify-end">
            <img className="landing-image w-4/5" src="/landing-image.svg"></img>
          </div>
        </div>
      </section>
      <section className="projects-section mt-52">
        <h1 className="text-center text-6xl">My Projects</h1>
        <div className="projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="flex justify-center items-center flex-wrap">
            <div className="project-box w-1/4 h-1/4">1</div>
            <div className="project-box w-1/4 h-1/4">2</div>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            <div className="project-box w-1/4 h-1/4">3</div>
            <div className="project-box w-1/4 h-1/4">4</div>
          </div>
        </div>
      </section>
    </div>)
}
