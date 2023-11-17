"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import NewsCard2 from '@/components/NewsCard2';
import NewsCard from '@/components/NewsCard';

import "@/css/news.css"


export default function News() {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([] as any)

    async function getNews() {
        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=estate&apiKey=c7dbc68b257f44c48106a62cdc9b43ba`);
        setNews(data.articles);
        console.log(news)
        console.log(data.articles)
        setLoading(false);
    }

    const [selectedId, setSelectedId] = useState(-1)

    useEffect(() => {
        getNews();
    }, [])

    const [query, setQuery] = useState("");
    const [country, setCountry] = useState("");

    async function searchQuery() {
        console.log(query);

        setLoading(true);
        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=c7dbc68b257f44c48106a62cdc9b43ba`);
        setNews(data.articles);
        setLoading(false);
    }
    async function searchCountry() {
        setLoading(true);
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=c7dbc68b257f44c48106a62cdc9b43ba`);
        setNews(data.articles);
        setLoading(false);
    }

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            <div className='news_cards mt-4' >
                <div className='p-5 px-20 bg-sky-500 rounded-3xl border-4 border-stone-50'>
                    <label className='text-stone-800 text-center'>Query : </label>
                    <input type="text" onChange={(e) => setQuery(e.target.value)} />
                    <button className="bg-green-400" onClick={searchQuery}>Search</button>
                </div>
                <hr />
                <div className='p-5 px-20 bg-sky-500 rounded-3xl border-4 border-stone-50'>
                    <label className='text-stone-800 text-center'>Country : </label>
                    <input type="text" onChange={(e) => setCountry(e.target.value)} />
                    <button className="bg-green-400" onClick={searchCountry}>Search</button>
                </div>
            </div>

            <div className={selectedId > -1 ? 'news_cards news_active' : "news_cards"} >
                {news.map((data: any, id: any) => (
                    <>

                        <motion.div layoutId={id.toString()} onClick={() => { setSelectedId(id); console.log(selectedId) }}>
                            <NewsCard
                                title={data.title}
                                img={data.urlToImage}
                                content={data.content}
                                author={data.author}
                                date={data.publishedAt}
                                source={data.source}
                            />
                            {/* <motion.h5>{data.title}</motion.h5>
                        <motion.img src={data.urlToImage}></motion.img> */}
                        </motion.div>
                        {selectedId === id &&
                            1}
                    </>

                ))}
            </div>
            <div className='selected'>
                <AnimatePresence>
                    {selectedId > -1 && (
                        <motion.div layoutId={selectedId.toString()} className='scale-150 bg-slate-600'>
                            <NewsCard2
                                title={news[selectedId].title}
                                img={news[selectedId].urlToImage}
                                content={news[selectedId].content}
                                description={news[selectedId].description}
                                author={news[selectedId].author.name}
                                date={news[selectedId].publishedAt}
                                source={news[selectedId].source}
                                url={news[selectedId].url}
                                close={() => setSelectedId(-1)}
                            />
                            {/* <motion.h5>{news[selectedId].title}</motion.h5>
                            <motion.img src={news[selectedId].urlToImage}></motion.img>
                            <motion.button onClick={() => setSelectedId(-1)} >Close</motion.button> */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}
