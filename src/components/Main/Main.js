import './Main.css';
import ItemList from '../ItemList/ItemList';


const Main = ({ items, handleCheck, handleDelete, isSearchBoxFull }) => {

  let text
  if (isSearchBoxFull) {
    text = "Gösterilecek öğe yok..."
  } else {
    text = "Yapılacak işler listeniz boş..."
  }


  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "8.5rem", color: "#f8f8f8", fontSize: "17px", fontWeight: '300' }}>{text}</p>
      )}
    </>
  );
};

export default Main;
