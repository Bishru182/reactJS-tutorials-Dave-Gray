import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import {useState} from 'react';

function App() {
  const [items,setItems] = useState ([
    {
      id:1,
      checked: false,
      item: "1 kg rice"
    },
    { id:2,
      checked: false,
      item: "item 2"
    },
    {
      id:3,
      checked: false,
      item: "item 3"
    }

  ]);

  const [newItem, setNewItem] = useState('')

  const handleCheck =(id)=>{
    const listItems = items.map((item)=> item.id === id ?{...item,
     checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

  const handleDelete =(id) => {
     const listItems = items.filter((item) => item.id !== id);
     setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
  }
  
  return (
    <div className="App">
      <Header title="Grocery List"/> 
      <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
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
