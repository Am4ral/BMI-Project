import '../input.css';
import Logo from '../assets/logo-branca-imc.svg';
import LoginForm from "../components/LoginForm.tsx";

export default function Login(){
    return (
        <section className={"h-screen w-screen flex flex-row justify-center desktop:justify-end"}>
            <div className={"bg-login-bg blur-sm h-full w-full bg-cover bg-no-repeat absolute z-0"}/>
            <div className={"flex flex-col desktop:bg-highlightBlue h-full desktop:w-1/3 justify-center gap-6 desktop:gap-14 desktop:bg-opacity-25 relative"}>
                <img src={Logo} alt="Logo" className={"desktop:w-1/3 w-1/2 self-center drop-shadow-xl"}/>
                <div className={"w-full desktop:px-20"}>
                    <LoginForm/>
                </div>
            </div>
        </section>
    )
}