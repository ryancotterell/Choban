/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['DOM'] = $pyjs.loaded_modules["pyjamas.DOM"];
	pyjamas['DOM'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	var __name__ = pyjamas['DOM'].__name__ = __mod_name__;
	pyjamas['DOM'].__track_lines__ = new Array();
	var DOM = pyjamas['DOM'];
	pyjamas['DOM'].__track_lines__[1] = "pyjamas.DOM.py, line 1:\n    # Copyright 2006 James Tauber and contributors";
	pyjamas['DOM'].__track_lines__[19] = "pyjamas.DOM.py, line 19:\n    import sys";
	pyjamas['DOM'].__track_lines__[20] = "pyjamas.DOM.py, line 20:\n    if sys.platform not in [\'mozilla\', \'ie6\', \'opera\', \'oldmoz\', \'safari\']:";
	pyjamas['DOM'].__track_lines__[21] = "pyjamas.DOM.py, line 21:\n    from pyjamas.Window import onResize, onClosing, onClosed";
	pyjamas['DOM'].__track_lines__[22] = "pyjamas.DOM.py, line 22:\n    from __pyjamas__ import JS, doc, get_main_frame, wnd";
	pyjamas['DOM'].__track_lines__[24] = "pyjamas.DOM.py, line 24:\n    currentEvent = None";
	pyjamas['DOM'].__track_lines__[26] = "pyjamas.DOM.py, line 26:\n    sCaptureElem = None";
	pyjamas['DOM'].__track_lines__[27] = "pyjamas.DOM.py, line 27:\n    sEventPreviewStack = []";
	pyjamas['DOM'].__track_lines__[29] = "pyjamas.DOM.py, line 29:\n    listeners = {}";
	pyjamas['DOM'].__track_lines__[32] = "pyjamas.DOM.py, line 32:\n    def get_listener(item):";
	pyjamas['DOM'].__track_lines__[33] = "pyjamas.DOM.py, line 33:\n    if item is None:";
	pyjamas['DOM'].__track_lines__[34] = "pyjamas.DOM.py, line 34:\n    return None";
	pyjamas['DOM'].__track_lines__[35] = "pyjamas.DOM.py, line 35:\n    if hasattr(item, \"__instance__\"):";
	pyjamas['DOM'].__track_lines__[36] = "pyjamas.DOM.py, line 2:\n    # ... ret = listeners.get(item.__instance__)";
	pyjamas['DOM'].__track_lines__[38] = "pyjamas.DOM.py, line 38:\n    ret = listeners.get(hash(item))";
	pyjamas['DOM'].__track_lines__[39] = "pyjamas.DOM.py, line 39:\n    return ret";
	pyjamas['DOM'].__track_lines__[42] = "pyjamas.DOM.py, line 42:\n    def set_listener(item, listener):";
	pyjamas['DOM'].__track_lines__[43] = "pyjamas.DOM.py, line 43:\n    if hasattr(item, \"__instance__\"):";
	pyjamas['DOM'].__track_lines__[44] = "pyjamas.DOM.py, line 44:\n    listeners[item.__instance__] = listener";
	pyjamas['DOM'].__track_lines__[45] = "pyjamas.DOM.py, line 39:\n    return ret ... else:";
	pyjamas['DOM'].__track_lines__[46] = "pyjamas.DOM.py, line 46:\n    listeners[hash(item)] = listener";
	pyjamas['DOM'].__track_lines__[49] = "pyjamas.DOM.py, line 49:\n    hack_timer_workaround_bug_button = None";
	pyjamas['DOM'].__track_lines__[50] = "pyjamas.DOM.py, line 48:\n    # ugh, *spew*, *hurl* http://code.google.com/p/pyjamas/issues/detail?id=213 ... ";
	pyjamas['DOM'].__track_lines__[52] = "pyjamas.DOM.py, line 2:\n    # ... def init():";
	pyjamas['DOM'].__track_lines__[53] = "pyjamas.DOM.py, line 53:\n    ";
	pyjamas['DOM'].__track_lines__[59] = "pyjamas.DOM.py, line 56:\n    mf._addWindowEventListener(\"change\", browser_event_cb) ... mf._addWindowEventListener(\"mouseup\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[64] = "pyjamas.DOM.py, line 62:\n    mf._addWindowEventListener(\"keydown\", browser_event_cb) ... ";
	pyjamas['DOM'].__track_lines__[66] = "pyjamas.DOM.py, line 66:\n    def _dispatchWindowEvent(sender, evt, useCap):";
	pyjamas['DOM'].__track_lines__[67] = "pyjamas.DOM.py, line 67:\n    pass";
	pyjamas['DOM'].__track_lines__[69] = "pyjamas.DOM.py, line 67:\n    pass ... ";
	pyjamas['DOM'].__track_lines__[70] = "pyjamas.DOM.py, line 70:\n    def _dispatchEvent(sender, evt, useCap):";
	pyjamas['DOM'].__track_lines__[72] = "pyjamas.DOM.py, line 72:\n    if evt is None:";
	pyjamas['DOM'].__track_lines__[73] = "pyjamas.DOM.py, line 73:\n    evt = wnd().event";
	pyjamas['DOM'].__track_lines__[75] = "pyjamas.DOM.py, line 72:\n    if evt is None: ... try:";
	pyjamas['DOM'].__track_lines__[76] = "pyjamas.DOM.py, line 76:\n    sender = get_main_frame().gobject_wrap(sender) # webkit HACK!";
	pyjamas['DOM'].__track_lines__[77] = "pyjamas.DOM.py, line 77:\n    evt = get_main_frame().gobject_wrap(evt) # webkit HACK!";
	pyjamas['DOM'].__track_lines__[79] = "pyjamas.DOM.py, line 79:\n    pass";
	pyjamas['DOM'].__track_lines__[80] = "pyjamas.DOM.py, line 78:\n    except: ... listener = None";
	pyjamas['DOM'].__track_lines__[81] = "pyjamas.DOM.py, line 81:\n    curElem = sender";
	pyjamas['DOM'].__track_lines__[84] = "pyjamas.DOM.py, line 84:\n    cap = getCaptureElement()";
	pyjamas['DOM'].__track_lines__[85] = "pyjamas.DOM.py, line 83:\n    #print \"_dispatchEvent\", sender, evt, evt.type ... listener = get_listener(cap)";
	pyjamas['DOM'].__track_lines__[86] = "pyjamas.DOM.py, line 86:\n    if cap and listener:";
	pyjamas['DOM'].__track_lines__[87] = "pyjamas.DOM.py, line 87:\n    #print \"_dispatchEvent\", cap, listener";
	pyjamas['DOM'].__track_lines__[88] = "pyjamas.DOM.py, line 88:\n    dispatchEvent(evt, cap, listener)";
	pyjamas['DOM'].__track_lines__[89] = "pyjamas.DOM.py, line 89:\n    evt.stopPropagation()";
	pyjamas['DOM'].__track_lines__[90] = "pyjamas.DOM.py, line 90:\n    return";
	pyjamas['DOM'].__track_lines__[92] = "pyjamas.DOM.py, line 90:\n    return ... while curElem and not get_listener(curElem):";
	pyjamas['DOM'].__track_lines__[94] = "pyjamas.DOM.py, line 94:\n    curElem = getParent(curElem)";
	pyjamas['DOM'].__track_lines__[95] = "pyjamas.DOM.py, line 95:\n    if curElem and getNodeType(curElem) != 1:";
	pyjamas['DOM'].__track_lines__[96] = "pyjamas.DOM.py, line 96:\n    curElem = None";
	pyjamas['DOM'].__track_lines__[98] = "pyjamas.DOM.py, line 98:\n    listener = get_listener(curElem)";
	pyjamas['DOM'].__track_lines__[99] = "pyjamas.DOM.py, line 88:\n    dispatchEvent(evt, cap, listener) ... if listener:";
	pyjamas['DOM'].__track_lines__[100] = "pyjamas.DOM.py, line 100:\n    dispatchEvent(evt, curElem, listener)";
	pyjamas['DOM'].__track_lines__[102] = "pyjamas.DOM.py, line 100:\n    dispatchEvent(evt, curElem, listener) ... ";
	pyjamas['DOM'].__track_lines__[103] = "pyjamas.DOM.py, line 103:\n    def _dispatchCapturedMouseEvent(evt):";
	pyjamas['DOM'].__track_lines__[105] = "pyjamas.DOM.py, line 105:\n    if (_dispatchCapturedEvent(evt)):";
	pyjamas['DOM'].__track_lines__[106] = "pyjamas.DOM.py, line 106:\n    cap = getCaptureElement()";
	pyjamas['DOM'].__track_lines__[107] = "pyjamas.DOM.py, line 107:\n    listener = get_listener(cap)";
	pyjamas['DOM'].__track_lines__[108] = "pyjamas.DOM.py, line 108:\n    if cap and listener:";
	pyjamas['DOM'].__track_lines__[109] = "pyjamas.DOM.py, line 105:\n    if (_dispatchCapturedEvent(evt)): ... dispatchEvent(evt, cap, listener)";
	pyjamas['DOM'].__track_lines__[111] = "pyjamas.DOM.py, line 111:\n    evt.stopPropagation()";
	pyjamas['DOM'].__track_lines__[114] = "pyjamas.DOM.py, line 114:\n    def _dispatchCapturedMouseoutEvent(evt):";
	pyjamas['DOM'].__track_lines__[115] = "pyjamas.DOM.py, line 102:\n     ... cap = getCaptureElement()";
	pyjamas['DOM'].__track_lines__[116] = "pyjamas.DOM.py, line 116:\n    if cap:";
	pyjamas['DOM'].__track_lines__[118] = "pyjamas.DOM.py, line 118:\n    if not eventGetToElement(evt):";
	pyjamas['DOM'].__track_lines__[122] = "pyjamas.DOM.py, line 119:\n    #print \"synthesise\", cap ... setCapture(None)";
	pyjamas['DOM'].__track_lines__[123] = "pyjamas.DOM.py, line 123:\n    listener = get_listener(cap)";
	pyjamas['DOM'].__track_lines__[124] = "pyjamas.DOM.py, line 124:\n    if listener:";
	pyjamas['DOM'].__track_lines__[126] = "pyjamas.DOM.py, line 126:\n    lcEvent = doc().createEvent(\'UIEvent\')";
	pyjamas['DOM'].__track_lines__[127] = "pyjamas.DOM.py, line 125:\n    # this should be interesting... ... lcEvent.initUIEvent(\'losecapture\', False, False, wnd(), 0)";
	pyjamas['DOM'].__track_lines__[128] = "pyjamas.DOM.py, line 128:\n    dispatchEvent(lcEvent, cap, listener)";
	pyjamas['DOM'].__track_lines__[131] = "pyjamas.DOM.py, line 131:\n    def browser_event_cb(view, event, from_window):";
	pyjamas['DOM'].__track_lines__[133] = "pyjamas.DOM.py, line 133:\n    try:";
	pyjamas['DOM'].__track_lines__[134] = "pyjamas.DOM.py, line 134:\n    event = get_main_frame().gobject_wrap(event) # webkit HACK!";
	pyjamas['DOM'].__track_lines__[136] = "pyjamas.DOM.py, line 136:\n    pass";
	pyjamas['DOM'].__track_lines__[137] = "pyjamas.DOM.py, line 130:\n     ... #print \"browser_event_cb\", event";
	pyjamas['DOM'].__track_lines__[138] = "pyjamas.DOM.py, line 138:\n    et = eventGetType(event)";
	pyjamas['DOM'].__track_lines__[140] = "pyjamas.DOM.py, line 140:\n    if et == \"resize\":";
	pyjamas['DOM'].__track_lines__[141] = "pyjamas.DOM.py, line 141:\n    onResize()";
	pyjamas['DOM'].__track_lines__[142] = "pyjamas.DOM.py, line 142:\n    return";
	pyjamas['DOM'].__track_lines__[143] = "pyjamas.DOM.py, line 140:\n    if et == \"resize\": ... elif et == \'mouseout\':";
	pyjamas['DOM'].__track_lines__[145] = "pyjamas.DOM.py, line 145:\n    return _dispatchCapturedMouseoutEvent(event)";
	pyjamas['DOM'].__track_lines__[148] = "pyjamas.DOM.py, line 148:\n    return _dispatchCapturedEvent(event)";
	pyjamas['DOM'].__track_lines__[149] = "pyjamas.DOM.py, line 146:\n    elif (et == \'keyup\' or et == \'keydown\' or ... else:";
	pyjamas['DOM'].__track_lines__[150] = "pyjamas.DOM.py, line 150:\n    return _dispatchCapturedMouseEvent(event)";
	pyjamas['DOM'].__track_lines__[153] = "pyjamas.DOM.py, line 153:\n    def _dispatchCapturedEvent(event):";
	pyjamas['DOM'].__track_lines__[155] = "pyjamas.DOM.py, line 152:\n     ... if not previewEvent(event):";
	pyjamas['DOM'].__track_lines__[157] = "pyjamas.DOM.py, line 157:\n    event.stopPropagation()";
	pyjamas['DOM'].__track_lines__[158] = "pyjamas.DOM.py, line 158:\n    eventPreventDefault(event)";
	pyjamas['DOM'].__track_lines__[159] = "pyjamas.DOM.py, line 159:\n    return False";
	pyjamas['DOM'].__track_lines__[160] = "pyjamas.DOM.py, line 160:\n    return True";
	pyjamas['DOM'].__track_lines__[161] = "pyjamas.DOM.py, line 158:\n    eventPreventDefault(event) ... ";
	pyjamas['DOM'].__track_lines__[163] = "pyjamas.DOM.py, line 87:\n    #print \"_dispatchEvent\", cap, listener ... def addEventPreview(preview):";
	pyjamas['DOM'].__track_lines__[167] = "pyjamas.DOM.py, line 167:\n    def appendChild(parent, child):";
	pyjamas['DOM'].__track_lines__[169] = "pyjamas.DOM.py, line 164:\n    sEventPreviewStack.append(preview) ... parent.appendChild(child)";
	pyjamas['DOM'].__track_lines__[172] = "pyjamas.DOM.py, line 90:\n    return ... def buttonClick(element):";
	pyjamas['DOM'].__track_lines__[179] = "pyjamas.DOM.py, line 39:\n    return ret ... def compare(elem1, elem2):";
	pyjamas['DOM'].__track_lines__[181] = "pyjamas.DOM.py, line 172:\n    def buttonClick(element): ... return elem1.isSameNode(elem2)";
	pyjamas['DOM'].__track_lines__[185] = "pyjamas.DOM.py, line 185:\n    def createAnchor():";
	pyjamas['DOM'].__track_lines__[186] = "pyjamas.DOM.py, line 186:\n    return createElement(\"A\")";
	pyjamas['DOM'].__track_lines__[189] = "pyjamas.DOM.py, line 189:\n    def createButton():";
	pyjamas['DOM'].__track_lines__[190] = "pyjamas.DOM.py, line 190:\n    return createElement(\"button\")";
	pyjamas['DOM'].__track_lines__[191] = "pyjamas.DOM.py, line 184:\n     ... ";
	pyjamas['DOM'].__track_lines__[192] = "pyjamas.DOM.py, line 189:\n    def createButton(): ... ";
	pyjamas['DOM'].__track_lines__[193] = "pyjamas.DOM.py, line 193:\n    def createCol():";
	pyjamas['DOM'].__track_lines__[194] = "pyjamas.DOM.py, line 194:\n    return createElement(\"col\")";
	pyjamas['DOM'].__track_lines__[195] = "pyjamas.DOM.py, line 195:\n    ";
	pyjamas['DOM'].__track_lines__[196] = "pyjamas.DOM.py, line 194:\n    return createElement(\"col\") ... ";
	pyjamas['DOM'].__track_lines__[197] = "pyjamas.DOM.py, line 197:\n    def createDiv():";
	pyjamas['DOM'].__track_lines__[198] = "pyjamas.DOM.py, line 198:\n    return createElement(\"div\")";
	pyjamas['DOM'].__track_lines__[200] = "pyjamas.DOM.py, line 198:\n    return createElement(\"div\") ... ";
	pyjamas['DOM'].__track_lines__[201] = "pyjamas.DOM.py, line 199:\n     ... def createElement(tag):";
	pyjamas['DOM'].__track_lines__[203] = "pyjamas.DOM.py, line 203:\n    ";
	pyjamas['DOM'].__track_lines__[205] = "pyjamas.DOM.py, line 205:\n    def createFieldSet():";
	pyjamas['DOM'].__track_lines__[206] = "pyjamas.DOM.py, line 206:\n    return createElement(\"fieldset\")";
	pyjamas['DOM'].__track_lines__[208] = "pyjamas.DOM.py, line 204:\n     ... ";
	pyjamas['DOM'].__track_lines__[209] = "pyjamas.DOM.py, line 209:\n    def createForm():";
	pyjamas['DOM'].__track_lines__[210] = "pyjamas.DOM.py, line 210:\n    return createElement(\"form\")";
	pyjamas['DOM'].__track_lines__[213] = "pyjamas.DOM.py, line 213:\n    def createIFrame():";
	pyjamas['DOM'].__track_lines__[214] = "pyjamas.DOM.py, line 214:\n    return createElement(\"iframe\")";
	pyjamas['DOM'].__track_lines__[217] = "pyjamas.DOM.py, line 217:\n    def createImg():";
	pyjamas['DOM'].__track_lines__[218] = "pyjamas.DOM.py, line 218:\n    return createElement(\"img\")";
	pyjamas['DOM'].__track_lines__[221] = "pyjamas.DOM.py, line 221:\n    def createInputCheck():";
	pyjamas['DOM'].__track_lines__[222] = "pyjamas.DOM.py, line 222:\n    return createInputElement(\"checkbox\")";
	pyjamas['DOM'].__track_lines__[225] = "pyjamas.DOM.py, line 105:\n    if (_dispatchCapturedEvent(evt)): ... def createInputElement(elementType):";
	pyjamas['DOM'].__track_lines__[231] = "pyjamas.DOM.py, line 231:\n    def createInputPassword():";
	pyjamas['DOM'].__track_lines__[232] = "pyjamas.DOM.py, line 211:\n     ... return createInputElement(\"password\")";
	pyjamas['DOM'].__track_lines__[235] = "pyjamas.DOM.py, line 48:\n    # ugh, *spew*, *hurl* http://code.google.com/p/pyjamas/issues/detail?id=213 ... def createInputRadio(group):";
	pyjamas['DOM'].__track_lines__[237] = "pyjamas.DOM.py, line 235:\n    def createInputRadio(group): ... e.name = group";
	pyjamas['DOM'].__track_lines__[240] = "pyjamas.DOM.py, line 240:\n    ";
	pyjamas['DOM'].__track_lines__[241] = "pyjamas.DOM.py, line 241:\n    def createInputText():";
	pyjamas['DOM'].__track_lines__[242] = "pyjamas.DOM.py, line 242:\n    return createInputElement(\"text\")";
	pyjamas['DOM'].__track_lines__[245] = "pyjamas.DOM.py, line 245:\n    def createLabel():";
	pyjamas['DOM'].__track_lines__[246] = "pyjamas.DOM.py, line 246:\n    return createElement(\"label\")";
	pyjamas['DOM'].__track_lines__[249] = "pyjamas.DOM.py, line 249:\n    def createLegend():";
	pyjamas['DOM'].__track_lines__[250] = "pyjamas.DOM.py, line 250:\n    return createElement(\"legend\")";
	pyjamas['DOM'].__track_lines__[253] = "pyjamas.DOM.py, line 253:\n    def createOptions():";
	pyjamas['DOM'].__track_lines__[254] = "pyjamas.DOM.py, line 254:\n    return createElement(\"options\")";
	pyjamas['DOM'].__track_lines__[257] = "pyjamas.DOM.py, line 257:\n    def createSelect():";
	pyjamas['DOM'].__track_lines__[258] = "pyjamas.DOM.py, line 258:\n    return createElement(\"select\")";
	pyjamas['DOM'].__track_lines__[261] = "pyjamas.DOM.py, line 261:\n    def createSpan():";
	pyjamas['DOM'].__track_lines__[262] = "pyjamas.DOM.py, line 262:\n    return createElement(\"span\")";
	pyjamas['DOM'].__track_lines__[265] = "pyjamas.DOM.py, line 262:\n    return createElement(\"span\") ... def createTable():";
	pyjamas['DOM'].__track_lines__[266] = "pyjamas.DOM.py, line 266:\n    return createElement(\"table\")";
	pyjamas['DOM'].__track_lines__[269] = "pyjamas.DOM.py, line 269:\n    def createTBody():";
	pyjamas['DOM'].__track_lines__[270] = "pyjamas.DOM.py, line 270:\n    return createElement(\"tbody\")";
	pyjamas['DOM'].__track_lines__[273] = "pyjamas.DOM.py, line 271:\n     ... def createTD():";
	pyjamas['DOM'].__track_lines__[274] = "pyjamas.DOM.py, line 274:\n    return createElement(\"td\")";
	pyjamas['DOM'].__track_lines__[277] = "pyjamas.DOM.py, line 277:\n    def createTextArea():";
	pyjamas['DOM'].__track_lines__[278] = "pyjamas.DOM.py, line 278:\n    return createElement(\"textarea\")";
	pyjamas['DOM'].__track_lines__[280] = "pyjamas.DOM.py, line 280:\n    ";
	pyjamas['DOM'].__track_lines__[281] = "pyjamas.DOM.py, line 281:\n    def createTH():";
	pyjamas['DOM'].__track_lines__[282] = "pyjamas.DOM.py, line 282:\n    return createElement(\"th\")";
	pyjamas['DOM'].__track_lines__[285] = "pyjamas.DOM.py, line 285:\n    def createTR():";
	pyjamas['DOM'].__track_lines__[286] = "pyjamas.DOM.py, line 286:\n    return createElement(\"tr\")";
	pyjamas['DOM'].__track_lines__[289] = "pyjamas.DOM.py, line 240:\n     ... def eventStopPropagation(evt):";
	pyjamas['DOM'].__track_lines__[293] = "pyjamas.DOM.py, line 293:\n    def eventCancelBubble(evt, cancel):";
	pyjamas['DOM'].__track_lines__[294] = "pyjamas.DOM.py, line 294:\n    evt.cancelBubble = cancel";
	pyjamas['DOM'].__track_lines__[295] = "pyjamas.DOM.py, line 292:\n     ... ";
	pyjamas['DOM'].__track_lines__[297] = "pyjamas.DOM.py, line 297:\n    def eventGetAltKey(evt):";
	pyjamas['DOM'].__track_lines__[298] = "pyjamas.DOM.py, line 298:\n    return evt.altKey";
	pyjamas['DOM'].__track_lines__[301] = "pyjamas.DOM.py, line 301:\n    def eventGetButton(evt):";
	pyjamas['DOM'].__track_lines__[302] = "pyjamas.DOM.py, line 302:\n    return evt.button";
	pyjamas['DOM'].__track_lines__[305] = "pyjamas.DOM.py, line 305:\n    def eventGetClientX(evt):";
	pyjamas['DOM'].__track_lines__[306] = "pyjamas.DOM.py, line 306:\n    return evt.clientX";
	pyjamas['DOM'].__track_lines__[309] = "pyjamas.DOM.py, line 309:\n    def eventGetClientY(evt):";
	pyjamas['DOM'].__track_lines__[310] = "pyjamas.DOM.py, line 310:\n    return evt.clientY";
	pyjamas['DOM'].__track_lines__[313] = "pyjamas.DOM.py, line 313:\n    def eventGetCtrlKey(evt):";
	pyjamas['DOM'].__track_lines__[314] = "pyjamas.DOM.py, line 314:\n    return evt.ctrlKey";
	pyjamas['DOM'].__track_lines__[317] = "pyjamas.DOM.py, line 120:\n    #When the mouse leaves the window during capture, release capture ... def eventGetFromElement(evt):";
	pyjamas['DOM'].__track_lines__[320] = "pyjamas.DOM.py, line 314:\n    return evt.ctrlKey ... except:";
	pyjamas['DOM'].__track_lines__[324] = "pyjamas.DOM.py, line 125:\n    # this should be interesting... ... def eventGetKeyCode(evt):";
	pyjamas['DOM'].__track_lines__[328] = "pyjamas.DOM.py, line 328:\n    def eventGetRepeat(evt):";
	pyjamas['DOM'].__track_lines__[329] = "pyjamas.DOM.py, line 323:\n     ... return evt.repeat";
	pyjamas['DOM'].__track_lines__[332] = "pyjamas.DOM.py, line 332:\n    def eventGetScreenX(evt):";
	pyjamas['DOM'].__track_lines__[333] = "pyjamas.DOM.py, line 333:\n    return evt.screenX";
	pyjamas['DOM'].__track_lines__[336] = "pyjamas.DOM.py, line 336:\n    def eventGetScreenY(evt):";
	pyjamas['DOM'].__track_lines__[337] = "pyjamas.DOM.py, line 337:\n    return evt.screenY";
	pyjamas['DOM'].__track_lines__[340] = "pyjamas.DOM.py, line 340:\n    def eventGetShiftKey(evt):";
	pyjamas['DOM'].__track_lines__[341] = "pyjamas.DOM.py, line 341:\n    return evt.shiftKey";
	pyjamas['DOM'].__track_lines__[344] = "pyjamas.DOM.py, line 53:\n     ... def eventGetCurrentTarget(event):";
	pyjamas['DOM'].__track_lines__[348] = "pyjamas.DOM.py, line 56:\n    mf._addWindowEventListener(\"change\", browser_event_cb) ... def eventGetTarget(event):";
	pyjamas['DOM'].__track_lines__[352] = "pyjamas.DOM.py, line 62:\n    mf._addWindowEventListener(\"keydown\", browser_event_cb) ... def eventGetToElement(evt):";
	pyjamas['DOM'].__track_lines__[354] = "pyjamas.DOM.py, line 351:\n     ... if type == \'mouseout\':";
	pyjamas['DOM'].__track_lines__[361] = "pyjamas.DOM.py, line 361:\n    def eventGetType(event):";
	pyjamas['DOM'].__track_lines__[362] = "pyjamas.DOM.py, line 362:\n    return event.type";
	pyjamas['DOM'].__track_lines__[364] = "pyjamas.DOM.py, line 364:\n    eventmap = {";
	pyjamas['DOM'].__track_lines__[386] = "pyjamas.DOM.py, line 140:\n    if et == \"resize\": ... def eventGetTypeInt(event):";
	pyjamas['DOM'].__track_lines__[390] = "pyjamas.DOM.py, line 390:\n    def eventGetTypeString(event):";
	pyjamas['DOM'].__track_lines__[391] = "pyjamas.DOM.py, line 391:\n    return eventGetType(event)";
	pyjamas['DOM'].__track_lines__[394] = "pyjamas.DOM.py, line 67:\n    pass ... def eventPreventDefault(evt):";
	pyjamas['DOM'].__track_lines__[398] = "pyjamas.DOM.py, line 378:\n    \"mouseover\": 0x00010, ... def eventSetKeyCode(evt, key):";
	pyjamas['DOM'].__track_lines__[399] = "pyjamas.DOM.py, line 399:\n    evt.keyCode = key";
	pyjamas['DOM'].__track_lines__[402] = "pyjamas.DOM.py, line 72:\n    if evt is None: ... def eventToString(evt):";
	pyjamas['DOM'].__track_lines__[406] = "pyjamas.DOM.py, line 406:\n    def iframeGetSrc(elem):";
	pyjamas['DOM'].__track_lines__[407] = "pyjamas.DOM.py, line 407:\n    return elem.src";
	pyjamas['DOM'].__track_lines__[410] = "pyjamas.DOM.py, line 88:\n    dispatchEvent(evt, cap, listener) ... def getAbsoluteLeft(elem):";
	pyjamas['DOM'].__track_lines__[424] = "pyjamas.DOM.py, line 102:\n     ... def getAbsoluteTop(elem):";
	pyjamas['DOM'].__track_lines__[438] = "pyjamas.DOM.py, line 189:\n    def createButton(): ... def getAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[443] = "pyjamas.DOM.py, line 195:\n     ... def getElemAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[444] = "pyjamas.DOM.py, line 406:\n    def iframeGetSrc(elem): ... mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[450] = "pyjamas.DOM.py, line 198:\n    return createElement(\"div\") ... def getBooleanAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[453] = "pyjamas.DOM.py, line 453:\n    ";
	pyjamas['DOM'].__track_lines__[455] = "pyjamas.DOM.py, line 455:\n    def getBooleanElemAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[456] = "pyjamas.DOM.py, line 456:\n    if not elem.hasAttribute(attr):";
	pyjamas['DOM'].__track_lines__[457] = "pyjamas.DOM.py, line 457:\n    return None";
	pyjamas['DOM'].__track_lines__[458] = "pyjamas.DOM.py, line 458:\n    return bool(elem.getAttribute(attr))";
	pyjamas['DOM'].__track_lines__[461] = "pyjamas.DOM.py, line 203:\n     ... def getCaptureElement():";
	pyjamas['DOM'].__track_lines__[465] = "pyjamas.DOM.py, line 119:\n    #print \"synthesise\", cap ... def getChild(elem, index):";
	pyjamas['DOM'].__track_lines__[481] = "pyjamas.DOM.py, line 125:\n    # this should be interesting... ... def getChildCount(elem):";
	pyjamas['DOM'].__track_lines__[492] = "pyjamas.DOM.py, line 456:\n    if not elem.hasAttribute(attr): ... return count";
	pyjamas['DOM'].__track_lines__[495] = "pyjamas.DOM.py, line 130:\n     ... def getChildIndex(parent, toFind):";
	pyjamas['DOM'].__track_lines__[497] = "pyjamas.DOM.py, line 495:\n    def getChildIndex(parent, toFind): ... Return the index of the given child in the given parent.";
	pyjamas['DOM'].__track_lines__[502] = "pyjamas.DOM.py, line 500:\n    \"\"\" ... child = parent.firstChild";
	pyjamas['DOM'].__track_lines__[507] = "pyjamas.DOM.py, line 505:\n    return count ... count += 1";
	pyjamas['DOM'].__track_lines__[513] = "pyjamas.DOM.py, line 262:\n    return createElement(\"span\") ... def getElementById(id):";
	pyjamas['DOM'].__track_lines__[520] = "pyjamas.DOM.py, line 271:\n     ... def getEventListener(element):";
	pyjamas['DOM'].__track_lines__[523] = "pyjamas.DOM.py, line 521:\n    \"\"\" ... \"\"\"";
	pyjamas['DOM'].__track_lines__[526] = "pyjamas.DOM.py, line 526:\n    eventbitsmap = {}";
	pyjamas['DOM'].__track_lines__[529] = "pyjamas.DOM.py, line 280:\n     ... def getEventsSunk(element):";
	pyjamas['DOM'].__track_lines__[537] = "pyjamas.DOM.py, line 140:\n    if et == \"resize\": ... def getFirstChild(elem):";
	pyjamas['DOM'].__track_lines__[541] = "pyjamas.DOM.py, line 539:\n    while child and child.nodeType != 1: ... return child";
	pyjamas['DOM'].__track_lines__[544] = "pyjamas.DOM.py, line 292:\n     ... def getInnerHTML(element):";
	pyjamas['DOM'].__track_lines__[546] = "pyjamas.DOM.py, line 544:\n    def getInnerHTML(element): ... return element and element.innerHtml # webkit. erk.";
	pyjamas['DOM'].__track_lines__[549] = "pyjamas.DOM.py, line 549:\n    ";
	pyjamas['DOM'].__track_lines__[550] = "pyjamas.DOM.py, line 550:\n    ";
	pyjamas['DOM'].__track_lines__[551] = "pyjamas.DOM.py, line 146:\n    elif (et == \'keyup\' or et == \'keydown\' or ... def getInnerText(element):";
	pyjamas['DOM'].__track_lines__[555] = "pyjamas.DOM.py, line 553:\n    # concatenate all child text nodes (depth first). ... child = element.firstChild";
	pyjamas['DOM'].__track_lines__[565] = "pyjamas.DOM.py, line 314:\n    return evt.ctrlKey ... def getIntAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[570] = "pyjamas.DOM.py, line 570:\n    def getIntElemAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[571] = "pyjamas.DOM.py, line 571:\n    if not elem.hasAttribute(attr):";
	pyjamas['DOM'].__track_lines__[572] = "pyjamas.DOM.py, line 572:\n    return None";
	pyjamas['DOM'].__track_lines__[573] = "pyjamas.DOM.py, line 573:\n    return int(elem.getAttribute(attr))";
	pyjamas['DOM'].__track_lines__[576] = "pyjamas.DOM.py, line 323:\n     ... def getIntStyleAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[580] = "pyjamas.DOM.py, line 152:\n     ... def getNextSibling(elem):";
	pyjamas['DOM'].__track_lines__[587] = "pyjamas.DOM.py, line 587:\n    def getNodeType(elem):";
	pyjamas['DOM'].__track_lines__[588] = "pyjamas.DOM.py, line 588:\n    return elem.nodeType";
	pyjamas['DOM'].__track_lines__[591] = "pyjamas.DOM.py, line 158:\n    eventPreventDefault(event) ... def getParent(elem):";
	pyjamas['DOM'].__track_lines__[599] = "pyjamas.DOM.py, line 599:\n    ";
	pyjamas['DOM'].__track_lines__[600] = "pyjamas.DOM.py, line 351:\n     ... def getStyleAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[602] = "pyjamas.DOM.py, line 602:\n    if hasattr(element.style, \'getProperty\'):";
	pyjamas['DOM'].__track_lines__[603] = "pyjamas.DOM.py, line 603:\n    return elem.style.getProperty(mash_name_for_glib(attr))";
	pyjamas['DOM'].__track_lines__[604] = "pyjamas.DOM.py, line 604:\n    return elem.style.getAttribute(attr)";
	pyjamas['DOM'].__track_lines__[606] = "pyjamas.DOM.py, line 606:\n    return None";
	pyjamas['DOM'].__track_lines__[607] = "pyjamas.DOM.py, line 607:\n    ";
	pyjamas['DOM'].__track_lines__[608] = "pyjamas.DOM.py, line 608:\n    ";
	pyjamas['DOM'].__track_lines__[609] = "pyjamas.DOM.py, line 609:\n    def insertChild(parent, toAdd, index):";
	pyjamas['DOM'].__track_lines__[611] = "pyjamas.DOM.py, line 611:\n    child = parent.firstChild";
	pyjamas['DOM'].__track_lines__[615] = "pyjamas.DOM.py, line 615:\n    if (count == index):";
	pyjamas['DOM'].__track_lines__[618] = "pyjamas.DOM.py, line 618:\n    ";
	pyjamas['DOM'].__track_lines__[619] = "pyjamas.DOM.py, line 619:\n    count += 1";
	pyjamas['DOM'].__track_lines__[620] = "pyjamas.DOM.py, line 620:\n    child = child.nextSibling";
	pyjamas['DOM'].__track_lines__[621] = "pyjamas.DOM.py, line 621:\n    ";
	pyjamas['DOM'].__track_lines__[622] = "pyjamas.DOM.py, line 622:\n    if before is None:";
	pyjamas['DOM'].__track_lines__[623] = "pyjamas.DOM.py, line 623:\n    parent.appendChild(toAdd)";
	pyjamas['DOM'].__track_lines__[624] = "pyjamas.DOM.py, line 624:\n    else:";
	pyjamas['DOM'].__track_lines__[625] = "pyjamas.DOM.py, line 625:\n    parent.insertBefore(toAdd, before)";
	pyjamas['DOM'].__track_lines__[628] = "pyjamas.DOM.py, line 628:\n    class IterChildrenClass:";
	pyjamas['DOM'].__track_lines__[630] = "pyjamas.DOM.py, line 630:\n    def __init__(self, elem):";
	pyjamas['DOM'].__track_lines__[631] = "pyjamas.DOM.py, line 631:\n    self.parent = elem";
	pyjamas['DOM'].__track_lines__[632] = "pyjamas.DOM.py, line 632:\n    self.child = elem.firstChild";
	pyjamas['DOM'].__track_lines__[633] = "pyjamas.DOM.py, line 633:\n    self.lastChild = None";
	pyjamas['DOM'].__track_lines__[635] = "pyjamas.DOM.py, line 635:\n    def next(self):";
	pyjamas['DOM'].__track_lines__[636] = "pyjamas.DOM.py, line 636:\n    if not self.child:";
	pyjamas['DOM'].__track_lines__[637] = "pyjamas.DOM.py, line 637:\n    raise StopIteration";
	pyjamas['DOM'].__track_lines__[638] = "pyjamas.DOM.py, line 638:\n    self.lastChild = self.child";
	pyjamas['DOM'].__track_lines__[639] = "pyjamas.DOM.py, line 639:\n    self.child = getNextSibling(self.child)";
	pyjamas['DOM'].__track_lines__[640] = "pyjamas.DOM.py, line 640:\n    return self.lastChild";
	pyjamas['DOM'].__track_lines__[642] = "pyjamas.DOM.py, line 642:\n    def remove(self):";
	pyjamas['DOM'].__track_lines__[643] = "pyjamas.DOM.py, line 643:\n    self.parent.removeChild(self.lastChild)";
	pyjamas['DOM'].__track_lines__[645] = "pyjamas.DOM.py, line 645:\n    def __iter__(self):";
	pyjamas['DOM'].__track_lines__[646] = "pyjamas.DOM.py, line 646:\n    return self";
	pyjamas['DOM'].__track_lines__[649] = "pyjamas.DOM.py, line 378:\n    \"mouseover\": 0x00010, ... def iterChildren(elem):";
	pyjamas['DOM'].__track_lines__[657] = "pyjamas.DOM.py, line 657:\n    class IterWalkChildren:";
	pyjamas['DOM'].__track_lines__[659] = "pyjamas.DOM.py, line 659:\n    def __init__(self, elem):";
	pyjamas['DOM'].__track_lines__[660] = "pyjamas.DOM.py, line 660:\n    self.parent = elem";
	pyjamas['DOM'].__track_lines__[661] = "pyjamas.DOM.py, line 661:\n    self.child = getFirstChild(elem)";
	pyjamas['DOM'].__track_lines__[662] = "pyjamas.DOM.py, line 662:\n    self.lastChild = None";
	pyjamas['DOM'].__track_lines__[663] = "pyjamas.DOM.py, line 663:\n    self.stack = []";
	pyjamas['DOM'].__track_lines__[665] = "pyjamas.DOM.py, line 665:\n    def next(self):";
	pyjamas['DOM'].__track_lines__[666] = "pyjamas.DOM.py, line 666:\n    if not self.child:";
	pyjamas['DOM'].__track_lines__[667] = "pyjamas.DOM.py, line 667:\n    raise StopIteration";
	pyjamas['DOM'].__track_lines__[668] = "pyjamas.DOM.py, line 668:\n    self.lastChild = self.child";
	pyjamas['DOM'].__track_lines__[669] = "pyjamas.DOM.py, line 669:\n    firstChild = getFirstChild(self.child)";
	pyjamas['DOM'].__track_lines__[670] = "pyjamas.DOM.py, line 670:\n    nextSibling = getNextSibling(self.child)";
	pyjamas['DOM'].__track_lines__[671] = "pyjamas.DOM.py, line 671:\n    if firstChild is not None:";
	pyjamas['DOM'].__track_lines__[672] = "pyjamas.DOM.py, line 672:\n    if nextSibling is not None:";
	pyjamas['DOM'].__track_lines__[673] = "pyjamas.DOM.py, line 673:\n    self.stack.append((nextSibling, self.parent))";
	pyjamas['DOM'].__track_lines__[674] = "pyjamas.DOM.py, line 674:\n    self.parent = self.child";
	pyjamas['DOM'].__track_lines__[675] = "pyjamas.DOM.py, line 675:\n    self.child = firstChild";
	pyjamas['DOM'].__track_lines__[677] = "pyjamas.DOM.py, line 677:\n    self.child = nextSibling";
	pyjamas['DOM'].__track_lines__[679] = "pyjamas.DOM.py, line 679:\n    (self.child, self.parent) = self.stack.pop()";
	pyjamas['DOM'].__track_lines__[681] = "pyjamas.DOM.py, line 681:\n    self.child = None";
	pyjamas['DOM'].__track_lines__[682] = "pyjamas.DOM.py, line 682:\n    return self.lastChild";
	pyjamas['DOM'].__track_lines__[684] = "pyjamas.DOM.py, line 684:\n    def remove(self):";
	pyjamas['DOM'].__track_lines__[685] = "pyjamas.DOM.py, line 685:\n    self.parent.removeChild(self.lastChild)";
	pyjamas['DOM'].__track_lines__[687] = "pyjamas.DOM.py, line 687:\n    def __iter__(self):";
	pyjamas['DOM'].__track_lines__[688] = "pyjamas.DOM.py, line 688:\n    return self";
	pyjamas['DOM'].__track_lines__[691] = "pyjamas.DOM.py, line 406:\n    def iframeGetSrc(elem): ... def walkChildren(elem):";
	pyjamas['DOM'].__track_lines__[700] = "pyjamas.DOM.py, line 184:\n     ... def isOrHasChild(parent, child):";
	pyjamas['DOM'].__track_lines__[712] = "pyjamas.DOM.py, line 194:\n    return createElement(\"col\") ... def releaseCapture(elem):";
	pyjamas['DOM'].__track_lines__[719] = "pyjamas.DOM.py, line 719:\n    def removeChild(parent, child):";
	pyjamas['DOM'].__track_lines__[720] = "pyjamas.DOM.py, line 720:\n    parent.removeChild(child)";
	pyjamas['DOM'].__track_lines__[723] = "pyjamas.DOM.py, line 723:\n    def replaceChild(parent, newChild, oldChild):";
	pyjamas['DOM'].__track_lines__[724] = "pyjamas.DOM.py, line 724:\n    parent.replaceChild(newChild, oldChild)";
	pyjamas['DOM'].__track_lines__[727] = "pyjamas.DOM.py, line 453:\n     ... def removeEventPreview(preview):";
	pyjamas['DOM'].__track_lines__[731] = "pyjamas.DOM.py, line 731:\n    def getOffsetHeight(elem):";
	pyjamas['DOM'].__track_lines__[732] = "pyjamas.DOM.py, line 732:\n    return elem.offsetHeight";
	pyjamas['DOM'].__track_lines__[735] = "pyjamas.DOM.py, line 735:\n    def getOffsetWidth(elem):";
	pyjamas['DOM'].__track_lines__[736] = "pyjamas.DOM.py, line 736:\n    return elem.offsetWidth";
	pyjamas['DOM'].__track_lines__[739] = "pyjamas.DOM.py, line 456:\n    if not elem.hasAttribute(attr): ... def scrollIntoView(elem):";
	pyjamas['DOM'].__track_lines__[775] = "pyjamas.DOM.py, line 775:\n    def mash_name_for_glib(name, joiner=\'-\'):";
	pyjamas['DOM'].__track_lines__[776] = "pyjamas.DOM.py, line 776:\n    res = \'\'";
	pyjamas['DOM'].__track_lines__[777] = "pyjamas.DOM.py, line 777:\n    for c in name:";
	pyjamas['DOM'].__track_lines__[778] = "pyjamas.DOM.py, line 778:\n    if c.isupper():";
	pyjamas['DOM'].__track_lines__[779] = "pyjamas.DOM.py, line 779:\n    res += joiner + c.lower()";
	pyjamas['DOM'].__track_lines__[781] = "pyjamas.DOM.py, line 781:\n    res += c";
	pyjamas['DOM'].__track_lines__[782] = "pyjamas.DOM.py, line 782:\n    return res";
	pyjamas['DOM'].__track_lines__[785] = "pyjamas.DOM.py, line 495:\n    def getChildIndex(parent, toFind): ... def removeAttribute(element, attribute):";
	pyjamas['DOM'].__track_lines__[789] = "pyjamas.DOM.py, line 500:\n    \"\"\" ... def setAttribute(element, attribute, value):";
	pyjamas['DOM'].__track_lines__[793] = "pyjamas.DOM.py, line 793:\n    def setElemAttribute(element, attribute, value):";
	pyjamas['DOM'].__track_lines__[794] = "pyjamas.DOM.py, line 794:\n    element.setAttribute(attribute, value)";
	pyjamas['DOM'].__track_lines__[797] = "pyjamas.DOM.py, line 505:\n    return count ... def setBooleanAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[802] = "pyjamas.DOM.py, line 199:\n     ... def setCapture(elem):";
	pyjamas['DOM'].__track_lines__[808] = "pyjamas.DOM.py, line 521:\n    \"\"\" ... def setEventListener(element, listener):";
	pyjamas['DOM'].__track_lines__[818] = "pyjamas.DOM.py, line 526:\n    eventbitsmap = {} ... def setInnerHTML(element, html):";
	pyjamas['DOM'].__track_lines__[825] = "pyjamas.DOM.py, line 204:\n     ... def setInnerText(elem, text):";
	pyjamas['DOM'].__track_lines__[832] = "pyjamas.DOM.py, line 832:\n    def setIntElemAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[833] = "pyjamas.DOM.py, line 833:\n    elem.setAttribute(attr, str(value))";
	pyjamas['DOM'].__track_lines__[836] = "pyjamas.DOM.py, line 539:\n    while child and child.nodeType != 1: ... def setIntAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[840] = "pyjamas.DOM.py, line 544:\n    def getInnerHTML(element): ... def setIntStyleAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[848] = "pyjamas.DOM.py, line 549:\n     ... def setOptionText(select, text, index):";
	pyjamas['DOM'].__track_lines__[853] = "pyjamas.DOM.py, line 553:\n    # concatenate all child text nodes (depth first). ... def setStyleAttribute(element, name, value):";
	pyjamas['DOM'].__track_lines__[860] = "pyjamas.DOM.py, line 211:\n     ... def sinkEvents(element, bits):";
	pyjamas['DOM'].__track_lines__[917] = "pyjamas.DOM.py, line 235:\n    def createInputRadio(group): ... def toString(elem):";
	pyjamas['DOM'].__track_lines__[927] = "pyjamas.DOM.py, line 599:\n     ... def dispatchEvent(event, element, listener):";
	pyjamas['DOM'].__track_lines__[931] = "pyjamas.DOM.py, line 602:\n    if hasattr(element.style, \'getProperty\'): ... def previewEvent(evt):";
	pyjamas['DOM'].__track_lines__[948] = "pyjamas.DOM.py, line 615:\n    if (count == index): ... def dispatchEventAndCatch(evt, elem, listener, handler):";
	pyjamas['DOM'].__track_lines__[951] = "pyjamas.DOM.py, line 951:\n    currentEvent = None";
	pyjamas['DOM'].__track_lines__[954] = "pyjamas.DOM.py, line 618:\n     ... def dispatchEventImpl(event, element, listener):";
	pyjamas['DOM'].__track_lines__[967] = "pyjamas.DOM.py, line 628:\n    class IterChildrenClass: ... def eventGetCurrentEvent():";
	pyjamas['DOM'].__track_lines__[971] = "pyjamas.DOM.py, line 172:\n    def buttonClick(element): ... def insertListItem(select, item, value, index):";
	pyjamas['DOM'].__track_lines__[982] = "pyjamas.DOM.py, line 78:\n    except: ... def getBodyOffsetTop():";
	pyjamas['DOM'].__track_lines__[986] = "pyjamas.DOM.py, line 83:\n    #print \"_dispatchEvent\", sender, evt, evt.type ... def getBodyOffsetLeft():";
	pyjamas['DOM'].__track_lines__[990] = "pyjamas.DOM.py, line 990:\n    if sys.platform in [\'mozilla\', \'ie6\', \'opera\', \'oldmoz\', \'safari\']:";
	pyjamas['DOM'].__track_lines__[991] = "pyjamas.DOM.py, line 991:\n    init()";
	var $attr70,$attr69,$attr2,$attr1;

	$pyjs.track.module='pyjamas.DOM';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=19;
	pyjamas['DOM']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	$pyjs.track.lineno=20;
	if ((function(){var $pyjs_dbg_2_retry = 0;
try{var $pyjs_dbg_2_res=pyjslib['bool'](!(function(){var $pyjs_dbg_1_retry = 0;
try{var $pyjs_dbg_1_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);}catch($pyjs_dbg_1_err){
    if ($pyjs_dbg_1_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 20 :\n" + $pyjs_dbg_1_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_1_retry) {
        case 1:
            $pyjs_dbg_1_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_1_err;
    }
}return $pyjs_dbg_1_res})().__contains__(((($attr1=pyjamas['DOM']['sys']['platform']) !== null & ($attr2=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['DOM']['sys']['platform'])));}catch($pyjs_dbg_2_err){
    if ($pyjs_dbg_2_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 20 :\n" + $pyjs_dbg_2_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_2_retry) {
        case 1:
            $pyjs_dbg_2_res=pyjslib['bool'](!(function(){var $pyjs_dbg_1_retry = 0;
try{var $pyjs_dbg_1_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);}catch($pyjs_dbg_1_err){
    if ($pyjs_dbg_1_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 20 :\n" + $pyjs_dbg_1_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_1_retry) {
        case 1:
            $pyjs_dbg_1_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_1_err;
    }
}return $pyjs_dbg_1_res})().__contains__(((($attr1=pyjamas['DOM']['sys']['platform']) !== null & ($attr2=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['DOM']['sys']['platform'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_2_err;
    }
}return $pyjs_dbg_2_res})()) {
		$pyjs.track.lineno=21;
		pyjamas['DOM']['onResize'] = pyjslib['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
		pyjamas['DOM']['onClosing'] = pyjslib['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
		pyjamas['DOM']['onClosed'] = pyjslib['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
		$pyjs.track.lineno=22;
		$pyjs.track.lineno=24;
		pyjamas['DOM']['currentEvent'] = null;
	}
	$pyjs.track.lineno=26;
	pyjamas['DOM']['sCaptureElem'] = null;
	$pyjs.track.lineno=27;
	pyjamas['DOM']['sEventPreviewStack'] = (function(){var $pyjs_dbg_3_retry = 0;
try{var $pyjs_dbg_3_res=pyjslib['list']([]);}catch($pyjs_dbg_3_err){
    if ($pyjs_dbg_3_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 27 :\n" + $pyjs_dbg_3_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_3_retry) {
        case 1:
            $pyjs_dbg_3_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_3_err;
    }
}return $pyjs_dbg_3_res})();
	$pyjs.track.lineno=29;
	pyjamas['DOM']['listeners'] = (function(){var $pyjs_dbg_4_retry = 0;
try{var $pyjs_dbg_4_res=pyjslib['dict']([]);}catch($pyjs_dbg_4_err){
    if ($pyjs_dbg_4_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line None :\n" + $pyjs_dbg_4_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_4_retry) {
        case 1:
            $pyjs_dbg_4_res=pyjslib['dict']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_4_err;
    }
}return $pyjs_dbg_4_res})();
	$pyjs.track.lineno=32;
	pyjamas['DOM']['get_listener'] = function(item) {
		var $attr3,$attr4,ret;
		$pyjs.track={module:'pyjamas.DOM',lineno:32};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=32;
		$pyjs.track.lineno=33;
		if ((function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=pyjslib['bool']((item === null));}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 33 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=pyjslib['bool']((item === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})()) {
			$pyjs.track.lineno=34;
			$pyjs.track.lineno=34;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=35;
		if ((function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=pyjslib['bool']((function(){var $pyjs_dbg_6_retry = 0;
try{var $pyjs_dbg_6_res=pyjslib['hasattr'](item, String('__instance__'));}catch($pyjs_dbg_6_err){
    if ($pyjs_dbg_6_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 35 :\n" + $pyjs_dbg_6_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_6_retry) {
        case 1:
            $pyjs_dbg_6_res=pyjslib['hasattr'](item, String('__instance__'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_6_err;
    }
}return $pyjs_dbg_6_res})());}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 35 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=pyjslib['bool']((function(){var $pyjs_dbg_6_retry = 0;
try{var $pyjs_dbg_6_res=pyjslib['hasattr'](item, String('__instance__'));}catch($pyjs_dbg_6_err){
    if ($pyjs_dbg_6_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 35 :\n" + $pyjs_dbg_6_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_6_retry) {
        case 1:
            $pyjs_dbg_6_res=pyjslib['hasattr'](item, String('__instance__'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_6_err;
    }
}return $pyjs_dbg_6_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})()) {
			$pyjs.track.lineno=36;
			ret = (function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjamas['DOM']['listeners']['get'](((($attr3=item['__instance__']) !== null & ($attr4=item).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__instance__'):
						item['__instance__']));}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 36 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjamas['DOM']['listeners']['get'](((($attr3=item['__instance__']) !== null & ($attr4=item).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__instance__'):
						item['__instance__']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})();
		}
		else {
			$pyjs.track.lineno=38;
			ret = (function(){var $pyjs_dbg_10_retry = 0;
try{var $pyjs_dbg_10_res=pyjamas['DOM']['listeners']['get']((function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=pyjslib['hash'](item);}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 38 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=pyjslib['hash'](item);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_9_err;
    }
}return $pyjs_dbg_9_res})());}catch($pyjs_dbg_10_err){
    if ($pyjs_dbg_10_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 38 :\n" + $pyjs_dbg_10_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_10_retry) {
        case 1:
            $pyjs_dbg_10_res=pyjamas['DOM']['listeners']['get']((function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=pyjslib['hash'](item);}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 38 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=pyjslib['hash'](item);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_9_err;
    }
}return $pyjs_dbg_9_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_10_err;
    }
}return $pyjs_dbg_10_res})();
		}
		$pyjs.track.lineno=39;
		$pyjs.track.lineno=39;
		var $pyjs__ret = ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['get_listener'].__name__ = 'get_listener';

	pyjamas['DOM']['get_listener'].__bind_type__ = 0;
	pyjamas['DOM']['get_listener'].__args__ = [null,null,['item']];
	$pyjs.track.lineno=42;
	pyjamas['DOM']['set_listener'] = function(item, listener) {
		var $attr5,$attr6;
		$pyjs.track={module:'pyjamas.DOM',lineno:42};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=42;
		$pyjs.track.lineno=43;
		if ((function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=pyjslib['bool']((function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=pyjslib['hasattr'](item, String('__instance__'));}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 43 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=pyjslib['hasattr'](item, String('__instance__'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})());}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 43 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=pyjslib['bool']((function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=pyjslib['hasattr'](item, String('__instance__'));}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 43 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=pyjslib['hasattr'](item, String('__instance__'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})()) {
			$pyjs.track.lineno=44;
			(function(){var $pyjs_dbg_13_retry = 0;
try{var $pyjs_dbg_13_res=pyjamas['DOM']['listeners'].__setitem__(((($attr5=item['__instance__']) !== null & ($attr6=item).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);}catch($pyjs_dbg_13_err){
    if ($pyjs_dbg_13_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 44 :\n" + $pyjs_dbg_13_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_13_retry) {
        case 1:
            $pyjs_dbg_13_res=pyjamas['DOM']['listeners'].__setitem__(((($attr5=item['__instance__']) !== null & ($attr6=item).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_13_err;
    }
}return $pyjs_dbg_13_res})();
		}
		else {
			$pyjs.track.lineno=46;
			(function(){var $pyjs_dbg_15_retry = 0;
try{var $pyjs_dbg_15_res=pyjamas['DOM']['listeners'].__setitem__((function(){var $pyjs_dbg_14_retry = 0;
try{var $pyjs_dbg_14_res=pyjslib['hash'](item);}catch($pyjs_dbg_14_err){
    if ($pyjs_dbg_14_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 46 :\n" + $pyjs_dbg_14_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_14_retry) {
        case 1:
            $pyjs_dbg_14_res=pyjslib['hash'](item);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_14_err;
    }
}return $pyjs_dbg_14_res})(), listener);}catch($pyjs_dbg_15_err){
    if ($pyjs_dbg_15_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 46 :\n" + $pyjs_dbg_15_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_15_retry) {
        case 1:
            $pyjs_dbg_15_res=pyjamas['DOM']['listeners'].__setitem__((function(){var $pyjs_dbg_14_retry = 0;
try{var $pyjs_dbg_14_res=pyjslib['hash'](item);}catch($pyjs_dbg_14_err){
    if ($pyjs_dbg_14_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 46 :\n" + $pyjs_dbg_14_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_14_retry) {
        case 1:
            $pyjs_dbg_14_res=pyjslib['hash'](item);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_14_err;
    }
}return $pyjs_dbg_14_res})(), listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_15_err;
    }
}return $pyjs_dbg_15_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['set_listener'].__name__ = 'set_listener';

	pyjamas['DOM']['set_listener'].__bind_type__ = 0;
	pyjamas['DOM']['set_listener'].__args__ = [null,null,['item'],['listener']];
	$pyjs.track.lineno=49;
	pyjamas['DOM']['hack_timer_workaround_bug_button'] = null;
	$pyjs.track.lineno=52;
	pyjamas['DOM']['init'] = function() {


    // Set up event dispatchers.
    $wnd.__dispatchEvent = function() {
        if ($wnd.event.returnValue == null) {
            $wnd.event.returnValue = true;
            if (!DOM.previewEvent($wnd.event))
                return;
        }

        var listener, curElem = this;
        while (curElem && !(listener = curElem.__listener))
            curElem = curElem.parentElement;
    
        if (listener)
            DOM.dispatchEvent($wnd.event, curElem, listener);
    };

    $wnd.__dispatchDblClickEvent = function() {
        var newEvent = $doc.createEventObject();
        this.fireEvent('onclick', newEvent);
        if (this.__eventBits & 2)
            $wnd.__dispatchEvent.call(this);
    };

    $doc.body.onclick       =
    $doc.body.onmousedown   =
    $doc.body.onmouseup     =
    $doc.body.onmousemove   =
    $doc.body.onkeydown     =
    $doc.body.onkeypress    =
    $doc.body.onkeyup       =
    $doc.body.onfocus       =
    $doc.body.onblur        =
    $doc.body.ondblclick    = $wnd.__dispatchEvent;
    
	};
	pyjamas['DOM']['init'].__name__ = 'init';

	pyjamas['DOM']['init'].__bind_type__ = 0;
	pyjamas['DOM']['init'].__args__ = [null,null];
	$pyjs.track.lineno=66;
	pyjamas['DOM']['_dispatchWindowEvent'] = function(sender, evt, useCap) {

		$pyjs.track={module:'pyjamas.DOM',lineno:66};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=66;
		$pyjs.track.lineno=67;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	pyjamas['DOM']['_dispatchWindowEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$pyjs.track.lineno=70;
	pyjamas['DOM']['_dispatchEvent'] = function(sender, evt, useCap) {
		var $attr8,$and3,err,$and1,$and2,cap,curElem,$and4,$attr7,$and5,listener,$pyjs_try_err,$and6;
		$pyjs.track={module:'pyjamas.DOM',lineno:70};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=70;
		$pyjs.track.lineno=72;
		if (pyjslib['bool']((evt === null))) {
			$pyjs.track.lineno=73;
			evt = ((($attr7=$wnd['event']) !== null & ($attr8=$wnd).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'event'):
						$wnd['event']);
		}
		else {
			$pyjs.track.lineno=75;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=76;
				sender = (function(){var $pyjs_dbg_17_retry = 0;
try{var $pyjs_dbg_17_res=(function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 76 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})()['gobject_wrap'](sender);}catch($pyjs_dbg_17_err){
    if ($pyjs_dbg_17_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 76 :\n" + $pyjs_dbg_17_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_17_retry) {
        case 1:
            $pyjs_dbg_17_res=(function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 76 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})()['gobject_wrap'](sender);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_17_err;
    }
}return $pyjs_dbg_17_res})();
				$pyjs.track.lineno=77;
				evt = (function(){var $pyjs_dbg_19_retry = 0;
try{var $pyjs_dbg_19_res=(function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 77 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})()['gobject_wrap'](evt);}catch($pyjs_dbg_19_err){
    if ($pyjs_dbg_19_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 77 :\n" + $pyjs_dbg_19_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_19_retry) {
        case 1:
            $pyjs_dbg_19_res=(function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 77 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})()['gobject_wrap'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_19_err;
    }
}return $pyjs_dbg_19_res})();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 75};
				sys.save_exception_stack();
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (true) {
					$pyjs.__last_exception__.except_lineno = 79;
					err = $pyjs_try_err;
					$pyjs.track.lineno=79;
				}
			}
		}
		$pyjs.track.lineno=80;
		listener = null;
		$pyjs.track.lineno=81;
		curElem = sender;
		$pyjs.track.lineno=84;
		cap = (function(){var $pyjs_dbg_20_retry = 0;
try{var $pyjs_dbg_20_res=pyjamas.DOM.getCaptureElement();}catch($pyjs_dbg_20_err){
    if ($pyjs_dbg_20_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 84 :\n" + $pyjs_dbg_20_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_20_retry) {
        case 1:
            $pyjs_dbg_20_res=pyjamas.DOM.getCaptureElement();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_20_err;
    }
}return $pyjs_dbg_20_res})();
		$pyjs.track.lineno=85;
		listener = (function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=pyjamas['DOM']['get_listener'](cap);}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 85 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=pyjamas['DOM']['get_listener'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})();
		$pyjs.track.lineno=86;
		if ((function(){var $pyjs_dbg_22_retry = 0;
try{var $pyjs_dbg_22_res=pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1));}catch($pyjs_dbg_22_err){
    if ($pyjs_dbg_22_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 86 :\n" + $pyjs_dbg_22_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_22_retry) {
        case 1:
            $pyjs_dbg_22_res=pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_22_err;
    }
}return $pyjs_dbg_22_res})()) {
			$pyjs.track.lineno=88;
			(function(){var $pyjs_dbg_23_retry = 0;
try{var $pyjs_dbg_23_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);}catch($pyjs_dbg_23_err){
    if ($pyjs_dbg_23_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 88 :\n" + $pyjs_dbg_23_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_23_retry) {
        case 1:
            $pyjs_dbg_23_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_23_err;
    }
}return $pyjs_dbg_23_res})();
			$pyjs.track.lineno=89;
			(function(){var $pyjs_dbg_24_retry = 0;
try{var $pyjs_dbg_24_res=evt['stopPropagation']();}catch($pyjs_dbg_24_err){
    if ($pyjs_dbg_24_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 89 :\n" + $pyjs_dbg_24_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_24_retry) {
        case 1:
            $pyjs_dbg_24_res=evt['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_24_err;
    }
}return $pyjs_dbg_24_res})();
			$pyjs.track.lineno=90;
			$pyjs.track.lineno=90;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=92;
		while ((function(){var $pyjs_dbg_26_retry = 0;
try{var $pyjs_dbg_26_res=pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool']((function(){var $pyjs_dbg_25_retry = 0;
try{var $pyjs_dbg_25_res=pyjamas['DOM']['get_listener'](curElem);}catch($pyjs_dbg_25_err){
    if ($pyjs_dbg_25_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 92 :\n" + $pyjs_dbg_25_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_25_retry) {
        case 1:
            $pyjs_dbg_25_res=pyjamas['DOM']['get_listener'](curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_25_err;
    }
}return $pyjs_dbg_25_res})()):$and3));}catch($pyjs_dbg_26_err){
    if ($pyjs_dbg_26_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 92 :\n" + $pyjs_dbg_26_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_26_retry) {
        case 1:
            $pyjs_dbg_26_res=pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool']((function(){var $pyjs_dbg_25_retry = 0;
try{var $pyjs_dbg_25_res=pyjamas['DOM']['get_listener'](curElem);}catch($pyjs_dbg_25_err){
    if ($pyjs_dbg_25_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 92 :\n" + $pyjs_dbg_25_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_25_retry) {
        case 1:
            $pyjs_dbg_25_res=pyjamas['DOM']['get_listener'](curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_25_err;
    }
}return $pyjs_dbg_25_res})()):$and3));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_26_err;
    }
}return $pyjs_dbg_26_res})()) {
			$pyjs.track.lineno=94;
			curElem = (function(){var $pyjs_dbg_27_retry = 0;
try{var $pyjs_dbg_27_res=pyjamas.DOM.getParent(curElem);}catch($pyjs_dbg_27_err){
    if ($pyjs_dbg_27_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 94 :\n" + $pyjs_dbg_27_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_27_retry) {
        case 1:
            $pyjs_dbg_27_res=pyjamas.DOM.getParent(curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_27_err;
    }
}return $pyjs_dbg_27_res})();
		}
		$pyjs.track.lineno=95;
		if ((function(){var $pyjs_dbg_29_retry = 0;
try{var $pyjs_dbg_29_res=pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq']((function(){var $pyjs_dbg_28_retry = 0;
try{var $pyjs_dbg_28_res=pyjamas.DOM.getNodeType(curElem);}catch($pyjs_dbg_28_err){
    if ($pyjs_dbg_28_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 95 :\n" + $pyjs_dbg_28_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_28_retry) {
        case 1:
            $pyjs_dbg_28_res=pyjamas.DOM.getNodeType(curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_28_err;
    }
}return $pyjs_dbg_28_res})(), 1):$and5));}catch($pyjs_dbg_29_err){
    if ($pyjs_dbg_29_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 95 :\n" + $pyjs_dbg_29_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_29_retry) {
        case 1:
            $pyjs_dbg_29_res=pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq']((function(){var $pyjs_dbg_28_retry = 0;
try{var $pyjs_dbg_28_res=pyjamas.DOM.getNodeType(curElem);}catch($pyjs_dbg_28_err){
    if ($pyjs_dbg_28_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 95 :\n" + $pyjs_dbg_28_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_28_retry) {
        case 1:
            $pyjs_dbg_28_res=pyjamas.DOM.getNodeType(curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_28_err;
    }
}return $pyjs_dbg_28_res})(), 1):$and5));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_29_err;
    }
}return $pyjs_dbg_29_res})()) {
			$pyjs.track.lineno=96;
			curElem = null;
		}
		$pyjs.track.lineno=98;
		listener = (function(){var $pyjs_dbg_30_retry = 0;
try{var $pyjs_dbg_30_res=pyjamas['DOM']['get_listener'](curElem);}catch($pyjs_dbg_30_err){
    if ($pyjs_dbg_30_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 98 :\n" + $pyjs_dbg_30_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_30_retry) {
        case 1:
            $pyjs_dbg_30_res=pyjamas['DOM']['get_listener'](curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_30_err;
    }
}return $pyjs_dbg_30_res})();
		$pyjs.track.lineno=99;
		if ((function(){var $pyjs_dbg_31_retry = 0;
try{var $pyjs_dbg_31_res=pyjslib['bool'](listener);}catch($pyjs_dbg_31_err){
    if ($pyjs_dbg_31_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 99 :\n" + $pyjs_dbg_31_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_31_retry) {
        case 1:
            $pyjs_dbg_31_res=pyjslib['bool'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_31_err;
    }
}return $pyjs_dbg_31_res})()) {
			$pyjs.track.lineno=100;
			(function(){var $pyjs_dbg_32_retry = 0;
try{var $pyjs_dbg_32_res=pyjamas.DOM.dispatchEvent(evt, curElem, listener);}catch($pyjs_dbg_32_err){
    if ($pyjs_dbg_32_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 100 :\n" + $pyjs_dbg_32_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_32_retry) {
        case 1:
            $pyjs_dbg_32_res=pyjamas.DOM.dispatchEvent(evt, curElem, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_32_err;
    }
}return $pyjs_dbg_32_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['_dispatchEvent'].__name__ = '_dispatchEvent';

	pyjamas['DOM']['_dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$pyjs.track.lineno=103;
	pyjamas['DOM']['_dispatchCapturedMouseEvent'] = function(evt) {
		var listener,$and8,cap,$and7;
		$pyjs.track={module:'pyjamas.DOM',lineno:103};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=103;
		$pyjs.track.lineno=105;
		if ((function(){var $pyjs_dbg_34_retry = 0;
try{var $pyjs_dbg_34_res=pyjslib['bool']((function(){var $pyjs_dbg_33_retry = 0;
try{var $pyjs_dbg_33_res=pyjamas.DOM._dispatchCapturedEvent(evt);}catch($pyjs_dbg_33_err){
    if ($pyjs_dbg_33_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 105 :\n" + $pyjs_dbg_33_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_33_retry) {
        case 1:
            $pyjs_dbg_33_res=pyjamas.DOM._dispatchCapturedEvent(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_33_err;
    }
}return $pyjs_dbg_33_res})());}catch($pyjs_dbg_34_err){
    if ($pyjs_dbg_34_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 105 :\n" + $pyjs_dbg_34_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_34_retry) {
        case 1:
            $pyjs_dbg_34_res=pyjslib['bool']((function(){var $pyjs_dbg_33_retry = 0;
try{var $pyjs_dbg_33_res=pyjamas.DOM._dispatchCapturedEvent(evt);}catch($pyjs_dbg_33_err){
    if ($pyjs_dbg_33_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 105 :\n" + $pyjs_dbg_33_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_33_retry) {
        case 1:
            $pyjs_dbg_33_res=pyjamas.DOM._dispatchCapturedEvent(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_33_err;
    }
}return $pyjs_dbg_33_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_34_err;
    }
}return $pyjs_dbg_34_res})()) {
			$pyjs.track.lineno=106;
			cap = (function(){var $pyjs_dbg_35_retry = 0;
try{var $pyjs_dbg_35_res=pyjamas.DOM.getCaptureElement();}catch($pyjs_dbg_35_err){
    if ($pyjs_dbg_35_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 106 :\n" + $pyjs_dbg_35_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_35_retry) {
        case 1:
            $pyjs_dbg_35_res=pyjamas.DOM.getCaptureElement();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_35_err;
    }
}return $pyjs_dbg_35_res})();
			$pyjs.track.lineno=107;
			listener = (function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=pyjamas['DOM']['get_listener'](cap);}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 107 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=pyjamas['DOM']['get_listener'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})();
			$pyjs.track.lineno=108;
			if ((function(){var $pyjs_dbg_37_retry = 0;
try{var $pyjs_dbg_37_res=pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7));}catch($pyjs_dbg_37_err){
    if ($pyjs_dbg_37_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 108 :\n" + $pyjs_dbg_37_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_37_retry) {
        case 1:
            $pyjs_dbg_37_res=pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_37_err;
    }
}return $pyjs_dbg_37_res})()) {
				$pyjs.track.lineno=109;
				(function(){var $pyjs_dbg_38_retry = 0;
try{var $pyjs_dbg_38_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);}catch($pyjs_dbg_38_err){
    if ($pyjs_dbg_38_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 109 :\n" + $pyjs_dbg_38_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_38_retry) {
        case 1:
            $pyjs_dbg_38_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_38_err;
    }
}return $pyjs_dbg_38_res})();
				$pyjs.track.lineno=111;
				(function(){var $pyjs_dbg_39_retry = 0;
try{var $pyjs_dbg_39_res=evt['stopPropagation']();}catch($pyjs_dbg_39_err){
    if ($pyjs_dbg_39_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 111 :\n" + $pyjs_dbg_39_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_39_retry) {
        case 1:
            $pyjs_dbg_39_res=evt['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_39_err;
    }
}return $pyjs_dbg_39_res})();
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=114;
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var listener,lcEvent,cap;
		$pyjs.track={module:'pyjamas.DOM',lineno:114};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=114;
		$pyjs.track.lineno=115;
		cap = (function(){var $pyjs_dbg_40_retry = 0;
try{var $pyjs_dbg_40_res=pyjamas.DOM.getCaptureElement();}catch($pyjs_dbg_40_err){
    if ($pyjs_dbg_40_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 115 :\n" + $pyjs_dbg_40_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_40_retry) {
        case 1:
            $pyjs_dbg_40_res=pyjamas.DOM.getCaptureElement();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_40_err;
    }
}return $pyjs_dbg_40_res})();
		$pyjs.track.lineno=116;
		if ((function(){var $pyjs_dbg_41_retry = 0;
try{var $pyjs_dbg_41_res=pyjslib['bool'](cap);}catch($pyjs_dbg_41_err){
    if ($pyjs_dbg_41_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 116 :\n" + $pyjs_dbg_41_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_41_retry) {
        case 1:
            $pyjs_dbg_41_res=pyjslib['bool'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_41_err;
    }
}return $pyjs_dbg_41_res})()) {
			$pyjs.track.lineno=118;
			if ((function(){var $pyjs_dbg_43_retry = 0;
try{var $pyjs_dbg_43_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_42_retry = 0;
try{var $pyjs_dbg_42_res=pyjamas.DOM.eventGetToElement(evt);}catch($pyjs_dbg_42_err){
    if ($pyjs_dbg_42_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 118 :\n" + $pyjs_dbg_42_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_42_retry) {
        case 1:
            $pyjs_dbg_42_res=pyjamas.DOM.eventGetToElement(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_42_err;
    }
}return $pyjs_dbg_42_res})()));}catch($pyjs_dbg_43_err){
    if ($pyjs_dbg_43_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 118 :\n" + $pyjs_dbg_43_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_43_retry) {
        case 1:
            $pyjs_dbg_43_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_42_retry = 0;
try{var $pyjs_dbg_42_res=pyjamas.DOM.eventGetToElement(evt);}catch($pyjs_dbg_42_err){
    if ($pyjs_dbg_42_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 118 :\n" + $pyjs_dbg_42_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_42_retry) {
        case 1:
            $pyjs_dbg_42_res=pyjamas.DOM.eventGetToElement(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_42_err;
    }
}return $pyjs_dbg_42_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_43_err;
    }
}return $pyjs_dbg_43_res})()) {
				$pyjs.track.lineno=122;
				(function(){var $pyjs_dbg_44_retry = 0;
try{var $pyjs_dbg_44_res=pyjamas.DOM.setCapture(null);}catch($pyjs_dbg_44_err){
    if ($pyjs_dbg_44_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 122 :\n" + $pyjs_dbg_44_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_44_retry) {
        case 1:
            $pyjs_dbg_44_res=pyjamas.DOM.setCapture(null);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_44_err;
    }
}return $pyjs_dbg_44_res})();
				$pyjs.track.lineno=123;
				listener = (function(){var $pyjs_dbg_45_retry = 0;
try{var $pyjs_dbg_45_res=pyjamas['DOM']['get_listener'](cap);}catch($pyjs_dbg_45_err){
    if ($pyjs_dbg_45_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 123 :\n" + $pyjs_dbg_45_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_45_retry) {
        case 1:
            $pyjs_dbg_45_res=pyjamas['DOM']['get_listener'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_45_err;
    }
}return $pyjs_dbg_45_res})();
				$pyjs.track.lineno=124;
				if ((function(){var $pyjs_dbg_46_retry = 0;
try{var $pyjs_dbg_46_res=pyjslib['bool'](listener);}catch($pyjs_dbg_46_err){
    if ($pyjs_dbg_46_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 124 :\n" + $pyjs_dbg_46_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_46_retry) {
        case 1:
            $pyjs_dbg_46_res=pyjslib['bool'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_46_err;
    }
}return $pyjs_dbg_46_res})()) {
					$pyjs.track.lineno=126;
					lcEvent = $doc['createEvent'](String('UIEvent'));
					$pyjs.track.lineno=127;
					lcEvent['initUIEvent'](String('losecapture'), false, false, $wnd, 0);
					$pyjs.track.lineno=128;
					(function(){var $pyjs_dbg_47_retry = 0;
try{var $pyjs_dbg_47_res=pyjamas.DOM.dispatchEvent(lcEvent, cap, listener);}catch($pyjs_dbg_47_err){
    if ($pyjs_dbg_47_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 128 :\n" + $pyjs_dbg_47_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_47_retry) {
        case 1:
            $pyjs_dbg_47_res=pyjamas.DOM.dispatchEvent(lcEvent, cap, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_47_err;
    }
}return $pyjs_dbg_47_res})();
				}
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=131;
	pyjamas['DOM']['browser_event_cb'] = function(view, event, from_window) {
		var $or4,$or1,$or3,err,$or2,$pyjs_try_err,et;
		$pyjs.track={module:'pyjamas.DOM',lineno:131};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=131;
		$pyjs.track.lineno=133;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=134;
			event = (function(){var $pyjs_dbg_49_retry = 0;
try{var $pyjs_dbg_49_res=(function(){var $pyjs_dbg_48_retry = 0;
try{var $pyjs_dbg_48_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_48_err){
    if ($pyjs_dbg_48_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 134 :\n" + $pyjs_dbg_48_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_48_retry) {
        case 1:
            $pyjs_dbg_48_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_48_err;
    }
}return $pyjs_dbg_48_res})()['gobject_wrap'](event);}catch($pyjs_dbg_49_err){
    if ($pyjs_dbg_49_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 134 :\n" + $pyjs_dbg_49_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_49_retry) {
        case 1:
            $pyjs_dbg_49_res=(function(){var $pyjs_dbg_48_retry = 0;
try{var $pyjs_dbg_48_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_48_err){
    if ($pyjs_dbg_48_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 134 :\n" + $pyjs_dbg_48_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_48_retry) {
        case 1:
            $pyjs_dbg_48_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_48_err;
    }
}return $pyjs_dbg_48_res})()['gobject_wrap'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_49_err;
    }
}return $pyjs_dbg_49_res})();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 133};
			sys.save_exception_stack();
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.__last_exception__.except_lineno = 136;
				err = $pyjs_try_err;
				$pyjs.track.lineno=136;
			}
		}
		$pyjs.track.lineno=138;
		et = (function(){var $pyjs_dbg_50_retry = 0;
try{var $pyjs_dbg_50_res=pyjamas.DOM.eventGetType(event);}catch($pyjs_dbg_50_err){
    if ($pyjs_dbg_50_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 138 :\n" + $pyjs_dbg_50_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_50_retry) {
        case 1:
            $pyjs_dbg_50_res=pyjamas.DOM.eventGetType(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_50_err;
    }
}return $pyjs_dbg_50_res})();
		$pyjs.track.lineno=140;
		if ((function(){var $pyjs_dbg_51_retry = 0;
try{var $pyjs_dbg_51_res=pyjslib['bool'](pyjslib['op_eq'](et, String('resize')));}catch($pyjs_dbg_51_err){
    if ($pyjs_dbg_51_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 140 :\n" + $pyjs_dbg_51_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_51_retry) {
        case 1:
            $pyjs_dbg_51_res=pyjslib['bool'](pyjslib['op_eq'](et, String('resize')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_51_err;
    }
}return $pyjs_dbg_51_res})()) {
			$pyjs.track.lineno=141;
			(function(){var $pyjs_dbg_52_retry = 0;
try{var $pyjs_dbg_52_res=pyjamas['DOM']['onResize']();}catch($pyjs_dbg_52_err){
    if ($pyjs_dbg_52_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 141 :\n" + $pyjs_dbg_52_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_52_retry) {
        case 1:
            $pyjs_dbg_52_res=pyjamas['DOM']['onResize']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_52_err;
    }
}return $pyjs_dbg_52_res})();
			$pyjs.track.lineno=142;
			$pyjs.track.lineno=142;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else if ((function(){var $pyjs_dbg_53_retry = 0;
try{var $pyjs_dbg_53_res=pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')));}catch($pyjs_dbg_53_err){
    if ($pyjs_dbg_53_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 143 :\n" + $pyjs_dbg_53_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_53_retry) {
        case 1:
            $pyjs_dbg_53_res=pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_53_err;
    }
}return $pyjs_dbg_53_res})()) {
			$pyjs.track.lineno=145;
			$pyjs.track.lineno=145;
			var $pyjs__ret = (function(){var $pyjs_dbg_54_retry = 0;
try{var $pyjs_dbg_54_res=pyjamas['DOM']['_dispatchCapturedMouseoutEvent'](event);}catch($pyjs_dbg_54_err){
    if ($pyjs_dbg_54_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 145 :\n" + $pyjs_dbg_54_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_54_retry) {
        case 1:
            $pyjs_dbg_54_res=pyjamas['DOM']['_dispatchCapturedMouseoutEvent'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_54_err;
    }
}return $pyjs_dbg_54_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else if ((function(){var $pyjs_dbg_55_retry = 0;
try{var $pyjs_dbg_55_res=pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))));}catch($pyjs_dbg_55_err){
    if ($pyjs_dbg_55_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 146 :\n" + $pyjs_dbg_55_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_55_retry) {
        case 1:
            $pyjs_dbg_55_res=pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_55_err;
    }
}return $pyjs_dbg_55_res})()) {
			$pyjs.track.lineno=148;
			$pyjs.track.lineno=148;
			var $pyjs__ret = (function(){var $pyjs_dbg_56_retry = 0;
try{var $pyjs_dbg_56_res=pyjamas.DOM._dispatchCapturedEvent(event);}catch($pyjs_dbg_56_err){
    if ($pyjs_dbg_56_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 148 :\n" + $pyjs_dbg_56_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_56_retry) {
        case 1:
            $pyjs_dbg_56_res=pyjamas.DOM._dispatchCapturedEvent(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_56_err;
    }
}return $pyjs_dbg_56_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else {
			$pyjs.track.lineno=150;
			$pyjs.track.lineno=150;
			var $pyjs__ret = (function(){var $pyjs_dbg_57_retry = 0;
try{var $pyjs_dbg_57_res=pyjamas['DOM']['_dispatchCapturedMouseEvent'](event);}catch($pyjs_dbg_57_err){
    if ($pyjs_dbg_57_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 150 :\n" + $pyjs_dbg_57_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_57_retry) {
        case 1:
            $pyjs_dbg_57_res=pyjamas['DOM']['_dispatchCapturedMouseEvent'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_57_err;
    }
}return $pyjs_dbg_57_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['browser_event_cb'].__name__ = 'browser_event_cb';

	pyjamas['DOM']['browser_event_cb'].__bind_type__ = 0;
	pyjamas['DOM']['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	$pyjs.track.lineno=153;
	pyjamas['DOM']['_dispatchCapturedEvent'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:153};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=153;
		$pyjs.track.lineno=155;
		if ((function(){var $pyjs_dbg_59_retry = 0;
try{var $pyjs_dbg_59_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_58_retry = 0;
try{var $pyjs_dbg_58_res=pyjamas.DOM.previewEvent(event);}catch($pyjs_dbg_58_err){
    if ($pyjs_dbg_58_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 155 :\n" + $pyjs_dbg_58_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_58_retry) {
        case 1:
            $pyjs_dbg_58_res=pyjamas.DOM.previewEvent(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_58_err;
    }
}return $pyjs_dbg_58_res})()));}catch($pyjs_dbg_59_err){
    if ($pyjs_dbg_59_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 155 :\n" + $pyjs_dbg_59_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_59_retry) {
        case 1:
            $pyjs_dbg_59_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_58_retry = 0;
try{var $pyjs_dbg_58_res=pyjamas.DOM.previewEvent(event);}catch($pyjs_dbg_58_err){
    if ($pyjs_dbg_58_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 155 :\n" + $pyjs_dbg_58_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_58_retry) {
        case 1:
            $pyjs_dbg_58_res=pyjamas.DOM.previewEvent(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_58_err;
    }
}return $pyjs_dbg_58_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_59_err;
    }
}return $pyjs_dbg_59_res})()) {
			$pyjs.track.lineno=157;
			(function(){var $pyjs_dbg_60_retry = 0;
try{var $pyjs_dbg_60_res=event['stopPropagation']();}catch($pyjs_dbg_60_err){
    if ($pyjs_dbg_60_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 157 :\n" + $pyjs_dbg_60_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_60_retry) {
        case 1:
            $pyjs_dbg_60_res=event['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_60_err;
    }
}return $pyjs_dbg_60_res})();
			$pyjs.track.lineno=158;
			(function(){var $pyjs_dbg_61_retry = 0;
try{var $pyjs_dbg_61_res=pyjamas.DOM.eventPreventDefault(event);}catch($pyjs_dbg_61_err){
    if ($pyjs_dbg_61_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 158 :\n" + $pyjs_dbg_61_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_61_retry) {
        case 1:
            $pyjs_dbg_61_res=pyjamas.DOM.eventPreventDefault(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_61_err;
    }
}return $pyjs_dbg_61_res})();
			$pyjs.track.lineno=159;
			$pyjs.track.lineno=159;
			var $pyjs__ret = false;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=160;
		$pyjs.track.lineno=160;
		var $pyjs__ret = true;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	pyjamas['DOM']['_dispatchCapturedEvent'].__bind_type__ = 0;
	pyjamas['DOM']['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=163;
	pyjamas['DOM']['addEventPreview'] = function(preview) {

		$pyjs.track={module:'pyjamas.DOM',lineno:163};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=163;
		$pyjs.track.lineno=87;
		(function(){var $pyjs_dbg_62_retry = 0;
try{var $pyjs_dbg_62_res=pyjamas['DOM']['sEventPreviewStack']['append'](preview);}catch($pyjs_dbg_62_err){
    if ($pyjs_dbg_62_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 87 :\n" + $pyjs_dbg_62_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_62_retry) {
        case 1:
            $pyjs_dbg_62_res=pyjamas['DOM']['sEventPreviewStack']['append'](preview);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_62_err;
    }
}return $pyjs_dbg_62_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['addEventPreview'].__name__ = 'addEventPreview';

	pyjamas['DOM']['addEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['addEventPreview'].__args__ = [null,null,['preview']];
	$pyjs.track.lineno=167;
	pyjamas['DOM']['appendChild'] = function(parent, child) {

		$pyjs.track={module:'pyjamas.DOM',lineno:167};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=167;
		$pyjs.track.lineno=169;
		(function(){var $pyjs_dbg_63_retry = 0;
try{var $pyjs_dbg_63_res=parent['appendChild'](child);}catch($pyjs_dbg_63_err){
    if ($pyjs_dbg_63_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 169 :\n" + $pyjs_dbg_63_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_63_retry) {
        case 1:
            $pyjs_dbg_63_res=parent['appendChild'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_63_err;
    }
}return $pyjs_dbg_63_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['appendChild'].__name__ = 'appendChild';

	pyjamas['DOM']['appendChild'].__bind_type__ = 0;
	pyjamas['DOM']['appendChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=172;
	pyjamas['DOM']['buttonClick'] = function(button) {

		$pyjs.track={module:'pyjamas.DOM',lineno:172};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=172;
		$pyjs.track.lineno=92;

    button.click();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['buttonClick'].__name__ = 'buttonClick';

	pyjamas['DOM']['buttonClick'].__bind_type__ = 0;
	pyjamas['DOM']['buttonClick'].__args__ = [null,null,['button']];
	$pyjs.track.lineno=179;
	pyjamas['DOM']['compare'] = function(elem1, elem2) {


    if (!elem1 && !elem2)
        return true;
    else if (!elem1 || !elem2)
        return false;
    return (elem1.uniqueID == elem2.uniqueID);
    
	};
	pyjamas['DOM']['compare'].__name__ = 'compare';

	pyjamas['DOM']['compare'].__bind_type__ = 0;
	pyjamas['DOM']['compare'].__args__ = [null,null,['elem1'],['elem2']];
	$pyjs.track.lineno=185;
	pyjamas['DOM']['createAnchor'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:185};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=185;
		$pyjs.track.lineno=186;
		$pyjs.track.lineno=186;
		var $pyjs__ret = (function(){var $pyjs_dbg_64_retry = 0;
try{var $pyjs_dbg_64_res=pyjamas.DOM.createElement(String('A'));}catch($pyjs_dbg_64_err){
    if ($pyjs_dbg_64_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 186 :\n" + $pyjs_dbg_64_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_64_retry) {
        case 1:
            $pyjs_dbg_64_res=pyjamas.DOM.createElement(String('A'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_64_err;
    }
}return $pyjs_dbg_64_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createAnchor'].__name__ = 'createAnchor';

	pyjamas['DOM']['createAnchor'].__bind_type__ = 0;
	pyjamas['DOM']['createAnchor'].__args__ = [null,null];
	$pyjs.track.lineno=189;
	pyjamas['DOM']['createButton'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:189};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=189;
		$pyjs.track.lineno=190;
		$pyjs.track.lineno=190;
		var $pyjs__ret = (function(){var $pyjs_dbg_65_retry = 0;
try{var $pyjs_dbg_65_res=pyjamas.DOM.createElement(String('button'));}catch($pyjs_dbg_65_err){
    if ($pyjs_dbg_65_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 190 :\n" + $pyjs_dbg_65_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_65_retry) {
        case 1:
            $pyjs_dbg_65_res=pyjamas.DOM.createElement(String('button'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_65_err;
    }
}return $pyjs_dbg_65_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createButton'].__name__ = 'createButton';

	pyjamas['DOM']['createButton'].__bind_type__ = 0;
	pyjamas['DOM']['createButton'].__args__ = [null,null];
	$pyjs.track.lineno=193;
	pyjamas['DOM']['createCol'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:193};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=193;
		$pyjs.track.lineno=194;
		$pyjs.track.lineno=194;
		var $pyjs__ret = (function(){var $pyjs_dbg_66_retry = 0;
try{var $pyjs_dbg_66_res=pyjamas.DOM.createElement(String('col'));}catch($pyjs_dbg_66_err){
    if ($pyjs_dbg_66_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 194 :\n" + $pyjs_dbg_66_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_66_retry) {
        case 1:
            $pyjs_dbg_66_res=pyjamas.DOM.createElement(String('col'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_66_err;
    }
}return $pyjs_dbg_66_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createCol'].__name__ = 'createCol';

	pyjamas['DOM']['createCol'].__bind_type__ = 0;
	pyjamas['DOM']['createCol'].__args__ = [null,null];
	$pyjs.track.lineno=197;
	pyjamas['DOM']['createDiv'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:197};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=197;
		$pyjs.track.lineno=198;
		$pyjs.track.lineno=198;
		var $pyjs__ret = (function(){var $pyjs_dbg_67_retry = 0;
try{var $pyjs_dbg_67_res=pyjamas.DOM.createElement(String('div'));}catch($pyjs_dbg_67_err){
    if ($pyjs_dbg_67_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 198 :\n" + $pyjs_dbg_67_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_67_retry) {
        case 1:
            $pyjs_dbg_67_res=pyjamas.DOM.createElement(String('div'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_67_err;
    }
}return $pyjs_dbg_67_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createDiv'].__name__ = 'createDiv';

	pyjamas['DOM']['createDiv'].__bind_type__ = 0;
	pyjamas['DOM']['createDiv'].__args__ = [null,null];
	$pyjs.track.lineno=201;
	pyjamas['DOM']['createElement'] = function(tag) {


    return $doc.createElement(tag);
    
	};
	pyjamas['DOM']['createElement'].__name__ = 'createElement';

	pyjamas['DOM']['createElement'].__bind_type__ = 0;
	pyjamas['DOM']['createElement'].__args__ = [null,null,['tag']];
	$pyjs.track.lineno=205;
	pyjamas['DOM']['createFieldSet'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:205};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=205;
		$pyjs.track.lineno=206;
		$pyjs.track.lineno=206;
		var $pyjs__ret = (function(){var $pyjs_dbg_68_retry = 0;
try{var $pyjs_dbg_68_res=pyjamas['DOM']['createElement'](String('fieldset'));}catch($pyjs_dbg_68_err){
    if ($pyjs_dbg_68_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 206 :\n" + $pyjs_dbg_68_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_68_retry) {
        case 1:
            $pyjs_dbg_68_res=pyjamas['DOM']['createElement'](String('fieldset'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_68_err;
    }
}return $pyjs_dbg_68_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createFieldSet'].__name__ = 'createFieldSet';

	pyjamas['DOM']['createFieldSet'].__bind_type__ = 0;
	pyjamas['DOM']['createFieldSet'].__args__ = [null,null];
	$pyjs.track.lineno=209;
	pyjamas['DOM']['createForm'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:209};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=209;
		$pyjs.track.lineno=210;
		$pyjs.track.lineno=210;
		var $pyjs__ret = (function(){var $pyjs_dbg_69_retry = 0;
try{var $pyjs_dbg_69_res=pyjamas['DOM']['createElement'](String('form'));}catch($pyjs_dbg_69_err){
    if ($pyjs_dbg_69_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 210 :\n" + $pyjs_dbg_69_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_69_retry) {
        case 1:
            $pyjs_dbg_69_res=pyjamas['DOM']['createElement'](String('form'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_69_err;
    }
}return $pyjs_dbg_69_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createForm'].__name__ = 'createForm';

	pyjamas['DOM']['createForm'].__bind_type__ = 0;
	pyjamas['DOM']['createForm'].__args__ = [null,null];
	$pyjs.track.lineno=213;
	pyjamas['DOM']['createIFrame'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:213};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=213;
		$pyjs.track.lineno=214;
		$pyjs.track.lineno=214;
		var $pyjs__ret = (function(){var $pyjs_dbg_70_retry = 0;
try{var $pyjs_dbg_70_res=pyjamas['DOM']['createElement'](String('iframe'));}catch($pyjs_dbg_70_err){
    if ($pyjs_dbg_70_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 214 :\n" + $pyjs_dbg_70_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_70_retry) {
        case 1:
            $pyjs_dbg_70_res=pyjamas['DOM']['createElement'](String('iframe'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_70_err;
    }
}return $pyjs_dbg_70_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createIFrame'].__name__ = 'createIFrame';

	pyjamas['DOM']['createIFrame'].__bind_type__ = 0;
	pyjamas['DOM']['createIFrame'].__args__ = [null,null];
	$pyjs.track.lineno=217;
	pyjamas['DOM']['createImg'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:217};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=217;
		$pyjs.track.lineno=218;
		$pyjs.track.lineno=218;
		var $pyjs__ret = (function(){var $pyjs_dbg_71_retry = 0;
try{var $pyjs_dbg_71_res=pyjamas['DOM']['createElement'](String('img'));}catch($pyjs_dbg_71_err){
    if ($pyjs_dbg_71_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 218 :\n" + $pyjs_dbg_71_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_71_retry) {
        case 1:
            $pyjs_dbg_71_res=pyjamas['DOM']['createElement'](String('img'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_71_err;
    }
}return $pyjs_dbg_71_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createImg'].__name__ = 'createImg';

	pyjamas['DOM']['createImg'].__bind_type__ = 0;
	pyjamas['DOM']['createImg'].__args__ = [null,null];
	$pyjs.track.lineno=221;
	pyjamas['DOM']['createInputCheck'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:221};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=221;
		$pyjs.track.lineno=222;
		$pyjs.track.lineno=222;
		var $pyjs__ret = (function(){var $pyjs_dbg_72_retry = 0;
try{var $pyjs_dbg_72_res=pyjamas.DOM.createInputElement(String('checkbox'));}catch($pyjs_dbg_72_err){
    if ($pyjs_dbg_72_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 222 :\n" + $pyjs_dbg_72_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_72_retry) {
        case 1:
            $pyjs_dbg_72_res=pyjamas.DOM.createInputElement(String('checkbox'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_72_err;
    }
}return $pyjs_dbg_72_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createInputCheck'].__name__ = 'createInputCheck';

	pyjamas['DOM']['createInputCheck'].__bind_type__ = 0;
	pyjamas['DOM']['createInputCheck'].__args__ = [null,null];
	$pyjs.track.lineno=225;
	pyjamas['DOM']['createInputElement'] = function(elementType) {


    var e = $doc.createElement("INPUT");
    e.type = elementType;
    return e;
    
	};
	pyjamas['DOM']['createInputElement'].__name__ = 'createInputElement';

	pyjamas['DOM']['createInputElement'].__bind_type__ = 0;
	pyjamas['DOM']['createInputElement'].__args__ = [null,null,['elementType']];
	$pyjs.track.lineno=231;
	pyjamas['DOM']['createInputPassword'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:231};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=231;
		$pyjs.track.lineno=232;
		$pyjs.track.lineno=232;
		var $pyjs__ret = (function(){var $pyjs_dbg_73_retry = 0;
try{var $pyjs_dbg_73_res=pyjamas['DOM']['createInputElement'](String('password'));}catch($pyjs_dbg_73_err){
    if ($pyjs_dbg_73_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 232 :\n" + $pyjs_dbg_73_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_73_retry) {
        case 1:
            $pyjs_dbg_73_res=pyjamas['DOM']['createInputElement'](String('password'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_73_err;
    }
}return $pyjs_dbg_73_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createInputPassword'].__name__ = 'createInputPassword';

	pyjamas['DOM']['createInputPassword'].__bind_type__ = 0;
	pyjamas['DOM']['createInputPassword'].__args__ = [null,null];
	$pyjs.track.lineno=235;
	pyjamas['DOM']['createInputRadio'] = function(group) {


    return $doc.createElement("<INPUT type='RADIO' name='" + group + "'>");
    
	};
	pyjamas['DOM']['createInputRadio'].__name__ = 'createInputRadio';

	pyjamas['DOM']['createInputRadio'].__bind_type__ = 0;
	pyjamas['DOM']['createInputRadio'].__args__ = [null,null,['group']];
	$pyjs.track.lineno=241;
	pyjamas['DOM']['createInputText'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:241};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=241;
		$pyjs.track.lineno=242;
		$pyjs.track.lineno=242;
		var $pyjs__ret = (function(){var $pyjs_dbg_74_retry = 0;
try{var $pyjs_dbg_74_res=pyjamas['DOM']['createInputElement'](String('text'));}catch($pyjs_dbg_74_err){
    if ($pyjs_dbg_74_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 242 :\n" + $pyjs_dbg_74_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_74_retry) {
        case 1:
            $pyjs_dbg_74_res=pyjamas['DOM']['createInputElement'](String('text'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_74_err;
    }
}return $pyjs_dbg_74_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createInputText'].__name__ = 'createInputText';

	pyjamas['DOM']['createInputText'].__bind_type__ = 0;
	pyjamas['DOM']['createInputText'].__args__ = [null,null];
	$pyjs.track.lineno=245;
	pyjamas['DOM']['createLabel'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:245};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=245;
		$pyjs.track.lineno=246;
		$pyjs.track.lineno=246;
		var $pyjs__ret = (function(){var $pyjs_dbg_75_retry = 0;
try{var $pyjs_dbg_75_res=pyjamas['DOM']['createElement'](String('label'));}catch($pyjs_dbg_75_err){
    if ($pyjs_dbg_75_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 246 :\n" + $pyjs_dbg_75_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_75_retry) {
        case 1:
            $pyjs_dbg_75_res=pyjamas['DOM']['createElement'](String('label'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_75_err;
    }
}return $pyjs_dbg_75_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createLabel'].__name__ = 'createLabel';

	pyjamas['DOM']['createLabel'].__bind_type__ = 0;
	pyjamas['DOM']['createLabel'].__args__ = [null,null];
	$pyjs.track.lineno=249;
	pyjamas['DOM']['createLegend'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:249};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=249;
		$pyjs.track.lineno=250;
		$pyjs.track.lineno=250;
		var $pyjs__ret = (function(){var $pyjs_dbg_76_retry = 0;
try{var $pyjs_dbg_76_res=pyjamas['DOM']['createElement'](String('legend'));}catch($pyjs_dbg_76_err){
    if ($pyjs_dbg_76_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 250 :\n" + $pyjs_dbg_76_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_76_retry) {
        case 1:
            $pyjs_dbg_76_res=pyjamas['DOM']['createElement'](String('legend'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_76_err;
    }
}return $pyjs_dbg_76_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createLegend'].__name__ = 'createLegend';

	pyjamas['DOM']['createLegend'].__bind_type__ = 0;
	pyjamas['DOM']['createLegend'].__args__ = [null,null];
	$pyjs.track.lineno=253;
	pyjamas['DOM']['createOptions'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:253};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=253;
		$pyjs.track.lineno=254;
		$pyjs.track.lineno=254;
		var $pyjs__ret = (function(){var $pyjs_dbg_77_retry = 0;
try{var $pyjs_dbg_77_res=pyjamas['DOM']['createElement'](String('options'));}catch($pyjs_dbg_77_err){
    if ($pyjs_dbg_77_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 254 :\n" + $pyjs_dbg_77_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_77_retry) {
        case 1:
            $pyjs_dbg_77_res=pyjamas['DOM']['createElement'](String('options'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_77_err;
    }
}return $pyjs_dbg_77_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createOptions'].__name__ = 'createOptions';

	pyjamas['DOM']['createOptions'].__bind_type__ = 0;
	pyjamas['DOM']['createOptions'].__args__ = [null,null];
	$pyjs.track.lineno=257;
	pyjamas['DOM']['createSelect'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:257};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=257;
		$pyjs.track.lineno=258;
		$pyjs.track.lineno=258;
		var $pyjs__ret = (function(){var $pyjs_dbg_78_retry = 0;
try{var $pyjs_dbg_78_res=pyjamas['DOM']['createElement'](String('select'));}catch($pyjs_dbg_78_err){
    if ($pyjs_dbg_78_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 258 :\n" + $pyjs_dbg_78_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_78_retry) {
        case 1:
            $pyjs_dbg_78_res=pyjamas['DOM']['createElement'](String('select'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_78_err;
    }
}return $pyjs_dbg_78_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createSelect'].__name__ = 'createSelect';

	pyjamas['DOM']['createSelect'].__bind_type__ = 0;
	pyjamas['DOM']['createSelect'].__args__ = [null,null];
	$pyjs.track.lineno=261;
	pyjamas['DOM']['createSpan'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:261};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=261;
		$pyjs.track.lineno=262;
		$pyjs.track.lineno=262;
		var $pyjs__ret = (function(){var $pyjs_dbg_79_retry = 0;
try{var $pyjs_dbg_79_res=pyjamas['DOM']['createElement'](String('span'));}catch($pyjs_dbg_79_err){
    if ($pyjs_dbg_79_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 262 :\n" + $pyjs_dbg_79_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_79_retry) {
        case 1:
            $pyjs_dbg_79_res=pyjamas['DOM']['createElement'](String('span'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_79_err;
    }
}return $pyjs_dbg_79_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createSpan'].__name__ = 'createSpan';

	pyjamas['DOM']['createSpan'].__bind_type__ = 0;
	pyjamas['DOM']['createSpan'].__args__ = [null,null];
	$pyjs.track.lineno=265;
	pyjamas['DOM']['createTable'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:265};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=265;
		$pyjs.track.lineno=266;
		$pyjs.track.lineno=266;
		var $pyjs__ret = (function(){var $pyjs_dbg_80_retry = 0;
try{var $pyjs_dbg_80_res=pyjamas['DOM']['createElement'](String('table'));}catch($pyjs_dbg_80_err){
    if ($pyjs_dbg_80_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 266 :\n" + $pyjs_dbg_80_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_80_retry) {
        case 1:
            $pyjs_dbg_80_res=pyjamas['DOM']['createElement'](String('table'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_80_err;
    }
}return $pyjs_dbg_80_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createTable'].__name__ = 'createTable';

	pyjamas['DOM']['createTable'].__bind_type__ = 0;
	pyjamas['DOM']['createTable'].__args__ = [null,null];
	$pyjs.track.lineno=269;
	pyjamas['DOM']['createTBody'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:269};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=269;
		$pyjs.track.lineno=270;
		$pyjs.track.lineno=270;
		var $pyjs__ret = (function(){var $pyjs_dbg_81_retry = 0;
try{var $pyjs_dbg_81_res=pyjamas['DOM']['createElement'](String('tbody'));}catch($pyjs_dbg_81_err){
    if ($pyjs_dbg_81_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 270 :\n" + $pyjs_dbg_81_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_81_retry) {
        case 1:
            $pyjs_dbg_81_res=pyjamas['DOM']['createElement'](String('tbody'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_81_err;
    }
}return $pyjs_dbg_81_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createTBody'].__name__ = 'createTBody';

	pyjamas['DOM']['createTBody'].__bind_type__ = 0;
	pyjamas['DOM']['createTBody'].__args__ = [null,null];
	$pyjs.track.lineno=273;
	pyjamas['DOM']['createTD'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:273};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=273;
		$pyjs.track.lineno=274;
		$pyjs.track.lineno=274;
		var $pyjs__ret = (function(){var $pyjs_dbg_82_retry = 0;
try{var $pyjs_dbg_82_res=pyjamas['DOM']['createElement'](String('td'));}catch($pyjs_dbg_82_err){
    if ($pyjs_dbg_82_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 274 :\n" + $pyjs_dbg_82_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_82_retry) {
        case 1:
            $pyjs_dbg_82_res=pyjamas['DOM']['createElement'](String('td'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_82_err;
    }
}return $pyjs_dbg_82_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createTD'].__name__ = 'createTD';

	pyjamas['DOM']['createTD'].__bind_type__ = 0;
	pyjamas['DOM']['createTD'].__args__ = [null,null];
	$pyjs.track.lineno=277;
	pyjamas['DOM']['createTextArea'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:277};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=277;
		$pyjs.track.lineno=278;
		$pyjs.track.lineno=278;
		var $pyjs__ret = (function(){var $pyjs_dbg_83_retry = 0;
try{var $pyjs_dbg_83_res=pyjamas['DOM']['createElement'](String('textarea'));}catch($pyjs_dbg_83_err){
    if ($pyjs_dbg_83_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 278 :\n" + $pyjs_dbg_83_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_83_retry) {
        case 1:
            $pyjs_dbg_83_res=pyjamas['DOM']['createElement'](String('textarea'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_83_err;
    }
}return $pyjs_dbg_83_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createTextArea'].__name__ = 'createTextArea';

	pyjamas['DOM']['createTextArea'].__bind_type__ = 0;
	pyjamas['DOM']['createTextArea'].__args__ = [null,null];
	$pyjs.track.lineno=281;
	pyjamas['DOM']['createTH'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:281};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=281;
		$pyjs.track.lineno=282;
		$pyjs.track.lineno=282;
		var $pyjs__ret = (function(){var $pyjs_dbg_84_retry = 0;
try{var $pyjs_dbg_84_res=pyjamas['DOM']['createElement'](String('th'));}catch($pyjs_dbg_84_err){
    if ($pyjs_dbg_84_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 282 :\n" + $pyjs_dbg_84_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_84_retry) {
        case 1:
            $pyjs_dbg_84_res=pyjamas['DOM']['createElement'](String('th'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_84_err;
    }
}return $pyjs_dbg_84_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createTH'].__name__ = 'createTH';

	pyjamas['DOM']['createTH'].__bind_type__ = 0;
	pyjamas['DOM']['createTH'].__args__ = [null,null];
	$pyjs.track.lineno=285;
	pyjamas['DOM']['createTR'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:285};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=285;
		$pyjs.track.lineno=286;
		$pyjs.track.lineno=286;
		var $pyjs__ret = (function(){var $pyjs_dbg_85_retry = 0;
try{var $pyjs_dbg_85_res=pyjamas['DOM']['createElement'](String('tr'));}catch($pyjs_dbg_85_err){
    if ($pyjs_dbg_85_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 286 :\n" + $pyjs_dbg_85_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_85_retry) {
        case 1:
            $pyjs_dbg_85_res=pyjamas['DOM']['createElement'](String('tr'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_85_err;
    }
}return $pyjs_dbg_85_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createTR'].__name__ = 'createTR';

	pyjamas['DOM']['createTR'].__bind_type__ = 0;
	pyjamas['DOM']['createTR'].__args__ = [null,null];
	$pyjs.track.lineno=289;
	pyjamas['DOM']['eventStopPropagation'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:289};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=289;
		$pyjs.track.lineno=240;
		(function(){var $pyjs_dbg_86_retry = 0;
try{var $pyjs_dbg_86_res=pyjamas.DOM.eventCancelBubble(evt);}catch($pyjs_dbg_86_err){
    if ($pyjs_dbg_86_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 240 :\n" + $pyjs_dbg_86_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_86_retry) {
        case 1:
            $pyjs_dbg_86_res=pyjamas.DOM.eventCancelBubble(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_86_err;
    }
}return $pyjs_dbg_86_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['eventStopPropagation'].__name__ = 'eventStopPropagation';

	pyjamas['DOM']['eventStopPropagation'].__bind_type__ = 0;
	pyjamas['DOM']['eventStopPropagation'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=293;
	pyjamas['DOM']['eventCancelBubble'] = function(evt, cancel) {

		$pyjs.track={module:'pyjamas.DOM',lineno:293};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=293;
		$pyjs.track.lineno=294;
		evt.cancelBubble = cancel;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['eventCancelBubble'].__name__ = 'eventCancelBubble';

	pyjamas['DOM']['eventCancelBubble'].__bind_type__ = 0;
	pyjamas['DOM']['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	$pyjs.track.lineno=297;
	pyjamas['DOM']['eventGetAltKey'] = function(evt) {
		var $attr9,$attr10;
		$pyjs.track={module:'pyjamas.DOM',lineno:297};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=297;
		$pyjs.track.lineno=298;
		$pyjs.track.lineno=298;
		var $pyjs__ret = ((($attr9=evt['altKey']) !== null & ($attr10=evt).__is_instance__) && typeof $attr9 == 'function'?
					pyjslib['getattr']($attr10, 'altKey'):
					evt['altKey']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetAltKey'].__name__ = 'eventGetAltKey';

	pyjamas['DOM']['eventGetAltKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetAltKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=301;
	pyjamas['DOM']['eventGetButton'] = function(evt) {
		var $attr11,$attr12;
		$pyjs.track={module:'pyjamas.DOM',lineno:301};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=301;
		$pyjs.track.lineno=302;
		$pyjs.track.lineno=302;
		var $pyjs__ret = ((($attr11=evt['button']) !== null & ($attr12=evt).__is_instance__) && typeof $attr11 == 'function'?
					pyjslib['getattr']($attr12, 'button'):
					evt['button']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetButton'].__name__ = 'eventGetButton';

	pyjamas['DOM']['eventGetButton'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetButton'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=305;
	pyjamas['DOM']['eventGetClientX'] = function(evt) {
		var $attr14,$attr13;
		$pyjs.track={module:'pyjamas.DOM',lineno:305};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=305;
		$pyjs.track.lineno=306;
		$pyjs.track.lineno=306;
		var $pyjs__ret = ((($attr13=evt['clientX']) !== null & ($attr14=evt).__is_instance__) && typeof $attr13 == 'function'?
					pyjslib['getattr']($attr14, 'clientX'):
					evt['clientX']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetClientX'].__name__ = 'eventGetClientX';

	pyjamas['DOM']['eventGetClientX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetClientX'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=309;
	pyjamas['DOM']['eventGetClientY'] = function(evt) {
		var $attr15,$attr16;
		$pyjs.track={module:'pyjamas.DOM',lineno:309};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=309;
		$pyjs.track.lineno=310;
		$pyjs.track.lineno=310;
		var $pyjs__ret = ((($attr15=evt['clientY']) !== null & ($attr16=evt).__is_instance__) && typeof $attr15 == 'function'?
					pyjslib['getattr']($attr16, 'clientY'):
					evt['clientY']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetClientY'].__name__ = 'eventGetClientY';

	pyjamas['DOM']['eventGetClientY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetClientY'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=313;
	pyjamas['DOM']['eventGetCtrlKey'] = function(evt) {
		var $attr17,$attr18;
		$pyjs.track={module:'pyjamas.DOM',lineno:313};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=313;
		$pyjs.track.lineno=314;
		$pyjs.track.lineno=314;
		var $pyjs__ret = ((($attr17=evt['ctrlKey']) !== null & ($attr18=evt).__is_instance__) && typeof $attr17 == 'function'?
					pyjslib['getattr']($attr18, 'ctrlKey'):
					evt['ctrlKey']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	pyjamas['DOM']['eventGetCtrlKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=317;
	pyjamas['DOM']['eventGetFromElement'] = function(evt) {


    return evt.fromElement ? evt.fromElement : null;
    
	};
	pyjamas['DOM']['eventGetFromElement'].__name__ = 'eventGetFromElement';

	pyjamas['DOM']['eventGetFromElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetFromElement'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=324;
	pyjamas['DOM']['eventGetKeyCode'] = function(evt) {


    return evt.which ? evt.which : (evt.keyCode ? evt.keyCode : 0);
    
	};
	pyjamas['DOM']['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	pyjamas['DOM']['eventGetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=328;
	pyjamas['DOM']['eventGetRepeat'] = function(evt) {
		var $attr20,$attr19;
		$pyjs.track={module:'pyjamas.DOM',lineno:328};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=328;
		$pyjs.track.lineno=329;
		$pyjs.track.lineno=329;
		var $pyjs__ret = ((($attr19=evt['repeat']) !== null & ($attr20=evt).__is_instance__) && typeof $attr19 == 'function'?
					pyjslib['getattr']($attr20, 'repeat'):
					evt['repeat']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetRepeat'].__name__ = 'eventGetRepeat';

	pyjamas['DOM']['eventGetRepeat'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetRepeat'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=332;
	pyjamas['DOM']['eventGetScreenX'] = function(evt) {
		var $attr21,$attr22;
		$pyjs.track={module:'pyjamas.DOM',lineno:332};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=332;
		$pyjs.track.lineno=333;
		$pyjs.track.lineno=333;
		var $pyjs__ret = ((($attr21=evt['screenX']) !== null & ($attr22=evt).__is_instance__) && typeof $attr21 == 'function'?
					pyjslib['getattr']($attr22, 'screenX'):
					evt['screenX']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetScreenX'].__name__ = 'eventGetScreenX';

	pyjamas['DOM']['eventGetScreenX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenX'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=336;
	pyjamas['DOM']['eventGetScreenY'] = function(evt) {
		var $attr24,$attr23;
		$pyjs.track={module:'pyjamas.DOM',lineno:336};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=336;
		$pyjs.track.lineno=337;
		$pyjs.track.lineno=337;
		var $pyjs__ret = ((($attr23=evt['screenY']) !== null & ($attr24=evt).__is_instance__) && typeof $attr23 == 'function'?
					pyjslib['getattr']($attr24, 'screenY'):
					evt['screenY']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetScreenY'].__name__ = 'eventGetScreenY';

	pyjamas['DOM']['eventGetScreenY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenY'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=340;
	pyjamas['DOM']['eventGetShiftKey'] = function(evt) {
		var $attr25,$attr26;
		$pyjs.track={module:'pyjamas.DOM',lineno:340};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=340;
		$pyjs.track.lineno=341;
		$pyjs.track.lineno=341;
		var $pyjs__ret = ((($attr25=evt['shiftKey']) !== null & ($attr26=evt).__is_instance__) && typeof $attr25 == 'function'?
					pyjslib['getattr']($attr26, 'shiftKey'):
					evt['shiftKey']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	pyjamas['DOM']['eventGetShiftKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=344;
	pyjamas['DOM']['eventGetCurrentTarget'] = function(event) {
		var $attr28,$attr27;
		$pyjs.track={module:'pyjamas.DOM',lineno:344};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=344;
		$pyjs.track.lineno=53;
		$pyjs.track.lineno=53;
		var $pyjs__ret = ((($attr27=event['currentEventTarget']) !== null & ($attr28=event).__is_instance__) && typeof $attr27 == 'function'?
					pyjslib['getattr']($attr28, 'currentEventTarget'):
					event['currentEventTarget']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	pyjamas['DOM']['eventGetCurrentTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=348;
	pyjamas['DOM']['eventGetTarget'] = function(evt) {


    var elem = evt.srcElement;
    return elem ? elem : null;
    
	};
	pyjamas['DOM']['eventGetTarget'].__name__ = 'eventGetTarget';

	pyjamas['DOM']['eventGetTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTarget'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=352;
	pyjamas['DOM']['eventGetToElement'] = function(evt) {


    return evt.toElement ? evt.toElement : null;
    
	};
	pyjamas['DOM']['eventGetToElement'].__name__ = 'eventGetToElement';

	pyjamas['DOM']['eventGetToElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetToElement'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=361;
	pyjamas['DOM']['eventGetType'] = function(event) {
		var $attr29,$attr30;
		$pyjs.track={module:'pyjamas.DOM',lineno:361};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=361;
		$pyjs.track.lineno=362;
		$pyjs.track.lineno=362;
		var $pyjs__ret = ((($attr29=event['type']) !== null & ($attr30=event).__is_instance__) && typeof $attr29 == 'function'?
					pyjslib['getattr']($attr30, 'type'):
					event['type']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetType'].__name__ = 'eventGetType';

	pyjamas['DOM']['eventGetType'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetType'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=364;
	pyjamas['DOM']['eventmap'] = pyjslib['dict']([[String('blur'), 4096], [String('change'), 1024], [String('click'), 1], [String('dblclick'), 2], [String('focus'), 2048], [String('keydown'), 128], [String('keypress'), 256], [String('keyup'), 512], [String('load'), 32768], [String('losecapture'), 8192], [String('mousedown'), 4], [String('mousemove'), 64], [String('mouseout'), 32], [String('mouseover'), 16], [String('mouseup'), 8], [String('scroll'), 16384], [String('error'), 65536], [String('contextmenu'), 131072]]);
	$pyjs.track.lineno=386;
	pyjamas['DOM']['eventGetTypeInt'] = function(event) {


    switch (event.type) {
      case "blur": return 0x01000;
      case "change": return 0x00400;
      case "click": return 0x00001;
      case "dblclick": return 0x00002;
      case "focus": return 0x00800;
      case "keydown": return 0x00080;
      case "keypress": return 0x00100;
      case "keyup": return 0x00200;
      case "load": return 0x08000;
      case "losecapture": return 0x02000;
      case "mousedown": return 0x00004;
      case "mousemove": return 0x00040;
      case "mouseout": return 0x00020;
      case "mouseover": return 0x00010;
      case "mouseup": return 0x00008;
      case "scroll": return 0x04000;
      case "error": return 0x10000;
      case "contextmenu": return 0x20000;
    }
    
	};
	pyjamas['DOM']['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	pyjamas['DOM']['eventGetTypeInt'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTypeInt'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=390;
	pyjamas['DOM']['eventGetTypeString'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:390};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=390;
		$pyjs.track.lineno=391;
		$pyjs.track.lineno=391;
		var $pyjs__ret = (function(){var $pyjs_dbg_87_retry = 0;
try{var $pyjs_dbg_87_res=pyjamas['DOM']['eventGetType'](event);}catch($pyjs_dbg_87_err){
    if ($pyjs_dbg_87_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 391 :\n" + $pyjs_dbg_87_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_87_retry) {
        case 1:
            $pyjs_dbg_87_res=pyjamas['DOM']['eventGetType'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_87_err;
    }
}return $pyjs_dbg_87_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetTypeString'].__name__ = 'eventGetTypeString';

	pyjamas['DOM']['eventGetTypeString'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTypeString'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=394;
	pyjamas['DOM']['eventPreventDefault'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:394};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=394;
		$pyjs.track.lineno=69;

    evt.returnValue = false;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['eventPreventDefault'].__name__ = 'eventPreventDefault';

	pyjamas['DOM']['eventPreventDefault'].__bind_type__ = 0;
	pyjamas['DOM']['eventPreventDefault'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=398;
	pyjamas['DOM']['eventSetKeyCode'] = function(evt, key) {

		$pyjs.track={module:'pyjamas.DOM',lineno:398};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=398;
		$pyjs.track.lineno=399;
		evt.keyCode = key;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	pyjamas['DOM']['eventSetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	$pyjs.track.lineno=402;
	pyjamas['DOM']['eventToString'] = function(evt) {


    if (evt.toString) return evt.toString();
    return "[object Event]";
    
	};
	pyjamas['DOM']['eventToString'].__name__ = 'eventToString';

	pyjamas['DOM']['eventToString'].__bind_type__ = 0;
	pyjamas['DOM']['eventToString'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=406;
	pyjamas['DOM']['iframeGetSrc'] = function(elem) {
		var $attr32,$attr31;
		$pyjs.track={module:'pyjamas.DOM',lineno:406};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=406;
		$pyjs.track.lineno=407;
		$pyjs.track.lineno=407;
		var $pyjs__ret = ((($attr31=elem['src']) !== null & ($attr32=elem).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'src'):
					elem['src']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['iframeGetSrc'].__name__ = 'iframeGetSrc';

	pyjamas['DOM']['iframeGetSrc'].__bind_type__ = 0;
	pyjamas['DOM']['iframeGetSrc'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=410;
	pyjamas['DOM']['getAbsoluteLeft'] = function(elem) {


    // getBoundingClientRect() throws a JS exception if the elem is not attached
    // to the document, so we wrap it in a try/catch block
    var zoomMultiple = $doc.body.parentElement.offsetWidth / 
                       $doc.body.offsetWidth;
    try {
        return Math.floor((elem.getBoundingClientRect().left / zoomMultiple) +
                            $doc.body.parentElement.scrollLeft );
    } catch (e) {
        return 0;
    }
    
	};
	pyjamas['DOM']['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	pyjamas['DOM']['getAbsoluteLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=424;
	pyjamas['DOM']['getAbsoluteTop'] = function(elem) {


    // getBoundingClientRect() throws a JS exception if the elem is not attached
    // to the document, so we wrap it in a try/catch block
    var zoomMultiple = $doc.body.parentElement.offsetWidth / 
                       $doc.body.offsetWidth;
    try {
        var scrollTop = $doc.parent ? $doc.parent.body.scrollTop : 0;
        scrollTop += $doc.body.scrollTop;
        return Math.floor((elem.getBoundingClientRect().top / zoomMultiple) +
                            scrollTop);
    } catch (e) {
        return 0;
    }
    
	};
	pyjamas['DOM']['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	pyjamas['DOM']['getAbsoluteTop'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteTop'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=438;
	pyjamas['DOM']['getAttribute'] = function(elem, attr) {


    var ret = elem[attr];
    return (ret == null) ? null : String(ret);
    
	};
	pyjamas['DOM']['getAttribute'].__name__ = 'getAttribute';

	pyjamas['DOM']['getAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=443;
	pyjamas['DOM']['getElemAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:443};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=443;
		$pyjs.track.lineno=195;
		$pyjs.track.lineno=195;
		var $pyjs__ret = (function(){var $pyjs_dbg_88_retry = 0;
try{var $pyjs_dbg_88_res=elem['getAttribute'](attr);}catch($pyjs_dbg_88_err){
    if ($pyjs_dbg_88_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 195 :\n" + $pyjs_dbg_88_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_88_retry) {
        case 1:
            $pyjs_dbg_88_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_88_err;
    }
}return $pyjs_dbg_88_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getElemAttribute'].__name__ = 'getElemAttribute';

	pyjamas['DOM']['getElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=450;
	pyjamas['DOM']['getBooleanAttribute'] = function(elem, attr) {


    return !!elem[attr];
    
	};
	pyjamas['DOM']['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	pyjamas['DOM']['getBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=455;
	pyjamas['DOM']['getBooleanElemAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:455};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=455;
		$pyjs.track.lineno=456;
		if ((function(){var $pyjs_dbg_90_retry = 0;
try{var $pyjs_dbg_90_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_89_retry = 0;
try{var $pyjs_dbg_89_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_89_err){
    if ($pyjs_dbg_89_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 456 :\n" + $pyjs_dbg_89_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_89_retry) {
        case 1:
            $pyjs_dbg_89_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_89_err;
    }
}return $pyjs_dbg_89_res})()));}catch($pyjs_dbg_90_err){
    if ($pyjs_dbg_90_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 456 :\n" + $pyjs_dbg_90_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_90_retry) {
        case 1:
            $pyjs_dbg_90_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_89_retry = 0;
try{var $pyjs_dbg_89_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_89_err){
    if ($pyjs_dbg_89_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 456 :\n" + $pyjs_dbg_89_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_89_retry) {
        case 1:
            $pyjs_dbg_89_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_89_err;
    }
}return $pyjs_dbg_89_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_90_err;
    }
}return $pyjs_dbg_90_res})()) {
			$pyjs.track.lineno=457;
			$pyjs.track.lineno=457;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=458;
		$pyjs.track.lineno=458;
		var $pyjs__ret = (function(){var $pyjs_dbg_92_retry = 0;
try{var $pyjs_dbg_92_res=pyjslib['bool']((function(){var $pyjs_dbg_91_retry = 0;
try{var $pyjs_dbg_91_res=elem['getAttribute'](attr);}catch($pyjs_dbg_91_err){
    if ($pyjs_dbg_91_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 458 :\n" + $pyjs_dbg_91_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_91_retry) {
        case 1:
            $pyjs_dbg_91_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_91_err;
    }
}return $pyjs_dbg_91_res})());}catch($pyjs_dbg_92_err){
    if ($pyjs_dbg_92_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 458 :\n" + $pyjs_dbg_92_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_92_retry) {
        case 1:
            $pyjs_dbg_92_res=pyjslib['bool']((function(){var $pyjs_dbg_91_retry = 0;
try{var $pyjs_dbg_91_res=elem['getAttribute'](attr);}catch($pyjs_dbg_91_err){
    if ($pyjs_dbg_91_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 458 :\n" + $pyjs_dbg_91_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_91_retry) {
        case 1:
            $pyjs_dbg_91_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_91_err;
    }
}return $pyjs_dbg_91_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_92_err;
    }
}return $pyjs_dbg_92_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	pyjamas['DOM']['getBooleanElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=461;
	pyjamas['DOM']['getCaptureElement'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:461};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=461;
		$pyjs.track.lineno=203;
		$pyjs.track.lineno=203;
		var $pyjs__ret = pyjamas['DOM']['sCaptureElem'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getCaptureElement'].__name__ = 'getCaptureElement';

	pyjamas['DOM']['getCaptureElement'].__bind_type__ = 0;
	pyjamas['DOM']['getCaptureElement'].__args__ = [null,null];
	$pyjs.track.lineno=465;
	pyjamas['DOM']['getChild'] = function(elem, index) {


    var child = elem.children[index];
    return child ? child : null;
    
	};
	pyjamas['DOM']['getChild'].__name__ = 'getChild';

	pyjamas['DOM']['getChild'].__bind_type__ = 0;
	pyjamas['DOM']['getChild'].__args__ = [null,null,['elem'],['index']];
	$pyjs.track.lineno=481;
	pyjamas['DOM']['getChildCount'] = function(elem) {


    return elem.children.length;
    
	};
	pyjamas['DOM']['getChildCount'].__name__ = 'getChildCount';

	pyjamas['DOM']['getChildCount'].__bind_type__ = 0;
	pyjamas['DOM']['getChildCount'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=495;
	pyjamas['DOM']['getChildIndex'] = function(parent, child) {


    var count = parent.children.length;
    for (var i = 0; i < count; ++i) {
        if (child.uniqueID == parent.children[i].uniqueID)
            return i;
    }
    return -1;
    
	};
	pyjamas['DOM']['getChildIndex'].__name__ = 'getChildIndex';

	pyjamas['DOM']['getChildIndex'].__bind_type__ = 0;
	pyjamas['DOM']['getChildIndex'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=513;
	pyjamas['DOM']['getElementById'] = function(id) {


    var elem = $doc.getElementById(id);
    return elem ? elem : null;
    
	};
	pyjamas['DOM']['getElementById'].__name__ = 'getElementById';

	pyjamas['DOM']['getElementById'].__bind_type__ = 0;
	pyjamas['DOM']['getElementById'].__args__ = [null,null,['id']];
	$pyjs.track.lineno=520;
	pyjamas['DOM']['getEventListener'] = function(element) {


    return element.__listener;
    
	};
	pyjamas['DOM']['getEventListener'].__name__ = 'getEventListener';

	pyjamas['DOM']['getEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['getEventListener'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=526;
	pyjamas['DOM']['eventbitsmap'] = pyjslib['dict']([]);
	$pyjs.track.lineno=529;
	pyjamas['DOM']['getEventsSunk'] = function(element) {

		$pyjs.track={module:'pyjamas.DOM',lineno:529};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=529;
		$pyjs.track.lineno=280;
		$pyjs.track.lineno=281;
		$pyjs.track.lineno=281;
		var $pyjs__ret = element.__eventBits ? element.__eventBits : 0;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getEventsSunk'].__name__ = 'getEventsSunk';

	pyjamas['DOM']['getEventsSunk'].__bind_type__ = 0;
	pyjamas['DOM']['getEventsSunk'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=537;
	pyjamas['DOM']['getFirstChild'] = function(elem) {


    var child = elem.firstChild;
    return child ? child : null;
    
	};
	pyjamas['DOM']['getFirstChild'].__name__ = 'getFirstChild';

	pyjamas['DOM']['getFirstChild'].__bind_type__ = 0;
	pyjamas['DOM']['getFirstChild'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=544;
	pyjamas['DOM']['getInnerHTML'] = function(element) {


    var ret = element.innerHTML;
    return (ret == null) ? null : ret;
    
	};
	pyjamas['DOM']['getInnerHTML'].__name__ = 'getInnerHTML';

	pyjamas['DOM']['getInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerHTML'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=551;
	pyjamas['DOM']['getInnerText'] = function(elem) {


    var ret = elem.innerText;
    return (ret == null) ? null : ret;
    
	};
	pyjamas['DOM']['getInnerText'].__name__ = 'getInnerText';

	pyjamas['DOM']['getInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerText'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=565;
	pyjamas['DOM']['getIntAttribute'] = function(elem, attr) {


    var i = parseInt(elem[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	pyjamas['DOM']['getIntAttribute'].__name__ = 'getIntAttribute';

	pyjamas['DOM']['getIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=570;
	pyjamas['DOM']['getIntElemAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:570};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=570;
		$pyjs.track.lineno=571;
		if ((function(){var $pyjs_dbg_94_retry = 0;
try{var $pyjs_dbg_94_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_93_retry = 0;
try{var $pyjs_dbg_93_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_93_err){
    if ($pyjs_dbg_93_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 571 :\n" + $pyjs_dbg_93_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_93_retry) {
        case 1:
            $pyjs_dbg_93_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_93_err;
    }
}return $pyjs_dbg_93_res})()));}catch($pyjs_dbg_94_err){
    if ($pyjs_dbg_94_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 571 :\n" + $pyjs_dbg_94_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_94_retry) {
        case 1:
            $pyjs_dbg_94_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_93_retry = 0;
try{var $pyjs_dbg_93_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_93_err){
    if ($pyjs_dbg_93_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 571 :\n" + $pyjs_dbg_93_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_93_retry) {
        case 1:
            $pyjs_dbg_93_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_93_err;
    }
}return $pyjs_dbg_93_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_94_err;
    }
}return $pyjs_dbg_94_res})()) {
			$pyjs.track.lineno=572;
			$pyjs.track.lineno=572;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=573;
		$pyjs.track.lineno=573;
		var $pyjs__ret = (function(){var $pyjs_dbg_96_retry = 0;
try{var $pyjs_dbg_96_res=pyjslib['float_int']((function(){var $pyjs_dbg_95_retry = 0;
try{var $pyjs_dbg_95_res=elem['getAttribute'](attr);}catch($pyjs_dbg_95_err){
    if ($pyjs_dbg_95_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 573 :\n" + $pyjs_dbg_95_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_95_retry) {
        case 1:
            $pyjs_dbg_95_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_95_err;
    }
}return $pyjs_dbg_95_res})());}catch($pyjs_dbg_96_err){
    if ($pyjs_dbg_96_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 573 :\n" + $pyjs_dbg_96_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_96_retry) {
        case 1:
            $pyjs_dbg_96_res=pyjslib['float_int']((function(){var $pyjs_dbg_95_retry = 0;
try{var $pyjs_dbg_95_res=elem['getAttribute'](attr);}catch($pyjs_dbg_95_err){
    if ($pyjs_dbg_95_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 573 :\n" + $pyjs_dbg_95_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_95_retry) {
        case 1:
            $pyjs_dbg_95_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_95_err;
    }
}return $pyjs_dbg_95_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_96_err;
    }
}return $pyjs_dbg_96_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	pyjamas['DOM']['getIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=576;
	pyjamas['DOM']['getIntStyleAttribute'] = function(elem, attr) {


    var i = parseInt(elem.style[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	pyjamas['DOM']['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	pyjamas['DOM']['getIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=580;
	pyjamas['DOM']['getNextSibling'] = function(elem) {


    var sib = elem.nextSibling;
    return sib ? sib : null;
    
	};
	pyjamas['DOM']['getNextSibling'].__name__ = 'getNextSibling';

	pyjamas['DOM']['getNextSibling'].__bind_type__ = 0;
	pyjamas['DOM']['getNextSibling'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=587;
	pyjamas['DOM']['getNodeType'] = function(elem) {
		var $attr33,$attr34;
		$pyjs.track={module:'pyjamas.DOM',lineno:587};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=587;
		$pyjs.track.lineno=588;
		$pyjs.track.lineno=588;
		var $pyjs__ret = ((($attr33=elem['nodeType']) !== null & ($attr34=elem).__is_instance__) && typeof $attr33 == 'function'?
					pyjslib['getattr']($attr34, 'nodeType'):
					elem['nodeType']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getNodeType'].__name__ = 'getNodeType';

	pyjamas['DOM']['getNodeType'].__bind_type__ = 0;
	pyjamas['DOM']['getNodeType'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=591;
	pyjamas['DOM']['getParent'] = function(elem) {


    var parent = elem.parentElement;
    return parent ? parent : null;
    
	};
	pyjamas['DOM']['getParent'].__name__ = 'getParent';

	pyjamas['DOM']['getParent'].__bind_type__ = 0;
	pyjamas['DOM']['getParent'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=600;
	pyjamas['DOM']['getStyleAttribute'] = function(elem, attr) {


    var ret = elem.style[attr];
    return (ret == null) ? null : ret;
    
	};
	pyjamas['DOM']['getStyleAttribute'].__name__ = 'getStyleAttribute';

	pyjamas['DOM']['getStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=609;
	pyjamas['DOM']['insertChild'] = function(parent, child, index) {

		$pyjs.track={module:'pyjamas.DOM',lineno:609};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=609;
		$pyjs.track.lineno=169;

    if (index == parent.children.length)
        parent.appendChild(child);
    else
        parent.insertBefore(child, parent.children[index]);
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['insertChild'].__name__ = 'insertChild';

	pyjamas['DOM']['insertChild'].__bind_type__ = 0;
	pyjamas['DOM']['insertChild'].__args__ = [null,null,['parent'],['child'],['index']];
	$pyjs.track.lineno=628;
	pyjamas['DOM']['IterChildrenClass'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterChildrenClass');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ac20b681ce3e37358ce4695bb6b0235a';
		$pyjs.track.lineno=630;
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var $attr35,$attr36;
			$pyjs.track={module:pyjamas.DOM, lineno:630};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=630;
			$pyjs.track.lineno=631;
			self.parent = elem;
			$pyjs.track.lineno=632;
			self.child = ((($attr35=elem['firstChild']) !== null & ($attr36=elem).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'firstChild'):
						elem['firstChild']);
			$pyjs.track.lineno=633;
			self.lastChild = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=635;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr44,$attr37,$attr43,$attr40,$attr41,$attr42,$attr39,$attr38;
			$pyjs.track={module:pyjamas.DOM, lineno:635};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=635;
			$pyjs.track.lineno=636;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr37=self['child']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'child'):
						self['child'])))) {
				$pyjs.track.lineno=637;
				throw (pyjslib['StopIteration']);
			}
			$pyjs.track.lineno=638;
			self.lastChild = ((($attr39=self['child']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'child'):
						self['child']);
			$pyjs.track.lineno=639;
			self.child = (function(){var $pyjs_dbg_97_retry = 0;
try{var $pyjs_dbg_97_res=pyjamas['DOM']['getNextSibling'](((($attr41=self['child']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'child'):
						self['child']));}catch($pyjs_dbg_97_err){
    if ($pyjs_dbg_97_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 639 :\n" + $pyjs_dbg_97_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_97_retry) {
        case 1:
            $pyjs_dbg_97_res=pyjamas['DOM']['getNextSibling'](((($attr41=self['child']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'child'):
						self['child']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_97_err;
    }
}return $pyjs_dbg_97_res})();
			$pyjs.track.lineno=640;
			$pyjs.track.lineno=640;
			var $pyjs__ret = ((($attr43=self['lastChild']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'lastChild'):
						self['lastChild']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$pyjs.track.lineno=642;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr46,$attr45;
			$pyjs.track={module:pyjamas.DOM, lineno:642};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=642;
			$pyjs.track.lineno=643;
			(function(){var $pyjs_dbg_98_retry = 0;
try{var $pyjs_dbg_98_res=self['parent']['removeChild'](((($attr45=self['lastChild']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'lastChild'):
						self['lastChild']));}catch($pyjs_dbg_98_err){
    if ($pyjs_dbg_98_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 643 :\n" + $pyjs_dbg_98_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_98_retry) {
        case 1:
            $pyjs_dbg_98_res=self['parent']['removeChild'](((($attr45=self['lastChild']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'lastChild'):
						self['lastChild']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_98_err;
    }
}return $pyjs_dbg_98_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$pyjs.track.lineno=645;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:pyjamas.DOM, lineno:645};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=645;
			$pyjs.track.lineno=646;
			$pyjs.track.lineno=646;
			var $pyjs__ret = self;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	$pyjs.track.lineno=649;
	pyjamas['DOM']['iterChildren'] = function(elem) {


    var parent = elem;
    var child = elem.firstChild;
    var lastChild = null;
    return {
        'next': function() {
            if (child == null) {
                throw pyjslib.StopIteration;
            }
            lastChild = child;
            child = DOM.getNextSibling(child);
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	pyjamas['DOM']['iterChildren'].__name__ = 'iterChildren';

	pyjamas['DOM']['iterChildren'].__bind_type__ = 0;
	pyjamas['DOM']['iterChildren'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=657;
	pyjamas['DOM']['IterWalkChildren'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterWalkChildren');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'bc5e5c0dda264b4692f63f3512cced97';
		$pyjs.track.lineno=659;
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			$pyjs.track={module:pyjamas.DOM, lineno:659};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=659;
			$pyjs.track.lineno=660;
			self.parent = elem;
			$pyjs.track.lineno=661;
			self.child = (function(){var $pyjs_dbg_99_retry = 0;
try{var $pyjs_dbg_99_res=pyjamas['DOM']['getFirstChild'](elem);}catch($pyjs_dbg_99_err){
    if ($pyjs_dbg_99_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 661 :\n" + $pyjs_dbg_99_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_99_retry) {
        case 1:
            $pyjs_dbg_99_res=pyjamas['DOM']['getFirstChild'](elem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_99_err;
    }
}return $pyjs_dbg_99_res})();
			$pyjs.track.lineno=662;
			self.lastChild = null;
			$pyjs.track.lineno=663;
			self.stack = (function(){var $pyjs_dbg_100_retry = 0;
try{var $pyjs_dbg_100_res=pyjslib['list']([]);}catch($pyjs_dbg_100_err){
    if ($pyjs_dbg_100_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 663 :\n" + $pyjs_dbg_100_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_100_retry) {
        case 1:
            $pyjs_dbg_100_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_100_err;
    }
}return $pyjs_dbg_100_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=665;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr58,$attr55,$attr51,$attr50,$attr52,nextSibling,$attr54,firstChild,$attr56,$attr47,$attr60,$attr57,$attr62,$attr61,$attr53,$attr48,$attr49;
			$pyjs.track={module:pyjamas.DOM, lineno:665};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=665;
			$pyjs.track.lineno=666;
			if ((function(){var $pyjs_dbg_101_retry = 0;
try{var $pyjs_dbg_101_res=pyjslib['bool'](!pyjslib['bool'](((($attr47=self['child']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'child'):
						self['child'])));}catch($pyjs_dbg_101_err){
    if ($pyjs_dbg_101_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 666 :\n" + $pyjs_dbg_101_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_101_retry) {
        case 1:
            $pyjs_dbg_101_res=pyjslib['bool'](!pyjslib['bool'](((($attr47=self['child']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'child'):
						self['child'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_101_err;
    }
}return $pyjs_dbg_101_res})()) {
				$pyjs.track.lineno=667;
				throw (pyjslib['StopIteration']);
			}
			$pyjs.track.lineno=668;
			self.lastChild = ((($attr49=self['child']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'child'):
						self['child']);
			$pyjs.track.lineno=669;
			firstChild = (function(){var $pyjs_dbg_102_retry = 0;
try{var $pyjs_dbg_102_res=pyjamas['DOM']['getFirstChild'](((($attr51=self['child']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'child'):
						self['child']));}catch($pyjs_dbg_102_err){
    if ($pyjs_dbg_102_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 669 :\n" + $pyjs_dbg_102_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_102_retry) {
        case 1:
            $pyjs_dbg_102_res=pyjamas['DOM']['getFirstChild'](((($attr51=self['child']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'child'):
						self['child']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_102_err;
    }
}return $pyjs_dbg_102_res})();
			$pyjs.track.lineno=670;
			nextSibling = (function(){var $pyjs_dbg_103_retry = 0;
try{var $pyjs_dbg_103_res=pyjamas['DOM']['getNextSibling'](((($attr53=self['child']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'child'):
						self['child']));}catch($pyjs_dbg_103_err){
    if ($pyjs_dbg_103_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 670 :\n" + $pyjs_dbg_103_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_103_retry) {
        case 1:
            $pyjs_dbg_103_res=pyjamas['DOM']['getNextSibling'](((($attr53=self['child']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'child'):
						self['child']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_103_err;
    }
}return $pyjs_dbg_103_res})();
			$pyjs.track.lineno=671;
			if ((function(){var $pyjs_dbg_104_retry = 0;
try{var $pyjs_dbg_104_res=pyjslib['bool']((firstChild !== null));}catch($pyjs_dbg_104_err){
    if ($pyjs_dbg_104_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 671 :\n" + $pyjs_dbg_104_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_104_retry) {
        case 1:
            $pyjs_dbg_104_res=pyjslib['bool']((firstChild !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_104_err;
    }
}return $pyjs_dbg_104_res})()) {
				$pyjs.track.lineno=672;
				if ((function(){var $pyjs_dbg_105_retry = 0;
try{var $pyjs_dbg_105_res=pyjslib['bool']((nextSibling !== null));}catch($pyjs_dbg_105_err){
    if ($pyjs_dbg_105_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 672 :\n" + $pyjs_dbg_105_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_105_retry) {
        case 1:
            $pyjs_dbg_105_res=pyjslib['bool']((nextSibling !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_105_err;
    }
}return $pyjs_dbg_105_res})()) {
					$pyjs.track.lineno=673;
					(function(){var $pyjs_dbg_107_retry = 0;
try{var $pyjs_dbg_107_res=self['stack']['append']((function(){var $pyjs_dbg_106_retry = 0;
try{var $pyjs_dbg_106_res=pyjslib['tuple']([nextSibling, ((($attr55=self['parent']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
								pyjslib['getattr']($attr56, 'parent'):
								self['parent'])]);}catch($pyjs_dbg_106_err){
    if ($pyjs_dbg_106_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 673 :\n" + $pyjs_dbg_106_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_106_retry) {
        case 1:
            $pyjs_dbg_106_res=pyjslib['tuple']([nextSibling, ((($attr55=self['parent']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
								pyjslib['getattr']($attr56, 'parent'):
								self['parent'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_106_err;
    }
}return $pyjs_dbg_106_res})());}catch($pyjs_dbg_107_err){
    if ($pyjs_dbg_107_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 673 :\n" + $pyjs_dbg_107_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_107_retry) {
        case 1:
            $pyjs_dbg_107_res=self['stack']['append']((function(){var $pyjs_dbg_106_retry = 0;
try{var $pyjs_dbg_106_res=pyjslib['tuple']([nextSibling, ((($attr55=self['parent']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
								pyjslib['getattr']($attr56, 'parent'):
								self['parent'])]);}catch($pyjs_dbg_106_err){
    if ($pyjs_dbg_106_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 673 :\n" + $pyjs_dbg_106_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_106_retry) {
        case 1:
            $pyjs_dbg_106_res=pyjslib['tuple']([nextSibling, ((($attr55=self['parent']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
								pyjslib['getattr']($attr56, 'parent'):
								self['parent'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_106_err;
    }
}return $pyjs_dbg_106_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_107_err;
    }
}return $pyjs_dbg_107_res})();
				}
				$pyjs.track.lineno=674;
				self.parent = ((($attr57=self['child']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
							pyjslib['getattr']($attr58, 'child'):
							self['child']);
				$pyjs.track.lineno=675;
				self.child = firstChild;
			}
			else if ((function(){var $pyjs_dbg_108_retry = 0;
try{var $pyjs_dbg_108_res=pyjslib['bool']((nextSibling !== null));}catch($pyjs_dbg_108_err){
    if ($pyjs_dbg_108_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 676 :\n" + $pyjs_dbg_108_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_108_retry) {
        case 1:
            $pyjs_dbg_108_res=pyjslib['bool']((nextSibling !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_108_err;
    }
}return $pyjs_dbg_108_res})()) {
				$pyjs.track.lineno=677;
				self.child = nextSibling;
			}
			else if ((function(){var $pyjs_dbg_110_retry = 0;
try{var $pyjs_dbg_110_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_109_retry = 0;
try{var $pyjs_dbg_109_res=pyjslib['len'](((($attr59=self['stack']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'stack'):
						self['stack']));}catch($pyjs_dbg_109_err){
    if ($pyjs_dbg_109_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 678 :\n" + $pyjs_dbg_109_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_109_retry) {
        case 1:
            $pyjs_dbg_109_res=pyjslib['len'](((($attr59=self['stack']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'stack'):
						self['stack']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_109_err;
    }
}return $pyjs_dbg_109_res})(), 0) == 1));}catch($pyjs_dbg_110_err){
    if ($pyjs_dbg_110_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 678 :\n" + $pyjs_dbg_110_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_110_retry) {
        case 1:
            $pyjs_dbg_110_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_109_retry = 0;
try{var $pyjs_dbg_109_res=pyjslib['len'](((($attr59=self['stack']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'stack'):
						self['stack']));}catch($pyjs_dbg_109_err){
    if ($pyjs_dbg_109_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 678 :\n" + $pyjs_dbg_109_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_109_retry) {
        case 1:
            $pyjs_dbg_109_res=pyjslib['len'](((($attr59=self['stack']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'stack'):
						self['stack']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_109_err;
    }
}return $pyjs_dbg_109_res})(), 0) == 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_110_err;
    }
}return $pyjs_dbg_110_res})()) {
				$pyjs.track.lineno=679;
				var $tupleassign1 = (function(){var $pyjs_dbg_111_retry = 0;
try{var $pyjs_dbg_111_res=self['stack']['pop']();}catch($pyjs_dbg_111_err){
    if ($pyjs_dbg_111_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 679 :\n" + $pyjs_dbg_111_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_111_retry) {
        case 1:
            $pyjs_dbg_111_res=self['stack']['pop']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_111_err;
    }
}return $pyjs_dbg_111_res})();
				self.child = (function(){var $pyjs_dbg_112_retry = 0;
try{var $pyjs_dbg_112_res=$tupleassign1.__getitem__(0);}catch($pyjs_dbg_112_err){
    if ($pyjs_dbg_112_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 679 :\n" + $pyjs_dbg_112_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_112_retry) {
        case 1:
            $pyjs_dbg_112_res=$tupleassign1.__getitem__(0);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_112_err;
    }
}return $pyjs_dbg_112_res})();
				self.parent = (function(){var $pyjs_dbg_113_retry = 0;
try{var $pyjs_dbg_113_res=$tupleassign1.__getitem__(1);}catch($pyjs_dbg_113_err){
    if ($pyjs_dbg_113_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 679 :\n" + $pyjs_dbg_113_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_113_retry) {
        case 1:
            $pyjs_dbg_113_res=$tupleassign1.__getitem__(1);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_113_err;
    }
}return $pyjs_dbg_113_res})();
			}
			else {
				$pyjs.track.lineno=681;
				self.child = null;
			}
			$pyjs.track.lineno=682;
			$pyjs.track.lineno=682;
			var $pyjs__ret = ((($attr61=self['lastChild']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'lastChild'):
						self['lastChild']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$pyjs.track.lineno=684;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr64,$attr63;
			$pyjs.track={module:pyjamas.DOM, lineno:684};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=684;
			$pyjs.track.lineno=685;
			(function(){var $pyjs_dbg_114_retry = 0;
try{var $pyjs_dbg_114_res=self['parent']['removeChild'](((($attr63=self['lastChild']) !== null & ($attr64=self).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'lastChild'):
						self['lastChild']));}catch($pyjs_dbg_114_err){
    if ($pyjs_dbg_114_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 685 :\n" + $pyjs_dbg_114_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_114_retry) {
        case 1:
            $pyjs_dbg_114_res=self['parent']['removeChild'](((($attr63=self['lastChild']) !== null & ($attr64=self).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'lastChild'):
						self['lastChild']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_114_err;
    }
}return $pyjs_dbg_114_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$pyjs.track.lineno=687;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:pyjamas.DOM, lineno:687};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=687;
			$pyjs.track.lineno=688;
			$pyjs.track.lineno=688;
			var $pyjs__ret = self;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	$pyjs.track.lineno=691;
	pyjamas['DOM']['walkChildren'] = function(elem) {


    var parent = elem;
    var child = DOM.getFirstChild(elem);
    var lastChild = null;
    var stack = [];
    var parentStack = [];
    return {
        'next': function() {
            if (child == null) {
                throw pyjslib.StopIteration;
            }
            lastChild = child;
            var firstChild = DOM.getFirstChild(child);
            var nextSibling = DOM.getNextSibling(child);
            if(firstChild != null) {
               if(nextSibling != null) {
                   stack.push(nextSibling);
                   parentStack.push(parent);
                }
                parent = child;
                child = firstChild;
            } else if(nextSibling != null) {
                child = nextSibling;
            } else if(stack.length > 0) {
                child = stack.pop();
                parent = parentStack.pop();
            } else {
                child = null;
            }
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	pyjamas['DOM']['walkChildren'].__name__ = 'walkChildren';

	pyjamas['DOM']['walkChildren'].__bind_type__ = 0;
	pyjamas['DOM']['walkChildren'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=700;
	pyjamas['DOM']['isOrHasChild'] = function(parent, child) {


    while (child) {
        if (parent.uniqueID == child.uniqueID)
            return true;
        child = child.parentElement;
    }
    return false;
    
	};
	pyjamas['DOM']['isOrHasChild'].__name__ = 'isOrHasChild';

	pyjamas['DOM']['isOrHasChild'].__bind_type__ = 0;
	pyjamas['DOM']['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=712;
	pyjamas['DOM']['releaseCapture'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:712};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=712;
		$pyjs.track.lineno=196;

    elem.releaseCapture();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['releaseCapture'].__name__ = 'releaseCapture';

	pyjamas['DOM']['releaseCapture'].__bind_type__ = 0;
	pyjamas['DOM']['releaseCapture'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=719;
	pyjamas['DOM']['removeChild'] = function(parent, child) {

		$pyjs.track={module:'pyjamas.DOM',lineno:719};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=719;
		$pyjs.track.lineno=720;
		(function(){var $pyjs_dbg_115_retry = 0;
try{var $pyjs_dbg_115_res=parent['removeChild'](child);}catch($pyjs_dbg_115_err){
    if ($pyjs_dbg_115_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 720 :\n" + $pyjs_dbg_115_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_115_retry) {
        case 1:
            $pyjs_dbg_115_res=parent['removeChild'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_115_err;
    }
}return $pyjs_dbg_115_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['removeChild'].__name__ = 'removeChild';

	pyjamas['DOM']['removeChild'].__bind_type__ = 0;
	pyjamas['DOM']['removeChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=723;
	pyjamas['DOM']['replaceChild'] = function(parent, newChild, oldChild) {

		$pyjs.track={module:'pyjamas.DOM',lineno:723};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=723;
		$pyjs.track.lineno=724;
		(function(){var $pyjs_dbg_116_retry = 0;
try{var $pyjs_dbg_116_res=parent['replaceChild'](newChild, oldChild);}catch($pyjs_dbg_116_err){
    if ($pyjs_dbg_116_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 724 :\n" + $pyjs_dbg_116_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_116_retry) {
        case 1:
            $pyjs_dbg_116_res=parent['replaceChild'](newChild, oldChild);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_116_err;
    }
}return $pyjs_dbg_116_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['replaceChild'].__name__ = 'replaceChild';

	pyjamas['DOM']['replaceChild'].__bind_type__ = 0;
	pyjamas['DOM']['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	$pyjs.track.lineno=727;
	pyjamas['DOM']['removeEventPreview'] = function(preview) {

		$pyjs.track={module:'pyjamas.DOM',lineno:727};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=727;
		$pyjs.track.lineno=453;
		(function(){var $pyjs_dbg_117_retry = 0;
try{var $pyjs_dbg_117_res=pyjamas['DOM']['sEventPreviewStack']['remove'](preview);}catch($pyjs_dbg_117_err){
    if ($pyjs_dbg_117_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 453 :\n" + $pyjs_dbg_117_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_117_retry) {
        case 1:
            $pyjs_dbg_117_res=pyjamas['DOM']['sEventPreviewStack']['remove'](preview);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_117_err;
    }
}return $pyjs_dbg_117_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['removeEventPreview'].__name__ = 'removeEventPreview';

	pyjamas['DOM']['removeEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['removeEventPreview'].__args__ = [null,null,['preview']];
	$pyjs.track.lineno=731;
	pyjamas['DOM']['getOffsetHeight'] = function(elem) {
		var $attr65,$attr66;
		$pyjs.track={module:'pyjamas.DOM',lineno:731};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=731;
		$pyjs.track.lineno=732;
		$pyjs.track.lineno=732;
		var $pyjs__ret = ((($attr65=elem['offsetHeight']) !== null & ($attr66=elem).__is_instance__) && typeof $attr65 == 'function'?
					pyjslib['getattr']($attr66, 'offsetHeight'):
					elem['offsetHeight']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getOffsetHeight'].__name__ = 'getOffsetHeight';

	pyjamas['DOM']['getOffsetHeight'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetHeight'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=735;
	pyjamas['DOM']['getOffsetWidth'] = function(elem) {
		var $attr67,$attr68;
		$pyjs.track={module:'pyjamas.DOM',lineno:735};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=735;
		$pyjs.track.lineno=736;
		$pyjs.track.lineno=736;
		var $pyjs__ret = ((($attr67=elem['offsetWidth']) !== null & ($attr68=elem).__is_instance__) && typeof $attr67 == 'function'?
					pyjslib['getattr']($attr68, 'offsetWidth'):
					elem['offsetWidth']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getOffsetWidth'].__name__ = 'getOffsetWidth';

	pyjamas['DOM']['getOffsetWidth'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetWidth'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=739;
	pyjamas['DOM']['scrollIntoView'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:739};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=739;
		$pyjs.track.lineno=492;

    var left = elem.offsetLeft, top = elem.offsetTop;
    var width = elem.offsetWidth, height = elem.offsetHeight;
    
    if (elem.parentNode != elem.offsetParent) {
        left -= elem.parentNode.offsetLeft;
        top -= elem.parentNode.offsetTop;
    }

    var cur = elem.parentNode;
    while (cur && (cur.nodeType == 1)) {
        if ((cur.style.overflow == 'auto') || (cur.style.overflow == 'scroll')) {
            if (left < cur.scrollLeft) {
                cur.scrollLeft = left;
            }
            if (left + width > cur.scrollLeft + cur.clientWidth) {
                cur.scrollLeft = (left + width) - cur.clientWidth;
            }
            if (top < cur.scrollTop) {
                cur.scrollTop = top;
            }
            if (top + height > cur.scrollTop + cur.clientHeight) {
                cur.scrollTop = (top + height) - cur.clientHeight;
            }
        }

        var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
        if (cur.parentNode != cur.offsetParent) {
            offsetLeft -= cur.parentNode.offsetLeft;
            offsetTop -= cur.parentNode.offsetTop;
        }

        left += offsetLeft - cur.scrollLeft;
        top += offsetTop - cur.scrollTop;
        cur = cur.parentNode;
    }
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['scrollIntoView'].__name__ = 'scrollIntoView';

	pyjamas['DOM']['scrollIntoView'].__bind_type__ = 0;
	pyjamas['DOM']['scrollIntoView'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=775;
	pyjamas['DOM']['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$iter1_nextval,$iter1_idx,res,$add5,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$pyjs__trackstack_size_1,$iter1_type;
		$pyjs.track={module:'pyjamas.DOM',lineno:775};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=775;
		$pyjs.track.lineno=776;
		res = String('');
		$pyjs.track.lineno=777;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = name;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			c = $iter1_nextval;
			$pyjs.track.lineno=778;
			if ((function(){var $pyjs_dbg_119_retry = 0;
try{var $pyjs_dbg_119_res=pyjslib['bool']((function(){var $pyjs_dbg_118_retry = 0;
try{var $pyjs_dbg_118_res=c['isupper']();}catch($pyjs_dbg_118_err){
    if ($pyjs_dbg_118_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 778 :\n" + $pyjs_dbg_118_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_118_retry) {
        case 1:
            $pyjs_dbg_118_res=c['isupper']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_118_err;
    }
}return $pyjs_dbg_118_res})());}catch($pyjs_dbg_119_err){
    if ($pyjs_dbg_119_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 778 :\n" + $pyjs_dbg_119_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_119_retry) {
        case 1:
            $pyjs_dbg_119_res=pyjslib['bool']((function(){var $pyjs_dbg_118_retry = 0;
try{var $pyjs_dbg_118_res=c['isupper']();}catch($pyjs_dbg_118_err){
    if ($pyjs_dbg_118_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 778 :\n" + $pyjs_dbg_118_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_118_retry) {
        case 1:
            $pyjs_dbg_118_res=c['isupper']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_118_err;
    }
}return $pyjs_dbg_118_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_119_err;
    }
}return $pyjs_dbg_119_res})()) {
				$pyjs.track.lineno=779;
				res = (typeof ($add3=res)==typeof ($add4=(typeof ($add1=joiner)==typeof ($add2=(function(){var $pyjs_dbg_120_retry = 0;
try{var $pyjs_dbg_120_res=c['lower']();}catch($pyjs_dbg_120_err){
    if ($pyjs_dbg_120_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 779 :\n" + $pyjs_dbg_120_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_120_retry) {
        case 1:
            $pyjs_dbg_120_res=c['lower']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_120_err;
    }
}return $pyjs_dbg_120_res})()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
			}
			else {
				$pyjs.track.lineno=781;
				res = (typeof ($add5=res)==typeof ($add6=c) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6));
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=782;
		$pyjs.track.lineno=782;
		var $pyjs__ret = res;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	pyjamas['DOM']['mash_name_for_glib'].__bind_type__ = 0;
	pyjamas['DOM']['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', String('-')]];
	$pyjs.track.lineno=785;
	pyjamas['DOM']['removeAttribute'] = function(element, attribute) {

		$pyjs.track={module:'pyjamas.DOM',lineno:785};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=785;
		$pyjs.track.lineno=497;

    delete element[attribute];
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['removeAttribute'].__name__ = 'removeAttribute';

	pyjamas['DOM']['removeAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$pyjs.track.lineno=789;
	pyjamas['DOM']['setAttribute'] = function(element, attribute, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:789};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=789;
		$pyjs.track.lineno=502;

    element[attribute] = value;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setAttribute'].__name__ = 'setAttribute';

	pyjamas['DOM']['setAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$pyjs.track.lineno=793;
	pyjamas['DOM']['setElemAttribute'] = function(element, attribute, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:793};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=793;
		$pyjs.track.lineno=794;
		(function(){var $pyjs_dbg_121_retry = 0;
try{var $pyjs_dbg_121_res=element['setAttribute'](attribute, value);}catch($pyjs_dbg_121_err){
    if ($pyjs_dbg_121_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 794 :\n" + $pyjs_dbg_121_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_121_retry) {
        case 1:
            $pyjs_dbg_121_res=element['setAttribute'](attribute, value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_121_err;
    }
}return $pyjs_dbg_121_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setElemAttribute'].__name__ = 'setElemAttribute';

	pyjamas['DOM']['setElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$pyjs.track.lineno=797;
	pyjamas['DOM']['setBooleanAttribute'] = function(elem, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:797};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=797;
		$pyjs.track.lineno=507;

    elem[attr] = value;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	pyjamas['DOM']['setBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=802;
	pyjamas['DOM']['setCapture'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:802};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=802;
		$pyjs.track.lineno=201;

    elem.setCapture();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setCapture'].__name__ = 'setCapture';

	pyjamas['DOM']['setCapture'].__bind_type__ = 0;
	pyjamas['DOM']['setCapture'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=808;
	pyjamas['DOM']['setEventListener'] = function(element, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:808};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=808;
		$pyjs.track.lineno=523;

    element.__listener = listener;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setEventListener'].__name__ = 'setEventListener';

	pyjamas['DOM']['setEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$pyjs.track.lineno=818;
	pyjamas['DOM']['setInnerHTML'] = function(element, html) {

		$pyjs.track={module:'pyjamas.DOM',lineno:818};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=818;
		$pyjs.track.lineno=526;
element.innerHTML = html || "";
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setInnerHTML'].__name__ = 'setInnerHTML';

	pyjamas['DOM']['setInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$pyjs.track.lineno=825;
	pyjamas['DOM']['setInnerText'] = function(elem, text) {

		$pyjs.track={module:'pyjamas.DOM',lineno:825};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=825;
		$pyjs.track.lineno=208;

    if (!text)
        text = '';
    elem.innerText = text;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setInnerText'].__name__ = 'setInnerText';

	pyjamas['DOM']['setInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerText'].__args__ = [null,null,['elem'],['text']];
	$pyjs.track.lineno=832;
	pyjamas['DOM']['setIntElemAttribute'] = function(elem, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:832};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=832;
		$pyjs.track.lineno=833;
		(function(){var $pyjs_dbg_123_retry = 0;
try{var $pyjs_dbg_123_res=elem['setAttribute'](attr, (function(){var $pyjs_dbg_122_retry = 0;
try{var $pyjs_dbg_122_res=pyjslib['str'](value);}catch($pyjs_dbg_122_err){
    if ($pyjs_dbg_122_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 833 :\n" + $pyjs_dbg_122_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_122_retry) {
        case 1:
            $pyjs_dbg_122_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_122_err;
    }
}return $pyjs_dbg_122_res})());}catch($pyjs_dbg_123_err){
    if ($pyjs_dbg_123_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 833 :\n" + $pyjs_dbg_123_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_123_retry) {
        case 1:
            $pyjs_dbg_123_res=elem['setAttribute'](attr, (function(){var $pyjs_dbg_122_retry = 0;
try{var $pyjs_dbg_122_res=pyjslib['str'](value);}catch($pyjs_dbg_122_err){
    if ($pyjs_dbg_122_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 833 :\n" + $pyjs_dbg_122_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_122_retry) {
        case 1:
            $pyjs_dbg_122_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_122_err;
    }
}return $pyjs_dbg_122_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_123_err;
    }
}return $pyjs_dbg_123_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	pyjamas['DOM']['setIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=836;
	pyjamas['DOM']['setIntAttribute'] = function(elem, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:836};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=836;
		$pyjs.track.lineno=541;

    elem[attr] = value;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setIntAttribute'].__name__ = 'setIntAttribute';

	pyjamas['DOM']['setIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=840;
	pyjamas['DOM']['setIntStyleAttribute'] = function(elem, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:840};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=840;
		$pyjs.track.lineno=546;

    elem.style[attr] = value;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	pyjamas['DOM']['setIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=848;
	pyjamas['DOM']['setOptionText'] = function(select, text, index) {
		var option;
		$pyjs.track={module:'pyjamas.DOM',lineno:848};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=848;
		$pyjs.track.lineno=549;
		option = (function(){var $pyjs_dbg_124_retry = 0;
try{var $pyjs_dbg_124_res=select['options']['item'](index);}catch($pyjs_dbg_124_err){
    if ($pyjs_dbg_124_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 549 :\n" + $pyjs_dbg_124_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_124_retry) {
        case 1:
            $pyjs_dbg_124_res=select['options']['item'](index);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_124_err;
    }
}return $pyjs_dbg_124_res})();
		$pyjs.track.lineno=550;
		option.text = text;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setOptionText'].__name__ = 'setOptionText';

	pyjamas['DOM']['setOptionText'].__bind_type__ = 0;
	pyjamas['DOM']['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$pyjs.track.lineno=853;
	pyjamas['DOM']['setStyleAttribute'] = function(element, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:853};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=853;
		$pyjs.track.lineno=555;

    element.style[attr] = value;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['setStyleAttribute'].__name__ = 'setStyleAttribute';

	pyjamas['DOM']['setStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setStyleAttribute'].__args__ = [null,null,['element'],['attr'],['value']];
	$pyjs.track.lineno=860;
	pyjamas['DOM']['sinkEvents'] = function(elem, bits) {

		$pyjs.track={module:'pyjamas.DOM',lineno:860};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=860;
		$pyjs.track.lineno=232;

    elem.__eventBits = bits;

    elem.onclick       = (bits & 0x00001) ? $wnd.__dispatchEvent : null;
    elem.ondblclick    = (bits & 0x00002) ? $wnd.__dispatchDblClickEvent : null;
    elem.onmousedown   = (bits & 0x00004) ? $wnd.__dispatchEvent : null;
    elem.onmouseup     = (bits & 0x00008) ? $wnd.__dispatchEvent : null;
    elem.onmouseover   = (bits & 0x00010) ? $wnd.__dispatchEvent : null;
    elem.onmouseout    = (bits & 0x00020) ? $wnd.__dispatchEvent : null;
    elem.onmousemove   = (bits & 0x00040) ? $wnd.__dispatchEvent : null;
    elem.onkeydown     = (bits & 0x00080) ? $wnd.__dispatchEvent : null;
    elem.onkeypress    = (bits & 0x00100) ? $wnd.__dispatchEvent : null;
    elem.onkeyup       = (bits & 0x00200) ? $wnd.__dispatchEvent : null;
    elem.onchange      = (bits & 0x00400) ? $wnd.__dispatchEvent : null;
    elem.onfocus       = (bits & 0x00800) ? $wnd.__dispatchEvent : null;
    elem.onblur        = (bits & 0x01000) ? $wnd.__dispatchEvent : null;
    elem.onlosecapture = (bits & 0x02000) ? $wnd.__dispatchEvent : null;
    elem.onscroll      = (bits & 0x04000) ? $wnd.__dispatchEvent : null;
    elem.onload        = (bits & 0x08000) ? $wnd.__dispatchEvent : null;
    elem.onerror       = (bits & 0x10000) ? $wnd.__dispatchEvent : null;
    elem.oncontextmenu = (bits & 0x20000) ? $wnd.__dispatchEvent : null; 
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['sinkEvents'].__name__ = 'sinkEvents';

	pyjamas['DOM']['sinkEvents'].__bind_type__ = 0;
	pyjamas['DOM']['sinkEvents'].__args__ = [null,null,['elem'],['bits']];
	$pyjs.track.lineno=917;
	pyjamas['DOM']['toString'] = function(elem) {


    return elem.outerHTML;
    
	};
	pyjamas['DOM']['toString'].__name__ = 'toString';

	pyjamas['DOM']['toString'].__bind_type__ = 0;
	pyjamas['DOM']['toString'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=927;
	pyjamas['DOM']['dispatchEvent'] = function(event, element, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:927};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=927;
		$pyjs.track.lineno=599;
		(function(){var $pyjs_dbg_125_retry = 0;
try{var $pyjs_dbg_125_res=pyjamas.DOM.dispatchEventImpl(event, element, listener);}catch($pyjs_dbg_125_err){
    if ($pyjs_dbg_125_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 599 :\n" + $pyjs_dbg_125_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_125_retry) {
        case 1:
            $pyjs_dbg_125_res=pyjamas.DOM.dispatchEventImpl(event, element, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_125_err;
    }
}return $pyjs_dbg_125_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['dispatchEvent'].__name__ = 'dispatchEvent';

	pyjamas['DOM']['dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$pyjs.track.lineno=931;
	pyjamas['DOM']['previewEvent'] = function(evt) {
		var $sub2,$sub1,preview,ret;
		$pyjs.track={module:'pyjamas.DOM',lineno:931};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=931;
		$pyjs.track.lineno=602;
		ret = true;
		$pyjs.track.lineno=603;
		if ((function(){var $pyjs_dbg_127_retry = 0;
try{var $pyjs_dbg_127_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_126_retry = 0;
try{var $pyjs_dbg_126_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);}catch($pyjs_dbg_126_err){
    if ($pyjs_dbg_126_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 603 :\n" + $pyjs_dbg_126_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_126_retry) {
        case 1:
            $pyjs_dbg_126_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_126_err;
    }
}return $pyjs_dbg_126_res})(), 0) == 1));}catch($pyjs_dbg_127_err){
    if ($pyjs_dbg_127_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 603 :\n" + $pyjs_dbg_127_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_127_retry) {
        case 1:
            $pyjs_dbg_127_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_126_retry = 0;
try{var $pyjs_dbg_126_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);}catch($pyjs_dbg_126_err){
    if ($pyjs_dbg_126_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 603 :\n" + $pyjs_dbg_126_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_126_retry) {
        case 1:
            $pyjs_dbg_126_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_126_err;
    }
}return $pyjs_dbg_126_res})(), 0) == 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_127_err;
    }
}return $pyjs_dbg_127_res})()) {
			$pyjs.track.lineno=604;
			preview = pyjamas['DOM']['sEventPreviewStack'].__getitem__((typeof ($sub1=(function(){var $pyjs_dbg_128_retry = 0;
try{var $pyjs_dbg_128_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);}catch($pyjs_dbg_128_err){
    if ($pyjs_dbg_128_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 604 :\n" + $pyjs_dbg_128_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_128_retry) {
        case 1:
            $pyjs_dbg_128_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_128_err;
    }
}return $pyjs_dbg_128_res})())==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)));
			$pyjs.track.lineno=606;
			ret = (function(){var $pyjs_dbg_129_retry = 0;
try{var $pyjs_dbg_129_res=preview['onEventPreview'](evt);}catch($pyjs_dbg_129_err){
    if ($pyjs_dbg_129_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 606 :\n" + $pyjs_dbg_129_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_129_retry) {
        case 1:
            $pyjs_dbg_129_res=preview['onEventPreview'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_129_err;
    }
}return $pyjs_dbg_129_res})();
			$pyjs.track.lineno=607;
			if ((function(){var $pyjs_dbg_130_retry = 0;
try{var $pyjs_dbg_130_res=pyjslib['bool'](!pyjslib['bool'](ret));}catch($pyjs_dbg_130_err){
    if ($pyjs_dbg_130_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 607 :\n" + $pyjs_dbg_130_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_130_retry) {
        case 1:
            $pyjs_dbg_130_res=pyjslib['bool'](!pyjslib['bool'](ret));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_130_err;
    }
}return $pyjs_dbg_130_res})()) {
				$pyjs.track.lineno=608;
				(function(){var $pyjs_dbg_131_retry = 0;
try{var $pyjs_dbg_131_res=pyjamas['DOM']['eventCancelBubble'](evt, true);}catch($pyjs_dbg_131_err){
    if ($pyjs_dbg_131_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 608 :\n" + $pyjs_dbg_131_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_131_retry) {
        case 1:
            $pyjs_dbg_131_res=pyjamas['DOM']['eventCancelBubble'](evt, true);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_131_err;
    }
}return $pyjs_dbg_131_res})();
				$pyjs.track.lineno=609;
				(function(){var $pyjs_dbg_132_retry = 0;
try{var $pyjs_dbg_132_res=pyjamas['DOM']['eventPreventDefault'](evt);}catch($pyjs_dbg_132_err){
    if ($pyjs_dbg_132_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 609 :\n" + $pyjs_dbg_132_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_132_retry) {
        case 1:
            $pyjs_dbg_132_res=pyjamas['DOM']['eventPreventDefault'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_132_err;
    }
}return $pyjs_dbg_132_res})();
			}
		}
		$pyjs.track.lineno=611;
		$pyjs.track.lineno=611;
		var $pyjs__ret = ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['previewEvent'].__name__ = 'previewEvent';

	pyjamas['DOM']['previewEvent'].__bind_type__ = 0;
	pyjamas['DOM']['previewEvent'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=948;
	pyjamas['DOM']['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

		$pyjs.track={module:'pyjamas.DOM',lineno:948};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=948;
		$pyjs.track.lineno=615;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	pyjamas['DOM']['dispatchEventAndCatch'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	$pyjs.track.lineno=951;
	pyjamas['DOM']['currentEvent'] = null;
	$pyjs.track.lineno=954;
	pyjamas['DOM']['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent;
		$pyjs.track={module:'pyjamas.DOM',lineno:954};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=954;
		$pyjs.track.lineno=618;
		$pyjs.track.lineno=619;
		if ((function(){var $pyjs_dbg_133_retry = 0;
try{var $pyjs_dbg_133_res=pyjslib['bool'](pyjslib['op_eq'](element, pyjamas['DOM']['sCaptureElem']));}catch($pyjs_dbg_133_err){
    if ($pyjs_dbg_133_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 619 :\n" + $pyjs_dbg_133_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_133_retry) {
        case 1:
            $pyjs_dbg_133_res=pyjslib['bool'](pyjslib['op_eq'](element, pyjamas['DOM']['sCaptureElem']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_133_err;
    }
}return $pyjs_dbg_133_res})()) {
			$pyjs.track.lineno=620;
			if ((function(){var $pyjs_dbg_135_retry = 0;
try{var $pyjs_dbg_135_res=pyjslib['bool'](pyjslib['op_eq']((function(){var $pyjs_dbg_134_retry = 0;
try{var $pyjs_dbg_134_res=pyjamas['DOM']['eventGetType'](event);}catch($pyjs_dbg_134_err){
    if ($pyjs_dbg_134_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 620 :\n" + $pyjs_dbg_134_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_134_retry) {
        case 1:
            $pyjs_dbg_134_res=pyjamas['DOM']['eventGetType'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_134_err;
    }
}return $pyjs_dbg_134_res})(), String('losecapture')));}catch($pyjs_dbg_135_err){
    if ($pyjs_dbg_135_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 620 :\n" + $pyjs_dbg_135_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_135_retry) {
        case 1:
            $pyjs_dbg_135_res=pyjslib['bool'](pyjslib['op_eq']((function(){var $pyjs_dbg_134_retry = 0;
try{var $pyjs_dbg_134_res=pyjamas['DOM']['eventGetType'](event);}catch($pyjs_dbg_134_err){
    if ($pyjs_dbg_134_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 620 :\n" + $pyjs_dbg_134_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_134_retry) {
        case 1:
            $pyjs_dbg_134_res=pyjamas['DOM']['eventGetType'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_134_err;
    }
}return $pyjs_dbg_134_res})(), String('losecapture')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_135_err;
    }
}return $pyjs_dbg_135_res})()) {
				$pyjs.track.lineno=621;
				pyjamas['DOM']['sCaptureElem'] = null;
			}
		}
		$pyjs.track.lineno=622;
		prevCurrentEvent = pyjamas['DOM']['currentEvent'];
		$pyjs.track.lineno=623;
		pyjamas['DOM']['currentEvent'] = event;
		$pyjs.track.lineno=624;
		(function(){var $pyjs_dbg_136_retry = 0;
try{var $pyjs_dbg_136_res=listener['onBrowserEvent'](event);}catch($pyjs_dbg_136_err){
    if ($pyjs_dbg_136_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 624 :\n" + $pyjs_dbg_136_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_136_retry) {
        case 1:
            $pyjs_dbg_136_res=listener['onBrowserEvent'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_136_err;
    }
}return $pyjs_dbg_136_res})();
		$pyjs.track.lineno=625;
		pyjamas['DOM']['currentEvent'] = prevCurrentEvent;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	pyjamas['DOM']['dispatchEventImpl'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	$pyjs.track.lineno=967;
	pyjamas['DOM']['eventGetCurrentEvent'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:967};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=967;
		$pyjs.track.lineno=628;
		$pyjs.track.lineno=628;
		var $pyjs__ret = pyjamas['DOM']['currentEvent'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	pyjamas['DOM']['eventGetCurrentEvent'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentEvent'].__args__ = [null,null];
	$pyjs.track.lineno=971;
	pyjamas['DOM']['insertListItem'] = function(select, text, value, index) {

		$pyjs.track={module:'pyjamas.DOM',lineno:971};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=971;
		$pyjs.track.lineno=181;

    var newOption = document.createElement("Option");
    if(index==-1) {
        select.add(newOption);
    } else {
        select.add(newOption,index);
    }
    newOption.text=text;
    newOption.value=value;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	pyjamas['DOM']['insertListItem'].__name__ = 'insertListItem';

	pyjamas['DOM']['insertListItem'].__bind_type__ = 0;
	pyjamas['DOM']['insertListItem'].__args__ = [null,null,['select'],['text'],['value'],['index']];
	$pyjs.track.lineno=982;
	pyjamas['DOM']['getBodyOffsetTop'] = function() {


    return $doc.body.parentElement.clientTop;
    
	};
	pyjamas['DOM']['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	pyjamas['DOM']['getBodyOffsetTop'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetTop'].__args__ = [null,null];
	$pyjs.track.lineno=986;
	pyjamas['DOM']['getBodyOffsetLeft'] = function() {


    return $doc.body.parentElement.clientLeft;
    
	};
	pyjamas['DOM']['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	pyjamas['DOM']['getBodyOffsetLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetLeft'].__args__ = [null,null];
	$pyjs.track.lineno=990;
	if (pyjslib['bool'](pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr69=pyjamas['DOM']['sys']['platform']) !== null & ($attr70=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr69 == 'function'?
				pyjslib['getattr']($attr70, 'platform'):
				pyjamas['DOM']['sys']['platform'])))) {
		$pyjs.track.lineno=991;
		(function(){var $pyjs_dbg_137_retry = 0;
try{var $pyjs_dbg_137_res=pyjamas['DOM']['init']();}catch($pyjs_dbg_137_err){
    if ($pyjs_dbg_137_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 991 :\n" + $pyjs_dbg_137_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_137_retry) {
        case 1:
            $pyjs_dbg_137_res=pyjamas['DOM']['init']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_137_err;
    }
}return $pyjs_dbg_137_res})();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['sys', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed']
*/
