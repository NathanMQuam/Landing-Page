import { reactive } from 'vue'
import { Project } from './models/projectModel.js'
import { Skill } from './models/SkillModel.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  activeProject: new Project(),
  projects: [new Project({
    id: 'prompetition',
    projectName: 'Prompetition',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Prompetition-Front-Page.jpg',
    images: [''],
    shortDescription: 'My capstone project during my time at Boise CodeWorks. It\'s a competitive creative writing web application.',
    description: `Prompetition is a competitive creative writing web application. Every day there is one writing prompt that everyone can see, and ever logged in user can submit their written work once. During that day, a user can only see their own submission. The next day everyone can vote on yesterday's entries for the one they like the most. At the end of that day, a winner is permanently decided, and this is displayed on their account profile.\n
    At any point afterwards, users can still enter submissions to previous writing prompts, but these post-contest submissions are only for artistic writing, there will not be a new winner. But, users can still "like" these post-contest submissions, and the highest scoring submission is put on display underneath the contest-period winner.\n
    There is also an alternative head-to-head mode where two users are put together and are given the same writing prompt, and a short period of time to write. Once this time is up, the two submissions are voted on by other users.`,
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Vue 3', 'Mongo DB', 'Node JS', 'OAuth'],
    projectLink: 'https://prompetition-1.herokuapp.com/',
    sourceLink: 'https://github.com/NathanMQuam/Prompetition'
  }), new Project({
    id: 'bug-log',
    projectName: 'Bug Log',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Bug-Log-Hero.jpg',
    images: ['https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Bug-Log.jpg', 'https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Open-Bug.jpg', 'https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/My-Bug.jpg'],
    shortDescription: 'A standard web application for tracking bugs.',
    description: 'Open a bug and give it a title and description to start tracking. Comment on a bug to note suggestions or it\'s current status. Close bugs to mark them as resolved.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Vue 3', 'Mongo DB', 'Node JS', 'OAuth'],
    sourceLink: 'https://github.com/NathanMQuam/Bug-Log'
  }), new Project({
    id: 'step-ramp-tool',
    projectName: 'Step Ramp Tool',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/StepRamp.png',
    images: ['https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/StepRamp.png'],
    shortDescription: 'A visual tool for estimating which ramp model would be best for your truck\'s bed height.',
    description: 'A visual tool for estimating which ramp model would be best for your truck\'s bed height. Simply enter in your bed height, and the tool recommends one of the two available models. You can then preview what the angle or slope of the ramp will be for your bed height on level ground. You can also toggle the preview between the two models to compare them.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'HTML 5 Canvas'],
    sourceLink: 'https://github.com/NathanMQuam/StepRampTool',
    projectLink: 'https://nathanmquam.github.io/StepRampTool/'
  }), new Project({
    id: 'gregs-vue-list',
    projectName: 'GregsList',
    isFeatured: false,
    type: 'Web Application',
    heroImage: 'https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/GregsList-Home.jpg',
    images: ['https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/GregsList-Cars.jpg'],
    shortDescription: 'One of my applications I made at CodeWorks for learning how to GET, POST, PUT, and DELETE from a REST-compliant API.',
    description: 'This was a graded application made to loosely resemble CraigsList. Utilizing GET, POST, PUT, and DELETE with a RESTful API, the application allows users to create listings for cars, jobs, or houses, and to edit or bid on these listings.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Vue 3', 'Mongo DB', 'Node JS'],
    sourceLink: 'https://github.com/NathanMQuam/gregs-vue-list',
    projectLink: 'https://nathanmquam.github.io/gregs-vue-list/#/'
  })],
  skills: [
    new Skill({ name: 'HTML 5', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' }),
    new Skill({ name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' }),
    new Skill({ name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }),
    new Skill({ name: 'Vue 3', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' }),
    new Skill({ name: 'Node JS', image: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg' }),
    new Skill({ name: 'MongoDB', image: 'https://webimages.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png' }),
    new Skill({ name: 'C#', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg' }),
    new Skill({ name: 'SQL', image: '' }),
    new Skill({ name: 'Bootstrap', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' })
  ]
})
