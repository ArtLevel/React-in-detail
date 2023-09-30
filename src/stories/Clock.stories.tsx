import React, { useEffect, useState } from 'react'
import { Clock } from '../components/Clock/Clock'

export default {
	title: 'Clock demo'
}

export const BaseExample = () => {
	return <Clock variant='analog' />
}
