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
import TurkerInfo

class Sentiment(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self,Width="500px",Height="300px")


        self.survey = TurkerInfo.Survey([("Is Spanish your native language?",True),("How many years have you spoken Spanish?",False),("Where do you live?",False),("Where are you from?",False)],"normalization-hit-SCALE2012")
        
        self.mturk_input = MTurk.MTurkInput()

        self.mturk_output = MTurk.MTurkOutput(True,self.mturk_input.assignmentId,self.mturk_input.hitId,self.mturk_input.workerId,self.write_data)

        commit = Button("Submit",self)
        table = FlexTable()

        sentences = self.mturk_input.params.values()
        sentence_widgets = []

    
   
        self.sentence_set = BIO.BIOSentenceSet(sentences,map(lambda x: urllib.unquote(x).split(),sentences))

        table.setWidget(0,0,self.sentence_set)
        table.setWidget(1,0,commit)


        title = "<p><h3>Corrija Tweets Mal Deletreados</h3></p>"

        instructions = "<p>Cuando las personas escriben en la internet, generalmente utilizan jerga, abreviaciones y otras tecnicas creativas para ahorrar espacio y hacer el diálogo mas interesante. Esto ocurre especialmente en SMS y en Twiter, donde la extesión del mensaje está limitado.</p><p><em>¡creo q s xq tienes un chévere avatar!</em><p><p>En este HIT, Usted va a encontrar estas abreviaciones, jerga, acrónimos y palabras mal deletreadas en Twiter. Además de identificar estas palabras, Usted tiene que traducirlas a palabras de uso diario. A continuación le damos un ejemplo.</p><p>En este HIT, Usted encontrará una serie de tweets que contienen este tipo de lenguaje. Su trabajo es seleccionar este tipo de palabras y escribir debajo la pabra correcta o completa ejemplo \"xq\" -> \"porque\". Para lograr esto, Usted tiene que hacer click en la palabra que Usted quiera definir. Cuando usted haga click en la palabra, el color de fondo cambiará y un cuadro de texto aparecerá debajo del tweet. Escriba la palabra correcta en el cuadro de texto. Usted puede seleccionar mas de una palabra en cada tweet. Si Usted selecciona una palabra que no desea por accidente, simplemente haga click en la palabra hasta que el color de fondo desaparescá.</p><p>Nosotros hemos reemplazado a todos los nombres de usuarios de Tweeter por USUARIO. Tambien hemos reemplazado a todas las direcciones de internet por WEBSITE y hashtags por HASHTAG. Por favor, ignore estas palabras.</p>"

        examples = """<table>
<tr>
<th>
<strong>Si Usted ve...</strong>
</th>
<th>
<strong>Usted debe de hacer..:</strong>
</th>
</tr>

<tr>
<td>[USERNAME],[WEBSITE], [HASHTAG]</td><td>Ignorelo</td>
</tr>
<tr>
<td>Emoticonos (":-)", ":D"):</td><td>Ignorelo</td>
</tr>
<tr>
<td>Puntuación (errores en puntuación- puntos, comas, etc.):</td><td>Ignorelo</td>
<tr>
<td>"jajajaja" u otra onomatopoeia:</td><td>Ignorelo</td>
</tr>
<tr>
<td>Letras repetidas ("amooooorrrrr"): </td><td>Escriba la palabra que Usted piensa que quiso decir la persona (en este caso, "amor")</td>
</tr>
<tr>
<td>Palabras mal deletreadas (incluyendo los acentos que faltan - por ejemplo, la palabra "si" es bien disinto a la palabra "sí")</td><td>Escriba la palabra bien deletreada.</td>
</tr>
</table>"""

        examples2 = """
<br><b>Examples and Explanations:</b>

<p><span style="background-color: orange">eljefe</span> quiere <span style="background-color: orange">dar</span> <span style="background-color: yellow">me</span> un regalito</br>

<table>

<tr><td>eljefe</td> <td><input type="text" value="el jefe" disabled></td><td><i>Es aceptable escribir dos palabras en una caja.</i></td></tr>

<tr><td>dar me</td> <td><input type="text" value="darme" disabled></td><td><i>Para cambiar dos palabras en una palabra, se usa el fondo <span style="background-color: yellow">amarillo</span> para la segunda palabra.</i></td></tr>

</table>

<p>[USERNAME] .será <span style="background-color: orange">q</span> ellos viven <span style="background-color: orange">n</span> otro <span style="background-color: orange">pais</span> diferente al <span style="background-color: orange">mio</span> ? <span style="background-color: orange">sto</span> <span style="background-color: orange">s</span> un paraíso.todas las metas <span style="background-color: orange">c</span> <span style="background-color: orange">cumplieron.aqui</span> <span style="background-color: orange">stá</span> todo <span style="background-color: orange">bien.excsivament</span> normal .</br>

<table>

<tr><td>q</td> <td><input type="text" value="que" disabled></td><td>&nbsp;</td></tr> 

<tr><td>n</td> <td><input type="text" value="en" disabled></td><td>&nbsp;</td></tr>

<tr><td>pais</td> <td><input type="text" value="país" disabled></td><td><i>Por favor, corrija los acentos que faltan</i></td></tr>

<tr><td>mio</td> <td><input type="text" value="mío" disabled></td><td>&nbsp;</td></tr>

<tr><td>sto</td> <td><input type="text" value="esto" disabled></td><td>&nbsp;</td></tr>

<tr><td>s</td> <td><input type="text" value="es" disabled></td><td>&nbsp;</td></tr>

<tr><td>c</td> <td><input type="text" value="se" disabled></td><td>&nbsp;</td></tr>

<tr><td>cumplieron.aqui</td> <td><input type="text" value="complieron . aquí" disabled></td><td><i>Cuando hay errores en puntuación, es necesario corrigirlos sólo si hay un error en una de las palabra. (Fijese que no corrigimos paraíso.todas porque las dos palabras estaban bien escritas </i></td></tr>

<tr><td>stá</td> <td><input type="text" value="está" disabled></td><td>&nbsp;</td></tr>

<tr><td>bien.excsivament</td> <td><input type="text" value="bien . excesivamente" disabled></td><td>&nbsp;</td></tr>

</table>"""


        tarea = "<p><h3>Tarea</h3></p>"
        

        self.add(HTML(title))
        self.add(HTML(instructions))
        self.add(HTML(examples))
        self.add(HTML(examples2))


        
        if not self.survey.is_cookie_set():
            self.add(self.survey)

        self.add(HTML(tarea))

        self.add(table)
        self.add(self.mturk_output.mturk_form)

      
    def onClick(self):

        if not self.survey.is_cookie_set() and self.mturk_input.accepted == True:
             if not self.survey.survey_filledout():
                 Window.alert("Please fill out the survey")
             else:

                 self.survey.set_cookie()

                 encoded_answers = []
                 for i,answer in enumerate(self.survey.get_answers()):
                     encoded_answers.append(("survey_answer%d" % i,answer))

                     

                 self.mturk_output.add_data(encoded_answers)
                 self.mturk_output.add_data(self.sentence_set.get_sentences())
                 self.mturk_output.add_data(self.sentence_set.get_masks())
                 self.mturk_output.add_data(self.sentence_set.get_annotations())
                 self.mturk_output.mturk_form.submit()
        else:
             self.mturk_output.add_data(self.sentence_set.get_sentences())
             self.mturk_output.add_data(self.sentence_set.get_masks())
             self.mturk_output.add_data(self.sentence_set.get_annotations())
             self.mturk_output.mturk_form.submit()


if __name__ == '__main__':
    pyjd.setup("./public/Sentiment.html") # dummy in pyjs                                                 
    exp = Sentiment()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
