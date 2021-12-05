/* eslint-disable react/display-name */
import React from 'react'

const MockCompanyPie = CompanyPie => ({ children, ...props }) => {
  return (
    <CompanyPie {...{ '[mockComponent]': true }} {...props}>
      {children}
    </CompanyPie>
  )
}

export default MockCompanyPie
