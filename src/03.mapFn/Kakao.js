import { kakaoDb } from "../db";

export const Kakao = () => {
  return (
    <div className="wrap">
      <ul className="con_wrap">
        {kakaoDb.map((ka) => (
          <li key={ka.id}>
            <h3>{ka.title}</h3>
            <p>{ka.description.slice(0, 100) + "..."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
