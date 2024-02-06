import characterData from "../data/characterData.json";
import Character from "./Character";
import imgTestImport from '../assets/testImageImport.png';

const CharacterGallery = () => {
  const listOfChars = characterData.map((char, i) => (
    <Character {...char} key={i} />
  ));
  return (
    <>
      <h1>Test Image</h1>
      <p>Image from public</p>
      <img src="./assets/imgTestPublic.png" style={{ width: "200px" }} />
      <p>Image from import</p>
      <img src={imgTestImport} style={{ width: "200px" }} />
      <section>{listOfChars}</section>
    </>
  );
};

export default CharacterGallery;
