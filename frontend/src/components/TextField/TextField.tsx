import { CSSProperties } from 'react';
import { Text, TextBox } from './styles';

interface Props {
    onClick?: () => void;
    text: string;
    title?: string
    style?: CSSProperties;
}

export const TextField: React.FC<Props> = ({ onClick, text, title, style }: Props) => {
    return (
        <Text onClick={onClick} style={style} title={title}>{text}</Text>
    );
}