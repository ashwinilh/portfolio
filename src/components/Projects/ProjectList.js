// App Images
import resumator from '../../Assets/appImages/resumator.png';
import cars2go from '../../Assets/appImages/cars2go.png';
import carbonFootPrint from '../../Assets/appImages/carbonFootPrint.png';
import noteTaker from '../../Assets/appImages/noteTaker.png';
import weatherDashboard from '../../Assets/appImages/weatherDashboard.png';
import javascriptquiz from '../../Assets/appImages/JavascriptQuiz.png';


export const projects = [
  {
    id: "ashwinilh/resumator",
    title: "Resumator (MERN)",
    description:
      "This is simple resume app where user can login create, update or delete their fully formatted resume using different templates.",
      imageUrl: resumator,
    appUrl: "https://ashwiniresumator.herokuapp.com",
    technology: "React, MUI, mongoDB, React-router, Redux, graphQL",
    details: "This is a MERN application. The Resumator aides users in creating, updating, maintaining, and deleting a fully formatted resume using several different templates. After either logging in or creating an account, the website allows users to input a variety of different information, such as contact information, skills, work experience, education, projects, and languages/awards/other. Once the information is entered into the system, a fully formatted resume will be formed for users to look at.",
  },
  
  {
    id: "ashwinilh/Cars2Go",
    title: "Cars2go (Full Stack)",
    description:
      "This is simple Full stack app. Where the owner of a used car lot can add cars to available inventory so that customers can purchase newest car from the lot",
      imageUrl: cars2go,
    appUrl: "https://safe-river-61972.herokuapp.com/",
    technology: "HTML, CSS, Javascript, Handelbars, Heroku, MYSQL, Expressjs, Nodejs, Sequelize ", 
    details: "Cars2Go website enables customers to browse through Cars2Go Store inventory, the website displays all the cars with basic information like make, model, milage, price and condition. Cars2Go website also enables employees to login and add, remove or update to the existing inventory",
  },
  {
    id: "Ashwini/carbon-foot-print-emission",
    title: "carbon-foot-print-emission (FrontEnd)",
    description:
      "Employee directory application created using react where user can view all employee data, search employee as well as sort employee by name.",
      imageUrl: carbonFootPrint,
    appUrl: "https://ashwinilh.github.io/carbonfootprint/",
    technology: "HTML, CSS, and Javascript, Bulma, Climatiq API, and Carbon Interface API",
    details: "Carbon Footprint By Region is Front end app, where you can calculate carbon foot print for activities like electricity usage, clothing and foot wear.Collaborated with team to identify the API’s for calculating the carbon foot print, use of CSS framework, making the API call with right tokens and inputs and hosted the app on Heroku."
  },
  
  {
    id: "ashwinilh/Note_taker",
    title: "Note Taker (Full Stack)",
    description:
      "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
      imageUrl: noteTaker ,
    appUrl: "https://secure-falls-08215.herokuapp.com/",
    technology: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
    details: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file."
  },
  {
    id: "ashwinilh/weather-dashboard",
    title: "Weather Dashboard (FrontEnd)",
    description:
      "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
      imageUrl: weatherDashboard,
    appUrl: "https://ashwinilh.github.io/weather-dashboard/",
    technology: "Javascript, JQuery, Bootstrap, HTML, CSS",
    details: "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city. This application is built using OpenWeather API to fetch weather data of searched city."
  },
  {
    id: "Ashwini/code-quiz",
    title: "Code Quiz (Front End)",
    description:
      "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
    imageUrl: javascriptquiz,
    appUrl: "https://ashwinilh.github.io/javascriptquiz/",
    technology: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
    details: "A timer-based quiz application having multiple choice questions that stores high scores of multiple users. Answering incorrectly results in penality of time."
  },
  
];