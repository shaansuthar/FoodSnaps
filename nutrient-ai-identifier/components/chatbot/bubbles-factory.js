import React, { useMemo, useEffect, useState, cloneElement, memo, Fragment } from 'react'

const BubblesFactory = ({
    data,
    bubble,
    interval = 1000
}) => {
    const [bubbles, setBubbles] = useState([])
    const [index, setIndex] = useState(null)
    const componentsLength = useMemo(() => { return data?.length }, [data])

    useEffect(() => {
        let count = 0

        setIndex(count)
        count++

        const timer = setInterval(() => {
            if (count === componentsLength) {
                stopBubbles()
                clearInterval(timer)
            } else {
                setIndex(count)
                count++
            }
        }, interval)
    }, [])

    useEffect(() => {
        if (index !== null) {
            setBubbles([
                ...bubbles,
                data[index]
            ])
        }
    }, [index])

    const stopBubbles = () => {
        console.log('stopBubbles - end of sequence')
        // Code here to dispatch next action
    }

    return (
        <Fragment>
            {bubbles.map((component, index) => {
                return cloneElement(bubble, {
                    key: index,
                    data: component
                })
            })}
        </Fragment>
    )
}

export default memo(BubblesFactory)