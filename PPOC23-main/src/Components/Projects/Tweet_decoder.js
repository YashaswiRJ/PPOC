import React from 'react'
export default function () {
  return (
    <article class="blog-single">
        {/* <!--Hero Section starts--> */}
        <div class="page-header page-header--single" style={{"background-image": "url(https://i.postimg.cc/3R6Qsj19/Tweet-decoder-img.png)"}}>
            <div class="row page-header__content">
                <div class="col-full">
                    <h1 class="display-1">
                    Tweet Decoder
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
                    <h2>Tweet Decoder</h2>
                    <p>This project was focused on exploring the transformative potential of machine learning within the sphere of public policy. It revolves around the adaptive application of Natural Language Processing (NLP), a tool of artificial intelligence, to discern the polarity of tweets. The core goal of this project is to construct a model with the capability to precisely classify tweets into three distinct categories.
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}
