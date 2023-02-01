import Image from 'next/image'
import style from './CardProject.module.css'

export default function CardProject ({ title, description, technologies, imgUrl }) {
  return (
    <div className={style.cardProject}>
      <Image src={imgUrl} alt='Imagen del proyecto' width={400} height={300} className={style.img} />
      <div className={style.cardDetails}>
        <p className={style.cradTitle}>{title}</p>
        <p className={style.cardDescription}>{description}</p>
        <div className={style.techContainer}>
          {technologies.map((item, index) => <p key={index} className={style.cardTechnology}>{item}</p>)}
        </div>
      </div>
    </div>
  )
}
