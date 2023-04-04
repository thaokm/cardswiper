import { useState } from "react"
import Profile from "./profileCard"
import style from './Swipper.module.css'

export default function CardSwipper({}) {
    const [groups, setGroups] = useState(['active', 'unknown', 'unknown'])
    const hateClick = () => {

    }

    const loveClick = () => {
        let active = groups.indexOf('active')
        console.log(active)
        let next = (active + 1 <= groups.length) ? active + 1 : 0
        let newGroups = [...groups]
        newGroups[active] = 'after'
        newGroups[next] = 'becoming-active-from-before'
        setGroups(newGroups)
        setTimeout(() => {
            newGroups[next] = 'active'
          });
        setGroups(newGroups)
        console.log(active, next)
    }

    return(
        <div className={style.cardSwiper}>
            <div className={style.cardGroups}>
                {groups.map(status => {
                    return(
                        <div className={style.cardGroup} data-status={status}>
                            <div className={style.littleCard}></div>
                            <div className={style.bigCard}></div>
                            <div className={style.littleCard}></div>
                            <div className={style.bigCard}></div>
                            <div className={style.littleCard}></div>
                            <div className={style.bigCard}></div>
                            <div className={style.littleCard}></div>
                            <div className={style.bigCard}></div>
                        </div>    
                    )
                })}
            </div>
            <div className={style.cardSwiperButtons}>
                <button id="hate-button" onclick={hateClick()}>
                    :X
                </button>
                <button id="love-button" onclick={loveClick()}>
                    :3
                </button>
            </div>
        </div>
    )
}