import React, {Component} from 'react'

class Index extends Component{
    render(){
        return(
            <div>

                <header id="header">
                    <nav id="main-menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Me</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Get in Touch</a></li>
                        </ul>
                    </nav>
                    {/*<img id="logo" src="img/me.png" alt="This is me."/>*/}
                </header>

                <div id="main" role="main">

                    <article id="content">
                        <h1>Welcome to My Site!</h1>
                        <section id="introduction">
                            <h2>Hi, I am Mr. Website!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui pariatur in iure. Rem, aliquid, cumque. Id tenetur, facere aut odio dolores qui, iste sit voluptates ullam doloribus suscipit quasi obcaecati alias voluptatum error ab <a href="#">repellendus</a> deleniti ipsa quae sint! Nobis tempora cupiditate voluptate earum fuga laudantium vitae deleniti consectetur sapiente.</p>
                            <button className='warning-button'>Something Went Wrong</button>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas possimus, et deleniti commodi sit, excepturi! Perspiciatis omnis aut impedit saepe consequatur quis dolores distinctio cumque aperiam velit repellendus dicta temporibus, a ducimus exercitationem, ratione harum quos voluptatem totam possimus eaque, porro quo voluptatum voluptates. Ducimus facere quod laborum, odit numquam amet. Ea sequi, harum neque, alias ratione iure blanditiis, accusamus reprehenderit impedit numquam libero suscipit voluptatibus enim. Exercitationem placeat, repellat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eius sapiente excepturi saepe vero maxime! Laborum quidem debitis labore quia magni tempore <a href="#">voluptatibus</a> omnis pariatur consectetur, molestiae nisi et ratione?</p>


                        </section>
                        <section id="promo">
                            <h2>Check Out My Work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex omnis atque illo odio labore, debitis, qui quo? Odio similique illum eligendi distinctio repellendus quod inventore, aliquam modi, recusandae labore dignissimos aperiam expedita unde ea rem iusto magni ipsum nisi neque!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum quod et provident consectetur dolores, itaque quae <a href="#">dignissimos voluptatem</a>, accusamus, aut omnis ipsa quidem error magni facilis excepturi explicabo repudiandae. Velit beatae, facere magni. Odio obcaecati possimus reiciendis incidunt quo expedita quis ipsum quibusdam omnis, numquam beatae minima iure tenetur impedit totam ea esse deleniti eum? Minima maiores expedita, accusamus.</p>
                        </section>
                    </article>

                    <aside id="sidebar">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>
                    </aside>

                </div>

                <footer id="footer">

                </footer>

            </div>
        )
    }
}

export default Index