const uuid = require('uuid')
const path = require('path')

class projectController {
    async create(req, res) {
        try{
            const { title, description } = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const project = await Project.create({title, description, img: fileName})
            
            return res.json(project)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new projectController()