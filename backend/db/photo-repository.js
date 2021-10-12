const {Photo} = require('./models')


async function update(details) {
    const id = details.id
    delete details.id
    await Photo.update(
        details,
        {
            where: {id},
            returning: true,
            plain: true
        }
    )
    return id
}

async function one(id) {
    return await Photo.findByPk(id)
}
module.exports = {
    update,
    one
}
