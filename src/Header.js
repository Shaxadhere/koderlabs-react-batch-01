import React from "react"

const Header = ({ text, heading, subHeading,style, ...rest }) => {
    var count = 0
    const onIncrement = () => {
        count = count + 1
    }
    return (
        <h1 style={style} {...rest}>VALUE:{text}</h1>
    )
}

// export default Header

const myHoc = (Component) => {

    return (props) => {
        return (
            <div>
                <Component {...props} />
            </div>
        )
    }
}

export default myHoc(Header)


