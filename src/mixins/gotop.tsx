import React from 'react'

export default (WrappendComponent: any) => {
  class Temp extends React.PureComponent {
    componentDidMount() {
      console.log('高阶函数组件')
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }

    render() {
      return <WrappendComponent {...this.props} />
    }
  }

  return Temp
}