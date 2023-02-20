import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Food() {
    useEffect(() => {
        getAllNews();
    });

    const [news1, setNews1] = useState([]);
    const getAllNews = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=15').then((res) => {
            setNews1(res.data);
        });
    };
    return (
        <div>
            {news1.map((value) => (
                <div className="mb-3 container">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={value.yoast_head_json.og_image[0].url} className="img-fluid rounded-start image1" alt="random" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{value.title.rendered}</h5>
                                <p className="card-text">{value.excerpt.rendered}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Food;