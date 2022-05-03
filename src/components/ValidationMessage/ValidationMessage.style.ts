import { styled } from '@material-ui/core/styles';

export type ValidationSeverity = 'warning';

type SeverityColors = Record<ValidationSeverity, string>;

export const VALIDATION_SEVERITY: Record<
    ValidationSeverity,
    ValidationSeverity
> = {
    warning: 'warning'
};

const SEVERITY_COLORS: SeverityColors = {
    [VALIDATION_SEVERITY.warning]: '#ffa21d'
};

export const ValidationMessage = styled('div')(
    ({
        severity = VALIDATION_SEVERITY.warning
    }: {
        severity?: ValidationSeverity;
    }) => ({
        color: SEVERITY_COLORS[severity],
        textTransform: 'uppercase',
        lineHeight: '13px',
        fontSize: '10px',
        padding: '16px',
        margin: 0
    })
);
