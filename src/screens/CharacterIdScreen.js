import React, { useState, useEffect } from 'react';
import CharacterId from '../components/CharacterId'
import Loader from '../components/Loader';
const CharacterIdScreen = ({ match }) => {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const characterId = match.params.id;


    useEffect(() => {
        setLoading(true);
        fetch(`https://www.breakingbadapi.com/api/characters/${characterId}`).then((res) => {
            if(res.status === 400) {
                throw new Error("Bad Reponse from Server")
            }
            return res.json();
        }).then((data) => {
            setCharacter(data[0]);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })
    }, [characterId]);
    
    if(loading) {
        return <Loader />
    }

    return (
        <>
            <CharacterId character={character} />
        </>

)}

export default CharacterIdScreen;
