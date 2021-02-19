import React from 'react'
import PropTypes from 'prop-types'
import { Link, Logo } from './styles'

function Sponsor({ as, link, src, alt }) {
  const hasAs = () =>
    as ? (
      <Link as={as} href={link}>
        <Logo src={src} alt={alt} />
      </Link>
    ) : (
      <Link as={as} to={link}>
        <Logo src={src} alt={alt} />
      </Link>
    )

  return hasAs()
}

Sponsor.defaultProps = {
  as: 'a'
}

Sponsor.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Sponsor
