
//Type ko object banayera rakheko, Tprops le kei value hold gardaina.
type Tprops = {
    title: string;
    description: string;
    batchNumber?: number | string //? optional. yeso garda batchNumber pathauda ni vo napathauda ni vo. stirng or number can be use
}

function Box({title, description, batchNumber}: Tprops) {
    return (
        <>

        <p>{title}</p>
        <p>{description}</p>
        <p>{batchNumber}</p>

        </>
    )
}

export default Box