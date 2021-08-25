export class Project {
  constructor(data = {}) {
    this.id = data.id || data._id || 'MISSING id-' + Math.random() * 1000000
    this.projectName = data.projectName || 'MISSING Name'
    this.isFeatured = data.isFeatured || false
    this.type = data.type || 'MISSING Type'
    this.heroImage = data.heroImage || 'https://picsum.photos/500'
    this.images = data.images || ['https://picsum.photos/400', 'https://picsum.photos/800', 'https://picsum.photos/200']
    this.shortDescription = data.shortDescription || 'MISSING Short Description'
    this.description = data.description || 'MISSING Long Description'
    this.skillsUsed = data.skillsUsed || ['MISSING', 'Skills Used', 'JavaScript']
    this.projectLink = data.projectLink || '/#/'
  }
}
