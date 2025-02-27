const {Project} = require('../models/models')

class ProjectController {
  async create(req, res) {
    const response = await Project.create(req.body);
    return res.json(response)
  }

  async update(req, res) {
    const { id } = req.params;
    const response = await Project.update(req.body, { where: { id } });
    return res.json(response);
  }

  async delete(req, res) {
    const { id } = req.params;
    const project = await Project.findOne({ where: { id } });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден!' });
    }
    await Project.destroy({ where: { id } });
    return res.json({ message: 'Проект успешно удален!' });
  }
  async getList(req, res) {
    const response = await Project.findAll();
    return res.json(response)
  }
}

module.exports = new ProjectController();