/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ali Asgar",
  title: "Hi all, I'm Ali Asgar",
  subTitle:
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/17Ejy_tFBXUUzgVqruO2GKgjJ6vdACW2u/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amsaif52",
  linkedin: "https://www.linkedin.com/in/aliasgarsaifmerchant/",
  gmail: "am52saif@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase/ AWS/ AZURE")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ios",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lighthouse Labs",
      logo: require("./assets/images/lighthouse_labs.png"),
      subHeader: "Full Time Immersive Bootcamp, Web Development",
      duration: ""
    },
    {
      schoolName: "King's College London",
      logo: require("./assets/images/kings.jpeg"),
      subHeader: "Master of Science in Robotics",
      duration: ""
    },
    {
      schoolName: "American University in Dubai",
      logo: require("./assets/images/american.jpeg"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Developer",
      company: "Walmart Labs",
      companylogo: require("./assets/images/walmart_logo.jpeg"),
      date: "June 2022 – Present",
      desc: [
        "I created comprehensive architectural diagrams for both front-end and back-end pipelines to ensure seamless integration and scalability across systems. Additionally, I managed the entire project lifecycle, including testing, debugging, technical analysis, design, and implementation of robust solutions to deliver a high-performing and scalable product.",
        "Technologies used: REACT, REACT HOOKS, REDUX, NODEJS, EXPRESS, JIRA, GIT, GITHUB, SLACK, AWS, DOCKER, KUBERNETES, JENKINS, JIRA, CONFLUENCE, POSTMAN, NEW RELIC, SENTRY, JEST, ENZYME, CYPRESS, SONARQUBE, CIRCLECI, NEST JS, SWAGGER, GRAPHQL, AZURE, GCP"
      ]
    },
    {
      role: "Software Developer",
      company: "Accedo Tv",
      companylogo: require("./assets/images/accedo_tv_logo.jpeg"),
      date: "Dec 2021 – Dec 2023",
      desc: [
        "I developed and deployed an application that enabled SiriusXM users to access audio-on-demand (AOD) and video-on-demand (VOD) on Comcast, Samsung, LG, and Vizio platforms. Throughout the project, I managed the entire lifecycle, including testing, debugging, technical analysis, design, and implementation of robust solutions. I also actively participated in code reviews to ensure high standards of code quality, security, and performance were maintained.",
        "Technologies used: ES6, JS, HTML, CSS, SASS, REACT, REDUX, NODEJS, PYTHON, JIRA, GIT, GITHUB, SLACK, RXJS, AWS"
      ]
    },
    {
      role: "Software Developer",
      company: "Atimi Software",
      companylogo: require("./assets/images/atmi_logo.jpeg"),
      date: "June 2021 – April 2022",
      desc: [
        "I built a web application that enabled patients to submit, purchase, and arrange for prescription deliveries online, overseeing the full project lifecycle, including testing, debugging, technical analysis, design, and coding. I also assisted the Project Manager with implementation plans and actively participated in code reviews to ensure quality and adherence to best practices.",
        "Technologies used: REDUX, SASS, CSS3, REACT, HTML5, PYTHON, NODEJS, ES6, AWS, BIGCOMMERCE PAYMENT GATEWAY, JIRA, GIT, GITHUB, BITBUCKET, SLACK, BIGCOMMERCE WEBHOOKS"
      ]
    },
    {
      role: "Software Developer",
      company: "Stagwell Technologies",
      companylogo: require("./assets/images/stagwell_logo.png"),
      date: "September 2017 – June 2021",
      desc: [
        "I planned, developed, tested, deployed, and maintained web applications, ensuring efficient troubleshooting and remediation. I worked both independently and collaboratively, translating client requirements into comprehensive application designs and system specifications. Throughout each project, I adhered to established policies and procedures, consistently meeting quality standards.",
        "Technologies used: Vanilla Javascript, SASS, CSS3, JQuery, HTML5, PYTHON, NODEJS, BIGCOMMERCE PAYMENT GATEWAY, JIRA, GIT, GITHUB, SLACK, BIGCOMMERCE WEBHOOKS, BIGCOMMERCE API, BIGCOMMERCE STENCIL"
      ]
    },
    {
      role: "Front-End Developer",
      company: "West Corporation",
      companylogo: require("./assets/images/west_logo.png"),
      date: "Jan 2017 – August 2017",
      desc: [
        "Migrating websites from old CMS System to New CMS System. Ensuring websites adhere to all consumable. Re-design according to client specification.",
        "Technologies used: Vanilla Javascript, CSS3, JQuery, HTML5"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS WORKED ON",
  projects: [
    {
      image: require("./assets/images/gillette_logo.png"),
      projectName: "GILLETTE",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://gillette.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/art_of_shaving_logo.jpeg"),
      projectName: "THE ART OF SHAVING",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://theartofshaving.com/"
        }
      ]
    },
    {
      image: require("./assets/images/braun_logo.svg"),
      projectName: "BRAUN",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://us.braun.com/"
        }
      ]
    },
    {
      image: require("./assets/images/oldspice-logo.svg"),
      projectName: "OLD SPICE",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://oldspice.com/"
        }
      ]
    },
    {
      image: require("./assets/images/venus_logo.png"),
      projectName: "VENUS",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gillettevenus.com/"
        }
      ]
    },
    {
      image: require("./assets/images/crest-white-logo.png"),
      projectName: "CREST WHITESTRIPS",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crestwhitesmile.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ec30_logo.png"),
      projectName: "EC30 CLEAN",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ec30clean.com/"
        }
      ]
    },
    {
      image: require("./assets/images/joy_glee_logo.svg"),
      projectName: "JOY AND GLEE",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://joyandglee.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-437-989-5353",
  email_address: "am52saif@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
