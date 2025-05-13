import {View} from '@tarojs/components'
// import {AtButton} from 'taro-ui'
// import headerBg from "../../assets/headerBg.png"

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

//react的函数式组件，以后都是这种开发形式
export default () => {
  return (
    <View className='index'>
      <View className='globalFooter'>
        作者：抽空sr下怀民
      </View>
    </View>
  );
};
