import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react'
import { Icon } from '../components/Icon';
import { Row } from '../components/Row'
import { Button } from '@material-ui/core'

const stories = storiesOf('App Test', module)


stories.add('App', () => {

    const [counter, setCounter] = useState(0)



    return (
        <>
            <div style={{ width: '100vw' }} onClick={() => {
                let temp = counter;
                setCounter(temp + 1)
                console.log(temp)
            }}>
                <Row palette={["e63946", "f1faee", "a8dadc", "457b9d", "1d3557"]} counter={counter}></Row>
                <Row palette={["011627", "fdfffc", "2ec4b6", "e71d36", "ff9f1c"]} counter={counter}></Row>
                <Row palette={["227c9d", "17c3b2", "ffcb77", "fef9ef", "fe6d73"]} counter={counter}></Row>
                <Row palette={["ffbe0b", "fb5607", "ff006e", "8338ec", "3a86ff"]} counter={counter}></Row>
                <Row palette={["0b3954", "087e8b", "bfd7ea", "ff5a5f", "c81d25"]} counter={counter}></Row>
            </div>
        </>
    )
});