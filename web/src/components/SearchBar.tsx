export  default function SearchBar(){
    return (
        <section className={"flex flex-row gap-1 bg-midGray rounded-full font-montserrat-alternates font-medium justify-center max-h-min pl-3"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#777777" className="w-5 h-5 self-center">
                <path fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"/>
            </svg>
            <input type="text" placeholder={"pesquisar"}
                   className={"input bg-midGray px-2 text-black placeholder-gray rounded-full py-1"}/>
        </section>
    )
}