import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './ProductLink.module.scss'

export default function ProductLink( { product } ) {
  const [timer, setTimer] = React.useState(Math.round(Math.random() * 300));
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    while(timer>0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      setMinutes(Math.floor(timer/60));
      setSeconds(timer%60);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  return (
    <>
      {
        timer>0 ?
        <> 
          <Link className={styles.button} to={`/product/${product}`}>
            Ver más
          </Link>
          <p>Faltan {minutes} minutos y {seconds} segundos para aprovechar la promoción.</p>
        </>
        :
        <span>Esta promoción ha expirado</span>  
      }
    </>
  )
}

ProductLink.propTypes = {
  product: PropTypes.number
}
