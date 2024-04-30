import '../input.css';
import Logo from '../assets/logo-branca-imc.svg';
import {useNavigate} from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();

    function nav() {
        navigate('/home');
    }
    return (
        <section className={"h-screen w-screen flex flex-row justify-end"}>
            <div className={"bg-login-bg blur-sm h-full w-full bg-cover bg-no-repeat absolute z-0"}/>
            <div className={"flex flex-col bg-highlightBlue h-full w-1/3 justify-center gap-20 bg-opacity-25 relative z-1 "}>
                <img src={Logo} alt="Logo" className={"w-1/3 self-center drop-shadow-xl"}/>
                <div className={"bg-white p-8 bg-absoluteWhite w-3/5 self-center rounded-3xl flex flex-col gap-20 sha"}>
                    <h1 className={"text-5xl font-semibold text-center font-montserrat-alternates text-darkBlue"}>login</h1>
                    <form className={"flex flex-col gap-16"}>
                        <div className={"flex flex-col gap-16"}>
                            <div className={"flex flex-col"}>
                                <label htmlFor="email" className={"text-xl font-montserrat-alternates text-reallyDarkBlue ml-3 mb-2 "}>email</label>
                                <input type="text" placeholder={""} className={"input bg-lightGray rounded-full px-2 py-1"} />
                            </div>
                            <div className={"flex flex-col"}>
                                <label htmlFor="password" className={"text-xl font-montserrat-alternates text-reallyDarkBlue ml-3 mb-2 "}>senha</label>
                                <input type="password" placeholder={""} className={"input bg-lightGray rounded-full px-2 py-1"} />
                            </div>
                        </div>
                        <button className={"text-2xl bg-primaryBlue font-montserrat-alternates text-absoluteWhite font-medium rounded-full self-center px-7 py-1"} onClick={nav}>entrar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}