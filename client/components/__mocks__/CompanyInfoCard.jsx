import React from 'react'

const MockCompanyInfoCard = CompanyInfoCard => ({ children, ...props }) => {
  return (
    <CompanyInfoCard {...{ '[mockComponent]': true }} {...props}>
      {children}
    </CompanyInfoCard>
  )
}

export default MockCompanyInfoCard
