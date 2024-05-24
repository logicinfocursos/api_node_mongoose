const { get } = require('mongoose')
const { Service: ServiceModel } = require('../models/Service')

const serviceController = {

    create: async(req, res)=>{
        try{
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const response = await ServiceModel.create(service)
            res.status(201).send({ response, msg: "Service created successfully" })

        }catch(error){
            res.status(400).send(error)
        }
    },
    getAll: async(req, res)=>{
        try{
            const response = await ServiceModel.find()
            res.status(200).send(response)
        }catch(error){
            res.status(400).send(error) 
        }
    }, 
    get: async(req, res)=>{
        try{
            const id = req.params.id
            const service = await ServiceModel.findById(id)

          if(!service){
              res.status(404).json({msg: "Service not found"})
              return
            }

           res.json(service)

        }catch(error){
            res.status(400).send(error)
        }
    },
    update: async(req, res)=>{
        try{
            const id = req.params.id
            const service = await ServiceModel.findByIdAndUpdate(id, req.body   , {new: true})
        }catch(error){
            res.status(400).send(error)
        }
    },
    delete: async(req, res)=>{
        try{
            const id = req.params.id
            const service = await ServiceModel.findByIdAndDelete(id)
            if(!service){
                res.status(404).json({msg: "Service not found"})
                return
            }
            res.json({msg: "Service deleted successfully"})
        }catch(error){
            res.status(400).send(error)
        }
    }
}

module.exports = serviceController