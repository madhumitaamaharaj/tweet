import {atom} from 'recoil';

export const reRender = atom({
    key: 'reRender',
    default: {
        user: false,
    }
})