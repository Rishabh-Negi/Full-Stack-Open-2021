const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map((e, i) => <div key={e.name + i}>{e.name} {e.number}</div>)}
        </div>
    )
}

export default Persons