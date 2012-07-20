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

class Survey(VerticalPanel):
    """
    This is a langauge survey panel
    """

    def __init__(self,questions):
        """
        questions is a list of tuples

        the first value is a string repreesnting the question
        the second value is a boolean value that represents whether the question is true/false
        

        ("Are you a native Spanish speaker?",true)
        ("How old are you",false)

        """
        

        VerticalPanel.__init__(self)
        self.add(HTML("Hello"))

        table = FlexTable()
        for i,question in questions:
            table.setWidget(i,0,HTML(question[0]))

        self.add(table)

    
