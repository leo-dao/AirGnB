import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";

const Container = styled.div.attrs((props: DescriptionProps) => (props))`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    `

const StyledTitle = styled.b`
    font-size: 17px;
`

interface DescriptionProps {
    description: string;
    showMore?: boolean;
}

const Description = (props: DescriptionProps) => {

    const defaultHeight = "180px"

    const [showMore, setShowMore] = React.useState(false);
    const [height, setHeight] = React.useState(defaultHeight);

    const handleShowMore = () => {
        setShowMore(!showMore);
        setHeight(showMore ? defaultHeight : "90%");
    }

    const description = props.description.split("\n").map((item, index) => {
        return <span key={index}>{item}<br /></span>
    })

    const numLines = props.description.split("\n").length;
    if (numLines > 4 && !showMore) {
        description[3] = <span key={3}>...<br /></span>
    }

    return (
        <div>
            <Container showMore={props.showMore} style={{
                height: height
            }}>
                <StyledTitle>Description</StyledTitle>
                {description}
            </Container>
            <Button
                onClick={handleShowMore}
                text={showMore ? "Less" : "More"}
                tertiary
            />
        </div>
    )
};

export default Description;