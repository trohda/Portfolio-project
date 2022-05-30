import carWashLoginMini from "../img/ProjectsGallery/CarWash/BestcarwashLoginMini.png";
import carWashMainMini from "../img/ProjectsGallery/CarWash/BestcarwashMainMini.png";

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
        application will look like, what it will contain and how it will work.
      </p>
    </>
  ),
  bigGallery: [],
  smallGallery: [
    { id: 1, pic: carWashMainMini, alt: "Mini best car wash main page" },
    { id: 2, pic: carWashLoginMini, alt: "Mini best car wash login page" },
  ],
};

export default carWash;
