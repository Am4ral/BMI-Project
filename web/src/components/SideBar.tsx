import {Link} from "react-router-dom";
import '../input.css'

export default function SideBar() {
    return (
        <nav className={"bg-primaryBlue "}>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </ul>
        </nav>
    )
}