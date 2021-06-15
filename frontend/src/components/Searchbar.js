const Searchbar = (props) => {

    return (
        <form onSubmit={props.submit}>
            Search for item:
            <input
                type="text"
                placeholder="Enter a keyword"
                onChange={(e) =>{props.change(e.target.value)}}
            ></input>

            <button>Search!</button>
        </form>
    )
}

export default Searchbar