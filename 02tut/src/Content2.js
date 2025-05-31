import './index.css';
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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
        <main className="Content">
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                onDoubleClick={() => handleCheck(item.id)}
                                style={item.checked ? { textDecoration: "line-through" } : null}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ margin: "2rem" }}>Your list is empty</p>
            )}
        </main>
    );
};

export default Content;