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

const carWash = {
  header: "Car Wash Project",
  gitHubLink: "https://github.com/infoshareacademy/-jfddr6-team-kanuni-team",
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
        application will look like, what it will contain and how it will work.{" "}
        <br />
        My job was to create logic which allow you to create account, log into
        it, reset password, make an appointment. To realize this create, login
        and reset features a used Firebase API. UI which allows to make an
        appointment uses react-day-picker library. Project has many challenges
        but also has made me a lot of pleasure during writing code and solving
        problems.
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
};

export default carWash;
