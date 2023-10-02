import { TextField } from "../TextField";
import { FooterContainer } from "./styles";

export const Footer: React.FC = () => {
    const getTextWithCurrentYear = (): string => {
        var currentTime = new Date();
        return `All rights reserved. Copyright © ${currentTime.getFullYear()} Filmaro Company.`;
    }

    return (
        <FooterContainer>
            <TextField text={getTextWithCurrentYear()}
                style={{ fontSize: '1.2vw' }}
            />
        </FooterContainer>
    );
}