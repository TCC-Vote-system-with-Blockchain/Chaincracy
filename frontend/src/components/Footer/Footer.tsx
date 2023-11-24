import { TextField } from "../TextField";
import { FooterContainer } from "./styles";

export const Footer: React.FC = () => {
    const getTextWithCurrentYear = (): string => {
        var currentTime = new Date();
        return `MIT License | ${currentTime.getFullYear()} Chaincracy.`;
    }

    return (
        <FooterContainer>
            <TextField text={getTextWithCurrentYear()}
                style={{ fontSize: '1.2vw' }}
            />
        </FooterContainer>
    );
}