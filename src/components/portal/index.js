import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.PureComponent {
  constructor (props) {
    super(props)
    // 初始化创建渲染的父元素并添加到body下
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }

  render () {
    const { children } = this.props
    return ReactDOM.createPortal(
      children,
      this.node
    )
  }
}