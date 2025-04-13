import "./styles.scss";

export default function StatusText({ children }: {children: string}) {
    return <p className={"StatusText"}>{ children }</p>
}