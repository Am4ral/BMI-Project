// @ts-ignore
import Logo from "../assets/logo-preta-imc.svg";
import SearchBar from "./SearchBar.tsx";
import SideBar from "./SideBar.tsx";

export default  function  HomeHeader(){
    return (
        <div className={"flex flex-col desktop:flex-row w-full gap-5 desktop:gap-0 desktop:justify-evenly desktop:items-end"}>
            <nav className={"absolute left-0 top-0 z-10"}>
                <SideBar/>
            </nav>
            <img src={Logo} alt="Logo" className={"w-1/3 desktop:w-20 self-center"}/>
            <div className={""}>
                <SearchBar/>
            </div>
            <button
                className={"bg-primaryBlue invisible desktop:visible text-absoluteWhite font-montserrat-alternates font-semibold self-end px-5 py-1 rounded-full text-lg"}>+
                novo
            </button>
            {screenY < 1024 ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className="fill-primaryBlue w-16 h-16 desktop:hidden absolute bottom-10 right-10">
                    <path fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                          clipRule="evenodd"/>
                </svg> : null}
        </div>
    )
}