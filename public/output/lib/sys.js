/* start module: sys */
var sys;
$pyjs.loaded_modules['sys'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sys'].__was_initialized__) return $pyjs.loaded_modules['sys'];
	sys = $pyjs.loaded_modules["sys"];
	sys.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	var __name__ = sys.__name__ = __mod_name__;
	sys.__track_lines__ = new Array();
	sys.__track_lines__[1] = "sys.py, line 1:\n    ";
	sys.__track_lines__[2] = "sys.py, line 2:\n    from __pyjamas__ import JS";
	sys.__track_lines__[5] = "sys.py, line 5:\n    overrides = None # to be updated by app, on compile";
	sys.__track_lines__[8] = "sys.py, line 8:\n    loadpath = None";
	sys.__track_lines__[10] = "sys.py, line 10:\n    stacktrace = None";
	sys.__track_lines__[12] = "sys.py, line 12:\n    appname = None";
	sys.__track_lines__[14] = "sys.py, line 14:\n    def setloadpath(lp):";
	sys.__track_lines__[15] = "sys.py, line 15:\n    global loadpath";
	sys.__track_lines__[16] = "sys.py, line 16:\n    loadpath = lp";
	sys.__track_lines__[18] = "sys.py, line 18:\n    def setappname(an):";
	sys.__track_lines__[19] = "sys.py, line 19:\n    global appname";
	sys.__track_lines__[20] = "sys.py, line 20:\n    appname = an";
	sys.__track_lines__[22] = "sys.py, line 22:\n    def getloadpath():";
	sys.__track_lines__[23] = "sys.py, line 23:\n    return loadpath";
	sys.__track_lines__[25] = "sys.py, line 25:\n    def addoverride(module_name, path):";
	sys.__track_lines__[26] = "sys.py, line 26:\n    overrides[module_name] = path";
	sys.__track_lines__[28] = "sys.py, line 28:\n    def exc_info():";
	sys.__track_lines__[29] = "sys.py, line 29:\n    le = JS(\'$pyjs.__last_exception__\')";
	sys.__track_lines__[30] = "sys.py, line 30:\n    if not le:";
	sys.__track_lines__[31] = "sys.py, line 31:\n    return (None, None, None)";
	sys.__track_lines__[32] = "sys.py, line 32:\n    if not hasattr(le.error, \'__class__\'):";
	sys.__track_lines__[33] = "sys.py, line 33:\n    cls = None";
	sys.__track_lines__[35] = "sys.py, line 35:\n    cls = le.error.__class__";
	sys.__track_lines__[36] = "sys.py, line 36:\n    return (cls, le.error, None)";
	sys.__track_lines__[38] = "sys.py, line 38:\n    def exc_clear():";
	sys.__track_lines__[39] = "sys.py, line 39:\n    JS(\'$pyjs.__last_exception__ = null;\')";
	sys.__track_lines__[53] = "sys.py, line 42:\n    JS(\"\"\"sys.save_exception_stack = function () { ... };\"\"\")";
	sys.__track_lines__[55] = "sys.py, line 55:\n    def trackstackstr(stack=None):";
	sys.__track_lines__[56] = "sys.py, line 56:\n    if stack is None:";
	sys.__track_lines__[57] = "sys.py, line 57:\n    stack = JS(\'$pyjs.__last_exception_stack__\')";
	sys.__track_lines__[58] = "sys.py, line 58:\n    if not stack:";
	sys.__track_lines__[59] = "sys.py, line 59:\n    return \'\'";
	sys.__track_lines__[60] = "sys.py, line 60:\n    stackstrings = []";
	sys.__track_lines__[61] = "sys.py, line 61:\n    msg = \'\'";
	sys.__track_lines__[62] = "sys.py, line 62:\n    for s in list(stack):";
	sys.__track_lines__[63] = "sys.py, line 63:\n    JS(\"msg = eval(s.module + \'.__track_lines__[\' + s.lineno + \']\');\")";
	sys.__track_lines__[64] = "sys.py, line 64:\n    if msg:";
	sys.__track_lines__[65] = "sys.py, line 65:\n    stackstrings.append(msg)";
	sys.__track_lines__[67] = "sys.py, line 67:\n    stackstrings.append(\'%s.py, line %d\' % (s.module, s.lineno))";
	sys.__track_lines__[68] = "sys.py, line 68:\n    return \'\\n\'.join(stackstrings)";
	sys.__track_lines__[70] = "sys.py, line 70:\n    platform = JS(\'$pyjs.platform\')";
	sys.__track_lines__[71] = "sys.py, line 71:\n    byteorder = \'little\' # Needed in struct.py, assume all systems are little endian and not big endian";
	sys.__track_lines__[72] = "sys.py, line 72:\n    maxint = 2147483647  # javascript bit operations are on 32 bit signed numbers";


	$pyjs.track.module='sys';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=2;
	$pyjs.track.lineno=5;
	sys['overrides'] = null;
	$pyjs.track.lineno=8;
	sys['loadpath'] = null;
	$pyjs.track.lineno=10;
	sys['stacktrace'] = null;
	$pyjs.track.lineno=12;
	sys['appname'] = null;
	$pyjs.track.lineno=14;
	sys['setloadpath'] = function(lp) {

		$pyjs.track={module:'sys',lineno:14};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=14;
		$pyjs.track.lineno=15;
		$pyjs.track.lineno=16;
		sys['loadpath'] = lp;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	sys['setloadpath'].__name__ = 'setloadpath';

	sys['setloadpath'].__bind_type__ = 0;
	sys['setloadpath'].__args__ = [null,null,['lp']];
	$pyjs.track.lineno=18;
	sys['setappname'] = function(an) {

		$pyjs.track={module:'sys',lineno:18};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=18;
		$pyjs.track.lineno=19;
		$pyjs.track.lineno=20;
		sys['appname'] = an;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	sys['setappname'].__name__ = 'setappname';

	sys['setappname'].__bind_type__ = 0;
	sys['setappname'].__args__ = [null,null,['an']];
	$pyjs.track.lineno=22;
	sys['getloadpath'] = function() {

		$pyjs.track={module:'sys',lineno:22};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=22;
		$pyjs.track.lineno=23;
		$pyjs.track.lineno=23;
		var $pyjs__ret = sys['loadpath'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	sys['getloadpath'].__name__ = 'getloadpath';

	sys['getloadpath'].__bind_type__ = 0;
	sys['getloadpath'].__args__ = [null,null];
	$pyjs.track.lineno=25;
	sys['addoverride'] = function(module_name, path) {

		$pyjs.track={module:'sys',lineno:25};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=25;
		$pyjs.track.lineno=26;
		(function(){var $pyjs_dbg_1_retry = 0;
try{var $pyjs_dbg_1_res=sys['overrides'].__setitem__(module_name, path);}catch($pyjs_dbg_1_err){
    if ($pyjs_dbg_1_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 26 :\n" + $pyjs_dbg_1_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_1_retry) {
        case 1:
            $pyjs_dbg_1_res=sys['overrides'].__setitem__(module_name, path);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_1_err;
    }
}return $pyjs_dbg_1_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	sys['addoverride'].__name__ = 'addoverride';

	sys['addoverride'].__bind_type__ = 0;
	sys['addoverride'].__args__ = [null,null,['module_name'],['path']];
	$pyjs.track.lineno=28;
	sys['exc_info'] = function() {
		var le,$attr1,$attr3,$attr2,$attr5,$attr4,$attr6,cls;
		$pyjs.track={module:'sys',lineno:28};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=28;
		$pyjs.track.lineno=29;
		le = $pyjs.__last_exception__;
		$pyjs.track.lineno=30;
		if (pyjslib['bool'](!pyjslib['bool'](le))) {
			$pyjs.track.lineno=31;
			$pyjs.track.lineno=31;
			var $pyjs__ret = pyjslib['tuple']([null, null, null]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=32;
		if ((function(){var $pyjs_dbg_3_retry = 0;
try{var $pyjs_dbg_3_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_2_retry = 0;
try{var $pyjs_dbg_2_res=pyjslib['hasattr'](((($attr1=le['error']) !== null & ($attr2=le).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'error'):
					le['error']), String('__class__'));}catch($pyjs_dbg_2_err){
    if ($pyjs_dbg_2_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 32 :\n" + $pyjs_dbg_2_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_2_retry) {
        case 1:
            $pyjs_dbg_2_res=pyjslib['hasattr'](((($attr1=le['error']) !== null & ($attr2=le).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'error'):
					le['error']), String('__class__'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_2_err;
    }
}return $pyjs_dbg_2_res})()));}catch($pyjs_dbg_3_err){
    if ($pyjs_dbg_3_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 32 :\n" + $pyjs_dbg_3_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_3_retry) {
        case 1:
            $pyjs_dbg_3_res=pyjslib['bool'](!pyjslib['bool']((function(){var $pyjs_dbg_2_retry = 0;
try{var $pyjs_dbg_2_res=pyjslib['hasattr'](((($attr1=le['error']) !== null & ($attr2=le).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'error'):
					le['error']), String('__class__'));}catch($pyjs_dbg_2_err){
    if ($pyjs_dbg_2_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 32 :\n" + $pyjs_dbg_2_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_2_retry) {
        case 1:
            $pyjs_dbg_2_res=pyjslib['hasattr'](((($attr1=le['error']) !== null & ($attr2=le).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'error'):
					le['error']), String('__class__'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_2_err;
    }
}return $pyjs_dbg_2_res})()));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_3_err;
    }
}return $pyjs_dbg_3_res})()) {
			$pyjs.track.lineno=33;
			cls = null;
		}
		else {
			$pyjs.track.lineno=35;
			cls = ((($attr3=le['error']['__class__']) !== null & ($attr4=le['error']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__class__'):
						le['error']['__class__']);
		}
		$pyjs.track.lineno=36;
		$pyjs.track.lineno=36;
		var $pyjs__ret = (function(){var $pyjs_dbg_4_retry = 0;
try{var $pyjs_dbg_4_res=pyjslib['tuple']([cls, ((($attr5=le['error']) !== null & ($attr6=le).__is_instance__) && typeof $attr5 == 'function'?
					pyjslib['getattr']($attr6, 'error'):
					le['error']), null]);}catch($pyjs_dbg_4_err){
    if ($pyjs_dbg_4_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 36 :\n" + $pyjs_dbg_4_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_4_retry) {
        case 1:
            $pyjs_dbg_4_res=pyjslib['tuple']([cls, ((($attr5=le['error']) !== null & ($attr6=le).__is_instance__) && typeof $attr5 == 'function'?
					pyjslib['getattr']($attr6, 'error'):
					le['error']), null]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_4_err;
    }
}return $pyjs_dbg_4_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	sys['exc_info'].__name__ = 'exc_info';

	sys['exc_info'].__bind_type__ = 0;
	sys['exc_info'].__args__ = [null,null];
	$pyjs.track.lineno=38;
	sys['exc_clear'] = function() {

		$pyjs.track={module:'sys',lineno:38};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=38;
		$pyjs.track.lineno=39;
$pyjs.__last_exception__ = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	sys['exc_clear'].__name__ = 'exc_clear';

	sys['exc_clear'].__bind_type__ = 0;
	sys['exc_clear'].__args__ = [null,null];
	$pyjs.track.lineno=53;
sys.save_exception_stack = function () {
    var save_stack = [];
    for (var needle in $pyjs.trackstack) {
        var t = new Object();
        for (var p in $pyjs.trackstack[needle]) {
            t[p] = $pyjs.trackstack[needle][p];
        }
        save_stack.push(t);
        $pyjs.__last_exception_stack__ = save_stack;
    }
return null;
};
	$pyjs.track.lineno=55;
	sys['trackstackstr'] = function(stack) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		var $attr7,$attr8,$iter1_nextval,$iter1_type,$attr10,stackstrings,$iter1_iter,s,$iter1_array,$pyjs__trackstack_size_1,msg,$attr9,$iter1_idx;
		$pyjs.track={module:'sys',lineno:55};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sys';
		$pyjs.track.lineno=55;
		$pyjs.track.lineno=56;
		if (pyjslib['bool']((stack === null))) {
			$pyjs.track.lineno=57;
			stack = $pyjs.__last_exception_stack__;
		}
		$pyjs.track.lineno=58;
		if (pyjslib['bool'](!pyjslib['bool'](stack))) {
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=59;
			var $pyjs__ret = String('');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=60;
		stackstrings = pyjslib['list']([]);
		$pyjs.track.lineno=61;
		msg = String('');
		$pyjs.track.lineno=62;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){var $pyjs_dbg_6_retry = 0;
try{var $pyjs_dbg_6_res=(function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=pyjslib['list'](stack);}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 62 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=pyjslib['list'](stack);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})();}catch($pyjs_dbg_6_err){
    if ($pyjs_dbg_6_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 62 :\n" + $pyjs_dbg_6_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_6_retry) {
        case 1:
            $pyjs_dbg_6_res=(function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=pyjslib['list'](stack);}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 62 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=pyjslib['list'](stack);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_6_err;
    }
}return $pyjs_dbg_6_res})();
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			s = $iter1_nextval;
			$pyjs.track.lineno=63;
msg = eval(s.module + '.__track_lines__[' + s.lineno + ']');
			$pyjs.track.lineno=64;
			if (pyjslib['bool'](msg)) {
				$pyjs.track.lineno=65;
				(function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=stackstrings['append'](msg);}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 65 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=stackstrings['append'](msg);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})();
			}
			else {
				$pyjs.track.lineno=67;
				(function(){var $pyjs_dbg_10_retry = 0;
try{var $pyjs_dbg_10_res=stackstrings['append']((function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=pyjslib['sprintf'](String('%s.py, line %d'), (function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})());}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=pyjslib['sprintf'](String('%s.py, line %d'), (function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})());
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
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_10_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_10_retry) {
        case 1:
            $pyjs_dbg_10_res=stackstrings['append']((function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=pyjslib['sprintf'](String('%s.py, line %d'), (function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})());}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=pyjslib['sprintf'](String('%s.py, line %d'), (function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 67 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})());
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
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sys';
		$pyjs.track.lineno=68;
		$pyjs.track.lineno=68;
		var $pyjs__ret = (function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=String('\x0A')['join'](stackstrings);}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module sys at line 68 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=String('\x0A')['join'](stackstrings);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	sys['trackstackstr'].__name__ = 'trackstackstr';

	sys['trackstackstr'].__bind_type__ = 0;
	sys['trackstackstr'].__args__ = [null,null,['stack', null]];
	$pyjs.track.lineno=70;
	sys['platform'] = $pyjs.platform;
	$pyjs.track.lineno=71;
	sys['byteorder'] = String('little');
	$pyjs.track.lineno=72;
	sys['maxint'] = 2147483647;
	return this;
}; /* end sys */


/* end module: sys */


