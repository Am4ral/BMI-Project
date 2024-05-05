import '../input.css'
import {useState} from "react";
import {createPortal} from "react-dom";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function MenuDots({hidden, setHidden}) {
    return (

        <section className={hidden ? "mt-5 ml-4 cursor-pointer" : "cursor-pointer"} onClick={() => {
            setHidden(!hidden)
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                 stroke={hidden ? "#164882" : "white"} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
        </section>
    )
}

export default function SideBar() {
    const [hidden, setHidden] = useState(true);
    return (
        <>
            {hidden ?
                <MenuDots hidden={hidden} setHidden={setHidden}/>
                :
                <>
                    {createPortal(<div className={"bg-black opacity-25 w-screen h-screen absolute top-0 z-2"} onClick={()=>{setHidden(!hidden)}}>
                    </div>, document.body)}

                    <section className={"bg-primaryBlue h-screen px-4 py-5 w-min block"}>
                    <div className={"justify-between flex flex-col h-full"}>
                        <div className={"flex flex-col gap-7"}>
                        <MenuDots hidden={hidden} setHidden={setHidden}/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-7 h-7">
                            <path fillRule="evenodd"
                                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                            <path fillRule="evenodd"
                                  strokeWidth={1}
                                  stroke={"white"}
                                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                        <path fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                              clipRule="evenodd"/>
                    </svg>
                    </div>

                </section>
                </>
            }
        </>
    )
}