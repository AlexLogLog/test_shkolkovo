import { createStoreon } from 'storeon'


export function user(store) {
  store.on('@init', () => ({
    user: {
      username: '', password: ''
    }
  }))
  store.on('user/info', ({ user }, info) => {
    return { user: info }
  })
}

export function info(store) {
  store.on('@init', () => ({
    info: { 
      id: '', username: '', password: ''
     }
  }))
  store.on('info/load', ({ info }, newInfo) => {
    return { info: newInfo }
  })
}



export function loginOn(store) {
  store.on('@init', () => ({
    loginOn: false
  }))
  store.on('login/on', ({ loginOn }) => ({ loginOn: true })
  )
  store.on('login/end', ({ loginOn }) => ({ loginOn: false })
  )
}

export function pageNum(store) {
  store.on('@init', () => ({
    pageNum: 0
  }))
  store.on('page/num', ({ pageNum }, info) => {
    return { pageNum: info }
  })
}

export const store = createStoreon([user, loginOn, info, pageNum])
