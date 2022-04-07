// import { Content } from "./01.base/Content";
// import ClassComponent from "./02.component/ClassComponent";
// import FnComponent from "./02.component/FnComponent";
// import { Menu } from "./02.component/Menu";
// import { Kakao } from "./03.mapFn/Kakao";
// import { MapFn } from "./03.mapFn/MapFn";

import { BoxStyle } from "./04.styledComponent/BoxStyle";
import { WebContent } from "./04.styledComponent/WebContent";
import { UseFontAwsome } from "./05.Ex/UseFontAwsome";
import { MusicApp } from "./06.musicApp/MusicApp";
import { ClassEvent } from "./07.event/ClassEvent";
import { ColorChange } from "./07.event/ColorChange";
import { FnEvent } from "./07.event/FnEvent";
import { Popup } from "./07.event/Popup";
import { RouterDom } from "./08.router/RouterDom";
import { webDB } from "./db";
import { GlobalStyled } from "./styles/GlobalStyled";

// const menus = [
//   {
//     id: 0,
//     orderMenu: "피자",
//     sideMenu: "콜라",
//   },
//   {
//     id: 1,
//     orderMenu: "치킨",
//     sideMenu: "사이다",
//   },
//   {
//     id: 2,
//     orderMenu: "삼겹살",
//     sideMenu: "환타",
//   },
//   {
//     id: 3,
//     orderMenu: "파스타",
//     sideMenu: "레몬티",
//   },
//   {
//     id: 4,
//     orderMenu: "족발",
//     sideMenu: "미란다",
//   },
// ];

// console.log(menus[0].menu);

function App() {
  return (
    <>
      {/* <div>123</div>
      <h1>wow</h1>
      <input />
      <Content /> */}
      {/* 1일차 */}

      {/* <FnComponent />*/}
      {/* <ClassComponent nickName="PNcoding" age="23" /> */}
      {/* <Menu orderMenu={menus[0].orderMenu} sideMenu="콜라" />
      <Menu orderMenu="치킨" sideMenu="크림맥주" />
      <Menu orderMenu="파스타" sideMenu="와인" /> */}
      {/* <Menu orderMenu={menus} /> */}
      {/* 2일차 */}

      {/* <MapFn /> */}
      {/* <Kakao /> */}
      {/* 3일차 */}

      <GlobalStyled />
      {/* <BoxStyle /> */}
      {/* <WebContent data={webDB} /> */}
      {/* 4일차 */}

      {/* <UseFontAwsome /> */}
      {/* 5일차 */}

      {/* <MusicApp /> */}
      {/* 6일차 */}

      {/* <ClassEvent /> */}
      {/* <FnEvent /> */}
      {/* <ColorChange /> */}
      {/* <Popup /> */}
      {/* 7일차 */}

      <RouterDom />
    </>
  );
}

export default App;
