import carWashLoginMini from "../img/ProjectsGallery/CarWash/BestcarwashLoginMini.png";
import carWashMainMini from "../img/ProjectsGallery/CarWash/BestcarwashMainMini.png";
import carWashAboutUsMini from "../img/ProjectsGallery/CarWash/BestcarwashAboutUsMini.png";
import carWashAppointmentMini from "../img/ProjectsGallery/CarWash/BestcarwashAppointmentMini.png";
import carWashServicesMini from "../img/ProjectsGallery/CarWash/BestcarwashServicesMini.png";
import carWashUserDashboardMini from "../img/ProjectsGallery/CarWash/BestcarwashUserDashboardMini.png";
import carWashLogin from "../img/ProjectsGallery/CarWash/BestcarwashLogin.png";
import carWashMain from "../img/ProjectsGallery/CarWash/BestcarwashMain.png";
import carWashAboutUs from "../img/ProjectsGallery/CarWash/BestcarwashAboutUs.png";
import carWashAppointment from "../img/ProjectsGallery/CarWash/BestcarwashAppointment.png";
import carWashServices from "../img/ProjectsGallery/CarWash/BestcarwashServices.png";
import carWashUserDashboard from "../img/ProjectsGallery/CarWash/BestcarwashUserDashboard.png";

import todoEmptyList from "../img/ProjectsGallery/Todo/emptyList.png";
import todoEmptyListMini from "../img/ProjectsGallery/Todo/emptyListMini.png";
import todoTaskExamples from "../img/ProjectsGallery/Todo/taskExamples.png";
import todoTaskExamplesMini from "../img/ProjectsGallery/Todo/taskExamplesMini.png";
import todoDatabase from "../img/ProjectsGallery/Todo/database.png";
import todoDatabaseMini from "../img/ProjectsGallery/Todo/databaseMini.png";
import todoOnlyActive from "../img/ProjectsGallery/Todo/onlyActive.png";
import todoOnlyActiveMini from "../img/ProjectsGallery/Todo/onlyActiveMini.png";
import todoAllTasksDone from "../img/ProjectsGallery/Todo/allTasksDone.png";
import todoAllTasksDoneMini from "../img/ProjectsGallery/Todo/allTasksDoneMini.png";

export const carWash = {
  header: "Car Wash Project",
  projectPageDescription: "BEST CAR WASH - Netlify",
  gitHub: "GitHub Repository",
  gitHubLink: "https://github.com/infoshareacademy/jfddr6-team-kanuni-team",
  pageLink: "https://bestcarwash.netlify.app/",
  shortDescription: `Project created in a group named: "Kanuni". The team consisted of four people. After clicking on "more info" you can read about my part of the work`,
  description: (
    <>
      <p>
        This project was created for a potential car wash owner. It is a page
        where you can read about the car wash and their services. Also on this
        page, You have possibility to create your account to be able make an
        appointment
      </p>
      <p>
        Car Wash project was created by a group of four called "KANUNI TEAM".
        Each person had their own task. We have planned together how the
        application will look like, what it will contain and how it will work.
        <br />
        My job was to create logic which allow you to create account, log into
        it, reset password, make an appointment. To realize this create, login
        and reset features a used Firebase API. UI which allows to make an
        appointment uses react-day-picker library. Project has many challenges
        but also has made me a lot of pleasure during writing code and solving
        problems.
        <br />
        Fun fact - Kanuni word mens "code" in suahili language.
      </p>
    </>
  ),
  bigGallery: [
    { id: 1, pic: carWashMain, alt: "Best car wash main page" },
    { id: 2, pic: carWashLogin, alt: "Best car wash login page" },
    { id: 3, pic: carWashAboutUs, alt: "Best car wash about us page" },
    {
      id: 4,
      pic: carWashAppointment,
      alt: "Best car wash appointment page",
    },
    {
      id: 5,
      pic: carWashServices,
      alt: "Best car wash services page",
    },
    {
      id: 6,
      pic: carWashUserDashboard,
      alt: "Best car wash user dashboard page",
    },
  ],
  smallGallery: [
    { id: 1, pic: carWashMainMini, alt: "Mini best car wash main page" },
    { id: 2, pic: carWashLoginMini, alt: "Mini best car wash login page" },
    { id: 3, pic: carWashAboutUsMini, alt: "Mini best car wash about us page" },
    {
      id: 4,
      pic: carWashAppointmentMini,
      alt: "Mini best car wash appointment page",
    },
    {
      id: 5,
      pic: carWashServicesMini,
      alt: "Mini best car wash services page",
    },
    {
      id: 6,
      pic: carWashUserDashboardMini,
      alt: "Mini best car wash user dashboard page",
    },
  ],
  images: [
    {
      original: carWashMain,
      thumbnail: carWashMainMini,
    },
    {
      original: carWashLogin,
      thumbnail: carWashLoginMini,
    },
    {
      original: carWashAboutUs,
      thumbnail: carWashAboutUsMini,
    },
    {
      original: carWashAppointment,
      thumbnail: carWashAppointmentMini,
    },
    {
      original: carWashServices,
      thumbnail: carWashServicesMini,
    },
    {
      original: carWashUserDashboard,
      thumbnail: carWashUserDashboardMini,
    },
  ],
};

export const todoList = {
  header: "MVC ToDo List",
  projectPageDescription: "",
  gitHub: "GitHub Repository",
  gitHubLink:
    "https://github.com/trohda/react-projects/tree/main/React%20Todo%20List",
  pageLink: "",
  shortDescription: `Simple MVC ToDo list app. One of my first projects build using React.js library.`,
  description: (
    <>
      <p>
        This is simple project created on the basis of 11 challenges which are
        described in my README.md file in repository.
      </p>
      <p>
        ToDo List is an app in which you can save the task You need to do.
        <ul>
          App has few functionalities:
          <li>You can mark or unmarked each as done or undone</li>
          <li>delete each or all done</li>
          <li>show all tasks or only active or done</li>
          <li>
            list of task also have counter which shows You "how many tasks left
            to do"
          </li>
        </ul>
        <br />
        Tis app is is only a model (MVC). To emulate database i`ve used REST API
        JSON Server Node.js <br />
        ```json-server --watch &#60 db.json path &#62 --port 8000````
      </p>
    </>
  ),
  bigGallery: [
    { id: 1, pic: todoEmptyList, alt: "Todo empty list" },
    { id: 2, pic: todoTaskExamples, alt: "Todo list with example tasks" },
    { id: 3, pic: todoDatabase, alt: "Todo database" },
    {
      id: 4,
      pic: todoOnlyActive,
      alt: "Only active tasks on todo list",
    },
    {
      id: 5,
      pic: todoAllTasksDone,
      alt: "Marked all tasks as done on todo list",
    },
  ],
  smallGallery: [
    { id: 1, pic: todoEmptyListMini, alt: "Mini Todo empty list" },
    {
      id: 2,
      pic: todoTaskExamplesMini,
      alt: "Mini Todo list with example tasks",
    },
    { id: 3, pic: todoDatabaseMini, alt: "Mini Todo database" },
    {
      id: 4,
      pic: todoOnlyActiveMini,
      alt: "Mini only active tasks on todo list",
    },
    {
      id: 5,
      pic: todoAllTasksDoneMini,
      alt: "Mini marked all tasks as done on todo list",
    },
  ],
  images: [
    {
      original: todoEmptyList,
      thumbnail: todoEmptyListMini,
    },
    {
      original: todoTaskExamples,
      thumbnail: todoTaskExamplesMini,
    },
    {
      original: todoDatabase,
      thumbnail: todoDatabaseMini,
    },
    {
      original: todoOnlyActive,
      thumbnail: todoOnlyActiveMini,
    },
    {
      original: todoAllTasksDone,
      thumbnail: todoAllTasksDoneMini,
    },
  ],
};
