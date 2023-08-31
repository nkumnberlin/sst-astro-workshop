
import confetti from 'canvas-confetti';
import  { useState} from "react";

function Searchbar() {
    const [song, setSong] = useState<string>('')
    const explosion = () => confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
        }
    });

    const navigate = () => {
        location.href = song
    }

    const onEnterPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            navigate()
        }
    }

    return (
        <div>
            <form>
                <label form="name" style={{color: 'white', paddingRight: '1rem'}}>Search a Song</label>
                <input type="text" id="name" name="name" onInput={(val) => {
                    explosion()
                    setSong(val.currentTarget.value)
                }}/><br/><br/>
            </form>
            <button data-confetti-button="" type="submit" value="submit" onKeyPress={onEnterPress}
                    onClick={navigate}>Search!
            </button>
        </div>
    )
}

export default Searchbar

