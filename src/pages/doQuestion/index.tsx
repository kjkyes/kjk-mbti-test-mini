import {View} from '@tarojs/components'
import GlobalFooter from '../../Components/GlobalFooter';
import questions from "../../data/questions.json";
import {AtButton, AtRadio} from 'taro-ui';
// import {AtButton} from 'taro-ui'
// import headerBg from "../../assets/headerBg.png"

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import {useEffect, useState} from "react";
import './index.scss'
import Taro from '@tarojs/taro';

//react的函数式组件，以后都是这种开发形式
export default () => {

  //当前题目序号（从1开始）
  const [current, setCurrent] = useState<number>(1)//定义一个状态，当该状态值改变后页面会重新渲染
  //当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const questionOptions: any = currentQuestion.options.map((option) => {
    return {label: "${option.key}. ${option.value}", value: option.key};
  });
  //当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  //回答列表
  const [answerList] = useState<string[]>([]);

  //序号变化时，切换当前题目和当前回答
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current])//current发生改变该函数就执行

  return (
    <View className="doQuestionPage">
      {/*{ JSON.stringify(answerList)}*/}
      <View className="at-article_h2 title">{current}、{currentQuestion.title}</View>
      <View className="options-wrapper">
        <AtRadio options={questionOptions}
                 value={currentAnswer}
                 onClick={(value) => {
                   setCurrentAnswer(value);
                   //记录回答
                   answerList[current - 1] = value
                 }}/>
      </View>
      {current < questions.length && (
        <AtButton type='primary'
                  circle
                  className="controlBtn"
                  disabled={!currentAnswer}
                  onClick={() => setCurrent(current + 1)}
        >下一题</AtButton>
      )}
      {current == questions.length && (
        <AtButton type='primary'
                  circle
                  className="controlBtn"
                  disabled={!currentAnswer}
                  onClick={() => {
                    // 传递答案
                    Taro.setStorageSync("answerList", answerList);
                    // 跳转到结果页面
                    Taro.navigateTo({
                      url: "/pages/result/index",
                    });
                  }}>查看结果</AtButton>
      )}
      {current > 1 && (
        <AtButton circle className="controlBtn" onClick={() => setCurrent(current - 1)}>上一题</AtButton>
      )}
      <GlobalFooter/>
    </View>
  );
};
