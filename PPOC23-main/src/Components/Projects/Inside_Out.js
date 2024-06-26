import React from 'react'
export default function () {
  return (
    <article class="blog-single">
        {/* <!--Hero Section starts--> */}
        <div class="page-header page-header--single" style={{"background-image": "url(https://i.postimg.cc/q7yKhQh6/Inside-out.jpg)"}}>
            <div class="row page-header__content">
                <div class="col-full">
                    <h1 class="display-1">
                    Inside Out
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
                    <h2>Inside Out</h2>
                    <p>This project was a comprehensive examination of international ranking organizations, with a primary focus on understanding the internal mechanisms that underlie the creation of rankings based on a variety of parameters. The research involves a multi-faceted approach, encompassing the historical context, mission, values, methodology, data sources, and transparency of these organizations.
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}
