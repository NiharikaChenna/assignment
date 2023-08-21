import axios,{AxiosResponse} from 'axios'
import React ,{useEffect, useState} from 'react'

interface newsData{
  author:string;
  source:{
    id:string
  }
  title:string;
  url:string;
}

interface ApiResponse {
  articles:newsData[]
}

export default function ApiCall() {
  const [apiData,setApiData] = useState<newsData[]>([])
    const fetchData = async ()=>{
        const url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=693c6612d48f4ee99703c3f853978724"
        const response:AxiosResponse = await axios.get<ApiResponse[]>(url)
        const data:Array<newsData> = response.data.articles;
        console.log(data)
        setApiData(data)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
       {
        apiData.map((news:newsData,index:number)=>{
           return(
            <div key={index}>
                <h1>{news.author}</h1>
                <p>{news.title}</p>
                <a href={news.url}>url</a>
            </div>
           )
        })
       }
    </div>
  )
}

//https://api.nasa.gov/planetary/apod?api_key=1mnRFHXnWo7vua4lXgqTBKTtc0qrh73gAzOgNYnC