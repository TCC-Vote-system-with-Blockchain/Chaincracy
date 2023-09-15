import { Text, TextBox } from './styles';

interface Props {
    onClick?: () => void;
    text: string;
    textWeightStyle?: string;
    title?: string;
    ellipsis?: string;
    fontSize?: string;
    cursor?: string;
}

export const TextField: React.FC<Props> = ({ onClick, text, textWeightStyle, title, ellipsis, fontSize, cursor }: Props) => {
    return (
        <Text onClick={onClick}
            $textWeight={textWeightStyle}
            $ellipsis={ellipsis}
            $fontSize={fontSize}
            $cursor={cursor}
            title={title}>

            {text}
        </Text>
    );
}