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
	pyjamas['DOM'].__track_lines__[36] = "pyjamas.DOM.py, line 36:\n    ret = listeners.get(item.__instance__)";
	pyjamas['DOM'].__track_lines__[38] = "pyjamas.DOM.py, line 38:\n    ret = listeners.get(hash(item))";
	pyjamas['DOM'].__track_lines__[39] = "pyjamas.DOM.py, line 39:\n    return ret";
	pyjamas['DOM'].__track_lines__[42] = "pyjamas.DOM.py, line 42:\n    def set_listener(item, listener):";
	pyjamas['DOM'].__track_lines__[43] = "pyjamas.DOM.py, line 43:\n    if hasattr(item, \"__instance__\"):";
	pyjamas['DOM'].__track_lines__[44] = "pyjamas.DOM.py, line 44:\n    listeners[item.__instance__] = listener";
	pyjamas['DOM'].__track_lines__[46] = "pyjamas.DOM.py, line 46:\n    listeners[hash(item)] = listener";
	pyjamas['DOM'].__track_lines__[49] = "pyjamas.DOM.py, line 49:\n    hack_timer_workaround_bug_button = None";
	pyjamas['DOM'].__track_lines__[52] = "pyjamas.DOM.py, line 52:\n    def init():";
	pyjamas['DOM'].__track_lines__[54] = "pyjamas.DOM.py, line 54:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[55] = "pyjamas.DOM.py, line 55:\n    mf._addWindowEventListener(\"click\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[56] = "pyjamas.DOM.py, line 56:\n    mf._addWindowEventListener(\"change\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[57] = "pyjamas.DOM.py, line 57:\n    mf._addWindowEventListener(\"mouseout\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[58] = "pyjamas.DOM.py, line 58:\n    mf._addWindowEventListener(\"mousedown\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[59] = "pyjamas.DOM.py, line 59:\n    mf._addWindowEventListener(\"mouseup\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[60] = "pyjamas.DOM.py, line 60:\n    mf._addWindowEventListener(\"resize\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[61] = "pyjamas.DOM.py, line 61:\n    mf._addWindowEventListener(\"keyup\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[62] = "pyjamas.DOM.py, line 62:\n    mf._addWindowEventListener(\"keydown\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[63] = "pyjamas.DOM.py, line 63:\n    mf._addWindowEventListener(\"keypress\", browser_event_cb)";
	pyjamas['DOM'].__track_lines__[66] = "pyjamas.DOM.py, line 66:\n    def _dispatchWindowEvent(sender, evt, useCap):";
	pyjamas['DOM'].__track_lines__[67] = "pyjamas.DOM.py, line 67:\n    pass";
	pyjamas['DOM'].__track_lines__[70] = "pyjamas.DOM.py, line 70:\n    def _dispatchEvent(sender, evt, useCap):";
	pyjamas['DOM'].__track_lines__[72] = "pyjamas.DOM.py, line 72:\n    if evt is None:";
	pyjamas['DOM'].__track_lines__[73] = "pyjamas.DOM.py, line 73:\n    evt = wnd().event";
	pyjamas['DOM'].__track_lines__[75] = "pyjamas.DOM.py, line 75:\n    try:";
	pyjamas['DOM'].__track_lines__[76] = "pyjamas.DOM.py, line 76:\n    sender = get_main_frame().gobject_wrap(sender) # webkit HACK!";
	pyjamas['DOM'].__track_lines__[77] = "pyjamas.DOM.py, line 77:\n    evt = get_main_frame().gobject_wrap(evt) # webkit HACK!";
	pyjamas['DOM'].__track_lines__[79] = "pyjamas.DOM.py, line 79:\n    pass";
	pyjamas['DOM'].__track_lines__[80] = "pyjamas.DOM.py, line 80:\n    listener = None";
	pyjamas['DOM'].__track_lines__[81] = "pyjamas.DOM.py, line 81:\n    curElem = sender";
	pyjamas['DOM'].__track_lines__[84] = "pyjamas.DOM.py, line 84:\n    cap = getCaptureElement()";
	pyjamas['DOM'].__track_lines__[85] = "pyjamas.DOM.py, line 85:\n    listener = get_listener(cap)";
	pyjamas['DOM'].__track_lines__[86] = "pyjamas.DOM.py, line 86:\n    if cap and listener:";
	pyjamas['DOM'].__track_lines__[88] = "pyjamas.DOM.py, line 88:\n    dispatchEvent(evt, cap, listener)";
	pyjamas['DOM'].__track_lines__[89] = "pyjamas.DOM.py, line 89:\n    evt.stopPropagation()";
	pyjamas['DOM'].__track_lines__[90] = "pyjamas.DOM.py, line 90:\n    return";
	pyjamas['DOM'].__track_lines__[92] = "pyjamas.DOM.py, line 92:\n    while curElem and not get_listener(curElem):";
	pyjamas['DOM'].__track_lines__[94] = "pyjamas.DOM.py, line 94:\n    curElem = getParent(curElem)";
	pyjamas['DOM'].__track_lines__[95] = "pyjamas.DOM.py, line 95:\n    if curElem and getNodeType(curElem) != 1:";
	pyjamas['DOM'].__track_lines__[96] = "pyjamas.DOM.py, line 96:\n    curElem = None";
	pyjamas['DOM'].__track_lines__[98] = "pyjamas.DOM.py, line 98:\n    listener = get_listener(curElem)";
	pyjamas['DOM'].__track_lines__[99] = "pyjamas.DOM.py, line 99:\n    if listener:";
	pyjamas['DOM'].__track_lines__[100] = "pyjamas.DOM.py, line 100:\n    dispatchEvent(evt, curElem, listener)";
	pyjamas['DOM'].__track_lines__[103] = "pyjamas.DOM.py, line 103:\n    def _dispatchCapturedMouseEvent(evt):";
	pyjamas['DOM'].__track_lines__[105] = "pyjamas.DOM.py, line 105:\n    if (_dispatchCapturedEvent(evt)):";
	pyjamas['DOM'].__track_lines__[106] = "pyjamas.DOM.py, line 106:\n    cap = getCaptureElement()";
	pyjamas['DOM'].__track_lines__[107] = "pyjamas.DOM.py, line 107:\n    listener = get_listener(cap)";
	pyjamas['DOM'].__track_lines__[108] = "pyjamas.DOM.py, line 108:\n    if cap and listener:";
	pyjamas['DOM'].__track_lines__[109] = "pyjamas.DOM.py, line 109:\n    dispatchEvent(evt, cap, listener)";
	pyjamas['DOM'].__track_lines__[111] = "pyjamas.DOM.py, line 111:\n    evt.stopPropagation()";
	pyjamas['DOM'].__track_lines__[114] = "pyjamas.DOM.py, line 114:\n    def _dispatchCapturedMouseoutEvent(evt):";
	pyjamas['DOM'].__track_lines__[115] = "pyjamas.DOM.py, line 115:\n    cap = getCaptureElement()";
	pyjamas['DOM'].__track_lines__[116] = "pyjamas.DOM.py, line 116:\n    if cap:";
	pyjamas['DOM'].__track_lines__[118] = "pyjamas.DOM.py, line 118:\n    if not eventGetToElement(evt):";
	pyjamas['DOM'].__track_lines__[122] = "pyjamas.DOM.py, line 122:\n    setCapture(None)";
	pyjamas['DOM'].__track_lines__[123] = "pyjamas.DOM.py, line 123:\n    listener = get_listener(cap)";
	pyjamas['DOM'].__track_lines__[124] = "pyjamas.DOM.py, line 124:\n    if listener:";
	pyjamas['DOM'].__track_lines__[126] = "pyjamas.DOM.py, line 126:\n    lcEvent = doc().createEvent(\'UIEvent\')";
	pyjamas['DOM'].__track_lines__[127] = "pyjamas.DOM.py, line 127:\n    lcEvent.initUIEvent(\'losecapture\', False, False, wnd(), 0)";
	pyjamas['DOM'].__track_lines__[128] = "pyjamas.DOM.py, line 128:\n    dispatchEvent(lcEvent, cap, listener)";
	pyjamas['DOM'].__track_lines__[131] = "pyjamas.DOM.py, line 131:\n    def browser_event_cb(view, event, from_window):";
	pyjamas['DOM'].__track_lines__[133] = "pyjamas.DOM.py, line 133:\n    try:";
	pyjamas['DOM'].__track_lines__[134] = "pyjamas.DOM.py, line 134:\n    event = get_main_frame().gobject_wrap(event) # webkit HACK!";
	pyjamas['DOM'].__track_lines__[136] = "pyjamas.DOM.py, line 136:\n    pass";
	pyjamas['DOM'].__track_lines__[138] = "pyjamas.DOM.py, line 138:\n    et = eventGetType(event)";
	pyjamas['DOM'].__track_lines__[140] = "pyjamas.DOM.py, line 140:\n    if et == \"resize\":";
	pyjamas['DOM'].__track_lines__[141] = "pyjamas.DOM.py, line 141:\n    onResize()";
	pyjamas['DOM'].__track_lines__[142] = "pyjamas.DOM.py, line 142:\n    return";
	pyjamas['DOM'].__track_lines__[145] = "pyjamas.DOM.py, line 145:\n    return _dispatchCapturedMouseoutEvent(event)";
	pyjamas['DOM'].__track_lines__[148] = "pyjamas.DOM.py, line 148:\n    return _dispatchCapturedEvent(event)";
	pyjamas['DOM'].__track_lines__[150] = "pyjamas.DOM.py, line 150:\n    return _dispatchCapturedMouseEvent(event)";
	pyjamas['DOM'].__track_lines__[153] = "pyjamas.DOM.py, line 153:\n    def _dispatchCapturedEvent(event):";
	pyjamas['DOM'].__track_lines__[155] = "pyjamas.DOM.py, line 155:\n    if not previewEvent(event):";
	pyjamas['DOM'].__track_lines__[157] = "pyjamas.DOM.py, line 157:\n    event.stopPropagation()";
	pyjamas['DOM'].__track_lines__[158] = "pyjamas.DOM.py, line 158:\n    eventPreventDefault(event)";
	pyjamas['DOM'].__track_lines__[159] = "pyjamas.DOM.py, line 159:\n    return False";
	pyjamas['DOM'].__track_lines__[160] = "pyjamas.DOM.py, line 160:\n    return True";
	pyjamas['DOM'].__track_lines__[163] = "pyjamas.DOM.py, line 163:\n    def addEventPreview(preview):";
	pyjamas['DOM'].__track_lines__[164] = "pyjamas.DOM.py, line 164:\n    sEventPreviewStack.append(preview)";
	pyjamas['DOM'].__track_lines__[167] = "pyjamas.DOM.py, line 167:\n    def appendChild(parent, child):";
	pyjamas['DOM'].__track_lines__[169] = "pyjamas.DOM.py, line 169:\n    parent.appendChild(child)";
	pyjamas['DOM'].__track_lines__[172] = "pyjamas.DOM.py, line 172:\n    def buttonClick(element):";
	pyjamas['DOM'].__track_lines__[173] = "pyjamas.DOM.py, line 173:\n    evt = doc().createEvent(\'MouseEvents\')";
	pyjamas['DOM'].__track_lines__[174] = "pyjamas.DOM.py, line 174:\n    evt.initMouseEvent(\"click\", True, True, wnd(), 1, 0, 0, 0, 0, False,";
	pyjamas['DOM'].__track_lines__[176] = "pyjamas.DOM.py, line 176:\n    element.dispatchEvent(evt)";
	pyjamas['DOM'].__track_lines__[179] = "pyjamas.DOM.py, line 179:\n    def compare(elem1, elem2):";
	pyjamas['DOM'].__track_lines__[180] = "pyjamas.DOM.py, line 180:\n    if hasattr(elem1, \"isSameNode\"):";
	pyjamas['DOM'].__track_lines__[181] = "pyjamas.DOM.py, line 181:\n    return elem1.isSameNode(elem2)";
	pyjamas['DOM'].__track_lines__[182] = "pyjamas.DOM.py, line 182:\n    return elem1 == elem2";
	pyjamas['DOM'].__track_lines__[185] = "pyjamas.DOM.py, line 185:\n    def createAnchor():";
	pyjamas['DOM'].__track_lines__[186] = "pyjamas.DOM.py, line 186:\n    return createElement(\"A\")";
	pyjamas['DOM'].__track_lines__[189] = "pyjamas.DOM.py, line 189:\n    def createButton():";
	pyjamas['DOM'].__track_lines__[190] = "pyjamas.DOM.py, line 190:\n    return createElement(\"button\")";
	pyjamas['DOM'].__track_lines__[193] = "pyjamas.DOM.py, line 193:\n    def createCol():";
	pyjamas['DOM'].__track_lines__[194] = "pyjamas.DOM.py, line 194:\n    return createElement(\"col\")";
	pyjamas['DOM'].__track_lines__[197] = "pyjamas.DOM.py, line 197:\n    def createDiv():";
	pyjamas['DOM'].__track_lines__[198] = "pyjamas.DOM.py, line 198:\n    return createElement(\"div\")";
	pyjamas['DOM'].__track_lines__[201] = "pyjamas.DOM.py, line 201:\n    def createElement(tag):";
	pyjamas['DOM'].__track_lines__[202] = "pyjamas.DOM.py, line 202:\n    return doc().createElement(tag)";
	pyjamas['DOM'].__track_lines__[205] = "pyjamas.DOM.py, line 205:\n    def createFieldSet():";
	pyjamas['DOM'].__track_lines__[206] = "pyjamas.DOM.py, line 206:\n    return createElement(\"fieldset\")";
	pyjamas['DOM'].__track_lines__[209] = "pyjamas.DOM.py, line 209:\n    def createForm():";
	pyjamas['DOM'].__track_lines__[210] = "pyjamas.DOM.py, line 210:\n    return createElement(\"form\")";
	pyjamas['DOM'].__track_lines__[213] = "pyjamas.DOM.py, line 213:\n    def createIFrame():";
	pyjamas['DOM'].__track_lines__[214] = "pyjamas.DOM.py, line 214:\n    return createElement(\"iframe\")";
	pyjamas['DOM'].__track_lines__[217] = "pyjamas.DOM.py, line 217:\n    def createImg():";
	pyjamas['DOM'].__track_lines__[218] = "pyjamas.DOM.py, line 218:\n    return createElement(\"img\")";
	pyjamas['DOM'].__track_lines__[221] = "pyjamas.DOM.py, line 221:\n    def createInputCheck():";
	pyjamas['DOM'].__track_lines__[222] = "pyjamas.DOM.py, line 222:\n    return createInputElement(\"checkbox\")";
	pyjamas['DOM'].__track_lines__[225] = "pyjamas.DOM.py, line 225:\n    def createInputElement(elementType):";
	pyjamas['DOM'].__track_lines__[226] = "pyjamas.DOM.py, line 226:\n    e = createElement(\"INPUT\")";
	pyjamas['DOM'].__track_lines__[227] = "pyjamas.DOM.py, line 227:\n    e.type = elementType";
	pyjamas['DOM'].__track_lines__[228] = "pyjamas.DOM.py, line 228:\n    return e";
	pyjamas['DOM'].__track_lines__[231] = "pyjamas.DOM.py, line 231:\n    def createInputPassword():";
	pyjamas['DOM'].__track_lines__[232] = "pyjamas.DOM.py, line 232:\n    return createInputElement(\"password\")";
	pyjamas['DOM'].__track_lines__[235] = "pyjamas.DOM.py, line 235:\n    def createInputRadio(group):";
	pyjamas['DOM'].__track_lines__[236] = "pyjamas.DOM.py, line 236:\n    e = createInputElement(\'radio\')";
	pyjamas['DOM'].__track_lines__[237] = "pyjamas.DOM.py, line 237:\n    e.name = group";
	pyjamas['DOM'].__track_lines__[238] = "pyjamas.DOM.py, line 238:\n    return e";
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
	pyjamas['DOM'].__track_lines__[265] = "pyjamas.DOM.py, line 265:\n    def createTable():";
	pyjamas['DOM'].__track_lines__[266] = "pyjamas.DOM.py, line 266:\n    return createElement(\"table\")";
	pyjamas['DOM'].__track_lines__[269] = "pyjamas.DOM.py, line 269:\n    def createTBody():";
	pyjamas['DOM'].__track_lines__[270] = "pyjamas.DOM.py, line 270:\n    return createElement(\"tbody\")";
	pyjamas['DOM'].__track_lines__[273] = "pyjamas.DOM.py, line 273:\n    def createTD():";
	pyjamas['DOM'].__track_lines__[274] = "pyjamas.DOM.py, line 274:\n    return createElement(\"td\")";
	pyjamas['DOM'].__track_lines__[277] = "pyjamas.DOM.py, line 277:\n    def createTextArea():";
	pyjamas['DOM'].__track_lines__[278] = "pyjamas.DOM.py, line 278:\n    return createElement(\"textarea\")";
	pyjamas['DOM'].__track_lines__[281] = "pyjamas.DOM.py, line 281:\n    def createTH():";
	pyjamas['DOM'].__track_lines__[282] = "pyjamas.DOM.py, line 282:\n    return createElement(\"th\")";
	pyjamas['DOM'].__track_lines__[285] = "pyjamas.DOM.py, line 285:\n    def createTR():";
	pyjamas['DOM'].__track_lines__[286] = "pyjamas.DOM.py, line 286:\n    return createElement(\"tr\")";
	pyjamas['DOM'].__track_lines__[289] = "pyjamas.DOM.py, line 289:\n    def eventStopPropagation(evt):";
	pyjamas['DOM'].__track_lines__[290] = "pyjamas.DOM.py, line 290:\n    evt.stopPropagation()";
	pyjamas['DOM'].__track_lines__[293] = "pyjamas.DOM.py, line 293:\n    def eventCancelBubble(evt, cancel):";
	pyjamas['DOM'].__track_lines__[294] = "pyjamas.DOM.py, line 294:\n    evt.cancelBubble = cancel";
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
	pyjamas['DOM'].__track_lines__[317] = "pyjamas.DOM.py, line 317:\n    def eventGetFromElement(evt):";
	pyjamas['DOM'].__track_lines__[318] = "pyjamas.DOM.py, line 318:\n    try:";
	pyjamas['DOM'].__track_lines__[319] = "pyjamas.DOM.py, line 319:\n    return evt.fromElement";
	pyjamas['DOM'].__track_lines__[321] = "pyjamas.DOM.py, line 321:\n    return None";
	pyjamas['DOM'].__track_lines__[324] = "pyjamas.DOM.py, line 324:\n    def eventGetKeyCode(evt):";
	pyjamas['DOM'].__track_lines__[325] = "pyjamas.DOM.py, line 325:\n    return evt.which or evt.keyCode or 0";
	pyjamas['DOM'].__track_lines__[328] = "pyjamas.DOM.py, line 328:\n    def eventGetRepeat(evt):";
	pyjamas['DOM'].__track_lines__[329] = "pyjamas.DOM.py, line 329:\n    return evt.repeat";
	pyjamas['DOM'].__track_lines__[332] = "pyjamas.DOM.py, line 332:\n    def eventGetScreenX(evt):";
	pyjamas['DOM'].__track_lines__[333] = "pyjamas.DOM.py, line 333:\n    return evt.screenX";
	pyjamas['DOM'].__track_lines__[336] = "pyjamas.DOM.py, line 336:\n    def eventGetScreenY(evt):";
	pyjamas['DOM'].__track_lines__[337] = "pyjamas.DOM.py, line 337:\n    return evt.screenY";
	pyjamas['DOM'].__track_lines__[340] = "pyjamas.DOM.py, line 340:\n    def eventGetShiftKey(evt):";
	pyjamas['DOM'].__track_lines__[341] = "pyjamas.DOM.py, line 341:\n    return evt.shiftKey";
	pyjamas['DOM'].__track_lines__[344] = "pyjamas.DOM.py, line 344:\n    def eventGetCurrentTarget(event):";
	pyjamas['DOM'].__track_lines__[345] = "pyjamas.DOM.py, line 345:\n    return event.currentTarget";
	pyjamas['DOM'].__track_lines__[348] = "pyjamas.DOM.py, line 348:\n    def eventGetTarget(event):";
	pyjamas['DOM'].__track_lines__[349] = "pyjamas.DOM.py, line 349:\n    return event.target";
	pyjamas['DOM'].__track_lines__[352] = "pyjamas.DOM.py, line 352:\n    def eventGetToElement(evt):";
	pyjamas['DOM'].__track_lines__[353] = "pyjamas.DOM.py, line 353:\n    type = eventGetType(evt)";
	pyjamas['DOM'].__track_lines__[354] = "pyjamas.DOM.py, line 354:\n    if type == \'mouseout\':";
	pyjamas['DOM'].__track_lines__[355] = "pyjamas.DOM.py, line 355:\n    return evt.relatedTarget";
	pyjamas['DOM'].__track_lines__[357] = "pyjamas.DOM.py, line 357:\n    return evt.target";
	pyjamas['DOM'].__track_lines__[358] = "pyjamas.DOM.py, line 358:\n    return None";
	pyjamas['DOM'].__track_lines__[361] = "pyjamas.DOM.py, line 361:\n    def eventGetType(event):";
	pyjamas['DOM'].__track_lines__[362] = "pyjamas.DOM.py, line 362:\n    return event.type";
	pyjamas['DOM'].__track_lines__[364] = "pyjamas.DOM.py, line 364:\n    eventmap = {";
	pyjamas['DOM'].__track_lines__[386] = "pyjamas.DOM.py, line 386:\n    def eventGetTypeInt(event):";
	pyjamas['DOM'].__track_lines__[387] = "pyjamas.DOM.py, line 387:\n    return eventmap.get(str(event.type), 0)";
	pyjamas['DOM'].__track_lines__[390] = "pyjamas.DOM.py, line 390:\n    def eventGetTypeString(event):";
	pyjamas['DOM'].__track_lines__[391] = "pyjamas.DOM.py, line 391:\n    return eventGetType(event)";
	pyjamas['DOM'].__track_lines__[394] = "pyjamas.DOM.py, line 394:\n    def eventPreventDefault(evt):";
	pyjamas['DOM'].__track_lines__[395] = "pyjamas.DOM.py, line 395:\n    evt.preventDefault()";
	pyjamas['DOM'].__track_lines__[398] = "pyjamas.DOM.py, line 398:\n    def eventSetKeyCode(evt, key):";
	pyjamas['DOM'].__track_lines__[399] = "pyjamas.DOM.py, line 399:\n    evt.keyCode = key";
	pyjamas['DOM'].__track_lines__[402] = "pyjamas.DOM.py, line 402:\n    def eventToString(evt):";
	pyjamas['DOM'].__track_lines__[403] = "pyjamas.DOM.py, line 403:\n    return evt.toString()";
	pyjamas['DOM'].__track_lines__[406] = "pyjamas.DOM.py, line 406:\n    def iframeGetSrc(elem):";
	pyjamas['DOM'].__track_lines__[407] = "pyjamas.DOM.py, line 407:\n    return elem.src";
	pyjamas['DOM'].__track_lines__[410] = "pyjamas.DOM.py, line 410:\n    def getAbsoluteLeft(elem):";
	pyjamas['DOM'].__track_lines__[411] = "pyjamas.DOM.py, line 411:\n    left = 0";
	pyjamas['DOM'].__track_lines__[412] = "pyjamas.DOM.py, line 412:\n    curr = elem";
	pyjamas['DOM'].__track_lines__[413] = "pyjamas.DOM.py, line 413:\n    while curr.offsetParent:";
	pyjamas['DOM'].__track_lines__[414] = "pyjamas.DOM.py, line 414:\n    left -= curr.scrollLeft";
	pyjamas['DOM'].__track_lines__[415] = "pyjamas.DOM.py, line 415:\n    curr = curr.parentNode";
	pyjamas['DOM'].__track_lines__[417] = "pyjamas.DOM.py, line 417:\n    while elem:";
	pyjamas['DOM'].__track_lines__[418] = "pyjamas.DOM.py, line 418:\n    left += elem.offsetLeft - elem.scrollLeft";
	pyjamas['DOM'].__track_lines__[419] = "pyjamas.DOM.py, line 419:\n    elem = elem.offsetParent";
	pyjamas['DOM'].__track_lines__[421] = "pyjamas.DOM.py, line 421:\n    return left";
	pyjamas['DOM'].__track_lines__[424] = "pyjamas.DOM.py, line 424:\n    def getAbsoluteTop(elem):";
	pyjamas['DOM'].__track_lines__[425] = "pyjamas.DOM.py, line 425:\n    top = 0";
	pyjamas['DOM'].__track_lines__[426] = "pyjamas.DOM.py, line 426:\n    curr = elem";
	pyjamas['DOM'].__track_lines__[427] = "pyjamas.DOM.py, line 427:\n    while curr.offsetParent:";
	pyjamas['DOM'].__track_lines__[428] = "pyjamas.DOM.py, line 428:\n    top -= curr.scrollTop";
	pyjamas['DOM'].__track_lines__[429] = "pyjamas.DOM.py, line 429:\n    curr = curr.parentNode";
	pyjamas['DOM'].__track_lines__[431] = "pyjamas.DOM.py, line 431:\n    while elem:";
	pyjamas['DOM'].__track_lines__[432] = "pyjamas.DOM.py, line 432:\n    top += elem.offsetTop - elem.scrollTop";
	pyjamas['DOM'].__track_lines__[433] = "pyjamas.DOM.py, line 433:\n    elem = elem.offsetParent";
	pyjamas['DOM'].__track_lines__[435] = "pyjamas.DOM.py, line 435:\n    return top";
	pyjamas['DOM'].__track_lines__[438] = "pyjamas.DOM.py, line 438:\n    def getAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[439] = "pyjamas.DOM.py, line 439:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[440] = "pyjamas.DOM.py, line 440:\n    return str(getattr(elem, attr))";
	pyjamas['DOM'].__track_lines__[443] = "pyjamas.DOM.py, line 443:\n    def getElemAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[444] = "pyjamas.DOM.py, line 444:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[445] = "pyjamas.DOM.py, line 445:\n    if not elem.hasAttribute(attr):";
	pyjamas['DOM'].__track_lines__[446] = "pyjamas.DOM.py, line 446:\n    return str(getattr(elem, mf.mash_attrib(attr)))";
	pyjamas['DOM'].__track_lines__[447] = "pyjamas.DOM.py, line 447:\n    return str(elem.getAttribute(attr))";
	pyjamas['DOM'].__track_lines__[450] = "pyjamas.DOM.py, line 450:\n    def getBooleanAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[451] = "pyjamas.DOM.py, line 451:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[452] = "pyjamas.DOM.py, line 452:\n    return bool(getattr(elem, mf.mash_attrib(attr)))";
	pyjamas['DOM'].__track_lines__[455] = "pyjamas.DOM.py, line 455:\n    def getBooleanElemAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[456] = "pyjamas.DOM.py, line 456:\n    if not elem.hasAttribute(attr):";
	pyjamas['DOM'].__track_lines__[457] = "pyjamas.DOM.py, line 457:\n    return None";
	pyjamas['DOM'].__track_lines__[458] = "pyjamas.DOM.py, line 458:\n    return bool(elem.getAttribute(attr))";
	pyjamas['DOM'].__track_lines__[461] = "pyjamas.DOM.py, line 461:\n    def getCaptureElement():";
	pyjamas['DOM'].__track_lines__[462] = "pyjamas.DOM.py, line 462:\n    return sCaptureElem";
	pyjamas['DOM'].__track_lines__[465] = "pyjamas.DOM.py, line 465:\n    def getChild(elem, index):";
	pyjamas['DOM'].__track_lines__[469] = "pyjamas.DOM.py, line 469:\n    count = 0";
	pyjamas['DOM'].__track_lines__[470] = "pyjamas.DOM.py, line 470:\n    child = elem.firstChild";
	pyjamas['DOM'].__track_lines__[471] = "pyjamas.DOM.py, line 471:\n    while child:";
	pyjamas['DOM'].__track_lines__[472] = "pyjamas.DOM.py, line 472:\n    next = child.nextSibling";
	pyjamas['DOM'].__track_lines__[473] = "pyjamas.DOM.py, line 473:\n    if child.nodeType == 1:";
	pyjamas['DOM'].__track_lines__[474] = "pyjamas.DOM.py, line 474:\n    if index == count:";
	pyjamas['DOM'].__track_lines__[475] = "pyjamas.DOM.py, line 475:\n    return child";
	pyjamas['DOM'].__track_lines__[476] = "pyjamas.DOM.py, line 476:\n    count += 1";
	pyjamas['DOM'].__track_lines__[477] = "pyjamas.DOM.py, line 477:\n    child = next";
	pyjamas['DOM'].__track_lines__[478] = "pyjamas.DOM.py, line 478:\n    return None";
	pyjamas['DOM'].__track_lines__[481] = "pyjamas.DOM.py, line 481:\n    def getChildCount(elem):";
	pyjamas['DOM'].__track_lines__[486] = "pyjamas.DOM.py, line 486:\n    count = 0";
	pyjamas['DOM'].__track_lines__[487] = "pyjamas.DOM.py, line 487:\n    child = elem.firstChild";
	pyjamas['DOM'].__track_lines__[488] = "pyjamas.DOM.py, line 488:\n    while child:";
	pyjamas['DOM'].__track_lines__[489] = "pyjamas.DOM.py, line 489:\n    if child.nodeType == 1:";
	pyjamas['DOM'].__track_lines__[490] = "pyjamas.DOM.py, line 490:\n    count += 1";
	pyjamas['DOM'].__track_lines__[491] = "pyjamas.DOM.py, line 491:\n    child = child.nextSibling";
	pyjamas['DOM'].__track_lines__[492] = "pyjamas.DOM.py, line 492:\n    return count";
	pyjamas['DOM'].__track_lines__[495] = "pyjamas.DOM.py, line 495:\n    def getChildIndex(parent, toFind):";
	pyjamas['DOM'].__track_lines__[501] = "pyjamas.DOM.py, line 501:\n    count = 0";
	pyjamas['DOM'].__track_lines__[502] = "pyjamas.DOM.py, line 502:\n    child = parent.firstChild";
	pyjamas['DOM'].__track_lines__[503] = "pyjamas.DOM.py, line 503:\n    while child:";
	pyjamas['DOM'].__track_lines__[504] = "pyjamas.DOM.py, line 504:\n    if child == toFind:";
	pyjamas['DOM'].__track_lines__[505] = "pyjamas.DOM.py, line 505:\n    return count";
	pyjamas['DOM'].__track_lines__[506] = "pyjamas.DOM.py, line 506:\n    if child.nodeType == 1:";
	pyjamas['DOM'].__track_lines__[507] = "pyjamas.DOM.py, line 507:\n    count += 1";
	pyjamas['DOM'].__track_lines__[508] = "pyjamas.DOM.py, line 508:\n    child = child.nextSibling";
	pyjamas['DOM'].__track_lines__[510] = "pyjamas.DOM.py, line 510:\n    return -1";
	pyjamas['DOM'].__track_lines__[513] = "pyjamas.DOM.py, line 513:\n    def getElementById(id):";
	pyjamas['DOM'].__track_lines__[517] = "pyjamas.DOM.py, line 517:\n    return doc().getElementById(id)";
	pyjamas['DOM'].__track_lines__[520] = "pyjamas.DOM.py, line 520:\n    def getEventListener(element):";
	pyjamas['DOM'].__track_lines__[524] = "pyjamas.DOM.py, line 524:\n    return get_listener(element)";
	pyjamas['DOM'].__track_lines__[526] = "pyjamas.DOM.py, line 526:\n    eventbitsmap = {}";
	pyjamas['DOM'].__track_lines__[529] = "pyjamas.DOM.py, line 529:\n    def getEventsSunk(element):";
	pyjamas['DOM'].__track_lines__[534] = "pyjamas.DOM.py, line 534:\n    return eventbitsmap.get(element, 0)";
	pyjamas['DOM'].__track_lines__[537] = "pyjamas.DOM.py, line 537:\n    def getFirstChild(elem):";
	pyjamas['DOM'].__track_lines__[538] = "pyjamas.DOM.py, line 538:\n    child = elem and elem.firstChild";
	pyjamas['DOM'].__track_lines__[539] = "pyjamas.DOM.py, line 539:\n    while child and child.nodeType != 1:";
	pyjamas['DOM'].__track_lines__[540] = "pyjamas.DOM.py, line 540:\n    child = child.nextSibling";
	pyjamas['DOM'].__track_lines__[541] = "pyjamas.DOM.py, line 541:\n    return child";
	pyjamas['DOM'].__track_lines__[544] = "pyjamas.DOM.py, line 544:\n    def getInnerHTML(element):";
	pyjamas['DOM'].__track_lines__[545] = "pyjamas.DOM.py, line 545:\n    try:";
	pyjamas['DOM'].__track_lines__[546] = "pyjamas.DOM.py, line 546:\n    return element and element.innerHtml # webkit. erk.";
	pyjamas['DOM'].__track_lines__[548] = "pyjamas.DOM.py, line 548:\n    return element and element.innerHTML # hulahop / xul.  yuk.";
	pyjamas['DOM'].__track_lines__[551] = "pyjamas.DOM.py, line 551:\n    def getInnerText(element):";
	pyjamas['DOM'].__track_lines__[554] = "pyjamas.DOM.py, line 554:\n    text = \'\'";
	pyjamas['DOM'].__track_lines__[555] = "pyjamas.DOM.py, line 555:\n    child = element.firstChild";
	pyjamas['DOM'].__track_lines__[556] = "pyjamas.DOM.py, line 556:\n    while child:";
	pyjamas['DOM'].__track_lines__[557] = "pyjamas.DOM.py, line 557:\n    if child.nodeType == 1:";
	pyjamas['DOM'].__track_lines__[558] = "pyjamas.DOM.py, line 558:\n    text += child.getInnerText()";
	pyjamas['DOM'].__track_lines__[560] = "pyjamas.DOM.py, line 560:\n    text += child.nodeValue";
	pyjamas['DOM'].__track_lines__[561] = "pyjamas.DOM.py, line 561:\n    child = child.nextSibling";
	pyjamas['DOM'].__track_lines__[562] = "pyjamas.DOM.py, line 562:\n    return text";
	pyjamas['DOM'].__track_lines__[565] = "pyjamas.DOM.py, line 565:\n    def getIntAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[566] = "pyjamas.DOM.py, line 566:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[567] = "pyjamas.DOM.py, line 567:\n    return int(getattr(elem, attr))";
	pyjamas['DOM'].__track_lines__[570] = "pyjamas.DOM.py, line 570:\n    def getIntElemAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[571] = "pyjamas.DOM.py, line 571:\n    if not elem.hasAttribute(attr):";
	pyjamas['DOM'].__track_lines__[572] = "pyjamas.DOM.py, line 572:\n    return None";
	pyjamas['DOM'].__track_lines__[573] = "pyjamas.DOM.py, line 573:\n    return int(elem.getAttribute(attr))";
	pyjamas['DOM'].__track_lines__[576] = "pyjamas.DOM.py, line 576:\n    def getIntStyleAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[577] = "pyjamas.DOM.py, line 577:\n    return getIntAttribute(elem.style, attr)";
	pyjamas['DOM'].__track_lines__[580] = "pyjamas.DOM.py, line 580:\n    def getNextSibling(elem):";
	pyjamas['DOM'].__track_lines__[581] = "pyjamas.DOM.py, line 581:\n    sib = elem.nextSibling";
	pyjamas['DOM'].__track_lines__[582] = "pyjamas.DOM.py, line 582:\n    while sib and sib.nodeType != 1:";
	pyjamas['DOM'].__track_lines__[583] = "pyjamas.DOM.py, line 583:\n    sib = sib.nextSibling";
	pyjamas['DOM'].__track_lines__[584] = "pyjamas.DOM.py, line 584:\n    return sib";
	pyjamas['DOM'].__track_lines__[587] = "pyjamas.DOM.py, line 587:\n    def getNodeType(elem):";
	pyjamas['DOM'].__track_lines__[588] = "pyjamas.DOM.py, line 588:\n    return elem.nodeType";
	pyjamas['DOM'].__track_lines__[591] = "pyjamas.DOM.py, line 591:\n    def getParent(elem):";
	pyjamas['DOM'].__track_lines__[592] = "pyjamas.DOM.py, line 592:\n    parent = elem.parentNode";
	pyjamas['DOM'].__track_lines__[593] = "pyjamas.DOM.py, line 593:\n    if parent is None:";
	pyjamas['DOM'].__track_lines__[594] = "pyjamas.DOM.py, line 594:\n    return None";
	pyjamas['DOM'].__track_lines__[595] = "pyjamas.DOM.py, line 595:\n    if getNodeType(parent) != 1:";
	pyjamas['DOM'].__track_lines__[596] = "pyjamas.DOM.py, line 596:\n    return None";
	pyjamas['DOM'].__track_lines__[597] = "pyjamas.DOM.py, line 597:\n    return parent";
	pyjamas['DOM'].__track_lines__[600] = "pyjamas.DOM.py, line 600:\n    def getStyleAttribute(elem, attr):";
	pyjamas['DOM'].__track_lines__[601] = "pyjamas.DOM.py, line 601:\n    try:";
	pyjamas['DOM'].__track_lines__[602] = "pyjamas.DOM.py, line 602:\n    if hasattr(element.style, \'getProperty\'):";
	pyjamas['DOM'].__track_lines__[603] = "pyjamas.DOM.py, line 603:\n    return elem.style.getProperty(mash_name_for_glib(attr))";
	pyjamas['DOM'].__track_lines__[604] = "pyjamas.DOM.py, line 604:\n    return elem.style.getAttribute(attr)";
	pyjamas['DOM'].__track_lines__[606] = "pyjamas.DOM.py, line 606:\n    return None";
	pyjamas['DOM'].__track_lines__[609] = "pyjamas.DOM.py, line 609:\n    def insertChild(parent, toAdd, index):";
	pyjamas['DOM'].__track_lines__[610] = "pyjamas.DOM.py, line 610:\n    count = 0";
	pyjamas['DOM'].__track_lines__[611] = "pyjamas.DOM.py, line 611:\n    child = parent.firstChild";
	pyjamas['DOM'].__track_lines__[612] = "pyjamas.DOM.py, line 612:\n    before = None";
	pyjamas['DOM'].__track_lines__[613] = "pyjamas.DOM.py, line 613:\n    while child:";
	pyjamas['DOM'].__track_lines__[614] = "pyjamas.DOM.py, line 614:\n    if child.nodeType == 1:";
	pyjamas['DOM'].__track_lines__[615] = "pyjamas.DOM.py, line 615:\n    if (count == index):";
	pyjamas['DOM'].__track_lines__[616] = "pyjamas.DOM.py, line 616:\n    before = child";
	pyjamas['DOM'].__track_lines__[617] = "pyjamas.DOM.py, line 617:\n    break";
	pyjamas['DOM'].__track_lines__[619] = "pyjamas.DOM.py, line 619:\n    count += 1";
	pyjamas['DOM'].__track_lines__[620] = "pyjamas.DOM.py, line 620:\n    child = child.nextSibling";
	pyjamas['DOM'].__track_lines__[622] = "pyjamas.DOM.py, line 622:\n    if before is None:";
	pyjamas['DOM'].__track_lines__[623] = "pyjamas.DOM.py, line 623:\n    parent.appendChild(toAdd)";
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
	pyjamas['DOM'].__track_lines__[649] = "pyjamas.DOM.py, line 649:\n    def iterChildren(elem):";
	pyjamas['DOM'].__track_lines__[654] = "pyjamas.DOM.py, line 654:\n    return IterChildrenClass(elem)";
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
	pyjamas['DOM'].__track_lines__[691] = "pyjamas.DOM.py, line 691:\n    def walkChildren(elem):";
	pyjamas['DOM'].__track_lines__[697] = "pyjamas.DOM.py, line 697:\n    return IterWalkChildren(elem)";
	pyjamas['DOM'].__track_lines__[700] = "pyjamas.DOM.py, line 700:\n    def isOrHasChild(parent, child):";
	pyjamas['DOM'].__track_lines__[701] = "pyjamas.DOM.py, line 701:\n    while child:";
	pyjamas['DOM'].__track_lines__[702] = "pyjamas.DOM.py, line 702:\n    if compare(parent, child):";
	pyjamas['DOM'].__track_lines__[703] = "pyjamas.DOM.py, line 703:\n    return True";
	pyjamas['DOM'].__track_lines__[704] = "pyjamas.DOM.py, line 704:\n    child = child.parentNode";
	pyjamas['DOM'].__track_lines__[705] = "pyjamas.DOM.py, line 705:\n    if not child:";
	pyjamas['DOM'].__track_lines__[706] = "pyjamas.DOM.py, line 706:\n    return False";
	pyjamas['DOM'].__track_lines__[707] = "pyjamas.DOM.py, line 707:\n    if child.nodeType != 1:";
	pyjamas['DOM'].__track_lines__[708] = "pyjamas.DOM.py, line 708:\n    child = None";
	pyjamas['DOM'].__track_lines__[709] = "pyjamas.DOM.py, line 709:\n    return False";
	pyjamas['DOM'].__track_lines__[712] = "pyjamas.DOM.py, line 712:\n    def releaseCapture(elem):";
	pyjamas['DOM'].__track_lines__[713] = "pyjamas.DOM.py, line 713:\n    global sCaptureElem";
	pyjamas['DOM'].__track_lines__[714] = "pyjamas.DOM.py, line 714:\n    if sCaptureElem and compare(elem, sCaptureElem):";
	pyjamas['DOM'].__track_lines__[715] = "pyjamas.DOM.py, line 715:\n    sCaptureElem = None";
	pyjamas['DOM'].__track_lines__[716] = "pyjamas.DOM.py, line 716:\n    return";
	pyjamas['DOM'].__track_lines__[719] = "pyjamas.DOM.py, line 719:\n    def removeChild(parent, child):";
	pyjamas['DOM'].__track_lines__[720] = "pyjamas.DOM.py, line 720:\n    parent.removeChild(child)";
	pyjamas['DOM'].__track_lines__[723] = "pyjamas.DOM.py, line 723:\n    def replaceChild(parent, newChild, oldChild):";
	pyjamas['DOM'].__track_lines__[724] = "pyjamas.DOM.py, line 724:\n    parent.replaceChild(newChild, oldChild)";
	pyjamas['DOM'].__track_lines__[727] = "pyjamas.DOM.py, line 727:\n    def removeEventPreview(preview):";
	pyjamas['DOM'].__track_lines__[728] = "pyjamas.DOM.py, line 728:\n    sEventPreviewStack.remove(preview)";
	pyjamas['DOM'].__track_lines__[731] = "pyjamas.DOM.py, line 731:\n    def getOffsetHeight(elem):";
	pyjamas['DOM'].__track_lines__[732] = "pyjamas.DOM.py, line 732:\n    return elem.offsetHeight";
	pyjamas['DOM'].__track_lines__[735] = "pyjamas.DOM.py, line 735:\n    def getOffsetWidth(elem):";
	pyjamas['DOM'].__track_lines__[736] = "pyjamas.DOM.py, line 736:\n    return elem.offsetWidth";
	pyjamas['DOM'].__track_lines__[739] = "pyjamas.DOM.py, line 739:\n    def scrollIntoView(elem):";
	pyjamas['DOM'].__track_lines__[740] = "pyjamas.DOM.py, line 740:\n    left = elem.offsetLeft";
	pyjamas['DOM'].__track_lines__[741] = "pyjamas.DOM.py, line 741:\n    top = elem.offsetTop";
	pyjamas['DOM'].__track_lines__[742] = "pyjamas.DOM.py, line 742:\n    width = elem.offsetWidth";
	pyjamas['DOM'].__track_lines__[743] = "pyjamas.DOM.py, line 743:\n    height = elem.offsetHeight";
	pyjamas['DOM'].__track_lines__[745] = "pyjamas.DOM.py, line 745:\n    if elem.parentNode != elem.offsetParent:";
	pyjamas['DOM'].__track_lines__[746] = "pyjamas.DOM.py, line 746:\n    left -= elem.parentNode.offsetLeft";
	pyjamas['DOM'].__track_lines__[747] = "pyjamas.DOM.py, line 747:\n    top -= elem.parentNode.offsetTop";
	pyjamas['DOM'].__track_lines__[749] = "pyjamas.DOM.py, line 749:\n    cur = elem.parentNode";
	pyjamas['DOM'].__track_lines__[750] = "pyjamas.DOM.py, line 750:\n    while cur and cur.nodeType == 1:";
	pyjamas['DOM'].__track_lines__[751] = "pyjamas.DOM.py, line 751:\n    if hasattr(cur, \'style\') and hasattr(cur.style, \'overflow\') and \\";
	pyjamas['DOM'].__track_lines__[753] = "pyjamas.DOM.py, line 753:\n    if left < cur.scrollLeft:";
	pyjamas['DOM'].__track_lines__[754] = "pyjamas.DOM.py, line 754:\n    cur.scrollLeft = left";
	pyjamas['DOM'].__track_lines__[755] = "pyjamas.DOM.py, line 755:\n    if left + width > cur.scrollLeft + cur.clientWidth:";
	pyjamas['DOM'].__track_lines__[756] = "pyjamas.DOM.py, line 756:\n    cur.scrollLeft = (left + width) - cur.clientWidth";
	pyjamas['DOM'].__track_lines__[757] = "pyjamas.DOM.py, line 757:\n    if top < cur.scrollTop:";
	pyjamas['DOM'].__track_lines__[758] = "pyjamas.DOM.py, line 758:\n    cur.scrollTop = top";
	pyjamas['DOM'].__track_lines__[759] = "pyjamas.DOM.py, line 759:\n    if top + height > cur.scrollTop + cur.clientHeight:";
	pyjamas['DOM'].__track_lines__[760] = "pyjamas.DOM.py, line 760:\n    cur.scrollTop = (top + height) - cur.clientHeight";
	pyjamas['DOM'].__track_lines__[762] = "pyjamas.DOM.py, line 762:\n    offsetLeft = cur.offsetLeft";
	pyjamas['DOM'].__track_lines__[763] = "pyjamas.DOM.py, line 763:\n    offsetTop = cur.offsetTop";
	pyjamas['DOM'].__track_lines__[764] = "pyjamas.DOM.py, line 764:\n    if cur.parentNode != cur.offsetParent:";
	pyjamas['DOM'].__track_lines__[765] = "pyjamas.DOM.py, line 765:\n    if hasattr(cur.parentNode, \"offsetLeft\"):";
	pyjamas['DOM'].__track_lines__[766] = "pyjamas.DOM.py, line 766:\n    offsetLeft -= cur.parentNode.offsetLeft";
	pyjamas['DOM'].__track_lines__[767] = "pyjamas.DOM.py, line 767:\n    if hasattr(cur.parentNode, \"offsetTop\"):";
	pyjamas['DOM'].__track_lines__[768] = "pyjamas.DOM.py, line 768:\n    offsetTop -= cur.parentNode.offsetTop";
	pyjamas['DOM'].__track_lines__[770] = "pyjamas.DOM.py, line 770:\n    left += offsetLeft - cur.scrollLeft";
	pyjamas['DOM'].__track_lines__[771] = "pyjamas.DOM.py, line 771:\n    top += offsetTop - cur.scrollTop";
	pyjamas['DOM'].__track_lines__[772] = "pyjamas.DOM.py, line 772:\n    cur = cur.parentNode";
	pyjamas['DOM'].__track_lines__[775] = "pyjamas.DOM.py, line 775:\n    def mash_name_for_glib(name, joiner=\'-\'):";
	pyjamas['DOM'].__track_lines__[776] = "pyjamas.DOM.py, line 776:\n    res = \'\'";
	pyjamas['DOM'].__track_lines__[777] = "pyjamas.DOM.py, line 777:\n    for c in name:";
	pyjamas['DOM'].__track_lines__[778] = "pyjamas.DOM.py, line 778:\n    if c.isupper():";
	pyjamas['DOM'].__track_lines__[779] = "pyjamas.DOM.py, line 779:\n    res += joiner + c.lower()";
	pyjamas['DOM'].__track_lines__[781] = "pyjamas.DOM.py, line 781:\n    res += c";
	pyjamas['DOM'].__track_lines__[782] = "pyjamas.DOM.py, line 782:\n    return res";
	pyjamas['DOM'].__track_lines__[785] = "pyjamas.DOM.py, line 785:\n    def removeAttribute(element, attribute):";
	pyjamas['DOM'].__track_lines__[786] = "pyjamas.DOM.py, line 786:\n    elem.removeAttribute(attribute)";
	pyjamas['DOM'].__track_lines__[789] = "pyjamas.DOM.py, line 789:\n    def setAttribute(element, attribute, value):";
	pyjamas['DOM'].__track_lines__[790] = "pyjamas.DOM.py, line 790:\n    setattr(element, attribute, value)";
	pyjamas['DOM'].__track_lines__[793] = "pyjamas.DOM.py, line 793:\n    def setElemAttribute(element, attribute, value):";
	pyjamas['DOM'].__track_lines__[794] = "pyjamas.DOM.py, line 794:\n    element.setAttribute(attribute, value)";
	pyjamas['DOM'].__track_lines__[797] = "pyjamas.DOM.py, line 797:\n    def setBooleanAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[798] = "pyjamas.DOM.py, line 798:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[799] = "pyjamas.DOM.py, line 799:\n    setattr(elem, mf.mash_attrib(attr), value)";
	pyjamas['DOM'].__track_lines__[802] = "pyjamas.DOM.py, line 802:\n    def setCapture(elem):";
	pyjamas['DOM'].__track_lines__[803] = "pyjamas.DOM.py, line 803:\n    global sCaptureElem";
	pyjamas['DOM'].__track_lines__[804] = "pyjamas.DOM.py, line 804:\n    sCaptureElem = elem";
	pyjamas['DOM'].__track_lines__[808] = "pyjamas.DOM.py, line 808:\n    def setEventListener(element, listener):";
	pyjamas['DOM'].__track_lines__[815] = "pyjamas.DOM.py, line 815:\n    set_listener(element, listener)";
	pyjamas['DOM'].__track_lines__[818] = "pyjamas.DOM.py, line 818:\n    def setInnerHTML(element, html):";
	pyjamas['DOM'].__track_lines__[819] = "pyjamas.DOM.py, line 819:\n    try:";
	pyjamas['DOM'].__track_lines__[820] = "pyjamas.DOM.py, line 820:\n    element.innerHtml = html # webkit. yuk.";
	pyjamas['DOM'].__track_lines__[822] = "pyjamas.DOM.py, line 822:\n    element.innerHTML = html # hulahop / xul.  yukk.";
	pyjamas['DOM'].__track_lines__[825] = "pyjamas.DOM.py, line 825:\n    def setInnerText(elem, text):";
	pyjamas['DOM'].__track_lines__[827] = "pyjamas.DOM.py, line 827:\n    while elem.firstChild:";
	pyjamas['DOM'].__track_lines__[828] = "pyjamas.DOM.py, line 828:\n    elem.removeChild(elem.firstChild)";
	pyjamas['DOM'].__track_lines__[829] = "pyjamas.DOM.py, line 829:\n    elem.appendChild(doc().createTextNode(text or \'\'))";
	pyjamas['DOM'].__track_lines__[832] = "pyjamas.DOM.py, line 832:\n    def setIntElemAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[833] = "pyjamas.DOM.py, line 833:\n    elem.setAttribute(attr, str(value))";
	pyjamas['DOM'].__track_lines__[836] = "pyjamas.DOM.py, line 836:\n    def setIntAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[837] = "pyjamas.DOM.py, line 837:\n    setattr(elem, attr, int(value))";
	pyjamas['DOM'].__track_lines__[840] = "pyjamas.DOM.py, line 840:\n    def setIntStyleAttribute(elem, attr, value):";
	pyjamas['DOM'].__track_lines__[841] = "pyjamas.DOM.py, line 841:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[842] = "pyjamas.DOM.py, line 842:\n    if hasattr(elem.style, \'setProperty\'):";
	pyjamas['DOM'].__track_lines__[843] = "pyjamas.DOM.py, line 843:\n    elem.style.setProperty(mf.mash_attrib(attr), str(value), \"\")";
	pyjamas['DOM'].__track_lines__[845] = "pyjamas.DOM.py, line 845:\n    elem.style.setAttribute(mf.mash_attrib(attr), str(value), \"\")";
	pyjamas['DOM'].__track_lines__[848] = "pyjamas.DOM.py, line 848:\n    def setOptionText(select, text, index):";
	pyjamas['DOM'].__track_lines__[849] = "pyjamas.DOM.py, line 849:\n    option = select.options.item(index)";
	pyjamas['DOM'].__track_lines__[850] = "pyjamas.DOM.py, line 850:\n    option.textContent = text";
	pyjamas['DOM'].__track_lines__[853] = "pyjamas.DOM.py, line 853:\n    def setStyleAttribute(element, name, value):";
	pyjamas['DOM'].__track_lines__[854] = "pyjamas.DOM.py, line 854:\n    if hasattr(element.style, \'setProperty\'):";
	pyjamas['DOM'].__track_lines__[855] = "pyjamas.DOM.py, line 855:\n    element.style.setProperty(mash_name_for_glib(name), value, \"\")";
	pyjamas['DOM'].__track_lines__[857] = "pyjamas.DOM.py, line 857:\n    element.style.setAttribute(name, value, \"\")";
	pyjamas['DOM'].__track_lines__[860] = "pyjamas.DOM.py, line 860:\n    def sinkEvents(element, bits):";
	pyjamas['DOM'].__track_lines__[867] = "pyjamas.DOM.py, line 867:\n    mask = getEventsSunk(element) ^ bits";
	pyjamas['DOM'].__track_lines__[868] = "pyjamas.DOM.py, line 868:\n    eventbitsmap[element] = bits";
	pyjamas['DOM'].__track_lines__[869] = "pyjamas.DOM.py, line 869:\n    if not mask:";
	pyjamas['DOM'].__track_lines__[870] = "pyjamas.DOM.py, line 870:\n    return";
	pyjamas['DOM'].__track_lines__[872] = "pyjamas.DOM.py, line 872:\n    bits = mask";
	pyjamas['DOM'].__track_lines__[874] = "pyjamas.DOM.py, line 874:\n    if not bits:";
	pyjamas['DOM'].__track_lines__[875] = "pyjamas.DOM.py, line 875:\n    return";
	pyjamas['DOM'].__track_lines__[877] = "pyjamas.DOM.py, line 877:\n    cb = _dispatchEvent";
	pyjamas['DOM'].__track_lines__[878] = "pyjamas.DOM.py, line 878:\n    mf = get_main_frame()";
	pyjamas['DOM'].__track_lines__[879] = "pyjamas.DOM.py, line 879:\n    if (bits & 0x00001):";
	pyjamas['DOM'].__track_lines__[880] = "pyjamas.DOM.py, line 880:\n    mf.addEventListener(element, \"click\", cb)";
	pyjamas['DOM'].__track_lines__[881] = "pyjamas.DOM.py, line 881:\n    if (bits & 0x00002):";
	pyjamas['DOM'].__track_lines__[882] = "pyjamas.DOM.py, line 882:\n    mf.addEventListener(element, \"dblclick\", cb)";
	pyjamas['DOM'].__track_lines__[883] = "pyjamas.DOM.py, line 883:\n    if (bits & 0x00004):";
	pyjamas['DOM'].__track_lines__[884] = "pyjamas.DOM.py, line 884:\n    mf.addEventListener(element, \"mousedown\", cb)";
	pyjamas['DOM'].__track_lines__[885] = "pyjamas.DOM.py, line 885:\n    if (bits & 0x00008):";
	pyjamas['DOM'].__track_lines__[886] = "pyjamas.DOM.py, line 886:\n    mf.addEventListener(element, \"mouseup\", cb)";
	pyjamas['DOM'].__track_lines__[887] = "pyjamas.DOM.py, line 887:\n    if (bits & 0x00010):";
	pyjamas['DOM'].__track_lines__[888] = "pyjamas.DOM.py, line 888:\n    mf.addEventListener(element, \"mouseover\", cb)";
	pyjamas['DOM'].__track_lines__[889] = "pyjamas.DOM.py, line 889:\n    if (bits & 0x00020):";
	pyjamas['DOM'].__track_lines__[890] = "pyjamas.DOM.py, line 890:\n    mf.addEventListener(element, \"mouseout\", cb)";
	pyjamas['DOM'].__track_lines__[891] = "pyjamas.DOM.py, line 891:\n    if (bits & 0x00040):";
	pyjamas['DOM'].__track_lines__[892] = "pyjamas.DOM.py, line 892:\n    mf.addEventListener(element, \"mousemove\", cb)";
	pyjamas['DOM'].__track_lines__[893] = "pyjamas.DOM.py, line 893:\n    if (bits & 0x00080):";
	pyjamas['DOM'].__track_lines__[894] = "pyjamas.DOM.py, line 894:\n    mf.addEventListener(element, \"keydown\", cb)";
	pyjamas['DOM'].__track_lines__[895] = "pyjamas.DOM.py, line 895:\n    if (bits & 0x00100):";
	pyjamas['DOM'].__track_lines__[896] = "pyjamas.DOM.py, line 896:\n    mf.addEventListener(element, \"keypress\", cb)";
	pyjamas['DOM'].__track_lines__[897] = "pyjamas.DOM.py, line 897:\n    if (bits & 0x00200):";
	pyjamas['DOM'].__track_lines__[898] = "pyjamas.DOM.py, line 898:\n    mf.addEventListener(element, \"keyup\", cb)";
	pyjamas['DOM'].__track_lines__[899] = "pyjamas.DOM.py, line 899:\n    if (bits & 0x00400):";
	pyjamas['DOM'].__track_lines__[900] = "pyjamas.DOM.py, line 900:\n    mf.addEventListener(element, \"change\", cb)";
	pyjamas['DOM'].__track_lines__[901] = "pyjamas.DOM.py, line 901:\n    if (bits & 0x00800):";
	pyjamas['DOM'].__track_lines__[902] = "pyjamas.DOM.py, line 902:\n    mf.addEventListener(element, \"focus\", cb)";
	pyjamas['DOM'].__track_lines__[903] = "pyjamas.DOM.py, line 903:\n    if (bits & 0x01000):";
	pyjamas['DOM'].__track_lines__[904] = "pyjamas.DOM.py, line 904:\n    mf.addEventListener(element, \"blur\", cb)";
	pyjamas['DOM'].__track_lines__[905] = "pyjamas.DOM.py, line 905:\n    if (bits & 0x02000):";
	pyjamas['DOM'].__track_lines__[906] = "pyjamas.DOM.py, line 906:\n    mf.addEventListener(element, \"losecapture\", cb)";
	pyjamas['DOM'].__track_lines__[907] = "pyjamas.DOM.py, line 907:\n    if (bits & 0x04000):";
	pyjamas['DOM'].__track_lines__[908] = "pyjamas.DOM.py, line 908:\n    mf.addEventListener(element, \"scroll\", cb)";
	pyjamas['DOM'].__track_lines__[909] = "pyjamas.DOM.py, line 909:\n    if (bits & 0x08000):";
	pyjamas['DOM'].__track_lines__[910] = "pyjamas.DOM.py, line 910:\n    mf.addEventListener(element, \"load\", cb)";
	pyjamas['DOM'].__track_lines__[911] = "pyjamas.DOM.py, line 911:\n    if (bits & 0x10000):";
	pyjamas['DOM'].__track_lines__[912] = "pyjamas.DOM.py, line 912:\n    mf.addEventListener(element, \"error\", cb)";
	pyjamas['DOM'].__track_lines__[913] = "pyjamas.DOM.py, line 913:\n    if (bits & 0x20000):";
	pyjamas['DOM'].__track_lines__[914] = "pyjamas.DOM.py, line 914:\n    mf.addEventListener(element, \"contextmenu\", cb)";
	pyjamas['DOM'].__track_lines__[917] = "pyjamas.DOM.py, line 917:\n    def toString(elem):";
	pyjamas['DOM'].__track_lines__[918] = "pyjamas.DOM.py, line 918:\n    temp = elem.cloneNode(True)";
	pyjamas['DOM'].__track_lines__[919] = "pyjamas.DOM.py, line 919:\n    tempDiv = createDiv()";
	pyjamas['DOM'].__track_lines__[920] = "pyjamas.DOM.py, line 920:\n    tempDiv.appendChild(temp)";
	pyjamas['DOM'].__track_lines__[921] = "pyjamas.DOM.py, line 921:\n    outer = getInnerHTML(tempDiv)";
	pyjamas['DOM'].__track_lines__[922] = "pyjamas.DOM.py, line 922:\n    setInnerHTML(temp, \"\")";
	pyjamas['DOM'].__track_lines__[923] = "pyjamas.DOM.py, line 923:\n    return outer";
	pyjamas['DOM'].__track_lines__[927] = "pyjamas.DOM.py, line 927:\n    def dispatchEvent(event, element, listener):";
	pyjamas['DOM'].__track_lines__[928] = "pyjamas.DOM.py, line 928:\n    dispatchEventImpl(event, element, listener)";
	pyjamas['DOM'].__track_lines__[931] = "pyjamas.DOM.py, line 931:\n    def previewEvent(evt):";
	pyjamas['DOM'].__track_lines__[932] = "pyjamas.DOM.py, line 932:\n    ret = True";
	pyjamas['DOM'].__track_lines__[934] = "pyjamas.DOM.py, line 934:\n    if len(sEventPreviewStack) > 0:";
	pyjamas['DOM'].__track_lines__[935] = "pyjamas.DOM.py, line 935:\n    preview = sEventPreviewStack[len(sEventPreviewStack) - 1]";
	pyjamas['DOM'].__track_lines__[937] = "pyjamas.DOM.py, line 937:\n    ret = preview.onEventPreview(evt)";
	pyjamas['DOM'].__track_lines__[938] = "pyjamas.DOM.py, line 938:\n    if not ret:";
	pyjamas['DOM'].__track_lines__[941] = "pyjamas.DOM.py, line 941:\n    eventCancelBubble(evt, True)";
	pyjamas['DOM'].__track_lines__[942] = "pyjamas.DOM.py, line 942:\n    eventPreventDefault(evt)";
	pyjamas['DOM'].__track_lines__[944] = "pyjamas.DOM.py, line 944:\n    return ret";
	pyjamas['DOM'].__track_lines__[948] = "pyjamas.DOM.py, line 948:\n    def dispatchEventAndCatch(evt, elem, listener, handler):";
	pyjamas['DOM'].__track_lines__[949] = "pyjamas.DOM.py, line 949:\n    pass";
	pyjamas['DOM'].__track_lines__[951] = "pyjamas.DOM.py, line 951:\n    currentEvent = None";
	pyjamas['DOM'].__track_lines__[954] = "pyjamas.DOM.py, line 954:\n    def dispatchEventImpl(event, element, listener):";
	pyjamas['DOM'].__track_lines__[955] = "pyjamas.DOM.py, line 955:\n    global sCaptureElem";
	pyjamas['DOM'].__track_lines__[956] = "pyjamas.DOM.py, line 956:\n    global currentEvent";
	pyjamas['DOM'].__track_lines__[957] = "pyjamas.DOM.py, line 957:\n    if element == sCaptureElem:";
	pyjamas['DOM'].__track_lines__[958] = "pyjamas.DOM.py, line 958:\n    if eventGetType(event) == \"losecapture\":";
	pyjamas['DOM'].__track_lines__[959] = "pyjamas.DOM.py, line 959:\n    sCaptureElem = None";
	pyjamas['DOM'].__track_lines__[961] = "pyjamas.DOM.py, line 961:\n    prevCurrentEvent = currentEvent";
	pyjamas['DOM'].__track_lines__[962] = "pyjamas.DOM.py, line 962:\n    currentEvent = event";
	pyjamas['DOM'].__track_lines__[963] = "pyjamas.DOM.py, line 963:\n    listener.onBrowserEvent(event)";
	pyjamas['DOM'].__track_lines__[964] = "pyjamas.DOM.py, line 964:\n    currentEvent = prevCurrentEvent";
	pyjamas['DOM'].__track_lines__[967] = "pyjamas.DOM.py, line 967:\n    def eventGetCurrentEvent():";
	pyjamas['DOM'].__track_lines__[968] = "pyjamas.DOM.py, line 968:\n    return currentEvent";
	pyjamas['DOM'].__track_lines__[971] = "pyjamas.DOM.py, line 971:\n    def insertListItem(select, item, value, index):";
	pyjamas['DOM'].__track_lines__[972] = "pyjamas.DOM.py, line 972:\n    option = createElement(\"OPTION\")";
	pyjamas['DOM'].__track_lines__[973] = "pyjamas.DOM.py, line 973:\n    setInnerText(option, item)";
	pyjamas['DOM'].__track_lines__[974] = "pyjamas.DOM.py, line 974:\n    if value is not None:";
	pyjamas['DOM'].__track_lines__[975] = "pyjamas.DOM.py, line 975:\n    setAttribute(option, \"value\", value)";
	pyjamas['DOM'].__track_lines__[976] = "pyjamas.DOM.py, line 976:\n    if index == -1:";
	pyjamas['DOM'].__track_lines__[977] = "pyjamas.DOM.py, line 977:\n    appendChild(select, option)";
	pyjamas['DOM'].__track_lines__[979] = "pyjamas.DOM.py, line 979:\n    insertChild(select, option, index)";
	pyjamas['DOM'].__track_lines__[982] = "pyjamas.DOM.py, line 982:\n    def getBodyOffsetTop():";
	pyjamas['DOM'].__track_lines__[983] = "pyjamas.DOM.py, line 983:\n    return 0";
	pyjamas['DOM'].__track_lines__[986] = "pyjamas.DOM.py, line 986:\n    def getBodyOffsetLeft():";
	pyjamas['DOM'].__track_lines__[987] = "pyjamas.DOM.py, line 987:\n    return 0";
	pyjamas['DOM'].__track_lines__[990] = "pyjamas.DOM.py, line 990:\n    if sys.platform in [\'mozilla\', \'ie6\', \'opera\', \'oldmoz\', \'safari\']:";
	pyjamas['DOM'].__track_lines__[991] = "pyjamas.DOM.py, line 991:\n    init()";
	var $attr2,$attr1,$attr240,$attr239;

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
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:52};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=52;
		$pyjs.track.lineno=54;
		mf = (function(){var $pyjs_dbg_16_retry = 0;
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
            pyjslib['debugReport']("Module pyjamas.DOM at line 54 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
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
}return $pyjs_dbg_16_res})();
		$pyjs.track.lineno=55;
		(function(){var $pyjs_dbg_17_retry = 0;
try{var $pyjs_dbg_17_res=mf['_addWindowEventListener'](String('click'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_17_err){
    if ($pyjs_dbg_17_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 55 :\n" + $pyjs_dbg_17_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_17_retry) {
        case 1:
            $pyjs_dbg_17_res=mf['_addWindowEventListener'](String('click'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_17_err;
    }
}return $pyjs_dbg_17_res})();
		$pyjs.track.lineno=56;
		(function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=mf['_addWindowEventListener'](String('change'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 56 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=mf['_addWindowEventListener'](String('change'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})();
		$pyjs.track.lineno=57;
		(function(){var $pyjs_dbg_19_retry = 0;
try{var $pyjs_dbg_19_res=mf['_addWindowEventListener'](String('mouseout'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_19_err){
    if ($pyjs_dbg_19_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 57 :\n" + $pyjs_dbg_19_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_19_retry) {
        case 1:
            $pyjs_dbg_19_res=mf['_addWindowEventListener'](String('mouseout'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_19_err;
    }
}return $pyjs_dbg_19_res})();
		$pyjs.track.lineno=58;
		(function(){var $pyjs_dbg_20_retry = 0;
try{var $pyjs_dbg_20_res=mf['_addWindowEventListener'](String('mousedown'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_20_err){
    if ($pyjs_dbg_20_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 58 :\n" + $pyjs_dbg_20_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_20_retry) {
        case 1:
            $pyjs_dbg_20_res=mf['_addWindowEventListener'](String('mousedown'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_20_err;
    }
}return $pyjs_dbg_20_res})();
		$pyjs.track.lineno=59;
		(function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=mf['_addWindowEventListener'](String('mouseup'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 59 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=mf['_addWindowEventListener'](String('mouseup'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})();
		$pyjs.track.lineno=60;
		(function(){var $pyjs_dbg_22_retry = 0;
try{var $pyjs_dbg_22_res=mf['_addWindowEventListener'](String('resize'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_22_err){
    if ($pyjs_dbg_22_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 60 :\n" + $pyjs_dbg_22_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_22_retry) {
        case 1:
            $pyjs_dbg_22_res=mf['_addWindowEventListener'](String('resize'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_22_err;
    }
}return $pyjs_dbg_22_res})();
		$pyjs.track.lineno=61;
		(function(){var $pyjs_dbg_23_retry = 0;
try{var $pyjs_dbg_23_res=mf['_addWindowEventListener'](String('keyup'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_23_err){
    if ($pyjs_dbg_23_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 61 :\n" + $pyjs_dbg_23_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_23_retry) {
        case 1:
            $pyjs_dbg_23_res=mf['_addWindowEventListener'](String('keyup'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_23_err;
    }
}return $pyjs_dbg_23_res})();
		$pyjs.track.lineno=62;
		(function(){var $pyjs_dbg_24_retry = 0;
try{var $pyjs_dbg_24_res=mf['_addWindowEventListener'](String('keydown'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_24_err){
    if ($pyjs_dbg_24_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 62 :\n" + $pyjs_dbg_24_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_24_retry) {
        case 1:
            $pyjs_dbg_24_res=mf['_addWindowEventListener'](String('keydown'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_24_err;
    }
}return $pyjs_dbg_24_res})();
		$pyjs.track.lineno=63;
		(function(){var $pyjs_dbg_25_retry = 0;
try{var $pyjs_dbg_25_res=mf['_addWindowEventListener'](String('keypress'), pyjamas.DOM.browser_event_cb);}catch($pyjs_dbg_25_err){
    if ($pyjs_dbg_25_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 63 :\n" + $pyjs_dbg_25_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_25_retry) {
        case 1:
            $pyjs_dbg_25_res=mf['_addWindowEventListener'](String('keypress'), pyjamas.DOM.browser_event_cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_25_err;
    }
}return $pyjs_dbg_25_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
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
		if ((function(){var $pyjs_dbg_26_retry = 0;
try{var $pyjs_dbg_26_res=pyjslib['bool']((evt === null));}catch($pyjs_dbg_26_err){
    if ($pyjs_dbg_26_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 72 :\n" + $pyjs_dbg_26_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_26_retry) {
        case 1:
            $pyjs_dbg_26_res=pyjslib['bool']((evt === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_26_err;
    }
}return $pyjs_dbg_26_res})()) {
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
				sender = (function(){var $pyjs_dbg_28_retry = 0;
try{var $pyjs_dbg_28_res=(function(){var $pyjs_dbg_27_retry = 0;
try{var $pyjs_dbg_27_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_27_err){
    if ($pyjs_dbg_27_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 76 :\n" + $pyjs_dbg_27_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_27_retry) {
        case 1:
            $pyjs_dbg_27_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_27_err;
    }
}return $pyjs_dbg_27_res})()['gobject_wrap'](sender);}catch($pyjs_dbg_28_err){
    if ($pyjs_dbg_28_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 76 :\n" + $pyjs_dbg_28_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_28_retry) {
        case 1:
            $pyjs_dbg_28_res=(function(){var $pyjs_dbg_27_retry = 0;
try{var $pyjs_dbg_27_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_27_err){
    if ($pyjs_dbg_27_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 76 :\n" + $pyjs_dbg_27_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_27_retry) {
        case 1:
            $pyjs_dbg_27_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_27_err;
    }
}return $pyjs_dbg_27_res})()['gobject_wrap'](sender);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_28_err;
    }
}return $pyjs_dbg_28_res})();
				$pyjs.track.lineno=77;
				evt = (function(){var $pyjs_dbg_30_retry = 0;
try{var $pyjs_dbg_30_res=(function(){var $pyjs_dbg_29_retry = 0;
try{var $pyjs_dbg_29_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_29_err){
    if ($pyjs_dbg_29_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 77 :\n" + $pyjs_dbg_29_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_29_retry) {
        case 1:
            $pyjs_dbg_29_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_29_err;
    }
}return $pyjs_dbg_29_res})()['gobject_wrap'](evt);}catch($pyjs_dbg_30_err){
    if ($pyjs_dbg_30_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 77 :\n" + $pyjs_dbg_30_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_30_retry) {
        case 1:
            $pyjs_dbg_30_res=(function(){var $pyjs_dbg_29_retry = 0;
try{var $pyjs_dbg_29_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_29_err){
    if ($pyjs_dbg_29_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 77 :\n" + $pyjs_dbg_29_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_29_retry) {
        case 1:
            $pyjs_dbg_29_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_29_err;
    }
}return $pyjs_dbg_29_res})()['gobject_wrap'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_30_err;
    }
}return $pyjs_dbg_30_res})();
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
		cap = (function(){var $pyjs_dbg_31_retry = 0;
try{var $pyjs_dbg_31_res=pyjamas.DOM.getCaptureElement();}catch($pyjs_dbg_31_err){
    if ($pyjs_dbg_31_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 84 :\n" + $pyjs_dbg_31_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_31_retry) {
        case 1:
            $pyjs_dbg_31_res=pyjamas.DOM.getCaptureElement();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_31_err;
    }
}return $pyjs_dbg_31_res})();
		$pyjs.track.lineno=85;
		listener = (function(){var $pyjs_dbg_32_retry = 0;
try{var $pyjs_dbg_32_res=pyjamas['DOM']['get_listener'](cap);}catch($pyjs_dbg_32_err){
    if ($pyjs_dbg_32_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 85 :\n" + $pyjs_dbg_32_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_32_retry) {
        case 1:
            $pyjs_dbg_32_res=pyjamas['DOM']['get_listener'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_32_err;
    }
}return $pyjs_dbg_32_res})();
		$pyjs.track.lineno=86;
		if ((function(){var $pyjs_dbg_33_retry = 0;
try{var $pyjs_dbg_33_res=pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1));}catch($pyjs_dbg_33_err){
    if ($pyjs_dbg_33_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 86 :\n" + $pyjs_dbg_33_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_33_retry) {
        case 1:
            $pyjs_dbg_33_res=pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_33_err;
    }
}return $pyjs_dbg_33_res})()) {
			$pyjs.track.lineno=88;
			(function(){var $pyjs_dbg_34_retry = 0;
try{var $pyjs_dbg_34_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);}catch($pyjs_dbg_34_err){
    if ($pyjs_dbg_34_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 88 :\n" + $pyjs_dbg_34_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_34_retry) {
        case 1:
            $pyjs_dbg_34_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_34_err;
    }
}return $pyjs_dbg_34_res})();
			$pyjs.track.lineno=89;
			(function(){var $pyjs_dbg_35_retry = 0;
try{var $pyjs_dbg_35_res=evt['stopPropagation']();}catch($pyjs_dbg_35_err){
    if ($pyjs_dbg_35_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 89 :\n" + $pyjs_dbg_35_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_35_retry) {
        case 1:
            $pyjs_dbg_35_res=evt['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_35_err;
    }
}return $pyjs_dbg_35_res})();
			$pyjs.track.lineno=90;
			$pyjs.track.lineno=90;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=92;
		while ((function(){var $pyjs_dbg_37_retry = 0;
try{var $pyjs_dbg_37_res=pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool']((function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=pyjamas['DOM']['get_listener'](curElem);}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 92 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=pyjamas['DOM']['get_listener'](curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})()):$and3));}catch($pyjs_dbg_37_err){
    if ($pyjs_dbg_37_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 92 :\n" + $pyjs_dbg_37_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_37_retry) {
        case 1:
            $pyjs_dbg_37_res=pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool']((function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=pyjamas['DOM']['get_listener'](curElem);}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 92 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=pyjamas['DOM']['get_listener'](curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})()):$and3));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_37_err;
    }
}return $pyjs_dbg_37_res})()) {
			$pyjs.track.lineno=94;
			curElem = (function(){var $pyjs_dbg_38_retry = 0;
try{var $pyjs_dbg_38_res=pyjamas.DOM.getParent(curElem);}catch($pyjs_dbg_38_err){
    if ($pyjs_dbg_38_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 94 :\n" + $pyjs_dbg_38_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_38_retry) {
        case 1:
            $pyjs_dbg_38_res=pyjamas.DOM.getParent(curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_38_err;
    }
}return $pyjs_dbg_38_res})();
		}
		$pyjs.track.lineno=95;
		if ((function(){var $pyjs_dbg_40_retry = 0;
try{var $pyjs_dbg_40_res=pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq']((function(){var $pyjs_dbg_39_retry = 0;
try{var $pyjs_dbg_39_res=pyjamas.DOM.getNodeType(curElem);}catch($pyjs_dbg_39_err){
    if ($pyjs_dbg_39_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 95 :\n" + $pyjs_dbg_39_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_39_retry) {
        case 1:
            $pyjs_dbg_39_res=pyjamas.DOM.getNodeType(curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_39_err;
    }
}return $pyjs_dbg_39_res})(), 1):$and5));}catch($pyjs_dbg_40_err){
    if ($pyjs_dbg_40_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 95 :\n" + $pyjs_dbg_40_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_40_retry) {
        case 1:
            $pyjs_dbg_40_res=pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq']((function(){var $pyjs_dbg_39_retry = 0;
try{var $pyjs_dbg_39_res=pyjamas.DOM.getNodeType(curElem);}catch($pyjs_dbg_39_err){
    if ($pyjs_dbg_39_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 95 :\n" + $pyjs_dbg_39_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_39_retry) {
        case 1:
            $pyjs_dbg_39_res=pyjamas.DOM.getNodeType(curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_39_err;
    }
}return $pyjs_dbg_39_res})(), 1):$and5));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_40_err;
    }
}return $pyjs_dbg_40_res})()) {
			$pyjs.track.lineno=96;
			curElem = null;
		}
		$pyjs.track.lineno=98;
		listener = (function(){var $pyjs_dbg_41_retry = 0;
try{var $pyjs_dbg_41_res=pyjamas['DOM']['get_listener'](curElem);}catch($pyjs_dbg_41_err){
    if ($pyjs_dbg_41_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 98 :\n" + $pyjs_dbg_41_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_41_retry) {
        case 1:
            $pyjs_dbg_41_res=pyjamas['DOM']['get_listener'](curElem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_41_err;
    }
}return $pyjs_dbg_41_res})();
		$pyjs.track.lineno=99;
		if ((function(){var $pyjs_dbg_42_retry = 0;
try{var $pyjs_dbg_42_res=pyjslib['bool'](listener);}catch($pyjs_dbg_42_err){
    if ($pyjs_dbg_42_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 99 :\n" + $pyjs_dbg_42_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_42_retry) {
        case 1:
            $pyjs_dbg_42_res=pyjslib['bool'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_42_err;
    }
}return $pyjs_dbg_42_res})()) {
			$pyjs.track.lineno=100;
			(function(){var $pyjs_dbg_43_retry = 0;
try{var $pyjs_dbg_43_res=pyjamas.DOM.dispatchEvent(evt, curElem, listener);}catch($pyjs_dbg_43_err){
    if ($pyjs_dbg_43_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 100 :\n" + $pyjs_dbg_43_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_43_retry) {
        case 1:
            $pyjs_dbg_43_res=pyjamas.DOM.dispatchEvent(evt, curElem, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_43_err;
    }
}return $pyjs_dbg_43_res})();
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
		if ((function(){var $pyjs_dbg_45_retry = 0;
try{var $pyjs_dbg_45_res=pyjslib['bool']((function(){var $pyjs_dbg_44_retry = 0;
try{var $pyjs_dbg_44_res=pyjamas.DOM._dispatchCapturedEvent(evt);}catch($pyjs_dbg_44_err){
    if ($pyjs_dbg_44_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 105 :\n" + $pyjs_dbg_44_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_44_retry) {
        case 1:
            $pyjs_dbg_44_res=pyjamas.DOM._dispatchCapturedEvent(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_44_err;
    }
}return $pyjs_dbg_44_res})());}catch($pyjs_dbg_45_err){
    if ($pyjs_dbg_45_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 105 :\n" + $pyjs_dbg_45_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_45_retry) {
        case 1:
            $pyjs_dbg_45_res=pyjslib['bool']((function(){var $pyjs_dbg_44_retry = 0;
try{var $pyjs_dbg_44_res=pyjamas.DOM._dispatchCapturedEvent(evt);}catch($pyjs_dbg_44_err){
    if ($pyjs_dbg_44_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 105 :\n" + $pyjs_dbg_44_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_44_retry) {
        case 1:
            $pyjs_dbg_44_res=pyjamas.DOM._dispatchCapturedEvent(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_44_err;
    }
}return $pyjs_dbg_44_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_45_err;
    }
}return $pyjs_dbg_45_res})()) {
			$pyjs.track.lineno=106;
			cap = (function(){var $pyjs_dbg_46_retry = 0;
try{var $pyjs_dbg_46_res=pyjamas.DOM.getCaptureElement();}catch($pyjs_dbg_46_err){
    if ($pyjs_dbg_46_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 106 :\n" + $pyjs_dbg_46_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_46_retry) {
        case 1:
            $pyjs_dbg_46_res=pyjamas.DOM.getCaptureElement();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_46_err;
    }
}return $pyjs_dbg_46_res})();
			$pyjs.track.lineno=107;
			listener = (function(){var $pyjs_dbg_47_retry = 0;
try{var $pyjs_dbg_47_res=pyjamas['DOM']['get_listener'](cap);}catch($pyjs_dbg_47_err){
    if ($pyjs_dbg_47_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 107 :\n" + $pyjs_dbg_47_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_47_retry) {
        case 1:
            $pyjs_dbg_47_res=pyjamas['DOM']['get_listener'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_47_err;
    }
}return $pyjs_dbg_47_res})();
			$pyjs.track.lineno=108;
			if ((function(){var $pyjs_dbg_48_retry = 0;
try{var $pyjs_dbg_48_res=pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7));}catch($pyjs_dbg_48_err){
    if ($pyjs_dbg_48_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 108 :\n" + $pyjs_dbg_48_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_48_retry) {
        case 1:
            $pyjs_dbg_48_res=pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_48_err;
    }
}return $pyjs_dbg_48_res})()) {
				$pyjs.track.lineno=109;
				(function(){var $pyjs_dbg_49_retry = 0;
try{var $pyjs_dbg_49_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);}catch($pyjs_dbg_49_err){
    if ($pyjs_dbg_49_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 109 :\n" + $pyjs_dbg_49_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_49_retry) {
        case 1:
            $pyjs_dbg_49_res=pyjamas.DOM.dispatchEvent(evt, cap, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_49_err;
    }
}return $pyjs_dbg_49_res})();
				$pyjs.track.lineno=111;
				(function(){var $pyjs_dbg_50_retry = 0;
try{var $pyjs_dbg_50_res=evt['stopPropagation']();}catch($pyjs_dbg_50_err){
    if ($pyjs_dbg_50_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 111 :\n" + $pyjs_dbg_50_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_50_retry) {
        case 1:
            $pyjs_dbg_50_res=evt['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_50_err;
    }
}return $pyjs_dbg_50_res})();
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
		cap = (function(){var $pyjs_dbg_51_retry = 0;
try{var $pyjs_dbg_51_res=pyjamas.DOM.getCaptureElement();}catch($pyjs_dbg_51_err){
    if ($pyjs_dbg_51_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 115 :\n" + $pyjs_dbg_51_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_51_retry) {
        case 1:
            $pyjs_dbg_51_res=pyjamas.DOM.getCaptureElement();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_51_err;
    }
}return $pyjs_dbg_51_res})();
		$pyjs.track.lineno=116;
		if ((function(){var $pyjs_dbg_52_retry = 0;
try{var $pyjs_dbg_52_res=pyjslib['bool'](cap);}catch($pyjs_dbg_52_err){
    if ($pyjs_dbg_52_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 116 :\n" + $pyjs_dbg_52_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_52_retry) {
        case 1:
            $pyjs_dbg_52_res=pyjslib['bool'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_52_err;
    }
}return $pyjs_dbg_52_res})()) {
			$pyjs.track.lineno=118;
			if ((function(){var $pyjs_dbg_54_retry = 0;
try{var $pyjs_dbg_54_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_53_retry = 0;
try{var $pyjs_dbg_53_res=pyjamas.DOM.eventGetToElement(evt);}catch($pyjs_dbg_53_err){
    if ($pyjs_dbg_53_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 118 :\n" + $pyjs_dbg_53_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_53_retry) {
        case 1:
            $pyjs_dbg_53_res=pyjamas.DOM.eventGetToElement(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_53_err;
    }
}return $pyjs_dbg_53_res})()));}catch($pyjs_dbg_54_err){
    if ($pyjs_dbg_54_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 118 :\n" + $pyjs_dbg_54_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_54_retry) {
        case 1:
            $pyjs_dbg_54_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_53_retry = 0;
try{var $pyjs_dbg_53_res=pyjamas.DOM.eventGetToElement(evt);}catch($pyjs_dbg_53_err){
    if ($pyjs_dbg_53_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 118 :\n" + $pyjs_dbg_53_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_53_retry) {
        case 1:
            $pyjs_dbg_53_res=pyjamas.DOM.eventGetToElement(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_53_err;
    }
}return $pyjs_dbg_53_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_54_err;
    }
}return $pyjs_dbg_54_res})()) {
				$pyjs.track.lineno=122;
				(function(){var $pyjs_dbg_55_retry = 0;
try{var $pyjs_dbg_55_res=pyjamas.DOM.setCapture(null);}catch($pyjs_dbg_55_err){
    if ($pyjs_dbg_55_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 122 :\n" + $pyjs_dbg_55_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_55_retry) {
        case 1:
            $pyjs_dbg_55_res=pyjamas.DOM.setCapture(null);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_55_err;
    }
}return $pyjs_dbg_55_res})();
				$pyjs.track.lineno=123;
				listener = (function(){var $pyjs_dbg_56_retry = 0;
try{var $pyjs_dbg_56_res=pyjamas['DOM']['get_listener'](cap);}catch($pyjs_dbg_56_err){
    if ($pyjs_dbg_56_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 123 :\n" + $pyjs_dbg_56_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_56_retry) {
        case 1:
            $pyjs_dbg_56_res=pyjamas['DOM']['get_listener'](cap);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_56_err;
    }
}return $pyjs_dbg_56_res})();
				$pyjs.track.lineno=124;
				if ((function(){var $pyjs_dbg_57_retry = 0;
try{var $pyjs_dbg_57_res=pyjslib['bool'](listener);}catch($pyjs_dbg_57_err){
    if ($pyjs_dbg_57_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 124 :\n" + $pyjs_dbg_57_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_57_retry) {
        case 1:
            $pyjs_dbg_57_res=pyjslib['bool'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_57_err;
    }
}return $pyjs_dbg_57_res})()) {
					$pyjs.track.lineno=126;
					lcEvent = $doc['createEvent'](String('UIEvent'));
					$pyjs.track.lineno=127;
					lcEvent['initUIEvent'](String('losecapture'), false, false, $wnd, 0);
					$pyjs.track.lineno=128;
					(function(){var $pyjs_dbg_58_retry = 0;
try{var $pyjs_dbg_58_res=pyjamas.DOM.dispatchEvent(lcEvent, cap, listener);}catch($pyjs_dbg_58_err){
    if ($pyjs_dbg_58_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 128 :\n" + $pyjs_dbg_58_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_58_retry) {
        case 1:
            $pyjs_dbg_58_res=pyjamas.DOM.dispatchEvent(lcEvent, cap, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_58_err;
    }
}return $pyjs_dbg_58_res})();
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
			event = (function(){var $pyjs_dbg_60_retry = 0;
try{var $pyjs_dbg_60_res=(function(){var $pyjs_dbg_59_retry = 0;
try{var $pyjs_dbg_59_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_59_err){
    if ($pyjs_dbg_59_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 134 :\n" + $pyjs_dbg_59_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_59_retry) {
        case 1:
            $pyjs_dbg_59_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_59_err;
    }
}return $pyjs_dbg_59_res})()['gobject_wrap'](event);}catch($pyjs_dbg_60_err){
    if ($pyjs_dbg_60_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 134 :\n" + $pyjs_dbg_60_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_60_retry) {
        case 1:
            $pyjs_dbg_60_res=(function(){var $pyjs_dbg_59_retry = 0;
try{var $pyjs_dbg_59_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_59_err){
    if ($pyjs_dbg_59_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 134 :\n" + $pyjs_dbg_59_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_59_retry) {
        case 1:
            $pyjs_dbg_59_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_59_err;
    }
}return $pyjs_dbg_59_res})()['gobject_wrap'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_60_err;
    }
}return $pyjs_dbg_60_res})();
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
		et = (function(){var $pyjs_dbg_61_retry = 0;
try{var $pyjs_dbg_61_res=pyjamas.DOM.eventGetType(event);}catch($pyjs_dbg_61_err){
    if ($pyjs_dbg_61_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 138 :\n" + $pyjs_dbg_61_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_61_retry) {
        case 1:
            $pyjs_dbg_61_res=pyjamas.DOM.eventGetType(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_61_err;
    }
}return $pyjs_dbg_61_res})();
		$pyjs.track.lineno=140;
		if ((function(){var $pyjs_dbg_62_retry = 0;
try{var $pyjs_dbg_62_res=pyjslib['bool'](pyjslib['op_eq'](et, String('resize')));}catch($pyjs_dbg_62_err){
    if ($pyjs_dbg_62_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 140 :\n" + $pyjs_dbg_62_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_62_retry) {
        case 1:
            $pyjs_dbg_62_res=pyjslib['bool'](pyjslib['op_eq'](et, String('resize')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_62_err;
    }
}return $pyjs_dbg_62_res})()) {
			$pyjs.track.lineno=141;
			(function(){var $pyjs_dbg_63_retry = 0;
try{var $pyjs_dbg_63_res=pyjamas['DOM']['onResize']();}catch($pyjs_dbg_63_err){
    if ($pyjs_dbg_63_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 141 :\n" + $pyjs_dbg_63_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_63_retry) {
        case 1:
            $pyjs_dbg_63_res=pyjamas['DOM']['onResize']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_63_err;
    }
}return $pyjs_dbg_63_res})();
			$pyjs.track.lineno=142;
			$pyjs.track.lineno=142;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else if ((function(){var $pyjs_dbg_64_retry = 0;
try{var $pyjs_dbg_64_res=pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')));}catch($pyjs_dbg_64_err){
    if ($pyjs_dbg_64_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 143 :\n" + $pyjs_dbg_64_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_64_retry) {
        case 1:
            $pyjs_dbg_64_res=pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_64_err;
    }
}return $pyjs_dbg_64_res})()) {
			$pyjs.track.lineno=145;
			$pyjs.track.lineno=145;
			var $pyjs__ret = (function(){var $pyjs_dbg_65_retry = 0;
try{var $pyjs_dbg_65_res=pyjamas['DOM']['_dispatchCapturedMouseoutEvent'](event);}catch($pyjs_dbg_65_err){
    if ($pyjs_dbg_65_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 145 :\n" + $pyjs_dbg_65_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_65_retry) {
        case 1:
            $pyjs_dbg_65_res=pyjamas['DOM']['_dispatchCapturedMouseoutEvent'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_65_err;
    }
}return $pyjs_dbg_65_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else if ((function(){var $pyjs_dbg_66_retry = 0;
try{var $pyjs_dbg_66_res=pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))));}catch($pyjs_dbg_66_err){
    if ($pyjs_dbg_66_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 146 :\n" + $pyjs_dbg_66_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_66_retry) {
        case 1:
            $pyjs_dbg_66_res=pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_66_err;
    }
}return $pyjs_dbg_66_res})()) {
			$pyjs.track.lineno=148;
			$pyjs.track.lineno=148;
			var $pyjs__ret = (function(){var $pyjs_dbg_67_retry = 0;
try{var $pyjs_dbg_67_res=pyjamas.DOM._dispatchCapturedEvent(event);}catch($pyjs_dbg_67_err){
    if ($pyjs_dbg_67_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 148 :\n" + $pyjs_dbg_67_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_67_retry) {
        case 1:
            $pyjs_dbg_67_res=pyjamas.DOM._dispatchCapturedEvent(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_67_err;
    }
}return $pyjs_dbg_67_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else {
			$pyjs.track.lineno=150;
			$pyjs.track.lineno=150;
			var $pyjs__ret = (function(){var $pyjs_dbg_68_retry = 0;
try{var $pyjs_dbg_68_res=pyjamas['DOM']['_dispatchCapturedMouseEvent'](event);}catch($pyjs_dbg_68_err){
    if ($pyjs_dbg_68_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 150 :\n" + $pyjs_dbg_68_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_68_retry) {
        case 1:
            $pyjs_dbg_68_res=pyjamas['DOM']['_dispatchCapturedMouseEvent'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_68_err;
    }
}return $pyjs_dbg_68_res})();
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
		if ((function(){var $pyjs_dbg_70_retry = 0;
try{var $pyjs_dbg_70_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_69_retry = 0;
try{var $pyjs_dbg_69_res=pyjamas.DOM.previewEvent(event);}catch($pyjs_dbg_69_err){
    if ($pyjs_dbg_69_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 155 :\n" + $pyjs_dbg_69_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_69_retry) {
        case 1:
            $pyjs_dbg_69_res=pyjamas.DOM.previewEvent(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_69_err;
    }
}return $pyjs_dbg_69_res})()));}catch($pyjs_dbg_70_err){
    if ($pyjs_dbg_70_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 155 :\n" + $pyjs_dbg_70_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_70_retry) {
        case 1:
            $pyjs_dbg_70_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_69_retry = 0;
try{var $pyjs_dbg_69_res=pyjamas.DOM.previewEvent(event);}catch($pyjs_dbg_69_err){
    if ($pyjs_dbg_69_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 155 :\n" + $pyjs_dbg_69_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_69_retry) {
        case 1:
            $pyjs_dbg_69_res=pyjamas.DOM.previewEvent(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_69_err;
    }
}return $pyjs_dbg_69_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_70_err;
    }
}return $pyjs_dbg_70_res})()) {
			$pyjs.track.lineno=157;
			(function(){var $pyjs_dbg_71_retry = 0;
try{var $pyjs_dbg_71_res=event['stopPropagation']();}catch($pyjs_dbg_71_err){
    if ($pyjs_dbg_71_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 157 :\n" + $pyjs_dbg_71_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_71_retry) {
        case 1:
            $pyjs_dbg_71_res=event['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_71_err;
    }
}return $pyjs_dbg_71_res})();
			$pyjs.track.lineno=158;
			(function(){var $pyjs_dbg_72_retry = 0;
try{var $pyjs_dbg_72_res=pyjamas.DOM.eventPreventDefault(event);}catch($pyjs_dbg_72_err){
    if ($pyjs_dbg_72_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 158 :\n" + $pyjs_dbg_72_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_72_retry) {
        case 1:
            $pyjs_dbg_72_res=pyjamas.DOM.eventPreventDefault(event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_72_err;
    }
}return $pyjs_dbg_72_res})();
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
		$pyjs.track.lineno=164;
		(function(){var $pyjs_dbg_73_retry = 0;
try{var $pyjs_dbg_73_res=pyjamas['DOM']['sEventPreviewStack']['append'](preview);}catch($pyjs_dbg_73_err){
    if ($pyjs_dbg_73_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 164 :\n" + $pyjs_dbg_73_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_73_retry) {
        case 1:
            $pyjs_dbg_73_res=pyjamas['DOM']['sEventPreviewStack']['append'](preview);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_73_err;
    }
}return $pyjs_dbg_73_res})();
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
		(function(){var $pyjs_dbg_74_retry = 0;
try{var $pyjs_dbg_74_res=parent['appendChild'](child);}catch($pyjs_dbg_74_err){
    if ($pyjs_dbg_74_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 169 :\n" + $pyjs_dbg_74_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_74_retry) {
        case 1:
            $pyjs_dbg_74_res=parent['appendChild'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_74_err;
    }
}return $pyjs_dbg_74_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['appendChild'].__name__ = 'appendChild';

	pyjamas['DOM']['appendChild'].__bind_type__ = 0;
	pyjamas['DOM']['appendChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=172;
	pyjamas['DOM']['buttonClick'] = function(element) {
		var evt;
		$pyjs.track={module:'pyjamas.DOM',lineno:172};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=172;
		$pyjs.track.lineno=173;
		evt = $doc['createEvent'](String('MouseEvents'));
		$pyjs.track.lineno=174;
		evt['initMouseEvent'](String('click'), true, true, $wnd, 1, 0, 0, 0, 0, false, false, false, false, 0, element);
		$pyjs.track.lineno=176;
		(function(){var $pyjs_dbg_75_retry = 0;
try{var $pyjs_dbg_75_res=element['dispatchEvent'](evt);}catch($pyjs_dbg_75_err){
    if ($pyjs_dbg_75_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 176 :\n" + $pyjs_dbg_75_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_75_retry) {
        case 1:
            $pyjs_dbg_75_res=element['dispatchEvent'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_75_err;
    }
}return $pyjs_dbg_75_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['buttonClick'].__name__ = 'buttonClick';

	pyjamas['DOM']['buttonClick'].__bind_type__ = 0;
	pyjamas['DOM']['buttonClick'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=179;
	pyjamas['DOM']['compare'] = function(elem1, elem2) {

		$pyjs.track={module:'pyjamas.DOM',lineno:179};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=179;
		$pyjs.track.lineno=180;
		if ((function(){var $pyjs_dbg_77_retry = 0;
try{var $pyjs_dbg_77_res=pyjslib['bool']((function(){var $pyjs_dbg_76_retry = 0;
try{var $pyjs_dbg_76_res=pyjslib['hasattr'](elem1, String('isSameNode'));}catch($pyjs_dbg_76_err){
    if ($pyjs_dbg_76_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 180 :\n" + $pyjs_dbg_76_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_76_retry) {
        case 1:
            $pyjs_dbg_76_res=pyjslib['hasattr'](elem1, String('isSameNode'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_76_err;
    }
}return $pyjs_dbg_76_res})());}catch($pyjs_dbg_77_err){
    if ($pyjs_dbg_77_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 180 :\n" + $pyjs_dbg_77_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_77_retry) {
        case 1:
            $pyjs_dbg_77_res=pyjslib['bool']((function(){var $pyjs_dbg_76_retry = 0;
try{var $pyjs_dbg_76_res=pyjslib['hasattr'](elem1, String('isSameNode'));}catch($pyjs_dbg_76_err){
    if ($pyjs_dbg_76_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 180 :\n" + $pyjs_dbg_76_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_76_retry) {
        case 1:
            $pyjs_dbg_76_res=pyjslib['hasattr'](elem1, String('isSameNode'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_76_err;
    }
}return $pyjs_dbg_76_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_77_err;
    }
}return $pyjs_dbg_77_res})()) {
			$pyjs.track.lineno=181;
			$pyjs.track.lineno=181;
			var $pyjs__ret = (function(){var $pyjs_dbg_78_retry = 0;
try{var $pyjs_dbg_78_res=elem1['isSameNode'](elem2);}catch($pyjs_dbg_78_err){
    if ($pyjs_dbg_78_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 181 :\n" + $pyjs_dbg_78_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_78_retry) {
        case 1:
            $pyjs_dbg_78_res=elem1['isSameNode'](elem2);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_78_err;
    }
}return $pyjs_dbg_78_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=182;
		$pyjs.track.lineno=182;
		var $pyjs__ret = pyjslib['op_eq'](elem1, elem2);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		var $pyjs__ret = (function(){var $pyjs_dbg_79_retry = 0;
try{var $pyjs_dbg_79_res=pyjamas.DOM.createElement(String('A'));}catch($pyjs_dbg_79_err){
    if ($pyjs_dbg_79_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 186 :\n" + $pyjs_dbg_79_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_79_retry) {
        case 1:
            $pyjs_dbg_79_res=pyjamas.DOM.createElement(String('A'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_80_retry = 0;
try{var $pyjs_dbg_80_res=pyjamas.DOM.createElement(String('button'));}catch($pyjs_dbg_80_err){
    if ($pyjs_dbg_80_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 190 :\n" + $pyjs_dbg_80_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_80_retry) {
        case 1:
            $pyjs_dbg_80_res=pyjamas.DOM.createElement(String('button'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_81_retry = 0;
try{var $pyjs_dbg_81_res=pyjamas.DOM.createElement(String('col'));}catch($pyjs_dbg_81_err){
    if ($pyjs_dbg_81_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 194 :\n" + $pyjs_dbg_81_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_81_retry) {
        case 1:
            $pyjs_dbg_81_res=pyjamas.DOM.createElement(String('col'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_82_retry = 0;
try{var $pyjs_dbg_82_res=pyjamas.DOM.createElement(String('div'));}catch($pyjs_dbg_82_err){
    if ($pyjs_dbg_82_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 198 :\n" + $pyjs_dbg_82_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_82_retry) {
        case 1:
            $pyjs_dbg_82_res=pyjamas.DOM.createElement(String('div'));
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
	pyjamas['DOM']['createDiv'].__name__ = 'createDiv';

	pyjamas['DOM']['createDiv'].__bind_type__ = 0;
	pyjamas['DOM']['createDiv'].__args__ = [null,null];
	$pyjs.track.lineno=201;
	pyjamas['DOM']['createElement'] = function(tag) {

		$pyjs.track={module:'pyjamas.DOM',lineno:201};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=201;
		$pyjs.track.lineno=202;
		$pyjs.track.lineno=202;
		var $pyjs__ret = $doc['createElement'](tag);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		var $pyjs__ret = (function(){var $pyjs_dbg_83_retry = 0;
try{var $pyjs_dbg_83_res=pyjamas['DOM']['createElement'](String('fieldset'));}catch($pyjs_dbg_83_err){
    if ($pyjs_dbg_83_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 206 :\n" + $pyjs_dbg_83_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_83_retry) {
        case 1:
            $pyjs_dbg_83_res=pyjamas['DOM']['createElement'](String('fieldset'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_84_retry = 0;
try{var $pyjs_dbg_84_res=pyjamas['DOM']['createElement'](String('form'));}catch($pyjs_dbg_84_err){
    if ($pyjs_dbg_84_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 210 :\n" + $pyjs_dbg_84_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_84_retry) {
        case 1:
            $pyjs_dbg_84_res=pyjamas['DOM']['createElement'](String('form'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_85_retry = 0;
try{var $pyjs_dbg_85_res=pyjamas['DOM']['createElement'](String('iframe'));}catch($pyjs_dbg_85_err){
    if ($pyjs_dbg_85_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 214 :\n" + $pyjs_dbg_85_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_85_retry) {
        case 1:
            $pyjs_dbg_85_res=pyjamas['DOM']['createElement'](String('iframe'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_86_retry = 0;
try{var $pyjs_dbg_86_res=pyjamas['DOM']['createElement'](String('img'));}catch($pyjs_dbg_86_err){
    if ($pyjs_dbg_86_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 218 :\n" + $pyjs_dbg_86_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_86_retry) {
        case 1:
            $pyjs_dbg_86_res=pyjamas['DOM']['createElement'](String('img'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_86_err;
    }
}return $pyjs_dbg_86_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_87_retry = 0;
try{var $pyjs_dbg_87_res=pyjamas.DOM.createInputElement(String('checkbox'));}catch($pyjs_dbg_87_err){
    if ($pyjs_dbg_87_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 222 :\n" + $pyjs_dbg_87_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_87_retry) {
        case 1:
            $pyjs_dbg_87_res=pyjamas.DOM.createInputElement(String('checkbox'));
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
	pyjamas['DOM']['createInputCheck'].__name__ = 'createInputCheck';

	pyjamas['DOM']['createInputCheck'].__bind_type__ = 0;
	pyjamas['DOM']['createInputCheck'].__args__ = [null,null];
	$pyjs.track.lineno=225;
	pyjamas['DOM']['createInputElement'] = function(elementType) {
		var e;
		$pyjs.track={module:'pyjamas.DOM',lineno:225};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=225;
		$pyjs.track.lineno=226;
		e = (function(){var $pyjs_dbg_88_retry = 0;
try{var $pyjs_dbg_88_res=pyjamas['DOM']['createElement'](String('INPUT'));}catch($pyjs_dbg_88_err){
    if ($pyjs_dbg_88_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 226 :\n" + $pyjs_dbg_88_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_88_retry) {
        case 1:
            $pyjs_dbg_88_res=pyjamas['DOM']['createElement'](String('INPUT'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_88_err;
    }
}return $pyjs_dbg_88_res})();
		$pyjs.track.lineno=227;
		e.type = elementType;
		$pyjs.track.lineno=228;
		$pyjs.track.lineno=228;
		var $pyjs__ret = e;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		var $pyjs__ret = (function(){var $pyjs_dbg_89_retry = 0;
try{var $pyjs_dbg_89_res=pyjamas['DOM']['createInputElement'](String('password'));}catch($pyjs_dbg_89_err){
    if ($pyjs_dbg_89_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 232 :\n" + $pyjs_dbg_89_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_89_retry) {
        case 1:
            $pyjs_dbg_89_res=pyjamas['DOM']['createInputElement'](String('password'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_89_err;
    }
}return $pyjs_dbg_89_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['createInputPassword'].__name__ = 'createInputPassword';

	pyjamas['DOM']['createInputPassword'].__bind_type__ = 0;
	pyjamas['DOM']['createInputPassword'].__args__ = [null,null];
	$pyjs.track.lineno=235;
	pyjamas['DOM']['createInputRadio'] = function(group) {
		var e;
		$pyjs.track={module:'pyjamas.DOM',lineno:235};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=235;
		$pyjs.track.lineno=236;
		e = (function(){var $pyjs_dbg_90_retry = 0;
try{var $pyjs_dbg_90_res=pyjamas['DOM']['createInputElement'](String('radio'));}catch($pyjs_dbg_90_err){
    if ($pyjs_dbg_90_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 236 :\n" + $pyjs_dbg_90_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_90_retry) {
        case 1:
            $pyjs_dbg_90_res=pyjamas['DOM']['createInputElement'](String('radio'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_90_err;
    }
}return $pyjs_dbg_90_res})();
		$pyjs.track.lineno=237;
		e.$$name = group;
		$pyjs.track.lineno=238;
		$pyjs.track.lineno=238;
		var $pyjs__ret = e;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		var $pyjs__ret = (function(){var $pyjs_dbg_91_retry = 0;
try{var $pyjs_dbg_91_res=pyjamas['DOM']['createInputElement'](String('text'));}catch($pyjs_dbg_91_err){
    if ($pyjs_dbg_91_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 242 :\n" + $pyjs_dbg_91_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_91_retry) {
        case 1:
            $pyjs_dbg_91_res=pyjamas['DOM']['createInputElement'](String('text'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_91_err;
    }
}return $pyjs_dbg_91_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_92_retry = 0;
try{var $pyjs_dbg_92_res=pyjamas['DOM']['createElement'](String('label'));}catch($pyjs_dbg_92_err){
    if ($pyjs_dbg_92_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 246 :\n" + $pyjs_dbg_92_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_92_retry) {
        case 1:
            $pyjs_dbg_92_res=pyjamas['DOM']['createElement'](String('label'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_93_retry = 0;
try{var $pyjs_dbg_93_res=pyjamas['DOM']['createElement'](String('legend'));}catch($pyjs_dbg_93_err){
    if ($pyjs_dbg_93_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 250 :\n" + $pyjs_dbg_93_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_93_retry) {
        case 1:
            $pyjs_dbg_93_res=pyjamas['DOM']['createElement'](String('legend'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_93_err;
    }
}return $pyjs_dbg_93_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_94_retry = 0;
try{var $pyjs_dbg_94_res=pyjamas['DOM']['createElement'](String('options'));}catch($pyjs_dbg_94_err){
    if ($pyjs_dbg_94_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 254 :\n" + $pyjs_dbg_94_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_94_retry) {
        case 1:
            $pyjs_dbg_94_res=pyjamas['DOM']['createElement'](String('options'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_94_err;
    }
}return $pyjs_dbg_94_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_95_retry = 0;
try{var $pyjs_dbg_95_res=pyjamas['DOM']['createElement'](String('select'));}catch($pyjs_dbg_95_err){
    if ($pyjs_dbg_95_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 258 :\n" + $pyjs_dbg_95_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_95_retry) {
        case 1:
            $pyjs_dbg_95_res=pyjamas['DOM']['createElement'](String('select'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_95_err;
    }
}return $pyjs_dbg_95_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_96_retry = 0;
try{var $pyjs_dbg_96_res=pyjamas['DOM']['createElement'](String('span'));}catch($pyjs_dbg_96_err){
    if ($pyjs_dbg_96_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 262 :\n" + $pyjs_dbg_96_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_96_retry) {
        case 1:
            $pyjs_dbg_96_res=pyjamas['DOM']['createElement'](String('span'));
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
		var $pyjs__ret = (function(){var $pyjs_dbg_97_retry = 0;
try{var $pyjs_dbg_97_res=pyjamas['DOM']['createElement'](String('table'));}catch($pyjs_dbg_97_err){
    if ($pyjs_dbg_97_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 266 :\n" + $pyjs_dbg_97_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_97_retry) {
        case 1:
            $pyjs_dbg_97_res=pyjamas['DOM']['createElement'](String('table'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_97_err;
    }
}return $pyjs_dbg_97_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_98_retry = 0;
try{var $pyjs_dbg_98_res=pyjamas['DOM']['createElement'](String('tbody'));}catch($pyjs_dbg_98_err){
    if ($pyjs_dbg_98_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 270 :\n" + $pyjs_dbg_98_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_98_retry) {
        case 1:
            $pyjs_dbg_98_res=pyjamas['DOM']['createElement'](String('tbody'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_98_err;
    }
}return $pyjs_dbg_98_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_99_retry = 0;
try{var $pyjs_dbg_99_res=pyjamas['DOM']['createElement'](String('td'));}catch($pyjs_dbg_99_err){
    if ($pyjs_dbg_99_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 274 :\n" + $pyjs_dbg_99_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_99_retry) {
        case 1:
            $pyjs_dbg_99_res=pyjamas['DOM']['createElement'](String('td'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_99_err;
    }
}return $pyjs_dbg_99_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_100_retry = 0;
try{var $pyjs_dbg_100_res=pyjamas['DOM']['createElement'](String('textarea'));}catch($pyjs_dbg_100_err){
    if ($pyjs_dbg_100_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 278 :\n" + $pyjs_dbg_100_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_100_retry) {
        case 1:
            $pyjs_dbg_100_res=pyjamas['DOM']['createElement'](String('textarea'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_100_err;
    }
}return $pyjs_dbg_100_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_101_retry = 0;
try{var $pyjs_dbg_101_res=pyjamas['DOM']['createElement'](String('th'));}catch($pyjs_dbg_101_err){
    if ($pyjs_dbg_101_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 282 :\n" + $pyjs_dbg_101_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_101_retry) {
        case 1:
            $pyjs_dbg_101_res=pyjamas['DOM']['createElement'](String('th'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_101_err;
    }
}return $pyjs_dbg_101_res})();
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
		var $pyjs__ret = (function(){var $pyjs_dbg_102_retry = 0;
try{var $pyjs_dbg_102_res=pyjamas['DOM']['createElement'](String('tr'));}catch($pyjs_dbg_102_err){
    if ($pyjs_dbg_102_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 286 :\n" + $pyjs_dbg_102_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_102_retry) {
        case 1:
            $pyjs_dbg_102_res=pyjamas['DOM']['createElement'](String('tr'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_102_err;
    }
}return $pyjs_dbg_102_res})();
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
		$pyjs.track.lineno=290;
		(function(){var $pyjs_dbg_103_retry = 0;
try{var $pyjs_dbg_103_res=evt['stopPropagation']();}catch($pyjs_dbg_103_err){
    if ($pyjs_dbg_103_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 290 :\n" + $pyjs_dbg_103_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_103_retry) {
        case 1:
            $pyjs_dbg_103_res=evt['stopPropagation']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_103_err;
    }
}return $pyjs_dbg_103_res})();
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
		var $attr20,$attr19,$pyjs_try_err,err;
		$pyjs.track={module:'pyjamas.DOM',lineno:317};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=317;
		$pyjs.track.lineno=318;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=319;
			$pyjs.track.lineno=319;
			var $pyjs__ret = ((($attr19=evt['fromElement']) !== null & ($attr20=evt).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'fromElement'):
						evt['fromElement']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 318};
			sys.save_exception_stack();
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.__last_exception__.except_lineno = 321;
				err = $pyjs_try_err;
				$pyjs.track.lineno=321;
				$pyjs.track.lineno=321;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['eventGetFromElement'].__name__ = 'eventGetFromElement';

	pyjamas['DOM']['eventGetFromElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetFromElement'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=324;
	pyjamas['DOM']['eventGetKeyCode'] = function(evt) {
		var $or5,$or7,$or6,$attr21,$attr22,$attr23,$attr24;
		$pyjs.track={module:'pyjamas.DOM',lineno:324};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=324;
		$pyjs.track.lineno=325;
		$pyjs.track.lineno=325;
		var $pyjs__ret = (pyjslib['bool']($or5=((($attr21=evt['which']) !== null & ($attr22=evt).__is_instance__) && typeof $attr21 == 'function'?
					pyjslib['getattr']($attr22, 'which'):
					evt['which']))?$or5:(pyjslib['bool']($or6=((($attr23=evt['keyCode']) !== null & ($attr24=evt).__is_instance__) && typeof $attr23 == 'function'?
					pyjslib['getattr']($attr24, 'keyCode'):
					evt['keyCode']))?$or6:0));
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	pyjamas['DOM']['eventGetKeyCode'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=328;
	pyjamas['DOM']['eventGetRepeat'] = function(evt) {
		var $attr25,$attr26;
		$pyjs.track={module:'pyjamas.DOM',lineno:328};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=328;
		$pyjs.track.lineno=329;
		$pyjs.track.lineno=329;
		var $pyjs__ret = ((($attr25=evt['repeat']) !== null & ($attr26=evt).__is_instance__) && typeof $attr25 == 'function'?
					pyjslib['getattr']($attr26, 'repeat'):
					evt['repeat']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetRepeat'].__name__ = 'eventGetRepeat';

	pyjamas['DOM']['eventGetRepeat'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetRepeat'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=332;
	pyjamas['DOM']['eventGetScreenX'] = function(evt) {
		var $attr28,$attr27;
		$pyjs.track={module:'pyjamas.DOM',lineno:332};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=332;
		$pyjs.track.lineno=333;
		$pyjs.track.lineno=333;
		var $pyjs__ret = ((($attr27=evt['screenX']) !== null & ($attr28=evt).__is_instance__) && typeof $attr27 == 'function'?
					pyjslib['getattr']($attr28, 'screenX'):
					evt['screenX']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetScreenX'].__name__ = 'eventGetScreenX';

	pyjamas['DOM']['eventGetScreenX'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenX'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=336;
	pyjamas['DOM']['eventGetScreenY'] = function(evt) {
		var $attr29,$attr30;
		$pyjs.track={module:'pyjamas.DOM',lineno:336};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=336;
		$pyjs.track.lineno=337;
		$pyjs.track.lineno=337;
		var $pyjs__ret = ((($attr29=evt['screenY']) !== null & ($attr30=evt).__is_instance__) && typeof $attr29 == 'function'?
					pyjslib['getattr']($attr30, 'screenY'):
					evt['screenY']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetScreenY'].__name__ = 'eventGetScreenY';

	pyjamas['DOM']['eventGetScreenY'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetScreenY'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=340;
	pyjamas['DOM']['eventGetShiftKey'] = function(evt) {
		var $attr32,$attr31;
		$pyjs.track={module:'pyjamas.DOM',lineno:340};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=340;
		$pyjs.track.lineno=341;
		$pyjs.track.lineno=341;
		var $pyjs__ret = ((($attr31=evt['shiftKey']) !== null & ($attr32=evt).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'shiftKey'):
					evt['shiftKey']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	pyjamas['DOM']['eventGetShiftKey'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=344;
	pyjamas['DOM']['eventGetCurrentTarget'] = function(event) {
		var $attr33,$attr34;
		$pyjs.track={module:'pyjamas.DOM',lineno:344};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=344;
		$pyjs.track.lineno=345;
		$pyjs.track.lineno=345;
		var $pyjs__ret = ((($attr33=event['currentTarget']) !== null & ($attr34=event).__is_instance__) && typeof $attr33 == 'function'?
					pyjslib['getattr']($attr34, 'currentTarget'):
					event['currentTarget']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	pyjamas['DOM']['eventGetCurrentTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=348;
	pyjamas['DOM']['eventGetTarget'] = function(event) {
		var $attr35,$attr36;
		$pyjs.track={module:'pyjamas.DOM',lineno:348};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=348;
		$pyjs.track.lineno=349;
		$pyjs.track.lineno=349;
		var $pyjs__ret = ((($attr35=event['target']) !== null & ($attr36=event).__is_instance__) && typeof $attr35 == 'function'?
					pyjslib['getattr']($attr36, 'target'):
					event['target']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetTarget'].__name__ = 'eventGetTarget';

	pyjamas['DOM']['eventGetTarget'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetTarget'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=352;
	pyjamas['DOM']['eventGetToElement'] = function(evt) {
		var $attr37,$attr40,$attr39,$attr38,type;
		$pyjs.track={module:'pyjamas.DOM',lineno:352};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=352;
		$pyjs.track.lineno=353;
		type = (function(){var $pyjs_dbg_104_retry = 0;
try{var $pyjs_dbg_104_res=pyjamas.DOM.eventGetType(evt);}catch($pyjs_dbg_104_err){
    if ($pyjs_dbg_104_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 353 :\n" + $pyjs_dbg_104_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_104_retry) {
        case 1:
            $pyjs_dbg_104_res=pyjamas.DOM.eventGetType(evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_104_err;
    }
}return $pyjs_dbg_104_res})();
		$pyjs.track.lineno=354;
		if ((function(){var $pyjs_dbg_105_retry = 0;
try{var $pyjs_dbg_105_res=pyjslib['bool'](pyjslib['op_eq'](type, String('mouseout')));}catch($pyjs_dbg_105_err){
    if ($pyjs_dbg_105_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 354 :\n" + $pyjs_dbg_105_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_105_retry) {
        case 1:
            $pyjs_dbg_105_res=pyjslib['bool'](pyjslib['op_eq'](type, String('mouseout')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_105_err;
    }
}return $pyjs_dbg_105_res})()) {
			$pyjs.track.lineno=355;
			$pyjs.track.lineno=355;
			var $pyjs__ret = ((($attr37=evt['relatedTarget']) !== null & ($attr38=evt).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'relatedTarget'):
						evt['relatedTarget']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else if ((function(){var $pyjs_dbg_106_retry = 0;
try{var $pyjs_dbg_106_res=pyjslib['bool'](pyjslib['op_eq'](type, String('mouseover')));}catch($pyjs_dbg_106_err){
    if ($pyjs_dbg_106_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 356 :\n" + $pyjs_dbg_106_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_106_retry) {
        case 1:
            $pyjs_dbg_106_res=pyjslib['bool'](pyjslib['op_eq'](type, String('mouseover')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_106_err;
    }
}return $pyjs_dbg_106_res})()) {
			$pyjs.track.lineno=357;
			$pyjs.track.lineno=357;
			var $pyjs__ret = ((($attr39=evt['target']) !== null & ($attr40=evt).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'target'):
						evt['target']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=358;
		$pyjs.track.lineno=358;
		var $pyjs__ret = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetToElement'].__name__ = 'eventGetToElement';

	pyjamas['DOM']['eventGetToElement'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetToElement'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=361;
	pyjamas['DOM']['eventGetType'] = function(event) {
		var $attr42,$attr41;
		$pyjs.track={module:'pyjamas.DOM',lineno:361};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=361;
		$pyjs.track.lineno=362;
		$pyjs.track.lineno=362;
		var $pyjs__ret = ((($attr41=event['type']) !== null & ($attr42=event).__is_instance__) && typeof $attr41 == 'function'?
					pyjslib['getattr']($attr42, 'type'):
					event['type']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetType'].__name__ = 'eventGetType';

	pyjamas['DOM']['eventGetType'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetType'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=364;
	pyjamas['DOM']['eventmap'] = (function(){var $pyjs_dbg_107_retry = 0;
try{var $pyjs_dbg_107_res=pyjslib['dict']([[String('blur'), 4096], [String('change'), 1024], [String('click'), 1], [String('dblclick'), 2], [String('focus'), 2048], [String('keydown'), 128], [String('keypress'), 256], [String('keyup'), 512], [String('load'), 32768], [String('losecapture'), 8192], [String('mousedown'), 4], [String('mousemove'), 64], [String('mouseout'), 32], [String('mouseover'), 16], [String('mouseup'), 8], [String('scroll'), 16384], [String('error'), 65536], [String('contextmenu'), 131072]]);}catch($pyjs_dbg_107_err){
    if ($pyjs_dbg_107_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line None :\n" + $pyjs_dbg_107_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_107_retry) {
        case 1:
            $pyjs_dbg_107_res=pyjslib['dict']([[String('blur'), 4096], [String('change'), 1024], [String('click'), 1], [String('dblclick'), 2], [String('focus'), 2048], [String('keydown'), 128], [String('keypress'), 256], [String('keyup'), 512], [String('load'), 32768], [String('losecapture'), 8192], [String('mousedown'), 4], [String('mousemove'), 64], [String('mouseout'), 32], [String('mouseover'), 16], [String('mouseup'), 8], [String('scroll'), 16384], [String('error'), 65536], [String('contextmenu'), 131072]]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_107_err;
    }
}return $pyjs_dbg_107_res})();
	$pyjs.track.lineno=386;
	pyjamas['DOM']['eventGetTypeInt'] = function(event) {
		var $attr44,$attr43;
		$pyjs.track={module:'pyjamas.DOM',lineno:386};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=386;
		$pyjs.track.lineno=387;
		$pyjs.track.lineno=387;
		var $pyjs__ret = (function(){var $pyjs_dbg_109_retry = 0;
try{var $pyjs_dbg_109_res=pyjamas['DOM']['eventmap']['get']((function(){var $pyjs_dbg_108_retry = 0;
try{var $pyjs_dbg_108_res=pyjslib['str'](((($attr43=event['type']) !== null & ($attr44=event).__is_instance__) && typeof $attr43 == 'function'?
					pyjslib['getattr']($attr44, 'type'):
					event['type']));}catch($pyjs_dbg_108_err){
    if ($pyjs_dbg_108_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 387 :\n" + $pyjs_dbg_108_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_108_retry) {
        case 1:
            $pyjs_dbg_108_res=pyjslib['str'](((($attr43=event['type']) !== null & ($attr44=event).__is_instance__) && typeof $attr43 == 'function'?
					pyjslib['getattr']($attr44, 'type'):
					event['type']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_108_err;
    }
}return $pyjs_dbg_108_res})(), 0);}catch($pyjs_dbg_109_err){
    if ($pyjs_dbg_109_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 387 :\n" + $pyjs_dbg_109_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_109_retry) {
        case 1:
            $pyjs_dbg_109_res=pyjamas['DOM']['eventmap']['get']((function(){var $pyjs_dbg_108_retry = 0;
try{var $pyjs_dbg_108_res=pyjslib['str'](((($attr43=event['type']) !== null & ($attr44=event).__is_instance__) && typeof $attr43 == 'function'?
					pyjslib['getattr']($attr44, 'type'):
					event['type']));}catch($pyjs_dbg_108_err){
    if ($pyjs_dbg_108_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 387 :\n" + $pyjs_dbg_108_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_108_retry) {
        case 1:
            $pyjs_dbg_108_res=pyjslib['str'](((($attr43=event['type']) !== null & ($attr44=event).__is_instance__) && typeof $attr43 == 'function'?
					pyjslib['getattr']($attr44, 'type'):
					event['type']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_108_err;
    }
}return $pyjs_dbg_108_res})(), 0);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_109_err;
    }
}return $pyjs_dbg_109_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		var $pyjs__ret = (function(){var $pyjs_dbg_110_retry = 0;
try{var $pyjs_dbg_110_res=pyjamas['DOM']['eventGetType'](event);}catch($pyjs_dbg_110_err){
    if ($pyjs_dbg_110_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 391 :\n" + $pyjs_dbg_110_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_110_retry) {
        case 1:
            $pyjs_dbg_110_res=pyjamas['DOM']['eventGetType'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_110_err;
    }
}return $pyjs_dbg_110_res})();
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
		$pyjs.track.lineno=395;
		(function(){var $pyjs_dbg_111_retry = 0;
try{var $pyjs_dbg_111_res=evt['preventDefault']();}catch($pyjs_dbg_111_err){
    if ($pyjs_dbg_111_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 395 :\n" + $pyjs_dbg_111_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_111_retry) {
        case 1:
            $pyjs_dbg_111_res=evt['preventDefault']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_111_err;
    }
}return $pyjs_dbg_111_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
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

		$pyjs.track={module:'pyjamas.DOM',lineno:402};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=402;
		$pyjs.track.lineno=403;
		$pyjs.track.lineno=403;
		var $pyjs__ret = (function(){var $pyjs_dbg_112_retry = 0;
try{var $pyjs_dbg_112_res=evt['toString']();}catch($pyjs_dbg_112_err){
    if ($pyjs_dbg_112_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 403 :\n" + $pyjs_dbg_112_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_112_retry) {
        case 1:
            $pyjs_dbg_112_res=evt['toString']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_112_err;
    }
}return $pyjs_dbg_112_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventToString'].__name__ = 'eventToString';

	pyjamas['DOM']['eventToString'].__bind_type__ = 0;
	pyjamas['DOM']['eventToString'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=406;
	pyjamas['DOM']['iframeGetSrc'] = function(elem) {
		var $attr46,$attr45;
		$pyjs.track={module:'pyjamas.DOM',lineno:406};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=406;
		$pyjs.track.lineno=407;
		$pyjs.track.lineno=407;
		var $pyjs__ret = ((($attr45=elem['src']) !== null & ($attr46=elem).__is_instance__) && typeof $attr45 == 'function'?
					pyjslib['getattr']($attr46, 'src'):
					elem['src']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['iframeGetSrc'].__name__ = 'iframeGetSrc';

	pyjamas['DOM']['iframeGetSrc'].__bind_type__ = 0;
	pyjamas['DOM']['iframeGetSrc'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=410;
	pyjamas['DOM']['getAbsoluteLeft'] = function(elem) {
		var $attr58,curr,$sub4,$attr51,$attr50,$attr53,$attr52,$attr55,$attr57,$attr54,$add2,$attr47,$add1,$attr56,$sub3,$sub2,$sub1,left,$attr48,$attr49;
		$pyjs.track={module:'pyjamas.DOM',lineno:410};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=410;
		$pyjs.track.lineno=411;
		left = 0;
		$pyjs.track.lineno=412;
		curr = elem;
		$pyjs.track.lineno=413;
		while ((function(){var $pyjs_dbg_113_retry = 0;
try{var $pyjs_dbg_113_res=pyjslib['bool'](((($attr47=curr['offsetParent']) !== null & ($attr48=curr).__is_instance__) && typeof $attr47 == 'function'?
					pyjslib['getattr']($attr48, 'offsetParent'):
					curr['offsetParent']));}catch($pyjs_dbg_113_err){
    if ($pyjs_dbg_113_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 413 :\n" + $pyjs_dbg_113_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_113_retry) {
        case 1:
            $pyjs_dbg_113_res=pyjslib['bool'](((($attr47=curr['offsetParent']) !== null & ($attr48=curr).__is_instance__) && typeof $attr47 == 'function'?
					pyjslib['getattr']($attr48, 'offsetParent'):
					curr['offsetParent']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_113_err;
    }
}return $pyjs_dbg_113_res})()) {
			$pyjs.track.lineno=414;
			left = (typeof ($sub1=left)==typeof ($sub2=((($attr49=curr['scrollLeft']) !== null & ($attr50=curr).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'scrollLeft'):
						curr['scrollLeft'])) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2));
			$pyjs.track.lineno=415;
			curr = ((($attr51=curr['parentNode']) !== null & ($attr52=curr).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'parentNode'):
						curr['parentNode']);
		}
		$pyjs.track.lineno=417;
		while ((function(){var $pyjs_dbg_114_retry = 0;
try{var $pyjs_dbg_114_res=pyjslib['bool'](elem);}catch($pyjs_dbg_114_err){
    if ($pyjs_dbg_114_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 417 :\n" + $pyjs_dbg_114_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_114_retry) {
        case 1:
            $pyjs_dbg_114_res=pyjslib['bool'](elem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_114_err;
    }
}return $pyjs_dbg_114_res})()) {
			$pyjs.track.lineno=418;
			left = (typeof ($add1=left)==typeof ($add2=(typeof ($sub3=((($attr53=elem['offsetLeft']) !== null & ($attr54=elem).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'offsetLeft'):
						elem['offsetLeft']))==typeof ($sub4=((($attr55=elem['scrollLeft']) !== null & ($attr56=elem).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'scrollLeft'):
						elem['scrollLeft'])) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
			$pyjs.track.lineno=419;
			elem = ((($attr57=elem['offsetParent']) !== null & ($attr58=elem).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'offsetParent'):
						elem['offsetParent']);
		}
		$pyjs.track.lineno=421;
		$pyjs.track.lineno=421;
		var $pyjs__ret = left;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	pyjamas['DOM']['getAbsoluteLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=424;
	pyjamas['DOM']['getAbsoluteTop'] = function(elem) {
		var $attr59,$attr70,curr,$attr69,$attr64,$attr65,top,$attr67,$attr60,$attr62,$attr61,$add3,$sub8,$add4,$attr66,$attr68,$attr63,$sub7,$sub6,$sub5;
		$pyjs.track={module:'pyjamas.DOM',lineno:424};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=424;
		$pyjs.track.lineno=425;
		top = 0;
		$pyjs.track.lineno=426;
		curr = elem;
		$pyjs.track.lineno=427;
		while ((function(){var $pyjs_dbg_115_retry = 0;
try{var $pyjs_dbg_115_res=pyjslib['bool'](((($attr59=curr['offsetParent']) !== null & ($attr60=curr).__is_instance__) && typeof $attr59 == 'function'?
					pyjslib['getattr']($attr60, 'offsetParent'):
					curr['offsetParent']));}catch($pyjs_dbg_115_err){
    if ($pyjs_dbg_115_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 427 :\n" + $pyjs_dbg_115_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_115_retry) {
        case 1:
            $pyjs_dbg_115_res=pyjslib['bool'](((($attr59=curr['offsetParent']) !== null & ($attr60=curr).__is_instance__) && typeof $attr59 == 'function'?
					pyjslib['getattr']($attr60, 'offsetParent'):
					curr['offsetParent']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_115_err;
    }
}return $pyjs_dbg_115_res})()) {
			$pyjs.track.lineno=428;
			top = (typeof ($sub5=top)==typeof ($sub6=((($attr61=curr['scrollTop']) !== null & ($attr62=curr).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'scrollTop'):
						curr['scrollTop'])) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				pyjslib['op_sub']($sub5,$sub6));
			$pyjs.track.lineno=429;
			curr = ((($attr63=curr['parentNode']) !== null & ($attr64=curr).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'parentNode'):
						curr['parentNode']);
		}
		$pyjs.track.lineno=431;
		while ((function(){var $pyjs_dbg_116_retry = 0;
try{var $pyjs_dbg_116_res=pyjslib['bool'](elem);}catch($pyjs_dbg_116_err){
    if ($pyjs_dbg_116_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 431 :\n" + $pyjs_dbg_116_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_116_retry) {
        case 1:
            $pyjs_dbg_116_res=pyjslib['bool'](elem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_116_err;
    }
}return $pyjs_dbg_116_res})()) {
			$pyjs.track.lineno=432;
			top = (typeof ($add3=top)==typeof ($add4=(typeof ($sub7=((($attr65=elem['offsetTop']) !== null & ($attr66=elem).__is_instance__) && typeof $attr65 == 'function'?
						pyjslib['getattr']($attr66, 'offsetTop'):
						elem['offsetTop']))==typeof ($sub8=((($attr67=elem['scrollTop']) !== null & ($attr68=elem).__is_instance__) && typeof $attr67 == 'function'?
						pyjslib['getattr']($attr68, 'scrollTop'):
						elem['scrollTop'])) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				pyjslib['op_sub']($sub7,$sub8))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
			$pyjs.track.lineno=433;
			elem = ((($attr69=elem['offsetParent']) !== null & ($attr70=elem).__is_instance__) && typeof $attr69 == 'function'?
						pyjslib['getattr']($attr70, 'offsetParent'):
						elem['offsetParent']);
		}
		$pyjs.track.lineno=435;
		$pyjs.track.lineno=435;
		var $pyjs__ret = top;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	pyjamas['DOM']['getAbsoluteTop'].__bind_type__ = 0;
	pyjamas['DOM']['getAbsoluteTop'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=438;
	pyjamas['DOM']['getAttribute'] = function(elem, attr) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:438};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=438;
		$pyjs.track.lineno=439;
		mf = (function(){var $pyjs_dbg_117_retry = 0;
try{var $pyjs_dbg_117_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_117_err){
    if ($pyjs_dbg_117_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 439 :\n" + $pyjs_dbg_117_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_117_retry) {
        case 1:
            $pyjs_dbg_117_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_117_err;
    }
}return $pyjs_dbg_117_res})();
		$pyjs.track.lineno=440;
		$pyjs.track.lineno=440;
		var $pyjs__ret = (function(){var $pyjs_dbg_119_retry = 0;
try{var $pyjs_dbg_119_res=pyjslib['str']((function(){var $pyjs_dbg_118_retry = 0;
try{var $pyjs_dbg_118_res=pyjslib['getattr'](elem, attr);}catch($pyjs_dbg_118_err){
    if ($pyjs_dbg_118_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 440 :\n" + $pyjs_dbg_118_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_118_retry) {
        case 1:
            $pyjs_dbg_118_res=pyjslib['getattr'](elem, attr);
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
            pyjslib['debugReport']("Module pyjamas.DOM at line 440 :\n" + $pyjs_dbg_119_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_119_retry) {
        case 1:
            $pyjs_dbg_119_res=pyjslib['str']((function(){var $pyjs_dbg_118_retry = 0;
try{var $pyjs_dbg_118_res=pyjslib['getattr'](elem, attr);}catch($pyjs_dbg_118_err){
    if ($pyjs_dbg_118_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 440 :\n" + $pyjs_dbg_118_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_118_retry) {
        case 1:
            $pyjs_dbg_118_res=pyjslib['getattr'](elem, attr);
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
}return $pyjs_dbg_119_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getAttribute'].__name__ = 'getAttribute';

	pyjamas['DOM']['getAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=443;
	pyjamas['DOM']['getElemAttribute'] = function(elem, attr) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:443};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=443;
		$pyjs.track.lineno=444;
		mf = (function(){var $pyjs_dbg_120_retry = 0;
try{var $pyjs_dbg_120_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_120_err){
    if ($pyjs_dbg_120_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 444 :\n" + $pyjs_dbg_120_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_120_retry) {
        case 1:
            $pyjs_dbg_120_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_120_err;
    }
}return $pyjs_dbg_120_res})();
		$pyjs.track.lineno=445;
		if ((function(){var $pyjs_dbg_122_retry = 0;
try{var $pyjs_dbg_122_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_121_retry = 0;
try{var $pyjs_dbg_121_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_121_err){
    if ($pyjs_dbg_121_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 445 :\n" + $pyjs_dbg_121_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_121_retry) {
        case 1:
            $pyjs_dbg_121_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_121_err;
    }
}return $pyjs_dbg_121_res})()));}catch($pyjs_dbg_122_err){
    if ($pyjs_dbg_122_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 445 :\n" + $pyjs_dbg_122_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_122_retry) {
        case 1:
            $pyjs_dbg_122_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_121_retry = 0;
try{var $pyjs_dbg_121_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_121_err){
    if ($pyjs_dbg_121_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 445 :\n" + $pyjs_dbg_121_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_121_retry) {
        case 1:
            $pyjs_dbg_121_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_121_err;
    }
}return $pyjs_dbg_121_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_122_err;
    }
}return $pyjs_dbg_122_res})()) {
			$pyjs.track.lineno=446;
			$pyjs.track.lineno=446;
			var $pyjs__ret = (function(){var $pyjs_dbg_125_retry = 0;
try{var $pyjs_dbg_125_res=pyjslib['str']((function(){var $pyjs_dbg_124_retry = 0;
try{var $pyjs_dbg_124_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_123_retry = 0;
try{var $pyjs_dbg_123_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_123_err){
    if ($pyjs_dbg_123_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_123_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_123_retry) {
        case 1:
            $pyjs_dbg_123_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_123_err;
    }
}return $pyjs_dbg_123_res})());}catch($pyjs_dbg_124_err){
    if ($pyjs_dbg_124_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_124_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_124_retry) {
        case 1:
            $pyjs_dbg_124_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_123_retry = 0;
try{var $pyjs_dbg_123_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_123_err){
    if ($pyjs_dbg_123_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_123_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_123_retry) {
        case 1:
            $pyjs_dbg_123_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_123_err;
    }
}return $pyjs_dbg_123_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_124_err;
    }
}return $pyjs_dbg_124_res})());}catch($pyjs_dbg_125_err){
    if ($pyjs_dbg_125_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_125_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_125_retry) {
        case 1:
            $pyjs_dbg_125_res=pyjslib['str']((function(){var $pyjs_dbg_124_retry = 0;
try{var $pyjs_dbg_124_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_123_retry = 0;
try{var $pyjs_dbg_123_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_123_err){
    if ($pyjs_dbg_123_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_123_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_123_retry) {
        case 1:
            $pyjs_dbg_123_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_123_err;
    }
}return $pyjs_dbg_123_res})());}catch($pyjs_dbg_124_err){
    if ($pyjs_dbg_124_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_124_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_124_retry) {
        case 1:
            $pyjs_dbg_124_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_123_retry = 0;
try{var $pyjs_dbg_123_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_123_err){
    if ($pyjs_dbg_123_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 446 :\n" + $pyjs_dbg_123_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_123_retry) {
        case 1:
            $pyjs_dbg_123_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_123_err;
    }
}return $pyjs_dbg_123_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_124_err;
    }
}return $pyjs_dbg_124_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_125_err;
    }
}return $pyjs_dbg_125_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=447;
		$pyjs.track.lineno=447;
		var $pyjs__ret = (function(){var $pyjs_dbg_127_retry = 0;
try{var $pyjs_dbg_127_res=pyjslib['str']((function(){var $pyjs_dbg_126_retry = 0;
try{var $pyjs_dbg_126_res=elem['getAttribute'](attr);}catch($pyjs_dbg_126_err){
    if ($pyjs_dbg_126_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 447 :\n" + $pyjs_dbg_126_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_126_retry) {
        case 1:
            $pyjs_dbg_126_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_126_err;
    }
}return $pyjs_dbg_126_res})());}catch($pyjs_dbg_127_err){
    if ($pyjs_dbg_127_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 447 :\n" + $pyjs_dbg_127_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_127_retry) {
        case 1:
            $pyjs_dbg_127_res=pyjslib['str']((function(){var $pyjs_dbg_126_retry = 0;
try{var $pyjs_dbg_126_res=elem['getAttribute'](attr);}catch($pyjs_dbg_126_err){
    if ($pyjs_dbg_126_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 447 :\n" + $pyjs_dbg_126_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_126_retry) {
        case 1:
            $pyjs_dbg_126_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_126_err;
    }
}return $pyjs_dbg_126_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_127_err;
    }
}return $pyjs_dbg_127_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getElemAttribute'].__name__ = 'getElemAttribute';

	pyjamas['DOM']['getElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=450;
	pyjamas['DOM']['getBooleanAttribute'] = function(elem, attr) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:450};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=450;
		$pyjs.track.lineno=451;
		mf = (function(){var $pyjs_dbg_128_retry = 0;
try{var $pyjs_dbg_128_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_128_err){
    if ($pyjs_dbg_128_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 451 :\n" + $pyjs_dbg_128_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_128_retry) {
        case 1:
            $pyjs_dbg_128_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_128_err;
    }
}return $pyjs_dbg_128_res})();
		$pyjs.track.lineno=452;
		$pyjs.track.lineno=452;
		var $pyjs__ret = (function(){var $pyjs_dbg_131_retry = 0;
try{var $pyjs_dbg_131_res=pyjslib['bool']((function(){var $pyjs_dbg_130_retry = 0;
try{var $pyjs_dbg_130_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_129_retry = 0;
try{var $pyjs_dbg_129_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_129_err){
    if ($pyjs_dbg_129_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_129_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_129_retry) {
        case 1:
            $pyjs_dbg_129_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_129_err;
    }
}return $pyjs_dbg_129_res})());}catch($pyjs_dbg_130_err){
    if ($pyjs_dbg_130_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_130_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_130_retry) {
        case 1:
            $pyjs_dbg_130_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_129_retry = 0;
try{var $pyjs_dbg_129_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_129_err){
    if ($pyjs_dbg_129_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_129_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_129_retry) {
        case 1:
            $pyjs_dbg_129_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_129_err;
    }
}return $pyjs_dbg_129_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_130_err;
    }
}return $pyjs_dbg_130_res})());}catch($pyjs_dbg_131_err){
    if ($pyjs_dbg_131_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_131_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_131_retry) {
        case 1:
            $pyjs_dbg_131_res=pyjslib['bool']((function(){var $pyjs_dbg_130_retry = 0;
try{var $pyjs_dbg_130_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_129_retry = 0;
try{var $pyjs_dbg_129_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_129_err){
    if ($pyjs_dbg_129_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_129_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_129_retry) {
        case 1:
            $pyjs_dbg_129_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_129_err;
    }
}return $pyjs_dbg_129_res})());}catch($pyjs_dbg_130_err){
    if ($pyjs_dbg_130_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_130_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_130_retry) {
        case 1:
            $pyjs_dbg_130_res=pyjslib['getattr'](elem, (function(){var $pyjs_dbg_129_retry = 0;
try{var $pyjs_dbg_129_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_129_err){
    if ($pyjs_dbg_129_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 452 :\n" + $pyjs_dbg_129_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_129_retry) {
        case 1:
            $pyjs_dbg_129_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_129_err;
    }
}return $pyjs_dbg_129_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_130_err;
    }
}return $pyjs_dbg_130_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_131_err;
    }
}return $pyjs_dbg_131_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		if ((function(){var $pyjs_dbg_133_retry = 0;
try{var $pyjs_dbg_133_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_132_retry = 0;
try{var $pyjs_dbg_132_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_132_err){
    if ($pyjs_dbg_132_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 456 :\n" + $pyjs_dbg_132_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_132_retry) {
        case 1:
            $pyjs_dbg_132_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_132_err;
    }
}return $pyjs_dbg_132_res})()));}catch($pyjs_dbg_133_err){
    if ($pyjs_dbg_133_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 456 :\n" + $pyjs_dbg_133_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_133_retry) {
        case 1:
            $pyjs_dbg_133_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_132_retry = 0;
try{var $pyjs_dbg_132_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_132_err){
    if ($pyjs_dbg_132_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 456 :\n" + $pyjs_dbg_132_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_132_retry) {
        case 1:
            $pyjs_dbg_132_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_132_err;
    }
}return $pyjs_dbg_132_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_133_err;
    }
}return $pyjs_dbg_133_res})()) {
			$pyjs.track.lineno=457;
			$pyjs.track.lineno=457;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=458;
		$pyjs.track.lineno=458;
		var $pyjs__ret = (function(){var $pyjs_dbg_135_retry = 0;
try{var $pyjs_dbg_135_res=pyjslib['bool']((function(){var $pyjs_dbg_134_retry = 0;
try{var $pyjs_dbg_134_res=elem['getAttribute'](attr);}catch($pyjs_dbg_134_err){
    if ($pyjs_dbg_134_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 458 :\n" + $pyjs_dbg_134_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_134_retry) {
        case 1:
            $pyjs_dbg_134_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_134_err;
    }
}return $pyjs_dbg_134_res})());}catch($pyjs_dbg_135_err){
    if ($pyjs_dbg_135_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 458 :\n" + $pyjs_dbg_135_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_135_retry) {
        case 1:
            $pyjs_dbg_135_res=pyjslib['bool']((function(){var $pyjs_dbg_134_retry = 0;
try{var $pyjs_dbg_134_res=elem['getAttribute'](attr);}catch($pyjs_dbg_134_err){
    if ($pyjs_dbg_134_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 458 :\n" + $pyjs_dbg_134_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_134_retry) {
        case 1:
            $pyjs_dbg_134_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_134_err;
    }
}return $pyjs_dbg_134_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_135_err;
    }
}return $pyjs_dbg_135_res})();
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
		$pyjs.track.lineno=462;
		$pyjs.track.lineno=462;
		var $pyjs__ret = pyjamas['DOM']['sCaptureElem'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getCaptureElement'].__name__ = 'getCaptureElement';

	pyjamas['DOM']['getCaptureElement'].__bind_type__ = 0;
	pyjamas['DOM']['getCaptureElement'].__args__ = [null,null];
	$pyjs.track.lineno=465;
	pyjamas['DOM']['getChild'] = function(elem, index) {
		var count,$attr76,$attr75,$attr74,$attr73,$attr71,$attr72,$add5,$add6,child,next;
		$pyjs.track={module:'pyjamas.DOM',lineno:465};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=465;
		$pyjs.track.lineno=469;
		count = 0;
		$pyjs.track.lineno=470;
		child = ((($attr71=elem['firstChild']) !== null & ($attr72=elem).__is_instance__) && typeof $attr71 == 'function'?
					pyjslib['getattr']($attr72, 'firstChild'):
					elem['firstChild']);
		$pyjs.track.lineno=471;
		while ((function(){var $pyjs_dbg_136_retry = 0;
try{var $pyjs_dbg_136_res=pyjslib['bool'](child);}catch($pyjs_dbg_136_err){
    if ($pyjs_dbg_136_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 471 :\n" + $pyjs_dbg_136_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_136_retry) {
        case 1:
            $pyjs_dbg_136_res=pyjslib['bool'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_136_err;
    }
}return $pyjs_dbg_136_res})()) {
			$pyjs.track.lineno=472;
			next = ((($attr73=child['nextSibling']) !== null & ($attr74=child).__is_instance__) && typeof $attr73 == 'function'?
						pyjslib['getattr']($attr74, 'nextSibling'):
						child['nextSibling']);
			$pyjs.track.lineno=473;
			if ((function(){var $pyjs_dbg_137_retry = 0;
try{var $pyjs_dbg_137_res=pyjslib['bool'](pyjslib['op_eq'](((($attr75=child['nodeType']) !== null & ($attr76=child).__is_instance__) && typeof $attr75 == 'function'?
						pyjslib['getattr']($attr76, 'nodeType'):
						child['nodeType']), 1));}catch($pyjs_dbg_137_err){
    if ($pyjs_dbg_137_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 473 :\n" + $pyjs_dbg_137_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_137_retry) {
        case 1:
            $pyjs_dbg_137_res=pyjslib['bool'](pyjslib['op_eq'](((($attr75=child['nodeType']) !== null & ($attr76=child).__is_instance__) && typeof $attr75 == 'function'?
						pyjslib['getattr']($attr76, 'nodeType'):
						child['nodeType']), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_137_err;
    }
}return $pyjs_dbg_137_res})()) {
				$pyjs.track.lineno=474;
				if ((function(){var $pyjs_dbg_138_retry = 0;
try{var $pyjs_dbg_138_res=pyjslib['bool'](pyjslib['op_eq'](index, count));}catch($pyjs_dbg_138_err){
    if ($pyjs_dbg_138_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 474 :\n" + $pyjs_dbg_138_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_138_retry) {
        case 1:
            $pyjs_dbg_138_res=pyjslib['bool'](pyjslib['op_eq'](index, count));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_138_err;
    }
}return $pyjs_dbg_138_res})()) {
					$pyjs.track.lineno=475;
					$pyjs.track.lineno=475;
					var $pyjs__ret = child;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=476;
				count = (typeof ($add5=count)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6));
			}
			$pyjs.track.lineno=477;
			child = next;
		}
		$pyjs.track.lineno=478;
		$pyjs.track.lineno=478;
		var $pyjs__ret = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getChild'].__name__ = 'getChild';

	pyjamas['DOM']['getChild'].__bind_type__ = 0;
	pyjamas['DOM']['getChild'].__args__ = [null,null,['elem'],['index']];
	$pyjs.track.lineno=481;
	pyjamas['DOM']['getChildCount'] = function(elem) {
		var count,$attr82,$attr80,$attr81,$attr79,$attr78,$attr77,$add7,child,$add8;
		$pyjs.track={module:'pyjamas.DOM',lineno:481};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=481;
		$pyjs.track.lineno=486;
		count = 0;
		$pyjs.track.lineno=487;
		child = ((($attr77=elem['firstChild']) !== null & ($attr78=elem).__is_instance__) && typeof $attr77 == 'function'?
					pyjslib['getattr']($attr78, 'firstChild'):
					elem['firstChild']);
		$pyjs.track.lineno=488;
		while ((function(){var $pyjs_dbg_139_retry = 0;
try{var $pyjs_dbg_139_res=pyjslib['bool'](child);}catch($pyjs_dbg_139_err){
    if ($pyjs_dbg_139_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 488 :\n" + $pyjs_dbg_139_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_139_retry) {
        case 1:
            $pyjs_dbg_139_res=pyjslib['bool'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_139_err;
    }
}return $pyjs_dbg_139_res})()) {
			$pyjs.track.lineno=489;
			if ((function(){var $pyjs_dbg_140_retry = 0;
try{var $pyjs_dbg_140_res=pyjslib['bool'](pyjslib['op_eq'](((($attr79=child['nodeType']) !== null & ($attr80=child).__is_instance__) && typeof $attr79 == 'function'?
						pyjslib['getattr']($attr80, 'nodeType'):
						child['nodeType']), 1));}catch($pyjs_dbg_140_err){
    if ($pyjs_dbg_140_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 489 :\n" + $pyjs_dbg_140_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_140_retry) {
        case 1:
            $pyjs_dbg_140_res=pyjslib['bool'](pyjslib['op_eq'](((($attr79=child['nodeType']) !== null & ($attr80=child).__is_instance__) && typeof $attr79 == 'function'?
						pyjslib['getattr']($attr80, 'nodeType'):
						child['nodeType']), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_140_err;
    }
}return $pyjs_dbg_140_res})()) {
				$pyjs.track.lineno=490;
				count = (typeof ($add7=count)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8));
			}
			$pyjs.track.lineno=491;
			child = ((($attr81=child['nextSibling']) !== null & ($attr82=child).__is_instance__) && typeof $attr81 == 'function'?
						pyjslib['getattr']($attr82, 'nextSibling'):
						child['nextSibling']);
		}
		$pyjs.track.lineno=492;
		$pyjs.track.lineno=492;
		var $pyjs__ret = count;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getChildCount'].__name__ = 'getChildCount';

	pyjamas['DOM']['getChildCount'].__bind_type__ = 0;
	pyjamas['DOM']['getChildCount'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=495;
	pyjamas['DOM']['getChildIndex'] = function(parent, toFind) {
		var count,$attr83,$attr86,$attr84,$attr85,$attr88,child,$add10,$add9,$attr87;
		$pyjs.track={module:'pyjamas.DOM',lineno:495};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=495;
		$pyjs.track.lineno=501;
		count = 0;
		$pyjs.track.lineno=502;
		child = ((($attr83=parent['firstChild']) !== null & ($attr84=parent).__is_instance__) && typeof $attr83 == 'function'?
					pyjslib['getattr']($attr84, 'firstChild'):
					parent['firstChild']);
		$pyjs.track.lineno=503;
		while ((function(){var $pyjs_dbg_141_retry = 0;
try{var $pyjs_dbg_141_res=pyjslib['bool'](child);}catch($pyjs_dbg_141_err){
    if ($pyjs_dbg_141_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 503 :\n" + $pyjs_dbg_141_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_141_retry) {
        case 1:
            $pyjs_dbg_141_res=pyjslib['bool'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_141_err;
    }
}return $pyjs_dbg_141_res})()) {
			$pyjs.track.lineno=504;
			if ((function(){var $pyjs_dbg_142_retry = 0;
try{var $pyjs_dbg_142_res=pyjslib['bool'](pyjslib['op_eq'](child, toFind));}catch($pyjs_dbg_142_err){
    if ($pyjs_dbg_142_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 504 :\n" + $pyjs_dbg_142_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_142_retry) {
        case 1:
            $pyjs_dbg_142_res=pyjslib['bool'](pyjslib['op_eq'](child, toFind));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_142_err;
    }
}return $pyjs_dbg_142_res})()) {
				$pyjs.track.lineno=505;
				$pyjs.track.lineno=505;
				var $pyjs__ret = count;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=506;
			if ((function(){var $pyjs_dbg_143_retry = 0;
try{var $pyjs_dbg_143_res=pyjslib['bool'](pyjslib['op_eq'](((($attr85=child['nodeType']) !== null & ($attr86=child).__is_instance__) && typeof $attr85 == 'function'?
						pyjslib['getattr']($attr86, 'nodeType'):
						child['nodeType']), 1));}catch($pyjs_dbg_143_err){
    if ($pyjs_dbg_143_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 506 :\n" + $pyjs_dbg_143_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_143_retry) {
        case 1:
            $pyjs_dbg_143_res=pyjslib['bool'](pyjslib['op_eq'](((($attr85=child['nodeType']) !== null & ($attr86=child).__is_instance__) && typeof $attr85 == 'function'?
						pyjslib['getattr']($attr86, 'nodeType'):
						child['nodeType']), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_143_err;
    }
}return $pyjs_dbg_143_res})()) {
				$pyjs.track.lineno=507;
				count = (typeof ($add9=count)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					pyjslib['op_add']($add9,$add10));
			}
			$pyjs.track.lineno=508;
			child = ((($attr87=child['nextSibling']) !== null & ($attr88=child).__is_instance__) && typeof $attr87 == 'function'?
						pyjslib['getattr']($attr88, 'nextSibling'):
						child['nextSibling']);
		}
		$pyjs.track.lineno=510;
		$pyjs.track.lineno=510;
		var $pyjs__ret = (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1));
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getChildIndex'].__name__ = 'getChildIndex';

	pyjamas['DOM']['getChildIndex'].__bind_type__ = 0;
	pyjamas['DOM']['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	$pyjs.track.lineno=513;
	pyjamas['DOM']['getElementById'] = function(id) {

		$pyjs.track={module:'pyjamas.DOM',lineno:513};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=513;
		$pyjs.track.lineno=517;
		$pyjs.track.lineno=517;
		var $pyjs__ret = $doc['getElementById'](id);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getElementById'].__name__ = 'getElementById';

	pyjamas['DOM']['getElementById'].__bind_type__ = 0;
	pyjamas['DOM']['getElementById'].__args__ = [null,null,['id']];
	$pyjs.track.lineno=520;
	pyjamas['DOM']['getEventListener'] = function(element) {

		$pyjs.track={module:'pyjamas.DOM',lineno:520};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=520;
		$pyjs.track.lineno=524;
		$pyjs.track.lineno=524;
		var $pyjs__ret = (function(){var $pyjs_dbg_144_retry = 0;
try{var $pyjs_dbg_144_res=pyjamas['DOM']['get_listener'](element);}catch($pyjs_dbg_144_err){
    if ($pyjs_dbg_144_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 524 :\n" + $pyjs_dbg_144_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_144_retry) {
        case 1:
            $pyjs_dbg_144_res=pyjamas['DOM']['get_listener'](element);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_144_err;
    }
}return $pyjs_dbg_144_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getEventListener'].__name__ = 'getEventListener';

	pyjamas['DOM']['getEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['getEventListener'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=526;
	pyjamas['DOM']['eventbitsmap'] = (function(){var $pyjs_dbg_145_retry = 0;
try{var $pyjs_dbg_145_res=pyjslib['dict']([]);}catch($pyjs_dbg_145_err){
    if ($pyjs_dbg_145_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line None :\n" + $pyjs_dbg_145_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_145_retry) {
        case 1:
            $pyjs_dbg_145_res=pyjslib['dict']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_145_err;
    }
}return $pyjs_dbg_145_res})();
	$pyjs.track.lineno=529;
	pyjamas['DOM']['getEventsSunk'] = function(element) {

		$pyjs.track={module:'pyjamas.DOM',lineno:529};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=529;
		$pyjs.track.lineno=534;
		$pyjs.track.lineno=534;
		var $pyjs__ret = (function(){var $pyjs_dbg_146_retry = 0;
try{var $pyjs_dbg_146_res=pyjamas['DOM']['eventbitsmap']['get'](element, 0);}catch($pyjs_dbg_146_err){
    if ($pyjs_dbg_146_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 534 :\n" + $pyjs_dbg_146_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_146_retry) {
        case 1:
            $pyjs_dbg_146_res=pyjamas['DOM']['eventbitsmap']['get'](element, 0);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_146_err;
    }
}return $pyjs_dbg_146_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getEventsSunk'].__name__ = 'getEventsSunk';

	pyjamas['DOM']['getEventsSunk'].__bind_type__ = 0;
	pyjamas['DOM']['getEventsSunk'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=537;
	pyjamas['DOM']['getFirstChild'] = function(elem) {
		var $and9,$attr91,$attr90,$attr93,$attr92,$attr89,$and12,$and10,$and11,child,$attr94;
		$pyjs.track={module:'pyjamas.DOM',lineno:537};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=537;
		$pyjs.track.lineno=538;
		child = (pyjslib['bool']($and9=elem)?((($attr89=elem['firstChild']) !== null & ($attr90=elem).__is_instance__) && typeof $attr89 == 'function'?
					pyjslib['getattr']($attr90, 'firstChild'):
					elem['firstChild']):$and9);
		$pyjs.track.lineno=539;
		while ((function(){var $pyjs_dbg_147_retry = 0;
try{var $pyjs_dbg_147_res=pyjslib['bool']((pyjslib['bool']($and11=child)?!pyjslib['op_eq'](((($attr91=child['nodeType']) !== null & ($attr92=child).__is_instance__) && typeof $attr91 == 'function'?
					pyjslib['getattr']($attr92, 'nodeType'):
					child['nodeType']), 1):$and11));}catch($pyjs_dbg_147_err){
    if ($pyjs_dbg_147_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 539 :\n" + $pyjs_dbg_147_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_147_retry) {
        case 1:
            $pyjs_dbg_147_res=pyjslib['bool']((pyjslib['bool']($and11=child)?!pyjslib['op_eq'](((($attr91=child['nodeType']) !== null & ($attr92=child).__is_instance__) && typeof $attr91 == 'function'?
					pyjslib['getattr']($attr92, 'nodeType'):
					child['nodeType']), 1):$and11));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_147_err;
    }
}return $pyjs_dbg_147_res})()) {
			$pyjs.track.lineno=540;
			child = ((($attr93=child['nextSibling']) !== null & ($attr94=child).__is_instance__) && typeof $attr93 == 'function'?
						pyjslib['getattr']($attr94, 'nextSibling'):
						child['nextSibling']);
		}
		$pyjs.track.lineno=541;
		$pyjs.track.lineno=541;
		var $pyjs__ret = child;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getFirstChild'].__name__ = 'getFirstChild';

	pyjamas['DOM']['getFirstChild'].__bind_type__ = 0;
	pyjamas['DOM']['getFirstChild'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=544;
	pyjamas['DOM']['getInnerHTML'] = function(element) {
		var $attr95,$attr97,$attr96,err,$attr98,$and13,$pyjs_try_err,$and16,$and14,$and15;
		$pyjs.track={module:'pyjamas.DOM',lineno:544};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=544;
		$pyjs.track.lineno=545;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=546;
			$pyjs.track.lineno=546;
			var $pyjs__ret = (pyjslib['bool']($and13=element)?((($attr95=element['innerHtml']) !== null & ($attr96=element).__is_instance__) && typeof $attr95 == 'function'?
						pyjslib['getattr']($attr96, 'innerHtml'):
						element['innerHtml']):$and13);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 545};
			sys.save_exception_stack();
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.__last_exception__.except_lineno = 548;
				err = $pyjs_try_err;
				$pyjs.track.lineno=548;
				$pyjs.track.lineno=548;
				var $pyjs__ret = (pyjslib['bool']($and15=element)?((($attr97=element['innerHTML']) !== null & ($attr98=element).__is_instance__) && typeof $attr97 == 'function'?
							pyjslib['getattr']($attr98, 'innerHTML'):
							element['innerHTML']):$and15);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['getInnerHTML'].__name__ = 'getInnerHTML';

	pyjamas['DOM']['getInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerHTML'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=551;
	pyjamas['DOM']['getInnerText'] = function(element) {
		var $add14,$add12,$attr107,text,$attr101,$attr99,$attr106,$add13,$attr104,$attr105,$attr102,$add11,$attr100,child,$attr108,$attr103;
		$pyjs.track={module:'pyjamas.DOM',lineno:551};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=551;
		$pyjs.track.lineno=554;
		text = String('');
		$pyjs.track.lineno=555;
		child = ((($attr99=element['firstChild']) !== null & ($attr100=element).__is_instance__) && typeof $attr99 == 'function'?
					pyjslib['getattr']($attr100, 'firstChild'):
					element['firstChild']);
		$pyjs.track.lineno=556;
		while ((function(){var $pyjs_dbg_148_retry = 0;
try{var $pyjs_dbg_148_res=pyjslib['bool'](child);}catch($pyjs_dbg_148_err){
    if ($pyjs_dbg_148_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 556 :\n" + $pyjs_dbg_148_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_148_retry) {
        case 1:
            $pyjs_dbg_148_res=pyjslib['bool'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_148_err;
    }
}return $pyjs_dbg_148_res})()) {
			$pyjs.track.lineno=557;
			if ((function(){var $pyjs_dbg_149_retry = 0;
try{var $pyjs_dbg_149_res=pyjslib['bool'](pyjslib['op_eq'](((($attr101=child['nodeType']) !== null & ($attr102=child).__is_instance__) && typeof $attr101 == 'function'?
						pyjslib['getattr']($attr102, 'nodeType'):
						child['nodeType']), 1));}catch($pyjs_dbg_149_err){
    if ($pyjs_dbg_149_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 557 :\n" + $pyjs_dbg_149_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_149_retry) {
        case 1:
            $pyjs_dbg_149_res=pyjslib['bool'](pyjslib['op_eq'](((($attr101=child['nodeType']) !== null & ($attr102=child).__is_instance__) && typeof $attr101 == 'function'?
						pyjslib['getattr']($attr102, 'nodeType'):
						child['nodeType']), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_149_err;
    }
}return $pyjs_dbg_149_res})()) {
				$pyjs.track.lineno=558;
				text = (typeof ($add11=text)==typeof ($add12=(function(){var $pyjs_dbg_150_retry = 0;
try{var $pyjs_dbg_150_res=child['getInnerText']();}catch($pyjs_dbg_150_err){
    if ($pyjs_dbg_150_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 558 :\n" + $pyjs_dbg_150_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_150_retry) {
        case 1:
            $pyjs_dbg_150_res=child['getInnerText']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_150_err;
    }
}return $pyjs_dbg_150_res})()) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12));
			}
			else if ((function(){var $pyjs_dbg_151_retry = 0;
try{var $pyjs_dbg_151_res=pyjslib['bool'](((($attr103=child['nodeValue']) !== null & ($attr104=child).__is_instance__) && typeof $attr103 == 'function'?
						pyjslib['getattr']($attr104, 'nodeValue'):
						child['nodeValue']));}catch($pyjs_dbg_151_err){
    if ($pyjs_dbg_151_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 559 :\n" + $pyjs_dbg_151_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_151_retry) {
        case 1:
            $pyjs_dbg_151_res=pyjslib['bool'](((($attr103=child['nodeValue']) !== null & ($attr104=child).__is_instance__) && typeof $attr103 == 'function'?
						pyjslib['getattr']($attr104, 'nodeValue'):
						child['nodeValue']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_151_err;
    }
}return $pyjs_dbg_151_res})()) {
				$pyjs.track.lineno=560;
				text = (typeof ($add13=text)==typeof ($add14=((($attr105=child['nodeValue']) !== null & ($attr106=child).__is_instance__) && typeof $attr105 == 'function'?
							pyjslib['getattr']($attr106, 'nodeValue'):
							child['nodeValue'])) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					pyjslib['op_add']($add13,$add14));
			}
			$pyjs.track.lineno=561;
			child = ((($attr107=child['nextSibling']) !== null & ($attr108=child).__is_instance__) && typeof $attr107 == 'function'?
						pyjslib['getattr']($attr108, 'nextSibling'):
						child['nextSibling']);
		}
		$pyjs.track.lineno=562;
		$pyjs.track.lineno=562;
		var $pyjs__ret = text;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getInnerText'].__name__ = 'getInnerText';

	pyjamas['DOM']['getInnerText'].__bind_type__ = 0;
	pyjamas['DOM']['getInnerText'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=565;
	pyjamas['DOM']['getIntAttribute'] = function(elem, attr) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:565};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=565;
		$pyjs.track.lineno=566;
		mf = (function(){var $pyjs_dbg_152_retry = 0;
try{var $pyjs_dbg_152_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_152_err){
    if ($pyjs_dbg_152_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 566 :\n" + $pyjs_dbg_152_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_152_retry) {
        case 1:
            $pyjs_dbg_152_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_152_err;
    }
}return $pyjs_dbg_152_res})();
		$pyjs.track.lineno=567;
		$pyjs.track.lineno=567;
		var $pyjs__ret = (function(){var $pyjs_dbg_154_retry = 0;
try{var $pyjs_dbg_154_res=pyjslib['float_int']((function(){var $pyjs_dbg_153_retry = 0;
try{var $pyjs_dbg_153_res=pyjslib['getattr'](elem, attr);}catch($pyjs_dbg_153_err){
    if ($pyjs_dbg_153_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 567 :\n" + $pyjs_dbg_153_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_153_retry) {
        case 1:
            $pyjs_dbg_153_res=pyjslib['getattr'](elem, attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_153_err;
    }
}return $pyjs_dbg_153_res})());}catch($pyjs_dbg_154_err){
    if ($pyjs_dbg_154_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 567 :\n" + $pyjs_dbg_154_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_154_retry) {
        case 1:
            $pyjs_dbg_154_res=pyjslib['float_int']((function(){var $pyjs_dbg_153_retry = 0;
try{var $pyjs_dbg_153_res=pyjslib['getattr'](elem, attr);}catch($pyjs_dbg_153_err){
    if ($pyjs_dbg_153_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 567 :\n" + $pyjs_dbg_153_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_153_retry) {
        case 1:
            $pyjs_dbg_153_res=pyjslib['getattr'](elem, attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_153_err;
    }
}return $pyjs_dbg_153_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_154_err;
    }
}return $pyjs_dbg_154_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		if ((function(){var $pyjs_dbg_156_retry = 0;
try{var $pyjs_dbg_156_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_155_retry = 0;
try{var $pyjs_dbg_155_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_155_err){
    if ($pyjs_dbg_155_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 571 :\n" + $pyjs_dbg_155_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_155_retry) {
        case 1:
            $pyjs_dbg_155_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_155_err;
    }
}return $pyjs_dbg_155_res})()));}catch($pyjs_dbg_156_err){
    if ($pyjs_dbg_156_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 571 :\n" + $pyjs_dbg_156_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_156_retry) {
        case 1:
            $pyjs_dbg_156_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_155_retry = 0;
try{var $pyjs_dbg_155_res=elem['hasAttribute'](attr);}catch($pyjs_dbg_155_err){
    if ($pyjs_dbg_155_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 571 :\n" + $pyjs_dbg_155_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_155_retry) {
        case 1:
            $pyjs_dbg_155_res=elem['hasAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_155_err;
    }
}return $pyjs_dbg_155_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_156_err;
    }
}return $pyjs_dbg_156_res})()) {
			$pyjs.track.lineno=572;
			$pyjs.track.lineno=572;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=573;
		$pyjs.track.lineno=573;
		var $pyjs__ret = (function(){var $pyjs_dbg_158_retry = 0;
try{var $pyjs_dbg_158_res=pyjslib['float_int']((function(){var $pyjs_dbg_157_retry = 0;
try{var $pyjs_dbg_157_res=elem['getAttribute'](attr);}catch($pyjs_dbg_157_err){
    if ($pyjs_dbg_157_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 573 :\n" + $pyjs_dbg_157_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_157_retry) {
        case 1:
            $pyjs_dbg_157_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_157_err;
    }
}return $pyjs_dbg_157_res})());}catch($pyjs_dbg_158_err){
    if ($pyjs_dbg_158_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 573 :\n" + $pyjs_dbg_158_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_158_retry) {
        case 1:
            $pyjs_dbg_158_res=pyjslib['float_int']((function(){var $pyjs_dbg_157_retry = 0;
try{var $pyjs_dbg_157_res=elem['getAttribute'](attr);}catch($pyjs_dbg_157_err){
    if ($pyjs_dbg_157_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 573 :\n" + $pyjs_dbg_157_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_157_retry) {
        case 1:
            $pyjs_dbg_157_res=elem['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_157_err;
    }
}return $pyjs_dbg_157_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_158_err;
    }
}return $pyjs_dbg_158_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	pyjamas['DOM']['getIntElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=576;
	pyjamas['DOM']['getIntStyleAttribute'] = function(elem, attr) {
		var $attr110,$attr109;
		$pyjs.track={module:'pyjamas.DOM',lineno:576};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=576;
		$pyjs.track.lineno=577;
		$pyjs.track.lineno=577;
		var $pyjs__ret = (function(){var $pyjs_dbg_159_retry = 0;
try{var $pyjs_dbg_159_res=pyjamas['DOM']['getIntAttribute'](((($attr109=elem['style']) !== null & ($attr110=elem).__is_instance__) && typeof $attr109 == 'function'?
					pyjslib['getattr']($attr110, 'style'):
					elem['style']), attr);}catch($pyjs_dbg_159_err){
    if ($pyjs_dbg_159_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 577 :\n" + $pyjs_dbg_159_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_159_retry) {
        case 1:
            $pyjs_dbg_159_res=pyjamas['DOM']['getIntAttribute'](((($attr109=elem['style']) !== null & ($attr110=elem).__is_instance__) && typeof $attr109 == 'function'?
					pyjslib['getattr']($attr110, 'style'):
					elem['style']), attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_159_err;
    }
}return $pyjs_dbg_159_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	pyjamas['DOM']['getIntStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=580;
	pyjamas['DOM']['getNextSibling'] = function(elem) {
		var $attr111,$attr113,$attr112,$attr115,$attr114,sib,$and17,$and18,$attr116;
		$pyjs.track={module:'pyjamas.DOM',lineno:580};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=580;
		$pyjs.track.lineno=581;
		sib = ((($attr111=elem['nextSibling']) !== null & ($attr112=elem).__is_instance__) && typeof $attr111 == 'function'?
					pyjslib['getattr']($attr112, 'nextSibling'):
					elem['nextSibling']);
		$pyjs.track.lineno=582;
		while ((function(){var $pyjs_dbg_160_retry = 0;
try{var $pyjs_dbg_160_res=pyjslib['bool']((pyjslib['bool']($and17=sib)?!pyjslib['op_eq'](((($attr113=sib['nodeType']) !== null & ($attr114=sib).__is_instance__) && typeof $attr113 == 'function'?
					pyjslib['getattr']($attr114, 'nodeType'):
					sib['nodeType']), 1):$and17));}catch($pyjs_dbg_160_err){
    if ($pyjs_dbg_160_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 582 :\n" + $pyjs_dbg_160_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_160_retry) {
        case 1:
            $pyjs_dbg_160_res=pyjslib['bool']((pyjslib['bool']($and17=sib)?!pyjslib['op_eq'](((($attr113=sib['nodeType']) !== null & ($attr114=sib).__is_instance__) && typeof $attr113 == 'function'?
					pyjslib['getattr']($attr114, 'nodeType'):
					sib['nodeType']), 1):$and17));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_160_err;
    }
}return $pyjs_dbg_160_res})()) {
			$pyjs.track.lineno=583;
			sib = ((($attr115=sib['nextSibling']) !== null & ($attr116=sib).__is_instance__) && typeof $attr115 == 'function'?
						pyjslib['getattr']($attr116, 'nextSibling'):
						sib['nextSibling']);
		}
		$pyjs.track.lineno=584;
		$pyjs.track.lineno=584;
		var $pyjs__ret = sib;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getNextSibling'].__name__ = 'getNextSibling';

	pyjamas['DOM']['getNextSibling'].__bind_type__ = 0;
	pyjamas['DOM']['getNextSibling'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=587;
	pyjamas['DOM']['getNodeType'] = function(elem) {
		var $attr118,$attr117;
		$pyjs.track={module:'pyjamas.DOM',lineno:587};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=587;
		$pyjs.track.lineno=588;
		$pyjs.track.lineno=588;
		var $pyjs__ret = ((($attr117=elem['nodeType']) !== null & ($attr118=elem).__is_instance__) && typeof $attr117 == 'function'?
					pyjslib['getattr']($attr118, 'nodeType'):
					elem['nodeType']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getNodeType'].__name__ = 'getNodeType';

	pyjamas['DOM']['getNodeType'].__bind_type__ = 0;
	pyjamas['DOM']['getNodeType'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=591;
	pyjamas['DOM']['getParent'] = function(elem) {
		var $attr119,$attr120,parent;
		$pyjs.track={module:'pyjamas.DOM',lineno:591};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=591;
		$pyjs.track.lineno=592;
		parent = ((($attr119=elem['parentNode']) !== null & ($attr120=elem).__is_instance__) && typeof $attr119 == 'function'?
					pyjslib['getattr']($attr120, 'parentNode'):
					elem['parentNode']);
		$pyjs.track.lineno=593;
		if ((function(){var $pyjs_dbg_161_retry = 0;
try{var $pyjs_dbg_161_res=pyjslib['bool']((parent === null));}catch($pyjs_dbg_161_err){
    if ($pyjs_dbg_161_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 593 :\n" + $pyjs_dbg_161_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_161_retry) {
        case 1:
            $pyjs_dbg_161_res=pyjslib['bool']((parent === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_161_err;
    }
}return $pyjs_dbg_161_res})()) {
			$pyjs.track.lineno=594;
			$pyjs.track.lineno=594;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=595;
		if ((function(){var $pyjs_dbg_163_retry = 0;
try{var $pyjs_dbg_163_res=pyjslib['bool'](!pyjslib['op_eq']((function(){var $pyjs_dbg_162_retry = 0;
try{var $pyjs_dbg_162_res=pyjamas['DOM']['getNodeType'](parent);}catch($pyjs_dbg_162_err){
    if ($pyjs_dbg_162_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 595 :\n" + $pyjs_dbg_162_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_162_retry) {
        case 1:
            $pyjs_dbg_162_res=pyjamas['DOM']['getNodeType'](parent);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_162_err;
    }
}return $pyjs_dbg_162_res})(), 1));}catch($pyjs_dbg_163_err){
    if ($pyjs_dbg_163_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 595 :\n" + $pyjs_dbg_163_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_163_retry) {
        case 1:
            $pyjs_dbg_163_res=pyjslib['bool'](!pyjslib['op_eq']((function(){var $pyjs_dbg_162_retry = 0;
try{var $pyjs_dbg_162_res=pyjamas['DOM']['getNodeType'](parent);}catch($pyjs_dbg_162_err){
    if ($pyjs_dbg_162_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 595 :\n" + $pyjs_dbg_162_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_162_retry) {
        case 1:
            $pyjs_dbg_162_res=pyjamas['DOM']['getNodeType'](parent);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_162_err;
    }
}return $pyjs_dbg_162_res})(), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_163_err;
    }
}return $pyjs_dbg_163_res})()) {
			$pyjs.track.lineno=596;
			$pyjs.track.lineno=596;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=597;
		$pyjs.track.lineno=597;
		var $pyjs__ret = parent;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getParent'].__name__ = 'getParent';

	pyjamas['DOM']['getParent'].__bind_type__ = 0;
	pyjamas['DOM']['getParent'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=600;
	pyjamas['DOM']['getStyleAttribute'] = function(elem, attr) {
		var err,$attr121,$attr122,$pyjs_try_err;
		$pyjs.track={module:'pyjamas.DOM',lineno:600};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=600;
		$pyjs.track.lineno=601;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=602;
			if ((function(){var $pyjs_dbg_165_retry = 0;
try{var $pyjs_dbg_165_res=pyjslib['bool']((function(){var $pyjs_dbg_164_retry = 0;
try{var $pyjs_dbg_164_res=pyjslib['hasattr'](((($attr121=pyjamas.DOM.element['style']) !== null & ($attr122=pyjamas.DOM.element).__is_instance__) && typeof $attr121 == 'function'?
						pyjslib['getattr']($attr122, 'style'):
						pyjamas.DOM.element['style']), String('getProperty'));}catch($pyjs_dbg_164_err){
    if ($pyjs_dbg_164_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 602 :\n" + $pyjs_dbg_164_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_164_retry) {
        case 1:
            $pyjs_dbg_164_res=pyjslib['hasattr'](((($attr121=pyjamas.DOM.element['style']) !== null & ($attr122=pyjamas.DOM.element).__is_instance__) && typeof $attr121 == 'function'?
						pyjslib['getattr']($attr122, 'style'):
						pyjamas.DOM.element['style']), String('getProperty'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_164_err;
    }
}return $pyjs_dbg_164_res})());}catch($pyjs_dbg_165_err){
    if ($pyjs_dbg_165_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 602 :\n" + $pyjs_dbg_165_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_165_retry) {
        case 1:
            $pyjs_dbg_165_res=pyjslib['bool']((function(){var $pyjs_dbg_164_retry = 0;
try{var $pyjs_dbg_164_res=pyjslib['hasattr'](((($attr121=pyjamas.DOM.element['style']) !== null & ($attr122=pyjamas.DOM.element).__is_instance__) && typeof $attr121 == 'function'?
						pyjslib['getattr']($attr122, 'style'):
						pyjamas.DOM.element['style']), String('getProperty'));}catch($pyjs_dbg_164_err){
    if ($pyjs_dbg_164_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 602 :\n" + $pyjs_dbg_164_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_164_retry) {
        case 1:
            $pyjs_dbg_164_res=pyjslib['hasattr'](((($attr121=pyjamas.DOM.element['style']) !== null & ($attr122=pyjamas.DOM.element).__is_instance__) && typeof $attr121 == 'function'?
						pyjslib['getattr']($attr122, 'style'):
						pyjamas.DOM.element['style']), String('getProperty'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_164_err;
    }
}return $pyjs_dbg_164_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_165_err;
    }
}return $pyjs_dbg_165_res})()) {
				$pyjs.track.lineno=603;
				$pyjs.track.lineno=603;
				var $pyjs__ret = (function(){var $pyjs_dbg_167_retry = 0;
try{var $pyjs_dbg_167_res=elem['style']['getProperty']((function(){var $pyjs_dbg_166_retry = 0;
try{var $pyjs_dbg_166_res=pyjamas.DOM.mash_name_for_glib(attr);}catch($pyjs_dbg_166_err){
    if ($pyjs_dbg_166_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 603 :\n" + $pyjs_dbg_166_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_166_retry) {
        case 1:
            $pyjs_dbg_166_res=pyjamas.DOM.mash_name_for_glib(attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_166_err;
    }
}return $pyjs_dbg_166_res})());}catch($pyjs_dbg_167_err){
    if ($pyjs_dbg_167_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 603 :\n" + $pyjs_dbg_167_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_167_retry) {
        case 1:
            $pyjs_dbg_167_res=elem['style']['getProperty']((function(){var $pyjs_dbg_166_retry = 0;
try{var $pyjs_dbg_166_res=pyjamas.DOM.mash_name_for_glib(attr);}catch($pyjs_dbg_166_err){
    if ($pyjs_dbg_166_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 603 :\n" + $pyjs_dbg_166_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_166_retry) {
        case 1:
            $pyjs_dbg_166_res=pyjamas.DOM.mash_name_for_glib(attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_166_err;
    }
}return $pyjs_dbg_166_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_167_err;
    }
}return $pyjs_dbg_167_res})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=604;
			$pyjs.track.lineno=604;
			var $pyjs__ret = (function(){var $pyjs_dbg_168_retry = 0;
try{var $pyjs_dbg_168_res=elem['style']['getAttribute'](attr);}catch($pyjs_dbg_168_err){
    if ($pyjs_dbg_168_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 604 :\n" + $pyjs_dbg_168_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_168_retry) {
        case 1:
            $pyjs_dbg_168_res=elem['style']['getAttribute'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_168_err;
    }
}return $pyjs_dbg_168_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 601};
			sys.save_exception_stack();
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.__last_exception__.except_lineno = 606;
				err = $pyjs_try_err;
				$pyjs.track.lineno=606;
				$pyjs.track.lineno=606;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['getStyleAttribute'].__name__ = 'getStyleAttribute';

	pyjamas['DOM']['getStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=609;
	pyjamas['DOM']['insertChild'] = function(parent, toAdd, index) {
		var count,$attr127,$add15,$add16,$attr123,$attr124,$attr125,$attr126,child,$attr128,before;
		$pyjs.track={module:'pyjamas.DOM',lineno:609};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=609;
		$pyjs.track.lineno=610;
		count = 0;
		$pyjs.track.lineno=611;
		child = ((($attr123=parent['firstChild']) !== null & ($attr124=parent).__is_instance__) && typeof $attr123 == 'function'?
					pyjslib['getattr']($attr124, 'firstChild'):
					parent['firstChild']);
		$pyjs.track.lineno=612;
		before = null;
		$pyjs.track.lineno=613;
		while ((function(){var $pyjs_dbg_169_retry = 0;
try{var $pyjs_dbg_169_res=pyjslib['bool'](child);}catch($pyjs_dbg_169_err){
    if ($pyjs_dbg_169_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 613 :\n" + $pyjs_dbg_169_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_169_retry) {
        case 1:
            $pyjs_dbg_169_res=pyjslib['bool'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_169_err;
    }
}return $pyjs_dbg_169_res})()) {
			$pyjs.track.lineno=614;
			if ((function(){var $pyjs_dbg_170_retry = 0;
try{var $pyjs_dbg_170_res=pyjslib['bool'](pyjslib['op_eq'](((($attr125=child['nodeType']) !== null & ($attr126=child).__is_instance__) && typeof $attr125 == 'function'?
						pyjslib['getattr']($attr126, 'nodeType'):
						child['nodeType']), 1));}catch($pyjs_dbg_170_err){
    if ($pyjs_dbg_170_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 614 :\n" + $pyjs_dbg_170_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_170_retry) {
        case 1:
            $pyjs_dbg_170_res=pyjslib['bool'](pyjslib['op_eq'](((($attr125=child['nodeType']) !== null & ($attr126=child).__is_instance__) && typeof $attr125 == 'function'?
						pyjslib['getattr']($attr126, 'nodeType'):
						child['nodeType']), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_170_err;
    }
}return $pyjs_dbg_170_res})()) {
				$pyjs.track.lineno=615;
				if ((function(){var $pyjs_dbg_171_retry = 0;
try{var $pyjs_dbg_171_res=pyjslib['bool'](pyjslib['op_eq'](count, index));}catch($pyjs_dbg_171_err){
    if ($pyjs_dbg_171_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 615 :\n" + $pyjs_dbg_171_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_171_retry) {
        case 1:
            $pyjs_dbg_171_res=pyjslib['bool'](pyjslib['op_eq'](count, index));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_171_err;
    }
}return $pyjs_dbg_171_res})()) {
					$pyjs.track.lineno=616;
					before = child;
					$pyjs.track.lineno=617;
					break;
				}
				$pyjs.track.lineno=619;
				count = (typeof ($add15=count)==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					pyjslib['op_add']($add15,$add16));
			}
			$pyjs.track.lineno=620;
			child = ((($attr127=child['nextSibling']) !== null & ($attr128=child).__is_instance__) && typeof $attr127 == 'function'?
						pyjslib['getattr']($attr128, 'nextSibling'):
						child['nextSibling']);
		}
		$pyjs.track.lineno=622;
		if ((function(){var $pyjs_dbg_172_retry = 0;
try{var $pyjs_dbg_172_res=pyjslib['bool']((before === null));}catch($pyjs_dbg_172_err){
    if ($pyjs_dbg_172_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 622 :\n" + $pyjs_dbg_172_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_172_retry) {
        case 1:
            $pyjs_dbg_172_res=pyjslib['bool']((before === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_172_err;
    }
}return $pyjs_dbg_172_res})()) {
			$pyjs.track.lineno=623;
			(function(){var $pyjs_dbg_173_retry = 0;
try{var $pyjs_dbg_173_res=parent['appendChild'](toAdd);}catch($pyjs_dbg_173_err){
    if ($pyjs_dbg_173_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 623 :\n" + $pyjs_dbg_173_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_173_retry) {
        case 1:
            $pyjs_dbg_173_res=parent['appendChild'](toAdd);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_173_err;
    }
}return $pyjs_dbg_173_res})();
		}
		else {
			$pyjs.track.lineno=625;
			(function(){var $pyjs_dbg_174_retry = 0;
try{var $pyjs_dbg_174_res=parent['insertBefore'](toAdd, before);}catch($pyjs_dbg_174_err){
    if ($pyjs_dbg_174_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 625 :\n" + $pyjs_dbg_174_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_174_retry) {
        case 1:
            $pyjs_dbg_174_res=parent['insertBefore'](toAdd, before);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_174_err;
    }
}return $pyjs_dbg_174_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['insertChild'].__name__ = 'insertChild';

	pyjamas['DOM']['insertChild'].__bind_type__ = 0;
	pyjamas['DOM']['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
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
			var $attr129,$attr130;
			$pyjs.track={module:pyjamas.DOM, lineno:630};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=630;
			$pyjs.track.lineno=631;
			self.parent = elem;
			$pyjs.track.lineno=632;
			self.child = ((($attr129=elem['firstChild']) !== null & ($attr130=elem).__is_instance__) && typeof $attr129 == 'function'?
						pyjslib['getattr']($attr130, 'firstChild'):
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
			var $attr133,$attr132,$attr131,$attr137,$attr136,$attr135,$attr134,$attr138;
			$pyjs.track={module:pyjamas.DOM, lineno:635};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=635;
			$pyjs.track.lineno=636;
			if ((function(){var $pyjs_dbg_175_retry = 0;
try{var $pyjs_dbg_175_res=pyjslib['bool'](!pyjslib['bool'](((($attr131=self['child']) !== null & ($attr132=self).__is_instance__) && typeof $attr131 == 'function'?
						pyjslib['getattr']($attr132, 'child'):
						self['child'])));}catch($pyjs_dbg_175_err){
    if ($pyjs_dbg_175_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 636 :\n" + $pyjs_dbg_175_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_175_retry) {
        case 1:
            $pyjs_dbg_175_res=pyjslib['bool'](!pyjslib['bool'](((($attr131=self['child']) !== null & ($attr132=self).__is_instance__) && typeof $attr131 == 'function'?
						pyjslib['getattr']($attr132, 'child'):
						self['child'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_175_err;
    }
}return $pyjs_dbg_175_res})()) {
				$pyjs.track.lineno=637;
				throw (pyjslib['StopIteration']);
			}
			$pyjs.track.lineno=638;
			self.lastChild = ((($attr133=self['child']) !== null & ($attr134=self).__is_instance__) && typeof $attr133 == 'function'?
						pyjslib['getattr']($attr134, 'child'):
						self['child']);
			$pyjs.track.lineno=639;
			self.child = (function(){var $pyjs_dbg_176_retry = 0;
try{var $pyjs_dbg_176_res=pyjamas['DOM']['getNextSibling'](((($attr135=self['child']) !== null & ($attr136=self).__is_instance__) && typeof $attr135 == 'function'?
						pyjslib['getattr']($attr136, 'child'):
						self['child']));}catch($pyjs_dbg_176_err){
    if ($pyjs_dbg_176_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 639 :\n" + $pyjs_dbg_176_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_176_retry) {
        case 1:
            $pyjs_dbg_176_res=pyjamas['DOM']['getNextSibling'](((($attr135=self['child']) !== null & ($attr136=self).__is_instance__) && typeof $attr135 == 'function'?
						pyjslib['getattr']($attr136, 'child'):
						self['child']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_176_err;
    }
}return $pyjs_dbg_176_res})();
			$pyjs.track.lineno=640;
			$pyjs.track.lineno=640;
			var $pyjs__ret = ((($attr137=self['lastChild']) !== null & ($attr138=self).__is_instance__) && typeof $attr137 == 'function'?
						pyjslib['getattr']($attr138, 'lastChild'):
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
			var $attr140,$attr139;
			$pyjs.track={module:pyjamas.DOM, lineno:642};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=642;
			$pyjs.track.lineno=643;
			(function(){var $pyjs_dbg_177_retry = 0;
try{var $pyjs_dbg_177_res=self['parent']['removeChild'](((($attr139=self['lastChild']) !== null & ($attr140=self).__is_instance__) && typeof $attr139 == 'function'?
						pyjslib['getattr']($attr140, 'lastChild'):
						self['lastChild']));}catch($pyjs_dbg_177_err){
    if ($pyjs_dbg_177_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 643 :\n" + $pyjs_dbg_177_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_177_retry) {
        case 1:
            $pyjs_dbg_177_res=self['parent']['removeChild'](((($attr139=self['lastChild']) !== null & ($attr140=self).__is_instance__) && typeof $attr139 == 'function'?
						pyjslib['getattr']($attr140, 'lastChild'):
						self['lastChild']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_177_err;
    }
}return $pyjs_dbg_177_res})();
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

		$pyjs.track={module:'pyjamas.DOM',lineno:649};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=649;
		$pyjs.track.lineno=654;
		$pyjs.track.lineno=654;
		var $pyjs__ret = (function(){var $pyjs_dbg_178_retry = 0;
try{var $pyjs_dbg_178_res=pyjamas['DOM']['IterChildrenClass'](elem);}catch($pyjs_dbg_178_err){
    if ($pyjs_dbg_178_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 654 :\n" + $pyjs_dbg_178_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_178_retry) {
        case 1:
            $pyjs_dbg_178_res=pyjamas['DOM']['IterChildrenClass'](elem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_178_err;
    }
}return $pyjs_dbg_178_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
			self.child = (function(){var $pyjs_dbg_179_retry = 0;
try{var $pyjs_dbg_179_res=pyjamas['DOM']['getFirstChild'](elem);}catch($pyjs_dbg_179_err){
    if ($pyjs_dbg_179_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 661 :\n" + $pyjs_dbg_179_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_179_retry) {
        case 1:
            $pyjs_dbg_179_res=pyjamas['DOM']['getFirstChild'](elem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_179_err;
    }
}return $pyjs_dbg_179_res})();
			$pyjs.track.lineno=662;
			self.lastChild = null;
			$pyjs.track.lineno=663;
			self.stack = (function(){var $pyjs_dbg_180_retry = 0;
try{var $pyjs_dbg_180_res=pyjslib['list']([]);}catch($pyjs_dbg_180_err){
    if ($pyjs_dbg_180_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 663 :\n" + $pyjs_dbg_180_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_180_retry) {
        case 1:
            $pyjs_dbg_180_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_180_err;
    }
}return $pyjs_dbg_180_res})();
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
			var $attr142,$attr143,$attr141,$attr146,$attr147,$attr144,$attr145,$attr153,$attr149,nextSibling,firstChild,$attr154,$attr155,$attr156,$attr152,$attr151,$attr148,$attr150;
			$pyjs.track={module:pyjamas.DOM, lineno:665};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=665;
			$pyjs.track.lineno=666;
			if ((function(){var $pyjs_dbg_181_retry = 0;
try{var $pyjs_dbg_181_res=pyjslib['bool'](!pyjslib['bool'](((($attr141=self['child']) !== null & ($attr142=self).__is_instance__) && typeof $attr141 == 'function'?
						pyjslib['getattr']($attr142, 'child'):
						self['child'])));}catch($pyjs_dbg_181_err){
    if ($pyjs_dbg_181_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 666 :\n" + $pyjs_dbg_181_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_181_retry) {
        case 1:
            $pyjs_dbg_181_res=pyjslib['bool'](!pyjslib['bool'](((($attr141=self['child']) !== null & ($attr142=self).__is_instance__) && typeof $attr141 == 'function'?
						pyjslib['getattr']($attr142, 'child'):
						self['child'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_181_err;
    }
}return $pyjs_dbg_181_res})()) {
				$pyjs.track.lineno=667;
				throw (pyjslib['StopIteration']);
			}
			$pyjs.track.lineno=668;
			self.lastChild = ((($attr143=self['child']) !== null & ($attr144=self).__is_instance__) && typeof $attr143 == 'function'?
						pyjslib['getattr']($attr144, 'child'):
						self['child']);
			$pyjs.track.lineno=669;
			firstChild = (function(){var $pyjs_dbg_182_retry = 0;
try{var $pyjs_dbg_182_res=pyjamas['DOM']['getFirstChild'](((($attr145=self['child']) !== null & ($attr146=self).__is_instance__) && typeof $attr145 == 'function'?
						pyjslib['getattr']($attr146, 'child'):
						self['child']));}catch($pyjs_dbg_182_err){
    if ($pyjs_dbg_182_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 669 :\n" + $pyjs_dbg_182_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_182_retry) {
        case 1:
            $pyjs_dbg_182_res=pyjamas['DOM']['getFirstChild'](((($attr145=self['child']) !== null & ($attr146=self).__is_instance__) && typeof $attr145 == 'function'?
						pyjslib['getattr']($attr146, 'child'):
						self['child']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_182_err;
    }
}return $pyjs_dbg_182_res})();
			$pyjs.track.lineno=670;
			nextSibling = (function(){var $pyjs_dbg_183_retry = 0;
try{var $pyjs_dbg_183_res=pyjamas['DOM']['getNextSibling'](((($attr147=self['child']) !== null & ($attr148=self).__is_instance__) && typeof $attr147 == 'function'?
						pyjslib['getattr']($attr148, 'child'):
						self['child']));}catch($pyjs_dbg_183_err){
    if ($pyjs_dbg_183_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 670 :\n" + $pyjs_dbg_183_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_183_retry) {
        case 1:
            $pyjs_dbg_183_res=pyjamas['DOM']['getNextSibling'](((($attr147=self['child']) !== null & ($attr148=self).__is_instance__) && typeof $attr147 == 'function'?
						pyjslib['getattr']($attr148, 'child'):
						self['child']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_183_err;
    }
}return $pyjs_dbg_183_res})();
			$pyjs.track.lineno=671;
			if ((function(){var $pyjs_dbg_184_retry = 0;
try{var $pyjs_dbg_184_res=pyjslib['bool']((firstChild !== null));}catch($pyjs_dbg_184_err){
    if ($pyjs_dbg_184_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 671 :\n" + $pyjs_dbg_184_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_184_retry) {
        case 1:
            $pyjs_dbg_184_res=pyjslib['bool']((firstChild !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_184_err;
    }
}return $pyjs_dbg_184_res})()) {
				$pyjs.track.lineno=672;
				if ((function(){var $pyjs_dbg_185_retry = 0;
try{var $pyjs_dbg_185_res=pyjslib['bool']((nextSibling !== null));}catch($pyjs_dbg_185_err){
    if ($pyjs_dbg_185_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 672 :\n" + $pyjs_dbg_185_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_185_retry) {
        case 1:
            $pyjs_dbg_185_res=pyjslib['bool']((nextSibling !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_185_err;
    }
}return $pyjs_dbg_185_res})()) {
					$pyjs.track.lineno=673;
					(function(){var $pyjs_dbg_187_retry = 0;
try{var $pyjs_dbg_187_res=self['stack']['append']((function(){var $pyjs_dbg_186_retry = 0;
try{var $pyjs_dbg_186_res=pyjslib['tuple']([nextSibling, ((($attr149=self['parent']) !== null & ($attr150=self).__is_instance__) && typeof $attr149 == 'function'?
								pyjslib['getattr']($attr150, 'parent'):
								self['parent'])]);}catch($pyjs_dbg_186_err){
    if ($pyjs_dbg_186_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 673 :\n" + $pyjs_dbg_186_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_186_retry) {
        case 1:
            $pyjs_dbg_186_res=pyjslib['tuple']([nextSibling, ((($attr149=self['parent']) !== null & ($attr150=self).__is_instance__) && typeof $attr149 == 'function'?
								pyjslib['getattr']($attr150, 'parent'):
								self['parent'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_186_err;
    }
}return $pyjs_dbg_186_res})());}catch($pyjs_dbg_187_err){
    if ($pyjs_dbg_187_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 673 :\n" + $pyjs_dbg_187_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_187_retry) {
        case 1:
            $pyjs_dbg_187_res=self['stack']['append']((function(){var $pyjs_dbg_186_retry = 0;
try{var $pyjs_dbg_186_res=pyjslib['tuple']([nextSibling, ((($attr149=self['parent']) !== null & ($attr150=self).__is_instance__) && typeof $attr149 == 'function'?
								pyjslib['getattr']($attr150, 'parent'):
								self['parent'])]);}catch($pyjs_dbg_186_err){
    if ($pyjs_dbg_186_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 673 :\n" + $pyjs_dbg_186_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_186_retry) {
        case 1:
            $pyjs_dbg_186_res=pyjslib['tuple']([nextSibling, ((($attr149=self['parent']) !== null & ($attr150=self).__is_instance__) && typeof $attr149 == 'function'?
								pyjslib['getattr']($attr150, 'parent'):
								self['parent'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_186_err;
    }
}return $pyjs_dbg_186_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_187_err;
    }
}return $pyjs_dbg_187_res})();
				}
				$pyjs.track.lineno=674;
				self.parent = ((($attr151=self['child']) !== null & ($attr152=self).__is_instance__) && typeof $attr151 == 'function'?
							pyjslib['getattr']($attr152, 'child'):
							self['child']);
				$pyjs.track.lineno=675;
				self.child = firstChild;
			}
			else if ((function(){var $pyjs_dbg_188_retry = 0;
try{var $pyjs_dbg_188_res=pyjslib['bool']((nextSibling !== null));}catch($pyjs_dbg_188_err){
    if ($pyjs_dbg_188_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 676 :\n" + $pyjs_dbg_188_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_188_retry) {
        case 1:
            $pyjs_dbg_188_res=pyjslib['bool']((nextSibling !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_188_err;
    }
}return $pyjs_dbg_188_res})()) {
				$pyjs.track.lineno=677;
				self.child = nextSibling;
			}
			else if ((function(){var $pyjs_dbg_190_retry = 0;
try{var $pyjs_dbg_190_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_189_retry = 0;
try{var $pyjs_dbg_189_res=pyjslib['len'](((($attr153=self['stack']) !== null & ($attr154=self).__is_instance__) && typeof $attr153 == 'function'?
						pyjslib['getattr']($attr154, 'stack'):
						self['stack']));}catch($pyjs_dbg_189_err){
    if ($pyjs_dbg_189_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 678 :\n" + $pyjs_dbg_189_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_189_retry) {
        case 1:
            $pyjs_dbg_189_res=pyjslib['len'](((($attr153=self['stack']) !== null & ($attr154=self).__is_instance__) && typeof $attr153 == 'function'?
						pyjslib['getattr']($attr154, 'stack'):
						self['stack']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_189_err;
    }
}return $pyjs_dbg_189_res})(), 0) == 1));}catch($pyjs_dbg_190_err){
    if ($pyjs_dbg_190_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 678 :\n" + $pyjs_dbg_190_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_190_retry) {
        case 1:
            $pyjs_dbg_190_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_189_retry = 0;
try{var $pyjs_dbg_189_res=pyjslib['len'](((($attr153=self['stack']) !== null & ($attr154=self).__is_instance__) && typeof $attr153 == 'function'?
						pyjslib['getattr']($attr154, 'stack'):
						self['stack']));}catch($pyjs_dbg_189_err){
    if ($pyjs_dbg_189_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 678 :\n" + $pyjs_dbg_189_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_189_retry) {
        case 1:
            $pyjs_dbg_189_res=pyjslib['len'](((($attr153=self['stack']) !== null & ($attr154=self).__is_instance__) && typeof $attr153 == 'function'?
						pyjslib['getattr']($attr154, 'stack'):
						self['stack']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_189_err;
    }
}return $pyjs_dbg_189_res})(), 0) == 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_190_err;
    }
}return $pyjs_dbg_190_res})()) {
				$pyjs.track.lineno=679;
				var $tupleassign1 = (function(){var $pyjs_dbg_191_retry = 0;
try{var $pyjs_dbg_191_res=self['stack']['pop']();}catch($pyjs_dbg_191_err){
    if ($pyjs_dbg_191_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 679 :\n" + $pyjs_dbg_191_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_191_retry) {
        case 1:
            $pyjs_dbg_191_res=self['stack']['pop']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_191_err;
    }
}return $pyjs_dbg_191_res})();
				self.child = (function(){var $pyjs_dbg_192_retry = 0;
try{var $pyjs_dbg_192_res=$tupleassign1.__getitem__(0);}catch($pyjs_dbg_192_err){
    if ($pyjs_dbg_192_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 679 :\n" + $pyjs_dbg_192_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_192_retry) {
        case 1:
            $pyjs_dbg_192_res=$tupleassign1.__getitem__(0);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_192_err;
    }
}return $pyjs_dbg_192_res})();
				self.parent = (function(){var $pyjs_dbg_193_retry = 0;
try{var $pyjs_dbg_193_res=$tupleassign1.__getitem__(1);}catch($pyjs_dbg_193_err){
    if ($pyjs_dbg_193_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 679 :\n" + $pyjs_dbg_193_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_193_retry) {
        case 1:
            $pyjs_dbg_193_res=$tupleassign1.__getitem__(1);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_193_err;
    }
}return $pyjs_dbg_193_res})();
			}
			else {
				$pyjs.track.lineno=681;
				self.child = null;
			}
			$pyjs.track.lineno=682;
			$pyjs.track.lineno=682;
			var $pyjs__ret = ((($attr155=self['lastChild']) !== null & ($attr156=self).__is_instance__) && typeof $attr155 == 'function'?
						pyjslib['getattr']($attr156, 'lastChild'):
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
			var $attr157,$attr158;
			$pyjs.track={module:pyjamas.DOM, lineno:684};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=684;
			$pyjs.track.lineno=685;
			(function(){var $pyjs_dbg_194_retry = 0;
try{var $pyjs_dbg_194_res=self['parent']['removeChild'](((($attr157=self['lastChild']) !== null & ($attr158=self).__is_instance__) && typeof $attr157 == 'function'?
						pyjslib['getattr']($attr158, 'lastChild'):
						self['lastChild']));}catch($pyjs_dbg_194_err){
    if ($pyjs_dbg_194_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 685 :\n" + $pyjs_dbg_194_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_194_retry) {
        case 1:
            $pyjs_dbg_194_res=self['parent']['removeChild'](((($attr157=self['lastChild']) !== null & ($attr158=self).__is_instance__) && typeof $attr157 == 'function'?
						pyjslib['getattr']($attr158, 'lastChild'):
						self['lastChild']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_194_err;
    }
}return $pyjs_dbg_194_res})();
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

		$pyjs.track={module:'pyjamas.DOM',lineno:691};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=691;
		$pyjs.track.lineno=697;
		$pyjs.track.lineno=697;
		var $pyjs__ret = (function(){var $pyjs_dbg_195_retry = 0;
try{var $pyjs_dbg_195_res=pyjamas['DOM']['IterWalkChildren'](elem);}catch($pyjs_dbg_195_err){
    if ($pyjs_dbg_195_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 697 :\n" + $pyjs_dbg_195_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_195_retry) {
        case 1:
            $pyjs_dbg_195_res=pyjamas['DOM']['IterWalkChildren'](elem);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_195_err;
    }
}return $pyjs_dbg_195_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['walkChildren'].__name__ = 'walkChildren';

	pyjamas['DOM']['walkChildren'].__bind_type__ = 0;
	pyjamas['DOM']['walkChildren'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=700;
	pyjamas['DOM']['isOrHasChild'] = function(parent, child) {
		var $attr159,$attr160,$attr161,$attr162;
		$pyjs.track={module:'pyjamas.DOM',lineno:700};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=700;
		$pyjs.track.lineno=701;
		while ((function(){var $pyjs_dbg_196_retry = 0;
try{var $pyjs_dbg_196_res=pyjslib['bool'](child);}catch($pyjs_dbg_196_err){
    if ($pyjs_dbg_196_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 701 :\n" + $pyjs_dbg_196_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_196_retry) {
        case 1:
            $pyjs_dbg_196_res=pyjslib['bool'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_196_err;
    }
}return $pyjs_dbg_196_res})()) {
			$pyjs.track.lineno=702;
			if ((function(){var $pyjs_dbg_198_retry = 0;
try{var $pyjs_dbg_198_res=pyjslib['bool']((function(){var $pyjs_dbg_197_retry = 0;
try{var $pyjs_dbg_197_res=pyjamas['DOM']['compare'](parent, child);}catch($pyjs_dbg_197_err){
    if ($pyjs_dbg_197_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 702 :\n" + $pyjs_dbg_197_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_197_retry) {
        case 1:
            $pyjs_dbg_197_res=pyjamas['DOM']['compare'](parent, child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_197_err;
    }
}return $pyjs_dbg_197_res})());}catch($pyjs_dbg_198_err){
    if ($pyjs_dbg_198_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 702 :\n" + $pyjs_dbg_198_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_198_retry) {
        case 1:
            $pyjs_dbg_198_res=pyjslib['bool']((function(){var $pyjs_dbg_197_retry = 0;
try{var $pyjs_dbg_197_res=pyjamas['DOM']['compare'](parent, child);}catch($pyjs_dbg_197_err){
    if ($pyjs_dbg_197_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 702 :\n" + $pyjs_dbg_197_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_197_retry) {
        case 1:
            $pyjs_dbg_197_res=pyjamas['DOM']['compare'](parent, child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_197_err;
    }
}return $pyjs_dbg_197_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_198_err;
    }
}return $pyjs_dbg_198_res})()) {
				$pyjs.track.lineno=703;
				$pyjs.track.lineno=703;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=704;
			child = ((($attr159=child['parentNode']) !== null & ($attr160=child).__is_instance__) && typeof $attr159 == 'function'?
						pyjslib['getattr']($attr160, 'parentNode'):
						child['parentNode']);
			$pyjs.track.lineno=705;
			if ((function(){var $pyjs_dbg_199_retry = 0;
try{var $pyjs_dbg_199_res=pyjslib['bool'](!pyjslib['bool'](child));}catch($pyjs_dbg_199_err){
    if ($pyjs_dbg_199_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 705 :\n" + $pyjs_dbg_199_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_199_retry) {
        case 1:
            $pyjs_dbg_199_res=pyjslib['bool'](!pyjslib['bool'](child));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_199_err;
    }
}return $pyjs_dbg_199_res})()) {
				$pyjs.track.lineno=706;
				$pyjs.track.lineno=706;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=707;
			if ((function(){var $pyjs_dbg_200_retry = 0;
try{var $pyjs_dbg_200_res=pyjslib['bool'](!pyjslib['op_eq'](((($attr161=child['nodeType']) !== null & ($attr162=child).__is_instance__) && typeof $attr161 == 'function'?
						pyjslib['getattr']($attr162, 'nodeType'):
						child['nodeType']), 1));}catch($pyjs_dbg_200_err){
    if ($pyjs_dbg_200_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 707 :\n" + $pyjs_dbg_200_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_200_retry) {
        case 1:
            $pyjs_dbg_200_res=pyjslib['bool'](!pyjslib['op_eq'](((($attr161=child['nodeType']) !== null & ($attr162=child).__is_instance__) && typeof $attr161 == 'function'?
						pyjslib['getattr']($attr162, 'nodeType'):
						child['nodeType']), 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_200_err;
    }
}return $pyjs_dbg_200_res})()) {
				$pyjs.track.lineno=708;
				child = null;
			}
		}
		$pyjs.track.lineno=709;
		$pyjs.track.lineno=709;
		var $pyjs__ret = false;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['isOrHasChild'].__name__ = 'isOrHasChild';

	pyjamas['DOM']['isOrHasChild'].__bind_type__ = 0;
	pyjamas['DOM']['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=712;
	pyjamas['DOM']['releaseCapture'] = function(elem) {
		var $and19,$and20;
		$pyjs.track={module:'pyjamas.DOM',lineno:712};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=712;
		$pyjs.track.lineno=713;
		$pyjs.track.lineno=714;
		if ((function(){var $pyjs_dbg_202_retry = 0;
try{var $pyjs_dbg_202_res=pyjslib['bool']((pyjslib['bool']($and19=pyjamas['DOM']['sCaptureElem'])?(function(){var $pyjs_dbg_201_retry = 0;
try{var $pyjs_dbg_201_res=pyjamas['DOM']['compare'](elem, pyjamas['DOM']['sCaptureElem']);}catch($pyjs_dbg_201_err){
    if ($pyjs_dbg_201_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 714 :\n" + $pyjs_dbg_201_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_201_retry) {
        case 1:
            $pyjs_dbg_201_res=pyjamas['DOM']['compare'](elem, pyjamas['DOM']['sCaptureElem']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_201_err;
    }
}return $pyjs_dbg_201_res})():$and19));}catch($pyjs_dbg_202_err){
    if ($pyjs_dbg_202_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 714 :\n" + $pyjs_dbg_202_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_202_retry) {
        case 1:
            $pyjs_dbg_202_res=pyjslib['bool']((pyjslib['bool']($and19=pyjamas['DOM']['sCaptureElem'])?(function(){var $pyjs_dbg_201_retry = 0;
try{var $pyjs_dbg_201_res=pyjamas['DOM']['compare'](elem, pyjamas['DOM']['sCaptureElem']);}catch($pyjs_dbg_201_err){
    if ($pyjs_dbg_201_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 714 :\n" + $pyjs_dbg_201_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_201_retry) {
        case 1:
            $pyjs_dbg_201_res=pyjamas['DOM']['compare'](elem, pyjamas['DOM']['sCaptureElem']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_201_err;
    }
}return $pyjs_dbg_201_res})():$and19));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_202_err;
    }
}return $pyjs_dbg_202_res})()) {
			$pyjs.track.lineno=715;
			pyjamas['DOM']['sCaptureElem'] = null;
		}
		$pyjs.track.lineno=716;
		$pyjs.track.lineno=716;
		var $pyjs__ret = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
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
		(function(){var $pyjs_dbg_203_retry = 0;
try{var $pyjs_dbg_203_res=parent['removeChild'](child);}catch($pyjs_dbg_203_err){
    if ($pyjs_dbg_203_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 720 :\n" + $pyjs_dbg_203_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_203_retry) {
        case 1:
            $pyjs_dbg_203_res=parent['removeChild'](child);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_203_err;
    }
}return $pyjs_dbg_203_res})();
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
		(function(){var $pyjs_dbg_204_retry = 0;
try{var $pyjs_dbg_204_res=parent['replaceChild'](newChild, oldChild);}catch($pyjs_dbg_204_err){
    if ($pyjs_dbg_204_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 724 :\n" + $pyjs_dbg_204_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_204_retry) {
        case 1:
            $pyjs_dbg_204_res=parent['replaceChild'](newChild, oldChild);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_204_err;
    }
}return $pyjs_dbg_204_res})();
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
		$pyjs.track.lineno=728;
		(function(){var $pyjs_dbg_205_retry = 0;
try{var $pyjs_dbg_205_res=pyjamas['DOM']['sEventPreviewStack']['remove'](preview);}catch($pyjs_dbg_205_err){
    if ($pyjs_dbg_205_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 728 :\n" + $pyjs_dbg_205_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_205_retry) {
        case 1:
            $pyjs_dbg_205_res=pyjamas['DOM']['sEventPreviewStack']['remove'](preview);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_205_err;
    }
}return $pyjs_dbg_205_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['removeEventPreview'].__name__ = 'removeEventPreview';

	pyjamas['DOM']['removeEventPreview'].__bind_type__ = 0;
	pyjamas['DOM']['removeEventPreview'].__args__ = [null,null,['preview']];
	$pyjs.track.lineno=731;
	pyjamas['DOM']['getOffsetHeight'] = function(elem) {
		var $attr164,$attr163;
		$pyjs.track={module:'pyjamas.DOM',lineno:731};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=731;
		$pyjs.track.lineno=732;
		$pyjs.track.lineno=732;
		var $pyjs__ret = ((($attr163=elem['offsetHeight']) !== null & ($attr164=elem).__is_instance__) && typeof $attr163 == 'function'?
					pyjslib['getattr']($attr164, 'offsetHeight'):
					elem['offsetHeight']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getOffsetHeight'].__name__ = 'getOffsetHeight';

	pyjamas['DOM']['getOffsetHeight'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetHeight'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=735;
	pyjamas['DOM']['getOffsetWidth'] = function(elem) {
		var $attr165,$attr166;
		$pyjs.track={module:'pyjamas.DOM',lineno:735};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=735;
		$pyjs.track.lineno=736;
		$pyjs.track.lineno=736;
		var $pyjs__ret = ((($attr165=elem['offsetWidth']) !== null & ($attr166=elem).__is_instance__) && typeof $attr165 == 'function'?
					pyjslib['getattr']($attr166, 'offsetWidth'):
					elem['offsetWidth']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getOffsetWidth'].__name__ = 'getOffsetWidth';

	pyjamas['DOM']['getOffsetWidth'].__bind_type__ = 0;
	pyjamas['DOM']['getOffsetWidth'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=739;
	pyjamas['DOM']['scrollIntoView'] = function(elem) {
		var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$sub20,$sub21,cur,offsetLeft,$sub23,$attr221,$attr218,$attr219,$attr220,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215,$sub22,$and23,$and22,$and21,$and25,$and24,$attr168,$attr169,$attr167,$attr209,$attr208,offsetTop,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$attr229,$attr228,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$attr170,height,top,width,$sub24,$add32,$add30,$add31,$attr230,$attr182,$add29,$add28,$add21,$add20,$attr183,$add22,$add25,$add24,$add27,$add26,$sub9,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$or9,$or8,$attr180,$attr181,$add17,$add18,$add19,$add23,left;
		$pyjs.track={module:'pyjamas.DOM',lineno:739};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=739;
		$pyjs.track.lineno=740;
		left = ((($attr167=elem['offsetLeft']) !== null & ($attr168=elem).__is_instance__) && typeof $attr167 == 'function'?
					pyjslib['getattr']($attr168, 'offsetLeft'):
					elem['offsetLeft']);
		$pyjs.track.lineno=741;
		top = ((($attr169=elem['offsetTop']) !== null & ($attr170=elem).__is_instance__) && typeof $attr169 == 'function'?
					pyjslib['getattr']($attr170, 'offsetTop'):
					elem['offsetTop']);
		$pyjs.track.lineno=742;
		width = ((($attr171=elem['offsetWidth']) !== null & ($attr172=elem).__is_instance__) && typeof $attr171 == 'function'?
					pyjslib['getattr']($attr172, 'offsetWidth'):
					elem['offsetWidth']);
		$pyjs.track.lineno=743;
		height = ((($attr173=elem['offsetHeight']) !== null & ($attr174=elem).__is_instance__) && typeof $attr173 == 'function'?
					pyjslib['getattr']($attr174, 'offsetHeight'):
					elem['offsetHeight']);
		$pyjs.track.lineno=745;
		if ((function(){var $pyjs_dbg_206_retry = 0;
try{var $pyjs_dbg_206_res=pyjslib['bool'](!pyjslib['op_eq'](((($attr175=elem['parentNode']) !== null & ($attr176=elem).__is_instance__) && typeof $attr175 == 'function'?
					pyjslib['getattr']($attr176, 'parentNode'):
					elem['parentNode']), ((($attr177=elem['offsetParent']) !== null & ($attr178=elem).__is_instance__) && typeof $attr177 == 'function'?
					pyjslib['getattr']($attr178, 'offsetParent'):
					elem['offsetParent'])));}catch($pyjs_dbg_206_err){
    if ($pyjs_dbg_206_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 745 :\n" + $pyjs_dbg_206_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_206_retry) {
        case 1:
            $pyjs_dbg_206_res=pyjslib['bool'](!pyjslib['op_eq'](((($attr175=elem['parentNode']) !== null & ($attr176=elem).__is_instance__) && typeof $attr175 == 'function'?
					pyjslib['getattr']($attr176, 'parentNode'):
					elem['parentNode']), ((($attr177=elem['offsetParent']) !== null & ($attr178=elem).__is_instance__) && typeof $attr177 == 'function'?
					pyjslib['getattr']($attr178, 'offsetParent'):
					elem['offsetParent'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_206_err;
    }
}return $pyjs_dbg_206_res})()) {
			$pyjs.track.lineno=746;
			left = (typeof ($sub9=left)==typeof ($sub10=((($attr179=elem['parentNode']['offsetLeft']) !== null & ($attr180=elem['parentNode']).__is_instance__) && typeof $attr179 == 'function'?
						pyjslib['getattr']($attr180, 'offsetLeft'):
						elem['parentNode']['offsetLeft'])) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				pyjslib['op_sub']($sub9,$sub10));
			$pyjs.track.lineno=747;
			top = (typeof ($sub11=top)==typeof ($sub12=((($attr181=elem['parentNode']['offsetTop']) !== null & ($attr182=elem['parentNode']).__is_instance__) && typeof $attr181 == 'function'?
						pyjslib['getattr']($attr182, 'offsetTop'):
						elem['parentNode']['offsetTop'])) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				pyjslib['op_sub']($sub11,$sub12));
		}
		$pyjs.track.lineno=749;
		cur = ((($attr183=elem['parentNode']) !== null & ($attr184=elem).__is_instance__) && typeof $attr183 == 'function'?
					pyjslib['getattr']($attr184, 'parentNode'):
					elem['parentNode']);
		$pyjs.track.lineno=750;
		while ((function(){var $pyjs_dbg_207_retry = 0;
try{var $pyjs_dbg_207_res=pyjslib['bool']((pyjslib['bool']($and21=cur)?pyjslib['op_eq'](((($attr185=cur['nodeType']) !== null & ($attr186=cur).__is_instance__) && typeof $attr185 == 'function'?
					pyjslib['getattr']($attr186, 'nodeType'):
					cur['nodeType']), 1):$and21));}catch($pyjs_dbg_207_err){
    if ($pyjs_dbg_207_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 750 :\n" + $pyjs_dbg_207_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_207_retry) {
        case 1:
            $pyjs_dbg_207_res=pyjslib['bool']((pyjslib['bool']($and21=cur)?pyjslib['op_eq'](((($attr185=cur['nodeType']) !== null & ($attr186=cur).__is_instance__) && typeof $attr185 == 'function'?
					pyjslib['getattr']($attr186, 'nodeType'):
					cur['nodeType']), 1):$and21));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_207_err;
    }
}return $pyjs_dbg_207_res})()) {
			$pyjs.track.lineno=751;
			if ((function(){var $pyjs_dbg_210_retry = 0;
try{var $pyjs_dbg_210_res=pyjslib['bool']((pyjslib['bool']($and23=(function(){var $pyjs_dbg_208_retry = 0;
try{var $pyjs_dbg_208_res=pyjslib['hasattr'](cur, String('style'));}catch($pyjs_dbg_208_err){
    if ($pyjs_dbg_208_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 751 :\n" + $pyjs_dbg_208_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_208_retry) {
        case 1:
            $pyjs_dbg_208_res=pyjslib['hasattr'](cur, String('style'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_208_err;
    }
}return $pyjs_dbg_208_res})())?(pyjslib['bool']($and24=(function(){var $pyjs_dbg_209_retry = 0;
try{var $pyjs_dbg_209_res=pyjslib['hasattr'](((($attr187=cur['style']) !== null & ($attr188=cur).__is_instance__) && typeof $attr187 == 'function'?
						pyjslib['getattr']($attr188, 'style'):
						cur['style']), String('overflow'));}catch($pyjs_dbg_209_err){
    if ($pyjs_dbg_209_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 751 :\n" + $pyjs_dbg_209_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_209_retry) {
        case 1:
            $pyjs_dbg_209_res=pyjslib['hasattr'](((($attr187=cur['style']) !== null & ($attr188=cur).__is_instance__) && typeof $attr187 == 'function'?
						pyjslib['getattr']($attr188, 'style'):
						cur['style']), String('overflow'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_209_err;
    }
}return $pyjs_dbg_209_res})())?(pyjslib['bool']($or8=pyjslib['op_eq'](((($attr189=cur['style']['overflow']) !== null & ($attr190=cur['style']).__is_instance__) && typeof $attr189 == 'function'?
						pyjslib['getattr']($attr190, 'overflow'):
						cur['style']['overflow']), String('auto')))?$or8:pyjslib['op_eq'](((($attr191=cur['style']['overflow']) !== null & ($attr192=cur['style']).__is_instance__) && typeof $attr191 == 'function'?
						pyjslib['getattr']($attr192, 'overflow'):
						cur['style']['overflow']), String('scroll'))):$and24):$and23));}catch($pyjs_dbg_210_err){
    if ($pyjs_dbg_210_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 751 :\n" + $pyjs_dbg_210_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_210_retry) {
        case 1:
            $pyjs_dbg_210_res=pyjslib['bool']((pyjslib['bool']($and23=(function(){var $pyjs_dbg_208_retry = 0;
try{var $pyjs_dbg_208_res=pyjslib['hasattr'](cur, String('style'));}catch($pyjs_dbg_208_err){
    if ($pyjs_dbg_208_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 751 :\n" + $pyjs_dbg_208_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_208_retry) {
        case 1:
            $pyjs_dbg_208_res=pyjslib['hasattr'](cur, String('style'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_208_err;
    }
}return $pyjs_dbg_208_res})())?(pyjslib['bool']($and24=(function(){var $pyjs_dbg_209_retry = 0;
try{var $pyjs_dbg_209_res=pyjslib['hasattr'](((($attr187=cur['style']) !== null & ($attr188=cur).__is_instance__) && typeof $attr187 == 'function'?
						pyjslib['getattr']($attr188, 'style'):
						cur['style']), String('overflow'));}catch($pyjs_dbg_209_err){
    if ($pyjs_dbg_209_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 751 :\n" + $pyjs_dbg_209_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_209_retry) {
        case 1:
            $pyjs_dbg_209_res=pyjslib['hasattr'](((($attr187=cur['style']) !== null & ($attr188=cur).__is_instance__) && typeof $attr187 == 'function'?
						pyjslib['getattr']($attr188, 'style'):
						cur['style']), String('overflow'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_209_err;
    }
}return $pyjs_dbg_209_res})())?(pyjslib['bool']($or8=pyjslib['op_eq'](((($attr189=cur['style']['overflow']) !== null & ($attr190=cur['style']).__is_instance__) && typeof $attr189 == 'function'?
						pyjslib['getattr']($attr190, 'overflow'):
						cur['style']['overflow']), String('auto')))?$or8:pyjslib['op_eq'](((($attr191=cur['style']['overflow']) !== null & ($attr192=cur['style']).__is_instance__) && typeof $attr191 == 'function'?
						pyjslib['getattr']($attr192, 'overflow'):
						cur['style']['overflow']), String('scroll'))):$and24):$and23));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_210_err;
    }
}return $pyjs_dbg_210_res})()) {
				$pyjs.track.lineno=753;
				if ((function(){var $pyjs_dbg_211_retry = 0;
try{var $pyjs_dbg_211_res=pyjslib['bool']((pyjslib['cmp'](left, ((($attr193=cur['scrollLeft']) !== null & ($attr194=cur).__is_instance__) && typeof $attr193 == 'function'?
							pyjslib['getattr']($attr194, 'scrollLeft'):
							cur['scrollLeft'])) == -1));}catch($pyjs_dbg_211_err){
    if ($pyjs_dbg_211_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 753 :\n" + $pyjs_dbg_211_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_211_retry) {
        case 1:
            $pyjs_dbg_211_res=pyjslib['bool']((pyjslib['cmp'](left, ((($attr193=cur['scrollLeft']) !== null & ($attr194=cur).__is_instance__) && typeof $attr193 == 'function'?
							pyjslib['getattr']($attr194, 'scrollLeft'):
							cur['scrollLeft'])) == -1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_211_err;
    }
}return $pyjs_dbg_211_res})()) {
					$pyjs.track.lineno=754;
					cur.scrollLeft = left;
				}
				$pyjs.track.lineno=755;
				if ((function(){var $pyjs_dbg_212_retry = 0;
try{var $pyjs_dbg_212_res=pyjslib['bool']((pyjslib['cmp']((typeof ($add17=left)==typeof ($add18=width) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					pyjslib['op_add']($add17,$add18)), (typeof ($add19=((($attr195=cur['scrollLeft']) !== null & ($attr196=cur).__is_instance__) && typeof $attr195 == 'function'?
							pyjslib['getattr']($attr196, 'scrollLeft'):
							cur['scrollLeft']))==typeof ($add20=((($attr197=cur['clientWidth']) !== null & ($attr198=cur).__is_instance__) && typeof $attr197 == 'function'?
							pyjslib['getattr']($attr198, 'clientWidth'):
							cur['clientWidth'])) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20))) == 1));}catch($pyjs_dbg_212_err){
    if ($pyjs_dbg_212_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 755 :\n" + $pyjs_dbg_212_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_212_retry) {
        case 1:
            $pyjs_dbg_212_res=pyjslib['bool']((pyjslib['cmp']((typeof ($add17=left)==typeof ($add18=width) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					pyjslib['op_add']($add17,$add18)), (typeof ($add19=((($attr195=cur['scrollLeft']) !== null & ($attr196=cur).__is_instance__) && typeof $attr195 == 'function'?
							pyjslib['getattr']($attr196, 'scrollLeft'):
							cur['scrollLeft']))==typeof ($add20=((($attr197=cur['clientWidth']) !== null & ($attr198=cur).__is_instance__) && typeof $attr197 == 'function'?
							pyjslib['getattr']($attr198, 'clientWidth'):
							cur['clientWidth'])) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20))) == 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_212_err;
    }
}return $pyjs_dbg_212_res})()) {
					$pyjs.track.lineno=756;
					cur.scrollLeft = (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						pyjslib['op_add']($add21,$add22)))==typeof ($sub14=((($attr199=cur['clientWidth']) !== null & ($attr200=cur).__is_instance__) && typeof $attr199 == 'function'?
								pyjslib['getattr']($attr200, 'clientWidth'):
								cur['clientWidth'])) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						pyjslib['op_sub']($sub13,$sub14));
				}
				$pyjs.track.lineno=757;
				if ((function(){var $pyjs_dbg_213_retry = 0;
try{var $pyjs_dbg_213_res=pyjslib['bool']((pyjslib['cmp'](top, ((($attr201=cur['scrollTop']) !== null & ($attr202=cur).__is_instance__) && typeof $attr201 == 'function'?
							pyjslib['getattr']($attr202, 'scrollTop'):
							cur['scrollTop'])) == -1));}catch($pyjs_dbg_213_err){
    if ($pyjs_dbg_213_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 757 :\n" + $pyjs_dbg_213_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_213_retry) {
        case 1:
            $pyjs_dbg_213_res=pyjslib['bool']((pyjslib['cmp'](top, ((($attr201=cur['scrollTop']) !== null & ($attr202=cur).__is_instance__) && typeof $attr201 == 'function'?
							pyjslib['getattr']($attr202, 'scrollTop'):
							cur['scrollTop'])) == -1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_213_err;
    }
}return $pyjs_dbg_213_res})()) {
					$pyjs.track.lineno=758;
					cur.scrollTop = top;
				}
				$pyjs.track.lineno=759;
				if ((function(){var $pyjs_dbg_214_retry = 0;
try{var $pyjs_dbg_214_res=pyjslib['bool']((pyjslib['cmp']((typeof ($add23=top)==typeof ($add24=height) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24)), (typeof ($add25=((($attr203=cur['scrollTop']) !== null & ($attr204=cur).__is_instance__) && typeof $attr203 == 'function'?
							pyjslib['getattr']($attr204, 'scrollTop'):
							cur['scrollTop']))==typeof ($add26=((($attr205=cur['clientHeight']) !== null & ($attr206=cur).__is_instance__) && typeof $attr205 == 'function'?
							pyjslib['getattr']($attr206, 'clientHeight'):
							cur['clientHeight'])) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26))) == 1));}catch($pyjs_dbg_214_err){
    if ($pyjs_dbg_214_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 759 :\n" + $pyjs_dbg_214_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_214_retry) {
        case 1:
            $pyjs_dbg_214_res=pyjslib['bool']((pyjslib['cmp']((typeof ($add23=top)==typeof ($add24=height) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24)), (typeof ($add25=((($attr203=cur['scrollTop']) !== null & ($attr204=cur).__is_instance__) && typeof $attr203 == 'function'?
							pyjslib['getattr']($attr204, 'scrollTop'):
							cur['scrollTop']))==typeof ($add26=((($attr205=cur['clientHeight']) !== null & ($attr206=cur).__is_instance__) && typeof $attr205 == 'function'?
							pyjslib['getattr']($attr206, 'clientHeight'):
							cur['clientHeight'])) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26))) == 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_214_err;
    }
}return $pyjs_dbg_214_res})()) {
					$pyjs.track.lineno=760;
					cur.scrollTop = (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						pyjslib['op_add']($add27,$add28)))==typeof ($sub16=((($attr207=cur['clientHeight']) !== null & ($attr208=cur).__is_instance__) && typeof $attr207 == 'function'?
								pyjslib['getattr']($attr208, 'clientHeight'):
								cur['clientHeight'])) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						pyjslib['op_sub']($sub15,$sub16));
				}
			}
			$pyjs.track.lineno=762;
			offsetLeft = ((($attr209=cur['offsetLeft']) !== null & ($attr210=cur).__is_instance__) && typeof $attr209 == 'function'?
						pyjslib['getattr']($attr210, 'offsetLeft'):
						cur['offsetLeft']);
			$pyjs.track.lineno=763;
			offsetTop = ((($attr211=cur['offsetTop']) !== null & ($attr212=cur).__is_instance__) && typeof $attr211 == 'function'?
						pyjslib['getattr']($attr212, 'offsetTop'):
						cur['offsetTop']);
			$pyjs.track.lineno=764;
			if ((function(){var $pyjs_dbg_215_retry = 0;
try{var $pyjs_dbg_215_res=pyjslib['bool'](!pyjslib['op_eq'](((($attr213=cur['parentNode']) !== null & ($attr214=cur).__is_instance__) && typeof $attr213 == 'function'?
						pyjslib['getattr']($attr214, 'parentNode'):
						cur['parentNode']), ((($attr215=cur['offsetParent']) !== null & ($attr216=cur).__is_instance__) && typeof $attr215 == 'function'?
						pyjslib['getattr']($attr216, 'offsetParent'):
						cur['offsetParent'])));}catch($pyjs_dbg_215_err){
    if ($pyjs_dbg_215_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 764 :\n" + $pyjs_dbg_215_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_215_retry) {
        case 1:
            $pyjs_dbg_215_res=pyjslib['bool'](!pyjslib['op_eq'](((($attr213=cur['parentNode']) !== null & ($attr214=cur).__is_instance__) && typeof $attr213 == 'function'?
						pyjslib['getattr']($attr214, 'parentNode'):
						cur['parentNode']), ((($attr215=cur['offsetParent']) !== null & ($attr216=cur).__is_instance__) && typeof $attr215 == 'function'?
						pyjslib['getattr']($attr216, 'offsetParent'):
						cur['offsetParent'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_215_err;
    }
}return $pyjs_dbg_215_res})()) {
				$pyjs.track.lineno=765;
				if ((function(){var $pyjs_dbg_217_retry = 0;
try{var $pyjs_dbg_217_res=pyjslib['bool']((function(){var $pyjs_dbg_216_retry = 0;
try{var $pyjs_dbg_216_res=pyjslib['hasattr'](((($attr217=cur['parentNode']) !== null & ($attr218=cur).__is_instance__) && typeof $attr217 == 'function'?
							pyjslib['getattr']($attr218, 'parentNode'):
							cur['parentNode']), String('offsetLeft'));}catch($pyjs_dbg_216_err){
    if ($pyjs_dbg_216_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 765 :\n" + $pyjs_dbg_216_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_216_retry) {
        case 1:
            $pyjs_dbg_216_res=pyjslib['hasattr'](((($attr217=cur['parentNode']) !== null & ($attr218=cur).__is_instance__) && typeof $attr217 == 'function'?
							pyjslib['getattr']($attr218, 'parentNode'):
							cur['parentNode']), String('offsetLeft'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_216_err;
    }
}return $pyjs_dbg_216_res})());}catch($pyjs_dbg_217_err){
    if ($pyjs_dbg_217_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 765 :\n" + $pyjs_dbg_217_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_217_retry) {
        case 1:
            $pyjs_dbg_217_res=pyjslib['bool']((function(){var $pyjs_dbg_216_retry = 0;
try{var $pyjs_dbg_216_res=pyjslib['hasattr'](((($attr217=cur['parentNode']) !== null & ($attr218=cur).__is_instance__) && typeof $attr217 == 'function'?
							pyjslib['getattr']($attr218, 'parentNode'):
							cur['parentNode']), String('offsetLeft'));}catch($pyjs_dbg_216_err){
    if ($pyjs_dbg_216_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 765 :\n" + $pyjs_dbg_216_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_216_retry) {
        case 1:
            $pyjs_dbg_216_res=pyjslib['hasattr'](((($attr217=cur['parentNode']) !== null & ($attr218=cur).__is_instance__) && typeof $attr217 == 'function'?
							pyjslib['getattr']($attr218, 'parentNode'):
							cur['parentNode']), String('offsetLeft'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_216_err;
    }
}return $pyjs_dbg_216_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_217_err;
    }
}return $pyjs_dbg_217_res})()) {
					$pyjs.track.lineno=766;
					offsetLeft = (typeof ($sub17=offsetLeft)==typeof ($sub18=((($attr219=cur['parentNode']['offsetLeft']) !== null & ($attr220=cur['parentNode']).__is_instance__) && typeof $attr219 == 'function'?
								pyjslib['getattr']($attr220, 'offsetLeft'):
								cur['parentNode']['offsetLeft'])) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						pyjslib['op_sub']($sub17,$sub18));
				}
				$pyjs.track.lineno=767;
				if ((function(){var $pyjs_dbg_219_retry = 0;
try{var $pyjs_dbg_219_res=pyjslib['bool']((function(){var $pyjs_dbg_218_retry = 0;
try{var $pyjs_dbg_218_res=pyjslib['hasattr'](((($attr221=cur['parentNode']) !== null & ($attr222=cur).__is_instance__) && typeof $attr221 == 'function'?
							pyjslib['getattr']($attr222, 'parentNode'):
							cur['parentNode']), String('offsetTop'));}catch($pyjs_dbg_218_err){
    if ($pyjs_dbg_218_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 767 :\n" + $pyjs_dbg_218_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_218_retry) {
        case 1:
            $pyjs_dbg_218_res=pyjslib['hasattr'](((($attr221=cur['parentNode']) !== null & ($attr222=cur).__is_instance__) && typeof $attr221 == 'function'?
							pyjslib['getattr']($attr222, 'parentNode'):
							cur['parentNode']), String('offsetTop'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_218_err;
    }
}return $pyjs_dbg_218_res})());}catch($pyjs_dbg_219_err){
    if ($pyjs_dbg_219_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 767 :\n" + $pyjs_dbg_219_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_219_retry) {
        case 1:
            $pyjs_dbg_219_res=pyjslib['bool']((function(){var $pyjs_dbg_218_retry = 0;
try{var $pyjs_dbg_218_res=pyjslib['hasattr'](((($attr221=cur['parentNode']) !== null & ($attr222=cur).__is_instance__) && typeof $attr221 == 'function'?
							pyjslib['getattr']($attr222, 'parentNode'):
							cur['parentNode']), String('offsetTop'));}catch($pyjs_dbg_218_err){
    if ($pyjs_dbg_218_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 767 :\n" + $pyjs_dbg_218_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_218_retry) {
        case 1:
            $pyjs_dbg_218_res=pyjslib['hasattr'](((($attr221=cur['parentNode']) !== null & ($attr222=cur).__is_instance__) && typeof $attr221 == 'function'?
							pyjslib['getattr']($attr222, 'parentNode'):
							cur['parentNode']), String('offsetTop'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_218_err;
    }
}return $pyjs_dbg_218_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_219_err;
    }
}return $pyjs_dbg_219_res})()) {
					$pyjs.track.lineno=768;
					offsetTop = (typeof ($sub19=offsetTop)==typeof ($sub20=((($attr223=cur['parentNode']['offsetTop']) !== null & ($attr224=cur['parentNode']).__is_instance__) && typeof $attr223 == 'function'?
								pyjslib['getattr']($attr224, 'offsetTop'):
								cur['parentNode']['offsetTop'])) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						pyjslib['op_sub']($sub19,$sub20));
				}
			}
			$pyjs.track.lineno=770;
			left = (typeof ($add29=left)==typeof ($add30=(typeof ($sub21=offsetLeft)==typeof ($sub22=((($attr225=cur['scrollLeft']) !== null & ($attr226=cur).__is_instance__) && typeof $attr225 == 'function'?
						pyjslib['getattr']($attr226, 'scrollLeft'):
						cur['scrollLeft'])) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				pyjslib['op_sub']($sub21,$sub22))) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				pyjslib['op_add']($add29,$add30));
			$pyjs.track.lineno=771;
			top = (typeof ($add31=top)==typeof ($add32=(typeof ($sub23=offsetTop)==typeof ($sub24=((($attr227=cur['scrollTop']) !== null & ($attr228=cur).__is_instance__) && typeof $attr227 == 'function'?
						pyjslib['getattr']($attr228, 'scrollTop'):
						cur['scrollTop'])) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				pyjslib['op_sub']($sub23,$sub24))) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				pyjslib['op_add']($add31,$add32));
			$pyjs.track.lineno=772;
			cur = ((($attr229=cur['parentNode']) !== null & ($attr230=cur).__is_instance__) && typeof $attr229 == 'function'?
						pyjslib['getattr']($attr230, 'parentNode'):
						cur['parentNode']);
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['scrollIntoView'].__name__ = 'scrollIntoView';

	pyjamas['DOM']['scrollIntoView'].__bind_type__ = 0;
	pyjamas['DOM']['scrollIntoView'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=775;
	pyjamas['DOM']['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add33,$add37,$add34,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$add38,$iter1_type;
		$pyjs.track={module:'pyjamas.DOM',lineno:775};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=775;
		$pyjs.track.lineno=776;
		res = String('');
		$pyjs.track.lineno=777;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){var $pyjs_dbg_220_retry = 0;
try{var $pyjs_dbg_220_res=name;}catch($pyjs_dbg_220_err){
    if ($pyjs_dbg_220_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 777 :\n" + $pyjs_dbg_220_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_220_retry) {
        case 1:
            $pyjs_dbg_220_res=name;
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_220_err;
    }
}return $pyjs_dbg_220_res})();
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
			if ((function(){var $pyjs_dbg_222_retry = 0;
try{var $pyjs_dbg_222_res=pyjslib['bool']((function(){var $pyjs_dbg_221_retry = 0;
try{var $pyjs_dbg_221_res=c['isupper']();}catch($pyjs_dbg_221_err){
    if ($pyjs_dbg_221_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 778 :\n" + $pyjs_dbg_221_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_221_retry) {
        case 1:
            $pyjs_dbg_221_res=c['isupper']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_221_err;
    }
}return $pyjs_dbg_221_res})());}catch($pyjs_dbg_222_err){
    if ($pyjs_dbg_222_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 778 :\n" + $pyjs_dbg_222_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_222_retry) {
        case 1:
            $pyjs_dbg_222_res=pyjslib['bool']((function(){var $pyjs_dbg_221_retry = 0;
try{var $pyjs_dbg_221_res=c['isupper']();}catch($pyjs_dbg_221_err){
    if ($pyjs_dbg_221_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 778 :\n" + $pyjs_dbg_221_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_221_retry) {
        case 1:
            $pyjs_dbg_221_res=c['isupper']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_221_err;
    }
}return $pyjs_dbg_221_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_222_err;
    }
}return $pyjs_dbg_222_res})()) {
				$pyjs.track.lineno=779;
				res = (typeof ($add35=res)==typeof ($add36=(typeof ($add33=joiner)==typeof ($add34=(function(){var $pyjs_dbg_223_retry = 0;
try{var $pyjs_dbg_223_res=c['lower']();}catch($pyjs_dbg_223_err){
    if ($pyjs_dbg_223_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 779 :\n" + $pyjs_dbg_223_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_223_retry) {
        case 1:
            $pyjs_dbg_223_res=c['lower']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_223_err;
    }
}return $pyjs_dbg_223_res})()) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					pyjslib['op_add']($add33,$add34))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					pyjslib['op_add']($add35,$add36));
			}
			else {
				$pyjs.track.lineno=781;
				res = (typeof ($add37=res)==typeof ($add38=c) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					pyjslib['op_add']($add37,$add38));
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
		$pyjs.track.lineno=786;
		(function(){var $pyjs_dbg_224_retry = 0;
try{var $pyjs_dbg_224_res=pyjamas.DOM.elem['removeAttribute'](attribute);}catch($pyjs_dbg_224_err){
    if ($pyjs_dbg_224_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 786 :\n" + $pyjs_dbg_224_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_224_retry) {
        case 1:
            $pyjs_dbg_224_res=pyjamas.DOM.elem['removeAttribute'](attribute);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_224_err;
    }
}return $pyjs_dbg_224_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['removeAttribute'].__name__ = 'removeAttribute';

	pyjamas['DOM']['removeAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$pyjs.track.lineno=789;
	pyjamas['DOM']['setAttribute'] = function(element, attribute, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:789};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=789;
		$pyjs.track.lineno=790;
		(function(){var $pyjs_dbg_225_retry = 0;
try{var $pyjs_dbg_225_res=pyjslib['setattr'](element, attribute, value);}catch($pyjs_dbg_225_err){
    if ($pyjs_dbg_225_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 790 :\n" + $pyjs_dbg_225_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_225_retry) {
        case 1:
            $pyjs_dbg_225_res=pyjslib['setattr'](element, attribute, value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_225_err;
    }
}return $pyjs_dbg_225_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
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
		(function(){var $pyjs_dbg_226_retry = 0;
try{var $pyjs_dbg_226_res=element['setAttribute'](attribute, value);}catch($pyjs_dbg_226_err){
    if ($pyjs_dbg_226_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 794 :\n" + $pyjs_dbg_226_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_226_retry) {
        case 1:
            $pyjs_dbg_226_res=element['setAttribute'](attribute, value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_226_err;
    }
}return $pyjs_dbg_226_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setElemAttribute'].__name__ = 'setElemAttribute';

	pyjamas['DOM']['setElemAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$pyjs.track.lineno=797;
	pyjamas['DOM']['setBooleanAttribute'] = function(elem, attr, value) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:797};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=797;
		$pyjs.track.lineno=798;
		mf = (function(){var $pyjs_dbg_227_retry = 0;
try{var $pyjs_dbg_227_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_227_err){
    if ($pyjs_dbg_227_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 798 :\n" + $pyjs_dbg_227_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_227_retry) {
        case 1:
            $pyjs_dbg_227_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_227_err;
    }
}return $pyjs_dbg_227_res})();
		$pyjs.track.lineno=799;
		(function(){var $pyjs_dbg_229_retry = 0;
try{var $pyjs_dbg_229_res=pyjslib['setattr'](elem, (function(){var $pyjs_dbg_228_retry = 0;
try{var $pyjs_dbg_228_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_228_err){
    if ($pyjs_dbg_228_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 799 :\n" + $pyjs_dbg_228_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_228_retry) {
        case 1:
            $pyjs_dbg_228_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_228_err;
    }
}return $pyjs_dbg_228_res})(), value);}catch($pyjs_dbg_229_err){
    if ($pyjs_dbg_229_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 799 :\n" + $pyjs_dbg_229_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_229_retry) {
        case 1:
            $pyjs_dbg_229_res=pyjslib['setattr'](elem, (function(){var $pyjs_dbg_228_retry = 0;
try{var $pyjs_dbg_228_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_228_err){
    if ($pyjs_dbg_228_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 799 :\n" + $pyjs_dbg_228_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_228_retry) {
        case 1:
            $pyjs_dbg_228_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_228_err;
    }
}return $pyjs_dbg_228_res})(), value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_229_err;
    }
}return $pyjs_dbg_229_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	pyjamas['DOM']['setBooleanAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=802;
	pyjamas['DOM']['setCapture'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:802};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=802;
		$pyjs.track.lineno=803;
		$pyjs.track.lineno=804;
		pyjamas['DOM']['sCaptureElem'] = elem;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setCapture'].__name__ = 'setCapture';

	pyjamas['DOM']['setCapture'].__bind_type__ = 0;
	pyjamas['DOM']['setCapture'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=808;
	pyjamas['DOM']['setEventListener'] = function(element, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:808};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=808;
		$pyjs.track.lineno=815;
		(function(){var $pyjs_dbg_230_retry = 0;
try{var $pyjs_dbg_230_res=pyjamas['DOM']['set_listener'](element, listener);}catch($pyjs_dbg_230_err){
    if ($pyjs_dbg_230_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 815 :\n" + $pyjs_dbg_230_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_230_retry) {
        case 1:
            $pyjs_dbg_230_res=pyjamas['DOM']['set_listener'](element, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_230_err;
    }
}return $pyjs_dbg_230_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setEventListener'].__name__ = 'setEventListener';

	pyjamas['DOM']['setEventListener'].__bind_type__ = 0;
	pyjamas['DOM']['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$pyjs.track.lineno=818;
	pyjamas['DOM']['setInnerHTML'] = function(element, html) {
		var $pyjs_try_err,err;
		$pyjs.track={module:'pyjamas.DOM',lineno:818};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=818;
		$pyjs.track.lineno=819;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=820;
			element.innerHtml = html;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 819};
			sys.save_exception_stack();
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.__last_exception__.except_lineno = 822;
				err = $pyjs_try_err;
				$pyjs.track.lineno=822;
				element.innerHTML = html;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setInnerHTML'].__name__ = 'setInnerHTML';

	pyjamas['DOM']['setInnerHTML'].__bind_type__ = 0;
	pyjamas['DOM']['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$pyjs.track.lineno=825;
	pyjamas['DOM']['setInnerText'] = function(elem, text) {
		var $attr234,$attr231,$attr232,$attr233,$or11,$or10;
		$pyjs.track={module:'pyjamas.DOM',lineno:825};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=825;
		$pyjs.track.lineno=827;
		while ((function(){var $pyjs_dbg_231_retry = 0;
try{var $pyjs_dbg_231_res=pyjslib['bool'](((($attr231=elem['firstChild']) !== null & ($attr232=elem).__is_instance__) && typeof $attr231 == 'function'?
					pyjslib['getattr']($attr232, 'firstChild'):
					elem['firstChild']));}catch($pyjs_dbg_231_err){
    if ($pyjs_dbg_231_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 827 :\n" + $pyjs_dbg_231_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_231_retry) {
        case 1:
            $pyjs_dbg_231_res=pyjslib['bool'](((($attr231=elem['firstChild']) !== null & ($attr232=elem).__is_instance__) && typeof $attr231 == 'function'?
					pyjslib['getattr']($attr232, 'firstChild'):
					elem['firstChild']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_231_err;
    }
}return $pyjs_dbg_231_res})()) {
			$pyjs.track.lineno=828;
			(function(){var $pyjs_dbg_232_retry = 0;
try{var $pyjs_dbg_232_res=elem['removeChild'](((($attr233=elem['firstChild']) !== null & ($attr234=elem).__is_instance__) && typeof $attr233 == 'function'?
						pyjslib['getattr']($attr234, 'firstChild'):
						elem['firstChild']));}catch($pyjs_dbg_232_err){
    if ($pyjs_dbg_232_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 828 :\n" + $pyjs_dbg_232_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_232_retry) {
        case 1:
            $pyjs_dbg_232_res=elem['removeChild'](((($attr233=elem['firstChild']) !== null & ($attr234=elem).__is_instance__) && typeof $attr233 == 'function'?
						pyjslib['getattr']($attr234, 'firstChild'):
						elem['firstChild']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_232_err;
    }
}return $pyjs_dbg_232_res})();
		}
		$pyjs.track.lineno=829;
		elem['appendChild']($doc['createTextNode']((pyjslib['bool']($or10=text)?$or10:String(''))));
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
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
		(function(){var $pyjs_dbg_234_retry = 0;
try{var $pyjs_dbg_234_res=elem['setAttribute'](attr, (function(){var $pyjs_dbg_233_retry = 0;
try{var $pyjs_dbg_233_res=pyjslib['str'](value);}catch($pyjs_dbg_233_err){
    if ($pyjs_dbg_233_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 833 :\n" + $pyjs_dbg_233_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_233_retry) {
        case 1:
            $pyjs_dbg_233_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_233_err;
    }
}return $pyjs_dbg_233_res})());}catch($pyjs_dbg_234_err){
    if ($pyjs_dbg_234_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 833 :\n" + $pyjs_dbg_234_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_234_retry) {
        case 1:
            $pyjs_dbg_234_res=elem['setAttribute'](attr, (function(){var $pyjs_dbg_233_retry = 0;
try{var $pyjs_dbg_233_res=pyjslib['str'](value);}catch($pyjs_dbg_233_err){
    if ($pyjs_dbg_233_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 833 :\n" + $pyjs_dbg_233_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_233_retry) {
        case 1:
            $pyjs_dbg_233_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_233_err;
    }
}return $pyjs_dbg_233_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_234_err;
    }
}return $pyjs_dbg_234_res})();
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
		$pyjs.track.lineno=837;
		(function(){var $pyjs_dbg_236_retry = 0;
try{var $pyjs_dbg_236_res=pyjslib['setattr'](elem, attr, (function(){var $pyjs_dbg_235_retry = 0;
try{var $pyjs_dbg_235_res=pyjslib['float_int'](value);}catch($pyjs_dbg_235_err){
    if ($pyjs_dbg_235_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 837 :\n" + $pyjs_dbg_235_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_235_retry) {
        case 1:
            $pyjs_dbg_235_res=pyjslib['float_int'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_235_err;
    }
}return $pyjs_dbg_235_res})());}catch($pyjs_dbg_236_err){
    if ($pyjs_dbg_236_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 837 :\n" + $pyjs_dbg_236_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_236_retry) {
        case 1:
            $pyjs_dbg_236_res=pyjslib['setattr'](elem, attr, (function(){var $pyjs_dbg_235_retry = 0;
try{var $pyjs_dbg_235_res=pyjslib['float_int'](value);}catch($pyjs_dbg_235_err){
    if ($pyjs_dbg_235_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 837 :\n" + $pyjs_dbg_235_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_235_retry) {
        case 1:
            $pyjs_dbg_235_res=pyjslib['float_int'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_235_err;
    }
}return $pyjs_dbg_235_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_236_err;
    }
}return $pyjs_dbg_236_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setIntAttribute'].__name__ = 'setIntAttribute';

	pyjamas['DOM']['setIntAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=840;
	pyjamas['DOM']['setIntStyleAttribute'] = function(elem, attr, value) {
		var $attr235,$attr236,mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:840};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=840;
		$pyjs.track.lineno=841;
		mf = (function(){var $pyjs_dbg_237_retry = 0;
try{var $pyjs_dbg_237_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_237_err){
    if ($pyjs_dbg_237_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 841 :\n" + $pyjs_dbg_237_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_237_retry) {
        case 1:
            $pyjs_dbg_237_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_237_err;
    }
}return $pyjs_dbg_237_res})();
		$pyjs.track.lineno=842;
		if ((function(){var $pyjs_dbg_239_retry = 0;
try{var $pyjs_dbg_239_res=pyjslib['bool']((function(){var $pyjs_dbg_238_retry = 0;
try{var $pyjs_dbg_238_res=pyjslib['hasattr'](((($attr235=elem['style']) !== null & ($attr236=elem).__is_instance__) && typeof $attr235 == 'function'?
					pyjslib['getattr']($attr236, 'style'):
					elem['style']), String('setProperty'));}catch($pyjs_dbg_238_err){
    if ($pyjs_dbg_238_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 842 :\n" + $pyjs_dbg_238_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_238_retry) {
        case 1:
            $pyjs_dbg_238_res=pyjslib['hasattr'](((($attr235=elem['style']) !== null & ($attr236=elem).__is_instance__) && typeof $attr235 == 'function'?
					pyjslib['getattr']($attr236, 'style'):
					elem['style']), String('setProperty'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_238_err;
    }
}return $pyjs_dbg_238_res})());}catch($pyjs_dbg_239_err){
    if ($pyjs_dbg_239_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 842 :\n" + $pyjs_dbg_239_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_239_retry) {
        case 1:
            $pyjs_dbg_239_res=pyjslib['bool']((function(){var $pyjs_dbg_238_retry = 0;
try{var $pyjs_dbg_238_res=pyjslib['hasattr'](((($attr235=elem['style']) !== null & ($attr236=elem).__is_instance__) && typeof $attr235 == 'function'?
					pyjslib['getattr']($attr236, 'style'):
					elem['style']), String('setProperty'));}catch($pyjs_dbg_238_err){
    if ($pyjs_dbg_238_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 842 :\n" + $pyjs_dbg_238_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_238_retry) {
        case 1:
            $pyjs_dbg_238_res=pyjslib['hasattr'](((($attr235=elem['style']) !== null & ($attr236=elem).__is_instance__) && typeof $attr235 == 'function'?
					pyjslib['getattr']($attr236, 'style'):
					elem['style']), String('setProperty'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_238_err;
    }
}return $pyjs_dbg_238_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_239_err;
    }
}return $pyjs_dbg_239_res})()) {
			$pyjs.track.lineno=843;
			(function(){var $pyjs_dbg_242_retry = 0;
try{var $pyjs_dbg_242_res=elem['style']['setProperty']((function(){var $pyjs_dbg_240_retry = 0;
try{var $pyjs_dbg_240_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_240_err){
    if ($pyjs_dbg_240_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 843 :\n" + $pyjs_dbg_240_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_240_retry) {
        case 1:
            $pyjs_dbg_240_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_240_err;
    }
}return $pyjs_dbg_240_res})(), (function(){var $pyjs_dbg_241_retry = 0;
try{var $pyjs_dbg_241_res=pyjslib['str'](value);}catch($pyjs_dbg_241_err){
    if ($pyjs_dbg_241_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 843 :\n" + $pyjs_dbg_241_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_241_retry) {
        case 1:
            $pyjs_dbg_241_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_241_err;
    }
}return $pyjs_dbg_241_res})(), String(''));}catch($pyjs_dbg_242_err){
    if ($pyjs_dbg_242_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 843 :\n" + $pyjs_dbg_242_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_242_retry) {
        case 1:
            $pyjs_dbg_242_res=elem['style']['setProperty']((function(){var $pyjs_dbg_240_retry = 0;
try{var $pyjs_dbg_240_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_240_err){
    if ($pyjs_dbg_240_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 843 :\n" + $pyjs_dbg_240_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_240_retry) {
        case 1:
            $pyjs_dbg_240_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_240_err;
    }
}return $pyjs_dbg_240_res})(), (function(){var $pyjs_dbg_241_retry = 0;
try{var $pyjs_dbg_241_res=pyjslib['str'](value);}catch($pyjs_dbg_241_err){
    if ($pyjs_dbg_241_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 843 :\n" + $pyjs_dbg_241_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_241_retry) {
        case 1:
            $pyjs_dbg_241_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_241_err;
    }
}return $pyjs_dbg_241_res})(), String(''));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_242_err;
    }
}return $pyjs_dbg_242_res})();
		}
		else {
			$pyjs.track.lineno=845;
			(function(){var $pyjs_dbg_245_retry = 0;
try{var $pyjs_dbg_245_res=elem['style']['setAttribute']((function(){var $pyjs_dbg_243_retry = 0;
try{var $pyjs_dbg_243_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_243_err){
    if ($pyjs_dbg_243_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 845 :\n" + $pyjs_dbg_243_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_243_retry) {
        case 1:
            $pyjs_dbg_243_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_243_err;
    }
}return $pyjs_dbg_243_res})(), (function(){var $pyjs_dbg_244_retry = 0;
try{var $pyjs_dbg_244_res=pyjslib['str'](value);}catch($pyjs_dbg_244_err){
    if ($pyjs_dbg_244_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 845 :\n" + $pyjs_dbg_244_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_244_retry) {
        case 1:
            $pyjs_dbg_244_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_244_err;
    }
}return $pyjs_dbg_244_res})(), String(''));}catch($pyjs_dbg_245_err){
    if ($pyjs_dbg_245_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 845 :\n" + $pyjs_dbg_245_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_245_retry) {
        case 1:
            $pyjs_dbg_245_res=elem['style']['setAttribute']((function(){var $pyjs_dbg_243_retry = 0;
try{var $pyjs_dbg_243_res=mf['mash_attrib'](attr);}catch($pyjs_dbg_243_err){
    if ($pyjs_dbg_243_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 845 :\n" + $pyjs_dbg_243_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_243_retry) {
        case 1:
            $pyjs_dbg_243_res=mf['mash_attrib'](attr);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_243_err;
    }
}return $pyjs_dbg_243_res})(), (function(){var $pyjs_dbg_244_retry = 0;
try{var $pyjs_dbg_244_res=pyjslib['str'](value);}catch($pyjs_dbg_244_err){
    if ($pyjs_dbg_244_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 845 :\n" + $pyjs_dbg_244_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_244_retry) {
        case 1:
            $pyjs_dbg_244_res=pyjslib['str'](value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_244_err;
    }
}return $pyjs_dbg_244_res})(), String(''));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_245_err;
    }
}return $pyjs_dbg_245_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
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
		$pyjs.track.lineno=849;
		option = (function(){var $pyjs_dbg_246_retry = 0;
try{var $pyjs_dbg_246_res=select['options']['item'](index);}catch($pyjs_dbg_246_err){
    if ($pyjs_dbg_246_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 849 :\n" + $pyjs_dbg_246_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_246_retry) {
        case 1:
            $pyjs_dbg_246_res=select['options']['item'](index);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_246_err;
    }
}return $pyjs_dbg_246_res})();
		$pyjs.track.lineno=850;
		option.textContent = text;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setOptionText'].__name__ = 'setOptionText';

	pyjamas['DOM']['setOptionText'].__bind_type__ = 0;
	pyjamas['DOM']['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$pyjs.track.lineno=853;
	pyjamas['DOM']['setStyleAttribute'] = function(element, name, value) {
		var $attr237,$attr238;
		$pyjs.track={module:'pyjamas.DOM',lineno:853};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=853;
		$pyjs.track.lineno=854;
		if ((function(){var $pyjs_dbg_248_retry = 0;
try{var $pyjs_dbg_248_res=pyjslib['bool']((function(){var $pyjs_dbg_247_retry = 0;
try{var $pyjs_dbg_247_res=pyjslib['hasattr'](((($attr237=element['style']) !== null & ($attr238=element).__is_instance__) && typeof $attr237 == 'function'?
					pyjslib['getattr']($attr238, 'style'):
					element['style']), String('setProperty'));}catch($pyjs_dbg_247_err){
    if ($pyjs_dbg_247_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 854 :\n" + $pyjs_dbg_247_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_247_retry) {
        case 1:
            $pyjs_dbg_247_res=pyjslib['hasattr'](((($attr237=element['style']) !== null & ($attr238=element).__is_instance__) && typeof $attr237 == 'function'?
					pyjslib['getattr']($attr238, 'style'):
					element['style']), String('setProperty'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_247_err;
    }
}return $pyjs_dbg_247_res})());}catch($pyjs_dbg_248_err){
    if ($pyjs_dbg_248_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 854 :\n" + $pyjs_dbg_248_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_248_retry) {
        case 1:
            $pyjs_dbg_248_res=pyjslib['bool']((function(){var $pyjs_dbg_247_retry = 0;
try{var $pyjs_dbg_247_res=pyjslib['hasattr'](((($attr237=element['style']) !== null & ($attr238=element).__is_instance__) && typeof $attr237 == 'function'?
					pyjslib['getattr']($attr238, 'style'):
					element['style']), String('setProperty'));}catch($pyjs_dbg_247_err){
    if ($pyjs_dbg_247_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 854 :\n" + $pyjs_dbg_247_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_247_retry) {
        case 1:
            $pyjs_dbg_247_res=pyjslib['hasattr'](((($attr237=element['style']) !== null & ($attr238=element).__is_instance__) && typeof $attr237 == 'function'?
					pyjslib['getattr']($attr238, 'style'):
					element['style']), String('setProperty'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_247_err;
    }
}return $pyjs_dbg_247_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_248_err;
    }
}return $pyjs_dbg_248_res})()) {
			$pyjs.track.lineno=855;
			(function(){var $pyjs_dbg_250_retry = 0;
try{var $pyjs_dbg_250_res=element['style']['setProperty']((function(){var $pyjs_dbg_249_retry = 0;
try{var $pyjs_dbg_249_res=pyjamas['DOM']['mash_name_for_glib'](name);}catch($pyjs_dbg_249_err){
    if ($pyjs_dbg_249_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 855 :\n" + $pyjs_dbg_249_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_249_retry) {
        case 1:
            $pyjs_dbg_249_res=pyjamas['DOM']['mash_name_for_glib'](name);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_249_err;
    }
}return $pyjs_dbg_249_res})(), value, String(''));}catch($pyjs_dbg_250_err){
    if ($pyjs_dbg_250_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 855 :\n" + $pyjs_dbg_250_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_250_retry) {
        case 1:
            $pyjs_dbg_250_res=element['style']['setProperty']((function(){var $pyjs_dbg_249_retry = 0;
try{var $pyjs_dbg_249_res=pyjamas['DOM']['mash_name_for_glib'](name);}catch($pyjs_dbg_249_err){
    if ($pyjs_dbg_249_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 855 :\n" + $pyjs_dbg_249_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_249_retry) {
        case 1:
            $pyjs_dbg_249_res=pyjamas['DOM']['mash_name_for_glib'](name);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_249_err;
    }
}return $pyjs_dbg_249_res})(), value, String(''));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_250_err;
    }
}return $pyjs_dbg_250_res})();
		}
		else {
			$pyjs.track.lineno=857;
			(function(){var $pyjs_dbg_251_retry = 0;
try{var $pyjs_dbg_251_res=element['style']['setAttribute'](name, value, String(''));}catch($pyjs_dbg_251_err){
    if ($pyjs_dbg_251_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 857 :\n" + $pyjs_dbg_251_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_251_retry) {
        case 1:
            $pyjs_dbg_251_res=element['style']['setAttribute'](name, value, String(''));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_251_err;
    }
}return $pyjs_dbg_251_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['setStyleAttribute'].__name__ = 'setStyleAttribute';

	pyjamas['DOM']['setStyleAttribute'].__bind_type__ = 0;
	pyjamas['DOM']['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
	$pyjs.track.lineno=860;
	pyjamas['DOM']['sinkEvents'] = function(element, bits) {
		var mask,mf,cb;
		$pyjs.track={module:'pyjamas.DOM',lineno:860};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=860;
		$pyjs.track.lineno=867;
		mask = ((function(){var $pyjs_dbg_252_retry = 0;
try{var $pyjs_dbg_252_res=pyjamas['DOM']['getEventsSunk'](element);}catch($pyjs_dbg_252_err){
    if ($pyjs_dbg_252_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 867 :\n" + $pyjs_dbg_252_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_252_retry) {
        case 1:
            $pyjs_dbg_252_res=pyjamas['DOM']['getEventsSunk'](element);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_252_err;
    }
}return $pyjs_dbg_252_res})())^(bits);
		$pyjs.track.lineno=868;
		(function(){var $pyjs_dbg_253_retry = 0;
try{var $pyjs_dbg_253_res=pyjamas['DOM']['eventbitsmap'].__setitem__(element, bits);}catch($pyjs_dbg_253_err){
    if ($pyjs_dbg_253_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 868 :\n" + $pyjs_dbg_253_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_253_retry) {
        case 1:
            $pyjs_dbg_253_res=pyjamas['DOM']['eventbitsmap'].__setitem__(element, bits);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_253_err;
    }
}return $pyjs_dbg_253_res})();
		$pyjs.track.lineno=869;
		if ((function(){var $pyjs_dbg_254_retry = 0;
try{var $pyjs_dbg_254_res=pyjslib['bool'](!pyjslib['bool'](mask));}catch($pyjs_dbg_254_err){
    if ($pyjs_dbg_254_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 869 :\n" + $pyjs_dbg_254_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_254_retry) {
        case 1:
            $pyjs_dbg_254_res=pyjslib['bool'](!pyjslib['bool'](mask));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_254_err;
    }
}return $pyjs_dbg_254_res})()) {
			$pyjs.track.lineno=870;
			$pyjs.track.lineno=870;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=872;
		bits = mask;
		$pyjs.track.lineno=874;
		if ((function(){var $pyjs_dbg_255_retry = 0;
try{var $pyjs_dbg_255_res=pyjslib['bool'](!pyjslib['bool'](bits));}catch($pyjs_dbg_255_err){
    if ($pyjs_dbg_255_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 874 :\n" + $pyjs_dbg_255_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_255_retry) {
        case 1:
            $pyjs_dbg_255_res=pyjslib['bool'](!pyjslib['bool'](bits));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_255_err;
    }
}return $pyjs_dbg_255_res})()) {
			$pyjs.track.lineno=875;
			$pyjs.track.lineno=875;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=877;
		cb = pyjamas['DOM']['_dispatchEvent'];
		$pyjs.track.lineno=878;
		mf = (function(){var $pyjs_dbg_256_retry = 0;
try{var $pyjs_dbg_256_res=pyjamas.DOM.get_main_frame();}catch($pyjs_dbg_256_err){
    if ($pyjs_dbg_256_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 878 :\n" + $pyjs_dbg_256_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_256_retry) {
        case 1:
            $pyjs_dbg_256_res=pyjamas.DOM.get_main_frame();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_256_err;
    }
}return $pyjs_dbg_256_res})();
		$pyjs.track.lineno=879;
		if ((function(){var $pyjs_dbg_257_retry = 0;
try{var $pyjs_dbg_257_res=pyjslib['bool']((bits)&(1));}catch($pyjs_dbg_257_err){
    if ($pyjs_dbg_257_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 879 :\n" + $pyjs_dbg_257_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_257_retry) {
        case 1:
            $pyjs_dbg_257_res=pyjslib['bool']((bits)&(1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_257_err;
    }
}return $pyjs_dbg_257_res})()) {
			$pyjs.track.lineno=880;
			(function(){var $pyjs_dbg_258_retry = 0;
try{var $pyjs_dbg_258_res=mf['addEventListener'](element, String('click'), cb);}catch($pyjs_dbg_258_err){
    if ($pyjs_dbg_258_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 880 :\n" + $pyjs_dbg_258_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_258_retry) {
        case 1:
            $pyjs_dbg_258_res=mf['addEventListener'](element, String('click'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_258_err;
    }
}return $pyjs_dbg_258_res})();
		}
		$pyjs.track.lineno=881;
		if ((function(){var $pyjs_dbg_259_retry = 0;
try{var $pyjs_dbg_259_res=pyjslib['bool']((bits)&(2));}catch($pyjs_dbg_259_err){
    if ($pyjs_dbg_259_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 881 :\n" + $pyjs_dbg_259_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_259_retry) {
        case 1:
            $pyjs_dbg_259_res=pyjslib['bool']((bits)&(2));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_259_err;
    }
}return $pyjs_dbg_259_res})()) {
			$pyjs.track.lineno=882;
			(function(){var $pyjs_dbg_260_retry = 0;
try{var $pyjs_dbg_260_res=mf['addEventListener'](element, String('dblclick'), cb);}catch($pyjs_dbg_260_err){
    if ($pyjs_dbg_260_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 882 :\n" + $pyjs_dbg_260_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_260_retry) {
        case 1:
            $pyjs_dbg_260_res=mf['addEventListener'](element, String('dblclick'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_260_err;
    }
}return $pyjs_dbg_260_res})();
		}
		$pyjs.track.lineno=883;
		if ((function(){var $pyjs_dbg_261_retry = 0;
try{var $pyjs_dbg_261_res=pyjslib['bool']((bits)&(4));}catch($pyjs_dbg_261_err){
    if ($pyjs_dbg_261_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 883 :\n" + $pyjs_dbg_261_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_261_retry) {
        case 1:
            $pyjs_dbg_261_res=pyjslib['bool']((bits)&(4));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_261_err;
    }
}return $pyjs_dbg_261_res})()) {
			$pyjs.track.lineno=884;
			(function(){var $pyjs_dbg_262_retry = 0;
try{var $pyjs_dbg_262_res=mf['addEventListener'](element, String('mousedown'), cb);}catch($pyjs_dbg_262_err){
    if ($pyjs_dbg_262_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 884 :\n" + $pyjs_dbg_262_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_262_retry) {
        case 1:
            $pyjs_dbg_262_res=mf['addEventListener'](element, String('mousedown'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_262_err;
    }
}return $pyjs_dbg_262_res})();
		}
		$pyjs.track.lineno=885;
		if ((function(){var $pyjs_dbg_263_retry = 0;
try{var $pyjs_dbg_263_res=pyjslib['bool']((bits)&(8));}catch($pyjs_dbg_263_err){
    if ($pyjs_dbg_263_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 885 :\n" + $pyjs_dbg_263_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_263_retry) {
        case 1:
            $pyjs_dbg_263_res=pyjslib['bool']((bits)&(8));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_263_err;
    }
}return $pyjs_dbg_263_res})()) {
			$pyjs.track.lineno=886;
			(function(){var $pyjs_dbg_264_retry = 0;
try{var $pyjs_dbg_264_res=mf['addEventListener'](element, String('mouseup'), cb);}catch($pyjs_dbg_264_err){
    if ($pyjs_dbg_264_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 886 :\n" + $pyjs_dbg_264_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_264_retry) {
        case 1:
            $pyjs_dbg_264_res=mf['addEventListener'](element, String('mouseup'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_264_err;
    }
}return $pyjs_dbg_264_res})();
		}
		$pyjs.track.lineno=887;
		if ((function(){var $pyjs_dbg_265_retry = 0;
try{var $pyjs_dbg_265_res=pyjslib['bool']((bits)&(16));}catch($pyjs_dbg_265_err){
    if ($pyjs_dbg_265_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 887 :\n" + $pyjs_dbg_265_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_265_retry) {
        case 1:
            $pyjs_dbg_265_res=pyjslib['bool']((bits)&(16));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_265_err;
    }
}return $pyjs_dbg_265_res})()) {
			$pyjs.track.lineno=888;
			(function(){var $pyjs_dbg_266_retry = 0;
try{var $pyjs_dbg_266_res=mf['addEventListener'](element, String('mouseover'), cb);}catch($pyjs_dbg_266_err){
    if ($pyjs_dbg_266_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 888 :\n" + $pyjs_dbg_266_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_266_retry) {
        case 1:
            $pyjs_dbg_266_res=mf['addEventListener'](element, String('mouseover'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_266_err;
    }
}return $pyjs_dbg_266_res})();
		}
		$pyjs.track.lineno=889;
		if ((function(){var $pyjs_dbg_267_retry = 0;
try{var $pyjs_dbg_267_res=pyjslib['bool']((bits)&(32));}catch($pyjs_dbg_267_err){
    if ($pyjs_dbg_267_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 889 :\n" + $pyjs_dbg_267_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_267_retry) {
        case 1:
            $pyjs_dbg_267_res=pyjslib['bool']((bits)&(32));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_267_err;
    }
}return $pyjs_dbg_267_res})()) {
			$pyjs.track.lineno=890;
			(function(){var $pyjs_dbg_268_retry = 0;
try{var $pyjs_dbg_268_res=mf['addEventListener'](element, String('mouseout'), cb);}catch($pyjs_dbg_268_err){
    if ($pyjs_dbg_268_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 890 :\n" + $pyjs_dbg_268_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_268_retry) {
        case 1:
            $pyjs_dbg_268_res=mf['addEventListener'](element, String('mouseout'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_268_err;
    }
}return $pyjs_dbg_268_res})();
		}
		$pyjs.track.lineno=891;
		if ((function(){var $pyjs_dbg_269_retry = 0;
try{var $pyjs_dbg_269_res=pyjslib['bool']((bits)&(64));}catch($pyjs_dbg_269_err){
    if ($pyjs_dbg_269_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 891 :\n" + $pyjs_dbg_269_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_269_retry) {
        case 1:
            $pyjs_dbg_269_res=pyjslib['bool']((bits)&(64));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_269_err;
    }
}return $pyjs_dbg_269_res})()) {
			$pyjs.track.lineno=892;
			(function(){var $pyjs_dbg_270_retry = 0;
try{var $pyjs_dbg_270_res=mf['addEventListener'](element, String('mousemove'), cb);}catch($pyjs_dbg_270_err){
    if ($pyjs_dbg_270_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 892 :\n" + $pyjs_dbg_270_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_270_retry) {
        case 1:
            $pyjs_dbg_270_res=mf['addEventListener'](element, String('mousemove'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_270_err;
    }
}return $pyjs_dbg_270_res})();
		}
		$pyjs.track.lineno=893;
		if ((function(){var $pyjs_dbg_271_retry = 0;
try{var $pyjs_dbg_271_res=pyjslib['bool']((bits)&(128));}catch($pyjs_dbg_271_err){
    if ($pyjs_dbg_271_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 893 :\n" + $pyjs_dbg_271_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_271_retry) {
        case 1:
            $pyjs_dbg_271_res=pyjslib['bool']((bits)&(128));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_271_err;
    }
}return $pyjs_dbg_271_res})()) {
			$pyjs.track.lineno=894;
			(function(){var $pyjs_dbg_272_retry = 0;
try{var $pyjs_dbg_272_res=mf['addEventListener'](element, String('keydown'), cb);}catch($pyjs_dbg_272_err){
    if ($pyjs_dbg_272_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 894 :\n" + $pyjs_dbg_272_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_272_retry) {
        case 1:
            $pyjs_dbg_272_res=mf['addEventListener'](element, String('keydown'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_272_err;
    }
}return $pyjs_dbg_272_res})();
		}
		$pyjs.track.lineno=895;
		if ((function(){var $pyjs_dbg_273_retry = 0;
try{var $pyjs_dbg_273_res=pyjslib['bool']((bits)&(256));}catch($pyjs_dbg_273_err){
    if ($pyjs_dbg_273_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 895 :\n" + $pyjs_dbg_273_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_273_retry) {
        case 1:
            $pyjs_dbg_273_res=pyjslib['bool']((bits)&(256));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_273_err;
    }
}return $pyjs_dbg_273_res})()) {
			$pyjs.track.lineno=896;
			(function(){var $pyjs_dbg_274_retry = 0;
try{var $pyjs_dbg_274_res=mf['addEventListener'](element, String('keypress'), cb);}catch($pyjs_dbg_274_err){
    if ($pyjs_dbg_274_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 896 :\n" + $pyjs_dbg_274_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_274_retry) {
        case 1:
            $pyjs_dbg_274_res=mf['addEventListener'](element, String('keypress'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_274_err;
    }
}return $pyjs_dbg_274_res})();
		}
		$pyjs.track.lineno=897;
		if ((function(){var $pyjs_dbg_275_retry = 0;
try{var $pyjs_dbg_275_res=pyjslib['bool']((bits)&(512));}catch($pyjs_dbg_275_err){
    if ($pyjs_dbg_275_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 897 :\n" + $pyjs_dbg_275_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_275_retry) {
        case 1:
            $pyjs_dbg_275_res=pyjslib['bool']((bits)&(512));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_275_err;
    }
}return $pyjs_dbg_275_res})()) {
			$pyjs.track.lineno=898;
			(function(){var $pyjs_dbg_276_retry = 0;
try{var $pyjs_dbg_276_res=mf['addEventListener'](element, String('keyup'), cb);}catch($pyjs_dbg_276_err){
    if ($pyjs_dbg_276_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 898 :\n" + $pyjs_dbg_276_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_276_retry) {
        case 1:
            $pyjs_dbg_276_res=mf['addEventListener'](element, String('keyup'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_276_err;
    }
}return $pyjs_dbg_276_res})();
		}
		$pyjs.track.lineno=899;
		if ((function(){var $pyjs_dbg_277_retry = 0;
try{var $pyjs_dbg_277_res=pyjslib['bool']((bits)&(1024));}catch($pyjs_dbg_277_err){
    if ($pyjs_dbg_277_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 899 :\n" + $pyjs_dbg_277_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_277_retry) {
        case 1:
            $pyjs_dbg_277_res=pyjslib['bool']((bits)&(1024));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_277_err;
    }
}return $pyjs_dbg_277_res})()) {
			$pyjs.track.lineno=900;
			(function(){var $pyjs_dbg_278_retry = 0;
try{var $pyjs_dbg_278_res=mf['addEventListener'](element, String('change'), cb);}catch($pyjs_dbg_278_err){
    if ($pyjs_dbg_278_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 900 :\n" + $pyjs_dbg_278_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_278_retry) {
        case 1:
            $pyjs_dbg_278_res=mf['addEventListener'](element, String('change'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_278_err;
    }
}return $pyjs_dbg_278_res})();
		}
		$pyjs.track.lineno=901;
		if ((function(){var $pyjs_dbg_279_retry = 0;
try{var $pyjs_dbg_279_res=pyjslib['bool']((bits)&(2048));}catch($pyjs_dbg_279_err){
    if ($pyjs_dbg_279_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 901 :\n" + $pyjs_dbg_279_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_279_retry) {
        case 1:
            $pyjs_dbg_279_res=pyjslib['bool']((bits)&(2048));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_279_err;
    }
}return $pyjs_dbg_279_res})()) {
			$pyjs.track.lineno=902;
			(function(){var $pyjs_dbg_280_retry = 0;
try{var $pyjs_dbg_280_res=mf['addEventListener'](element, String('focus'), cb);}catch($pyjs_dbg_280_err){
    if ($pyjs_dbg_280_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 902 :\n" + $pyjs_dbg_280_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_280_retry) {
        case 1:
            $pyjs_dbg_280_res=mf['addEventListener'](element, String('focus'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_280_err;
    }
}return $pyjs_dbg_280_res})();
		}
		$pyjs.track.lineno=903;
		if ((function(){var $pyjs_dbg_281_retry = 0;
try{var $pyjs_dbg_281_res=pyjslib['bool']((bits)&(4096));}catch($pyjs_dbg_281_err){
    if ($pyjs_dbg_281_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 903 :\n" + $pyjs_dbg_281_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_281_retry) {
        case 1:
            $pyjs_dbg_281_res=pyjslib['bool']((bits)&(4096));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_281_err;
    }
}return $pyjs_dbg_281_res})()) {
			$pyjs.track.lineno=904;
			(function(){var $pyjs_dbg_282_retry = 0;
try{var $pyjs_dbg_282_res=mf['addEventListener'](element, String('blur'), cb);}catch($pyjs_dbg_282_err){
    if ($pyjs_dbg_282_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 904 :\n" + $pyjs_dbg_282_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_282_retry) {
        case 1:
            $pyjs_dbg_282_res=mf['addEventListener'](element, String('blur'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_282_err;
    }
}return $pyjs_dbg_282_res})();
		}
		$pyjs.track.lineno=905;
		if ((function(){var $pyjs_dbg_283_retry = 0;
try{var $pyjs_dbg_283_res=pyjslib['bool']((bits)&(8192));}catch($pyjs_dbg_283_err){
    if ($pyjs_dbg_283_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 905 :\n" + $pyjs_dbg_283_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_283_retry) {
        case 1:
            $pyjs_dbg_283_res=pyjslib['bool']((bits)&(8192));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_283_err;
    }
}return $pyjs_dbg_283_res})()) {
			$pyjs.track.lineno=906;
			(function(){var $pyjs_dbg_284_retry = 0;
try{var $pyjs_dbg_284_res=mf['addEventListener'](element, String('losecapture'), cb);}catch($pyjs_dbg_284_err){
    if ($pyjs_dbg_284_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 906 :\n" + $pyjs_dbg_284_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_284_retry) {
        case 1:
            $pyjs_dbg_284_res=mf['addEventListener'](element, String('losecapture'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_284_err;
    }
}return $pyjs_dbg_284_res})();
		}
		$pyjs.track.lineno=907;
		if ((function(){var $pyjs_dbg_285_retry = 0;
try{var $pyjs_dbg_285_res=pyjslib['bool']((bits)&(16384));}catch($pyjs_dbg_285_err){
    if ($pyjs_dbg_285_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 907 :\n" + $pyjs_dbg_285_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_285_retry) {
        case 1:
            $pyjs_dbg_285_res=pyjslib['bool']((bits)&(16384));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_285_err;
    }
}return $pyjs_dbg_285_res})()) {
			$pyjs.track.lineno=908;
			(function(){var $pyjs_dbg_286_retry = 0;
try{var $pyjs_dbg_286_res=mf['addEventListener'](element, String('scroll'), cb);}catch($pyjs_dbg_286_err){
    if ($pyjs_dbg_286_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 908 :\n" + $pyjs_dbg_286_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_286_retry) {
        case 1:
            $pyjs_dbg_286_res=mf['addEventListener'](element, String('scroll'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_286_err;
    }
}return $pyjs_dbg_286_res})();
		}
		$pyjs.track.lineno=909;
		if ((function(){var $pyjs_dbg_287_retry = 0;
try{var $pyjs_dbg_287_res=pyjslib['bool']((bits)&(32768));}catch($pyjs_dbg_287_err){
    if ($pyjs_dbg_287_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 909 :\n" + $pyjs_dbg_287_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_287_retry) {
        case 1:
            $pyjs_dbg_287_res=pyjslib['bool']((bits)&(32768));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_287_err;
    }
}return $pyjs_dbg_287_res})()) {
			$pyjs.track.lineno=910;
			(function(){var $pyjs_dbg_288_retry = 0;
try{var $pyjs_dbg_288_res=mf['addEventListener'](element, String('load'), cb);}catch($pyjs_dbg_288_err){
    if ($pyjs_dbg_288_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 910 :\n" + $pyjs_dbg_288_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_288_retry) {
        case 1:
            $pyjs_dbg_288_res=mf['addEventListener'](element, String('load'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_288_err;
    }
}return $pyjs_dbg_288_res})();
		}
		$pyjs.track.lineno=911;
		if ((function(){var $pyjs_dbg_289_retry = 0;
try{var $pyjs_dbg_289_res=pyjslib['bool']((bits)&(65536));}catch($pyjs_dbg_289_err){
    if ($pyjs_dbg_289_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 911 :\n" + $pyjs_dbg_289_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_289_retry) {
        case 1:
            $pyjs_dbg_289_res=pyjslib['bool']((bits)&(65536));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_289_err;
    }
}return $pyjs_dbg_289_res})()) {
			$pyjs.track.lineno=912;
			(function(){var $pyjs_dbg_290_retry = 0;
try{var $pyjs_dbg_290_res=mf['addEventListener'](element, String('error'), cb);}catch($pyjs_dbg_290_err){
    if ($pyjs_dbg_290_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 912 :\n" + $pyjs_dbg_290_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_290_retry) {
        case 1:
            $pyjs_dbg_290_res=mf['addEventListener'](element, String('error'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_290_err;
    }
}return $pyjs_dbg_290_res})();
		}
		$pyjs.track.lineno=913;
		if ((function(){var $pyjs_dbg_291_retry = 0;
try{var $pyjs_dbg_291_res=pyjslib['bool']((bits)&(131072));}catch($pyjs_dbg_291_err){
    if ($pyjs_dbg_291_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 913 :\n" + $pyjs_dbg_291_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_291_retry) {
        case 1:
            $pyjs_dbg_291_res=pyjslib['bool']((bits)&(131072));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_291_err;
    }
}return $pyjs_dbg_291_res})()) {
			$pyjs.track.lineno=914;
			(function(){var $pyjs_dbg_292_retry = 0;
try{var $pyjs_dbg_292_res=mf['addEventListener'](element, String('contextmenu'), cb);}catch($pyjs_dbg_292_err){
    if ($pyjs_dbg_292_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 914 :\n" + $pyjs_dbg_292_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_292_retry) {
        case 1:
            $pyjs_dbg_292_res=mf['addEventListener'](element, String('contextmenu'), cb);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_292_err;
    }
}return $pyjs_dbg_292_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['sinkEvents'].__name__ = 'sinkEvents';

	pyjamas['DOM']['sinkEvents'].__bind_type__ = 0;
	pyjamas['DOM']['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	$pyjs.track.lineno=917;
	pyjamas['DOM']['toString'] = function(elem) {
		var outer,tempDiv,temp;
		$pyjs.track={module:'pyjamas.DOM',lineno:917};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=917;
		$pyjs.track.lineno=918;
		temp = (function(){var $pyjs_dbg_293_retry = 0;
try{var $pyjs_dbg_293_res=elem['cloneNode'](true);}catch($pyjs_dbg_293_err){
    if ($pyjs_dbg_293_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 918 :\n" + $pyjs_dbg_293_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_293_retry) {
        case 1:
            $pyjs_dbg_293_res=elem['cloneNode'](true);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_293_err;
    }
}return $pyjs_dbg_293_res})();
		$pyjs.track.lineno=919;
		tempDiv = (function(){var $pyjs_dbg_294_retry = 0;
try{var $pyjs_dbg_294_res=pyjamas['DOM']['createDiv']();}catch($pyjs_dbg_294_err){
    if ($pyjs_dbg_294_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 919 :\n" + $pyjs_dbg_294_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_294_retry) {
        case 1:
            $pyjs_dbg_294_res=pyjamas['DOM']['createDiv']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_294_err;
    }
}return $pyjs_dbg_294_res})();
		$pyjs.track.lineno=920;
		(function(){var $pyjs_dbg_295_retry = 0;
try{var $pyjs_dbg_295_res=tempDiv['appendChild'](temp);}catch($pyjs_dbg_295_err){
    if ($pyjs_dbg_295_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 920 :\n" + $pyjs_dbg_295_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_295_retry) {
        case 1:
            $pyjs_dbg_295_res=tempDiv['appendChild'](temp);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_295_err;
    }
}return $pyjs_dbg_295_res})();
		$pyjs.track.lineno=921;
		outer = (function(){var $pyjs_dbg_296_retry = 0;
try{var $pyjs_dbg_296_res=pyjamas['DOM']['getInnerHTML'](tempDiv);}catch($pyjs_dbg_296_err){
    if ($pyjs_dbg_296_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 921 :\n" + $pyjs_dbg_296_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_296_retry) {
        case 1:
            $pyjs_dbg_296_res=pyjamas['DOM']['getInnerHTML'](tempDiv);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_296_err;
    }
}return $pyjs_dbg_296_res})();
		$pyjs.track.lineno=922;
		(function(){var $pyjs_dbg_297_retry = 0;
try{var $pyjs_dbg_297_res=pyjamas['DOM']['setInnerHTML'](temp, String(''));}catch($pyjs_dbg_297_err){
    if ($pyjs_dbg_297_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 922 :\n" + $pyjs_dbg_297_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_297_retry) {
        case 1:
            $pyjs_dbg_297_res=pyjamas['DOM']['setInnerHTML'](temp, String(''));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_297_err;
    }
}return $pyjs_dbg_297_res})();
		$pyjs.track.lineno=923;
		$pyjs.track.lineno=923;
		var $pyjs__ret = outer;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['toString'].__name__ = 'toString';

	pyjamas['DOM']['toString'].__bind_type__ = 0;
	pyjamas['DOM']['toString'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=927;
	pyjamas['DOM']['dispatchEvent'] = function(event, element, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:927};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=927;
		$pyjs.track.lineno=928;
		(function(){var $pyjs_dbg_298_retry = 0;
try{var $pyjs_dbg_298_res=pyjamas.DOM.dispatchEventImpl(event, element, listener);}catch($pyjs_dbg_298_err){
    if ($pyjs_dbg_298_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 928 :\n" + $pyjs_dbg_298_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_298_retry) {
        case 1:
            $pyjs_dbg_298_res=pyjamas.DOM.dispatchEventImpl(event, element, listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_298_err;
    }
}return $pyjs_dbg_298_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['dispatchEvent'].__name__ = 'dispatchEvent';

	pyjamas['DOM']['dispatchEvent'].__bind_type__ = 0;
	pyjamas['DOM']['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$pyjs.track.lineno=931;
	pyjamas['DOM']['previewEvent'] = function(evt) {
		var $sub26,preview,ret,$sub25;
		$pyjs.track={module:'pyjamas.DOM',lineno:931};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=931;
		$pyjs.track.lineno=932;
		ret = true;
		$pyjs.track.lineno=934;
		if ((function(){var $pyjs_dbg_300_retry = 0;
try{var $pyjs_dbg_300_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_299_retry = 0;
try{var $pyjs_dbg_299_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);}catch($pyjs_dbg_299_err){
    if ($pyjs_dbg_299_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 934 :\n" + $pyjs_dbg_299_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_299_retry) {
        case 1:
            $pyjs_dbg_299_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_299_err;
    }
}return $pyjs_dbg_299_res})(), 0) == 1));}catch($pyjs_dbg_300_err){
    if ($pyjs_dbg_300_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 934 :\n" + $pyjs_dbg_300_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_300_retry) {
        case 1:
            $pyjs_dbg_300_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_299_retry = 0;
try{var $pyjs_dbg_299_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);}catch($pyjs_dbg_299_err){
    if ($pyjs_dbg_299_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 934 :\n" + $pyjs_dbg_299_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_299_retry) {
        case 1:
            $pyjs_dbg_299_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_299_err;
    }
}return $pyjs_dbg_299_res})(), 0) == 1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_300_err;
    }
}return $pyjs_dbg_300_res})()) {
			$pyjs.track.lineno=935;
			preview = pyjamas['DOM']['sEventPreviewStack'].__getitem__((typeof ($sub25=(function(){var $pyjs_dbg_301_retry = 0;
try{var $pyjs_dbg_301_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);}catch($pyjs_dbg_301_err){
    if ($pyjs_dbg_301_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 935 :\n" + $pyjs_dbg_301_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_301_retry) {
        case 1:
            $pyjs_dbg_301_res=pyjslib['len'](pyjamas['DOM']['sEventPreviewStack']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_301_err;
    }
}return $pyjs_dbg_301_res})())==typeof ($sub26=1) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				pyjslib['op_sub']($sub25,$sub26)));
			$pyjs.track.lineno=937;
			ret = (function(){var $pyjs_dbg_302_retry = 0;
try{var $pyjs_dbg_302_res=preview['onEventPreview'](evt);}catch($pyjs_dbg_302_err){
    if ($pyjs_dbg_302_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 937 :\n" + $pyjs_dbg_302_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_302_retry) {
        case 1:
            $pyjs_dbg_302_res=preview['onEventPreview'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_302_err;
    }
}return $pyjs_dbg_302_res})();
			$pyjs.track.lineno=938;
			if ((function(){var $pyjs_dbg_303_retry = 0;
try{var $pyjs_dbg_303_res=pyjslib['bool'](!pyjslib['bool'](ret));}catch($pyjs_dbg_303_err){
    if ($pyjs_dbg_303_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 938 :\n" + $pyjs_dbg_303_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_303_retry) {
        case 1:
            $pyjs_dbg_303_res=pyjslib['bool'](!pyjslib['bool'](ret));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_303_err;
    }
}return $pyjs_dbg_303_res})()) {
				$pyjs.track.lineno=941;
				(function(){var $pyjs_dbg_304_retry = 0;
try{var $pyjs_dbg_304_res=pyjamas['DOM']['eventCancelBubble'](evt, true);}catch($pyjs_dbg_304_err){
    if ($pyjs_dbg_304_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 941 :\n" + $pyjs_dbg_304_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_304_retry) {
        case 1:
            $pyjs_dbg_304_res=pyjamas['DOM']['eventCancelBubble'](evt, true);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_304_err;
    }
}return $pyjs_dbg_304_res})();
				$pyjs.track.lineno=942;
				(function(){var $pyjs_dbg_305_retry = 0;
try{var $pyjs_dbg_305_res=pyjamas['DOM']['eventPreventDefault'](evt);}catch($pyjs_dbg_305_err){
    if ($pyjs_dbg_305_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 942 :\n" + $pyjs_dbg_305_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_305_retry) {
        case 1:
            $pyjs_dbg_305_res=pyjamas['DOM']['eventPreventDefault'](evt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_305_err;
    }
}return $pyjs_dbg_305_res})();
			}
		}
		$pyjs.track.lineno=944;
		$pyjs.track.lineno=944;
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
		$pyjs.track.lineno=949;
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
		$pyjs.track.lineno=955;
		$pyjs.track.lineno=956;
		$pyjs.track.lineno=957;
		if ((function(){var $pyjs_dbg_306_retry = 0;
try{var $pyjs_dbg_306_res=pyjslib['bool'](pyjslib['op_eq'](element, pyjamas['DOM']['sCaptureElem']));}catch($pyjs_dbg_306_err){
    if ($pyjs_dbg_306_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 957 :\n" + $pyjs_dbg_306_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_306_retry) {
        case 1:
            $pyjs_dbg_306_res=pyjslib['bool'](pyjslib['op_eq'](element, pyjamas['DOM']['sCaptureElem']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_306_err;
    }
}return $pyjs_dbg_306_res})()) {
			$pyjs.track.lineno=958;
			if ((function(){var $pyjs_dbg_308_retry = 0;
try{var $pyjs_dbg_308_res=pyjslib['bool'](pyjslib['op_eq']((function(){var $pyjs_dbg_307_retry = 0;
try{var $pyjs_dbg_307_res=pyjamas['DOM']['eventGetType'](event);}catch($pyjs_dbg_307_err){
    if ($pyjs_dbg_307_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 958 :\n" + $pyjs_dbg_307_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_307_retry) {
        case 1:
            $pyjs_dbg_307_res=pyjamas['DOM']['eventGetType'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_307_err;
    }
}return $pyjs_dbg_307_res})(), String('losecapture')));}catch($pyjs_dbg_308_err){
    if ($pyjs_dbg_308_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 958 :\n" + $pyjs_dbg_308_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_308_retry) {
        case 1:
            $pyjs_dbg_308_res=pyjslib['bool'](pyjslib['op_eq']((function(){var $pyjs_dbg_307_retry = 0;
try{var $pyjs_dbg_307_res=pyjamas['DOM']['eventGetType'](event);}catch($pyjs_dbg_307_err){
    if ($pyjs_dbg_307_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 958 :\n" + $pyjs_dbg_307_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_307_retry) {
        case 1:
            $pyjs_dbg_307_res=pyjamas['DOM']['eventGetType'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_307_err;
    }
}return $pyjs_dbg_307_res})(), String('losecapture')));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_308_err;
    }
}return $pyjs_dbg_308_res})()) {
				$pyjs.track.lineno=959;
				pyjamas['DOM']['sCaptureElem'] = null;
			}
		}
		$pyjs.track.lineno=961;
		prevCurrentEvent = pyjamas['DOM']['currentEvent'];
		$pyjs.track.lineno=962;
		pyjamas['DOM']['currentEvent'] = event;
		$pyjs.track.lineno=963;
		(function(){var $pyjs_dbg_309_retry = 0;
try{var $pyjs_dbg_309_res=listener['onBrowserEvent'](event);}catch($pyjs_dbg_309_err){
    if ($pyjs_dbg_309_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 963 :\n" + $pyjs_dbg_309_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_309_retry) {
        case 1:
            $pyjs_dbg_309_res=listener['onBrowserEvent'](event);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_309_err;
    }
}return $pyjs_dbg_309_res})();
		$pyjs.track.lineno=964;
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
		$pyjs.track.lineno=968;
		$pyjs.track.lineno=968;
		var $pyjs__ret = pyjamas['DOM']['currentEvent'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	pyjamas['DOM']['eventGetCurrentEvent'].__bind_type__ = 0;
	pyjamas['DOM']['eventGetCurrentEvent'].__args__ = [null,null];
	$pyjs.track.lineno=971;
	pyjamas['DOM']['insertListItem'] = function(select, item, value, index) {
		var option;
		$pyjs.track={module:'pyjamas.DOM',lineno:971};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=971;
		$pyjs.track.lineno=972;
		option = (function(){var $pyjs_dbg_310_retry = 0;
try{var $pyjs_dbg_310_res=pyjamas['DOM']['createElement'](String('OPTION'));}catch($pyjs_dbg_310_err){
    if ($pyjs_dbg_310_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 972 :\n" + $pyjs_dbg_310_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_310_retry) {
        case 1:
            $pyjs_dbg_310_res=pyjamas['DOM']['createElement'](String('OPTION'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_310_err;
    }
}return $pyjs_dbg_310_res})();
		$pyjs.track.lineno=973;
		(function(){var $pyjs_dbg_311_retry = 0;
try{var $pyjs_dbg_311_res=pyjamas['DOM']['setInnerText'](option, item);}catch($pyjs_dbg_311_err){
    if ($pyjs_dbg_311_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 973 :\n" + $pyjs_dbg_311_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_311_retry) {
        case 1:
            $pyjs_dbg_311_res=pyjamas['DOM']['setInnerText'](option, item);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_311_err;
    }
}return $pyjs_dbg_311_res})();
		$pyjs.track.lineno=974;
		if ((function(){var $pyjs_dbg_312_retry = 0;
try{var $pyjs_dbg_312_res=pyjslib['bool']((value !== null));}catch($pyjs_dbg_312_err){
    if ($pyjs_dbg_312_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 974 :\n" + $pyjs_dbg_312_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_312_retry) {
        case 1:
            $pyjs_dbg_312_res=pyjslib['bool']((value !== null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_312_err;
    }
}return $pyjs_dbg_312_res})()) {
			$pyjs.track.lineno=975;
			(function(){var $pyjs_dbg_313_retry = 0;
try{var $pyjs_dbg_313_res=pyjamas['DOM']['setAttribute'](option, String('value'), value);}catch($pyjs_dbg_313_err){
    if ($pyjs_dbg_313_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 975 :\n" + $pyjs_dbg_313_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_313_retry) {
        case 1:
            $pyjs_dbg_313_res=pyjamas['DOM']['setAttribute'](option, String('value'), value);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_313_err;
    }
}return $pyjs_dbg_313_res})();
		}
		$pyjs.track.lineno=976;
		if ((function(){var $pyjs_dbg_314_retry = 0;
try{var $pyjs_dbg_314_res=pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))));}catch($pyjs_dbg_314_err){
    if ($pyjs_dbg_314_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 976 :\n" + $pyjs_dbg_314_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_314_retry) {
        case 1:
            $pyjs_dbg_314_res=pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_314_err;
    }
}return $pyjs_dbg_314_res})()) {
			$pyjs.track.lineno=977;
			(function(){var $pyjs_dbg_315_retry = 0;
try{var $pyjs_dbg_315_res=pyjamas['DOM']['appendChild'](select, option);}catch($pyjs_dbg_315_err){
    if ($pyjs_dbg_315_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 977 :\n" + $pyjs_dbg_315_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_315_retry) {
        case 1:
            $pyjs_dbg_315_res=pyjamas['DOM']['appendChild'](select, option);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_315_err;
    }
}return $pyjs_dbg_315_res})();
		}
		else {
			$pyjs.track.lineno=979;
			(function(){var $pyjs_dbg_316_retry = 0;
try{var $pyjs_dbg_316_res=pyjamas['DOM']['insertChild'](select, option, index);}catch($pyjs_dbg_316_err){
    if ($pyjs_dbg_316_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 979 :\n" + $pyjs_dbg_316_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_316_retry) {
        case 1:
            $pyjs_dbg_316_res=pyjamas['DOM']['insertChild'](select, option, index);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_316_err;
    }
}return $pyjs_dbg_316_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['DOM']['insertListItem'].__name__ = 'insertListItem';

	pyjamas['DOM']['insertListItem'].__bind_type__ = 0;
	pyjamas['DOM']['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	$pyjs.track.lineno=982;
	pyjamas['DOM']['getBodyOffsetTop'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:982};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=982;
		$pyjs.track.lineno=983;
		$pyjs.track.lineno=983;
		var $pyjs__ret = 0;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	pyjamas['DOM']['getBodyOffsetTop'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetTop'].__args__ = [null,null];
	$pyjs.track.lineno=986;
	pyjamas['DOM']['getBodyOffsetLeft'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:986};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=986;
		$pyjs.track.lineno=987;
		$pyjs.track.lineno=987;
		var $pyjs__ret = 0;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['DOM']['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	pyjamas['DOM']['getBodyOffsetLeft'].__bind_type__ = 0;
	pyjamas['DOM']['getBodyOffsetLeft'].__args__ = [null,null];
	$pyjs.track.lineno=990;
	if ((function(){var $pyjs_dbg_318_retry = 0;
try{var $pyjs_dbg_318_res=pyjslib['bool']((function(){var $pyjs_dbg_317_retry = 0;
try{var $pyjs_dbg_317_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);}catch($pyjs_dbg_317_err){
    if ($pyjs_dbg_317_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 990 :\n" + $pyjs_dbg_317_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_317_retry) {
        case 1:
            $pyjs_dbg_317_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_317_err;
    }
}return $pyjs_dbg_317_res})().__contains__(((($attr239=pyjamas['DOM']['sys']['platform']) !== null & ($attr240=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr239 == 'function'?
				pyjslib['getattr']($attr240, 'platform'):
				pyjamas['DOM']['sys']['platform'])));}catch($pyjs_dbg_318_err){
    if ($pyjs_dbg_318_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 990 :\n" + $pyjs_dbg_318_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_318_retry) {
        case 1:
            $pyjs_dbg_318_res=pyjslib['bool']((function(){var $pyjs_dbg_317_retry = 0;
try{var $pyjs_dbg_317_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);}catch($pyjs_dbg_317_err){
    if ($pyjs_dbg_317_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 990 :\n" + $pyjs_dbg_317_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_317_retry) {
        case 1:
            $pyjs_dbg_317_res=pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_317_err;
    }
}return $pyjs_dbg_317_res})().__contains__(((($attr239=pyjamas['DOM']['sys']['platform']) !== null & ($attr240=pyjamas['DOM']['sys']).__is_instance__) && typeof $attr239 == 'function'?
				pyjslib['getattr']($attr240, 'platform'):
				pyjamas['DOM']['sys']['platform'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_318_err;
    }
}return $pyjs_dbg_318_res})()) {
		$pyjs.track.lineno=991;
		(function(){var $pyjs_dbg_319_retry = 0;
try{var $pyjs_dbg_319_res=pyjamas['DOM']['init']();}catch($pyjs_dbg_319_err){
    if ($pyjs_dbg_319_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.DOM at line 991 :\n" + $pyjs_dbg_319_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_319_retry) {
        case 1:
            $pyjs_dbg_319_res=pyjamas['DOM']['init']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_319_err;
    }
}return $pyjs_dbg_319_res})();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['sys', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed']
*/
