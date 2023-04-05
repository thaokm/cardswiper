import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Profile from '../component/profileCard'
import CardSwipper from '../component/cardSwipper'

export default function Home() {
  return (
      <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
        <Profile />
        <CardSwipper />
      </div>
  )
}
