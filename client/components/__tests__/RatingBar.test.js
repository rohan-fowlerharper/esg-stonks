import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import RatingBar from '../RatingBar'

expect.extend(matchers)

describe('<RatingBar />', () => {
  it('should render the component', () => {
    const { getByRole } = render(<RatingBar max={1000} rating={500} />)
    expect(getByRole('rating-bar')).toBeInTheDocument()
  })

  it('should render the component with correct width and colour', () => {
    render(<RatingBar max={1000} rating={1000} />)
    const ratingBar = screen.getByRole('rating-bar')
    expect(ratingBar.firstChild).toHaveStyleRule('width', '100%')
    expect(ratingBar.firstChild).toHaveStyleRule('background', 'green.500')
  })
  it('should render with different rating/max', () => {
    render(<RatingBar max={100} rating={17} />)
    const ratingBar = screen.getByRole('rating-bar')
    expect(ratingBar.firstChild).toHaveStyleRule('width', '17%')
    expect(ratingBar.firstChild).toHaveStyleRule('background', 'red.500')
  })
})
