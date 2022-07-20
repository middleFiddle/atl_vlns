
import EventEmitter from 'events'
import React, { useState } from 'react'


type Breakdown = {
    equity: number,
    maintenance: number
}

type PriceSheet = {
    violin: Breakdown,
    viola: Breakdown,
    cello: Breakdown,
    bass: Breakdown
}


const RentCalculator = ({ priceSheet }: { priceSheet: PriceSheet }) => {

    const [prices, setPrices]: [Breakdown, React.Dispatch<React.SetStateAction<Breakdown>>] = useState({
        equity: 0,
        maintenance: 0
    })


    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        const inst = e.target.name
        setPrices(priceSheet[inst])

    }
    return (
        <>
            <h6 className="align-self-center">
                Pick an instrument to see the monthly rate:
            </h6>
            <div className="container fluid p-1 d-flex flex-direction-column justify-content-center">

                <div className="btn-group " role="group" aria-label="Pick an instrument">
                    <button name="violin" type="button" className="btn btn-outline-secondary" onClick={handleClick}>Violin</button>
                    <button name="viola" type="button" className="btn btn-outline-secondary" onClick={handleClick}>Viola</button>
                    <button name="cello" type="button" className="btn btn-outline-secondary" onClick={handleClick}>Cello</button>
                    <button name="bass" type="button" className="btn btn-outline-secondary" onClick={handleClick}>Bass</button>
                </div>


            </div>
            <div className='container fluid pb-5 d-flex justify-content-center text-align-center'>
                {prices.equity !== 0 && <table className="table w-50">
                    <tbody>
                        <tr className='table-success'>
                            <th scope="row">Rental Equity</th>
                            <td>{`$${prices.equity}`}</td>
                        </tr>
                        <tr className='table-warning'>
                            <th scope="row">Maintenance</th>
                            <td>{`$${prices.maintenance}`}</td>
                        </tr>
                        <tr className='table-success'>
                            <th scope="row">Total Monthly Payment</th>
                            <td>{`$${prices.maintenance + prices.equity} +tax`}</td>
                        </tr>
                    </tbody>
                </table>}

            </div>

        </>
    )
}

export default RentCalculator