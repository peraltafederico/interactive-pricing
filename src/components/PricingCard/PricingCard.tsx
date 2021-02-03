import React, { useState } from 'react'
import cn from 'classnames'
import s from './PricingCard.module.scss'
import Card from '../Card/Card'
import Button from '../Button/Button'
import IconCheck from '../../assets/icon-check.svg'
import Switch from '../Switch/Switch'
import useWindowSize from '../../hooks/useWindowSize'
import InputRange from '../InputRange/InputRange'
import { PRODUCTS } from '../../constants'

interface Props {
  className?: string
  benefits: string[]
}

const DISCOUNT_PERCENTAGE = 0.25

const PricingCard: React.FC<Props> = ({ className, benefits }: Props) => {
  const [range, setRange] = useState(25)
  const [discount, setDiscount] = useState(false)

  const handleSwitchChange = () => setDiscount(!discount)

  const { width } = useWindowSize()

  const isMediumDown = width && width <= 768

  const product = PRODUCTS[range.toString() as '0' | '25' | '50' | '75' | '100']

  const productPrice = discount
    ? product.price * DISCOUNT_PERCENTAGE
    : product.price

  const Price = () => (
    <div className={s['pricing-card-content__price']}>
      <span
        className={s['pricing-card-content__price-text']}
      >{`$${productPrice}`}</span>
      <span className={s['pricing-card-content__time-text']}>/ month</span>
    </div>
  )

  return (
    <Card className={cn(s['pricing-card'], className)}>
      <div
        className={cn(s['pricing-card__content'], s['pricing-card-content'])}
      >
        <div className={s['pricing-card-content__description']}>
          <span className={s['pricing-card-content__title']}>
            {product.name}
          </span>
          {!isMediumDown && <Price />}
        </div>
        <InputRange
          className={s['pricing-card-content__price-range']}
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
        />
        {isMediumDown && <Price />}
        <div className={s['pricing-card-content__billing']}>
          <span className={s['pricing-card-content__billing-text']}>
            Monthly Billing
          </span>
          <Switch
            className={s['pricing-card-content__switch']}
            on={discount}
            onChange={handleSwitchChange}
          />
          <span className={s['pricing-card-content__billing-text']}>
            Yearly Billing
          </span>
          <div className={s['pricing-card-content__pill']}>
            -25% {!isMediumDown && 'discount'}
          </div>
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
