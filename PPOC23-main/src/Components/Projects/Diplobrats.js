import React from 'react'
export default function () {
  return (
    <article class="blog-single">
        {/* <!--Hero Section starts--> */}
        <div class="page-header page-header--single" style={{"background-image": "url(https://i.postimg.cc/QMRV52ZM/Whats-App-Image-2023-10-28-at-9-21-40-PM.jpg)"}}>
            <div class="row page-header__content">
                <div class="col-full">
                    <h1 class="display-1">
                    Diplobrats
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
                    <h2>Diplobrats</h2>
                    <p>This project was based upon the theme of understanding International Relations and the history of different nations with respect to our country. It started with a brief study of nations in the context of their trade channels, economy, border management, peace, and harmony. We also dealt with understanding the functioning of organizations like NATO, WHO, SAARC, United Nations, G20, and many more. To come to a conclusion, we created an imaginary real-world scenario for mentees to draft in order to act upon it in an international event and debate about such global issues.
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}
