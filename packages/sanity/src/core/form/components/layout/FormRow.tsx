import {styled} from 'styled-components'

const areas = ['gutterStart', 'body', 'gutterEnd'] as const
export type FormArea = (typeof areas)[number]

/**
 * @internal
 */
export const FormRow = styled.div`
  display: grid;
  grid-template-areas: '${areas.join(' ')}';
  grid-template-columns: var(--formGutterSize) 1fr var(--formGutterSize);
  gap: var(--formGutterGap);

  /* Collapse the end gutter and gap for nested rows. */
  & & {
    grid-template-columns: var(--formGutterSize) 1fr 0;
    margin-inline-end: calc(var(--formGutterGap) * -1);
  }
`
