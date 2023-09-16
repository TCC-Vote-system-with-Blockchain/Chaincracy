import { InfoBoxContainer, InfoBoxIcon, InforBoxText } from './styles';
import { TextField } from '../TextField';
import { IInfoBox } from './model/model';

interface Props {
    content: IInfoBox;
}

export const InfoBox: React.FC<Props> = ({ content }) => {

    const handleDynamicText = (text: string) => {
        if (content.text.length > 37) {
            return '0.8vw'
        }
        else {
            return '1vw';
        }
    }

    return (
        <InfoBoxContainer>
            <InfoBoxIcon>
                {content.icon && <content.icon style={{
                    color: '#222831',
                    fontWeight: 'bolder',
                    fontSize: '2.8vw'
                }} />}
            </InfoBoxIcon>

            <InforBoxText>
                <TextField text={content.text} style={{
                    color: '#222831',
                    fontWeight: 'bolder',
                    fontSize: handleDynamicText(content.text)
                }} />
            </InforBoxText>
        </InfoBoxContainer>
    );
}