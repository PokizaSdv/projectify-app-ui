import { useState } from "react";
import styled from "styled-components";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import forgotPassword from "../../../assets/images/forgotPassword.svg";

const TeamMemberForgotPasswordForm = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const getInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper pageTitle="Forgot Password?" imageUrl={forgotPassword}>
            <TeamMemberForgotPasswordForm onSubmit={getInstructions} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Get Instructions
                </Button>
            </TeamMemberForgotPasswordForm>
        </PasswordWrapper>
    );
};

export { TeamMemberForgotPassword };
