import React, { useState } from 'react'

const Search = ({ data }) => {

    const [term, setTerm] = useState('')
    const [filterData, setFilterData] = useState([])

    const onChange = (event) => {
        setTerm(event.target.value.toLowerCase())
        // console.log(event.target.value.toLowerCase())
        const s = event.target.value.toLowerCase();
        if (event.target.value !== '') {
            var list = []
            data.forEach((e) => {
                if (e["name"].toLowerCase().includes(s)) {
                    list.push(e)
                }
            })
            setFilterData(list)
        } else {
            setFilterData([])
        }
    }

    return (
        <div>
            <div>
                find countries <input onChange={onChange} value={term} />
            </div>
            {
                filterData.length === 1 ?
                    <div>
                        <div>
                            <h1>{filterData[0]["name"]}</h1>
                            <div>capital {filterData[0]["capital"]}</div>
                            <div>population {filterData[0]["population"]}</div>
                        </div>

                        <div>
                            <h3>languages</h3>
                            <ul>
                                {filterData[0]["languages"].map((e) => <li key={e["iso639_1"]}>{e["name"]}</li>)}
                            </ul>
                        </div>
                        <div>
                            <img src={filterData[0]["flag"]} alt="flag" width="100px" />
                        </div>
                    </div>
                    : filterData.length <= 10 ?
                        filterData.map(
                            (e, i) => <div key={e.name + i}>{e.name} {e.number}</div>
                        ) :
                        <div>
                            Too many matches,specify another filter
                        </div>
            }
        </div>

    )
}

export default Search;