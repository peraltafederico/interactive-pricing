import React from 'react'
import styles from './App.module.scss'
import PricingCard from './components/PricingCard/PricingCard'
import useWindowSize from './hooks/useWindowSize'

const App = () => {
  const { width } = useWindowSize()

  const isMediumDown = width && width <= 768

  return (
    <div className={styles.app}>
      <div className={styles['app__title-container']}>
        {isMediumDown ? (
          <h5 className={styles.app__title}>Simple, traffic-based pricing</h5>
        ) : (
          <h1 className={styles.app__title}>Simple, traffic-based pricing</h1>
        )}
        {isMediumDown ? (
          <>
            <p className={styles.app__description}>
              Sign-up for our 30-day trial.
            </p>
            <p className={styles.app__description}>No credit card required.</p>
          </>
        ) : (
          <p className={styles.app__description}>
            Sign-up for our 30-day trial. No credit card required.
          </p>
        )}
      </div>
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
