import {Component, PropsWithChildren} from 'react';
import 'taro-ui/dist/style/index.scss' //引入组件样式-方式一 全局引入(js中)：在入口文件中引入taro-ui所有的样式
import './app.scss';

class App extends Component<PropsWithChildren> {

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
