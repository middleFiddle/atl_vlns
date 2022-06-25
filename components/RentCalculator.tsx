import React, { useState, useEffect, SetStateAction } from 'react'


const RentCalculator = () => {
    const [data, setData]: [any[], React.Dispatch<React.SetStateAction<[]>>] = useState([])
    const [prices, setPrices]: [{}, React.Dispatch<React.SetStateAction<{}>>] = useState({
        equity: '',
        maintenance: ''
    })
    console.log(prices)
    useEffect(() => {
        fetch('./api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(Object.entries<any>(data))
            })
    }, [])

    console.log(data)
    const handleClick = (e) => {
        const key = e.target.innerText
        console.log(key.toLowerCase())
        const breakdown = data.find((e) => e[0] === key.toLowerCase())
        setPrices(breakdown[1])

    }
    return (
        <>
            <h6 className="align-self-center">
                Pick an instrument to see the monthly rate:
            </h6>
            <div className="container fluid p-1 d-flex flex-direction-column justify-content-center">

                <div className="btn-group " role="group" aria-label="Pick an instrument">
                    <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Violin</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Viola</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Cello</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Bass</button>
                </div>


            </div>
            <div className='container fluid pb-5 d-flex justify-content-center text-align-center'>
                {prices.equity !== '' && <table className="table w-50">
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