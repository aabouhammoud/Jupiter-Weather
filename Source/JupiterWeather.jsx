
const { Component, useEffect, useState, useRef } = require("react");
import REQUEST from "../Components/Request";

const JupiterWeather = () => {

    const [HomePageContent, setHomePageContent] = useState(<h1>
        Jupiter Weather
    </h1>);

    const Hello = 10;

    const getRegions = async () => {
        let regionsList = await REQUEST.GET_REQUEST("http://dataservice.accuweather.com/locations/v1/regions/?apikey=P03jgSzSiEcVA1y2lc0EECGvF3w07aig");
        if (regionsList.data) {
            setHomePageContent(<table>
                {regionsList.data.map(region => {
                    return (
                        <tr>
                            <td>{region.ID}</td>
                            <td>{region.EnglishName}</td>
                            <td>{region.LocalizedName}</td>
                        </tr>);
                })}
            </table>)
        }
    }

    return (
        <>
            {HomePageContent}
            <br />
            <button onClick={getRegions}><span>Get Regions</span></button>
        </>
    )
}

export default JupiterWeather