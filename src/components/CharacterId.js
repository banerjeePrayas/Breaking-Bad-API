import React from 'react';


const CharacterId = ({ character }) => {



    return (
        <>
            
            <div class="wrapper">
            <div class="left">
                <img src={`${character.img}`} alt="user" width="200" />
                
            </div>
            <div class="right">
                <div class="info">
                    <h3>Information</h3>
                    <div class="info_data">
                        <div class="data" style={{width: '100%'}}>
                            <h4>Name: {character.name}</h4>
                        </div>
                        
                    </div>
                    <div className="info_data">
                        <div class="data">
                            <h4>Occupation</h4>
                            <p><span>{character.occupation}</span></p>
                        </div>
                        
                        <div class="data">
                          <h4>Date of Birth</h4>
                            <p>{character.birthday}</p>
                        </div>
                        
                    </div>
                </div>
                <div class="projects">
                    <h3></h3>
                    <div class="projects_data">
                        { character.nickname ? (
                            <>
                            <div class="data">
                                <h4>Nickname</h4>
                                <p>{character.nickname}</p>
                            </div>
                            </>
                        ) : '' }
                        <div class="data">
                            <h4>Status</h4>
                            <p>{character.status}</p>
                        </div>
                    </div>
                    <div class="projects_data">
                        <div class="data">
                            <h4>Appreared</h4>
                            <p>{character.appearance}</p>
                        </div>
                        <div class="data">
                            <h4>Actor Who Potrayed</h4>
                            <p>{character.portrayed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

)}

export default CharacterId;
