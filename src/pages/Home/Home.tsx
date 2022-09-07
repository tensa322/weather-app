import React from 'react'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import { Days } from './components/Days/Days'
import s from './Home.module.scss'

type Props = {}

export const Home = (props: Props) => {
   return (
      <div className={s.home}>
         <div className={s.wrapper}>
            <ThisDay />
            <ThisDayInfo />
         </div>
         <Days/>
      </div>
   )
}
