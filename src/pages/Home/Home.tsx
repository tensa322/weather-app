import React, { useEffect } from 'react'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import { Days } from './components/Days/Days'
import s from './Home.module.scss'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeater'
import { selectCurrentWeatherData } from '../../store/selectors'

type Props = {}

export const Home = (props: Props) => {
   const dispatch = useCustomDispatch()
   const {weather} = useCustomSelector(selectCurrentWeatherData)
   useEffect(() => {
      dispatch( fetchCurrentWeather('paris') )
   }, [])
   
   return (
      <div className={s.home}>
         <div className={s.wrapper}>
            <ThisDay weather={weather} />
            <ThisDayInfo />
         </div>
         <Days/>
      </div>
   )
}
