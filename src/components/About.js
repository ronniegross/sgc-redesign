import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Slideshow from './Slideshow'
import QuickLinksBox from './QuickLinksBox.js'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-content: center; */
    .quick-link-box-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .slideshow-container {
        width: 60%;
        margin: 0 auto;
    }
    .history-container {
        margin: 0 70px 0 70px;
    }
    h1 {
        margin-top: 30px;
    }
    .legend-title {
        margin-bottom: 15px;
    }
    a {
        text-decoration: none;
    }
    .pic-title {
        margin-bottom: 15px;
    }
    .history-container {
        margin-top: 30px;
    }
    @media (max-width: 850px) {
        .quick-links-title {
            margin: 30px;
        }
    }
    @media (max-width: 700px) {
        .quick-link-box-container {
            flex-direction: column;
            align-items: center;
            /* justify-content: center; */
        }
    }
`

const Pic = styled.img`
    width: 90%;
`

const TandemInfo = {
    title: "Tandem Program",
    info: "Looking for the thrill of your life? Curious about your first skydive? Start here!"
}

const Tandem = () => {
    return <QuickLinksBox quickLink={TandemInfo} />
}

const StaffInfo = {
    title: "Staff",
    info: "Meet the people who will be curating your once in a lifetime experience."
}

const Staff = () => {
    return <QuickLinksBox quickLink={StaffInfo} />
}

const StaticLineInfo= {
    title: "Static Line Program",
    info: "Learn how to become a licensed skydiver. Classes held weekly."
}

const StaticLine = () => {
    return <QuickLinksBox quickLink={StaticLineInfo} />
}

export default class About extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1 className="quick-links-title">Thinking about making your first skydive? Check out our quick links to learn more!</h1>
                    <div className="quick-link-box-container">
                        <Link to={'/firsttimejumpers'}><QuickLinksBox quickLink={TandemInfo}/></Link>
                        <Link to={'/firsttimejumpers'}><QuickLinksBox quickLink={StaffInfo}/></Link>
                        <Link to={'/firsttimejumpers'}><QuickLinksBox quickLink={StaticLineInfo}/></Link>
                        {/* <div className="tandem-program quick-link-box">

                        </div>
                        <div className="staff quick-link-box">

                        </div>
                        <div className="static-line-program quick-link-box">

                        </div> */}
                    </div>
                    <h1 className="pic-title">Pic of the Week</h1>
                    <Pic src="https://www.skydiveohio.com/wp-content/uploads/G0041216-2-1-3000x1734.jpg" alt="pic of the week"></Pic>
                    <h1 className="legend-title">The legend of Skydive Greene County</h1>
                    {/* <div className="slideshow-container">
                        <Slideshow />
                    </div> */}
                    <Pic src="https://i.pinimg.com/originals/d6/ce/ed/d6ceede36d17c474de6cc9dca7d6db54.jpg" alt="the legend"></Pic>
                    <div className="history-container">
                        <p>Kogi truffaut dreamcatcher umami XOXO. Kitsch banh mi jean shorts twee, dreamcatcher sustainable snackwave direct trade health goth leggings hoodie truffaut. You probably haven't heard of them trust fund kickstarter humblebrag squid 90's poke beard typewriter kombucha shabby chic gastropub ennui shaman tumblr. Kogi pork belly iceland tote bag.
    
                        Next level cronut church-key activated charcoal kickstarter, snackwave put a bird on it forage tbh pinterest bitters deep v raclette. Artisan mlkshk lumbersexual chillwave mumblecore, vape cliche cronut sustainable cold-pressed lo-fi paleo. Palo santo beard taiyaki next level umami gluten-free direct trade tousled salvia selvage pour-over tattooed bushwick sustainable. Pabst wolf kale chips freegan +1, jianbing VHS street art coloring book roof party cloud bread master cleanse banjo meh vaporware.
                        
                        Marfa VHS chicharrones ugh tumeric. Knausgaard irony slow-carb, adaptogen fanny pack fixie whatever. DIY subway tile yr, keffiyeh seitan godard everyday carry actually food truck microdosing swag cloud bread master cleanse adaptogen kale chips. Yr salvia small batch, etsy brunch selfies normcore XOXO copper mug actually roof party yuccie keytar.
                        
                        Ramps keytar squid umami polaroid fixie. Etsy narwhal gochujang godard heirloom, tote bag meggings 90's man bun af kogi. Snackwave organic vexillologist, ennui raw denim prism 90's dreamcatcher coloring book. Neutra brooklyn raw denim succulents. Crucifix irony truffaut godard enamel pin. VHS 90's kinfolk, hot chicken vape taiyaki drinking vinegar photo booth synth gastropub shaman adaptogen. Drinking vinegar lumbersexual austin cold-pressed, blog brooklyn meh tilde.
                        
                        Actually retro wayfarers, tousled meh subway tile flexitarian messenger bag williamsburg migas keytar. Chartreuse food truck viral gastropub kogi etsy swag raw denim selfies. Cred portland 8-bit banjo, bushwick letterpress roof party thundercats gentrify cliche pok pok subway tile tumblr viral VHS. Mumblecore fanny pack taxidermy, chicharrones neutra small batch gentrify disrupt heirloom green juice try-hard. Sriracha chartreuse lo-fi snackwave. 8-bit gastropub kombucha semiotics.</p>

                    </div>
                </div>
            </Wrapper>
        )
    }
}
