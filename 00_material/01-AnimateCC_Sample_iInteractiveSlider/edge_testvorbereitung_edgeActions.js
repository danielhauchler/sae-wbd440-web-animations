/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-right}", "mouseover", function(sym, e) {
         sym.getSymbol('arrow-right').stop('hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-right}", "mouseout", function(sym, e) {
         sym.getSymbol('arrow-right').stop('normal');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-left}", "mouseover", function(sym, e) {
         sym.getSymbol('arrow-left').stop('hover');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-left}", "mouseout", function(sym, e) {
         sym.getSymbol('arrow-left').stop('normal');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-right}", "click", function(sym, e) {
         
         currentPos = sym.getPosition();
         
         if(panel1 == currentPos){
         	sym.stop(panel2);
         }
         
         if(panel2 == currentPos){
         	sym.stop(panel3);
         }
         
         if(panel3 == currentPos){
         	sym.stop(panel4);
         }
         
         if(panel4 == currentPos){
         	sym.stop(panel1);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         panel1 = sym.getLabelPosition('slide1');
         panel2 = sym.getLabelPosition('slide2');
         panel3 = sym.getLabelPosition('slide3');
         panel4 = sym.getLabelPosition('slide4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow-left}", "click", function(sym, e) {
         
         currentPos = sym.getPosition();
         
         if(panel1 == currentPos){
         	sym.stop(panel4);
         }
         
         if(panel2 == currentPos){
         	sym.stop(panel1);
         }
         
         if(panel3 == currentPos){
         	sym.stop(panel2);
         }
         
         if(panel4 == currentPos){
         	sym.stop(panel3);
         }
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'panel-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.play('auto-loop');

      });
      //Edge binding end

   })("panel-1");
   //Edge symbol end:'panel-1'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'panel-2'
   (function(symbolName) {   
   
   })("panel-2");
   //Edge symbol end:'panel-2'

   //=========================================================
   
   //Edge symbol: 'arrow-right'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("arrow-right");
   //Edge symbol end:'arrow-right'

   //=========================================================
   
   //Edge symbol: 'arrow-right_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("arrow-left");
   //Edge symbol end:'arrow-left'

   //=========================================================
   
   //Edge symbol: 'panel-3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-1}", "mouseover", function(sym, e) {
         sym.getSymbol('produkt-1').play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-1}", "mouseout", function(sym, e) {
         sym.getSymbol('produkt-1').playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-2}", "mouseover", function(sym, e) {
         sym.getSymbol('produkt-2').play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-2}", "mouseout", function(sym, e) {
         sym.getSymbol('produkt-2').playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-3}", "mouseover", function(sym, e) {
         sym.getSymbol('produkt-3').play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-3}", "mouseout", function(sym, e) {
         sym.getSymbol('produkt-3').playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-4}", "mouseover", function(sym, e) {
         sym.getSymbol('produkt-4').play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_produkt-hover-4}", "mouseout", function(sym, e) {
         sym.getSymbol('produkt-4').playReverse();

      });
      //Edge binding end

   })("panel-3");
   //Edge symbol end:'panel-3'

   //=========================================================
   
   //Edge symbol: 'panel-3_hover-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("produkt-1");
   //Edge symbol end:'produkt-1'

   //=========================================================
   
   //Edge symbol: 'produkt-1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("produkt-2");
   //Edge symbol end:'produkt-2'

   //=========================================================
   
   //Edge symbol: 'produkt-2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("produkt-3");
   //Edge symbol end:'produkt-3'

   //=========================================================
   
   //Edge symbol: 'produkt-3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("produkt-4");
   //Edge symbol end:'produkt-4'

   //=========================================================
   
   //Edge symbol: 'panel-4'
   (function(symbolName) {   
   
   })("panel-4");
   //Edge symbol end:'panel-4'

})(jQuery, AdobeEdge, "EDGE-7307768");