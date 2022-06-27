import React from 'react'
import {render} from '@testing-library/react'
import App from '../../../p2-homeworks/h1/App'

test('find text "react homeworks"', () => {
    const {getByText} = render(<App/>)
    const linkElement = getByText(/react homeworks/i)
    expect(linkElement).toBeInTheDocument()
})
