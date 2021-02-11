import React from 'react'
import s from './App.module.scss'
import PricingCard from './components/PricingCard/PricingCard'
import useWindowSize from './hooks/useWindowSize'

const App = () => {
  const { width } = useWindowSize()

  const isMediumDown = width && width <= 768

  return (
    <div className={s.app}>
      <div className={s['app__title-container']}>
        {isMediumDown ? (
          <h5 className={s.app__title}>Simple, traffic-based pricing</h5>
        ) : (
          <h1 className={s.app__title}>Simple, traffic-based pricing</h1>
        )}
        {isMediumDown ? (
          <>
            <p className={s.app__description}>Sign-up for our 30-day trial.</p>
            <p className={s.app__description}>No credit card required.</p>
          </>
        ) : (
          <p className={s.app__description}>
            Sign-up for our 30-day trial. No credit card required.
          </p>
        )}
      </div>
      <div className={s.app__card}>
        <PricingCard
          benefits={[
            'Unlimited websites',
            '100% data ownership ',
            'Email reports',
          ]}
        />
      </div>
    </div>
  )
}

export default App
