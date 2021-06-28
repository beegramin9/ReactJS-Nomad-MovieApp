import React from "react"
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  /* 라우터를 return에 넣어준다. */
  return <HashRouter>
    {/* 모든 라우터들은 기본적으로 props를 받아온다.*/}


    {/* 모든 페이지에 있어야 하는 Navigation */}
    <Navigation />

    {/* 어떤 url으로 갈지, 어떤 파일의 리액트 컴포넌트를 불러올지 props이 필요함 */}
    <Route path="/home" exact={true} component={Home}/>
    <Route path="/home/introduction">
      <h1>Introduction</h1>
      </Route>
    {/* 요렇게만 하면 Home과 About이 겹친다.
    왜? react router는 url을 가져와서 중복되는 모든 라우터들을 보여준다.
    예를 들어 /home/introductuon은 /home/introductuon과도 매치되지만
    앞에 /home도 매치된다. 그래서 두개 같이 띄우는것 */}

    {/* 이거 피하려면 이 exact url 아니면 안 띄운다는 뜻의 exact={true} 주면 됨 */}
    <Route path="/about" exact={true} component={About}/>
    <Route path="/movie/:id" exact={true} component={Detail}/>
    {/* 여기서 받은 Detail Component를 Detail.js에서 사용 가능 */}
  </HashRouter>
}

export default App;