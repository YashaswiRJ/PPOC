import React from 'react'
export default function () {
  return (
    <article class="blog-single">
        {/* <!--Hero Section starts--> */}
        <div class="page-header page-header--single" style={{"background-image": "url(https://i.postimg.cc/BZL0xyZz/Guesstimating-GDP-img.png)"}}>
            <div class="row page-header__content">
                <div class="col-full">
                    <h1 class="display-1">
                        Guesstimating GDP
                    </h1>
                    {/* <ul class="page-header__meta">
                        <li class="author">By: <a href="#">Aniket Shivhare and Mohit Jangid</a></li>
                    </ul> */}
                </div>
            </div>
        </div>
        {/* <!--Hero Section Ends--> */}
        <div class="blog-content-wrap">
            <div class="row blog-content">
                <div class="col-full blog-content__main">
                    <h2>Guesstimating GDP</h2>
                    <p>This project was a meticulously planned and executed endeavor aimed at achieving a profound understanding of Gross Domestic Product (GDP) and employing advanced data analytics and machine learning techniques to predict India's GDP. It commences with an in-depth exploration of the complexities associated with GDP, followed by a rigorous analysis of historical data coupled with the comprehensive consideration of various influential factors from the past.
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}
