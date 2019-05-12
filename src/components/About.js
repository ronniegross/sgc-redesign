import React, { Component } from 'react'
import styled from 'styled-components'
import Slideshow from './Slideshow'

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
    .quick-link-box {
        /* background-color: pink; */
        background-color: white;
        width: 260px;
        height: 150px;
        border-radius: 5px;
        /* border: 1px solid #888888; */
        /* box-shadow: 2px 2px #888888; */
        box-shadow: 1px 1px 2px 2px #DEDEDE;
    }
    .slideshow-container {
        width: 60%;
        margin: 0 auto;
    }
    .history-container {
        margin: 0 70px 0 70px;
    }
`

export default class About extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Thinking about making your first skydive? Check out our quick links to learn more!</h1>
                    <div className="quick-link-box-container">
                        <div className="tandem-program quick-link-box">

                        </div>
                        <div className="staff quick-link-box">

                        </div>
                        <div className="static-line-program quick-link-box">

                        </div>
                    </div>
                    <h1>The legend of Skydive Greene County</h1>
                    <div className="slideshow-container">
                        <Slideshow />
                    </div>
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
