import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import confetti from 'canvas-confetti';
import { useState } from "react";
function Searchbar() {
    var _a = useState(''), song = _a[0], setSong = _a[1];
    var explosion = function () { return confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
        }
    }); };
    var navigate = function () {
        location.href = song;
    };
    var onEnterPress = function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            navigate();
        }
    };
    return (_jsxs("div", { children: [_jsxs("form", { children: [_jsx("label", { form: "name", style: { color: 'white', paddingRight: '1rem' }, children: "Search a Song" }), _jsx("input", { type: "text", id: "name", name: "name", onInput: function (val) {
                            explosion();
                            setSong(val.currentTarget.value);
                        } }), _jsx("br", {}), _jsx("br", {})] }), _jsx("button", { "data-confetti-button": "", type: "submit", value: "submit", onKeyPress: onEnterPress, onClick: navigate, children: "Search!" })] }));
}
export default Searchbar;
