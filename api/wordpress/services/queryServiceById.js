import globalPostFields from '../_partials/globalPostFields'
import seoPostFields from '../_partials/seoPostFields'
import authorPostFields from '../_partials/authorPostFields'
import featuredImagePostFields from '../_partials/featuredImagePostFields'
import {gql} from '@apollo/client'
import defaultPageData from '../_partials/defaultPageData'

// Fragment: retrieve single service fields.
const singleServiceFragment = gql`
  fragment SingleServiceFields on Service {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve service by specified identifier.
const queryServiceById = gql`
  query GET_SERVICE_BY_ID(
    $id: ID!
    $idType: ServiceIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    service(id: $id, idType: $idType) {
      ...SingleServiceFields
    }
  }
  ${singleServiceFragment}
`

export default queryServiceById
