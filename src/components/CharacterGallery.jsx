import characterData from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {
  const listOfChars = characterData.map((char, i) => (
    <Character {...char} key={i} />
  ));
  return <section>{listOfChars}</section>;
};

export default CharacterGallery;

//
{/* <div>
  {characterData.map((character) => (
    <Character key={character.id} name={character.name} />
  ))}
</div>; */}
