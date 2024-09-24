
const B = ({counter, setCounter}) => {

    return (
        <div>
            Component B - {counter}
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    )
}

export default B
