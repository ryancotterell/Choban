import pyjd
import urllib

from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.RadioButton import RadioButton
from pyjamas.ui.TextBox import TextBox
from pyjamas import Cookies

import MTurk
import BIO

class Survey(VerticalPanel):
    """
    This is a langauge survey panel
    """

    def __init__(self,questions,unique_id):
        """
        questions is a list of tuples

        the first value is a string repreesnting the question
        the second value is a boolean value that represents whether the question is true/false
`        

        ("Are you a native Spanish speaker?",true)
        ("How old are you",false)

        """
        

        VerticalPanel.__init__(self)

        self.unique_id = unique_id

        self.answers = []

        table = FlexTable()
        for i,question in enumerate(questions):

            table.setWidget(i,0,HTML(question[0]))
            if (question[1] == True):
                radio1 = RadioButton("truefalse","Yes")
                radio2 = RadioButton("truefalse","No")
                
                self.answers.append((question[0],question[1],(radio1,radio2)))
                
                radiotable = FlexTable()
                radiotable.setWidget(0,0,radio1)
                radiotable.setWidget(0,1,radio2)
                table.setWidget(i,1,radiotable)
            else:
                textbox = TextBox()
                
                self.answers.append((question[0],question[1],textbox))
                
                table.setWidget(i,1,textbox)


        if (not self.is_cookie_set()):
            self.add(HTML("<p><strong>Please fill out this quick survey.</strong> (You will only have to do so once)</p>"))
            self.add(table)


    def get_answers(self):
        answers = []
        for i,answer in enumerate(self.answers):
            if answer[1] == True:
                if answer[2][0].isChecked():
                    answers.append("True")
                elif answer[2][1].isChecked():
                    answers.append("False")
                else:
                    answers.append("")
            else:
                answers.append(answer[2].getText())

        return answers


    def survey_filledout(self):
        if ("" in self.get_answers()):
            return False
        else:
            return True

    def is_cookie_set(self):
        if (Cookies.getCookie(self.unique_id)):
            return True
        else:
            return False


    def set_cookie(self):
        Cookies.setCookie(self.unique_id,"freshly baked",10000000)

    
