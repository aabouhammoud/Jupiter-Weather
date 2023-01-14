
const { Component, useEffect, useState, useRef } = require("react");
import { useCookies } from "react-cookie";
import cnst from "./Constants";
import REQUEST from "../Components/Request";

function load_page_content (cookies, setCookie) {

    if (!cookies[cnst.cnst_user_settings_cookie] || cookies[cnst.cnst_user_settings_cookie] == "") {
        setCookie(cnst.cnst_user_settings_cookie, "New user")
        return(<h1>New user</h1>);
    } else  {
        setCookie(cnst.cnst_user_settings_cookie, "Not a new user")
        return(<h1>Not a new user</h1>);
    }
    
}

const JupiterWeather = () => {
    
    const [cookies, setCookie] = useCookies([cnst.cnst_user_settings_cookie])

    const [HomePageContent, setHomePageContent] = useState(load_page_content(cookies,setCookie));

    //setHomePageContent(<h1>HELLO THERE</h1>);

    // const getRegions = async () => {
    //     let regionsList = await REQUEST.GET(`http://dataservice.accuweather.com/locations/v1/regions/?apikey=${process.env.APIKEY}`);
    //     if (regionsList.data) {
    //         setHomePageContent(<table>
    //             {regionsList.data.map(region => {
    //                 return (
    //                     <tr>
    //                         <td>{region.ID}</td>
    //                         <td>{region.EnglishName}</td>
    //                         <td>{region.LocalizedName}</td>
    //                     </tr>);
    //             })}
    //         </table>)
    //     }
    // }

    return (
        <>
            { HomePageContent }
            <button onClick={() => { setHomePageContent(load_page_content(cookies, setCookie)); }}></button>
        </>
    )
}

export default JupiterWeather