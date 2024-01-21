import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { Button, Input, Toaster, Typography } from "../../../design-system";
import { AuthWrapper } from "../../components";
import { admin } from "../../../api";

import peopleDiscussing from "../../../assets/images/frame-1.png";
import { AuthActionLink } from "../../components/AuthActionLinks";

const SignupForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
`;

const StyledInput = styled(Input)`
    grid-column: 1 / 3;
`;
const StyledButton = styled(Button)`
    grid-column: 1 / 3;
`;

const AdminSignup = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [preferredName, setPreferredName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };

    const handleOnChangeName = (value: string) => {
        setPreferredName(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangeCompany = (value: string) => {
        setCompany(value);
    };

    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable =
        firstName && lastName && email && password && passwordConfirm;

    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await admin.signUp({
                firstName,
                lastName,
                preferredName,
                email,
                company,
                position,
                password,
                passwordConfirm
            });
            setIsFormSubmitting(false);
            setFirstName("");
            setLastName("");
            setPreferredName("");
            setEmail("");
            setCompany("");
            setPosition("");
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper
                imageUrl={peopleDiscussing}
                pageTitle="Projectify"
                switchLayout
            >
                <SignupForm onSubmit={createAccount}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleOnChangeFirstName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleOnChangeLastName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <StyledInput
                        type="text"
                        placeholder="Preferred First Name (optional)"
                        value={preferredName}
                        onChange={handleOnChangeName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <StyledInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Company Name"
                        value={company}
                        onChange={handleOnChangeCompany}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Position"
                        value={position}
                        onChange={handleOnChangePosition}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="password"
                        placeholder="Password Confirmation"
                        value={passwordConfirm}
                        onChange={handleOnChangePasswordConfirm}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />

                    <StyledButton
                        color="primary"
                        size="lg"
                        shape="rounded"
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Sign Up
                    </StyledButton>
                </SignupForm>

                <div style={{marginTop: "auto"}}>
                    <AuthActionLink linkText="Login" hintText="Already have an account" linkTo="../admin/login"/>
                </div>
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { AdminSignup };
