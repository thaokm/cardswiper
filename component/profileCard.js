import style from './Profile.module.css'
const defaultQuote = 'Trên con đường đi tới thành công không có dấu chân của kẻ lười biếng'
const defaultURL = '/user.webp'

export default function Profile({name='Đinh Tiến Sở', quote=defaultQuote, url=defaultURL}) {
    return(
        <div className={style.profileBlock}>
            <div className={style.profilePictureBig}>
                <img width="100%" alt="Anne Hathaway picture" src={url} />
            </div>
            <h2 className={style.userName}>{name}</h2>
            <div className={style.profileDescription}>
                {/* <p>Professional III</p>
                <p>RB Main Production P</p> */}
                <p>{quote}</p>
            </div>
        </div>
    )
}