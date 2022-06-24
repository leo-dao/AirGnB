import React from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../Login";
import LocationFilter from "../LocationFilter";
import { v4 as uuid } from 'uuid';
import FileSubmit from "../FileSubmit"
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

    const onSelect = (value: string) => {
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
        avatar: '',
        id: uuid(),
    }

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Pass file object as a file?
        // Not accessible in server route
        console.log(formData.avatar);
        axios.post('/register', formData);
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
                <Input placeholder={"Password"} type={"password"} onChange={handleChange} required />
                <Input placeholder={"Confirm password"} type={"password"} required />
            </Container>
            <ContainerLocation>
                <h2>Where are you located?</h2>
                <LocationFilter
                    data={data}
                    onSelect={onSelect}
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
        </Form>
    )

    return (
        <Login form={register} />
    );
};

export default Register;