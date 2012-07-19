import pyjd
import urllib

from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Button import Button

import MTurk
import BIO

class Sentiment(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self,Width="500px",Height="300px")
        
#        mturk_input = MTurk.MTurkInput()

 #       self.mturk_output = MTurk.MTurkOutput(True,mturk_input.assignmentId,mturk_input.hitId,mturk_input.workerId,self.write_data)

        commit = Button("Submit",self)
        table = FlexTable()

   #     sentences = mturk_input.params.values()
        sentence_widgets = []
   
        whatever = ["The quick brown fox jumps over the lazy dog","The quick brown fox jumps over the lazy dog"]
        self.sentence_set = BIO.BIOSentenceSet(map(lambda x: x.split(),whatever))

        table.setWidget(0,0,self.sentence_set)
        table.setWidget(1,0,commit)
        self.add(table)
  #      self.add(self.mturk_output.mturk_form)

      
#    def onClick(self):
 #       self.mturk_output.add_data(self.sentence_set.get_masks())
  #      self.mturk_output.add_data(self.sentence_set.get_annotations())
        
   #     self.mturk_output.mturk_form.submit()

if __name__ == '__main__':
    pyjd.setup("./public/Sentiment.html") # dummy in pyjs                                                 
    exp = Sentiment()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
