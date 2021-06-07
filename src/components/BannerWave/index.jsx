import React from 'react'
import { Wave } from './styles'

function BannerWave(props) {
  return (
    <Wave
      width={'100%'}
      viewBox="0 0 1440 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 322.834l60.251 7.508c60.251 10.01 180.753 27.528 299.247 0C480 302.813 600.502 232.741 721.004 187.694 839.498 142.648 960 125.13 1080.5 97.601c120.5-27.528 239-62.565 299.25-80.083L1440 0v483H0V322.834z"
        fill="#F9A826"
        fillOpacity={0.41}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 181l60 36c60 36 180 108 300 151s240 57 360 7 240-166 360-166 240 116 300 173l60 58v43H0V181z"
        fill="#F9A826"
        fillOpacity={0.4}
      />
    </Wave>
  )
}

export default BannerWave