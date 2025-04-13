import "./styles.scss"

export default function StatusLight({ color }: {color: string}) {
    return <div className={`StatusLight ${ color }`}></div>
}