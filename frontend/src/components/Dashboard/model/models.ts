
export enum IStatus {
    NAO_INICIADA = 'Não Iniciada',
    EM_ANDAMENTO = 'Em Andamento',
    FINALIZADA = 'Finalizada',
}

export interface IStatusColor {
    [IStatus.NAO_INICIADA]: string;
    [IStatus.EM_ANDAMENTO]: string;
    [IStatus.FINALIZADA]: string;
}