import guitar from '../assets/categories/guitar.jpeg';
import acoustic from '../assets/categories/acoustic.jpeg';
import bass from '../assets/categories/bass.webp';
import drums from '../assets/categories/drums.jpeg';
import keys from '../assets/categories/keys.webp';
import amp from '../assets/categories/amp.jpeg';
import pedal from '../assets/categories/pedal.jpeg';
import violin from '../assets/categories/violin.jpeg';
import mic from '../assets/categories/mic.jpeg';
import studio from '../assets/categories/studio.webp';
import brass from '../assets/categories/trumpet.webp';

const categories = [
    {
        name: 'Electric guitars',
        img: guitar,
        type:
            [
                'Solid Body',
                'Hollow/Semi-Hollow Body',
                'Non-6 String',
            ],
    },
    {
        name: 'Acoustic guitars',
        img: acoustic,
        type: [
            'Acoustic-Electric',
            'Classical',
            'Gipsy-jazz',
            '12-String',
        ]
    },
    {
        name: 'Bass',
        img: bass,
        type: [
            'J-bass',
            'P-bass',
            'Fretless',
            'Non-4 string',
            'Acoustic',
        ]
    },
    {
        name: 'Drums',
        img: drums,
        type: [
            'Snare',
            'Toms',
            'Kick',
            'Cymbals',
            'Percussion',
        ]
    },
    {
        name: 'Keys',
        img: keys,
        type: [
            'Keyboard',
            'Synth',
            'Piano',
            'Midi',
            'Organ',
        ]
    },
    {
        name: 'Guitar/Bass Amplifiers',
        img: amp,
        type: [
            'Combo',
            'Head',
            'Cabinet',
        ]
    },
    {
        name: 'Effect pedals',
        img: pedal,
        type: [
            'Overdrive',
            'Distortion',
            'Fuzz',
            'Compressor',
            'Delay',
            'Reverb',
            'Modulation',
            'Filter',
            'Tuner',
            'Wah',
        ]
    },
    {
        name: 'Other stringed',
        img: violin,
        type: [
            'Violin',
            'Double Bass',
            'Viola',
            'Cello',
            'Ukulele',
            'Banjo',
            'Mandolin',
            'Lap Steel',
        ]
    },
    {
        name: 'Microphones',
        img: mic,
        type: [
            'Dynamic',
            'Condenser',
            'Drums',
            'USB',
            'Wireless',
        ]
    },
    {
        name: 'Studio',
        img: studio,
        type: [
            'Audio Interface',
            'Monitor',
            'Headphones',
            'Preamp',
            'Speakers',
            'Mixer',
        ]
    },
    {
        name: 'Brass',
        img: brass,
        type: [
            'Trumpet',
            'Trombone',
            'Saxophone',
            'Tuba',
        ]
    },
    {
        name: 'Other'
    },
];

export default categories;