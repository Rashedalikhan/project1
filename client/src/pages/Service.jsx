import React, { useEffect, useState } from 'react';
import { UseCartContext } from "../store/ContextStore";
import { Card } from '../components/Card';



export const Service = () => {
    const { isLoding,filterProducts} = UseCartContext();
    // console.log(filterProducts);
    if (isLoding) {
        return <h1>..........Loding</h1>
    }

    return (
        <>
            <div className='flex relative flex-row w-full justify-between m-auto'>
                <section className='flex flex-col absolute w-4/12 m-auto p-4'>
                    <div>
                        <h1>this is serch filter</h1>
                    </div>
                    <div>
                        <h1>this is catagore filter</h1>
                    </div>
                    <div>
                        <h1>this is color filter</h1>
                    </div>
                </section>
                <section className='flex flex-col w-8/12 m-auto'>
                    <section className='flex flex-row justify-between m-auto'>
                        <div>this is </div>
                        <div>products quentity</div>
                        <div> sort by price</div>
                    </section>
                    <section className='m-auto'>
                        <h1>products</h1>
                        <div>
                            {
                                filterProducts.map((curElem, index)=>{
                                    return <Card key={index} data={curElem}/>
                                })
                            }
                        </div>
                    </section>
                </section>
            </div>
        </>

    );
};

