import { reactive } from 'vue'
import { Project } from './models/projectModel.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  projects: [new Project({
    projectName: 'Project 1',
    id: '1',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://picsum.photos/id/0/400/600',
    images: ['https://picsum.photos/id/1/200/300', 'https://picsum.photos/id/10/200/300'],
    shortDescription: 'My first placeholder project.',
    description: 'This is the long description of the first placeholder project. Lorem ipsum.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript']
  }), new Project({
    projectName: 'Project 2',
    id: '2',
    isFeatured: true,
    type: 'Web Application',
    heroImage: 'https://picsum.photos/id/1002/400/600',
    images: ['https://picsum.photos/id/1003/200/300', 'https://picsum.photos/id/1004/200/300'],
    shortDescription: 'The second placeholder project',
    description: 'This is the long description of the second placeholder project.',
    skillsUsed: ['HTML', 'CSS', 'JavaScript', 'Vue 3']
  }), new Project({
    projectName: 'Project 3',
    isFeatured: false,
    id: '3',
    type: 'Web Server',
    heroImage: 'https://picsum.photos/id/1033/400/600',
    images: ['https://picsum.photos/id/1040/200/300', 'https://picsum.photos/id/1042/200/300'],
    shortDescription: 'Just a placeholder for a web server project',
    description: 'The long description of the web server project',
    skillsUsed: ['C#', 'SQL']
  })]
})
