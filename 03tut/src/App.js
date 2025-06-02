import './index.css'
import Content from "./Content3";
import Header2  from "./Header3";
import Footer2 from "./footer3";
import {useState} from "react";


function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "ITEM ONE"
        },
        {
            id: 2,
            checked: false,
            item: "ITEM TWO"
        },
        {
            id: 3,
            checked: false,
            item: "ITEM THREE"
        }
    ]);

    const handleCheck = (id) => {
        console.log(`key: ${id}`);
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
    };

    const handleDelete = (id) => {
        console.log(id);
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    };

    return (
        <div className="App">
            <Header2 />

            <div className="Content">
                <Content
                    items={items}
                    setItems={setItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

            </div>

            <Footer2 length={items.length} />
        </div>
    );
}

export default App;
