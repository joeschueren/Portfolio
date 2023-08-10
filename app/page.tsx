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
          <div className="project flex px-50 my-20 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/ecom-both.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
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
                  <p>React &middot; Express.js &middot; Node.js &middot; MongoDB</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-10">
                <a className="live-demo mx-2.5">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5">View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
        <div className="projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-20 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/drawing-both.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">SketchDetect AI</h1>
                <p className="text-sm pb-5 text-left">
                  SketchDetect is a form of Artificial Intelligence that can tell what a user is drawing.
                  I find AI very interesting and wanted to create my own. With very little computing power
                  and having to collect all of the data by myself I decided on making the most complex neural
                  network that I thought would be plausible, and decided on making one that can detect hand drawn images.
                </p>
              </div>
              <div className="">
                <h3 className="text-xl text-center">Created With:</h3>
                <div className="tech-container flex flex-row justify-evenly pt-5 flex-wrap">
                  <p>Python &middot; Flask &middot; TensorFlow &middot; Numpy &middot; PIL</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-10">
                <a className="live-demo mx-2.5">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5">View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
        <div className="projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-20 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/geo-prod.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">Learn Geo</h1>
                <p className="text-sm pb-5 text-left">
                  Learn Geo is an educational site where the user can view information about all the
                  countries of the world. I really enjoy geography which inspired me to make this project.
                  Learn Geo utilizes an API I created to get information on the countries, and is open for
                  anyone to use.
                  
                </p>
              </div>
              <div className="">
                <h3 className="text-xl text-center">Created With:</h3>
                <div className="tech-container flex flex-row justify-evenly pt-5 flex-wrap">
                  <p>Typescript &middot; Next.js &middot; React &middot; Express.js</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-10">
                <a className="live-demo mx-2.5">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5">View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
        <div className="projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-20 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/fitness-prod.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">Boost Fitness</h1>
                <p className="text-sm pb-5 text-left">
                  Boost Fitness is a fitness platform where users can track the calories they eat and the minutes
                  they exercise each day and have the calories that they burned for the day automatically calculated
                  along with a plan for the week on how they can reach the goals they set. I was inspired to make this
                  because I was looking for a place to track my fitness but they didn't have what I wanted, so I decided
                  to make it myself.
                  
                </p>
              </div>
              <div className="">
                <h3 className="text-xl text-center">Created With:</h3>
                <div className="tech-container flex flex-row justify-evenly pt-5 flex-wrap">
                  <p>C# &middot; .Net &middot; MVC &middot; SQL Database</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-10">
                <a className="live-demo mx-2.5">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5">View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
      </section>
    </div>)
}
