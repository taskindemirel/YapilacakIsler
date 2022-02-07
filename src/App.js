import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import AddItem from "./components/AddItem/AddItem";
import SearchItem from "./components/SearchItem/SearchItem";
import { useEffect } from "react";
import { AiOutlineCoffee } from 'react-icons/ai'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = JSON.parse(localStorage.getItem("todolist"))
    if (loadItems) {
      setItems(loadItems)
    }
  }, [])

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [isSearchBoxFull, setIsSearchBoxFull] = useState(false);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("todolist", JSON.stringify(newItems));
  };

  /* Done */
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  /* Delete */
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  /* Add */
  const addItem = (item) => {
    const id = items.length ? items.length + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };


  useEffect(() => {
    search.length ? setIsSearchBoxFull(true) : setIsSearchBoxFull(false);
  }, [search]);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="addAndSearch">
        <div className="addItem">
          <AddItem
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="line"></div>
        <div className="searchItem">
          <SearchItem search={search} setSearch={setSearch} />
        </div>
      </div>
      {
        items?.length ? (
          <div className="subHeading">
          Bekleyen İşleriniz
          <AiOutlineCoffee className="aiOutlineCoffee"/>
        </div>
        ) : (
          null
        )
      }

      <div className="main">
        <Main
          items={items?.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          isSearchBoxFull={isSearchBoxFull}
        />
      </div>
      <div className="footer">
        <Footer length={items?.length} />
      </div>
    </div>
  );
}

export default App;
