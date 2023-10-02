import { CSSProperties } from 'react';
import { Text, TextBox } from './styles';

interface Props {
    onClick?: () => void;
    text: string | undefined;
    title?: string
    style?: CSSProperties;
}

export const TextField: React.FC<Props> = ({ onClick, text, title, style }: Props) => {
    return (
        <>
            {
                /* Only works if it has text. dangerouslySetInnerHTML does not accept undefined.
                * dangerouslySetInnerHtml it's used to format the text if it comes as:
                * This is a <strong> String </strong>
                * 
                * This way, the word "String" will appears on screen bold.
                */
                text && <Text onClick={onClick} style={style} title={title} dangerouslySetInnerHTML={{ __html: text }} />
            }
        </>
    );
}