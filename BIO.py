import pyjd
import urllib

from pyjamas.ui.VerticalPanel import  VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.HTML import HTML
from pyjamas import Window
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Label import Label
from pyjamas.ui import HasVerticalAlignment


class BIOSentenceSet(VerticalPanel):
    """
    This is a set of sentences for highlighitng 
    in order to easy its positioning in other panels
    """
    def __init__(self,tokens):
        """
        Note that here tokens must be a list of lists
        """
        VerticalPanel.__init__(self)
        
        table = FlexTable()
        self.bio_widgets = []
        for i,token_list in enumerate(tokens):
            self.bio_widgets.append(BIOhighlighter(i,token_list))
            table.setWidget(i,0,self.bio_widgets[i])
        
        self.add(table)

    def get_masks(self):
        return [widget.get_mask() for widget in self.bio_widgets]

    def get_annotations(self):
        masks = []
        for widget in self.bio_widgets:
            
            masks.extend(widget.get_annotation())
            
        return masks
                  

         
class BIOhighlighter(VerticalPanel):
    """
    This places a panel with text that should be
    highlighted on the panel. The input should be 
    tokenized
    """
    def __init__(self,sentenceid, tokens):
        VerticalPanel.__init__(self)
        self.vertAlign = HasVerticalAlignment.ALIGN_TOP
        self.widget_panel = VerticalPanel()
        self.table = FlexTable()
        self.sentenceid = str(sentenceid)
        self.tokens = []
        self.words = []
        self.word_boxes = []

        prev = None
        for i,token in enumerate(tokens):
            tmp = Word(token,["whitebg","orangebg","yellowbg"],prev,[(0,2)],self.enforce_constraints,self.update_widget)
            self.words.append(tmp)
            prev = tmp
            self.tokens.append(tmp)
            self.table.setWidget(0,i,tmp)
        

        self.add(self.table)


    def get_annotation(self):
        return [("sentence" + self.sentenceid + "annotation" + str(i),wordbox.textbox.getText()) for i,wordbox in enumerate(self.word_boxes)]

    def get_mask(self):
        """
        Returns the mask of a sentence. Numerically equivalent
        to the BIO format
        0  = O
        1 = B
        2 = I
        """
        
        return ("sentence" + self.sentenceid, "".join([str(word.state) for word in self.words]))

    def update_widget(self):

        previous_answers = { }
        for wordbox in self.word_boxes:
           previous_answers[str(wordbox.token_index)] = wordbox


        self.word_boxes = []

        self.remove(self.widget_panel)
        self.widget_panel = VerticalPanel()
        highlighted_words = []
        curr = ""
        index = 0
        for i,word in enumerate(self.tokens):
            if word.state == 1:
                if curr != "":
                    highlighted_words.append((index,curr))
                    curr = ""
                index = i
                curr += word.text
            elif word.state == 2:
                curr += " %s" % word.text
            elif curr != "":
                highlighted_words.append((index,curr))
                curr = ""    
                index = i
        if curr != "":
            highlighted_words.append((index,curr))
            curr = ""
            index = i

        #should refactor into one loop
        
        for i,word in highlighted_words:
            tmp_wordbox = WordBox(i,word)
            
            if (str(i) in previous_answers.keys()):
                tmp_wordbox.textbox.setText(previous_answers[str(i)].textbox.getText())
            self.word_boxes.append(tmp_wordbox)
            self.widget_panel.add(tmp_wordbox)
            
        self.add(self.widget_panel)


    def encoding_for_css(self):
        pass
        """
        Takes a standard mask and return a five symbol encoding in 
        order to mark the css borders
        0 = no selection
        1 = state 1 complete border
        2 = state 1 right + middle border
        3 = state 2 middle (no end border)
        4 = state 2 middle + left border

        """
        '''
        encoding = []
        for i,t in enumerate(zip(self.tokens,self.tokerns[1:])):
            if (t[0] == 0):
                encoding.append(0)
            elif (t[0] == 2 and (t[1] == 0 or t[1] == 2)):
                encoding.append(1)
            elif (t[0] == 2 and t[1] == 1):
                encoding.append(2)
            elif (t[0] == 1 and t[1] == 
            
         '''
    def enforce_constraints(self):
        """
        Enforces the highlighting constraints such that
        every entity highlighted sequence marked is indeed valid
        If an invalid sequence is found the tokens are reverted

        to the original state
        """
        if self.tokens[0].state == 2:
            self.tokens[0].state = 0
            self.tokens[0].redraw()
        
        for i,t in enumerate(zip(self.tokens,self.tokens[1:])):
            if (t[0].state == 0 and t[1].state == 2):
                self.tokens[i+1].state = 0
                self.tokens[i+1].redraw()


class WordBox(HorizontalPanel):
    """
    This is a text box with the corresponding word that is to be normalized
    """
    def __init__(self, token_index, target_word):
        HorizontalPanel.__init__(self)
        self.token_index = token_index
        self.table = FlexTable()
        self.label = Label(target_word)
        self.textbox = TextBox()
        self.add(self.label)
        self.add(self.textbox)


class Word(HTML):
    """
    One word in a sentence for highlighting
    """
    def __init__(self,text,styles,prev,constraints,enforce_constraints,update_widgets):
        #Constraints are of the forms (x,y) where 
        #both x and y are integers in the set of possible
        #states. x represents the state of this word
        #and y represents the state of the previous word
        HTML.__init__(self,text)
        self.text = text
        self.addClickListener(self)
        self.state = 0
        self.styles = styles
        self.prev = prev
        self.constraints = constraints
        self.enforce_constraints = enforce_constraints
        self.update_widgets = update_widgets
	self.addStyleName("clickable")

 
    def onClick(self):
        self.state += 1

        while (self.prev != None and (self.prev.state,self.state) in self.constraints):
            self.state += 1

        if (self.state == len(self.styles)):
            self.state = 0
        self.redraw()

        self.enforce_constraints()

        self.update_widgets()
    
    def redraw(self):
         self.setStyleName(self.styles[self.state])
	 self.addStyleName("clickable")

