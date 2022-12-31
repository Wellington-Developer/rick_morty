import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Personagem.css'

interface DataCharacter {
    image: string,
    name: string,
    status: string,
    species: string,
    gender: string,
}

export const Personagem = () => {
    const id = useParams();

    const [ dataPerson, setDataPerson ] = useState<DataCharacter>()

    const getDataFromApi = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id.id}`)
        const data = await response.json()
        
        setDataPerson(data)
    }

    useEffect(() => {
        getDataFromApi()
    }, [])

    if(dataPerson && id.id > 0) {
        return (
            <div className='container-person'>
                <div className='content-person'>
                    <div className={dataPerson.status === 'Alive' ? 'vivo' : 'morto'}></div>
                    <img src={dataPerson.image} />
                    <h1>{dataPerson.name}</h1>
                    <p>{dataPerson.species}</p>
                    <div className='container-gender'>
                        <p>{ dataPerson.gender }</p>
                    </div>
                </div>
            </div>
        )
    }
}