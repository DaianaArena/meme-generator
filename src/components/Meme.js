import memesData from  "../memesData"


export default function Meme () {

    const randomNumber = Math.floor(Math.random() * memesData.data.memes.length)
    const randomMeme = memesData.data.memes[randomNumber].url



    return (
        <div className="meme--container">
            <img src={randomMeme} alt="meme" />
        </div>

    )
}

