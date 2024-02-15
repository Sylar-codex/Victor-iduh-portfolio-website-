import { StaticImageData } from "next/image";
import jumJacket from "../../assets/img/jum-jacket.png";
import schoolTemplate from "../../assets/img/School-template.png";
import padi from "../../assets/img/Padi.png";
import petstore from "../../assets/img/Pet-store.png";

interface ProjectDataTypes {
  id: number;
  projectImgURL: string | StaticImageData;
  projectTitle: string;
  ProjectAbout: string;
  stack: string;
  frontendGithubURL: string;
  backendGithubURL: string;
  projectLiveURL: string;
}

const ProjectData: ProjectDataTypes[] = [
  {
    id: 0,
    projectImgURL: jumJacket,
    projectTitle: "Jum Jacket Store",
    ProjectAbout:
      "This is an ecommerce store that let users shop thier favourite jacket online with ease from their computer, it also offers a seamless payment option for the user to pay for goods they want to purchase and for the traders. It leaves them happy and stress free, because the app has taken care of all the stress, they just sit back at home and watch their account ring out from all the sales",
    stack:
      "React | useReducer | Context API | Image Lazy loader | Custom hooks | Django RF | Django-rest-knox | Cloudinary | huey and redis | google smtp | PostgreSQL | Paystack",
    frontendGithubURL:
      "https://github.com/Sylar-codex/jum-jacket-create-react-app-",
    backendGithubURL:
      "https://github.com/Sylar-codex/Jum-jacket-store-backend-",
    projectLiveURL: "https://jum-jacket-create-react-app.vercel.app/#/",
  },
  {
    id: 1,
    projectImgURL: padi,
    projectTitle: "Padi",
    ProjectAbout:
      "This is a messaging app which only allows communication with a close circle, only users who have your email can be able to communicate and text you. Communication on this app is seamless and secured. It comprises of the use of React as the the frontend technology and Django as the backend.",
    stack:
      "React | DJango | Django-RF | Django-rest-knox | Django-channels | Websockets | redis | Daphane | Tailwind CSS | useReducer | Context API | Custom hooks ",
    frontendGithubURL: "https://github.com/Sylar-codex/padi-FE-c",
    backendGithubURL: "https://github.com/Sylar-codex/padi-backend",
    projectLiveURL: "https://github.com/Sylar-codex/padi-FE-",
  },
  {
    id: 2,
    projectImgURL: schoolTemplate,
    projectTitle: "School Website Template",
    ProjectAbout:
      "This is a school website template to aid anyone who would like to build a website for a school, most especially a secondary/high school, all That is needed to do is just edit texts to preferred and most suitable to user",
    stack: "HTML | SAAS | Swiper.js | Javascript",
    frontendGithubURL: "https://github.com/Sylar-codex/school-website-template",
    backendGithubURL: "",
    projectLiveURL: "https://schoolwebsitetemp01.netlify.app/",
  },

  {
    id: 3,
    projectImgURL: petstore,
    projectTitle: "Sylar Pet-Store",
    ProjectAbout:
      "This is project is a static online store to purchase and buy pets. Different Pets are gotten based on categories from Dogs to Cats to Hamsters.",
    stack: "React | Context API | Image Lazy loader",
    frontendGithubURL: "https://github.com/Sylar-codex/pet-store",
    backendGithubURL: "",
    projectLiveURL: "https://sylar-pet-store.vercel.app/",
  },
];

export default ProjectData;
