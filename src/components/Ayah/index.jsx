import {
  Wrapper,
  LeftItems,
  AyahNumber,
  Text,
  TextContainer,
  AudioPlayer,
  SvgContainer,
} from "./style";
import { Svg } from "../../assets/svg";
import { decoderFuction } from "../../utils/decoderFuction";

function Ayah({ audio, numberInSurah, text }) {
  const PlayAyah = (audio) => {
    document.getElementById("player").setAttribute("src", audio);
    document.getElementById("player").play();
  };

  return (
    <Wrapper>
      <TextContainer>
        <LeftItems>
          <AyahNumber>{numberInSurah}</AyahNumber>
          <SvgContainer onClick={() => PlayAyah(audio)}>
            <Svg />
          </SvgContainer>
          <AudioPlayer id="player">
            <source src={audio} />
          </AudioPlayer>
        </LeftItems>
        <Text>{decoderFuction(text)}</Text>
      </TextContainer>
    </Wrapper>
  );
}
export default Ayah;
