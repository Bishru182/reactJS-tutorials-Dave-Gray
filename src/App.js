import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import {useState} from 'react';
import SearchItem from './Searchitem';


function App() {
  const [items,setItems] = useState (JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
   }

  const handleCheck =(id)=>{
    const listItems = items.map((item)=> item.id === id ?{...item,
     checked: !item.checked} : item);
     setAndSaveItems(listItems);

  }

  const handleDelete =(id) => {
     const listItems = items.filter((item) => item.id !== id);
     setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem)return;
    addItem(newItem);
    setNewItem('');
  }
  
  return (
    <div className="App">
      <Header title="Grocery List"/> 
    
      <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length} />
      
    </div>
  );
}

export default App;
