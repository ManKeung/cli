import React from 'react'
import { connect } from 'react-redux'
import { action } from '../../redux/home'
import { withRouter, Prompt } from 'react-router-dom'
import styles from './scss/index.module.scss'
import './scss/index.scss'

import { dateFormat } from '../../filters'
// import axios from '../../axios'
import Modal from '../../components/modal'

const mapState = (state: { getIn: (arg0: string[]) => any }) => ({
  name: state.getIn(['home', 'name'])
})

const mapDispatch = (dispatch: (arg0: { type: string; name?: string }) => void) => ({
  changeHome(v: string) {
    dispatch(action.changeHome(v))
  },
  homeInit() {
    dispatch(action.init())
  }
})

// @withRouter
// @connect(mapState, mapDispatch)
class Page extends React.PureComponent<any, any> {
  confirm: ((...args: any[]) => any) | null | undefined
  closeModal: ((...args: any[]) => any) | null | undefined
  constructor(props: any) {
    super(props)
    this.state = {
      msg: 'home',
      visible: false,
      title: '',
      content: '1111',
      pathname: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    // axios.ajax({
    //   url: '/getdata/b'
    // }).then(res => {
    //   console.log(res)
    // })

    const { homeInit }: any = this.props
    homeInit()
  }

  handleModel = () => {
    this.setState((state: any, props: any) => {
      return ({
        visible: true
      })
    })
  }

  handleGo404 = () => {
    this.props.history.push({
      pathname: '/404'
    })
    // console.log(this.props)
    // this.props.history.push({pathname: '/404', search: '?test=1'})
    // this.props.history.replace({pathname: '/404'})
  }

  render() {
    const { msg, visible, content } = this.state
    const { name } = this.props
    return (
      <div className="home">
        {msg} --- {name}
        <p>{dateFormat(new Date())}</p>
        <button className={styles.button}>button</button>
        <button className={styles.button} onClick={this.handleModel}>弹框</button>
        <button className={`${styles.button} nopage`} onClick={this.handleGo404}>go 404</button>
        <Prompt
          when={true}
          message={location => {
            this.setState({
              visible: true,
              pathname: location.pathname,
              content: `Are you sure you wangt to go ${location.pathname}`
            })
            return false
          }}
        />
        {/* UI */}
        <Modal
          visible={visible}
          confirm={this.confirm}
          onClose={this.closeModal}
        >
          {/* {
          <ul>
            <li>hahah</li>
          </ul>
        } */}
          {content}
        </Modal>
        {/* UI */}
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(withRouter(Page))
