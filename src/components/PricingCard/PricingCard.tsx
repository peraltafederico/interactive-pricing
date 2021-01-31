import React, { useState } from 'react'
import cn from 'classnames'
import s from './PricingCard.module.scss'
import Card from '../Card/Card'
import Button from '../Button/Button'
import IconCheck from '../../assets/icon-check.svg'
import Switch from '../Switch/Switch'

interface Props {
  className?: string
  benefits: string[]
}

const PricingCard: React.FC<Props> = ({ className, benefits }: Props) => {
  const [switchOn, setSwitchOn] = useState(false)

  const handleSwitchChange = () => setSwitchOn(!switchOn)

  return (
    <Card className={cn(s['pricing-card'], className)}>
      <div
        className={cn(
          s['pricing-card__description'],
          s['pricing-card-description']
        )}
      >
        <span className={s['pricing-card-description__title']}>
          Look Pageviews
        </span>
        <input
          type="range"
          className={s['pricing-card-description__price-range']}
        ></input>
        <div className={s['pricing-card-description__price']}>
          <span className={s['pricing-card-description__price-text']}>
            $16.00
          </span>
          <span className={s['pricing-card-description__time-text']}>
            / month
          </span>
        </div>
        <div className={s['pricing-card-description__billing']}>
          <span className={s['pricing-card-description__billing-text']}>
            Monthly Billing
          </span>
          <Switch
            className={s['pricing-card-description__switch']}
            on={switchOn}
            onChange={handleSwitchChange}
          />
          <span className={s['pricing-card-description__billing-text']}>
            Yearly Billing
          </span>
          <div className={s['pricing-card-description__pill']}>-25%</div>
        </div>
      </div>
      <div className={s['pricing-card__divider']}></div>
      <div className={cn(s['pricing-card__footer'], s['pricing-card-footer'])}>
        <div className={s['pricing-card-footer__benefits']}>
          {benefits.map((benefit) => (
            <span className={s['pricing-card-footer__benefit']} key={benefit}>
              <img
                className={s['pricing-card-footer__icon-check']}
                src={IconCheck}
              ></img>{' '}
              {benefit}
            </span>
          ))}
        </div>
        <Button className={s['pricing-card-footer__button']}>
          Start my trial
        </Button>
      </div>
    </Card>
  )
}

export default PricingCard
