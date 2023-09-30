import { useEffect, useState } from 'react'

const getTwoDigitsString = (time: number) => {
	return time < 10 ? '0' + time : time
}

export const Clock = () => {
	const [data, setData] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setData(new Date())
		}, 1000)
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
