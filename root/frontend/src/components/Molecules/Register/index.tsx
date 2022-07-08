import React from "react";
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password';
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../Login";
import LocationFilter from "../LocationFilter";
import ErrorMessage from "../../Atoms/ErrorMessage";
import FileSubmit from "../FileSubmit"
import { AxiosResponse } from "axios";
const axios = require('axios').default;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    gap: 50px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const ContainerLocation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
`

const ContainerAvatar = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    margin-bottom: -30px;
`

const Register = () => {

    // LOCATION DATA
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then((res: { data: React.SetStateAction<any[]>; }) => {
                setData(res.data);
            })
    }, [])

    const locationSelect = (value: string) => {
        updateFormData({
            ...formData,
            location: value
        })
    }

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
        location: '',
        password: '',
        avatar: null,
    }

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        });
    }

    const noError = {
        msg: '',
        display: false,
    }

    const [error, updateError] = React.useState(noError)

    const passwordMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== formData.password) {
            updateError(
                {
                    msg: "Passwords don't match",
                    display: true
                })
        }
        else {
            updateError(noError)
        }
    }

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {

        let formMissing = false;

        Object.entries(formData).forEach(element => {
            if (element[1] === '' || element[1] === null) {
                formMissing = true;
                updateError({
                    msg: `Missing ${element[0]}`,
                    display: true
                })
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
                //navigate('/');

            }).catch((err: any) => {
                updateError(
                    { msg: err.response.data.error, display: true }
                )
            });;
        }

        e.preventDefault();
    }

    const register = (
        <Form
            onSubmit={createAccount}
            encType="multipart/form-data"
        >
            <Container>
                <h2>Enter your information</h2>
                <Input placeholder={"Email"} type={"email"} onChange={handleChange} required />
                <Input placeholder={"Name"} type={"text"} onChange={handleChange} required />
                <Password placeholder={"Password"} onChange={handleChange} />
                <Password placeholder={"Confirm password"} onChange={passwordMatch} />
            </Container>
            <ContainerLocation>
                <h2>Where are you located?</h2>
                <LocationFilter
                    data={data}
                    onSelect={locationSelect}
                />
            </ContainerLocation>
            <ContainerAvatar>
                <h2>Upload your profile picture</h2>
                <FileSubmit
                    onChange={onSetFile}
                    fileNames={file?.name ? [file?.name] : []}
                />
            </ContainerAvatar>
            <Button
                text="Create profile"
                width='200px'
                height='45px'
                fontSize="25px"
                type='submit'
            />
            <ErrorMessage msg={error.msg} on={error.display} />
        </Form>
    )

    return (
        <Login form={register} />
    );
};

export default Register;