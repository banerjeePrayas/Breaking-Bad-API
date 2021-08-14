import React, { useState, useEffect } from 'react'
import Movietable from '../components/Movietable'
import Error from '../components/Error';
import Loader from '../components/Loader';
const HomeScreen = () => {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        showAll();
    }, []);

    if(loading) {
        return <Loader />
    }

    const showAll = () => {
        setLoading(true);
        fetch('https://www.breakingbadapi.com/api/characters').then((res) => {
            if(res.status === 400) {
                setError("Bad Reponse from Server");
                // throw new Error("Bad Reponse from Server")
            }
            return res.json();
        }).then((data) => {
            setCharacters(data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })
    }

    const showBreakingBad = () => {
        setLoading(true);
        fetch('https://www.breakingbadapi.com/api/characters?category=Breaking+Bad').then((res) => {
            if(res.status === 400) {
                setError("Bad Reponse from Server");
                // throw new Error("Bad Reponse from Server")
            }
            return res.json();
        }).then((data) => {
            setCharacters(data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })
    }

    const showBetterSaul = () => {
        setLoading(true);
        fetch('https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul').then((res) => {
            if(res.status === 400) {
                setError("Bad Reponse from Server");
                // throw new Error("Bad Reponse from Server")
            }
            return res.json();
        }).then((data) => {
            setCharacters(data);
            console.log(data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })
    }




    return (
        <>

            { error ? <Error message={error} color="danger" /> : '' }

            <div id="myBtnContainer">
                <button className="btn active" onClick={showAll}>Show all Category</button>
                <button className="btn" onClick={showBreakingBad}>Breaking Bad</button>
                <button className="btn" onClick={showBetterSaul}>Better Call Saul</button>
            </div>
            <Movietable characters={characters}
            pageLimit={5}
            dataLimit={10} />
        </>
    )
}

export default HomeScreen
