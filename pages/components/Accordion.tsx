import React from 'react'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import PropTypes, { InferType } from 'prop-types'
import { Url } from 'url'

function Accordion({
  accordion,
  children,
}: InferType<typeof Accordion.propTypes>) {
  interface Section {
    header: string | undefined
    prompt: string | undefined
    linkRef: Url | string
    linkTxt: string | undefined
    bs: string
    id: string
  }
  const [firstItem, ...otherItems] = accordion

  const others = otherItems.map((i: Section, index: number) => (
    <div key={nanoid()} className="accordion-item">
      <h2 className="accordion-header" id={`heading${i.bs}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${i.bs}`}
          aria-expanded="true"
          aria-controls={`collapse${i.bs}`}
        >
          {i.header} &rarr;
        </button>
      </h2>
      <div
        id={`collapse${i.bs}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${i.bs}`}
        data-bs-parent="#main"
      >
        <section id={i.id} className="accordion-body">
          <div>{children[index + 1]}</div>
          <div>
            {i.prompt}
            <Link href={i.linkRef}>
              <a>{i.linkTxt}</a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  ))

  return (
    <div key={nanoid()} className="accordion" id="main">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {firstItem.header} &rarr;
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#main"
        >
          <section id={firstItem.id} className="accordion-body">
            <div className="mdxContainer">{children[0]}</div>
            <div>
              {firstItem.prompt}
              <Link href={firstItem.linkRef}>
                <a>{firstItem.linkTxt}</a>
              </Link>
            </div>
          </section>
        </div>
      </div>
      {others}
    </div>
  )
}

Accordion.propTypes = {
  accordion: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Accordion
