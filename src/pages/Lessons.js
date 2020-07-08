import React from 'react'

const styles={
    body:{
        textAlign: 'center',
        margin:25,
    },
    h2:{
        fontFamily: 'Bad Script, cursive',
    },
    p:{
        fontFamily: 'Open Sans Condensed, san-serif'
    },
}


const Lessons = () => {
    return(
<div style={styles.body}>
<br/>
<h2 style={styles.h2}>Lesson Information</h2><hr width="75%"/>

<p style={styles.p}>
    If you'd like to book a class you can click <a href="#"> here</a> or <a href="#"> here</a>
</p>


<p style={styles.p}>Private lessons: <br/><br/>
$80 / hour <br/>
$50 / 45 mins <br /><br/>
With private lessons you get one on one instruction, and a completely personalized class for you and your needs.  
</p>


</div>
    )
}

export default Lessons