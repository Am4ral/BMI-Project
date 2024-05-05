import TableLine from "./TableLine.tsx";

export default function HomeTable() {
    return(
        <section className={"w-full overflow-y-scroll max-h-full bg-absoluteWhite rounded-3xl"}>
            <table className={"w-full bg-absoluteWhite border-separatetable-fixed"}>
                <thead className={"bg-primaryBlue table-header-group"}>
                    <tr className={"text-lg font-montserrat-alternates text-absoluteWhite text-left"}>
                        <th scope={"col"} className={"w-1/3 font-semibold py-3 pl-5"}>nome</th>
                        <th scope={"col"} className={"w-2/12 font-semibold py-3 pl-5"}>cpf</th>
                        <th scope={"col"} className={"w-2/12 font-semibold py-3 pl-5"}>data de nasc.</th>
                        <th scope={"col"} className={"w-1/12 font-semibold py-3 pl-5"}>imc</th>
                        <th scope={"col"} className={"w-2/12 font-semibold py-3 pl-5"}>último reg.</th>
                        <th scope={"col"} className={"w-2/12 font-semibold py-3 pl-5"}></th>
                    </tr>
                </thead>
                <tbody>

                <TableLine name={"João da Silva Silvano Moreira dos Anjos"} cpf={"123.456.789-00"} birthDate={"01/01/2000"} bmi={"23.4"} lastRegister={"01/01/2021"}/>


                {/*pra ter um espaçamento embaixo*/}
                <tr>
                    <td className={"pt-3"}></td>
                    <td className={"pt-3"}></td>
                    <td className={"pt-3"}></td>
                    <td className={"pt-3"}></td>
                    <td className={"pt-3"}></td>
                    <td className={"pt-3"}></td>
                </tr>

                </tbody>
            </table>
        </section>
    )
}