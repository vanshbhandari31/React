import React from 'react'
import './index.css';
const today= new Date();
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; { today.getFullYear()} </p>
        </footer>
    )
}
export default Footer
