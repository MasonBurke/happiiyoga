import React from 'react'
import placeholder from "../images/placeholder.png"


const styles = {
    img1:{
        border: 'solid black 1px',
        height: 200,
        margin: 15,
        float: 'left'
    },
    p: {
        marginTop: 5,
        marginLeft: 15,
        marginRight: 10,
    },
    p2:{
        marginBottom: 125,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 10,
    },
    h5:{
        marginTop: 9,
        textAlign: 'center'
    }
}


const Home = () => {
    return(

<>
{/* <Navigation /> */}
<div className="container" style={styles.container}>
<img src={placeholder} style={styles.img1} alt={"Megan"} />

<h5 style={styles.h5}><b>Meet Your Instructor!</b></h5>

<p style={styles.p}>  Welcome to Happii Yoga! I'm Meg, a RYT 200 and an aerial silks certified teacher. My classes first and foremost are a sanctuary of LOVE. My time as a yogi has brought me a sincere gratitude for life, as my heart overflows with happiness and understanding. I do my best to  bring an experience of real connection into every class I teach. I'm committed to creating a space of acceptance and love for all my students and fellow beings. 
</p> <p style={styles.p, styles.p2}>
As an ex- dancer I've always had a passion for movement. It wasn't till I was diagnosed with mental health illness, that I found yoga. Using movement as medicine, yoga has taught me that you can truly love and heal yourself thoroughly through every cell of your body. Happii Yoga is a place for community, support, acceptance, and love. Yoga has taught me so much about who I am as a person, how to treat my mind and body, and everything in existence  around me. I'd love the opportunity to share those teachings and learnings with you. 
Lots of love, 
Meg</p>

</div>

{/* <Footer /> */}

</>
    )

}




export default Home