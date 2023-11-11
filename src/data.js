 
import RestCountries from "./assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./assets/portfolioImages/spacetourism.jpg";
import Advice from "./assets/portfolioImages/advise.png";

import AWS from "./assets/portfolioImages/s3.jpg";
import Todo from "./assets/portfolioImages/todo.jpg"
import Chat_me from "./assets/portfolioImages/Chat_me.png"
import Messmitra from "./assets/portfolioImages/stethup1.png"
import stethup6 from "./assets/portfolioImages/stethup6.png"
import epm from "./assets/portfolioImages/epm image.jpg"
import healthtech from "./assets/portfolioImages/stethup10.png"
// import jobs from "../src/assets/portfolioImages/"
import song   from "./assets/portfolioImages/song.png"




 
const ProjectsData = [
   {
    id: "rest-countries",
    img: Messmitra,
    name: "Stethup Jobs",
    stack: ["< Html/>", "< Css />", "< Js />","</React>","</MySQL>","</Python>",],
    live: "https://www.stethup.ai/jobs",
    source: "",
    description:  
" stethup Jobs is a platform for jobseeker who belongs to medical domain , here they can seek their dream job in healthcare sector.It also gives a huge platform for employer to post a job related to healthcare services . "  },
   {
    id: "rest-countries",
    img: stethup6,
    name: "Stethup Learning",
 stack: ["< Html/>", "< Css />", "< Js />","</React>","</Mongo Db>","</Express>","</Node Js>"],
    live: "https://www.stethup.ai/learning",
    source: "",
    description:  
       "Stethup learning is a e-learning project, which consist of two modules , one is instructor and another is learner .Instructor will upload the videos or tutorials and learner can purchase those videos. In this project I have implemented zoom integration and also 3rd party payment gateway.",
  },
   
  {
    id: "rest-countries",
    img: healthtech,
    name: "Stethup Healthtech",
    stack: ["< Html/>", "< Css />", "< Js />" , "</React>","</MySQL>","</Python>"],
    live: "https://www.stethup.ai/healthtech",
    source: "",
    description:  
        "Stethup healthtech is a platform where vendors can sell their healthcare realted products to the hospitals and also different hospitals can purchase these products and can enquire about these products directly from vendors ",
  },


  {
    id: "Exercise Manager Mern",
    img: epm,
    name: "Employee performance management",
    stack: ["< MERN /> " ],
    source: "",
    description:  
        " Project is all about evaluation of performance of an employee in a particular organization based on KRA's and ratings .",
    
  },

 ,


  {
    id: "todo",
    img: Todo,
    name: "React Todo App",
    stack: ["< React/>  ", "< css />"],
    source: "",
    description:  
        "React JS todo app that Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation",
  },
 
  
   
];



export default {ProjectsData}
