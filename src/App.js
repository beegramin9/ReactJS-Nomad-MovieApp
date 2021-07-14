import React from "react"
/* react-router-dom는 react에서 router 만들기 딱 좋음
밑에 HashRouter, Route는 컴포넌트로 라우팅 기능을 갖고 있음 */
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/AboutTheProject";
import Home from "./routes/Main";
import Detail from "./routes/MovieDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./themes/default";

function App() {
  /* 라우터를 return에 넣어준다. */
  return (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <GlobalStyle/>
      <Header/> {/* Styled Component로 만들어야 함 */}
      {/* 모든 페이지에 있어야 하는 Navigation, 그니까 App.js에 있어야 함
      Link Component는 HashRouter 안에 있어야 한다. */}
  
      {/* 어떤 url으로 갈지, 어떤 파일의 리액트 컴포넌트를 불러올지 props이 필요함 */}
      {/* 여기서 받은 Detail Component를 Detail.js에서 사용 가능 */}
      <Route path="/home" exact={true} component={Home}/>
      {/* /home과 /home/1이 겹치는걸 막으려면 exact url 아니면 안 띄운다는 뜻의 exact={true} 주면 됨 */}
      <Route path="/about" exact={true} component={About}/>
      <Route path="/movie/:id" exact={true} component={Detail}/>
      <Footer/>
    </HashRouter>
  </ThemeProvider>
)}

export default App;