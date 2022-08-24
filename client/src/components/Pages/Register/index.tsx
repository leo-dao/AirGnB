import React, { useEffect } from "react";
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password';
import Button from "../../Atoms/Button";
import styled from "styled-components";
import ErrorMessage from "../../Atoms/ErrorMessage";
import FileSubmit from "../../Molecules/FileSubmit"
import { AxiosResponse } from "axios";
import Location from "../../Atoms/Location";
import { EyeOutlined } from "@ant-design/icons";
import SortCategories from "../../Molecules/SortCategories";
import { useNavigate } from "react-router-dom";
import Close from "../../Atoms/Close";
const axios = require('axios').default;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    max-width: 100vw;
    max-height: 100vh;
    z-index: 10;
    background: linear-gradient(87deg,#17324c, #000000);
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 60%;
`;

const Header = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
`;

const ExtraLocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;  
    padding: 10px;
    margin: 10px;
`

const ContainerLocation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
 
    border-bottom: 1px solid grey;
    &:hover{
        transition: all 0.3s ease-in-out;
        border-color: #1eb5f0;
    }

    .ant-select-selection-placeholder {
        color: white;
    }
`

const Register = () => {


    const navigate = useNavigate();

    // LOCATION DATA
    const [locationData, setLocationData] = React.useState<any[]>([]);
    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then((res: { data: React.SetStateAction<any[]>; }) => {
                setLocationData(res.data);
            })
    }, []);

    /* const locationSelect = (value: string) => {
        updateFormData({
            ...formData,
            location: value
        })
    } */

    const [file, setFile] = React.useState<File>();

    const onSetFile = (e: any) => {
        setFile(e.target.files[0]);
        updateFormData({
            ...formData,
            avatar: e.target.files[0],
        })
    }

    const initialState = {
        name: '',
        email: '',
        //location: '',
        password: '',
        avatar: null,
        confirmpassword: '',
    }

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, e.target.name);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const noError = {
        msg: '',
        display: false,
    }

    const [error, updateError] = React.useState(noError);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    }

    useEffect(() => {
        passwordMatch();
    }, [formData])

    const passwordMatch = () => {

        if (formData.confirmpassword !== formData.password) {
            updateError(
                {
                    msg: "Passwords don't match",
                    display: true
                })
        }
        else {
            updateError(noError)
        }
    };

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {

        let formMissing = false;

        Object.entries(formData).forEach(element => {

            // avatar is not required
            if (element[0] !== 'avatar') {
                if (element[1] === '' || element[1] === null) {
                    formMissing = true;
                    updateError({
                        msg: `Missing ${element[0]}`,
                        display: true
                    })
                }
            }
        })

        if (!formMissing) {
            e.preventDefault();

            axios.post('/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res: AxiosResponse<any, any>) => {
                localStorage.setItem('authToken', JSON.stringify(res.data));
                navigate('/');

            }).catch((err: any) => {
                updateError(
                    { msg: err.response.data.error, display: true }
                )
            });
        }

        e.preventDefault();
    }

    const locations = locationData.map(item => {
        return {
            value: item.name + ", " + item.country,     // No subcountry for now
        }
    });

    return (
        <Form onSubmit={createAccount} encType="multipart/form-data">
            <Container>
                <Header>Welcome to AirGnB</Header>
                <Close to='/' />
                <Input placeholder={"Email"} type="email" name='email' onChange={handleChange} required />
                <Input placeholder={"Name"} type={"text"} name='name' onChange={handleChange} required />
                <Password placeholder={"Password"} name='password' onChange={handlePassword} />
                <Password placeholder={"Confirm password"} name='confirmpassword' onChange={handlePassword} />
                {/* <ExtraLocationContainer>
                    <ContainerLocation>
                        <Location
                            onSelect={locationSelect}
                            data={locations}
                            register
                        />
                    </ContainerLocation>
                    <EyeOutlined style={{ visibility: 'hidden' }} />
                </ExtraLocationContainer> */}
            </Container>
            <FileSubmit
                onChange={onSetFile}
                fileNames={file?.name ? [file?.name] : []}
            />
            <ErrorMessage msg={error.msg} on={error.display} />
            <Button
                text="Register"
                type='submit'
            />
        </Form>
    )
};

export default Register;