"use client";
import { useEffect } from "react";

export default function Home() {
  // fetch("https://boostfitness.azurewebsites.net/");
  // fetch("https://eshopapi-1iz1.onrender.com");
  // fetch("https://sketchdetect.onrender.com");
  // fetch("https://learn-geo-api.onrender.com");

  useEffect(() =>{
    console.log("in observer")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    })
  })

  const hiddenElements = document.querySelectorAll(".hide");
  const hidden2Elements = document.querySelectorAll(".hide2")
  hiddenElements.forEach((el) => observer.observe(el));
  hidden2Elements.forEach((el) => observer.observe(el))
}, []);


  return (
    <div>
      <div className="nav">
        <div className="nav-link">
          <a href="https://github.com/joeschueren">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
        </div>
        <div className="nav-link">
          <a href="mailto:joeschueren@gmail.com"><i className="fa-solid fa-envelope fa-xl"></i></a>
        </div>
        <div className="nav-link">
          <a href="#about">About</a>
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
        <div id="geo" className="hide projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-10 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/geo-prod.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">Learn Geo</h1>
                <p className="text-sm pb-5 text-center">
                  Learn Geo is an educational site where the user can view information about all the
                  countries of the world. Learn Geo also offers games to learn including quizzes and interactive maps.
                  I really enjoy geography and knowing about the world around me which inspired me to make this project.
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
                <a className="live-demo mx-2.5 my-2.5" href="https://learn-geo.vercel.app/" target='_blank'>Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" href="https://github.com/joeschueren/Learn-Geo-Frontend" target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
        <div id="sketch" className="hide projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-10 justify-center items-center flex-row">
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
                <a className="live-demo mx-2.5 my-2.5" target='_blank' href="https://sketchdetect.onrender.com/">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" href="https://github.com/joeschueren/SketchDetect" target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
        <div id="store" className="hide projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-10 justify-center items-center flex-row">
          <div className="project-image w-2/5">
            <img src="/ecom-both.png" alt="E-commerce Website laptop"/>
          </div>
          <div className="project-desc w-2/5 p-10">
              <div className="">
                <h1 className="text-2xl pb-5 text-center">eShop</h1>
                <p className="text-sm pb-5 text-center">
                  This is an e-commerce website created with items obtained from fakestore api
                  it displays the items from the inventory stored in a database and tracks the items
                  items that the user wants to buy with a cart system, and provides seamless checkout with
                  stripe integration.
                </p>
              </div>
              <div className="">
                <h3 className="text-xl text-center">Created With:</h3>
                <div className="tech-container flex flex-row justify-evenly pt-5 flex-wrap">
                  <p>React &middot; Express.js &middot; Node.js &middot; MongoDB</p>
                </div>
              </div>
              <div className="flex justify-center items-center py-10 flex-wrap">
                <a className="live-demo mx-2.5 my-2.5" target='_blank' href="https://eshop-three-neon.vercel.app/">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" target='_blank' href="https://github.com/joeschueren/eShop-Frontend">View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
        <div id="boost" className="hide projects-container flex justify-center items-center flex-col flew-wrap">
          <div className="project flex px-50 my-10 justify-center items-center flex-row">
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
                <a className="live-demo mx-2.5 my-2.5" target="_blank" href="https://boostfitness.azurewebsites.net/">Live Demo <i className="fa-solid fa-circle-play"></i></a>
                <a className="view-code mx-2.5 my-2.5" target="_blank" href="https://github.com/joeschueren/Boost-Fitness">View Code <i className="fa-brands fa-github"></i></a>
              </div>
          </div>
         </div>
        </div>
      </section>
      <section id="about" className="my-28">
        <div className="flex items-center justify-center w-full flex-wrap flex-row about-div">
          <div className="about-box w-2/5 h-full mb-auto">
          <p className="text-2xl py-6">About Me</p>
              <p className="text-lg about-text">I am a 20 year old software developer from Ohio, I enjoy Golfing, Fantasy Football, and
                helping with friends with their programming homework. I first starting programming in
                highschool, and was immediately fascinated. Now I encourage everyone to learn how to program
                and see the world they are missing out on.
              </p>
          </div>
          <div className="contact-box w-2/5 h-full">
            <p className="contact-title text-2xl py-6 px-3 pl-12 text-center">Contact Me</p>
            <div className="pl-12 about-info">
              <p className="text-lg pb-1.5">Email <i className="fa-solid fa-envelope fa-lg pl-1.5"></i></p>
              <a className="underline" href="mailto:joeschueren@gmail.com">joeschueren@gmail.com</a>
              <p className="text-lg pt-6 pb-1.5">LinkedIn <i className="fa-brands fa-linkedin fa-lg pl-1.5"></i></p>
              <a className="underline" href="https://linkedin.com/in/joeschueren">joeschueren</a>
              <p className="text-lg pt-6 pb-1.5">Github <i className="fa-brands fa-github fa-lg pl-1.5"></i></p>
              <a className="underline" href="https://github.com/joeschueren">joeschueren</a>
            </div>
          </div>
        </div>
      </section>
      <section id="email">
        <p className="tech-title text-2xl w-4/5 m-auto">My Skills</p>
        <div className="about-div flex items-center justify-center w-full mb-28">
            <div className="w-2/5 skill-desc flex items-center justify-center flex-col">
              <p className="w-4/5 text-center text-lg pb-6">
                These are some of the skills that are highlighted in my projects and portfolio.</p>
                <p className="w-4/5 text-center text-lg pb-6"> Each of my projects has a breakdown of which skills were used to make it.</p>
                <p className="w-4/5 text-center text-lg pb-12">If you want to view a project with a specific skill click on the skill and it
                   will take you to the project.</p>
            </div>
            <div className="about-box w-2/5 h-full">
            <p className="text-center text-2xl bold pb-6">Languages</p>
            <div className="hide2 tech-row flex items-center justify-between px-20 pb-3">
              <a href="#store" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="JS.png" width="50" height="50"></img>Javascript</a>
              <a href="#geo" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="TS.PNG" width="50" height="50"></img>Typescript</a>
              <a href="#sketch" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="PY.PNG" width="50" height="50"></img>Python</a>
              <a href="#boost" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image"src="CS.PNG" width="50" height="50"></img>C#</a>
            </div>
            <p className="text-center text-2xl bold py-6">Frontend</p>
            <div className="hide2 tech-row flex items-center justify-between px-20 pb-3">
              <a href="#geo" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="React.PNG" width="50" height="50"></img>React</a>
              <a href="#geo" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Next.PNG" width="50" height="50"></img>Next.js</a>
              <a href="#boost" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Boot.PNG" width="50" height="50"></img>Bootstrap</a>
              <a href="https://github.com/joeschueren/Portfolio" target="_blank" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Tail.PNG" width="50" height="50"></img>Tailwind</a>
            </div>
            <p className="text-center text-2xl bold py-6">Backend</p>
            <div className="hide2 tech-row flex items-center justify-between px-20 pb-3">
              <a href="#geo" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Node.PNG" width="50" height="50"></img>Node.js</a>
              <a href="#sketch" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Flask.png" width="50" height="50"></img>Flask</a>
              <a href="#boost" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Net.PNG" width="50" height="50"></img>.Net</a>
              <a href="#geo" className="tech-anchor text-center flex justify-center items-center flex-col"><img className="tech-image" src="Mongo.PNG" width="50" height="50"></img>MongoDB</a>
            </div>
          </div>
        </div>
      </section>
    </div>)
}
