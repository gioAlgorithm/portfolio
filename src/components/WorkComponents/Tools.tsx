import styles from './Tools.module.scss'

interface Props {
  backColor: string;
  title: string;
  source: string;
}

export default function Tools(props: Props) {
  const {backColor, title, source} = props

  return (
    <div className={styles.tool} style={{backgroundImage: `url(${source})`}}>
      <div className={styles.innerBack} style={{ backgroundColor: `${backColor}` }}>
        <div className={styles.inner}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}