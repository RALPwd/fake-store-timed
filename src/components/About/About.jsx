import React from 'react'
import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutcontainer__about}>
        <div className={styles.aboutcontainer__image}>
          <img src="https://res.cloudinary.com/ralpwd/image/upload/v1650643447/avatarCT_hgwtpw.jpg" alt="" />
        </div>
        <div className={styles.aboutcontainer__details}>
          <h1>Raúl Lara Páez</h1>
          <h3>Web developer</h3>

          <p>Desarrollador web frontend apasionado por desarrollar interfaces de usuario entendibles, fáciles de usar y eficientes. Con conocimientos en HTML, CSS, Javascript y con capacidades de crear aplicaciones en React JS, adicionalmente con conocimientos en NodeJS, MongoDB y Express, entre otros.</p>
          <p>Me encanta la buena comida, los videojuegos y pasar buenos momentos con mis amigos y familia.</p>
          <h3>¿Qué cosas he aprendido en el programa Top de <strong>Make it Real</strong>?</h3>
          <p>Con Make it Real me he especializado en diferentes tecnologías como:</p>
          <ul>
            <li>ReactJS: Una librería de Javascript que me permite crear aplicaciones modulares con componentes reutilizables.</li>
            <li>Redux: Una librería de Javascript creada para manejar estados en React y poder utilizarlos a lo largo de toda mi aplicación. </li>
            <li>NodeJS: Es un entorno de ejecución de Javascript que me permite ejecutar código por fuera de un navegador. Una de sus principales utilidades es poder correr código en un servidor sin depender de un navegador.</li>
          </ul>
          <h3>¿Cómo contactarme?</h3>
          <p>Puedes contactarme a través de mi correo electrónico: <a href="mailto:ralpwd@gmail.com">ralpwd@gmail.com</a></p>
          <p>También puedes ver mis proyectos en mi GitHub: <a href="https://github.com/RALPwd">github.com/RALPwd</a></p>
        </div>
      </div>
    </div>
  )
}
