import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    function nav() {
        navigate('/home');
    }
    return (
        <section className={"bg-white px-8 py-7 desktop: bg-absoluteWhite self-center rounded-3xl flex flex-col gap-9 desktop:gap-12 "}>
            <h1 className={"desktop:text-5xl text-4xl font-semibold text-center font-montserrat-alternates text-darkBlue"}>login</h1>
            <form className={"flex flex-col gap-9 desktop:gap-14"}>
                <div className={"flex flex-col gap-5 desktop:gap-6"}>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor="email"
                               className={"desktop:text-xl text-lg font-normal font-montserrat-alternates text-reallyDarkBlue ml-3"}>email</label>
                        <input type="text" placeholder={""} className={"input bg-lightGray rounded-full px-3 py-1.5"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor="password"
                               className={"desktop:text-xl text-lg font-normal font-montserrat-alternates text-reallyDarkBlue ml-3"}>senha</label>
                        <input type="password" placeholder={""}
                               className={"input bg-lightGray rounded-full px-3 py-1.5"}/>
                    </div>
                </div>
                <button
                    className={"text-2xl bg-primaryBlue font-montserrat-alternates text-absoluteWhite font-medium rounded-full self-center px-7 py-1"}
                    onClick={nav}>entrar
                </button>
            </form>
        </section>
    )
}