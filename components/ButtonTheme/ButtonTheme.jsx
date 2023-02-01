import style from './ButtonTheme.module.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function ButtonTheme () {
  const [theme, setTheme] = useState('light')

  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  if (theme === 'light') {
    return (
      <FontAwesomeIcon icon={faSun} className={style.themeIcon} onClick={handleChange} />
    )
  } else {
    return (
      <FontAwesomeIcon icon={faMoon} className={style.themeIcon} onClick={handleChange} />
    )
  }
}
