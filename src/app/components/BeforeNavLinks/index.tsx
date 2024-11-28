import React from 'react'

const BeforeNavLinks: React.FC = () => {
  return (
    <div className="mb-12">
      {[...Array(10)].map((_, index) => (
        <React.Fragment key={index}>
          <div className="my-6">
          </div>
          <strong>Compare</strong>
          <a href="/admin/compare/prices">Prices</a>
          <a href="/admin/compare/products">Products</a>
          <a href="/admin/compare/competitors">Competitors</a>
        </React.Fragment>
      ))}
    </div>
  )
}

export default BeforeNavLinks
