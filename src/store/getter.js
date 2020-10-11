const getters = {
  getcount: (state, getters) => {
    console.log(getters)
    return state.count
  }
}

export default getters
