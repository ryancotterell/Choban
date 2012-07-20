/* start module: pyjamas.Window */
$pyjs.loaded_modules['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Window'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Window'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Window'] = $pyjs.loaded_modules["pyjamas.Window"];
	pyjamas['Window'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	var __name__ = pyjamas['Window'].__name__ = __mod_name__;
	pyjamas['Window'].__track_lines__ = new Array();
	var Window = pyjamas['Window'];
	pyjamas['Window'].__track_lines__[1] = "pyjamas.Window.py, line 1:\n    # This is the pyjd Window module.";
	pyjamas['Window'].__track_lines__[3] = "pyjamas.Window.py, line 3:\n    ";
	pyjamas['Window'].__track_lines__[6] = "pyjamas.Window.py, line 6:\n    \"\"\"";
	pyjamas['Window'].__track_lines__[8] = "pyjamas.Window.py, line 8:\n    closingListeners = []";
	pyjamas['Window'].__track_lines__[9] = "pyjamas.Window.py, line 9:\n    resizeListeners = []";
	pyjamas['Window'].__track_lines__[11] = "pyjamas.Window.py, line 11:\n    from __pyjamas__ import JS, doc, wnd, get_main_frame";
	pyjamas['Window'].__track_lines__[12] = "pyjamas.Window.py, line 12:\n    from pyjamas import Location";
	pyjamas['Window'].__track_lines__[13] = "pyjamas.Window.py, line 13:\n    ";
	pyjamas['Window'].__track_lines__[14] = "pyjamas.Window.py, line 14:\n    def init_listeners():";
	pyjamas['Window'].__track_lines__[15] = "pyjamas.Window.py, line 15:\n    pass";
	pyjamas['Window'].__track_lines__[17] = "pyjamas.Window.py, line 3:\n     ... def addWindowCloseListener(listener):";
	pyjamas['Window'].__track_lines__[18] = "pyjamas.Window.py, line 18:\n    closingListeners.append(listener)";
	pyjamas['Window'].__track_lines__[19] = "pyjamas.Window.py, line 19:\n    ";
	pyjamas['Window'].__track_lines__[20] = "pyjamas.Window.py, line 6:\n    \"\"\" ... def addWindowResizeListener(listener):";
	pyjamas['Window'].__track_lines__[23] = "pyjamas.Window.py, line 23:\n    def removeWindowCloseListener(listener):";
	pyjamas['Window'].__track_lines__[24] = "pyjamas.Window.py, line 24:\n    closingListeners.remove(listener)";
	pyjamas['Window'].__track_lines__[26] = "pyjamas.Window.py, line 26:\n    def removeWindowResizeListener(listener):";
	pyjamas['Window'].__track_lines__[27] = "pyjamas.Window.py, line 27:\n    resizeListeners.remove(listener)";
	pyjamas['Window'].__track_lines__[28] = "pyjamas.Window.py, line 28:\n    ";
	pyjamas['Window'].__track_lines__[29] = "pyjamas.Window.py, line 29:\n    def alert(txt):";
	pyjamas['Window'].__track_lines__[32] = "pyjamas.Window.py, line 32:\n    def confirm(msg):";
	pyjamas['Window'].__track_lines__[34] = "pyjamas.Window.py, line 30:\n    get_main_frame()._alert(txt) ... ";
	pyjamas['Window'].__track_lines__[35] = "pyjamas.Window.py, line 35:\n    def prompt(msg, defaultReply=\"\"):";
	pyjamas['Window'].__track_lines__[37] = "pyjamas.Window.py, line 37:\n    ";
	pyjamas['Window'].__track_lines__[38] = "pyjamas.Window.py, line 38:\n    def enableScrolling(enable):";
	pyjamas['Window'].__track_lines__[39] = "pyjamas.Window.py, line 39:\n    doc().body.style.overflow = enable and \'auto\' or \'hidden\'";
	pyjamas['Window'].__track_lines__[40] = "pyjamas.Window.py, line 40:\n    ";
	pyjamas['Window'].__track_lines__[41] = "pyjamas.Window.py, line 41:\n    def scrollBy(x, y):";
	pyjamas['Window'].__track_lines__[42] = "pyjamas.Window.py, line 42:\n    wnd().scrollBy(x, y)";
	pyjamas['Window'].__track_lines__[44] = "pyjamas.Window.py, line 44:\n    def scroll(x, y):";
	pyjamas['Window'].__track_lines__[45] = "pyjamas.Window.py, line 45:\n    wnd().scroll(x, y)";
	pyjamas['Window'].__track_lines__[46] = "pyjamas.Window.py, line 46:\n    ";
	pyjamas['Window'].__track_lines__[47] = "pyjamas.Window.py, line 3:\n     ... def getClientHeight():";
	pyjamas['Window'].__track_lines__[49] = "pyjamas.Window.py, line 49:\n    return wnd().innerHeight";
	pyjamas['Window'].__track_lines__[50] = "pyjamas.Window.py, line 50:\n    except:";
	pyjamas['Window'].__track_lines__[53] = "pyjamas.Window.py, line 6:\n    \"\"\" ... def getClientWidth():";
	pyjamas['Window'].__track_lines__[54] = "pyjamas.Window.py, line 54:\n    try:";
	pyjamas['Window'].__track_lines__[58] = "pyjamas.Window.py, line 58:\n    ";
	pyjamas['Window'].__track_lines__[59] = "pyjamas.Window.py, line 59:\n    def getScrollLeft():";
	pyjamas['Window'].__track_lines__[60] = "pyjamas.Window.py, line 60:\n    return getDocumentRoot().scrollLeft;";
	pyjamas['Window'].__track_lines__[62] = "pyjamas.Window.py, line 62:\n    def getScrollTop():";
	pyjamas['Window'].__track_lines__[63] = "pyjamas.Window.py, line 63:\n    return getDocumentRoot().scrollTop;";
	pyjamas['Window'].__track_lines__[65] = "pyjamas.Window.py, line 65:\n    def getDocumentRoot():";
	pyjamas['Window'].__track_lines__[66] = "pyjamas.Window.py, line 66:\n    if doc().compatMode == \'CSS1Compat\':";
	pyjamas['Window'].__track_lines__[67] = "pyjamas.Window.py, line 67:\n    return doc().documentElement";
	pyjamas['Window'].__track_lines__[68] = "pyjamas.Window.py, line 68:\n    return doc().body";
	pyjamas['Window'].__track_lines__[69] = "pyjamas.Window.py, line 69:\n    ";
	pyjamas['Window'].__track_lines__[70] = "pyjamas.Window.py, line 70:\n    def setLocation(url):";
	pyjamas['Window'].__track_lines__[74] = "pyjamas.Window.py, line 74:\n    location = None";
	pyjamas['Window'].__track_lines__[76] = "pyjamas.Window.py, line 12:\n    from pyjamas import Location ... def getLocation():";
	pyjamas['Window'].__track_lines__[77] = "pyjamas.Window.py, line 77:\n    global location";
	pyjamas['Window'].__track_lines__[80] = "pyjamas.Window.py, line 80:\n    return location";
	pyjamas['Window'].__track_lines__[81] = "pyjamas.Window.py, line 81:\n    ";
	pyjamas['Window'].__track_lines__[82] = "pyjamas.Window.py, line 9:\n    resizeListeners = [] ... def getTitle():";
	pyjamas['Window'].__track_lines__[84] = "pyjamas.Window.py, line 84:\n    ";
	pyjamas['Window'].__track_lines__[85] = "pyjamas.Window.py, line 85:\n    def open(url, name, features):";
	pyjamas['Window'].__track_lines__[86] = "pyjamas.Window.py, line 86:\n    wnd().open(url, name, features)";
	pyjamas['Window'].__track_lines__[88] = "pyjamas.Window.py, line 88:\n    def setMargin(size):";
	pyjamas['Window'].__track_lines__[89] = "pyjamas.Window.py, line 89:\n    doc().body.style.margin = size;";
	pyjamas['Window'].__track_lines__[91] = "pyjamas.Window.py, line 91:\n    def setTitle(title):";
	pyjamas['Window'].__track_lines__[92] = "pyjamas.Window.py, line 92:\n    d = doc()";
	pyjamas['Window'].__track_lines__[93] = "pyjamas.Window.py, line 93:\n    d.title = title";
	pyjamas['Window'].__track_lines__[95] = "pyjamas.Window.py, line 28:\n     ... def setOnError(onError):";
	pyjamas['Window'].__track_lines__[98] = "pyjamas.Window.py, line 80:\n    return location ... def onError(msg, url, linenumber):";
	pyjamas['Window'].__track_lines__[101] = "pyjamas.Window.py, line 101:\n    # TODO: call fireClosedAndCatch";
	pyjamas['Window'].__track_lines__[102] = "pyjamas.Window.py, line 54:\n    try: ... def onClosed():";
	pyjamas['Window'].__track_lines__[104] = "pyjamas.Window.py, line 104:\n    ";
	pyjamas['Window'].__track_lines__[105] = "pyjamas.Window.py, line 105:\n    # TODO: call fireClosingAndCatch";
	pyjamas['Window'].__track_lines__[106] = "pyjamas.Window.py, line 58:\n     ... def onClosing():";
	pyjamas['Window'].__track_lines__[107] = "pyjamas.Window.py, line 107:\n    fireClosingImpl()";
	pyjamas['Window'].__track_lines__[108] = "pyjamas.Window.py, line 108:\n    ";
	pyjamas['Window'].__track_lines__[109] = "pyjamas.Window.py, line 109:\n    # TODO: call fireResizedAndCatch";
	pyjamas['Window'].__track_lines__[110] = "pyjamas.Window.py, line 62:\n    def getScrollTop(): ... def onResize():";
	pyjamas['Window'].__track_lines__[112] = "pyjamas.Window.py, line 112:\n    ";
	pyjamas['Window'].__track_lines__[113] = "pyjamas.Window.py, line 113:\n    def fireClosedAndCatch(handler):";
	pyjamas['Window'].__track_lines__[115] = "pyjamas.Window.py, line 115:\n    pass";
	pyjamas['Window'].__track_lines__[117] = "pyjamas.Window.py, line 69:\n     ... def fireClosedImpl():";
	pyjamas['Window'].__track_lines__[121] = "pyjamas.Window.py, line 74:\n    location = None ... def fireClosingAndCatch(handler):";
	pyjamas['Window'].__track_lines__[125] = "pyjamas.Window.py, line 77:\n    global location ... def resize(width, height):";
	pyjamas['Window'].__track_lines__[130] = "pyjamas.Window.py, line 130:\n    def resizeBy(width, height):";
	pyjamas['Window'].__track_lines__[131] = "pyjamas.Window.py, line 116:\n     ... \"\"\" changes size by specified width and height";
	pyjamas['Window'].__track_lines__[132] = "pyjamas.Window.py, line 132:\n    \"\"\"";
	pyjamas['Window'].__track_lines__[133] = "pyjamas.Window.py, line 133:\n    wnd().resizeBy(width, height)";
	pyjamas['Window'].__track_lines__[135] = "pyjamas.Window.py, line 37:\n     ... def fireClosingImpl():";
	pyjamas['Window'].__track_lines__[143] = "pyjamas.Window.py, line 46:\n     ... def fireResizedAndCatch(handler):";
	pyjamas['Window'].__track_lines__[147] = "pyjamas.Window.py, line 49:\n    return wnd().innerHeight ... def fireResizedImpl():";
	pyjamas['Window'].__track_lines__[151] = "pyjamas.Window.py, line 112:\n     ... def init():";
	pyjamas['Window'].__track_lines__[154] = "pyjamas.Window.py, line 154:\n    init()";


	$pyjs.track.module='pyjamas.Window';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=8;
	pyjamas['Window']['closingListeners'] = (function(){var $pyjs_dbg_1_retry = 0;
try{var $pyjs_dbg_1_res=pyjslib['list']([]);}catch($pyjs_dbg_1_err){
    if ($pyjs_dbg_1_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 8 :\n" + $pyjs_dbg_1_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_1_retry) {
        case 1:
            $pyjs_dbg_1_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_1_err;
    }
}return $pyjs_dbg_1_res})();
	$pyjs.track.lineno=9;
	pyjamas['Window']['resizeListeners'] = (function(){var $pyjs_dbg_2_retry = 0;
try{var $pyjs_dbg_2_res=pyjslib['list']([]);}catch($pyjs_dbg_2_err){
    if ($pyjs_dbg_2_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 9 :\n" + $pyjs_dbg_2_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_2_retry) {
        case 1:
            $pyjs_dbg_2_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_2_err;
    }
}return $pyjs_dbg_2_res})();
	$pyjs.track.lineno=11;
	$pyjs.track.lineno=12;
	pyjamas['Window']['Location'] = pyjslib['___import___']('pyjamas.Location', 'pyjamas', null, false);
	$pyjs.track.lineno=14;
	pyjamas['Window']['init_listeners'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:14};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=14;
		$pyjs.track.lineno=104;
		$pyjs.track.lineno=105;
		$pyjs.track.lineno=106;
		if ((function(){var $pyjs_dbg_3_retry = 0;
try{var $pyjs_dbg_3_res=pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['closingListeners']));}catch($pyjs_dbg_3_err){
    if ($pyjs_dbg_3_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 106 :\n" + $pyjs_dbg_3_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_3_retry) {
        case 1:
            $pyjs_dbg_3_res=pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['closingListeners']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_3_err;
    }
}return $pyjs_dbg_3_res})()) {
			$pyjs.track.lineno=107;
			pyjamas['Window']['closingListeners'] = (function(){var $pyjs_dbg_4_retry = 0;
try{var $pyjs_dbg_4_res=pyjslib['list']([]);}catch($pyjs_dbg_4_err){
    if ($pyjs_dbg_4_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 107 :\n" + $pyjs_dbg_4_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_4_retry) {
        case 1:
            $pyjs_dbg_4_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_4_err;
    }
}return $pyjs_dbg_4_res})();
		}
		$pyjs.track.lineno=108;
		if ((function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['resizeListeners']));}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 108 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['resizeListeners']));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})()) {
			$pyjs.track.lineno=109;
			pyjamas['Window']['resizeListeners'] = (function(){var $pyjs_dbg_6_retry = 0;
try{var $pyjs_dbg_6_res=pyjslib['list']([]);}catch($pyjs_dbg_6_err){
    if ($pyjs_dbg_6_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 109 :\n" + $pyjs_dbg_6_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_6_retry) {
        case 1:
            $pyjs_dbg_6_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_6_err;
    }
}return $pyjs_dbg_6_res})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['init_listeners'].__name__ = 'init_listeners';

	pyjamas['Window']['init_listeners'].__bind_type__ = 0;
	pyjamas['Window']['init_listeners'].__args__ = [null,null];
	$pyjs.track.lineno=17;
	pyjamas['Window']['addWindowCloseListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:17};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=17;
		$pyjs.track.lineno=3;
		(function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=pyjamas['Window']['closingListeners']['append'](listener);}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 3 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=pyjamas['Window']['closingListeners']['append'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['addWindowCloseListener'].__name__ = 'addWindowCloseListener';

	pyjamas['Window']['addWindowCloseListener'].__bind_type__ = 0;
	pyjamas['Window']['addWindowCloseListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=20;
	pyjamas['Window']['addWindowResizeListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:20};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=20;
		$pyjs.track.lineno=6;
		(function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjamas['Window']['resizeListeners']['append'](listener);}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 6 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjamas['Window']['resizeListeners']['append'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['addWindowResizeListener'].__name__ = 'addWindowResizeListener';

	pyjamas['Window']['addWindowResizeListener'].__bind_type__ = 0;
	pyjamas['Window']['addWindowResizeListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=23;
	pyjamas['Window']['removeWindowCloseListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:23};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=23;
		$pyjs.track.lineno=24;
		(function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=pyjamas['Window']['closingListeners']['remove'](listener);}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 24 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=pyjamas['Window']['closingListeners']['remove'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_9_err;
    }
}return $pyjs_dbg_9_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['removeWindowCloseListener'].__name__ = 'removeWindowCloseListener';

	pyjamas['Window']['removeWindowCloseListener'].__bind_type__ = 0;
	pyjamas['Window']['removeWindowCloseListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=26;
	pyjamas['Window']['removeWindowResizeListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:26};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=26;
		$pyjs.track.lineno=27;
		(function(){var $pyjs_dbg_10_retry = 0;
try{var $pyjs_dbg_10_res=pyjamas['Window']['resizeListeners']['remove'](listener);}catch($pyjs_dbg_10_err){
    if ($pyjs_dbg_10_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 27 :\n" + $pyjs_dbg_10_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_10_retry) {
        case 1:
            $pyjs_dbg_10_res=pyjamas['Window']['resizeListeners']['remove'](listener);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_10_err;
    }
}return $pyjs_dbg_10_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['removeWindowResizeListener'].__name__ = 'removeWindowResizeListener';

	pyjamas['Window']['removeWindowResizeListener'].__bind_type__ = 0;
	pyjamas['Window']['removeWindowResizeListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=29;
	pyjamas['Window']['alert'] = function(msg) {

		$pyjs.track={module:'pyjamas.Window',lineno:29};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=29;
		$pyjs.track.lineno=95;
		$wnd['alert'](msg);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['alert'].__name__ = 'alert';

	pyjamas['Window']['alert'].__bind_type__ = 0;
	pyjamas['Window']['alert'].__args__ = [null,null,['msg']];
	$pyjs.track.lineno=32;
	pyjamas['Window']['confirm'] = function(msg) {

		$pyjs.track={module:'pyjamas.Window',lineno:32};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=32;
		$pyjs.track.lineno=98;
		$pyjs.track.lineno=98;
		var $pyjs__ret = $wnd['confirm'](msg);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['confirm'].__name__ = 'confirm';

	pyjamas['Window']['confirm'].__bind_type__ = 0;
	pyjamas['Window']['confirm'].__args__ = [null,null,['msg']];
	$pyjs.track.lineno=35;
	pyjamas['Window']['prompt'] = function(msg, defaultReply) {
		if (typeof defaultReply == 'undefined') defaultReply=arguments.callee.__args__[3][1];

		$pyjs.track={module:'pyjamas.Window',lineno:35};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=35;
		$pyjs.track.lineno=101;
		$pyjs.track.lineno=101;
		var $pyjs__ret = $wnd['prompt'](msg, defaultReply);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['prompt'].__name__ = 'prompt';

	pyjamas['Window']['prompt'].__bind_type__ = 0;
	pyjamas['Window']['prompt'].__args__ = [null,null,['msg'],['defaultReply', String('')]];
	$pyjs.track.lineno=38;
	pyjamas['Window']['enableScrolling'] = function(enable) {
		var $and1,$and2,$or1,$or2;
		$pyjs.track={module:'pyjamas.Window',lineno:38};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=38;
		$pyjs.track.lineno=39;
		$doc['body']['style'].overflow = (pyjslib['bool']($or1=(pyjslib['bool']($and1=enable)?String('auto'):$and1))?$or1:String('hidden'));
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['enableScrolling'].__name__ = 'enableScrolling';

	pyjamas['Window']['enableScrolling'].__bind_type__ = 0;
	pyjamas['Window']['enableScrolling'].__args__ = [null,null,['enable']];
	$pyjs.track.lineno=41;
	pyjamas['Window']['scrollBy'] = function(x, y) {

		$pyjs.track={module:'pyjamas.Window',lineno:41};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=41;
		$pyjs.track.lineno=42;
		$wnd['scrollBy'](x, y);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['scrollBy'].__name__ = 'scrollBy';

	pyjamas['Window']['scrollBy'].__bind_type__ = 0;
	pyjamas['Window']['scrollBy'].__args__ = [null,null,['x'],['y']];
	$pyjs.track.lineno=44;
	pyjamas['Window']['scroll'] = function(x, y) {

		$pyjs.track={module:'pyjamas.Window',lineno:44};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=44;
		$pyjs.track.lineno=45;
		$wnd['scroll'](x, y);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['scroll'].__name__ = 'scroll';

	pyjamas['Window']['scroll'].__bind_type__ = 0;
	pyjamas['Window']['scroll'].__args__ = [null,null,['x'],['y']];
	$pyjs.track.lineno=47;
	pyjamas['Window']['getClientHeight'] = function() {
		var $attr1,$attr2;
		$pyjs.track={module:'pyjamas.Window',lineno:47};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=47;
		$pyjs.track.lineno=3;
		$pyjs.track.lineno=3;
		var $pyjs__ret = ((($attr1=$doc['body']['clientHeight']) !== null & ($attr2=$doc['body']).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'clientHeight'):
					$doc['body']['clientHeight']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['getClientHeight'].__name__ = 'getClientHeight';

	pyjamas['Window']['getClientHeight'].__bind_type__ = 0;
	pyjamas['Window']['getClientHeight'].__args__ = [null,null];
	$pyjs.track.lineno=53;
	pyjamas['Window']['getClientWidth'] = function() {
		var $attr3,$attr4;
		$pyjs.track={module:'pyjamas.Window',lineno:53};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=53;
		$pyjs.track.lineno=6;
		$pyjs.track.lineno=6;
		var $pyjs__ret = ((($attr3=$doc['body']['clientWidth']) !== null & ($attr4=$doc['body']).__is_instance__) && typeof $attr3 == 'function'?
					pyjslib['getattr']($attr4, 'clientWidth'):
					$doc['body']['clientWidth']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['getClientWidth'].__name__ = 'getClientWidth';

	pyjamas['Window']['getClientWidth'].__bind_type__ = 0;
	pyjamas['Window']['getClientWidth'].__args__ = [null,null];
	$pyjs.track.lineno=59;
	pyjamas['Window']['getScrollLeft'] = function() {
		var $attr5,$attr6;
		$pyjs.track={module:'pyjamas.Window',lineno:59};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=59;
		$pyjs.track.lineno=60;
		$pyjs.track.lineno=60;
		var $pyjs__ret = ((($attr5=(function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=pyjamas.Window.getDocumentRoot();}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 60 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=pyjamas.Window.getDocumentRoot();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})()['scrollLeft']) !== null & ($attr6=(function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=pyjamas.Window.getDocumentRoot();}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 60 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=pyjamas.Window.getDocumentRoot();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})()).__is_instance__) && typeof $attr5 == 'function'?
					pyjslib['getattr']($attr6, 'scrollLeft'):
					(function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=pyjamas.Window.getDocumentRoot();}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 60 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=pyjamas.Window.getDocumentRoot();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})()['scrollLeft']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['getScrollLeft'].__name__ = 'getScrollLeft';

	pyjamas['Window']['getScrollLeft'].__bind_type__ = 0;
	pyjamas['Window']['getScrollLeft'].__args__ = [null,null];
	$pyjs.track.lineno=62;
	pyjamas['Window']['getScrollTop'] = function() {
		var $attr8,$attr7;
		$pyjs.track={module:'pyjamas.Window',lineno:62};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=62;
		$pyjs.track.lineno=63;
		$pyjs.track.lineno=63;
		var $pyjs__ret = ((($attr7=(function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=pyjamas.Window.getDocumentRoot();}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 63 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=pyjamas.Window.getDocumentRoot();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})()['scrollTop']) !== null & ($attr8=(function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=pyjamas.Window.getDocumentRoot();}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 63 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=pyjamas.Window.getDocumentRoot();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})()).__is_instance__) && typeof $attr7 == 'function'?
					pyjslib['getattr']($attr8, 'scrollTop'):
					(function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=pyjamas.Window.getDocumentRoot();}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 63 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=pyjamas.Window.getDocumentRoot();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})()['scrollTop']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['getScrollTop'].__name__ = 'getScrollTop';

	pyjamas['Window']['getScrollTop'].__bind_type__ = 0;
	pyjamas['Window']['getScrollTop'].__args__ = [null,null];
	$pyjs.track.lineno=65;
	pyjamas['Window']['getDocumentRoot'] = function() {
		var $attr9,$attr14,$attr11,$attr10,$attr13,$attr12;
		$pyjs.track={module:'pyjamas.Window',lineno:65};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=65;
		$pyjs.track.lineno=66;
		if (pyjslib['bool'](pyjslib['op_eq'](((($attr9=$doc['compatMode']) !== null & ($attr10=$doc).__is_instance__) && typeof $attr9 == 'function'?
					pyjslib['getattr']($attr10, 'compatMode'):
					$doc['compatMode']), String('CSS1Compat')))) {
			$pyjs.track.lineno=67;
			$pyjs.track.lineno=67;
			var $pyjs__ret = ((($attr11=$doc['documentElement']) !== null & ($attr12=$doc).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'documentElement'):
						$doc['documentElement']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=68;
		$pyjs.track.lineno=68;
		var $pyjs__ret = ((($attr13=$doc['body']) !== null & ($attr14=$doc).__is_instance__) && typeof $attr13 == 'function'?
					pyjslib['getattr']($attr14, 'body'):
					$doc['body']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['getDocumentRoot'].__name__ = 'getDocumentRoot';

	pyjamas['Window']['getDocumentRoot'].__bind_type__ = 0;
	pyjamas['Window']['getDocumentRoot'].__args__ = [null,null];
	$pyjs.track.lineno=70;
	pyjamas['Window']['setLocation'] = function(url) {
		var w;
		$pyjs.track={module:'pyjamas.Window',lineno:70};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=70;
		$pyjs.track.lineno=18;
		w = $wnd;
		$pyjs.track.lineno=19;
		w.location = url;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['setLocation'].__name__ = 'setLocation';

	pyjamas['Window']['setLocation'].__bind_type__ = 0;
	pyjamas['Window']['setLocation'].__args__ = [null,null,['url']];
	$pyjs.track.lineno=74;
	pyjamas['Window']['location'] = null;
	$pyjs.track.lineno=76;
	pyjamas['Window']['getLocation'] = function() {
		var $attr15,$attr16;
		$pyjs.track={module:'pyjamas.Window',lineno:76};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=76;
		$pyjs.track.lineno=12;
		$pyjs.track.lineno=13;
		if (pyjslib['bool'](!pyjslib['bool'](pyjamas['Window']['location']))) {
			$pyjs.track.lineno=14;
			pyjamas['Window']['location'] = pyjamas['Window']['Location']['Location'](((($attr15=$wnd['location']) !== null & ($attr16=$wnd).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'location'):
						$wnd['location']));
		}
		$pyjs.track.lineno=15;
		$pyjs.track.lineno=15;
		var $pyjs__ret = pyjamas['Window']['location'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['getLocation'].__name__ = 'getLocation';

	pyjamas['Window']['getLocation'].__bind_type__ = 0;
	pyjamas['Window']['getLocation'].__args__ = [null,null];
	$pyjs.track.lineno=82;
	pyjamas['Window']['getTitle'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:82};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=82;
		$pyjs.track.lineno=9;
		$pyjs.track.lineno=9;
		var $pyjs__ret = $doc.title;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['getTitle'].__name__ = 'getTitle';

	pyjamas['Window']['getTitle'].__bind_type__ = 0;
	pyjamas['Window']['getTitle'].__args__ = [null,null];
	$pyjs.track.lineno=85;
	pyjamas['Window']['open'] = function(url, name, features) {

		$pyjs.track={module:'pyjamas.Window',lineno:85};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=85;
		$pyjs.track.lineno=86;
		$wnd['open'](url, name, features);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['open'].__name__ = 'open';

	pyjamas['Window']['open'].__bind_type__ = 0;
	pyjamas['Window']['open'].__args__ = [null,null,['url'],['name'],['features']];
	$pyjs.track.lineno=88;
	pyjamas['Window']['setMargin'] = function(size) {

		$pyjs.track={module:'pyjamas.Window',lineno:88};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=88;
		$pyjs.track.lineno=89;
		$doc['body']['style'].margin = size;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['setMargin'].__name__ = 'setMargin';

	pyjamas['Window']['setMargin'].__bind_type__ = 0;
	pyjamas['Window']['setMargin'].__args__ = [null,null,['size']];
	$pyjs.track.lineno=91;
	pyjamas['Window']['setTitle'] = function(title) {
		var d;
		$pyjs.track={module:'pyjamas.Window',lineno:91};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=91;
		$pyjs.track.lineno=92;
		d = $doc;
		$pyjs.track.lineno=93;
		d.title = title;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['setTitle'].__name__ = 'setTitle';

	pyjamas['Window']['setTitle'].__bind_type__ = 0;
	pyjamas['Window']['setTitle'].__args__ = [null,null,['title']];
	$pyjs.track.lineno=95;
	pyjamas['Window']['setOnError'] = function(onError) {

		if ((function(){var $pyjs_dbg_17_retry = 0;
try{var $pyjs_dbg_17_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=pyjslib['callable'](onError);}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 28 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=pyjslib['callable'](onError);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})()));}catch($pyjs_dbg_17_err){
    if ($pyjs_dbg_17_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 28 :\n" + $pyjs_dbg_17_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_17_retry) {
        case 1:
            $pyjs_dbg_17_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=pyjslib['callable'](onError);}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 28 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=pyjslib['callable'](onError);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_17_err;
    }
}return $pyjs_dbg_17_res})()) {
			throw ((function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=pyjslib['TypeError'](String('object is not callable'));}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 29 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=pyjslib['TypeError'](String('object is not callable'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})());
		}
    $wnd.onerror=function(msg, url, linenumber){
        return onError(msg, url, linenumber);
    }
    
	};
	pyjamas['Window']['setOnError'].__name__ = 'setOnError';

	pyjamas['Window']['setOnError'].__bind_type__ = 0;
	pyjamas['Window']['setOnError'].__args__ = [null,null,['onError']];
	$pyjs.track.lineno=98;
	pyjamas['Window']['onError'] = function(msg, url, linenumber) {
		var tracestr,dialog;
		$pyjs.track={module:'pyjamas.Window',lineno:98};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=98;
		$pyjs.track.lineno=80;
		dialog = $doc['createElement'](String('div'));
		$pyjs.track.lineno=81;
		dialog.className = String('errordialog');
		$pyjs.track.lineno=84;
		tracestr = pyjamas.Window.sys['trackstackstr']($pyjs.trackstack.slice(0,-1));
		$pyjs.track.lineno=85;
		tracestr = (function(){var $pyjs_dbg_19_retry = 0;
try{var $pyjs_dbg_19_res=tracestr['$$replace'](String('\x0A'), String('\x3Cbr /\x3E\x0A\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B'));}catch($pyjs_dbg_19_err){
    if ($pyjs_dbg_19_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 85 :\n" + $pyjs_dbg_19_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_19_retry) {
        case 1:
            $pyjs_dbg_19_res=tracestr['$$replace'](String('\x0A'), String('\x3Cbr /\x3E\x0A\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_19_err;
    }
}return $pyjs_dbg_19_res})();
		$pyjs.track.lineno=86;
		dialog.innerHTML = (function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=pyjslib['sprintf'](String('\x26nbsp\x3B\x3Cb style=\x22color:red\x22\x3EJavaScript Error: \x3C/b\x3E\x0A%s at line number %d. Please inform webmaster.\x0A\x3Cbr /\x3E\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B%s\x0A'), (function(){var $pyjs_dbg_20_retry = 0;
try{var $pyjs_dbg_20_res=pyjslib['tuple']([msg, linenumber, tracestr]);}catch($pyjs_dbg_20_err){
    if ($pyjs_dbg_20_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 90 :\n" + $pyjs_dbg_20_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_20_retry) {
        case 1:
            $pyjs_dbg_20_res=pyjslib['tuple']([msg, linenumber, tracestr]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_20_err;
    }
}return $pyjs_dbg_20_res})());}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 90 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=pyjslib['sprintf'](String('\x26nbsp\x3B\x3Cb style=\x22color:red\x22\x3EJavaScript Error: \x3C/b\x3E\x0A%s at line number %d. Please inform webmaster.\x0A\x3Cbr /\x3E\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B%s\x0A'), (function(){var $pyjs_dbg_20_retry = 0;
try{var $pyjs_dbg_20_res=pyjslib['tuple']([msg, linenumber, tracestr]);}catch($pyjs_dbg_20_err){
    if ($pyjs_dbg_20_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 90 :\n" + $pyjs_dbg_20_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_20_retry) {
        case 1:
            $pyjs_dbg_20_res=pyjslib['tuple']([msg, linenumber, tracestr]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_20_err;
    }
}return $pyjs_dbg_20_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})();
		$pyjs.track.lineno=91;
		$doc['body']['appendChild'](dialog);
		$pyjs.track.lineno=92;
		$pyjs.track.lineno=92;
		var $pyjs__ret = true;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['onError'].__name__ = 'onError';

	pyjamas['Window']['onError'].__bind_type__ = 0;
	pyjamas['Window']['onError'].__args__ = [null,null,['msg'],['url'],['linenumber']];
	$pyjs.track.lineno=102;
	pyjamas['Window']['onClosed'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:102};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=102;
		$pyjs.track.lineno=54;
		(function(){var $pyjs_dbg_22_retry = 0;
try{var $pyjs_dbg_22_res=pyjamas.Window.fireClosedImpl();}catch($pyjs_dbg_22_err){
    if ($pyjs_dbg_22_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 54 :\n" + $pyjs_dbg_22_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_22_retry) {
        case 1:
            $pyjs_dbg_22_res=pyjamas.Window.fireClosedImpl();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_22_err;
    }
}return $pyjs_dbg_22_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['onClosed'].__name__ = 'onClosed';

	pyjamas['Window']['onClosed'].__bind_type__ = 0;
	pyjamas['Window']['onClosed'].__args__ = [null,null];
	$pyjs.track.lineno=106;
	pyjamas['Window']['onClosing'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:106};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=106;
		$pyjs.track.lineno=58;
		(function(){var $pyjs_dbg_23_retry = 0;
try{var $pyjs_dbg_23_res=pyjamas.Window.fireClosingImpl();}catch($pyjs_dbg_23_err){
    if ($pyjs_dbg_23_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 58 :\n" + $pyjs_dbg_23_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_23_retry) {
        case 1:
            $pyjs_dbg_23_res=pyjamas.Window.fireClosingImpl();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_23_err;
    }
}return $pyjs_dbg_23_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['onClosing'].__name__ = 'onClosing';

	pyjamas['Window']['onClosing'].__bind_type__ = 0;
	pyjamas['Window']['onClosing'].__args__ = [null,null];
	$pyjs.track.lineno=110;
	pyjamas['Window']['onResize'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:110};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=110;
		$pyjs.track.lineno=62;
		(function(){var $pyjs_dbg_24_retry = 0;
try{var $pyjs_dbg_24_res=pyjamas.Window.fireResizedImpl();}catch($pyjs_dbg_24_err){
    if ($pyjs_dbg_24_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 62 :\n" + $pyjs_dbg_24_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_24_retry) {
        case 1:
            $pyjs_dbg_24_res=pyjamas.Window.fireResizedImpl();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_24_err;
    }
}return $pyjs_dbg_24_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['onResize'].__name__ = 'onResize';

	pyjamas['Window']['onResize'].__bind_type__ = 0;
	pyjamas['Window']['onResize'].__args__ = [null,null];
	$pyjs.track.lineno=113;
	pyjamas['Window']['fireClosedAndCatch'] = function(handler) {

		$pyjs.track={module:'pyjamas.Window',lineno:113};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=113;
		$pyjs.track.lineno=66;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['fireClosedAndCatch'].__name__ = 'fireClosedAndCatch';

	pyjamas['Window']['fireClosedAndCatch'].__bind_type__ = 0;
	pyjamas['Window']['fireClosedAndCatch'].__args__ = [null,null,['handler']];
	$pyjs.track.lineno=117;
	pyjamas['Window']['fireClosedImpl'] = function() {
		var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
		$pyjs.track={module:'pyjamas.Window',lineno:117};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=117;
		$pyjs.track.lineno=69;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){var $pyjs_dbg_25_retry = 0;
try{var $pyjs_dbg_25_res=pyjamas['Window']['closingListeners'];}catch($pyjs_dbg_25_err){
    if ($pyjs_dbg_25_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 69 :\n" + $pyjs_dbg_25_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_25_retry) {
        case 1:
            $pyjs_dbg_25_res=pyjamas['Window']['closingListeners'];
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_25_err;
    }
}return $pyjs_dbg_25_res})();
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			listener = $iter1_nextval;
			$pyjs.track.lineno=70;
			(function(){var $pyjs_dbg_26_retry = 0;
try{var $pyjs_dbg_26_res=listener['onWindowClosed']();}catch($pyjs_dbg_26_err){
    if ($pyjs_dbg_26_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 70 :\n" + $pyjs_dbg_26_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_26_retry) {
        case 1:
            $pyjs_dbg_26_res=listener['onWindowClosed']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_26_err;
    }
}return $pyjs_dbg_26_res})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Window';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['fireClosedImpl'].__name__ = 'fireClosedImpl';

	pyjamas['Window']['fireClosedImpl'].__bind_type__ = 0;
	pyjamas['Window']['fireClosedImpl'].__args__ = [null,null];
	$pyjs.track.lineno=121;
	pyjamas['Window']['fireClosingAndCatch'] = function(handler) {

		$pyjs.track={module:'pyjamas.Window',lineno:121};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=121;
		$pyjs.track.lineno=74;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['fireClosingAndCatch'].__name__ = 'fireClosingAndCatch';

	pyjamas['Window']['fireClosingAndCatch'].__bind_type__ = 0;
	pyjamas['Window']['fireClosingAndCatch'].__args__ = [null,null,['handler']];
	$pyjs.track.lineno=125;
	pyjamas['Window']['resize'] = function(width, height) {

		$pyjs.track={module:'pyjamas.Window',lineno:125};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=125;
		$pyjs.track.lineno=77;
		$wnd['resizeTo'](width, height);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['resize'].__name__ = 'resize';

	pyjamas['Window']['resize'].__bind_type__ = 0;
	pyjamas['Window']['resize'].__args__ = [null,null,['width'],['height']];
	$pyjs.track.lineno=130;
	pyjamas['Window']['resizeBy'] = function(width, height) {

		$pyjs.track={module:'pyjamas.Window',lineno:130};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=130;
		$pyjs.track.lineno=133;
		$wnd['resizeBy'](width, height);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['resizeBy'].__name__ = 'resizeBy';

	pyjamas['Window']['resizeBy'].__bind_type__ = 0;
	pyjamas['Window']['resizeBy'].__args__ = [null,null,['width'],['height']];
	$pyjs.track.lineno=135;
	pyjamas['Window']['fireClosingImpl'] = function() {
		var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,$pyjs__trackstack_size_1,msg,$iter2_array;
		$pyjs.track={module:'pyjamas.Window',lineno:135};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=135;
		$pyjs.track.lineno=37;
		ret = null;
		$pyjs.track.lineno=38;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = pyjamas['Window']['closingListeners'];
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			listener = $iter2_nextval;
			$pyjs.track.lineno=39;
			msg = (function(){var $pyjs_dbg_27_retry = 0;
try{var $pyjs_dbg_27_res=listener['onWindowClosing']();}catch($pyjs_dbg_27_err){
    if ($pyjs_dbg_27_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 39 :\n" + $pyjs_dbg_27_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_27_retry) {
        case 1:
            $pyjs_dbg_27_res=listener['onWindowClosing']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_27_err;
    }
}return $pyjs_dbg_27_res})();
			$pyjs.track.lineno=40;
			if ((function(){var $pyjs_dbg_28_retry = 0;
try{var $pyjs_dbg_28_res=pyjslib['bool']((ret === null));}catch($pyjs_dbg_28_err){
    if ($pyjs_dbg_28_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 40 :\n" + $pyjs_dbg_28_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_28_retry) {
        case 1:
            $pyjs_dbg_28_res=pyjslib['bool']((ret === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_28_err;
    }
}return $pyjs_dbg_28_res})()) {
				$pyjs.track.lineno=41;
				ret = msg;
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=42;
		$pyjs.track.lineno=42;
		var $pyjs__ret = ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Window']['fireClosingImpl'].__name__ = 'fireClosingImpl';

	pyjamas['Window']['fireClosingImpl'].__bind_type__ = 0;
	pyjamas['Window']['fireClosingImpl'].__args__ = [null,null];
	$pyjs.track.lineno=143;
	pyjamas['Window']['fireResizedAndCatch'] = function(handler) {

		$pyjs.track={module:'pyjamas.Window',lineno:143};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=143;
		$pyjs.track.lineno=46;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['fireResizedAndCatch'].__name__ = 'fireResizedAndCatch';

	pyjamas['Window']['fireResizedAndCatch'].__bind_type__ = 0;
	pyjamas['Window']['fireResizedAndCatch'].__args__ = [null,null,['handler']];
	$pyjs.track.lineno=147;
	pyjamas['Window']['fireResizedImpl'] = function() {
		var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1;
		$pyjs.track={module:'pyjamas.Window',lineno:147};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=147;
		$pyjs.track.lineno=49;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){var $pyjs_dbg_29_retry = 0;
try{var $pyjs_dbg_29_res=pyjamas['Window']['resizeListeners'];}catch($pyjs_dbg_29_err){
    if ($pyjs_dbg_29_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 49 :\n" + $pyjs_dbg_29_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_29_retry) {
        case 1:
            $pyjs_dbg_29_res=pyjamas['Window']['resizeListeners'];
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_29_err;
    }
}return $pyjs_dbg_29_res})();
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			listener = $iter3_nextval;
			$pyjs.track.lineno=50;
			(function(){var $pyjs_dbg_32_retry = 0;
try{var $pyjs_dbg_32_res=listener['onWindowResized']((function(){var $pyjs_dbg_30_retry = 0;
try{var $pyjs_dbg_30_res=pyjamas['Window']['getClientWidth']();}catch($pyjs_dbg_30_err){
    if ($pyjs_dbg_30_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 50 :\n" + $pyjs_dbg_30_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_30_retry) {
        case 1:
            $pyjs_dbg_30_res=pyjamas['Window']['getClientWidth']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_30_err;
    }
}return $pyjs_dbg_30_res})(), (function(){var $pyjs_dbg_31_retry = 0;
try{var $pyjs_dbg_31_res=pyjamas['Window']['getClientHeight']();}catch($pyjs_dbg_31_err){
    if ($pyjs_dbg_31_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 50 :\n" + $pyjs_dbg_31_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_31_retry) {
        case 1:
            $pyjs_dbg_31_res=pyjamas['Window']['getClientHeight']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_31_err;
    }
}return $pyjs_dbg_31_res})());}catch($pyjs_dbg_32_err){
    if ($pyjs_dbg_32_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 50 :\n" + $pyjs_dbg_32_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_32_retry) {
        case 1:
            $pyjs_dbg_32_res=listener['onWindowResized']((function(){var $pyjs_dbg_30_retry = 0;
try{var $pyjs_dbg_30_res=pyjamas['Window']['getClientWidth']();}catch($pyjs_dbg_30_err){
    if ($pyjs_dbg_30_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 50 :\n" + $pyjs_dbg_30_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_30_retry) {
        case 1:
            $pyjs_dbg_30_res=pyjamas['Window']['getClientWidth']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_30_err;
    }
}return $pyjs_dbg_30_res})(), (function(){var $pyjs_dbg_31_retry = 0;
try{var $pyjs_dbg_31_res=pyjamas['Window']['getClientHeight']();}catch($pyjs_dbg_31_err){
    if ($pyjs_dbg_31_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 50 :\n" + $pyjs_dbg_31_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_31_retry) {
        case 1:
            $pyjs_dbg_31_res=pyjamas['Window']['getClientHeight']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_31_err;
    }
}return $pyjs_dbg_31_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_32_err;
    }
}return $pyjs_dbg_32_res})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Window';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	pyjamas['Window']['fireResizedImpl'].__name__ = 'fireResizedImpl';

	pyjamas['Window']['fireResizedImpl'].__bind_type__ = 0;
	pyjamas['Window']['fireResizedImpl'].__args__ = [null,null];
	$pyjs.track.lineno=151;
	pyjamas['Window']['init'] = function() {

		pyjamas['Window']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
		(function(){var $pyjs_dbg_35_retry = 0;
try{var $pyjs_dbg_35_res=pyjamas['Window']['init_listeners']();}catch($pyjs_dbg_35_err){
    if ($pyjs_dbg_35_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 115 :\n" + $pyjs_dbg_35_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_35_retry) {
        case 1:
            $pyjs_dbg_35_res=pyjamas['Window']['init_listeners']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_35_err;
    }
}return $pyjs_dbg_35_res})();

    $wnd.__pygwt_initHandlers(
        function() {
            Window.onResize();
        },
        function() {
            return Window.onClosing();
        },
        function() {
            Window.onClosed();
            /*$wnd.onresize = null;
            $wnd.onbeforeclose = null;
            $wnd.onclose = null;*/
        }
    );
    
		(function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=pyjamas['Window']['setOnError'](pyjamas['Window']['onError']);}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 132 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=pyjamas['Window']['setOnError'](pyjamas['Window']['onError']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})();
		return null;
	};
	pyjamas['Window']['init'].__name__ = 'init';

	pyjamas['Window']['init'].__bind_type__ = 0;
	pyjamas['Window']['init'].__args__ = [null,null];
	$pyjs.track.lineno=154;
	(function(){var $pyjs_dbg_37_retry = 0;
try{var $pyjs_dbg_37_res=pyjamas['Window']['init']();}catch($pyjs_dbg_37_err){
    if ($pyjs_dbg_37_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Window at line 154 :\n" + $pyjs_dbg_37_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_37_retry) {
        case 1:
            $pyjs_dbg_37_res=pyjamas['Window']['init']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_37_err;
    }
}return $pyjs_dbg_37_res})();
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas', 'sys']
*/
