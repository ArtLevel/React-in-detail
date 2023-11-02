import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

interface IClock {
	variant: 'digital' | 'analog'
}

const getTwoDigitsString = (time: number) => {
	return time < 10 ? '0' + time : time
}

export const Clock: FC<IClock> = ({ variant }) => {
	return variant === 'digital' ? <DigitalClock /> : <AnalogClock />
}

const DigitalClock = () => {
	const [data, setData] = useState(new Date())

	useEffect(() => {
		const intervalId = setInterval(() => {
			console.log('TICK')
			setData(new Date())
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	const secondsString = getTwoDigitsString(data.getSeconds())
	const minutesString = getTwoDigitsString(data.getMinutes())
	const hoursString = getTwoDigitsString(data.getHours())

	return (
		<div>
			{hoursString}:{minutesString}:{secondsString}
		</div>
	)
}

const AnalogClock = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => clearInterval(interval)
	})

	return (
		<ClockStyled>
			<HourHand
				rotation={
					((date.getHours() % 12) +
						date.getMinutes() / 60 +
						date.getSeconds() / 3600) *
						30 +
					'deg'
				}
			/>
			<MinHand rotation={date.getMinutes() * 6 + 'deg'} />
			<SecondHand rotation={date.getSeconds() * 6 + 'deg'} />
		</ClockStyled>
	)
}

interface IHands {
	rotation: string
}

const ClockStyled = styled.div`
	height: 26rem;
	width: 26rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 30px dotted black;
	transform: rotate(20deg);
	border-radius: 50%;

	&:before {
		content: '';
		position: absolute;
		width: 22px;
		height: 22px;
		background: black;
		border-radius: 50%;
		z-index: 10000;
		border: #ffbe0b 2px;
	}
`

const SecondHand = styled.div<IHands>`
  display: flex;
  position: absolute;
  width: 250px;
  height: 250px;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 150px;
    background-color: black;
    z-index: 2;
    bottom: 120px;
    border-radius: 5px;
    transform: rotate(${props => props.rotation});
    translate3d(-50%, 0, 0);
    transform-origin: 0px bottom;
  }
`

const MinHand = styled.div<IHands>`
  display: flex;
  position: absolute;
  width: 250px;
  height: 250px;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 120px;
    background-color: blue;
    z-index: 2;
    bottom: 120px;
    border-radius: 5px;
    transform: rotate(${props => props.rotation});
    translate3d(-50%, 0, 0);
    transform-origin: 0px bottom;
  }
`

const HourHand = styled.div<IHands>`
  display: flex;
  position: absolute;
  width: 250px;
  height: 250px;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 80px;
    background-color: red;
    z-index: 2;
    bottom: 120px;
    border-radius: 5px;
    transform: rotate(${props => props.rotation});
    translate3d(-50%, 0, 0);
    transform-origin: 0px bottom;
  }
`
