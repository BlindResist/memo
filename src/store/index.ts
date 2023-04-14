import { createStore } from 'vuex'
import { actions } from '@/store/actions'
import { getters } from '@/store/getters'
import { mutations } from '@/store/mutations'
import { initialState as state } from '@/store/state'

export default createStore({ state, actions, mutations, getters })
