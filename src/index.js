import { Router } from '@vaadin/router'
import { ROUTING_TABLE } from 'src/routes'

const output = document.querySelector('output')
const router = new Router(output)
router.setRoutes(ROUTING_TABLE)

export { router }