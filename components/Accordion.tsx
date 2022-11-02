import React from "react"
import Link from "next/link"

const Accordion = ({ accordion, children }: any) => {
    const items: [string, any][] = Object.entries(JSON.parse(accordion))

    const [firstItem, ...otherItems] = items

    const others = otherItems.map((i: any, index: number) => (
        <div key={i[1].key} className="accordion-item">
            <h2 className="accordion-header" id={`heading${i[1].bs}`}>
                <button
                    className="accordion-button icon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i[1].bs}`}
                    aria-expanded="true"
                    aria-controls={`collapse${i[1].bs}`}
                >
                    {i[1].header} &rarr;
                </button>
            </h2>
            <div
                id={`collapse${i[1].bs}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${i[1].bs}`}
                data-bs-parent="#main"
            >
                <section id={i[1]} className="accordion-body">
                    <div>{children[index + 1]}</div>
                    <div>
                        {i[1].prompt}
                        <Link href={i[1].linkRef}>
                            <a>{i[1].linkTxt}</a>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    ))

    return (
        <div className="accordion" id="main">
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
                        {firstItem[1].header} &rarr;
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#main"
                >
                    <section id={firstItem[1]} className="accordion-body">
                        <div className="mdxContainer">{children[0]}</div>

                        <> {firstItem[1].prompt}</>
                        <Link href={firstItem[1].linkRef}>
                            <a>{firstItem[1].linkTxt}</a>
                        </Link>
                    </section>
                </div>
            </div>
            {others}
        </div>
    )
}

export default Accordion
