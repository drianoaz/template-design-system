import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
    theme: {
        colors: {
            red: 'red'
        },
        space: {
            1: '4px',
            2: '8px',
            3: '16px'
        }
    },
})