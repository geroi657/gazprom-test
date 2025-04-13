import styles from "./styles.module.scss"

export default function CardName({ name, modifier } : {name: string; modifier: string | undefined }) {
    return <div className={`${ styles.CardName } ${ modifier }`}>{ name }</div>
}