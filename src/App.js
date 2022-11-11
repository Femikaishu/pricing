import React from 'react';


const PRICING = [
    {
        name:"Personal" ,
        features:"custom domains",
        description:"Sleeps after 30 mins of inactivity",
        cost: "Free",
        buttonName: "Sign Up",
        url:"https://www.asaecenter.org/-/media/ASAE/Images/Resources/Articles/Associations-Now/2018/November-December/athitakis_name_your_price/athitakis_name_your_price_39x22.ashx?h=440&w=780&la=en&hash=796B45CC66A5E3A6F26D355BAC9AB44A93F4D9B5",
    },
    {
        
        name:"Small team" ,
        features:"Never sleeps",
        description:"Multiple workers for more powerful apps",
        cost: "Free",
        buttonName: "Sign Up",
        url:"https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/1887/content_rawpixel-com-570908-unsplash.jpg",
    },
    {
        name:"Enterprise",
        features:"Dedicated",
        description:"Simple horizontal scalability",
        cost: "$400",
        buttonName: "Free trial",
        url:"https://thumbs.dreamstime.com/b/word-pricing-written-wooden-cubes-wooden-background-next-to-pen-glasses-word-pricing-written-wooden-215958671.jpg",
    },
];

function App() {
    return (
        <div className='py-24  bg-blue-400'>
        <div className='container rounded-lg mx-auto bg-white '>
            <div className="grid md:grid-cols-3 sm:grid-row-1 ">
                {PRICING.map((pricing) => (
                    <div className="border rounded-lg  p-10">
                      <div className="mb-8 ">
                            <img  src={pricing.url} />
                        </div>
                       
                        <h3 className='text-xl font-semibold text-center text-gray-400 mb-4'>{pricing.name.toUpperCase()}</h3>
                        <p className='text-center  text-blue-600 text-xs font-bold p-5 uppercase'>{pricing.features}</p>
                        <hr class="my-3 bg-gray-400 border-5 "></hr>     
                        <p className=' text-center font-bold text-xs text-blue-600  uppercase '>{pricing.description}</p>
                        <hr class="my-5  bg-gray-400 border-5 "></hr>     
                        <p className='text-3xl font-semibold text-center my-2 text-blue-600 py-10'>{pricing.cost.toUpperCase()}</p>
                        <center><button className="md:px-20 md:py-4 sm:px-18 sm:py-2 border border-blue-400 focus:bg-blue-400 hover:bg-blue-200 items-center rounded-md justify-center item-center  text-md text-blue-600 ">{pricing.buttonName}</button></center>

                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default App;