import React, { useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailApi = () => {
    const [data, setdata] = useState([]);
    const [searchdrink, setSearchdrink] = useState("");

    const fetchDrinks = async (apiURL) => {
        const response = await fetch(apiURL);
        const { drinks } = await response.json();
        setdata(drinks);
    };

    const handlechange = (e) => {
        let event = e.target.value;
        setSearchdrink(event);
    };

    useEffect(() => {
        const correctURL = URL + searchdrink;
        fetchDrinks(correctURL);
    }, [searchdrink]);

    return (
        <div>
            <center>
                <form>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="SEARCH YOUR DRINK"
                        value={searchdrink}
                        onChange={handlechange}
                        style={{
                        color: "black",
                        padding: "12px 20px",
                        borderRadius: "15px",
                        borderBlockColor: "blue"
                    }}
                    />
                </form>
                <hr />
                <ul className="cocktail-data">
                    {data &&
                        Array.isArray(data) &&
                        data.map((eachobj) => {
                            const { idDrink, strDrink, strDrinkThumb } = eachobj;
                            return (
                                <li key={idDrink}>
                                    <div>
                                        <img src={strDrinkThumb} alt={strDrink} style={{ width: "500px", height: "300px" }} />
                                    </div>
                                    <div className="text">{strDrink}</div>
                                </li>
                            );
                        })}
                </ul>
            </center>
        </div>
    );
};
export default CocktailApi;