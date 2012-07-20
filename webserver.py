import string
import cgi
import os
import sys

from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer


class AnnotationFrameWork:
    



    def __init__(self):

        file_input = open(sys.argv[1],'r')
        self.id_sentence_pairs = map(lambda x: (x.split("\t")[0],x.split("\t")[1].rstrip("\n")),file_input.readlines())

        
             

        def get_next_sentences():
            return map(lambda x: x[1],self.id_sentence_pairs[0:10])

        def refresh_sentences():

            next_ten = self.id_sentence_pairs[0:10]
            self.id_sentence_pairs = self.id_sentence_pairs[10:]
            return map(lambda x: x[1],next_ten)



        class MyHandler(BaseHTTPRequestHandler):



            def do_GET(self):

                if (self.path == "/data"):
                    self.send_response(200)
                    self.send_header('Content-type','text/html')
                    self.end_headers()
                    self.wfile.write("\n".join(get_next_sentences()))

                else:
                    try:
                        
                        f = open(os.curdir + os.sep + self.path)            
                        self.send_response(200)
                        self.send_header('Content-type','text/html')
                        self.end_headers()
                    
                        self.wfile.write(f.read())
                        f.close()
                        return
                            
           
            
                    except IOError:
                        self.send_error(404,'File Not Found: %s' % self.path)
     

            def do_POST(self):
                
                
                refresh_sentences()
                global rootnode
                try:
                    ctype, pdict = cgi.parse_header(self.headers.getheader('content-type'))
                    if ctype == 'multipart/form-data':
                        query=cgi.parse_multipart(self.rfile, pdict)
                    self.send_response(301)
            
                    self.end_headers()
                    upfilecontent = query.get('upfile')
                    print "filecontent", upfilecontent[0]
                    self.wfile.write("<HTML>POST OK.<BR><BR>");
                    #self.wfile.write(upfilecontent[0]);
            
                except :
                    pass


        try:
            server = HTTPServer(('', 3000), MyHandler)
            print 'started httpserver...'
            server.serve_forever()
        except KeyboardInterrupt:
            print '^C received, shutting down server'
            server.socket.close()


            
def main():
    AnnotationFrameWork()

if __name__ == '__main__':
    main()

