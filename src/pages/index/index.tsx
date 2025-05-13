import {View, Image} from '@tarojs/components'
import GlobalFooter from '../../Components/GlobalFooter';
import {AtButton} from 'taro-ui'
import headerBg from "../../assets/headerBg.png"

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import Taro from '@tarojs/taro';

//react的函数式组件，以后都是这种开发形式
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article_h1 title">
        MBTI 性格测试
      </View>
      <View className="at-article_h1 subtitle">
        只需2分钟，就能非常准确地描述出你是什么人格以及你的性格特点
      </View>
      <AtButton type='primary'
                circle
                className="enterBtn"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/doQuestion/index",
                  });
                }}
      >开始测试</AtButton>
      <Image className="headerBg" src={headerBg}/>
      <GlobalFooter />
    </View>
  );
};
