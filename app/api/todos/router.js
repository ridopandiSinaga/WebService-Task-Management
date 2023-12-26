const { Router } = require('express')
const { getAll, getSearch, create, getOne, update, destroy } = require('./controller')
const { validateCreate, validateUpdate, validateOne, validateDelete } = require('./validation')

const router = Router()

router.get(`/`, getAll)
router.get('/search?:keywords', getSearch)
router.post(`/`, validateCreate, create)
router.get(`/:id`, validateOne, getOne)
router.put(`/:id`, validateUpdate, update)
router.delete(`/:id`, validateDelete, destroy)

module.exports = router