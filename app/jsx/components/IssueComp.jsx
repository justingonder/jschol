// ##### Issue Component ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'
import ArbitraryHTMLComp from "../components/ArbitraryHTMLComp.jsx"

class IssueComp extends React.Component {
  render() {
    let p = this.props
    return (
      <div className="c-issue">
      {p.title &&
        <h3>{p.title}</h3>
      }
      {p.cover &&
        <figure className="c-issue__thumbnail">
          <LazyImageComp src={"/assets/"+p.cover.asset_id} alt="Issue cover" />
        {p.cover.caption &&
          <figcaption><i>Cover Caption:</i> {p.cover.caption}</figcaption>
        }
        </figure>
      }
      {p.description &&
        <div className="c-issue__description">
          <ArbitraryHTMLComp html={p.description} h1Level={3}/>
        </div>
      }
      </div>
    )
  }
}

module.exports = IssueComp;
