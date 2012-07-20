import pyjd
import urllib



from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.RadioButton import RadioButton

import MTurk
import BIO

class CodeSwitching(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self,Width="500px",Height="300px")
        
        
        table = FlexTable()

        for i,sentence in enumerate(["The dog is red","The cat is blue","The bear is green"]):
            table.setWidget(i,0,CodeSwitchingSentence(sentence))
            
        self.add(table)
    
class CodeSwitchingSentence(VerticalPanel):

    
    def __init__(self,sentence):
        VerticalPanel.__init__(self)

        self.sentence = sentence

        self.tokens = sentence.split()
        
        self.table = FlexTable()
        self.table.setStyleName("codeswitchtable")

        

        self.radiobuttons = []
        

        for i,token in enumerate(self.tokens):
            self.radiobuttons.append(RadioButton(""))
            tmp = HTML(token)
            tmp.setStyleName("codeswitchtable")
            self.table.setWidget(0,i,tmp)
            self.table.setWidget(1,i,self.radiobuttons[i])
        
        
        
        self.add(self.table)
        

       


if __name__ == '__main__':
    pyjd.setup("./public/CodeSwitch.html") # dummy in pyjs                                                 
    exp = CodeSwitching()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
