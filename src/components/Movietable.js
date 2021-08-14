import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Error from './Error';

const Movietable = ({ characters, title, pageLimit, dataLimit }) => {


    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [searchedCharater, setSearchedCharater] = useState([]);

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
   
     function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
     }
   
     const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return characters.slice(startIndex, endIndex);
     };

     const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(characters.length/dataLimit); i++) {
        pageNumbers.push(i);
    }  


     const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        fetch(`https://www.breakingbadapi.com/api/characters?name=${searchWord}`, {method:"get"})
        .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(data => {
            setSearchedCharater(data);
        })
        .catch(error => {
            setError(error);
            console.log(error);
        })
        const newFilter = searchedCharater.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
  
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };


    return (
        <>
            { error ? <Error message={error} color="danger" /> : '' }

            
            

            <div class="search__container">
                <input class="search__input" type="text" value={wordEntered}
                onChange={handleFilter} placeholder="Search By Name of Character" />
                {filteredData.length !== 0 && (
                    <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                        <RouterLink className="dataItem" to={`/${value.char_id}`} key={key}>
                            <p>{value.name}</p>
                        </RouterLink>
                        );
                    })}
                    </div>
                )}
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Date of Birth</th>
                    <th>Status</th>
                    <th>View Character</th>
                </tr>
            </thead>
            <tbody>
                { getPaginatedData().map((character) => (
                    <tr>
                        <td>{character.name}</td>
                        <td>{character.occupation}</td>
                        <td>{character.birthday}</td>
                        <td>{character.status}</td>
                        <td><RouterLink to={`/${character.char_id}`}>View</RouterLink></td>
                    </tr>
                )) }
                
            </tbody>
        </table>

            <ul class="page">
                {pageNumbers.map((item, index) => (
                    <button
                    key={index}
                    onClick={changePage}
                    className={`page__numbers ${currentPage === item ? 'active' : null}`}
                    >
                    <span>{item}</span>
                    </button>
                ))}
            </ul>
        
        </>
    )
}

export default Movietable
