
const { Component, useEffect, useState, useRef } = require("react");
import REQUEST from "../Components/Request";

const JupiterWeather = () => {
    
    const [HomePageContent, setHomePageContent] = useState(<h1>
        Jupiter Weather
    </h1>);

    const getRegions = async () => {
        let regionsList = await REQUEST.GET(`http://dataservice.accuweather.com/locations/v1/regions/?apikey=${process.env.APIKEY}`);
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