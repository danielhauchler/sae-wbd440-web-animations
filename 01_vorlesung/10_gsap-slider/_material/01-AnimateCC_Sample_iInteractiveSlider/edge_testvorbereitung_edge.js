/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'panel-1',
            type:'rect',
            rect:['-25','-1','auto','auto','auto','auto']
         },
         {
            id:'panel-2',
            display:'none',
            type:'rect',
            rect:['-3','0','auto','auto','auto','auto']
         },
         {
            id:'panel-3',
            display:'none',
            type:'rect',
            rect:['1','0','auto','auto','auto','auto']
         },
         {
            id:'panel-4',
            display:'none',
            type:'rect',
            rect:['-2','-1','auto','auto','auto','auto']
         },
         {
            id:'arrow-right',
            type:'rect',
            rect:['912','177','auto','auto','auto','auto']
         },
         {
            id:'arrow-left',
            type:'rect',
            rect:['1px','173','auto','auto','auto','auto'],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'panel-4',
            symbolName:'panel-4'
         },
         {
            id:'panel-1',
            symbolName:'panel-1'
         },
         {
            id:'panel-2',
            symbolName:'panel-2'
         },
         {
            id:'arrow-left',
            symbolName:'arrow-left'
         },
         {
            id:'arrow-right',
            symbolName:'arrow-right'
         },
         {
            id:'panel-3',
            symbolName:'panel-3'
         }
         ]
      },
   states: {
      "Base State": {
         "${_panel-3}": [
            ["style", "display", 'none']
         ],
         "${_arrow-left}": [
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_panel-1}": [
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '365px'],
            ["style", "width", '955px']
         ],
         "${_arrow-right}": [
            ["style", "left", '914px']
         ],
         "${_panel-4}": [
            ["style", "display", 'none']
         ],
         "${_panel-2}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         labels: {
            "slide1": 0,
            "slide2": 2000,
            "slide3": 4000,
            "slide4": 6000
         },
         timeline: [
            { id: "eid492", tween: [ "style", "${_panel-4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid493", tween: [ "style", "${_panel-4}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutBack" },
            { id: "eid192", tween: [ "style", "${_panel-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid215", tween: [ "style", "${_panel-2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid363", tween: [ "style", "${_panel-2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid361", tween: [ "style", "${_panel-3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid362", tween: [ "style", "${_panel-3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid495", tween: [ "style", "${_arrow-right}", "left", '914px', { fromValue: '914px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid491", tween: [ "style", "${_panel-1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid189", tween: [ "style", "${_panel-1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid358", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel-1}', [] ], ""], position: 0 },
            { id: "eid359", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel-2}', [] ], ""], position: 2000 },
            { id: "eid381", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel-3}', [] ], ""], position: 4000 },
            { id: "eid494", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel-4}', [] ], ""], position: 6000 }         ]
      }
   }
},
"panel-1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel1_city',
      type: 'image',
      rect: ['0px','0px','1031px','377px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_city.jpg','0px','0px']
   },
   {
      id: 'panel1_taxi_1',
      type: 'image',
      rect: ['921px','367px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      transform: [[0,0],['-90']],
      id: 'panel1_taxi_2',
      type: 'image',
      rect: ['438px','376px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      transform: [[0,0],['90']],
      id: 'panel1_taxi_3',
      type: 'image',
      rect: ['438px','-66px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      transform: [[0,0],['180']],
      id: 'panel1_taxi_4',
      type: 'image',
      rect: ['139px','387px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      transform: [[0,0],['180']],
      id: 'panel1_taxi_5',
      type: 'image',
      rect: ['71px','-63px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      id: 'panel1_taxi_6',
      type: 'image',
      rect: ['921px','367px','51px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      transform: [[0,0],['-180'],[],['0.65103','0.65149']],
      id: 'panel1_taxi_black',
      type: 'image',
      rect: ['539px','372px','78px','77px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_taxi_black.png','0px','0px']
   },
   {
      id: 'panel1_subHeader_box2',
      type: 'image',
      rect: ['274px','288px','400px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_subHeader_box.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(228,228,228,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Alice Ritter brings her parisian aesthetic to the fashion capital of the USA',
      align: 'left',
      rect: ['216px','297px','auto','auto','auto','auto']
   },
   {
      id: 'panel1_header_box',
      type: 'image',
      rect: ['225px','227px','500px','54px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_header_box.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',41,'rgba(228,228,228,1.00)','normal','none',''],
      id: 'THE_AMERICAN_DREAM',
      text: 'THE AMERICAN DREAM',
      type: 'text',
      rect: ['235px','231px','485px','46px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_THE_AMERICAN_DREAM}": [
            ["style", "top", '231px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(228,228,228,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '260px'],
            ["style", "font-size", '41px']
         ],
         "${_panel1_taxi_3}": [
            ["style", "top", '-66px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '50px'],
            ["style", "left", '438px'],
            ["style", "width", '51px']
         ],
         "${_panel1_taxi_1}": [
            ["style", "height", '50px'],
            ["style", "top", '-51px'],
            ["style", "left", '500px'],
            ["style", "width", '51px']
         ],
         "${_panel1_taxi_black}": [
            ["style", "top", '372px'],
            ["transform", "scaleY", '0.65149'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '0.65103'],
            ["style", "left", '539px']
         ],
         "${_panel1_city}": [
            ["style", "top", '0px'],
            ["style", "height", '377px'],
            ["style", "left", '0px'],
            ["style", "width", '1031px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '1031px']
         ],
         "${_panel1_taxi_2}": [
            ["style", "top", '376px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '50px'],
            ["style", "left", '438px'],
            ["style", "width", '51px']
         ],
         "${_panel1_subHeader_box2}": [
            ["style", "top", '287px'],
            ["style", "height", '40px'],
            ["style", "opacity", '0'],
            ["style", "left", '233px'],
            ["style", "width", '534px']
         ],
         "${_panel1_taxi_4}": [
            ["style", "top", '387px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '50px'],
            ["style", "left", '139px'],
            ["style", "width", '51px']
         ],
         "${_Text3}": [
            ["style", "top", '297px'],
            ["style", "opacity", '0'],
            ["style", "left", '241px'],
            ["style", "font-size", '14px']
         ],
         "${_panel1_taxi_5}": [
            ["style", "top", '-63px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '50px'],
            ["style", "left", '71px'],
            ["style", "width", '51px']
         ],
         "${_panel1_header_box}": [
            ["style", "top", '227px'],
            ["style", "opacity", '0'],
            ["style", "left", '250px']
         ],
         "${_panel1_taxi_6}": [
            ["style", "top", '-86px'],
            ["style", "height", '50px'],
            ["style", "left", '464px'],
            ["style", "width", '51px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         labels: {
            "auto-loop": 3250
         },
         timeline: [
            { id: "eid5", tween: [ "style", "${_panel1_city}", "height", '539px', { fromValue: '377px'}], position: 0, duration: 1000, easing: "easeInOutQuart" },
            { id: "eid64", tween: [ "style", "${_panel1_taxi_2}", "top", '-65px', { fromValue: '376px'}], position: 3750, duration: 5000, easing: "easeInOutQuad" },
            { id: "eid118", tween: [ "style", "${_panel1_taxi_6}", "top", '41px', { fromValue: '-86px'}], position: 3500, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid122", tween: [ "style", "${_panel1_taxi_6}", "top", '409px', { fromValue: '41px'}], position: 7250, duration: 4250, easing: "easeInOutQuad" },
            { id: "eid63", tween: [ "style", "${_panel1_taxi_2}", "left", '878px', { fromValue: '438px'}], position: 3750, duration: 5000, easing: "easeInOutQuad" },
            { id: "eid7", tween: [ "style", "${_panel1_city}", "width", '1474px', { fromValue: '1031px'}], position: 0, duration: 1000, easing: "easeInOutQuart" },
            { id: "eid32", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "style", "${_THE_AMERICAN_DREAM}", "left", '260px', { fromValue: '260px'}], position: 1315, duration: 0, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "style", "${_panel1_taxi_4}", "left", '-53px', { fromValue: '139px'}], position: 3500, duration: 3750, easing: "easeInOutQuad" },
            { id: "eid14", tween: [ "style", "${_panel1_subHeader_box2}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid6", tween: [ "style", "${_panel1_city}", "left", '-214px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuart" },
            { id: "eid36", tween: [ "style", "${_panel1_header_box}", "left", '250px', { fromValue: '250px'}], position: 1315, duration: 0, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "style", "${_panel1_taxi_black}", "top", '-119px', { fromValue: '372px'}], position: 5685, duration: 6250, easing: "easeInOutQuad" },
            { id: "eid11", tween: [ "style", "${_panel1_header_box}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_panel1_taxi_4}", "top", '194px', { fromValue: '387px'}], position: 3500, duration: 3750, easing: "easeInOutQuad" },
            { id: "eid76", tween: [ "style", "${_panel1_taxi_3}", "top", '382px', { fromValue: '-66px'}], position: 6000, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid97", tween: [ "style", "${_panel1_taxi_1}", "top", '85px', { fromValue: '-51px'}], position: 3250, duration: 1631, easing: "easeInOutQuad" },
            { id: "eid98", tween: [ "style", "${_panel1_taxi_1}", "top", '85px', { fromValue: '85px'}], position: 4881, duration: 2255, easing: "easeInOutQuad" },
            { id: "eid99", tween: [ "style", "${_panel1_taxi_1}", "top", '373px', { fromValue: '85px'}], position: 7136, duration: 3114, easing: "easeInOutQuad" },
            { id: "eid21", tween: [ "style", "${_THE_AMERICAN_DREAM}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "style", "${_panel1_subHeader_box2}", "top", '287px', { fromValue: '287px'}], position: 3000, duration: 0, easing: "easeInOutElastic" },
            { id: "eid34", tween: [ "style", "${_panel1_subHeader_box2}", "left", '233px', { fromValue: '233px'}], position: 1315, duration: 0, easing: "easeOutQuad" },
            { id: "eid27", tween: [ "style", "${_panel1_subHeader_box2}", "left", '233px', { fromValue: '233px'}], position: 3000, duration: 0, easing: "easeInOutElastic" },
            { id: "eid24", tween: [ "style", "${_panel1_subHeader_box2}", "height", '40px', { fromValue: '40px'}], position: 3000, duration: 0, easing: "easeInOutElastic" },
            { id: "eid95", tween: [ "style", "${_panel1_taxi_5}", "left", '528px', { fromValue: '71px'}], position: 3500, duration: 7000, easing: "easeInOutQuad" },
            { id: "eid26", tween: [ "style", "${_panel1_subHeader_box2}", "width", '534px', { fromValue: '534px'}], position: 3000, duration: 0, easing: "easeInOutElastic" },
            { id: "eid8", tween: [ "style", "${_panel1_city}", "top", '-87px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuart" },
            { id: "eid96", tween: [ "style", "${_panel1_taxi_5}", "top", '393px', { fromValue: '-63px'}], position: 3500, duration: 7000, easing: "easeInOutQuad" },
            { id: "eid88", tween: [ "style", "${_panel1_taxi_black}", "left", '49px', { fromValue: '539px'}], position: 5685, duration: 6250, easing: "easeInOutQuad" },
            { id: "eid100", tween: [ "style", "${_panel1_taxi_1}", "left", '637px', { fromValue: '500px'}], position: 3250, duration: 1631, easing: "easeInOutQuad" },
            { id: "eid101", tween: [ "style", "${_panel1_taxi_1}", "left", '637px', { fromValue: '637px'}], position: 4881, duration: 2255, easing: "easeInOutQuad" },
            { id: "eid102", tween: [ "style", "${_panel1_taxi_1}", "left", '926px', { fromValue: '637px'}], position: 7136, duration: 3114, easing: "easeInOutQuad" },
            { id: "eid75", tween: [ "style", "${_panel1_taxi_3}", "left", '-10px', { fromValue: '438px'}], position: 6000, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid33", tween: [ "style", "${_Text3}", "left", '241px', { fromValue: '241px'}], position: 1315, duration: 0, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "style", "${_panel1_taxi_6}", "left", '594px', { fromValue: '464px'}], position: 3500, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid121", tween: [ "style", "${_panel1_taxi_6}", "left", '963px', { fromValue: '594px'}], position: 7250, duration: 4250, easing: "easeInOutQuad" }         ]
      }
   }
},
"panel-2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel2_bench_bg',
      type: 'image',
      rect: ['0px','0px','960px','366px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_bench_bg.jpg','0px','0px']
   },
   {
      id: 'panel2_books',
      type: 'image',
      rect: ['282px','238px','148px','136px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_books.png','0px','0px']
   },
   {
      id: 'panel2_bowl_buttons',
      type: 'image',
      rect: ['516px','183px','100px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_bowl_buttons.png','0px','0px']
   },
   {
      id: 'panel2_fabric',
      type: 'image',
      rect: ['4px','0px','340px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_fabric.png','0px','0px']
   },
   {
      id: 'panel2_header_box',
      type: 'image',
      rect: ['342px','129px','258px','62px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_header_box.png','0px','0px']
   },
   {
      rect: ['351px','127px','307px','100px','auto','auto'],
      id: 'Text',
      text: 'BEAUTY',
      font: ['Arial, Helvetica, sans-serif',60,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'panel2_measure_tape',
      type: 'image',
      rect: ['183px','64px','90px','74px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_measure_tape.png','0px','0px']
   },
   {
      id: 'panel2_needles',
      type: 'image',
      rect: ['809px','21px','45px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_needles.png','0px','0px']
   },
   {
      id: 'panel2_paper_fabric_swatch',
      type: 'image',
      rect: ['715px','177px','127px','199px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_paper_fabric_swatch.png','0px','0px']
   },
   {
      id: 'panel2_pencil_sketch',
      type: 'image',
      rect: ['189px','227px','84px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_pencil_sketch.png','0px','0px']
   },
   {
      id: 'panel2_ribbon',
      type: 'image',
      rect: ['832px','-23px','133px','279px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_ribbon.png','0px','0px']
   },
   {
      id: 'panel2_scissor_blk_blade1',
      type: 'image',
      rect: ['94px','93px','160px','179px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_scissor_blk_blade1.png','0px','0px']
   },
   {
      id: 'panel2_scissor_blk_blade2',
      type: 'image',
      rect: ['92px','94px','160px','179px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_scissor_blk_blade2.png','0px','0px']
   },
   {
      id: 'panel2_sketch_blue_dress',
      type: 'image',
      rect: ['565px','267px','57px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_blue_dress.png','0px','0px']
   },
   {
      id: 'panel2_sketch_girl',
      type: 'image',
      rect: ['23px','160px','100px','235px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_girl.png','0px','0px']
   },
   {
      id: 'panel2_sketch_orange_shirt',
      type: 'image',
      rect: ['430px','15px','156px','98px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_orange_shirt.png','0px','0px']
   },
   {
      id: 'panel2_spool',
      type: 'image',
      rect: ['-49px','-295px','63px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_spool.png','0px','0px']
   },
   {
      id: 'panel2_thread_rows',
      type: 'image',
      rect: ['614px','-2px','113px','176px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_thread_rows.png','0px','0px']
   },
   {
      rect: ['310px','191px','340px','110px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',36,'rgba(103,103,103,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'in the<br>Details',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel2_sketch_blue_dress}": [
            ["style", "top", '462px'],
            ["style", "left", '564px'],
            ["transform", "rotateZ", '11deg']
         ],
         "${_Text2}": [
            ["style", "top", '191px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(103,103,103,1.00)'],
            ["style", "left", '310px'],
            ["style", "font-size", '36px']
         ],
         "${_panel2_sketch_girl}": [
            ["style", "top", '376px'],
            ["style", "left", '-68px'],
            ["transform", "rotateZ", '74deg']
         ],
         "${_panel2_spool}": [
            ["style", "top", '-87px'],
            ["style", "left", '362px'],
            ["transform", "rotateZ", '15deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '366px'],
            ["style", "width", '960px']
         ],
         "${_panel2_bowl_buttons}": [
            ["style", "top", '414px'],
            ["style", "left", '650px'],
            ["transform", "rotateZ", '-248deg']
         ],
         "${_panel2_bench_bg}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '366px']
         ],
         "${_panel2_scissor_blk_blade1}": [
            ["style", "top", '-204px'],
            ["style", "left", '-210px'],
            ["transform", "rotateZ", '-205deg']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '127px'],
            ["style", "left", '351px'],
            ["style", "font-size", '60px']
         ],
         "${_panel2_measure_tape}": [
            ["style", "top", '-173px'],
            ["style", "left", '237px'],
            ["transform", "rotateZ", '213deg']
         ],
         "${_panel2_fabric}": [
            ["style", "top", '-207px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-25deg']
         ],
         "${_panel2_ribbon}": [
            ["style", "left", '999px'],
            ["style", "top", '-94px']
         ],
         "${_panel2_sketch_orange_shirt}": [
            ["style", "top", '-114px'],
            ["style", "left", '480px'],
            ["transform", "rotateZ", '-25deg']
         ],
         "${_panel2_header_box}": [
            ["style", "left", '342px'],
            ["style", "top", '129px']
         ],
         "${_panel2_books}": [
            ["style", "left", '310px'],
            ["style", "top", '438px']
         ],
         "${_panel2_needles}": [
            ["style", "top", '-134px'],
            ["style", "left", '944px'],
            ["transform", "rotateZ", '185deg']
         ],
         "${_panel2_thread_rows}": [
            ["style", "top", '-189px'],
            ["style", "left", '696px'],
            ["transform", "rotateZ", '41deg']
         ],
         "${_panel2_paper_fabric_swatch}": [
            ["style", "top", '425px'],
            ["style", "left", '840px'],
            ["transform", "rotateZ", '-80deg']
         ],
         "${_panel2_pencil_sketch}": [
            ["style", "top", '387px'],
            ["style", "left", '132px'],
            ["transform", "rotateZ", '37deg']
         ],
         "${_panel2_scissor_blk_blade2}": [
            ["style", "top", '-203px'],
            ["style", "left", '-212px'],
            ["transform", "rotateZ", '-205deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid248", tween: [ "style", "${_panel2_sketch_girl}", "top", '160px', { fromValue: '376px'}], position: 750, duration: 383, easing: "easeInOutQuad" },
            { id: "eid234", tween: [ "style", "${_panel2_spool}", "top", '54px', { fromValue: '-87px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid232", tween: [ "style", "${_panel2_spool}", "left", '282px', { fromValue: '362px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid255", tween: [ "style", "${_panel2_sketch_blue_dress}", "left", '565px', { fromValue: '564px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid327", tween: [ "transform", "${_panel2_scissor_blk_blade2}", "rotateZ", '0deg', { fromValue: '-205deg'}], position: 500, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid282", tween: [ "transform", "${_panel2_needles}", "rotateZ", '0deg', { fromValue: '185deg'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid251", tween: [ "transform", "${_panel2_sketch_girl}", "rotateZ", '0deg', { fromValue: '74deg'}], position: 750, duration: 383, easing: "easeInOutQuad" },
            { id: "eid309", tween: [ "style", "${_panel2_books}", "left", '282px', { fromValue: '310px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid270", tween: [ "style", "${_panel2_paper_fabric_swatch}", "left", '715px', { fromValue: '840px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid253", tween: [ "style", "${_panel2_sketch_blue_dress}", "top", '267px', { fromValue: '462px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid284", tween: [ "style", "${_panel2_measure_tape}", "left", '183px', { fromValue: '237px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid264", tween: [ "style", "${_panel2_pencil_sketch}", "left", '189px', { fromValue: '132px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid323", tween: [ "style", "${_panel2_scissor_blk_blade1}", "top", '93px', { fromValue: '-204px'}], position: 500, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid268", tween: [ "transform", "${_panel2_pencil_sketch}", "rotateZ", '0deg', { fromValue: '37deg'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid329", tween: [ "transform", "${_panel2_scissor_blk_blade1}", "rotateZ", '0deg', { fromValue: '-205deg'}], position: 500, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid331", tween: [ "transform", "${_panel2_scissor_blk_blade1}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid333", tween: [ "transform", "${_panel2_scissor_blk_blade1}", "rotateZ", '-1deg', { fromValue: '33deg'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid321", tween: [ "style", "${_panel2_scissor_blk_blade1}", "left", '94px', { fromValue: '-210px'}], position: 500, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid319", tween: [ "style", "${_panel2_scissor_blk_blade2}", "top", '94px', { fromValue: '-203px'}], position: 500, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid317", tween: [ "style", "${_panel2_scissor_blk_blade2}", "left", '92px', { fromValue: '-212px'}], position: 500, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid311", tween: [ "style", "${_panel2_books}", "top", '238px', { fromValue: '438px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid239", tween: [ "style", "${_panel2_sketch_orange_shirt}", "left", '430px', { fromValue: '480px'}], position: 140, duration: 495, easing: "easeInOutQuad" },
            { id: "eid262", tween: [ "style", "${_panel2_ribbon}", "left", '832px', { fromValue: '999px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid241", tween: [ "style", "${_panel2_sketch_orange_shirt}", "top", '15px', { fromValue: '-114px'}], position: 140, duration: 495, easing: "easeInOutQuad" },
            { id: "eid246", tween: [ "style", "${_panel2_sketch_girl}", "left", '23px', { fromValue: '-68px'}], position: 750, duration: 383, easing: "easeInOutQuad" },
            { id: "eid307", tween: [ "transform", "${_panel2_bowl_buttons}", "rotateZ", '0deg', { fromValue: '-248deg'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid260", tween: [ "style", "${_panel2_ribbon}", "top", '-23px', { fromValue: '-94px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid237", tween: [ "transform", "${_panel2_spool}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid304", tween: [ "style", "${_panel2_bowl_buttons}", "top", '183px', { fromValue: '414px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid302", tween: [ "style", "${_panel2_bowl_buttons}", "left", '516px', { fromValue: '650px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid279", tween: [ "style", "${_panel2_needles}", "top", '21px', { fromValue: '-134px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "style", "${_panel2_thread_rows}", "left", '614px', { fromValue: '696px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid293", tween: [ "style", "${_panel2_fabric}", "top", '0px', { fromValue: '-207px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid296", tween: [ "transform", "${_panel2_fabric}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid272", tween: [ "style", "${_panel2_paper_fabric_swatch}", "top", '177px', { fromValue: '425px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid258", tween: [ "transform", "${_panel2_sketch_blue_dress}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid221", tween: [ "style", "${_panel2_thread_rows}", "top", '-2px', { fromValue: '-189px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid286", tween: [ "style", "${_panel2_measure_tape}", "top", '64px', { fromValue: '-173px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid291", tween: [ "style", "${_panel2_fabric}", "left", '4px', { fromValue: '0px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid224", tween: [ "transform", "${_panel2_thread_rows}", "rotateZ", '0deg', { fromValue: '41deg'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid289", tween: [ "transform", "${_panel2_measure_tape}", "rotateZ", '0deg', { fromValue: '213deg'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid277", tween: [ "style", "${_panel2_needles}", "left", '809px', { fromValue: '944px'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid275", tween: [ "transform", "${_panel2_paper_fabric_swatch}", "rotateZ", '0deg', { fromValue: '-80deg'}], position: 0, duration: 1133, easing: "easeInOutQuad" },
            { id: "eid244", tween: [ "transform", "${_panel2_sketch_orange_shirt}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 140, duration: 495, easing: "easeInOutQuad" },
            { id: "eid266", tween: [ "style", "${_panel2_pencil_sketch}", "top", '227px', { fromValue: '387px'}], position: 0, duration: 1133, easing: "easeInOutQuad" }         ]
      }
   }
},
"arrow-right": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'btn_arrow3',
      type: 'image',
      rect: ['0px','0px','42px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_arrow.png','0px','0px']
   },
   {
      id: 'btn_arrowOver2',
      type: 'image',
      rect: ['-1px','1px','42px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_arrowOver.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_arrow3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_btn_arrowOver2}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "normal": 0,
            "hover": 1000
         },
         timeline: [
            { id: "eid211", tween: [ "style", "${_btn_arrowOver2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid213", tween: [ "style", "${_btn_arrow3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"arrow-left": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['180']],
      id: 'btn_arrow3',
      type: 'image',
      rect: ['0px','0px','42px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_arrow.png','0px','0px']
   },
   {
      transform: [[0,0],['180']],
      id: 'btn_arrowOver2',
      type: 'image',
      rect: ['-1px','1px','42px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_arrowOver.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '42px']
         ],
         "${_btn_arrowOver2}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_btn_arrow3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '180deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "normal": 0,
            "hover": 1000
         },
         timeline: [
            { id: "eid211", tween: [ "style", "${_btn_arrowOver2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid213", tween: [ "style", "${_btn_arrow3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"panel-3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bg',
      type: 'image',
      rect: ['0px','0px','955px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'produkt-1',
      type: 'rect',
      rect: ['0px','0','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','238px','365px','auto','auto'],
      id: 'produkt-hover-1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'produkt-2',
      type: 'rect',
      rect: ['239px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['238px','0px','238px','365px','auto','auto'],
      id: 'produkt-hover-2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'produkt-3',
      type: 'rect',
      rect: ['478px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['477px','0px','238px','365px','auto','auto'],
      id: 'produkt-hover-3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'produkt-4',
      type: 'rect',
      rect: ['717px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['716px','-1px','238px','365px','auto','auto'],
      id: 'produkt-hover-4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   {
      id: 'produkt-2',
      symbolName: 'produkt-2'
   },
   {
      id: 'produkt-3',
      symbolName: 'produkt-3'
   },
   {
      id: 'produkt-4',
      symbolName: 'produkt-4'
   },
   {
      id: 'produkt-1',
      symbolName: 'produkt-1'
   }   ]
   },
   states: {
      "Base State": {
         "${_produkt-hover-2}": [
            ["style", "left", '238px'],
            ["style", "opacity", '0']
         ],
         "${_produkt-2}": [
            ["style", "left", '239px'],
            ["style", "top", '0px']
         ],
         "${_produkt-hover-1}": [
            ["style", "left", '0px'],
            ["style", "opacity", '0']
         ],
         "${_bg}": [
            ["style", "height", '365px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '955px']
         ],
         "${_produkt-hover-3}": [
            ["style", "left", '477px'],
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '365px'],
            ["style", "width", '955px']
         ],
         "${_produkt-3}": [
            ["style", "top", '0px'],
            ["style", "left", '478px']
         ],
         "${_produkt-1}": [
            ["style", "left", '0px']
         ],
         "${_produkt-4}": [
            ["style", "top", '0px'],
            ["style", "left", '717px']
         ],
         "${_produkt-hover-4}": [
            ["style", "top", '-1px'],
            ["style", "opacity", '0'],
            ["style", "left", '716px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"produkt-1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel4',
      type: 'image',
      rect: ['0px','0px','238px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox2',
      type: 'image',
      rect: ['-1px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      rect: ['10px','-85px','221px','78px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text6',
      text: 'Lorem Ipsum, hier steh sinnfreier Text über dieses tolle Kleidungsstück. Und noch mehr Text, blaaaaaa bli blub! Lorem Ipsum shit content.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['10px','-114px','162px','29px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text5',
      text: 'Lorem Ipsum',
      align: 'left',
      type: 'text'
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['27px','52px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '-120px'],
            ["style", "height", '120px'],
            ["style", "width", '295px'],
            ["style", "left", '305px'],
            ["style", "font-size", '60px']
         ],
         "${_Text5}": [
            ["style", "top", '-114px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '29px'],
            ["style", "width", '162px'],
            ["style", "left", '10px'],
            ["style", "font-size", '24px']
         ],
         "${_Text6}": [
            ["transform", "scaleX", '1'],
            ["style", "top", '-85px'],
            ["style", "left", '10px'],
            ["style", "font-size", '13px']
         ],
         "${_panel3_infoBox2}": [
            ["style", "top", '-120px'],
            ["style", "left", '-1px']
         ],
         "${_panel3_shirt1}": [
            ["style", "top", '52px'],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '365px'],
            ["style", "width", '238px']
         ],
         "${_Text4}": [
            ["style", "top", '-77px'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '8px'],
            ["style", "font-size", '26px']
         ],
         "${_panel3_redPanel4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '365px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid390", tween: [ "style", "${_Text5}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid427", tween: [ "style", "${_panel3_shirt1}", "left", '-9px', { fromValue: '27px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid416", tween: [ "style", "${_panel3_shirt1}", "top", '172px', { fromValue: '52px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "style", "${_panel3_infoBox2}", "top", '0px', { fromValue: '-120px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid418", tween: [ "style", "${_panel3_redPanel4}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-15deg', { fromValue: '15deg'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid425", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid393", tween: [ "style", "${_panel3_redPanel4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid419", tween: [ "style", "${_Text5}", "top", '6px', { fromValue: '-114px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid417", tween: [ "style", "${_Text6}", "top", '35px', { fromValue: '-85px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid391", tween: [ "style", "${_Text6}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "style", "${_panel3_infoBox2}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"produkt-2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel4',
      type: 'image',
      rect: ['0px','0px','238px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox2',
      type: 'image',
      rect: ['-1px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      rect: ['10px','-85px','221px','78px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text6',
      text: 'Lorem Ipsum, hier steh sinnfreier Text über dieses tolle Kleidungsstück. Und noch mehr Text, blaaaaaa bli blub! Lorem Ipsum shit content.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['10px','-114px','162px','29px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text5',
      text: 'Lorem Ipsum',
      align: 'left',
      type: 'text'
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['27px','52px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '-120px'],
            ["style", "height", '120px'],
            ["style", "font-size", '60px'],
            ["style", "left", '305px'],
            ["style", "width", '295px']
         ],
         "${_Text5}": [
            ["style", "top", '-114px'],
            ["style", "font-size", '24px'],
            ["style", "height", '29px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '10px'],
            ["style", "width", '162px']
         ],
         "${_Text6}": [
            ["style", "top", '-85px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '10px'],
            ["style", "font-size", '13px']
         ],
         "${_panel3_shirt1}": [
            ["style", "top", '52px'],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '365px'],
            ["style", "width", '238px']
         ],
         "${_panel3_redPanel4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '365px']
         ],
         "${_Text4}": [
            ["style", "top", '-77px'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '8px'],
            ["style", "font-size", '26px']
         ],
         "${_panel3_infoBox2}": [
            ["style", "top", '-120px'],
            ["style", "left", '-1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid390", tween: [ "style", "${_Text5}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid427", tween: [ "style", "${_panel3_shirt1}", "left", '-9px', { fromValue: '27px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid416", tween: [ "style", "${_panel3_shirt1}", "top", '172px', { fromValue: '52px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "style", "${_panel3_infoBox2}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid418", tween: [ "style", "${_panel3_redPanel4}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-15deg', { fromValue: '15deg'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid425", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid417", tween: [ "style", "${_Text6}", "top", '35px', { fromValue: '-85px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid419", tween: [ "style", "${_Text5}", "top", '6px', { fromValue: '-114px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "style", "${_panel3_infoBox2}", "top", '0px', { fromValue: '-120px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid391", tween: [ "style", "${_Text6}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid393", tween: [ "style", "${_panel3_redPanel4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"produkt-3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel4',
      type: 'image',
      rect: ['0px','0px','238px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox2',
      type: 'image',
      rect: ['-1px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      rect: ['10px','-85px','221px','78px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text6',
      text: 'Lorem Ipsum, hier steh sinnfreier Text über dieses tolle Kleidungsstück. Und noch mehr Text, blaaaaaa bli blub! Lorem Ipsum shit content.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['10px','-114px','162px','29px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text5',
      text: 'Lorem Ipsum',
      align: 'left',
      type: 'text'
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['27px','52px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '-120px'],
            ["style", "height", '120px'],
            ["style", "width", '295px'],
            ["style", "left", '305px'],
            ["style", "font-size", '60px']
         ],
         "${_Text5}": [
            ["style", "top", '-114px'],
            ["style", "width", '162px'],
            ["style", "height", '29px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '10px'],
            ["style", "font-size", '24px']
         ],
         "${_Text6}": [
            ["transform", "scaleX", '1'],
            ["style", "top", '-85px'],
            ["style", "left", '10px'],
            ["style", "font-size", '13px']
         ],
         "${_panel3_shirt1}": [
            ["style", "top", '52px'],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '365px'],
            ["style", "width", '238px']
         ],
         "${_panel3_infoBox2}": [
            ["style", "top", '-120px'],
            ["style", "left", '-1px']
         ],
         "${_Text4}": [
            ["style", "top", '-77px'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '8px'],
            ["style", "font-size", '26px']
         ],
         "${_panel3_redPanel4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '365px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid392", tween: [ "style", "${_panel3_infoBox2}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid427", tween: [ "style", "${_panel3_shirt1}", "left", '-9px', { fromValue: '27px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid416", tween: [ "style", "${_panel3_shirt1}", "top", '172px', { fromValue: '52px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid393", tween: [ "style", "${_panel3_redPanel4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid418", tween: [ "style", "${_panel3_redPanel4}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-15deg', { fromValue: '15deg'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid425", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "style", "${_panel3_infoBox2}", "top", '0px', { fromValue: '-120px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid419", tween: [ "style", "${_Text5}", "top", '6px', { fromValue: '-114px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid417", tween: [ "style", "${_Text6}", "top", '35px', { fromValue: '-85px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid391", tween: [ "style", "${_Text6}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid390", tween: [ "style", "${_Text5}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"produkt-4": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel4',
      type: 'image',
      rect: ['0px','0px','238px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox2',
      type: 'image',
      rect: ['-1px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      rect: ['10px','-85px','221px','78px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text6',
      text: 'Lorem Ipsum, hier steh sinnfreier Text über dieses tolle Kleidungsstück. Und noch mehr Text, blaaaaaa bli blub! Lorem Ipsum shit content.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['10px','-114px','162px','29px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text5',
      text: 'Lorem Ipsum',
      align: 'left',
      type: 'text'
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['27px','52px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt4.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '-120px'],
            ["style", "height", '120px'],
            ["style", "font-size", '60px'],
            ["style", "left", '305px'],
            ["style", "width", '295px']
         ],
         "${_Text5}": [
            ["style", "top", '-114px'],
            ["style", "font-size", '24px'],
            ["style", "height", '29px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '10px'],
            ["style", "width", '162px']
         ],
         "${_Text6}": [
            ["style", "top", '-85px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '10px'],
            ["style", "font-size", '13px']
         ],
         "${_panel3_shirt1}": [
            ["style", "top", '52px'],
            ["style", "left", '27px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '365px'],
            ["style", "width", '238px']
         ],
         "${_panel3_redPanel4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '365px']
         ],
         "${_Text4}": [
            ["style", "top", '-77px'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '8px'],
            ["style", "font-size", '26px']
         ],
         "${_panel3_infoBox2}": [
            ["style", "top", '-120px'],
            ["style", "left", '-1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid392", tween: [ "style", "${_panel3_infoBox2}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid393", tween: [ "style", "${_panel3_redPanel4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid416", tween: [ "style", "${_panel3_shirt1}", "top", '172px', { fromValue: '52px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid390", tween: [ "style", "${_Text5}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid418", tween: [ "style", "${_panel3_redPanel4}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid422", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-15deg', { fromValue: '15deg'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid425", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid417", tween: [ "style", "${_Text6}", "top", '35px', { fromValue: '-85px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid419", tween: [ "style", "${_Text5}", "top", '6px', { fromValue: '-114px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid420", tween: [ "style", "${_panel3_infoBox2}", "top", '0px', { fromValue: '-120px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid391", tween: [ "style", "${_Text6}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid427", tween: [ "style", "${_panel3_shirt1}", "left", '-9px', { fromValue: '27px'}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"panel-4": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel4_clothesRack2',
      type: 'image',
      rect: ['0px','0px','958px','365px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_clothesRack.jpg','0px','0px']
   },
   {
      id: 'panel4_diamond_flora',
      type: 'image',
      rect: ['528px','-49px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy3',
      type: 'image',
      rect: ['282px','197px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy4',
      type: 'image',
      rect: ['282px','-295px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy5',
      type: 'image',
      rect: ['36px','-49px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy6',
      type: 'image',
      rect: ['-210px','198px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy9',
      type: 'image',
      rect: ['774px','198px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy10',
      type: 'image',
      rect: ['774px','-296px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy8',
      type: 'image',
      rect: ['-457px','-48px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_diamond_floraCopy7',
      type: 'image',
      rect: ['-211px','-295px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   },
   {
      id: 'panel4_header_box',
      type: 'image',
      rect: ['629px','166px','291px','63px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_header_box.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',130,'rgba(196,155,92,1.00)','normal','none','normal'],
      rect: ['636px','105px','275px','90px','auto','auto'],
      align: 'left',
      text: 'Alice',
      id: 'Text7',
      opacity: 1,
      clip: ['rect(0px 0px 141px -32px)'],
      type: 'text'
   },
   {
      id: 'panel4_alice',
      type: 'image',
      rect: ['-91px','13px','565px','352px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_alice.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel4_clothesRack2}": [
            ["style", "height", '365px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_panel4_diamond_floraCopy7}": [
            ["style", "top", '-295px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '-211px'],
            ["transform", "scaleX", '1']
         ],
         "${_panel4_diamond_floraCopy6}": [
            ["style", "top", '198px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '-210px'],
            ["transform", "scaleX", '1']
         ],
         "${_Text7}": [
            ["style", "top", '105px'],
            ["style", "clip", [0,0,141,-32], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "color", 'rgba(196,155,92,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '636px'],
            ["style", "font-size", '130px']
         ],
         "${_panel4_diamond_floraCopy4}": [
            ["style", "top", '-295px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '282px'],
            ["transform", "scaleX", '1']
         ],
         "${_panel4_diamond_floraCopy9}": [
            ["style", "top", '198px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '774px'],
            ["transform", "scaleX", '1']
         ],
         "${_panel4_alice}": [
            ["style", "top", '13px'],
            ["style", "height", '352px'],
            ["style", "left", '-528px'],
            ["style", "width", '565px']
         ],
         "${_panel4_diamond_floraCopy8}": [
            ["style", "top", '-48px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '-457px'],
            ["transform", "scaleX", '1']
         ],
         "${_panel4_header_box}": [
            ["style", "top", '166px'],
            ["style", "height", '63px'],
            ["style", "left", '629px'],
            ["style", "width", '291px']
         ],
         "${_panel4_diamond_floraCopy5}": [
            ["style", "top", '-49px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '36px'],
            ["transform", "scaleX", '1']
         ],
         "${_panel4_diamond_flora}": [
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "top", '-49px'],
            ["style", "left", '528px']
         ],
         "${_panel4_diamond_floraCopy10}": [
            ["style", "top", '-296px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '774px'],
            ["transform", "scaleX", '1']
         ],
         "${_panel4_diamond_floraCopy3}": [
            ["style", "top", '197px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '282px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '365px'],
            ["style", "width", '958px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid484", tween: [ "transform", "${_panel4_diamond_floraCopy8}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid488", tween: [ "style", "${_panel4_alice}", "left", '-91px', { fromValue: '-528px'}], position: 640, duration: 1000, easing: "easeOutBack" },
            { id: "eid490", tween: [ "style", "${_Text7}", "clip", [0,300,141,-32], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,141,-32]}], position: 1250, duration: 1750, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_panel4_diamond_flora}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid482", tween: [ "transform", "${_panel4_diamond_floraCopy6}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid475", tween: [ "transform", "${_panel4_diamond_floraCopy5}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid478", tween: [ "transform", "${_panel4_diamond_floraCopy3}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid470", tween: [ "transform", "${_panel4_diamond_floraCopy4}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid480", tween: [ "transform", "${_panel4_diamond_floraCopy7}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid483", tween: [ "transform", "${_panel4_diamond_floraCopy8}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid476", tween: [ "transform", "${_panel4_diamond_floraCopy5}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid486", tween: [ "style", "${_panel4_alice}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0, easing: "easeInOutElastic" },
            { id: "eid467", tween: [ "transform", "${_panel4_diamond_floraCopy9}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid468", tween: [ "transform", "${_panel4_diamond_floraCopy9}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid471", tween: [ "transform", "${_panel4_diamond_floraCopy10}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid472", tween: [ "transform", "${_panel4_diamond_floraCopy10}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid477", tween: [ "transform", "${_panel4_diamond_floraCopy3}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid481", tween: [ "transform", "${_panel4_diamond_floraCopy6}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid469", tween: [ "transform", "${_panel4_diamond_floraCopy4}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid474", tween: [ "transform", "${_panel4_diamond_flora}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid479", tween: [ "transform", "${_panel4_diamond_floraCopy7}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7307768");
