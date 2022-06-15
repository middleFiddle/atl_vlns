import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Accordion = ({ accordion }) => {
  const [firstItem, ...otherItems] = accordion
  const others = otherItems.map((i) => (
    <div key={i.key} className="accordion-item">
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
          <div>{i.body}</div>
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
    <div key={firstItem.key} className="accordion" id="main">
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
            <div>{firstItem.body}</div>
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

export default Accordion
