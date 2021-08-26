import { reactive } from 'vue'
import { Project } from './models/projectModel.js'
import { Skill } from './models/SkillModel.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  activeProject: new Project(),
  projects: [new Project({
    projectName: 'Project 1',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://picsum.photos/id/0/800/600',
    images: ['https://picsum.photos/id/1/400/300', 'https://picsum.photos/id/10/400/300'],
    shortDescription: 'My first placeholder project.',
    description: 'This is the long description of the first placeholder project. Lorem ipsum.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript']
  }), new Project({
    projectName: 'Project 2',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://picsum.photos/id/1002/800/600',
    images: ['https://picsum.photos/id/1003/400/300', 'https://picsum.photos/id/1004/400/300'],
    shortDescription: 'The second placeholder project',
    description: 'This is the long description of the second placeholder project.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Vue 3']
  }), new Project({
    projectName: 'Project 3',
    isFeatured: false,
    type: 'Web Server',
    heroImage: 'https://picsum.photos/id/1033/800/600',
    images: ['https://picsum.photos/id/1040/400/300', 'https://picsum.photos/id/1042/400/300'],
    shortDescription: 'Just a placeholder for a web server project',
    description: 'The long description of the web server project',
    skillsUsed: ['C#', 'SQL']
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
