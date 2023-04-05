import { useState } from "react"
import Profile from "./profileCard"
import style from './Swipper.module.css'
const imgURL = [
    "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60n",
    "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
]

export default function CardSwipper({}) {
    const [groups, setGroups] = useState(['active', 'unknown', 'unknown'])
    const [loading, setLoading] = useState(false)
    const hateClick = () => {
        let active = groups.indexOf('active')
        let prev = (active - 1 < 0) ? groups.length : active - 1
        let newGroups = [...groups]
        newGroups[active] = 'before'
        newGroups[prev] = 'becoming-active-from-after'
        setGroups(newGroups)
        setLoading(true)
        setTimeout(() => {
            newGroups[prev] = 'active'
            setGroups(newGroups)
            setLoading(false)
        }, 400);
    }

    const loveClick = () => {
        let active = groups.indexOf('active')
        let next = (active + 1 < groups.length) ? active + 1 : 0
        let newGroups = [...groups]
        newGroups[active] = 'after'
        newGroups[next] = 'becoming-active-from-before'
        setGroups(newGroups)
        setLoading(true)
        setTimeout(() => {
            newGroups[next] = 'active'
            setGroups(newGroups)
            setLoading(false)
        }, 400);
    }

    return(
        <div className={style.cardSwiper}>
            <div className={style.cardGroups}>
                {groups.map((status, index) => {
                    return(
                        <div className={style.cardGroup} dataStatus={status}>
                            <div className={style.littleCard}><img src={imgURL[(index + 0) % 8]} width="100%" height="100%"/></div>
                            <div className={style.bigCard}><img src={imgURL[(index + 1) % 8]} width="100%" height="100%"/></div>
                            <div className={style.littleCard}><img src={imgURL[(index + 2) % 8]} width="100%" height="100%"/></div>
                            <div className={style.bigCard}><img src={imgURL[(index + 3) % 8]} width="100%" height="100%"/></div>
                            <div className={style.littleCard}><img src={imgURL[(index + 4) % 8]} width="100%" height="100%"/></div>
                            <div className={style.bigCard}><img src={imgURL[(index + 5) % 8]} width="100%" height="100%"/></div>
                            <div className={style.littleCard}><img src={imgURL[(index + 6) % 8]} width="100%" height="100%"/></div>
                            <div className={style.bigCard}><img src={imgURL[(index + 7) % 8]} width="100%" height="100%"/></div>
                        </div>    
                    )
                })}
            </div>
            <div>{loading? ' loading ... ' : 'done'}</div>
            <div className={style.cardSwiperButtons}>
                <button id="hate-button" onClick={hateClick}>
                    :X
                </button>
                <button id="love-button" onClick={loveClick}>
                    :3
                </button>
            </div>
        </div>
    )
}