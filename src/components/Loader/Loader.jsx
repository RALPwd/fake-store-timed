import React from 'react'
import styles from './Loader.module.scss'
import { FallingLines } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className={styles.loading}>
      <FallingLines />
    </div>
  )
}
