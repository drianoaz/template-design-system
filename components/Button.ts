import { styled } from '../stitches.config';

export const Button = styled('button', {
    variants: {
        size: {
            small: {
                padding: '$1'
            },
            medium: {
                padding: '$2'
            },
            large: {
                padding: '$3'
            }
        }
    }
})