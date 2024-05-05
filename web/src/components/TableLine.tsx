import DeleteEditIcons from "./DeleteEditIcons.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function TableLine({name, cpf, birthDate, bmi, lastRegister}) {
    return (
        <tr>
            <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pt-3.5 pl-5"}>{name}</td>
            <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pt-3.5 pl-5"}>{cpf}</td>
            <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pt-3.5 pl-5"}>{birthDate}</td>
            <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pt-3.5 pl-5"}>{bmi}</td>
            <td className={"text-lg font-montserrat-alternates text-reallyDarkBlue pt-3.5 pl-5"}>{lastRegister}</td>
            <td><DeleteEditIcons/></td>
        </tr>
    )
}