import HomeTable from "../components/HomeTable.tsx";
import HomeHeader from "../components/HomeHeader.tsx";

export default function Home(){
    return (
        <div className={"h-screen w-screen bg-lightGray "}>
            <div className={"w-full h-full object px-5 py-5 desktop:px-32 desktop:py-14 flex flex-col desktop:gap-12 "}>
                <HomeHeader/>
                <HomeTable/>
            </div>
        </div>
    )
}