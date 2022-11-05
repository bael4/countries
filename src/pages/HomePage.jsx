import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";
import { useNavigate } from 'react-router-dom';
const HomePage = ({countries,setCountries}) => {
   
    const [filteredCountries, setFilteredCountries] = useState(countries);
    console.log(countries);

    useEffect(() => {
        if(!countries.length) 
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);
    const navigate = useNavigate()
  
    const handleSearch = (search, region) =>{
        let data = [...countries]
        if(region){
            data = data.filter(c=>c.region.includes(region))
        }
        if(search){
            data = data.filter(c=>c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);
    return (
    <>
       <Controls onSearch={handleSearch} />
        <List>
          {filteredCountries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };
            return <Card key={c.name} {...countryInfo} onClick={()=>navigate(`/country/${c.name}`)}/>
          })}
        </List>
    </>
  )
}

export default HomePage
