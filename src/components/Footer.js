import React from 'react' 
import { FaInstagram, FaYoutube, FaEnvelope} from 'react-icons/fa';


const styles = {
    footer:{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '99%',
        backgroundColor: '#ababab',
        color: 'white',
        fontFamily:'Verdana-Italic',
        fontSize:15,
    },
    p:{
        marginBottom: 15,
        marginTop:15
    },
    p1:{
        marginRight:22,
        display: 'inline'
    },
    icon:{
        margin:1,
        display: 'inline',
        color: 'black',
        border: 'white, 1px'
    }
}


function Footer(){
    return (
<footer style={styles.footer}>
<p style={styles.p, styles.p1}> Happii Yoga Socials
</p>
<a href="https://www.youtube.com/channel/UCojSDQVQ-gxxflzRInERwyw/featured" style={styles.icon}>
<FaYoutube style={styles.icon}/>
</a>

<a href="https://www.instagram.com/happiiyoga/" style={styles.icon}>
<FaInstagram style={styles.icon}/>
</a>

<a href="mailto:happiiyoga@gmail.com" style={styles.icon}>
<FaEnvelope style={styles.icon}/>
</a>

</footer>
    )
}

export default Footer