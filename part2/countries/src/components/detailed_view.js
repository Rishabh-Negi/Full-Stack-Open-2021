
const Details = ({ data }) => {
    return (
        <div>
            <div>
                <h1>{data["name"]}</h1>
                <div>capital {data["capital"]}</div>
                <div>population {data["population"]}</div>
            </div>

            <div>
                <h3>languages</h3>
                <ul>
                    {data["languages"].map((e) => <li key={e["iso639_1"]}>{e["name"]}</li>)}
                </ul>
            </div>
            <div>
                <img src={data["flag"]} alt="flag" width="100px" />
            </div>
        </div>
    )
}

export default Details