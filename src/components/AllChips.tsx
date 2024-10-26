import Chip from "./Chip"
import triange from "../assets/images/bg-triangle.svg"


export default function AllChips({ rules, setPicked }: { rules: boolean, setPicked: any }) {
    return (
        <main className={`all-chips ${rules ? "darken" : ""}`}>
            <img alt="background triangle" className='triangle' src={triange} />
            <button onClick={()=>setPicked("paper")}>
                <Chip type="paper" />
            </button>
            <button onClick={()=>setPicked("scissors")}>
                <Chip type="scissors" />
            </button>
            <button onClick={()=>setPicked("rock")}>
                <Chip type="rock" />
            </button>
        </main>
    )
}