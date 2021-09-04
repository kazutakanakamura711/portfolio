export const state = (() => {
  return {
    isSkew: true,
  }
})

export const mutations = {
  switchSkew(state) {
    state.isSkew = !state.isSkew
    console.log('fdfsf')
  }
}