<template>
  <section class="section container">

    <div class="tile is-ancestor">
        <div class="tile is-3 is-parent box__menu sticky">
            <div class="tile is-child box">
                <div class="box__content">
                    <p class="title-profile">Headless 0.01a</p>
                    <div class="profile__info-parent">
                            <div class="profile__nav">
                                <ul class="profile__nav-list">
                                    <li><a href="#introduction">Introduction</a></li>
                                    <li><a href="#expectation">Expectation</a></li>
                                    <li><a href="#libraries">Libraries</a></li>
                                    <li><a href="#usage">Usage</a></li>
                                    <li><a href="#restapi">REST API</a></li>
                                    <li><a href="#roadmap">Roadmap</a></li>
                                </ul>
                            </div>
                
                    </div>
                </div>
            </div>
        </div>

        <div id="introduction" class="tile is-9 is-parent is-vertical">
            <div class="tile is-child box no-mb">
                <div class="box__content">
                    <h1 class="title-box">Introduction</h1>
                <p class="box__paragraph">Welcome,<br>
                    Why Headless? In a fast world with need fast tools able to scale when it requires.
                    Headless combined the modern Development to a simple and readable code.
                    Headless was made as a modern CMS based on MongoDB, Express, Nodejs built on security with passportjs and express-session, it can be configured with oAuth 6 and JWT inside the middleware with few simple steps. Headless 0.01a gives you as a developer a readable code which can be used by you and your team with an intermediate knowledge of Javascript.
                    Headless 0.01a includes a solid security and a full configurable database with a simple link, the first version includes an EJS template engine that will be replaced from Vue.js to improve the UX.
                    </p>
                </div>
            </div>
            <div id="expectation" class="transparent-box"></div>
            <div class="tile is-child box no-mb">
                <div class="box__content">
                    <h1 class="title-box">Expectation</h1>
                <p class="box__paragraph">As any Alpha version the first step is to share how the code is organised and what ideas bring to the table. At this state is it not much different from an advanced CRUD with plenty of functions built-in and already can suite any day life for small enterprise.
                    Headless has got a clear Roadmap and hoping this can help developers to build so many backend and personalise their own APIs in no time.
                    </p>
                </div>
            </div>
            <div id="libraries" class="transparent-box"></div>
            <div class="tile is-child box no-mb">
                <div class="box__content">
                    <h1 class="title-box">Libraries</h1>
                <p class="box__paragraph">sendgrid/mail, types/date-fns, axios, cookie-parser, cors, date-fns, ejs, express, express-ejs-layouts, express-session, lodash, mongodb, mongoose, morgan, multer, passport, passport-google-oauth20, passport-local-mongoose, sendgrid, sharp, uuid, validator.</p>
                </div>
            </div>
            <div id="usage" class="transparent-box"></div>
            <div class="tile is-child box no-mb">
                <div class="box__content">
                    <h1 class="title-box">Usage</h1>
                <p class="box__paragraph">In order to interact with Headless Alpha 0.01a we invite the user to create their own account, activate with a  simple link that will be waiting in your inbox, create profile inside the dashboard in order to decentralised the account from the profile and create few boxs or upload a profile picture.
                    The profile picture is stored in binary and converted to base64 on the client to protect from simple or bot malicious attack.
                    </p>
                </div>
            </div>
            <div id="restapi" class="transparent-box"></div>
            <div class="tile is-child box no-mb">
                <div class="box__content">
                    <h1 class="title-box">REST API</h1>
                <p class="box__paragraph">For fetching the data from the RESTAPI it may be a good Idea to use boxMAN.
                    You will find below a PDF with the REST API Routes available so far.<br>
                    <a class="global__subtitle" target="_blank" href="/docs/REST_API_DEMO.pdf">REST_API_ROUTES</a>
                    </p>
                </div>
            </div>
            <div id="roadmap" class="transparent-box"></div>
            <div class="tile is-child box no-mb">
                <div class="box__content">
                    <h1 class="title-box">Roadmap</h1>
                    <p class="global__subtitle">Headless Alpha 0.33a // September 2022</p>
                    <p class="box__paragraph">- Ability to create your own REST APIs without coding, hit the route, boom… Done.</p>
                    <p class="box__paragraph">- Admin can control and delete any collection from the dashboard.</p>
                    <p class="box__paragraph">- Complete Pagination will be delivered through JSON data.</p><br>
                    <p class="global__subtitle">Headless Alpha 0.66a // November 2022</p>
                    <p class="box__paragraph">- VUE.js is part of the interface and the user Experience overall has improved.</p>
                    <p class="box__paragraph">- API routes have the choice to be protected.</p>
                    <p class="box__paragraph">- CORS can be controlled by the UX and allows only the genuine clients.</p><br>
                    <p class="global__subtitle">Headless Alpha 0.99a // January 2023</p>
                    <p class="box__paragraph">- Testing period will involve plenty of developers.</p>
                    <p class="box__paragraph">- You will be able to configure your SMTP provider.</p><br>
                    <p class="global__subtitle">Headless Beta 1.0 // March 2023</p>
                    <p class="box__paragraph">- We are on GitHub</p>
                    <p class="box__paragraph">- Create a community</p>
                </div>
            </div>
        </div>

    </div>
</section>
</template>

<script>
export default {
  
};
</script>
