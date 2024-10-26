import logo from "../assets/images/logo.svg"

export default function Header({score} : {score : number}) {
    return (
        <header>
            <img className="title" src={logo} alt="Logo: Rock paper scissors" />
            <div className='score'>
                <p className='score_text'>SCORE</p>
                <p className='score_number'>{score}</p>
            </div>
        </header>
    )
}