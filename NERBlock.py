import pyjd
import urllib

from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Button import Button

import MTurk
import BIO


class Sequencer(VerticalPanel):
    
    def __init__(self):
        pass

class NERBlock(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self)
        

        table = FlexTable()

        sentences = mturk_input.params.values()
        sentence_widgets = []
   
        
        self.sentence_set = BIO.BIOSentenceSet(map(lambda x: urllib.unquote(x).split(),sentences))

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
        JS("""                                                                                                                                              
     var req = new XMLHttpRequest();                                                                                                                        
     req.open('POST', '', false);                                                                                                           
     req.setRequestHeader("Content-type","application/x-www-form-urlencoded");                                                                              
     req.send();                                                                      
     response = req.responseText;""")
        return response

if __name__ == '__main__':
    pyjd.setup("./public/Sentiment.html") # dummy in pyjs                                                 
    exp = Sentiment()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
