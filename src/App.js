import './App.css';
import React, { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['앙버터', '가나다라', '설날']);
  let [date, setDate] = useState(['2024-02-10','2024-02-10','2024-02-09']);
  let [count, setCount] = useState([0,1,3]);
  let [isOpen, setModal] = useState(false); // set어쩌구가 관습
  // let [currentTitleIndex, setIndex] = useState('');
  let [currentTitleIndex, setIndex] = useState(0);
  let [newText, setnewText] = useState('');
  let dateObj = new Date()
  let today = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();

  [1,2,3].map((num) => {
    return '123412341234';
  })

  return (
    <div className="App">
      <div className = 'nav'>
        <h4 style = {{fontSize: '18px'}}>hyeon's blog</h4>
      </div>
      {/* <span onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>
        가나다정렬
      </span>
      <div></div>
      <span onClick={() => {
        let copy = [...title];
        copy[0] = '세뱃돈';
        setTitle(copy);
      }}>
        버튼
      </span>
      <div className='list'>
        <h4>{title[0]} <span onClick={()=>{ setCount(++count) }}>👍</span> {count} </h4>
        <p>2월 9일 발행</p>
      </div> */}

      {
        title.map((one, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { 
                setModal(!isOpen);
                setIndex(i);
                // currentTitleIndex = title[i];
                // setIndex(currentTitleIndex);
              }}>
                {title[i]}

              <span onClick={(e)=>{ 
                e.stopPropagation(); 
                // span 태그 눌렀을 때 h4까지 즉, 상위html까지 클릭되는 이벤트 버블링을 막고 싶을 때 사용
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}>
                👍
              </span> {count[i]}
              <button onClick={(e)=>{
                e.stopPropagation();
                let copy = [...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>delete</button>
              </h4>
              <p>{date[i]} 발행</p>
            </div>
          )
        })
      }

      {/* 
        e는? 이벤트 객체! 
        여기서는 인풋 태그에서 발생하는 이벤트에 대한 상세 정보?를 확인할 수 있음
      */}
      <input onChange={(e) => {
        setnewText(e.target.value);
      }} />
      <button onClick={() => {
        if(newText) {
          console.log(newText);
          let copy = [...title];
          copy.unshift(newText);
          count.unshift(0);
          setTitle(copy);
          
          let copyDate = [...date];
          copyDate.unshift(today);
          setDate(copyDate);
        }
      }}>save</button>
      {
        isOpen ? <Modal date={date} title={title} currentTitleIndex={currentTitleIndex} setTitle={setTitle}/> : null
      }

      {
        <Modal2></Modal2>
      }
    </div>
  );
}

// const 변수로도 만들 수 있음
// const로 만드는 이유?? 에러날 때 빨리 확인할 수 있다.
const Modal = (props) => {

  return(
    <div className='modal'>
      <h4>{props.title[props.currentTitleIndex]}</h4>
      <p>{props.date[props.currentTitleIndex]}</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

// 컴포넌트 만드는 법
// 1. 함수 만들고 2. 리턴문 안에 html 코드 씀 3. 함수명쓰기
/*function Modal() {
  return(
    <div className='modal'>
      <h4>{ title[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
*/

// 컴포넌트 쓰면 좋은 경우
// 1. 반복적인 html 축약하기
// 2. 큰 페이지들??
// 3. 자주 변경되는 것들??

// function으로 컴포넌트 만들면 되는데 예전에는 class로 만들기도 했음
// 쓸 일은 없지만 옛날 코드 볼 줄은 알아야되니까
class Modal2 extends React.Component {
  // props는 constructor?에서 받아줌
  constructor(props){
    super(props);

    // class 컴포넌트에서 state 만들기
    this.state = {
      name : 'kim',
      age : 99
    }
  }
  render(){
    return(
      <div>hihihi {this.state.name} {this.state.age}
        <button onClick={()=>{
          this.setState({age: 31})
        }}>button</button>
      </div>
    )
  }
}

export default App;
