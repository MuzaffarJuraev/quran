import Ayah from "../../components/Ayah";
import { GoBackButton, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAyahsQuery } from "../../redux/surahApiSlice";

function Surah() {
  const { state } = useLocation();
  const { data, isLoading } = useGetAyahsQuery(state);
  const navigate = useNavigate();
  console.log();
  return (
    <Wrapper>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <GoBackButton onClick={() => navigate(-1)}>go back</GoBackButton>
          {data?.data.ayahs.map((value, idx) => (
            <Ayah key={idx} {...value} />
          ))}
        </>
      )}
    </Wrapper>
  );
}

export default Surah;
