import pyjd
import urllib



from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML

import MTurk
import BIO

class CodeSwitching(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self,Width="500px",Height="300px")


if __name__ == '__main__':
    pyjd.setup("./public/CodeSwitching.html") # dummy in pyjs                                                 
    exp = CodeSwitching()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
