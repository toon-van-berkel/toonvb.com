export const page = {
    title: 'A screw, built with code.',
    intro: 'A small experiment in parametric 3D modelling. This screw is defined in OpenSCAD and displayed here as an interactive 3D model.',
    modelNote: 'This is a visual modelling experiment, not a manufacturing-ready or standards-certified fastener.',
    open: 'Open an STL file', loadExample: 'Load example', reset: 'Reset camera',
    invalid: 'That file could not be loaded. The current model was kept.', tooLarge: 'The file is too large. Please choose an STL under 10 MB.', webgl: 'Interactive 3D is unavailable in this browser.',
    parameters: 'Example parameters', downloadScad: 'Download screw.scad', downloadStl: 'Download screw.stl', back: 'Back to playground', tags: ['OpenSCAD', '3D', 'Parametric modelling']
} as const;
