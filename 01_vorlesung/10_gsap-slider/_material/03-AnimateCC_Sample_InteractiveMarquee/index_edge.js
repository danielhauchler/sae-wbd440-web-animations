/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'image',
                            rect: ['0', '0', '940px', '360', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img_0006_bg.png",'0px','0px']
                        },
                        {
                            id: 'Spotlight',
                            symbolName: 'spotlight',
                            type: 'rect',
                            rect: ['-353', '-78', '352', '502', 'auto', 'auto']
                        },
                        {
                            id: 'img_0005_snipes',
                            type: 'image',
                            rect: ['560', '-129', '380px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img_0005_logo.png",'0px','0px']
                        },
                        {
                            id: 'm2',
                            symbolName: 'm2',
                            type: 'rect',
                            rect: ['1015', '51', '164', '288', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'f2',
                            symbolName: 'f2',
                            type: 'rect',
                            rect: ['988', '50', '191', '289', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'm1',
                            symbolName: 'm1',
                            type: 'rect',
                            rect: ['-261', '50', '191', '289', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'f1',
                            symbolName: 'f1',
                            type: 'rect',
                            rect: ['-252', '50', '191', '295', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '940', '340', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Floor',
                            type: 'image',
                            rect: ['0', '289', '940px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img_0000_footer.png",'0px','0px']
                        },
                        {
                            id: 'Loop',
                            type: 'image',
                            rect: ['10', '324', '24px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Loop.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '940', '360', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "overview": 4037,
                        "overlay": 4370
                    },
                    data: [
                        [
                            "eid176",
                            "left",
                            2132,
                            1438,
                            "easeOutExpo",
                            "${f2}",
                            '988px',
                            '462px'
                        ],
                        [
                            "eid51",
                            "display",
                            4370,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "left",
                            1716,
                            1093,
                            "easeOutExpo",
                            "${m2}",
                            '1015px',
                            '682px'
                        ],
                        [
                            "eid180",
                            "top",
                            3034,
                            635,
                            "easeOutBounce",
                            "${img_0005_snipes}",
                            '-129px',
                            '0px'
                        ],
                        [
                            "eid238",
                            "opacity",
                            3293,
                            744,
                            "linear",
                            "${Loop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "left",
                            1716,
                            1577,
                            "easeOutExpo",
                            "${m1}",
                            '-261px',
                            '284px'
                        ],
                        [
                            "eid172",
                            "left",
                            1559,
                            1093,
                            "easeOutExpo",
                            "${f1}",
                            '-252px',
                            '72px'
                        ]
                    ]
                }
            },
            "m2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-8, -108, '193px', '463px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['20', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'glow',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glow.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 191, 288, 'auto', 'auto'],
                            id: 'img_0001_m2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_0001_m2.png', '0px', '0px']
                        },
                        {
                            rect: [-7, -56, 170, 399, 'auto', 'auto'],
                            type: 'image',
                            id: 'hover_0007_m2_2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0007_m2_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 164, 288]
                        }
                    }
                },
                timeline: {
                    duration: 733.33333333333,
                    autoPlay: false,
                    labels: {
                        "over": 0,
                        "over_end": 666
                    },
                    data: [
                        [
                            "eid113",
                            "display",
                            467,
                            0,
                            "linear",
                            "${hover_0007_m2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "opacity",
                            0,
                            400,
                            "easeOutExpo",
                            "${glow}",
                            '0',
                            '0.4912025'
                        ],
                        [
                            "eid116",
                            "opacity",
                            400,
                            133,
                            "linear",
                            "${img_0001_m2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            467,
                            133,
                            "linear",
                            "${hover_0007_m2_2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "overlay": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'clickarea',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [0, 0, 940, 340, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.51)']
                        },
                        {
                            rect: [298, 55, 400, 230, 'auto', 'auto'],
                            id: 'content',
                            symbolName: 'content',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            rect: [653, -34, 254, 596, 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            id: 'hover_0007_m2_22',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0006_m2_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [403, -12, 284, 572, 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            id: 'hover_0002_f2_12',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0002_f2_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [41, -19, 244, 534, 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            id: 'hover_0000_f1_1',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0000_f1_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [212, -9, 290, 506, 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            id: 'hover_0004_m1_1',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0004_m1_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 940, 340]
                        }
                    }
                },
                timeline: {
                    duration: 2933,
                    autoPlay: false,
                    labels: {
                        "inactive": 0,
                        "m2": 533,
                        "f2": 1200,
                        "f1": 1933,
                        "m1": 2600
                    },
                    data: [
                        [
                            "eid64",
                            "background-color",
                            1467,
                            0,
                            "linear",
                            "${clickarea}",
                            'rgba(0,0,0,0.51)',
                            'rgba(0,0,0,0.51)'
                        ],
                        [
                            "eid140",
                            "background-color",
                            2199,
                            0,
                            "linear",
                            "${clickarea}",
                            'rgba(0,0,0,0.51)',
                            'rgba(0,0,0,0.51)'
                        ],
                        [
                            "eid143",
                            "background-color",
                            2867,
                            0,
                            "linear",
                            "${clickarea}",
                            'rgba(0,0,0,0.51)',
                            'rgba(0,0,0,0.51)'
                        ],
                        [
                            "eid135",
                            "opacity",
                            1933,
                            266,
                            "linear",
                            "${hover_0000_f1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "display",
                            533,
                            0,
                            "linear",
                            "${hover_0007_m2_22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            867,
                            0,
                            "linear",
                            "${hover_0007_m2_22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            1933,
                            0,
                            "linear",
                            "${hover_0000_f1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            2266,
                            0,
                            "linear",
                            "${hover_0000_f1_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "left",
                            792,
                            0,
                            "easeOutBack",
                            "${content}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid86",
                            "left",
                            1459,
                            0,
                            "easeOutBack",
                            "${content}",
                            '298px',
                            '102px'
                        ],
                        [
                            "eid139",
                            "left",
                            2199,
                            0,
                            "easeOutBack",
                            "${content}",
                            '102px',
                            '224px'
                        ],
                        [
                            "eid142",
                            "left",
                            2859,
                            0,
                            "easeOutBack",
                            "${content}",
                            '234px',
                            '428px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            533,
                            267,
                            "linear",
                            "${hover_0007_m2_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "display",
                            2600,
                            0,
                            "linear",
                            "${hover_0004_m1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            2933,
                            0,
                            "linear",
                            "${hover_0004_m1_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "opacity",
                            2600,
                            267,
                            "linear",
                            "${hover_0004_m1_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${hover_0002_f2_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            1533,
                            0,
                            "linear",
                            "${hover_0002_f2_12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "opacity",
                            533,
                            267,
                            "linear",
                            "${clickarea}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1200,
                            267,
                            "linear",
                            "${clickarea}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            1933,
                            266,
                            "linear",
                            "${clickarea}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            2600,
                            267,
                            "linear",
                            "${clickarea}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1200,
                            267,
                            "linear",
                            "${hover_0002_f2_12}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "f2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [11, -81, '193px', '463px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['10', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'glow2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glow.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '191px', '289px', 'auto', 'auto'],
                            id: 'img_0002_f2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_0002_f2.png', '0px', '0px']
                        },
                        {
                            rect: [5, -36, 174, 345, 'auto', 'auto'],
                            type: 'image',
                            id: 'hover_0003_f2_2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0003_f2_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 191, 289]
                        }
                    }
                },
                timeline: {
                    duration: 733.33333333333,
                    autoPlay: false,
                    labels: {
                        "over": 0,
                        "over_end": 666
                    },
                    data: [
                        [
                            "eid202",
                            "opacity",
                            0,
                            400,
                            "easeOutExpo",
                            "${glow2}",
                            '0',
                            '0.4912025'
                        ],
                        [
                            "eid40",
                            "display",
                            467,
                            0,
                            "linear",
                            "${hover_0003_f2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "opacity",
                            467,
                            133,
                            "linear",
                            "${hover_0003_f2_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            400,
                            133,
                            "linear",
                            "${img_0002_f2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "content": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [393, 0, 7, '230px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,0.89)'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            boxShadow: ['', '5px', '5px', '10px', 0, 'rgba(0,0,0,0.32)']
                        },
                        {
                            rect: [167, '34px', '334', '50', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                type: 'text',
                                id: 'Text',
                                text: 'My Product',
                                rect: [0, 0, '334px', '50px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(227,0,0,1.00)', '700', 'none', '', '', '']
                            },
                            {
                                type: 'text',
                                rect: [0, 43, '316px', '89px', 'auto', 'auto'],
                                id: 'Text2',
                                text: 'Description',
                                align: 'left',
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(59,59,59,1.00)', 'normal', 'none', 'normal', '', '']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle2',
                                stroke: ['3px', 'rgba(255,255,255,0.48)', 'none'],
                                rect: [203, 137, 117, 39, 'auto', 'auto'],
                                fill: ['rgba(63,63,63,1.00)'],
                                boxShadow: ['', '0px', '0px', '30px', '0px', 'rgba(0,0,0,0.45)'],
                                c: [
                                {
                                    type: 'text',
                                    rect: [17, 12, '86px', '22px', 'auto', 'auto'],
                                    align: 'center',
                                    id: 'Text3',
                                    text: 'Buy now',
                                    textShadow: ['rgba(0,0,0,1.00)', '-1px', '-1px', '0px'],
                                    font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', '', '']
                                }]
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Group2',
                            rect: [-71, -24, '71px', '100px', 'auto', 'auto'],
                            c: [
                            {
                                rect: [4, 13, '30px', '30px', 'auto', 'auto'],
                                id: 'closeButton',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/closeButton.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 400, 230]
                        }
                    }
                },
                timeline: {
                    duration: 2533,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "fadeRight": 267,
                        "fadeLeft": 2000
                    },
                    data: [
                        [
                            "eid82",
                            "left",
                            533,
                            267,
                            "easeOutBack",
                            "${Group}",
                            '167px',
                            '-18px'
                        ],
                        [
                            "eid104",
                            "left",
                            2266,
                            267,
                            "easeOutBack",
                            "${Group}",
                            '-18px',
                            '100px'
                        ],
                        [
                            "eid162",
                            "opacity",
                            267,
                            0,
                            "easeOutBack",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid158",
                            "opacity",
                            533,
                            267,
                            "easeOutBack",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            800,
                            0,
                            "easeOutBack",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            2000,
                            0,
                            "easeOutBack",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid105",
                            "opacity",
                            2266,
                            267,
                            "easeOutBack",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "left",
                            800,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid230",
                            "left",
                            2533,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            '-71px',
                            '442px'
                        ],
                        [
                            "eid233",
                            "display",
                            800,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid236",
                            "display",
                            2000,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            2533,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "width",
                            267,
                            466,
                            "easeOutBack",
                            "${Rectangle}",
                            '7px',
                            '456px'
                        ],
                        [
                            "eid108",
                            "width",
                            2000,
                            466,
                            "easeOutBack",
                            "${Rectangle}",
                            '10px',
                            '462px'
                        ],
                        [
                            "eid102",
                            "left",
                            267,
                            466,
                            "easeOutBack",
                            "${Rectangle}",
                            '393px',
                            '-56px'
                        ],
                        [
                            "eid170",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            '-56px',
                            '-1px'
                        ],
                        [
                            "eid235",
                            "top",
                            800,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid231",
                            "top",
                            2533,
                            0,
                            "easeOutExpo",
                            "${Group2}",
                            '-24px',
                            '-26px'
                        ],
                        [
                            "eid78",
                            "opacity",
                            267,
                            467,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            2000,
                            467,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "m1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-10, -78, '193px', '463px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-10', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'glow3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glow.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '191px', '289px', 'auto', 'auto'],
                            id: 'img_0003_m1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_0003_m1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [-10, -36, 174, 355, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-2', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            display: 'none',
                            opacity: '0',
                            id: 'hover_0005_m1_2',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0005_m1_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 191, 289]
                        }
                    }
                },
                timeline: {
                    duration: 733.33333333333,
                    autoPlay: false,
                    labels: {
                        "over": 0,
                        "over_end": 666
                    },
                    data: [
                        [
                            "eid203",
                            "display",
                            467,
                            0,
                            "linear",
                            "${hover_0005_m1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid204",
                            "opacity",
                            467,
                            133,
                            "linear",
                            "${hover_0005_m1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            400,
                            133,
                            "linear",
                            "${img_0003_m1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid206",
                            "opacity",
                            0,
                            400,
                            "easeOutExpo",
                            "${glow3}",
                            '0',
                            '0.4912025'
                        ]
                    ]
                }
            },
            "f1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1, -100, '193px', '463px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-20', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'glow4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/glow.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '191px', '295px', 'auto', 'auto'],
                            id: 'img_0004_f1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_0004_f1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [14, -36, 165, 362, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['3', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            display: 'none',
                            opacity: '0',
                            id: 'hover_0001_f1_2',
                            fill: ['rgba(0,0,0,0)', 'images/hover_0001_f1_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 191, 295]
                        }
                    }
                },
                timeline: {
                    duration: 733.33333333333,
                    autoPlay: false,
                    labels: {
                        "over": 0,
                        "over_end": 666
                    },
                    data: [
                        [
                            "eid207",
                            "display",
                            467,
                            0,
                            "linear",
                            "${hover_0001_f1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid208",
                            "opacity",
                            467,
                            133,
                            "linear",
                            "${hover_0001_f1_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid209",
                            "opacity",
                            400,
                            133,
                            "linear",
                            "${img_0004_f1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid210",
                            "opacity",
                            0,
                            400,
                            "easeOutExpo",
                            "${glow4}",
                            '0',
                            '0.4912025'
                        ]
                    ]
                }
            },
            "spotlight": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['22', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'glow5',
                            opacity: '0.15',
                            rect: [-741, 9, 431, '463px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 352, 502]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid227",
                            "rotateZ",
                            1503,
                            3329,
                            "easeOutExpo",
                            "${glow5}",
                            '22deg',
                            '-22deg'
                        ],
                        [
                            "eid229",
                            "left",
                            0,
                            1503,
                            "easeOutExpo",
                            "${glow5}",
                            '-741px',
                            '-324px'
                        ],
                        [
                            "eid226",
                            "left",
                            1503,
                            3329,
                            "easeOutExpo",
                            "${glow5}",
                            '-324px',
                            '1388px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-11294651");
