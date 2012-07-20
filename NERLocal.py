
import pyjd
import urllib

from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Button import Button

from __pyjamas__ import JS

import MTurk
import BIO


class Sequencer(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self,Width="500px",Height="300px")

        self.commit = Button("Submit",self)
        self.current_block = NERBlock()

        self.add(self.current_block)
        self.add(self.commit)

    def onClick(self):
        self.current_block.send_results()
        self.remove(self.current_block)
        self.remove(self.commit)
        self.current_block = NERBlock()
        self.add(self.current_block)
        self.add(self.commit)

class NERBlock(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self)
        

        table = FlexTable()

        sentences = self.get_stimuli()
        sentence_widgets = []
   
        
        self.sentence_set = BIO.BIOSentenceSet(sentences,[x.split() for x in sentences])

        table.setWidget(0,0,self.sentence_set)

        self.add(table)



    def get_stimuli(self):
        response = ""
        JS("""                                                                                                                                              
     var req = new XMLHttpRequest();                                                                                                                       
     req.open('GET', '/data', false);                                                                                                           
     req.setRequestHeader("Content-type","application/x-www-form-urlencoded");                                                          
     req.send()                                               
     response = req.responseText;""")
        return response.split("\n")


    def send_results(self):
       
        sentences = dict(self.sentence_set.get_sentences())
        masks = dict(self.sentence_set.get_masks())
        annotations = dict(self.sentence_set.get_annotations())
    
        encoding = urllib.urlencode(sentences) + "&" + urllib.urlencode(masks) + "&" +  urllib.urlencode(annotations)


        JS("""                                                                                                                                              
     var req = new XMLHttpRequest();                                                                                                                        
     req.open('POST', '', false);                                                                                                           
     req.setRequestHeader("Content-type","form-data");                                                                              
     req.send(encoding);                                                                      
     response = req.responseText;""")
        #return response

if __name__ == '__main__':
    pyjd.setup("./public/NERLocal.html") # dummy in pyjs                                                 
    exp = Sequencer()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
