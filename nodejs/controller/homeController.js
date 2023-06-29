import db from '../models/index'


let getCRUD = (req, res) => {
    return new Promise(async (resolve, reject) => {
        let data = await db.Users.findAll();
        resolve(data)
    }).then((data) => {res.json({message: data})})
};

let editCRUD = (req, res) => {
    return new Promise(async(resolve, reject) => {
        let data = await db.Users.findOne(
            {
                where: {
                    id: req.params.id
                }
            }
        ); resolve(data)
    }).then(response => res.json(response))
}


let addCRUD = (req, res) => {
    return new Promise(async (resolve, reject) => {
        await db.Users.create(req.body);
        resolve()
    }).then(() => {res.json('Create Successfully')})
}


let deleteCRUD = (req, res) => {

    return new Promise (async (resolve, reject) => {
        await db.Users.destroy({
            where: {
                id: req.params.id
            }
        })

        resolve()
    }).then(() => {
        return new Promise(async(resolve, reject) => {
            let data = await db.Users.findAll();
            resolve(data)
        })
    }).then((data) => {res.json({data : data, message: 'Delete Successfully'})})

}


let updateCRUD = (req, res) => {
    return new Promise(async (resolve, reject) => {
        await db.Users.update({
            name: req.body.name,
            age: req.body.age,
            company: req.body.company,
        }, {
            where: {id : req.body.id}
        }); resolve()
    }).then(() => {res.json('Update Successfully')})
}



export default {
    getCRUD: getCRUD,
    addCRUD: addCRUD,
    updateCRUD: updateCRUD,
    editCRUD: editCRUD,
    deleteCRUD: deleteCRUD,
}