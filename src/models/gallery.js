
import * as galleryServies from '../services/gallery'

export default {

  namespace: 'gallery',

  state: {
    data: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/') {
          dispatch({
            type: 'fetchRemote',
          })
        }
      })
    },
  },

  effects: {
    * fetchRemote({ payload }, { call, put }) {
      const { data } = yield call(galleryServies.query)
      if (data) {
        yield put({
          type: 'fetch',
          data: data.data,
        })
      }
    },
    * rate({ payload: { id, value } }, { call, put }) {
      const { data } = yield call(galleryServies.rate, id, value)
      yield put({
        type: 'upRate',
        data: data.data,
      })
    },
  },

  reducers: {
    fetch(state, payload) {
      return { ...state, ...payload };
    },
    upRate(state, payload) {
      return { ...state, ...payload };
    },
  },

}
