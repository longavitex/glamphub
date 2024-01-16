import React from 'react'

interface Props {
    title: string
    subTitle: string
}

const TextHeading: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <>
            <div className="heading flex flex-col items-center justify-center">
                <div className="heading2 text-center">{title}</div>
                <div className="body2 text-variant1 text-center mt-3">{subTitle}</div>
            </div>
        </>
    )
}

export default TextHeading