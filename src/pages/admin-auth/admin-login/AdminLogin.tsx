import { useState } from "react";
import styled from "styled-components";
import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";

import meeting from "../../../assets/images/meeting.jpg";

const LoginForm = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const confirmLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <AuthWrapper imageUrl={meeting} pageTitle="Projectify">
            <LoginForm onSubmit={confirmLogin} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    className="login__password"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="login__submit-button"
                >
                    Login
                </Button>
            </LoginForm>
        </AuthWrapper>
    );
};

export { AdminLogin };
