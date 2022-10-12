import * as ProductAPI from '@api/product'
import moment from 'moment';

const product = {
    namespaced: true,
    state: {
        product: {},
        about: "",
        supportTips: "",
        updateTips: "",
        isDownloaded: false,
    },
    mutations: {
        SET: (state, data = {}) => {
            data.objForEach((value, key) => state[key] = value)
        },
        RESET: (state) => {
            state.product = {}
            state.about = ""
            state.supportTips = ""
            state.updateTips = ""
            state.isDownloaded = false
        }
    },
    actions: {
        async Get({ commit }) {
            try {
                commit('RESET')
                const response = await ProductAPI.getProduct().catch(e => { throw e })
                commit('SET', response)
            } catch (error) {
                commit('RESET')
                throw error
            }
        },
        async CheckLicense({ commit }, data) {
            try {
                return await ProductAPI.checkLicense(data).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },
        async PostSupport({ commit }, data) {
            try {
                return await ProductAPI.postSupport(data).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },
        async DownloadApp({ commit }) {
            try {
                const response = await ProductAPI.downloadApp().catch(e => { throw e })
                commit('SET', { isDownloaded: true })
                return response
            } catch (error) {
                commit('SET', { isDownloaded: false })
                throw error
            }
        },
        async UpdateApp({ commit }, data) {
            try {
                return await ProductAPI.updateApp(data).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },
    },
    getters: {
        product: state => state.product,
        about: state => state.about,
        supportTips: state => state.supportTips,
        updateTips: state => state.updateTips,
        isDownloaded: state => state.isDownloaded,
        isSupportValid: state => state.product.dateOfSupportExpiry && moment()
            .format('YYYY-MM-DD') <= state.product.dateOfSupportExpiry
    }
}
export default product
