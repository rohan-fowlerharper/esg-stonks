/* eslint-disable react/display-name */
import React from 'react'

const MockCompanyGoals = CompanyGoals => ({ children, ...props }) => {
  return (
    <CompanyGoals {...props}>
      {children}
    </CompanyGoals>
  )
}

export default MockCompanyGoals
