import VConsole from 'vconsole'

let vConsole = null

if (process.env.VUE_APP_ENV !== 'production环境') {
  vConsole = new VConsole()
}

export default vConsole
