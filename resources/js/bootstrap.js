import Vue from 'vue'
import { v4 as uuid } from 'uuid'

// Importing Core
import Core from '@core'

import './service-worker/register'


// Binding few libraries for their global presence
window.Vue = Vue
window.uuid = uuid

Vue.use(Core)

// Setting up Vue Router
import './router/setup'

Vue.config.productionTip = false
// Vue.config.silent = true
Vue.config.devtools = true
