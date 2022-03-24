// export const Menu = ({ orderMenu, sideMenu }) => {
//   return (
//     <div>
//       <h3>오늘의 메뉴는 {orderMenu} </h3>
//       <h3>사이드 메뉴는 {sideMenu}</h3>
//     </div>
//   );
// };

export const Menu = ({ orderMenu }) => {
  return (
    <>
      <h1>오늘의 메뉴!</h1>
      <ul>
        <li>
          오늘의 메뉴는 {orderMenu[0].orderMenu} 사이드 메뉴는{" "}
          {orderMenu[0].sideMenu}
        </li>
        <li>
          오늘의 메뉴는 {orderMenu[1].orderMenu} 사이드 메뉴는{" "}
          {orderMenu[1].sideMenu}
        </li>
        <li>
          오늘의 메뉴는 {orderMenu[2].orderMenu} 사이드 메뉴는{" "}
          {orderMenu[2].sideMenu}
        </li>
        <li>
          오늘의 메뉴는 {orderMenu[3].orderMenu} 사이드 메뉴는{" "}
          {orderMenu[3].sideMenu}
        </li>
        <li>
          오늘의 메뉴는 {orderMenu[4].orderMenu} 사이드 메뉴는{" "}
          {orderMenu[4].sideMenu}
        </li>
      </ul>
    </>
  );
};
