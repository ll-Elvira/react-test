import { useEffect, useState,useRef } from 'react';
import './App.css';
import { getList } from './api/get';
import Up from './component/upload';
import Imag from './component/upImage';
import { Counter } from './component/counter';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/modules/test';
// import styles from './Counter.module.css';
import { incrementAge, decrementAge, change } from './store/modules/user';
import * as XLSX from 'xlsx';

function B (){

  const [a,setA ]= useState(5)
useEffect(()=>{
  console.log("定时器")
  const num = setInterval(()=>{
    setA(prevA => prevA + 1);
  },1000)
  return ()=>{
    clearInterval(num)
  }
},[])
//初次渲染启动
  return(
    <div className="App">
      11111111111111
      <div style={{color:'red'}}>{a}</div>

    </div>

  )
}
function App() {
//   const a = getList()
//   async function fetchData() {
//       const result = await getList();
//       console.log(result.data.channels);
    
// }
// fetchData();

const [n,setN] = useState(0)
const URL = 'http://geek.itheima.net/v1_0/channels'
async function list(){
  const res = await fetch(URL)
}

const [is,setIs] = useState(true)
// async function t(){
//   const res = await getList()
//   console.log(res.image_links)
// }

const [img,setImg] = useState("https://www.freeimg.cn/i/2023/12/26/658a379b526e6.png")
const [stop, setStop] = useState(null);
const image = ()=>{
    const id = setInterval(async ()=>{
    const res = await getList()
    console.log("定时器aaaaaaaaaaaaaaaa:",res.image_links)
    setImg(res.image_links)
  },4000)
  setStop(id)
}
const stopImg = ()=>{
  console.log("停止停止",stop)
  clearInterval(stop)
  console.log("成功停止")
}


const s = ()=>{

}

const [files, setFiles] = useState([]);
const [imgs,setImgs] = useState()
const [tex,setTex] = useState()
const picture = (e)=>{
  const reader = new FileReader()

  const file = e.target.files[0];
  //读取文件内容
  reader.readAsDataURL(file)
  //处理文件加载完成事件
  reader.onload = () => {
    setImgs(reader.result)
  }

  //txt文档
  // reader.readAsText(file)
  // reader.onload = () => {
  //   setTex(reader.result)
  // }

  // reader.readAsArrayBuffer(file)
  // reader.onload = () => {
  //   setTex(reader.result)
  // }

}
const handleFileChange = (e) => {
  console.log(e)
  const fileList = e.target.files;
  console.log(fileList)
  let fileArray = [];
  for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      fileArray.push(file);
  }
  console.log(fileArray)
  setFiles(fileArray);
};



const testB = useRef(null)
useEffect(() => {
  // 通过 ref 访问 DOM 元素，并绑定事件监听器
  const buttonElement = testB.current;
  if (buttonElement) {
    const handleClick = () => {
      alert('按钮被点击了！');
    };

    buttonElement.addEventListener('click', handleClick);

    // 清理事件监听器
    return () => {
      buttonElement.removeEventListener('click', handleClick);
    };
  }
}, []); // 依赖数组为空，意味着这个 effect 只在组件挂载时运行一次

const [answer,setAnswer] = useState("")
const generateCaptcha = ()=> {
  const canvas = document.getElementById("captchaCanvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 设置验证码的字体和颜色
    ctx.font = "20px Arial";
    ctx.fillStyle = "#333";

    // 生成两个随机数
    const x = Math.floor(Math.random() * 10); // 0到99之间的数
    const y = Math.floor(Math.random() * 10); // 0到99之间的数

    // 计算答案
    let a = x - y;
    a = a.toString();
    setAnswer(a)

    // 绘制验证码表达式
    ctx.fillText(`${x}-${y}=?`, 30, 20);
  } else {
    alert("您的浏览器不支持Canvas！");
  }
}
const data = [
  {a:1,b:2},
  {a:4,b:5}
]
const down = ()=>{
  const ws = XLSX.utils.json_to_sheet(data, { sheetStubs: true });
  const wb = XLSX.utils.book_new();//工作簿
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, `导入模板.xlsx`);
}

  return (
    <div>
      <button onClick = {down}>导出</button>
      <div 
       
       style={{width:"100px",height:"100px",background: "green"}}
       onClick={generateCaptcha}
       >
        
        <canvas id = "captchaCanvas"></canvas>
        </div>
        <input type="text" 
        value = {answer}
        onChange = {(e)=>{
          setAnswer(e.target.value)}} />
        <br/>
      
      <button ref = {testB} >000000000000000000</button>
      <div class="triangle"></div>
      <div class="square">
        <div class="a"> 11111</div>
        <div class=""> 55555</div>
        <div class="qq">
        <div class="b"> 22222</div>
        <div class="c"> 33333</div>

        </div>
        
        
      </div>
      <div class="d"></div>
      {is && <B></B>}
      <button onClick={()=>{
        setIs(is=>!is);
        // console.log(is)
        }}>清除B</button>
        <br />
        <button onClick={() => {list(); image()}}>发起请求</button>
        <button onClick={stopImg}>停止</button>
        <button onClick={()=>{setN(prevN => prevN + 1)}}>{n}</button>
        <div class='imgBox' >
          <img src={img} alt="图片无法加载" />
        </div>
        <Up></Up>
        <Imag></Imag>
        <Counter></Counter>
        <div>-----------------------------------</div>
        <div>-----------------------------------</div>
        <div>-----------------------------------</div>
        <div>-----------------------------------</div>
        <div>-----------------------------------</div>
        <input type="file" onChange={picture} />
        <br />
        <img class="p" alt="Picture preview" src={imgs} style={{ }} />
        <div>{tex}</div>
    </div>
  );
}

export default App;
