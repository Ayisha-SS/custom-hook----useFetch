// import React from "react";
// import useFetch from "./useFetch";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// function FetchData(){
//     const url = 'https://api.themoviedb.org/3/discover/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6';
//     const { data, loading, error } = useFetch(url);
    
//     if (loading) {
//         return <p>Loading...</p>
//     }
//     if(error){
//         return <p>Error:{error.message}</p>
//     }

//     const settings = {
//         dots: false,
//         infinite:false,
//         speed:500,
//         slidesToShow:4.5,
//         slidesToScroll:5,
//     };

//     return (
//         // <div>
//         //     <h1>Movie Data</h1>
//         //     <pre>{JSON.stringify(data,null,2)}</pre>
//         // </div>
//         <div className="container">
//             <div>
//                 <h4 className="heading">Movie Data</h4>
//             </div>
//             <div className="content">
//                 <ul className="data-list">
//                     {loading ? (
//                         <p className="loading">Loading data...</p>
//                     ) : (
//                         <Slider className="slider" {...settings}>
//                             {data.map((item,index) => (
//                                 <li>
//                                     <div className="list-cntnt">
//                                         <div className="image">
//                                             <img key={index} 
//                                                 src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
//                                                 alt={item.title} 
//                                                 style={{marginBottom:"8px",width:"100%",height:"200px"}}
//                                             />
//                                         </div>
//                                         <span className="title">{item.title}</span>
//                                     </div>
//                                 </li>
//                             ))}

//                         </Slider>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default FetchData;

import React from "react";
import useFetch from "./useFetch";
import Slider from 'react-slick';

function FetchData() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=5bcc0dd557136d5008b5eebbc96092f6`;
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 5,
    };

    return (
        <div className="container">
            <div>
                <h4 className="heading">Movie Data</h4>
            </div>
            <div className="content">
                <ul className="data-list">
                    {Array.isArray(data) ? (
                        <Slider className="slider" {...settings}>
                            {data.map((item, index) => (
                                <li key={index}>
                                    <div className="list-cntnt">
                                        <div className="image">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                                                alt={item.title}
                                                style={{ marginBottom: "8px", width: "100%", height: "200px" }}
                                            />
                                        </div>
                                        <span className="title">{item.title}</span>
                                        <span className="overview">{item.overview}</span>
                                    </div>
                                </li>
                            ))}
                        </Slider>
                    ) : (
                        <div>
                            <p className="loading">No data available.</p>
                            {/* <pre style={{color:"white"}}>{JSON.stringify(data,null,2)}</pre> */}
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default FetchData;
