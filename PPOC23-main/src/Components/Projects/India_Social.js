import React from 'react'
export default function () {
  return (
    <article class="blog-single">
        {/* <!--Hero Section starts--> */}
        <div class="page-header page-header--single" style={{"background-image": "url(https://i.postimg.cc/Nf2jjFr5/Indias-social-changes.png)"}}>
            <div class="row page-header__content">
                <div class="col-full">
                    <h1 class="display-1">
                    India’s Social Changes
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
                    <h2>India’s Social Changes</h2>
                    <p>This project was focused on comprehensive exploration of the dynamic social landscape in India, with a focus on how societal changes have affected various segments of the population. It encompasses an in-depth examination of the nuanced transformations experienced by different demographic groups, including tribal communities, and the evolution of gender norms from a non binary perspective.
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}
