import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react'

import './styles.css'
import {GiBrazil} from 'react-icons/gi'
import {FcGoogle} from 'react-icons/fc'
import axios from 'axios'

interface UFs{
    sigla: string
}

interface Cities{
    nome: string
}

const Index = () => {

    const [uf, setUf] = useState<string[]>([])
    const [city, setCities] = useState<string[]>([])

    
    const [selectedUf, setSelectedUf] = useState('0')
    const [selectedCity, setSelectedCity] = useState('0')
    
    const [loadMSG, setLoadMSG] = useState('')


    //LOAD UF's
    useEffect(() => {
        axios.get<UFs[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
            const ufList = response.data.map(item => item.sigla)
            setUf(ufList)
        })
    },[])

    //LOAD CITIES
    useEffect(() => {
      if(selectedUf === '0'){
          return
      }
        axios.get<Cities[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
            const citiesList = response.data.map(item => item.nome)
            setCities(citiesList)
        })
      
    }, [selectedUf])

    //SET THE SELECTED UF
    function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>){
        const val = event.target.value
        setSelectedUf(val)
    }

    //SET  THE SELECTED CITY
    function handleSelectedCity(event : ChangeEvent<HTMLSelectElement>){
        const val = event.target.value
        setSelectedCity(val)
    }

    const searchDestiny = async (event: FormEvent) => {
        event.preventDefault()
        setLoadMSG(`Buscando por informações...`)
        setTimeout(() => {
            if(selectedCity === '0' || selectedUf === '0'){
                setLoadMSG('Não foi possivel encontrar dados de acordo com o município selecionado.')
                window.alert('Selecione um município para continuar com a busca.')
             }else{
             window.open(`https://www.google.com.br/search?q=${selectedCity}+${selectedUf}`)
             setLoadMSG('')
         }
     },2000)
    }

    return (
        <div className="main-container">
            <div className="header-bar">
                <h1>IBGE Location <GiBrazil size={28} color='yellow' style={{backgroundColor: '#6ba32f'}}/></h1>
            </div>
            <div className="submit-container">
                <form>
                    <h1>Descubra dados do seu município</h1>
                    <h4>Selecione uma UF e uma cidade para pesquisar dados do seu município</h4>
                    <select name="uf" id="uf" onChange={handleSelectedUf}>
                        <option value="0">Selecione uma UF</option>
                        {uf.sort().map((item, index) => (
                            <option key={index.toString()} value={item}>{item}</option>
                        ))}
                    </select>
                    <select name="uf" id="uf" onChange={handleSelectedCity}>
                        <option value="0">Selecione uma cidade</option>
                        {city.sort().map((item, index) => (
                            <option key={index.toString()} value={item}>{item}</option>
                            ))}
                    </select>
                <button onClick={searchDestiny}><FcGoogle size={16} /></button>
                </form>
            </div>
            <div className="info-container">
                <p>{loadMSG}</p>
            </div>
        </div>
    )
}

export default Index