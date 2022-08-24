import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { CalendarOutlined } from "@ant-design/icons";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled(DatePicker)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    height: 35px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #ccc;
    transition: all 0.2s ease-in-out;
    &:hover {
        border-color: #00acef;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `;

const Calendar = styled(CalendarOutlined)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

interface AvailabilityProps {
    startDate: Date,
    endDate: Date,
    setStartDate: Function,
    setEndDate: Function,
}

const Availability = (props: AvailabilityProps) => {

    const checkStartDate = (date: Date) => {

        const today = new Date();

        // get the date after the input date
        const datePlusOne = new Date(date);
        datePlusOne.setDate(datePlusOne.getDate() + 1);

        // checking if start date is valid
        if (today < date) {
            props.setStartDate(date);
        }

        // checking if end date is valid
        if (date > props.endDate) {
            props.setEndDate(datePlusOne);
        }
        else {
            props.setStartDate(today);
        }
    }

    const checkEndDate = (date: Date) => {

        const datePlusOne = new Date(props.startDate);
        datePlusOne.setDate(datePlusOne.getDate() + 1);

        if (date > props.startDate) {
            props.setEndDate(date);
        }

        else {
            props.setEndDate(datePlusOne);
        }
    }

    return (
        <Container>
            <DateContainer>
                Start Date
                <div style={{
                    position: "relative",
                }}>
                    <StyledDatePicker
                        selected={props.startDate}
                        onChange={(date: Date) => checkStartDate(date)}
                    />
                    <Calendar />
                </div>
            </DateContainer>
            <DateContainer>
                End Date
                <div style={{
                    position: "relative",
                }}>
                    <StyledDatePicker
                        selected={props.endDate}
                        onChange={(date: Date) => checkEndDate(date)}
                    />
                    <Calendar />
                </div>
            </DateContainer>
        </Container>

    );
};


export default Availability;