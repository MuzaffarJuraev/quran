import { Surah } from "./style";
import { useNavigate } from "react-router-dom";
function SurahComponet({ number, englishName, name, numberOfAyahs }) {
  const navigate = useNavigate();
  return (
    <Surah onClick={() => navigate("/surah", { state: number })}>
      <div>
        <div data-number={number}></div>
        <p>{englishName}</p>
      </div>
      <span>
        <p>{name}</p>
        <p>{numberOfAyahs} ayahs</p>
      </span>
    </Surah>
  );
}

export default SurahComponet;
