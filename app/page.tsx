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
          <a href="about">About</a>
        </div>
        <div className="nav-link">
          <a href="#projects">Projects</a>
        </div>
      </div>
      <section className="landing-section flex justify-center w-full h-screen items-center">
        <div className="flex flex-row justify-end w-4/5 landing-container">
          <div className="intro-div w-2/5 flex justify-center items-center flex-row text-center">
            <div>
              <h1 className="name-text p-1.5">Hi, I'm Joe.</h1>
              <h2 className="title-text p-1 mb-3">A Software Developer</h2>
              <a className="projects-button px-3 py-1.5" href="#projects">View my work <i className="fa-solid fa-arrow-right px-2"></i></a>
            </div>
          </div>
          <div className="block justify-end">
            <img className="landing-image" src="/landing-image.svg"></img>
          </div>
        </div>
      </section>
      <section className="projects-section mt-28">
        <h1 id="projects" className="text-center text-6xl mt-5">Projects</h1>
        <div className="projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-20 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/ecom-both.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">E-commerce Website</h1>
                <p className="text-sm pb-5 text-center">
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
              <div className="flex justify-center items-center py-10 flex-wrap">
                <a className="live-demo mx-2.5 my-2.5" target='_blank'>Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
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
                <p className="text-sm pb-5 text-center">
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
              <div className="flex justify-center items-center py-10 flex-wrap">
                <a className="live-demo mx-2.5 my-2.5" target='_blank'>Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" href="https://github.com/joeschueren/SketchDetect" target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
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
                <p className="text-sm pb-5 text-center">
                  Learn Geo is an educational site where the user can view information about all the
                  countries of the world. I really enjoy geography which inspired me to make this project.
                  Learn Geo utilizes an API I created to get information on the countries, and is open for
                  anyone to use.
                  
                </p>
              </div>
              <div className="">
                <h3 className="text-xl text-center">Created With:</h3>
                <div className="tech-container flex flex-row justify-evenly pt-5 flex-wrap">
                  <p>Typescript &middot; Next.js &middot; React &middot; Express.js &middot; MongoDB</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-10 flex-wrap">
                <a className="live-demo mx-2.5 my-2.5" target='_blank'>Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
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
                <p className="text-sm pb-5 text-center">
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
              <div className="flex justify-center items-center py-10 flex-wrap">
                <a className="live-demo mx-2.5 my-2.5">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" href="https://github.com/joeschueren/Boost-Fitness" target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
      </section>
      <section id="about" className="my-28">
        <div className="flex items-center justify-center w-full flex-wrap flex-row about-div">
          <div className="about-box w-2/5 h-full mb-auto">
          <p className="text-2xl py-6">About Me</p>
              <p className="text-lg">I am a 20 year old software developer from Ohio, I enjoy Golfing, Fantasy Football, and
                helping with friends with their programming homework. I first starting programming in
                highschool, and was immediately fascinated. Now I encourage everyone to learn how to program
                and see the world they are missing out on.
              </p>
          </div>
          <div className="about-box w-2/5 h-full">
            <p className="text-2xl py-6">Contact Me</p>
            <div className="pl-6">
              <p className="text-lg">Email Address:</p>
              <p className="pl-6">jschueren1431@gmail.com</p>
              <p className="text-lg">Linked In:</p>
              <p className="pl-6">placeholder</p>
              <p className="text-lg">Github:</p>
              <p className="pl-6">joeschueren</p>
            </div>
          </div>
        </div>
      </section>
      <section id="email">
        <div className="flex item-center justify-center w-full">
            <div className="w-2/5">

            </div>
            <div className="about-box w-2/5 h-full">
            <p className="text-2xl py-6">My Skills</p>
            <p className="text-center py-6">Languages</p>
            <div className="tech-row flex items-center justify-evenly px-20 pb-3">
              <img className="tech-image" src="JS.png" width="50" height="50"></img>
              <img className="tech-image" src="TS.png" width="50" height="50"></img>
              <img className="tech-image" src="PY.png" width="50" height="50"></img>
              <img className="tech-image"src="CS.png" width="50" height="50"></img>
            </div>
            <p className="text-center py-6">Frontend</p>
            <div className="tech-row flex items-center justify-evenly px-20 pb-3">
              <img className="tech-image" src="React.png" width="50" height="50"></img>
              <img className="tech-image" src="Next.png" width="50" height="50"></img>
              <img className="tech-image" src="Boot.png" width="50" height="50"></img>
              <img className="tech-image" src="Tail.png" width="50" height="50"></img>
            </div>
            <p className="text-center py-6">Backend</p>
            <div className="tech-row flex items-center justify-evenly px-20 pb-3">
              <img className="tech-image" src="Node.png" width="50" height="50"></img>
              <img className="tech-image" src="Flask.png" width="50" height="50"></img>
              <img className="tech-image" src="Net.png" width="50" height="50"></img>
              <img className="tech-image" src="Mongo.png" width="50" height="50"></img>
            </div>
          </div>
        </div>
      </section>
    </div>)
}
