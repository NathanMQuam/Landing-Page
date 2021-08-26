export class Skill {
  constructor(data = {}) {
    this.id = data.id || data._id || 'ID-' + Math.random() * 1000000
    this.name = data.name || 'MISSING skill name'
    this.image = data.image || ''
  }
}
