#!/usr/bin/python

from pyjamas import Window
from pyjamas.ui.Hidden import Hidden
from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.VerticalPanel import VerticalPanel

class MTurkInput:

    def __init__(self):
        url = Window.getLocation().getHref()

        variables = self.parse_url(url)
    
        if variables['assignmentId'] == "ASSIGNMENT_ID_NOT_AVAILABLE":
            self.accepted = False
        else:
            self.accepted = True

        #adds class variables if the hit is accepted

        if self.accepted == True:
            self.assignmentId = variables['assignmentId']
            self.workerId = variables['workerId']
            self.hitId = variables['hitId']

        def is_standard_param(param):
            standard_params = ["assignmentId","hitId","workerId","turkSubmitTo"]
            return param in standard_params

            
        self.params = dict((k,variables[k]) for k in variables.keys() if not is_standard_param(k))
            
    def parse_url(self,url):
        """                                                                          
        parses the url and return the proper dictionary                              
        """
        variables = {}
        assignments = url.split("?")[1]
        for pair in assignments.split("&"):
            (k,v) = pair.split("=")
            variables[k] = v

        return variables


class MTurkOutput:
    """                                                                               
    This class encapsulated all that is germane to sending the results to MTurk       
    thus enabling the separating of the logic from the gui                            
    """
    def __init__(self,sandbox,assignmentId,hitId,workerId):
       

        self.mturk_form = FormPanel()
        # change this to sandbox url once ready for testing                           
        self.write_data = write_data

        if sandbox:
            self.mturk_form.setAction("https://workersandbox.mturk.com/mturk/externalSubmit")                                                                                   
        else:
            self.mturk_form.setAction("http://www.mturk.com/mturk/externalSubmit")
        

        self.mturk_form.setMethod(FormPanel.METHOD_POST)
        self.assignmentId = Hidden("assignmentId")
        self.hitId = Hidden("hitId")
        self.workerId = Hidden("workerId")
        self.assignmentId.setValue(assignmentId)
        self.hitId.setValue(hitId)
        self.workerId.setValue(workerId)
        self.vp = VerticalPanel()
        self.vp.add(self.assignmentId)
        self.vp.add(self.hitId)
        self.vp.add(self.workerId)

        self.mturk_form.add(self.vp)


    def add_data(self,data):
        """                                                                           
        Adds data -- takes as argument a list of pairs                                
        """
        for k,v in data:
            tmp = Hidden(k)
            tmp.setValue(v)
            self.vp.add(tmp)

