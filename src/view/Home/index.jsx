import { ImgWrapper, SurahsWrapper, Wrapper } from "./style";
import Surah from "../../components/Surah";

import top_img from "../../assets/images/basmala.png";
import { useGetSurahsQuery } from "../../redux/surahApiSlice";

function Home() {
  const { data } = useGetSurahsQuery();
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={top_img} alt="basmala" />
      </ImgWrapper>
      <SurahsWrapper>
        {data?.data.map((value, index) => (
          <Surah key={index} {...value} />
        ))}
      </SurahsWrapper>
    </Wrapper>
  );
}

export default Home;
