import React from 'react'
import Banner from '../../components/Banner'
import Trending from '../../components/TrendingList/Trending'
import Header from '../../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Trending />
        </div>
    )
}

export default Home
