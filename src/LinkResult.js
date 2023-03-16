import axios from "axios";
import React, { useEffect, useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = ({inputValue}) => {

    console.log(inputValue);

    const [shortenLink, setShortenLink] = useState("Hello");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    const fetchData = async () => {
        try{
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link);

        }catch(err){
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(inputValue.length){
            fetchData();
        }
    },[inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000)
    },[copied]);

    if(loading){
        return <p className="noData">Loading....</p>
    }

    if(error){
        return <p className="noData">Something Went Wrong.</p>
    }


    return (
        <div className="result">
            <p>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
                <button className={copied ? "copied": ""}>copy to clipboard</button>
            </CopyToClipboard>
        </div>
    );
}

export default LinkResult