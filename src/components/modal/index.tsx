import React from 'react'
import PropTypes from 'prop-types'
import Portal from '../portal'
import { CSSTransition } from 'react-transition-group'
import './index.scss'
import styles from './index.module.scss'


class Modal extends React.PureComponent {
  // 类型校验
  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    onClose: PropTypes.func,
    confirm: PropTypes.func,
    closeTxt: PropTypes.string,
    confTxt: PropTypes.string
  }

  // 默认值
  static defaultProps = {
    closeTxt: '取消',
    confTxt: '确定',
    title: '提示信息'
  }

  constructor(props: any) {
    super(props)
    this.confirm = this.confirm.bind(this)
    this.maskClick = this.maskClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      visible: false
    }
  }

  // 首次渲染使用父组件的状态更新modal中的visible状态，只调用一次
  componentDidMount() {
    const {visible}: any = this.props
    this.setState({
      visible: visible
    })
  }

  componentWillReceiveProps(props: { visible: any }) {
    if (props.visible) {
      this.setState({
        visible: props.visible
      })
    }
  }

  // shouldComponentUpdate(nextProps, nextState) { // 只有更新才重新渲染，提高性能
  //   console.log(nextProps, nextState)
  //   if (nextProps.content !== this.props.content) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // 点击取消更新modal中的visible状态
  closeModal() {
    const { onClose }: any = this.props
    onClose && onClose()
    this.setState({
      visible: false
    })
  }

  confirm() {
    const { confirm }: any = this.props
    confirm && confirm()
    this.setState({
      visible: false
    })
  }

  maskClick() {
    this.setState({ visible: false })
  }

  render() {
    // 通过父组件传递的visible控制显影
    const { visible }: any = this.state
    const { title, children, closeTxt, confTxt }: any = this.props
    return (
      <Portal>
        <CSSTransition
          in={visible}
          classNames="modal"
          timeout={300}
          unmountOnExit
        >
          <div className={styles.modal}>
            <div className={styles.modalTitle}>{title}</div>
            <div className={styles.modalContent}>{children}</div>
            <div className={styles.modalOperator}>
              <button
                className={styles.modalOperatorClose}
                onClick={this.closeModal}
              >
                {closeTxt}
              </button>
              <button
                onClick={this.confirm}
                className={styles.modalOperatorConfirm}
              >
                {confTxt}
              </button>
            </div>
          </div>
        </CSSTransition>
        {
          visible ? <div onClick={this.maskClick} className={styles.mask}></div> : null
        }
      </Portal>
    )
  }
}

export default Modal