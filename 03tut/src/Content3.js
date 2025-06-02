import './index.css';

import { FaTrashAlt } from "react-icons/fa";

const Content = ({items,handleCheck,handleDelete}) => {

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