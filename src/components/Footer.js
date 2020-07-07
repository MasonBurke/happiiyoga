import React from 'react' 
import  {Button} from 'react-bootstrap'


const styles = {
    footer:{
    
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '99%',
        backgroundColor: '#BF955E',
        color: 'white',
        fontFamily:'Verdana-Italic',
        fontSize:15,
       
    },
    p:{
        // marginTop:5,
        marginBottom:3
    }
}


function Footer(){
    return (
<footer style={styles.footer}>
<p style={styles.p}> Mason Burke Full Stack Web Developer 2020 <Button href="contact" variant="secondary" style={{fontSize:8, opacity:'80%'}}> Contact now!</Button> </p>

</footer>
    )
}

export default Footer