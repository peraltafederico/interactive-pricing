import React from 'react'
import styles from './App.module.scss'
import PricingCard from './components/PricingCard/PricingCard'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__card}>
        <PricingCard
          benefits={[
            'Unlimited websites',
            '100% data ownership ',
            'Email reports',
          ]}
        ></PricingCard>
      </div>
    </div>
  )
}

export default App
