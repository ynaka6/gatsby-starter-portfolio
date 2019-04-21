import React from 'react'

class Iframely extends React.Component  {
  _isMounted = false;

  constructor(...args) {
    super(...args)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this._isMounted = true;
    const s = document.createElement('script')
    s.src = '//cdn.iframe.ly/embed.js'
    s.setAttribute('data-timestamp', + new Date())
    this.ref.current.appendChild(s)
    s.onload = () => {
      window.iframely && window.iframely.load();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getIframelyHtml(href) {
    return { __html: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="' + href + '" data-iframely-url="//cdn.iframe.ly/lYQs7A9"></a></div></div>' }
  }

  render() {
    const { href } = this.props;
    return <div ref={this.ref} dangerouslySetInnerHTML={this.getIframelyHtml(href)} />
  }
}

export default Iframely