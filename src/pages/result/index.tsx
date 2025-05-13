import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import Taro from '@tarojs/taro';
import GlobalFooter from '../../Components/GlobalFooter';
import headerBg from "../../assets/headerBg.png"
import questions from "../../data/questions.json"
import question_results from "../../data/question_results.json"
// import "taro-ui/dist/style/components/button.scss" // 按需引入
import {getBestQuestionResult} from "../../utils/bizUtils";
import './index.scss'

//react的函数式组件，以后都是这种开发形式
export default () => {
  //获取答案
  const answerList = Taro.getStorageSync("answerList");
  if(!answerList || answerList.length < 1){
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  //获取测试结果
  const result = getBestQuestionResult(answerList,questions,question_results);

  return (
    <View className="resultPage">
      <View className="at-article_h1 title">
        {result.resultName}
      </View>
      <View className="at-article_h1 subtitle">
        {result.resultDesc}
      </View>
      <AtButton type='primary'
                circle
                className="enterBtn"
                onClick={() => {
                  Taro.reLaunch({
                    url: "/pages/index/index",
                  });
                }}
      >返回主页</AtButton>
      <Image className="headerBg" src={headerBg}/>
      <GlobalFooter/>
    </View>
  );
};
