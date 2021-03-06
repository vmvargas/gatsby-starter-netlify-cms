import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const entryLogos = entry.getIn(['data', 'clients', 'logos'])
  const logos = entryLogos ? entryLogos.toJS() : []

  const entryLinks = entry.getIn(['data', 'social', 'links'])
  const links = entryLinks ? entryLinks.toJS() : []

  return (
    <AboutPageTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
      clients={{
        heading: entry.getIn(['data', 'clients', 'heading']),
        logos: logos,
      }}
      social={{
        heading1: entry.getIn(['data', 'social', 'heading1']),
        heading2: entry.getIn(['data', 'social', 'heading2']),
        heading3: entry.getIn(['data', 'social', 'heading3']),
        links: links,
      }}
    />
  )
}


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
