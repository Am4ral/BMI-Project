import SideBar from "../components/SideBar.tsx";
import Logo from "../assets/logo-preta-imc.svg";
import SearchBar from "../components/SearchBar.tsx";
import DeleteEditIcons from "../components/DeleteEditIcons.tsx";

export default function Home(){
    return (
        <div className={"flex flex-row w-screen h-screen bg-lightGray"}>
            <nav className={"w-min"}>
                <SideBar/>
            </nav>
            <section className={"w-screen mx-10 my-20 flex flex-col gap-20"}>
                <div className={"flex flex-col desktop:flex-row h-max gap-5 desktop:gap-0 desktop:justify-evenly"}>
                    <img src={Logo} alt="Logo" className={"w-1/3 desktop:w-20 self-center"}/>
                    <div className={"flex flex-col justify-end h-100"}>
                        <SearchBar/>
                    </div>
                    <button className={"bg-primaryBlue invisible desktop:visible text-absoluteWhite font-montserrat-alternates font-semibold self-end px-5 py-1 rounded-full text-lg"}>+ novo</button>
                </div>
                <table className={"overflow-y-scroll mx-28"}>
                    <thead>
                    <tr className={"align-baseline"}>
                        <th className={"text-xl text-left font-montserrat-alternates font-semibold text-absoluteWhite bg-primaryBlue rounded-tl-3xl pl-5 py-2.5"}>nome</th>
                        <th className={"text-xl text-left font-montserrat-alternates font-semibold text-absoluteWhite bg-primaryBlue pl-5"}>cpf</th>
                        <th className={"text-xl text-left font-montserrat-alternates font-semibold text-absoluteWhite bg-primaryBlue pl-5"}>data nasc.</th>
                        <th className={"text-xl text-left font-montserrat-alternates font-semibold text-absoluteWhite bg-primaryBlue pl-5"}>imc</th>
                        <th className={"text-xl text-left font-montserrat-alternates font-semibold text-absoluteWhite bg-primaryBlue pl-5"}>ultimo reg.</th>
                        <th className={"w-min bg-primaryBlue rounded-tr-3xl pl-5"}></th>
                    </tr>
                    </thead>

                    <tbody className={"bg-absoluteWhite"}>
                    <tr className={"align-baseline"}>
                        <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pl-5 pt-5"}>João da Silva</td>
                        <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pl-5"}>123.456.789-00</td>
                        <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pl-5"}>01/01/2001</td>
                        <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pl-5"}>18.5</td>
                        <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pl-5"}>01/01/2023</td>
                        <td><DeleteEditIcons/></td>
                    </tr>


                    <tr>
                        <td className={"bg-absoluteWhite rounded-bl-3xl"}></td>
                        <td className={"bg-absoluteWhite py-2.5"}></td>
                        <td className={"bg-absoluteWhite py-2.5"}></td>
                        <td className={"bg-absoluteWhite py-2.5"}></td>
                        <td className={"bg-absoluteWhite py-2.5"}></td>
                        <td className={"bg-absoluteWhite rounded-br-3xl"}></td>
                    </tr>
                    </tbody>
                </table>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className="fill-primaryBlue w-16 h-16 desktop:hidden absolute bottom-10 right-10">
                    <path fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                          clipRule="evenodd"/>
                </svg>
            </section>
        </div>
    )
}