import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopbyCategory = () => {
    const [toys, setToys] = useState('');
    useEffect(() => {
        fetch(`https://disney-world-toys-server-anika-tasnim-aurony.vercel.app/toys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleBabyToy = () => {
        const category = toys.filter(toy => toy.subcategory === 'baby toy')
        console.log(category)
        setToys(category)
    }
    const handlePrincessToy = () => {
        const Princess = toys.filter(toy => toy.subcategory === 'Disney Princess')
        console.log(Princess)
        setToys(Princess)
    }
    const handleDonaldDuck = () => {
        const Duck = toys.filter(toy => toy.subcategory === 'Donald Duck')
        console.log(Duck)
        setToys(Duck)
    }

    return (
        <div className='bg-[#ede9fe]'>
            <h1 className='text-3xl text-center pt-3'>Shop by Category</h1>
            <div className='w-3/4 mx-auto py-6 '>
                {toys && <Tabs>
                    <TabList>
                        <Tab onClick={handleBabyToy}>Baby Toy</Tab>
                        <Tab onClick={handleDonaldDuck}>Donald Duck</Tab>
                        <Tab onClick={handlePrincessToy}>Disney Princess</Tab>
                    </TabList>

                    {toys &&
                        <TabPanel className="" >
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={toys[0].photo} className="max-w-sm rounded-lg shadow-1xl h-36 " />
                                <div className='ms-6'>
                                    <h1 className="text-3xl font-bold">{toys[0].name}</h1>
                                    
                                    <p className="pt-3 text-1xl "><b>Price:</b> ${toys[0].price}</p>

                                    <p className=" text-1xl"><b>Rating:</b> {toys[0].rating}</p>
                                    <button className='btn btn-ghost text-white my-3 bg-[purple]'><Link to={`/showDetails/${toys[0]._id}`}>View Details</Link></button>


                                </div>
                            </div>
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={toys[1].photo} className="max-w-sm rounded-lg shadow-1xl h-36" />
                                <div className='ms-6'>
                                    <h1 className="text-3xl font-bold">{toys[1].name}</h1>
                                    
                                    <p className="pt-3 text-1xl "><b>Price:</b> ${toys[1].price}</p>

                                    <p className=" text-1xl"><b>Rating:</b> {toys[1].rating}</p>

                                    <button className='btn btn-ghost text-white my-3 bg-[purple]'><Link to={`/showDetails/${toys[1]._id}`}>View Details</Link></button>


                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    }
                    {toys && 
                    <TabPanel>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={toys[0].photo} className="max-w-sm rounded-lg shadow-1xl h-36" />
                                <div className='ms-6'>
                                    <h1 className="text-3xl font-bold">{toys[0].name}</h1>
                                   
                                    <p className="pt-3 text-1xl "><b>Price:</b> ${toys[0].price}</p>

                                    <p className=" text-1xl"><b>Rating:</b> {toys[0].rating}</p>
                                    <button className='btn btn-ghost text-white my-3 bg-[purple]'><Link to={`/showDetails/${toys[0]._id}`}>View Details</Link></button>


                                </div>
                            </div>
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={toys[1].photo} className="max-w-sm rounded-lg shadow-1xl h-36" />
                                <div className='ms-6'>
                                    <h1 className="text-3xl font-bold">{toys[1].name}</h1>
                                    
                                    <p className="pt-3 text-1xl "><b>Price:</b> ${toys[1].price}</p>

                                    <p className=" text-1xl"><b>Rating:</b> {toys[1].rating}</p>

                                    <button className='btn btn-ghost text-white my-3 bg-[purple]'><Link to={`/showDetails/${toys[1]._id}`}>View Details</Link></button>

                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    }
                    {
                        toys && 
                        <TabPanel>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={toys[0].photo} className="max-w-sm rounded-lg shadow-1xl h-36" />
                                <div className='ms-6'>
                                    <h1 className="text-3xl font-bold">{toys[0].name}</h1>
                                    
                                    <p className="pt-3 text-1xl "><b>Price:</b> ${toys[0].price}</p>

                                    <p className=" text-1xl"><b>Rating:</b> {toys[0].rating}</p>

                                    <button className='btn btn-ghost text-white my-3 bg-[purple]'><Link to={`/showDetails/${toys[0]._id}`}>View Details</Link></button>


                                </div>
                            </div>
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={toys[1].photo} className="max-w-sm rounded-lg shadow-1xl h-36" />
                                <div className='ms-6'>
                                    <h1 className="text-3xl font-bold">{toys[1].name}</h1>
                                    
                                    <p className="pt-3 text-1xl "><b>Price:</b> ${toys[1].price}</p>

                                    <p className=" text-1xl"><b>Rating:</b> {toys[1].rating}</p>

                                    <button className='btn btn-ghost text-white my-3 bg-[purple]'><Link to={`/showDetails/${toys[1]._id}`}>View Details</Link></button>

                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    }
                </Tabs>}
            </div>
        </div>
    );
};

export default ShopbyCategory;