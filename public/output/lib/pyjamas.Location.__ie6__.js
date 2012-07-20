/* start module: pyjamas.Location */
$pyjs.loaded_modules['pyjamas.Location'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Location'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Location'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Location'] = $pyjs.loaded_modules["pyjamas.Location"];
	pyjamas['Location'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Location';
	var __name__ = pyjamas['Location'].__name__ = __mod_name__;
	pyjamas['Location'].__track_lines__ = new Array();
	var Location = pyjamas['Location'];
	pyjamas['Location'].__track_lines__[1] = "pyjamas.Location.py, line 1:\n    from __pyjamas__ import JS";
	pyjamas['Location'].__track_lines__[3] = "pyjamas.Location.py, line 3:\n    def makeUrlDict(urlstring):";
	pyjamas['Location'].__track_lines__[4] = "pyjamas.Location.py, line 4:\n    dict = {}";
	pyjamas['Location'].__track_lines__[5] = "pyjamas.Location.py, line 5:\n    pairs = urlstring.split(\"&\")";
	pyjamas['Location'].__track_lines__[6] = "pyjamas.Location.py, line 6:\n    for pair in pairs:";
	pyjamas['Location'].__track_lines__[7] = "pyjamas.Location.py, line 7:\n    if len(pair) < 3: continue";
	pyjamas['Location'].__track_lines__[8] = "pyjamas.Location.py, line 8:\n    kv = pair.split(\"=\",1)";
	pyjamas['Location'].__track_lines__[9] = "pyjamas.Location.py, line 9:\n    dict[kv[0]] = kv[1]";
	pyjamas['Location'].__track_lines__[10] = "pyjamas.Location.py, line 10:\n    return dict";
	pyjamas['Location'].__track_lines__[12] = "pyjamas.Location.py, line 12:\n    def makeUrlStringFromDict(d):";
	pyjamas['Location'].__track_lines__[13] = "pyjamas.Location.py, line 13:\n    pairs = []";
	pyjamas['Location'].__track_lines__[14] = "pyjamas.Location.py, line 14:\n    for k,v in d.iteritems():";
	pyjamas['Location'].__track_lines__[15] = "pyjamas.Location.py, line 15:\n    pairs.append(k+\"=\"+v)";
	pyjamas['Location'].__track_lines__[16] = "pyjamas.Location.py, line 16:\n    return \"&\".join(pairs)";
	pyjamas['Location'].__track_lines__[18] = "pyjamas.Location.py, line 4:\n    dict = {} ... class Location:";
	pyjamas['Location'].__track_lines__[26] = "pyjamas.Location.py, line 26:\n    def __init__(self, location):";
	pyjamas['Location'].__track_lines__[27] = "pyjamas.Location.py, line 27:\n    self.location = location";
	pyjamas['Location'].__track_lines__[28] = "pyjamas.Location.py, line 28:\n    self.searchDict = None";
	pyjamas['Location'].__track_lines__[30] = "pyjamas.Location.py, line 4:\n    dict = {} ... def getHash(self):";
	pyjamas['Location'].__track_lines__[33] = "pyjamas.Location.py, line 33:\n    def getHashDict(self):";
	pyjamas['Location'].__track_lines__[34] = "pyjamas.Location.py, line 34:\n    if not self.hashDict or self.hashDictHash != self.getHash():";
	pyjamas['Location'].__track_lines__[35] = "pyjamas.Location.py, line 35:\n    self.hashDictHash = self.getHash()";
	pyjamas['Location'].__track_lines__[36] = "pyjamas.Location.py, line 36:\n    self.hashDict = makeUrlDict(self.getHash()[1:])";
	pyjamas['Location'].__track_lines__[37] = "pyjamas.Location.py, line 37:\n    return self.hashDict";
	pyjamas['Location'].__track_lines__[39] = "pyjamas.Location.py, line 39:\n    def getHost(self):";
	pyjamas['Location'].__track_lines__[40] = "pyjamas.Location.py, line 40:\n    return self.location.host";
	pyjamas['Location'].__track_lines__[42] = "pyjamas.Location.py, line 42:\n    def getHostname(self):";
	pyjamas['Location'].__track_lines__[43] = "pyjamas.Location.py, line 43:\n    return self.location.hostname";
	pyjamas['Location'].__track_lines__[45] = "pyjamas.Location.py, line 45:\n    def getHref(self):";
	pyjamas['Location'].__track_lines__[46] = "pyjamas.Location.py, line 46:\n    return self.location.href";
	pyjamas['Location'].__track_lines__[48] = "pyjamas.Location.py, line 48:\n    def getPageHref(self):";
	pyjamas['Location'].__track_lines__[52] = "pyjamas.Location.py, line 52:\n    href = self.location.href";
	pyjamas['Location'].__track_lines__[53] = "pyjamas.Location.py, line 53:\n    if href.find(\"?\"): href = href.split(\"?\")[0]";
	pyjamas['Location'].__track_lines__[54] = "pyjamas.Location.py, line 54:\n    if href.find(\"#\"): href = href.split(\"#\")[0]";
	pyjamas['Location'].__track_lines__[55] = "pyjamas.Location.py, line 55:\n    return href";
	pyjamas['Location'].__track_lines__[57] = "pyjamas.Location.py, line 57:\n    def getPathname(self):";
	pyjamas['Location'].__track_lines__[58] = "pyjamas.Location.py, line 58:\n    return self.location.pathname";
	pyjamas['Location'].__track_lines__[60] = "pyjamas.Location.py, line 60:\n    def getPort(self):";
	pyjamas['Location'].__track_lines__[61] = "pyjamas.Location.py, line 61:\n    return self.location.port";
	pyjamas['Location'].__track_lines__[63] = "pyjamas.Location.py, line 63:\n    def getProtocol(self):";
	pyjamas['Location'].__track_lines__[64] = "pyjamas.Location.py, line 64:\n    return self.location.protocol";
	pyjamas['Location'].__track_lines__[66] = "pyjamas.Location.py, line 7:\n    if len(pair) < 3: continue ... def getSearch(self):";
	pyjamas['Location'].__track_lines__[69] = "pyjamas.Location.py, line 69:\n    def getSearchDict(self):";
	pyjamas['Location'].__track_lines__[70] = "pyjamas.Location.py, line 70:\n    if isinstance(self.location, str):";
	pyjamas['Location'].__track_lines__[71] = "pyjamas.Location.py, line 71:\n    return {}";
	pyjamas['Location'].__track_lines__[72] = "pyjamas.Location.py, line 72:\n    if not self.searchDict:";
	pyjamas['Location'].__track_lines__[73] = "pyjamas.Location.py, line 73:\n    self.searchDict = {}";
	pyjamas['Location'].__track_lines__[74] = "pyjamas.Location.py, line 74:\n    search = self.getSearch()[1:]";
	pyjamas['Location'].__track_lines__[75] = "pyjamas.Location.py, line 75:\n    self.searchDict = makeUrlDict(search)";
	pyjamas['Location'].__track_lines__[76] = "pyjamas.Location.py, line 76:\n    return self.searchDict";
	pyjamas['Location'].__track_lines__[78] = "pyjamas.Location.py, line 78:\n    def getSearchVar(self, key):";
	pyjamas['Location'].__track_lines__[79] = "pyjamas.Location.py, line 79:\n    searchDict = self.getSearchDict()";
	pyjamas['Location'].__track_lines__[80] = "pyjamas.Location.py, line 80:\n    return searchDict.get(key)";
	pyjamas['Location'].__track_lines__[82] = "pyjamas.Location.py, line 82:\n    def reload(self):";
	pyjamas['Location'].__track_lines__[83] = "pyjamas.Location.py, line 83:\n    self.location.reload()";
	pyjamas['Location'].__track_lines__[85] = "pyjamas.Location.py, line 85:\n    def setHref(self, href):";
	pyjamas['Location'].__track_lines__[86] = "pyjamas.Location.py, line 86:\n    self.location.href = href";
	pyjamas['Location'].__track_lines__[88] = "pyjamas.Location.py, line 88:\n    def setSearch(self, search):";
	pyjamas['Location'].__track_lines__[89] = "pyjamas.Location.py, line 89:\n    self.location.search = search";
	pyjamas['Location'].__track_lines__[91] = "pyjamas.Location.py, line 91:\n    def setSearchDict(self, searchDict):";
	pyjamas['Location'].__track_lines__[92] = "pyjamas.Location.py, line 92:\n    self.setSearch(makeUrlStringFromDict(searchDict))";
	pyjamas['Location'].__track_lines__[94] = "pyjamas.Location.py, line 94:\n    def setHash(self, hash):";
	pyjamas['Location'].__track_lines__[95] = "pyjamas.Location.py, line 95:\n    self.location.hash = hash";
	pyjamas['Location'].__track_lines__[97] = "pyjamas.Location.py, line 97:\n    def setHashDict(self, hashDict):";
	pyjamas['Location'].__track_lines__[98] = "pyjamas.Location.py, line 98:\n    self.setHash(makeUrlStringFromDict(hashDict))";


	$pyjs.track.module='pyjamas.Location';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=3;
	pyjamas['Location']['makeUrlDict'] = function(urlstring) {
		var pairs,$iter1_nextval,$iter1_type,$iter1_iter,dict,$iter1_array,$pyjs__trackstack_size_1,pair,kv,$iter1_idx;
		$pyjs.track={module:'pyjamas.Location',lineno:3};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Location';
		$pyjs.track.lineno=3;
		$pyjs.track.lineno=4;
		dict = (function(){var $pyjs_dbg_1_retry = 0;
try{var $pyjs_dbg_1_res=pyjslib['dict']([]);}catch($pyjs_dbg_1_err){
    if ($pyjs_dbg_1_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line None :\n" + $pyjs_dbg_1_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_1_retry) {
        case 1:
            $pyjs_dbg_1_res=pyjslib['dict']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_1_err;
    }
}return $pyjs_dbg_1_res})();
		$pyjs.track.lineno=5;
		pairs = (function(){var $pyjs_dbg_2_retry = 0;
try{var $pyjs_dbg_2_res=urlstring['$$split'](String('\x26'));}catch($pyjs_dbg_2_err){
    if ($pyjs_dbg_2_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 5 :\n" + $pyjs_dbg_2_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_2_retry) {
        case 1:
            $pyjs_dbg_2_res=urlstring['$$split'](String('\x26'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_2_err;
    }
}return $pyjs_dbg_2_res})();
		$pyjs.track.lineno=6;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){var $pyjs_dbg_3_retry = 0;
try{var $pyjs_dbg_3_res=pairs;}catch($pyjs_dbg_3_err){
    if ($pyjs_dbg_3_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 6 :\n" + $pyjs_dbg_3_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_3_retry) {
        case 1:
            $pyjs_dbg_3_res=pairs;
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_3_err;
    }
}return $pyjs_dbg_3_res})();
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			pair = $iter1_nextval;
			$pyjs.track.lineno=7;
			if ((function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_4_retry = 0;
try{var $pyjs_dbg_4_res=pyjslib['len'](pair);}catch($pyjs_dbg_4_err){
    if ($pyjs_dbg_4_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 7 :\n" + $pyjs_dbg_4_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_4_retry) {
        case 1:
            $pyjs_dbg_4_res=pyjslib['len'](pair);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_4_err;
    }
}return $pyjs_dbg_4_res})(), 3) == -1));}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 7 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=pyjslib['bool']((pyjslib['cmp']((function(){var $pyjs_dbg_4_retry = 0;
try{var $pyjs_dbg_4_res=pyjslib['len'](pair);}catch($pyjs_dbg_4_err){
    if ($pyjs_dbg_4_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 7 :\n" + $pyjs_dbg_4_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_4_retry) {
        case 1:
            $pyjs_dbg_4_res=pyjslib['len'](pair);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_4_err;
    }
}return $pyjs_dbg_4_res})(), 3) == -1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})()) {
				$pyjs.track.lineno=7;
				continue;
			}
			$pyjs.track.lineno=8;
			kv = (function(){var $pyjs_dbg_6_retry = 0;
try{var $pyjs_dbg_6_res=pair['$$split'](String('='), 1);}catch($pyjs_dbg_6_err){
    if ($pyjs_dbg_6_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 8 :\n" + $pyjs_dbg_6_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_6_retry) {
        case 1:
            $pyjs_dbg_6_res=pair['$$split'](String('='), 1);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_6_err;
    }
}return $pyjs_dbg_6_res})();
			$pyjs.track.lineno=9;
			(function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=dict.__setitem__(kv.__getitem__(0), kv.__getitem__(1));}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 9 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=dict.__setitem__(kv.__getitem__(0), kv.__getitem__(1));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Location';
		$pyjs.track.lineno=10;
		$pyjs.track.lineno=10;
		var $pyjs__ret = dict;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Location']['makeUrlDict'].__name__ = 'makeUrlDict';

	pyjamas['Location']['makeUrlDict'].__bind_type__ = 0;
	pyjamas['Location']['makeUrlDict'].__args__ = [null,null,['urlstring']];
	$pyjs.track.lineno=12;
	pyjamas['Location']['makeUrlStringFromDict'] = function(d) {
		var pairs,$iter2_nextval,$iter2_type,$iter2_iter,k,$pyjs__trackstack_size_1,$add2,$add3,$iter2_idx,$add1,$add4,v,$iter2_array;
		$pyjs.track={module:'pyjamas.Location',lineno:12};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Location';
		$pyjs.track.lineno=12;
		$pyjs.track.lineno=13;
		pairs = (function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['list']([]);}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 13 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['list']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})();
		$pyjs.track.lineno=14;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){var $pyjs_dbg_10_retry = 0;
try{var $pyjs_dbg_10_res=(function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=d['iteritems']();}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 14 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=d['iteritems']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_9_err;
    }
}return $pyjs_dbg_9_res})();}catch($pyjs_dbg_10_err){
    if ($pyjs_dbg_10_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 14 :\n" + $pyjs_dbg_10_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_10_retry) {
        case 1:
            $pyjs_dbg_10_res=(function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=d['iteritems']();}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 14 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=d['iteritems']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_9_err;
    }
}return $pyjs_dbg_9_res})();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_10_err;
    }
}return $pyjs_dbg_10_res})();
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			k = $iter2_nextval.__array[0];
			v = $iter2_nextval.__array[1];
			$pyjs.track.lineno=15;
			(function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=pairs['append']((typeof ($add3=(typeof ($add1=k)==typeof ($add2=String('=')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)))==typeof ($add4=v) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4)));}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 15 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=pairs['append']((typeof ($add3=(typeof ($add1=k)==typeof ($add2=String('=')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)))==typeof ($add4=v) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4)));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Location';
		$pyjs.track.lineno=16;
		$pyjs.track.lineno=16;
		var $pyjs__ret = (function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=String('\x26')['join'](pairs);}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 16 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=String('\x26')['join'](pairs);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	pyjamas['Location']['makeUrlStringFromDict'].__name__ = 'makeUrlStringFromDict';

	pyjamas['Location']['makeUrlStringFromDict'].__bind_type__ = 0;
	pyjamas['Location']['makeUrlStringFromDict'].__args__ = [null,null,['d']];
	$pyjs.track.lineno=18;
	pyjamas['Location']['Location'] = (function(){
		var $cls_instance = $pyjs__class_instance('Location');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'f53a36321ede9aaa6aec3365a0ef0a68';
		$pyjs.track.lineno=26;
		$method = $pyjs__bind_method($cls_instance, '__init__', function(location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			$pyjs.track={module:pyjamas.Location, lineno:26};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=27;
			self.location = location;
			$pyjs.track.lineno=28;
			self.searchDict = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=30;
		$method = $pyjs__bind_method($cls_instance, 'getHash', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:pyjamas.Location, lineno:30};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=30;
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			var $pyjs__ret = unescape(self.location.hash);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHash'] = $method;
		$pyjs.track.lineno=33;
		$method = $pyjs__bind_method($cls_instance, 'getHashDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2,$attr1,$attr2,$attr5,$attr4,$attr6,$attr3;
			$pyjs.track={module:pyjamas.Location, lineno:33};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=34;
			if ((function(){var $pyjs_dbg_14_retry = 0;
try{var $pyjs_dbg_14_res=pyjslib['bool']((pyjslib['bool']($or1=!pyjslib['bool'](((($attr1=self['hashDict']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'hashDict'):
						self['hashDict'])))?$or1:!pyjslib['op_eq'](((($attr3=self['hashDictHash']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'hashDictHash'):
						self['hashDictHash']), (function(){var $pyjs_dbg_13_retry = 0;
try{var $pyjs_dbg_13_res=self['getHash']();}catch($pyjs_dbg_13_err){
    if ($pyjs_dbg_13_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 34 :\n" + $pyjs_dbg_13_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_13_retry) {
        case 1:
            $pyjs_dbg_13_res=self['getHash']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_13_err;
    }
}return $pyjs_dbg_13_res})())));}catch($pyjs_dbg_14_err){
    if ($pyjs_dbg_14_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 34 :\n" + $pyjs_dbg_14_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_14_retry) {
        case 1:
            $pyjs_dbg_14_res=pyjslib['bool']((pyjslib['bool']($or1=!pyjslib['bool'](((($attr1=self['hashDict']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'hashDict'):
						self['hashDict'])))?$or1:!pyjslib['op_eq'](((($attr3=self['hashDictHash']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'hashDictHash'):
						self['hashDictHash']), (function(){var $pyjs_dbg_13_retry = 0;
try{var $pyjs_dbg_13_res=self['getHash']();}catch($pyjs_dbg_13_err){
    if ($pyjs_dbg_13_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 34 :\n" + $pyjs_dbg_13_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_13_retry) {
        case 1:
            $pyjs_dbg_13_res=self['getHash']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_13_err;
    }
}return $pyjs_dbg_13_res})())));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_14_err;
    }
}return $pyjs_dbg_14_res})()) {
				$pyjs.track.lineno=35;
				self.hashDictHash = (function(){var $pyjs_dbg_15_retry = 0;
try{var $pyjs_dbg_15_res=self['getHash']();}catch($pyjs_dbg_15_err){
    if ($pyjs_dbg_15_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 35 :\n" + $pyjs_dbg_15_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_15_retry) {
        case 1:
            $pyjs_dbg_15_res=self['getHash']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_15_err;
    }
}return $pyjs_dbg_15_res})();
				$pyjs.track.lineno=36;
				self.hashDict = (function(){var $pyjs_dbg_17_retry = 0;
try{var $pyjs_dbg_17_res=pyjamas['Location']['makeUrlDict'](pyjslib['slice']((function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=self['getHash']();}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 36 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=self['getHash']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})(), 1, null));}catch($pyjs_dbg_17_err){
    if ($pyjs_dbg_17_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 36 :\n" + $pyjs_dbg_17_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_17_retry) {
        case 1:
            $pyjs_dbg_17_res=pyjamas['Location']['makeUrlDict'](pyjslib['slice']((function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=self['getHash']();}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 36 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=self['getHash']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})(), 1, null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_17_err;
    }
}return $pyjs_dbg_17_res})();
			}
			$pyjs.track.lineno=37;
			$pyjs.track.lineno=37;
			var $pyjs__ret = ((($attr5=self['hashDict']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'hashDict'):
						self['hashDict']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHashDict'] = $method;
		$pyjs.track.lineno=39;
		$method = $pyjs__bind_method($cls_instance, 'getHost', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			$pyjs.track={module:pyjamas.Location, lineno:39};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=39;
			$pyjs.track.lineno=40;
			$pyjs.track.lineno=40;
			var $pyjs__ret = ((($attr7=self['location']['host']) !== null & ($attr8=self['location']).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'host'):
						self['location']['host']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHost'] = $method;
		$pyjs.track.lineno=42;
		$method = $pyjs__bind_method($cls_instance, 'getHostname', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			$pyjs.track={module:pyjamas.Location, lineno:42};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=43;
			$pyjs.track.lineno=43;
			var $pyjs__ret = ((($attr9=self['location']['hostname']) !== null & ($attr10=self['location']).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'hostname'):
						self['location']['hostname']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHostname'] = $method;
		$pyjs.track.lineno=45;
		$method = $pyjs__bind_method($cls_instance, 'getHref', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			$pyjs.track={module:pyjamas.Location, lineno:45};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = ((($attr11=self['location']['href']) !== null & ($attr12=self['location']).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'href'):
						self['location']['href']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHref'] = $method;
		$pyjs.track.lineno=48;
		$method = $pyjs__bind_method($cls_instance, 'getPageHref', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,href,$attr13;
			$pyjs.track={module:pyjamas.Location, lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=52;
			href = ((($attr13=self['location']['href']) !== null & ($attr14=self['location']).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'href'):
						self['location']['href']);
			$pyjs.track.lineno=53;
			if ((function(){var $pyjs_dbg_19_retry = 0;
try{var $pyjs_dbg_19_res=pyjslib['bool']((function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=href['find'](String('?'));}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 53 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=href['find'](String('?'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})());}catch($pyjs_dbg_19_err){
    if ($pyjs_dbg_19_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 53 :\n" + $pyjs_dbg_19_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_19_retry) {
        case 1:
            $pyjs_dbg_19_res=pyjslib['bool']((function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=href['find'](String('?'));}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 53 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=href['find'](String('?'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_19_err;
    }
}return $pyjs_dbg_19_res})()) {
				$pyjs.track.lineno=53;
				href = (function(){var $pyjs_dbg_20_retry = 0;
try{var $pyjs_dbg_20_res=href['$$split'](String('?'));}catch($pyjs_dbg_20_err){
    if ($pyjs_dbg_20_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 53 :\n" + $pyjs_dbg_20_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_20_retry) {
        case 1:
            $pyjs_dbg_20_res=href['$$split'](String('?'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_20_err;
    }
}return $pyjs_dbg_20_res})().__getitem__(0);
			}
			$pyjs.track.lineno=54;
			if ((function(){var $pyjs_dbg_22_retry = 0;
try{var $pyjs_dbg_22_res=pyjslib['bool']((function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=href['find'](String('#'));}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 54 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=href['find'](String('#'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})());}catch($pyjs_dbg_22_err){
    if ($pyjs_dbg_22_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 54 :\n" + $pyjs_dbg_22_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_22_retry) {
        case 1:
            $pyjs_dbg_22_res=pyjslib['bool']((function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=href['find'](String('#'));}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 54 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=href['find'](String('#'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_22_err;
    }
}return $pyjs_dbg_22_res})()) {
				$pyjs.track.lineno=54;
				href = (function(){var $pyjs_dbg_23_retry = 0;
try{var $pyjs_dbg_23_res=href['$$split'](String('#'));}catch($pyjs_dbg_23_err){
    if ($pyjs_dbg_23_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 54 :\n" + $pyjs_dbg_23_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_23_retry) {
        case 1:
            $pyjs_dbg_23_res=href['$$split'](String('#'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_23_err;
    }
}return $pyjs_dbg_23_res})().__getitem__(0);
			}
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=55;
			var $pyjs__ret = href;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPageHref'] = $method;
		$pyjs.track.lineno=57;
		$method = $pyjs__bind_method($cls_instance, 'getPathname', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			$pyjs.track={module:pyjamas.Location, lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=58;
			var $pyjs__ret = ((($attr15=self['location']['pathname']) !== null & ($attr16=self['location']).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'pathname'):
						self['location']['pathname']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPathname'] = $method;
		$pyjs.track.lineno=60;
		$method = $pyjs__bind_method($cls_instance, 'getPort', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			$pyjs.track={module:pyjamas.Location, lineno:60};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=60;
			$pyjs.track.lineno=61;
			$pyjs.track.lineno=61;
			var $pyjs__ret = ((($attr17=self['location']['port']) !== null & ($attr18=self['location']).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'port'):
						self['location']['port']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPort'] = $method;
		$pyjs.track.lineno=63;
		$method = $pyjs__bind_method($cls_instance, 'getProtocol', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			$pyjs.track={module:pyjamas.Location, lineno:63};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=63;
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=64;
			var $pyjs__ret = ((($attr19=self['location']['protocol']) !== null & ($attr20=self['location']).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'protocol'):
						self['location']['protocol']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getProtocol'] = $method;
		$pyjs.track.lineno=66;
		$method = $pyjs__bind_method($cls_instance, 'getSearch', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:pyjamas.Location, lineno:66};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=66;
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=7;
			var $pyjs__ret = unescape(self.location.search);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearch'] = $method;
		$pyjs.track.lineno=69;
		$method = $pyjs__bind_method($cls_instance, 'getSearchDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var search,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26;
			$pyjs.track={module:pyjamas.Location, lineno:69};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=69;
			$pyjs.track.lineno=70;
			if ((function(){var $pyjs_dbg_25_retry = 0;
try{var $pyjs_dbg_25_res=pyjslib['bool']((function(){var $pyjs_dbg_24_retry = 0;
try{var $pyjs_dbg_24_res=pyjslib['isinstance'](((($attr21=self['location']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'location'):
						self['location']), pyjslib['str']);}catch($pyjs_dbg_24_err){
    if ($pyjs_dbg_24_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 70 :\n" + $pyjs_dbg_24_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_24_retry) {
        case 1:
            $pyjs_dbg_24_res=pyjslib['isinstance'](((($attr21=self['location']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'location'):
						self['location']), pyjslib['str']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_24_err;
    }
}return $pyjs_dbg_24_res})());}catch($pyjs_dbg_25_err){
    if ($pyjs_dbg_25_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 70 :\n" + $pyjs_dbg_25_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_25_retry) {
        case 1:
            $pyjs_dbg_25_res=pyjslib['bool']((function(){var $pyjs_dbg_24_retry = 0;
try{var $pyjs_dbg_24_res=pyjslib['isinstance'](((($attr21=self['location']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'location'):
						self['location']), pyjslib['str']);}catch($pyjs_dbg_24_err){
    if ($pyjs_dbg_24_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 70 :\n" + $pyjs_dbg_24_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_24_retry) {
        case 1:
            $pyjs_dbg_24_res=pyjslib['isinstance'](((($attr21=self['location']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'location'):
						self['location']), pyjslib['str']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_24_err;
    }
}return $pyjs_dbg_24_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_25_err;
    }
}return $pyjs_dbg_25_res})()) {
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=71;
				var $pyjs__ret = (function(){var $pyjs_dbg_26_retry = 0;
try{var $pyjs_dbg_26_res=pyjslib['dict']([]);}catch($pyjs_dbg_26_err){
    if ($pyjs_dbg_26_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line None :\n" + $pyjs_dbg_26_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_26_retry) {
        case 1:
            $pyjs_dbg_26_res=pyjslib['dict']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_26_err;
    }
}return $pyjs_dbg_26_res})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=72;
			if ((function(){var $pyjs_dbg_27_retry = 0;
try{var $pyjs_dbg_27_res=pyjslib['bool'](!pyjslib['bool'](((($attr23=self['searchDict']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'searchDict'):
						self['searchDict'])));}catch($pyjs_dbg_27_err){
    if ($pyjs_dbg_27_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 72 :\n" + $pyjs_dbg_27_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_27_retry) {
        case 1:
            $pyjs_dbg_27_res=pyjslib['bool'](!pyjslib['bool'](((($attr23=self['searchDict']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'searchDict'):
						self['searchDict'])));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_27_err;
    }
}return $pyjs_dbg_27_res})()) {
				$pyjs.track.lineno=73;
				self.searchDict = (function(){var $pyjs_dbg_28_retry = 0;
try{var $pyjs_dbg_28_res=pyjslib['dict']([]);}catch($pyjs_dbg_28_err){
    if ($pyjs_dbg_28_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line None :\n" + $pyjs_dbg_28_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_28_retry) {
        case 1:
            $pyjs_dbg_28_res=pyjslib['dict']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_28_err;
    }
}return $pyjs_dbg_28_res})();
				$pyjs.track.lineno=74;
				search = pyjslib['slice']((function(){var $pyjs_dbg_29_retry = 0;
try{var $pyjs_dbg_29_res=self['getSearch']();}catch($pyjs_dbg_29_err){
    if ($pyjs_dbg_29_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 74 :\n" + $pyjs_dbg_29_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_29_retry) {
        case 1:
            $pyjs_dbg_29_res=self['getSearch']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_29_err;
    }
}return $pyjs_dbg_29_res})(), 1, null);
				$pyjs.track.lineno=75;
				self.searchDict = (function(){var $pyjs_dbg_30_retry = 0;
try{var $pyjs_dbg_30_res=pyjamas['Location']['makeUrlDict'](search);}catch($pyjs_dbg_30_err){
    if ($pyjs_dbg_30_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 75 :\n" + $pyjs_dbg_30_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_30_retry) {
        case 1:
            $pyjs_dbg_30_res=pyjamas['Location']['makeUrlDict'](search);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_30_err;
    }
}return $pyjs_dbg_30_res})();
			}
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=76;
			var $pyjs__ret = ((($attr25=self['searchDict']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'searchDict'):
						self['searchDict']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearchDict'] = $method;
		$pyjs.track.lineno=78;
		$method = $pyjs__bind_method($cls_instance, 'getSearchVar', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var searchDict;
			$pyjs.track={module:pyjamas.Location, lineno:78};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=78;
			$pyjs.track.lineno=79;
			searchDict = (function(){var $pyjs_dbg_31_retry = 0;
try{var $pyjs_dbg_31_res=self['getSearchDict']();}catch($pyjs_dbg_31_err){
    if ($pyjs_dbg_31_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 79 :\n" + $pyjs_dbg_31_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_31_retry) {
        case 1:
            $pyjs_dbg_31_res=self['getSearchDict']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_31_err;
    }
}return $pyjs_dbg_31_res})();
			$pyjs.track.lineno=80;
			$pyjs.track.lineno=80;
			var $pyjs__ret = (function(){var $pyjs_dbg_32_retry = 0;
try{var $pyjs_dbg_32_res=searchDict['get'](key);}catch($pyjs_dbg_32_err){
    if ($pyjs_dbg_32_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 80 :\n" + $pyjs_dbg_32_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_32_retry) {
        case 1:
            $pyjs_dbg_32_res=searchDict['get'](key);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_32_err;
    }
}return $pyjs_dbg_32_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['getSearchVar'] = $method;
		$pyjs.track.lineno=82;
		$method = $pyjs__bind_method($cls_instance, 'reload', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:pyjamas.Location, lineno:82};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=82;
			$pyjs.track.lineno=83;
			(function(){var $pyjs_dbg_33_retry = 0;
try{var $pyjs_dbg_33_res=self['location']['reload']();}catch($pyjs_dbg_33_err){
    if ($pyjs_dbg_33_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 83 :\n" + $pyjs_dbg_33_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_33_retry) {
        case 1:
            $pyjs_dbg_33_res=self['location']['reload']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_33_err;
    }
}return $pyjs_dbg_33_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$pyjs.track.lineno=85;
		$method = $pyjs__bind_method($cls_instance, 'setHref', function(href) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				href = arguments[1];
			}

			$pyjs.track={module:pyjamas.Location, lineno:85};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=85;
			$pyjs.track.lineno=86;
			self['location'].href = href;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['href']]);
		$cls_definition['setHref'] = $method;
		$pyjs.track.lineno=88;
		$method = $pyjs__bind_method($cls_instance, 'setSearch', function(search) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				search = arguments[1];
			}

			$pyjs.track={module:pyjamas.Location, lineno:88};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=88;
			$pyjs.track.lineno=89;
			self['location'].search = search;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['search']]);
		$cls_definition['setSearch'] = $method;
		$pyjs.track.lineno=91;
		$method = $pyjs__bind_method($cls_instance, 'setSearchDict', function(searchDict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				searchDict = arguments[1];
			}

			$pyjs.track={module:pyjamas.Location, lineno:91};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=91;
			$pyjs.track.lineno=92;
			(function(){var $pyjs_dbg_35_retry = 0;
try{var $pyjs_dbg_35_res=self['setSearch']((function(){var $pyjs_dbg_34_retry = 0;
try{var $pyjs_dbg_34_res=pyjamas['Location']['makeUrlStringFromDict'](searchDict);}catch($pyjs_dbg_34_err){
    if ($pyjs_dbg_34_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 92 :\n" + $pyjs_dbg_34_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_34_retry) {
        case 1:
            $pyjs_dbg_34_res=pyjamas['Location']['makeUrlStringFromDict'](searchDict);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_34_err;
    }
}return $pyjs_dbg_34_res})());}catch($pyjs_dbg_35_err){
    if ($pyjs_dbg_35_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 92 :\n" + $pyjs_dbg_35_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_35_retry) {
        case 1:
            $pyjs_dbg_35_res=self['setSearch']((function(){var $pyjs_dbg_34_retry = 0;
try{var $pyjs_dbg_34_res=pyjamas['Location']['makeUrlStringFromDict'](searchDict);}catch($pyjs_dbg_34_err){
    if ($pyjs_dbg_34_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 92 :\n" + $pyjs_dbg_34_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_34_retry) {
        case 1:
            $pyjs_dbg_34_res=pyjamas['Location']['makeUrlStringFromDict'](searchDict);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_34_err;
    }
}return $pyjs_dbg_34_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_35_err;
    }
}return $pyjs_dbg_35_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['searchDict']]);
		$cls_definition['setSearchDict'] = $method;
		$pyjs.track.lineno=94;
		$method = $pyjs__bind_method($cls_instance, 'setHash', function(hash) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hash = arguments[1];
			}

			$pyjs.track={module:pyjamas.Location, lineno:94};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=94;
			$pyjs.track.lineno=95;
			self['location'].hash = hash;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['hash']]);
		$cls_definition['setHash'] = $method;
		$pyjs.track.lineno=97;
		$method = $pyjs__bind_method($cls_instance, 'setHashDict', function(hashDict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hashDict = arguments[1];
			}

			$pyjs.track={module:pyjamas.Location, lineno:97};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=97;
			$pyjs.track.lineno=98;
			(function(){var $pyjs_dbg_37_retry = 0;
try{var $pyjs_dbg_37_res=self['setHash']((function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=pyjamas['Location']['makeUrlStringFromDict'](hashDict);}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 98 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=pyjamas['Location']['makeUrlStringFromDict'](hashDict);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})());}catch($pyjs_dbg_37_err){
    if ($pyjs_dbg_37_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 98 :\n" + $pyjs_dbg_37_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_37_retry) {
        case 1:
            $pyjs_dbg_37_res=self['setHash']((function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=pyjamas['Location']['makeUrlStringFromDict'](hashDict);}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module pyjamas.Location at line 98 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=pyjamas['Location']['makeUrlStringFromDict'](hashDict);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_37_err;
    }
}return $pyjs_dbg_37_res})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['hashDict']]);
		$cls_definition['setHashDict'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.Location */


/* end module: pyjamas.Location */


