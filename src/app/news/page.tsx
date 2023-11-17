"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ParticleBackground from '@/components/ParticleBackground';

export default function News() {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([] as any)

    async function getNews() {
        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=estate&from=2023-10-02&apiKey=c7dbc68b257f44c48106a62cdc9b43ba`);
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
        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-10-02&apiKey=c7dbc68b257f44c48106a62cdc9b43ba`);
        setNews(data.articles);
        setLoading(false);
    }
    async function searchCountry() {
        setLoading(true);
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&from=2023-10-02&apiKey=c7dbc68b257f44c48106a62cdc9b43ba`);
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
            <label>Query</label>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <button onClick={searchQuery}></button>
            <button onClick={searchQuery}>Search</button>
            <hr />
            <label>Country</label>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={searchCountry}>Search</button>

            {news.map((data: any, id: any) => (
                <>
                    <motion.div layoutId={id.toString()} onClick={() => { setSelectedId(id); console.log(selectedId) }}>
                        <motion.h5>{data.title}</motion.h5>
                        <motion.img src={data.urlToImage}></motion.img>
                    </motion.div>
                    {selectedId === id &&
                        1}
                </>

            ))}

            <div className='selected'>
                <AnimatePresence>
                    {selectedId > -1 && (
                        <motion.div layoutId={selectedId.toString()} className='scale-150 bg-slate-600'>
                            <motion.h5>{news[selectedId].title}</motion.h5>
                            <motion.img src={news[selectedId].urlToImage}></motion.img>
                            <motion.button onClick={() => setSelectedId(-1)} >Close</motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}
