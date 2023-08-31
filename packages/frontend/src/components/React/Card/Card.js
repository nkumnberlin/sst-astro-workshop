import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './Card.module.css';
function Card(props) {
    var href = props.href, title = props.title, body = props.body, children = props.children;
    return (_jsx("li", { className: styles.linkCard, children: _jsxs("div", { children: [_jsx("h2", { children: title }), _jsx("p", { children: body }), children, href && _jsxs("div", { className: styles.container, children: [" ", _jsx("a", { className: styles.button, href: title, children: "Sing den Banger \u2192" })] })] }) }));
}
export default Card;
