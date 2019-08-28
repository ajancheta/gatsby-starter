import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({data}) => {
  console.log(data)
  return {
    <Layout>
      <div>Hello my files!</div>
    </Layout>
  }
}

export const query = graphql `
query {
  allFile {
    edges {
      node {
        relativePath
        extension
        birthTime(fromNow: true)
      }
    }
  }
}
`