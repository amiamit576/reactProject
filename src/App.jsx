import { useState } from "react";
import Title from "./components/Title";
import menu from './data';
import Menu from "./components/Menu";
import Categories from "./components/Categories";


const allCatogries = ['all', ...new Set(menu.map((item) => item.category))];


function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCatogries);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  

  return (<main>
    <section className="menu">
      <Title text={'our Menu'} />
      <Categories categories={categories} filterItems={filterItems } />
      <Menu items={menuItems} />
      

    </section>

  </main>);
}
export default App;
