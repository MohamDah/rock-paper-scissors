import Chip from "./Chip"
import triange from "../assets/images/bg-triangle.svg"


export default function AllChips({ rules, setPicked }: { rules: boolean, setPicked: any }) {
    return (
        <main className={`all-chips ${rules ? "darken" : ""}`}>
            <img alt="background triangle" className='triangle' src={triange} />
            <div role="button" onClick={()=>setPicked("paper")}>
                <Chip type="paper" />
            </div>
            <div role="button" onClick={()=>setPicked("scissors")}>
                <Chip type="scissors" />
            </div>
            <div role="button" onClick={()=>setPicked("rock")}>
                <Chip type="rock" />
            </div>
        </main>
    )
}