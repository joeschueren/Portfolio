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
        <div className="flex flex-row justify-end w-4/5">
          <div className="intro-div w-2/5 flex justify-center items-center flex-row text-center">
            <div>
              <h1 className="name-text p-1.5">Hi, I'm Joe.</h1>
              <h2 className="title-text p-1">A Software Developer</h2>
              <button className="projects-button px-3 py-1.5 my-3 ">View my work <i className="fa-solid fa-arrow-right px-2"></i></button>
            </div>
          </div>
          <div className="block justify-end">
            <img className="landing-image" src="/landing-image.svg"></img>
          </div>
        </div>
      </section>
      <section className="projects-section mt-52">
        <h1 className="text-center text-6xl">Projects</h1>
        <div className="projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex w-4/5 my-20 py-10 rounded-2xl justify-center items-center flex-row">
          <div className="project-image pr-10 h-4/5 w-1/2">
            <img src="/ecom-preview.png" alt="E-commerce Website"/>
          </div>
          <div className="project-desc w-2/5 p-10 text-white">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">E-commerce Website</h1>
                <p className="text-sm pb-5 text-left">
                  This is an e-commerce website created with items obtained from fakestore api
                  it displays the items from the inventory stored in a database and tracks the items
                  items that the user wants to buy with a cart system.
                </p>
              </div>
              <div className="">
                <h3 className="text-xl text-center">Created With:</h3>
                <div className="tech-container flex flex-row justify-evenly pt-5 flex-wrap">
                  <div className="tech mx-.5 my-1">React</div>
                  <div className="tech mx-.5 my-1">Express.js</div>
                  <div className="tech mx-.5 my-1">Node.js</div>
                  <div className="tech mx-.5 my-1">MongoDB</div>
                </div>
              </div>
          </div>
         </div>
        </div>
      </section>
    </div>)
}
