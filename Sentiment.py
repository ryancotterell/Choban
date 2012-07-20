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

class Sentiment(VerticalPanel):
    
    def __init__(self):
        VerticalPanel.__init__(self,Width="500px",Height="300px")

        
        mturk_input = MTurk.MTurkInput()

        self.mturk_output = MTurk.MTurkOutput(True,mturk_input.assignmentId,mturk_input.hitId,mturk_input.workerId,self.write_data)

        commit = Button("Submit",self)
        table = FlexTable()

        sentences = mturk_input.params.values()
        sentence_widgets = []

    
   
        self.sentence_set = BIO.BIOSentenceSet(sentences,map(lambda x: urllib.unquote(x).split(),sentences))

        table.setWidget(0,0,self.sentence_set)
        table.setWidget(1,0,commit)


        title = "<p><h3>Corrija HITs Mal Deletreados</h3></p>"

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
<td>!USERNAME!, !WEBSITE!, !HASHTAG!</td><td>Ignorelo</td>
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
        tarea = "<p><h3>Tarea</h3></p>"
        
        self.add(HTML(title))
        self.add(HTML(instructions))
        self.add(HTML(examples))
        self.add(HTML(tarea))

        self.add(table)
        self.add(self.mturk_output.mturk_form)

      
    def onClick(self):
        self.mturk_output.add_data(self.sentence_set.get_sentences())
        self.mturk_output.add_data(self.sentence_set.get_masks())
        self.mturk_output.add_data(self.sentence_set.get_annotations())
        
        self.mturk_output.mturk_form.submit()

if __name__ == '__main__':
    pyjd.setup("./public/Sentiment.html") # dummy in pyjs                                                 
    exp = Sentiment()
    RootPanel().add(exp)
    pyjd.run() # dummy in pyjs     
