import React from 'react'

const MockCompanyGoals = CompanyGoals => ({ children, ...props }) => {
  return (
    <CompanyGoals {...{ '[mockComponent]': true }} {...props}>
      {children}
    </CompanyGoals>
  )
}

export default MockCompanyGoals
