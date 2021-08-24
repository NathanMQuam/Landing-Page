import { reactive } from 'vue'
import { Project } from './models/projectModel.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  projects: [new Project({ projectName: 'Project 1', id: '1' }), new Project({ projectName: 'Project 2', id: '2' }), new Project({ isFeatured: false, id: '3' })]
})
