const { Model } = require('../Schema')

const newEmployees = async (req, res, next) => {
    try {


        let data = await Model.create(req.body)
        console.log(data)

        res.status(200).send(data)

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
        console.error(error)
    }
}
const allEmployees = async (req, res, next) => {
    try {


        let employees = await Model.find()
        // console.log(data)

        res.status(200).send(employees)

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
        console.error(error)
    }
}

const employee = async (req, res, next) => {
    try {
        let employee = await Model.findById(req.params.id)

        res.status(200).send(employee)
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
        console.error(error)
    }
}

module.exports = { newEmployees, allEmployees, employee }