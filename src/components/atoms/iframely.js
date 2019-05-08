import React from 'react'

class Iframely extends React.Component  {

  constructor(...args) {
    super(...args)
    this.ref = React.createRef()
  }

  componentDidMount() {
    window.iframely && window.iframely.load();
  }

  getIframelyHtml(href) {
    return {
      __html: (process.env.IFRAMELY_API_KEY ? 
          '<div style="margin-bottom: 3rem;"><div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="' + href + '" data-iframely-url="//cdn.iframe.ly/api/iframe?url=' + encodeURI(href) + '&api_key=' + process.env.IFRAMELY_API_KEY + '&omit_script=1"></a></div></div></div>'
          : ''
      )
    }
  }

  render() {
    const { href } = this.props;
    return <div ref={this.ref} dangerouslySetInnerHTML={this.getIframelyHtml(href)} />
  }
}

export default Iframely