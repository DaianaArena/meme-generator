import React from "react"
import memesData from  "../memesData"
import Meme from "./Meme";


export default function Form () {


    const [randomMeme, setMeme] = React.useState("https://i.imgflip.com/1ur9b0.jpg")

    function changeMeme () {
        const randomNumber = Math.floor(Math.random() * memesData.data.memes.length)
        setMeme (memesData.data.memes[randomNumber].url)
    }



    return (
        <div>
        <section className="create--meme">
                <div className="meme--inputs">
                    <input type="text" placeholder="Top text" />
                    <input type="text" placeholder="Bottom text" />
                </div>

                <button className="meme--download" onClick={changeMeme} >Get a new meme image </button>
        </section>
        <Meme url={randomMeme}/>
        </div>
    )
}

