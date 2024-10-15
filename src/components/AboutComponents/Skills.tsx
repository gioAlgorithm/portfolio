import SkillCard from './SkillCard'
import styles from './Skills.module.scss'


interface Props {
  
}

export default function Skills(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <SkillCard title='NPM' source="/assets/svg/npm.png" backColor='crimson'/>
        <SkillCard title='Yarn' source="/assets/svg/yarn.png" backColor='SteelBlue'/>
        <SkillCard title='Git' source="/assets/svg/git.png" backColor='brown'/>
        <SkillCard title='Photoshop' source="/assets/svg/photoshop.png" backColor='deepskyblue'/>

        <SkillCard title='HTML' source="/assets/svg/html.png" backColor='orange'/>
        <SkillCard title='CSS' source="/assets/svg/css.png" backColor='royalblue'/>
        <SkillCard title='Sass/scss' source="/assets/svg/sass.png" backColor='pink'/>
        <SkillCard title='RegEx' source="/assets/svg/regex.png" backColor='orangered'/>

        <SkillCard title='Javascript' source="/assets/svg/js.png" backColor='yellow'/>
        <SkillCard title='React.js' source="/assets/svg/react.png" backColor='cyan'/>
        <SkillCard title='Next.js' source="/assets/svg/nextjs.png" backColor='grey'/>
        <SkillCard title='Typescript' source="/assets/svg/typescript.png" backColor='royalblue'/>

        <SkillCard title='Firebase' source="/assets/svg/firebase.png" backColor='orange'/>
        <SkillCard title='GraphQL' source="/assets/svg/graphql.png" backColor='deeppink'/>
        <SkillCard title='Zustand' source="/assets/svg/zustand.png" backColor='purple'/>
        <SkillCard title='React Router' source="/assets/svg/react-router-dom.png" backColor='crimson'/>
      </div>
    </div>
  )
}