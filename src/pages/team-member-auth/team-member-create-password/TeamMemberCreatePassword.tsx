import { useState } from "react";
import styled from "styled-components";
import { Button, Input} from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import { teamMember } from "../../../api";
import toast from "react-hot-toast";

import teamWork from "../../../assets/images/teamWork.jpg";

const TeamMemberCreatePasswordForm = styled.form`
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
const TeamMemberCreatePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable = email && password && passwordConfirm;

    const createPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await teamMember.createPassword({
                email,
                password,
                passwordConfirm
            });
            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
                setIsFormSubmitting(false)
            }
        }
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Projectify App">
            <TeamMemberCreatePasswordForm onSubmit={createPassword}>
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
                <StyledButton color="primary" size="lg" shape="rounded" disabled={isFormSubmitting || !isFormSubmittable}>
                    Create Password
                </StyledButton>
            </TeamMemberCreatePasswordForm>

            <AuthActionLink
                linkText="Login"
                hintText="Already have a password"
                linkTo="../team-member/login"
            />
        </AuthWrapper>
    );
};

export { TeamMemberCreatePassword };
