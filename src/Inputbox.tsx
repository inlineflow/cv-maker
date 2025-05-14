type Props = {
    f: number;
}

export default function Inputbox({f}: Props) {
    return <input type="text" value={f} />
}