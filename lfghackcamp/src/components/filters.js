function Filters() {
    return (
        <>
        <label>Distance: </label>
        <input type"text" name="distance"/>
        <label>Shops: </label>
        <ul>
            <label for="Tesco">Tesco</label>
            <input type="checkbox" id="Tesco" name="Tesco" value="Tesco"/>
            <br/>
            <label for="Aldi">Aldi</label>
            <input type="checkbox" id="Aldi" name="Aldi" value="Aldi"/>
        </ul>
        </>
    )
}

export default Filters