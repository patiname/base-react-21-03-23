import { db } from "../db";
import "../styles/main.css";
// const arr = ["슈프림 양념치킨", "골드 슈프림", "매운 슈프림", "후라이드"];

// const 슈프림 = arr.map((처갓집) => 처갓집 + "❤️");
// =>기존 배열값을 복사하여, 새로운 배열값으로 리턴시켜줌
// =>불변성 유지
// console.log(arr);
// console.log(슈프림);

// const appleBrand = db[0].brand;
// const monitor = db[0].monitor;
// const idNum = db[0].id;
// console.log(appleBrand, monitor, idNum);

// const { brand, monitor: moni, id } = db[0];
// =>비구조화 할당으로 받아온 값의 이름을 변경할려면
// "값: 변경할 이름" 을 작성 해주면됨
// console.log(brand, moni, id);

export const MapFn = () => {
  return (
    <div>
      {/* <ul>
        {arr.map((chicken) => (
          <li>{chicken + "❤️"}</li>
        ))}
      </ul> */}

      <h1>맵 함수</h1>
      <ol>
        {db.map((com) => (
          <li key={com.id}>
            브랜드: {com.brand}, 모니터: {com.monitor}
          </li>
        ))}
      </ol>
    </div>
  );
};
