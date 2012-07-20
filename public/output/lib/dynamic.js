/* start module: dynamic */
var dynamic;
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	dynamic = $pyjs.loaded_modules["dynamic"];
	dynamic.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	var __name__ = dynamic.__name__ = __mod_name__;
	dynamic.__track_lines__ = new Array();


	$pyjs.track.module='dynamic';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=5;
	$pyjs.track.lineno=6;
	$pyjs.track.lineno=7;
	dynamic['DOM'] = pyjslib['___import___']('pyjamas.DOM', null, null, false);
	$pyjs.track.lineno=8;
	$pyjs.track.lineno=9;
	dynamic['sys'] = pyjslib['___import___']('sys', null);
	$pyjs.track.lineno=11;
	;
	dynamic['AjaxError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AjaxError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e470508acbf89106acbe59a43e68272f';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['RuntimeError']));
	})();
	dynamic['createHttpRequest'] = function() {
		var res,$pyjs_try_err,err;
		if (pyjslib['bool'](typeof $wnd.XMLHttpRequest != 'undefined')) {
			return new XMLHttpRequest();
		}
		try {
			res = new ActiveXObject("Msxml2.XMLHTTP");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 22};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 26;
				err = $pyjs_try_err;
			}
		}
		return null;
	};
	dynamic['createHttpRequest'].__name__ = 'createHttpRequest';

	dynamic['createHttpRequest'].__bind_type__ = 0;
	dynamic['createHttpRequest'].__args__ = [null,null];
	dynamic['load'] = function(url, onreadystatechange, on_load_fn, async) {
		if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments.callee.__args__[3][1];
		if (typeof on_load_fn == 'undefined') on_load_fn=arguments.callee.__args__[4][1];
		if (typeof async == 'undefined') async=arguments.callee.__args__[5][1];
		var $or5,$attr20,req,$pyjs_try_err,$attr9,$or4,$or6,$or3,$and3,$and4,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,err,$add2,$add1;
		;
		$wnd.status = (typeof ($add1=String('Loading '))==typeof ($add2=url) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2));
		req = dynamic['createHttpRequest']();
		if (pyjslib['bool']((onreadystatechange === null))) {
			onreadystatechange = function(evnt) {
				var $attr8,$or1,$add4,$or2,$attr1,$and1,$and2,$attr2,$attr5,$attr4,$attr7,$attr6,$add3,str,$attr3;
				if (pyjslib['bool']((pyjslib['bool']($and1=pyjslib['op_eq'](((($attr1=req['readyState']) !== null & ($attr2=req).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'readyState'):
							req['readyState']), 4))?(pyjslib['bool']($or1=pyjslib['op_eq'](((($attr3=req['status']) !== null & ($attr4=req).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'status'):
							req['status']), 200))?$or1:pyjslib['op_eq'](((($attr5=req['status']) !== null & ($attr6=req).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, 'status'):
							req['status']), 0)):$and1))) {
					str = ((($attr7=req['responseText']) !== null & ($attr8=req).__is_instance__) && typeof $attr7 == 'function'?
								pyjslib['getattr']($attr8, 'responseText'):
								req['responseText']);
					$wnd.status = (typeof ($add3=String('Loaded '))==typeof ($add4=url) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						pyjslib['op_add']($add3,$add4));
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						on_load_fn(evnt, req);
					}
				}
				return null;
			};
			onreadystatechange.__name__ = 'onreadystatechange';

			onreadystatechange.__bind_type__ = 0;
			onreadystatechange.__args__ = [null,null,['evnt']];
		}
req.onreadystatechange = onreadystatechange;
		req['open'](String('GET'), url, async);
		try {
			req['send'](null);
			if (pyjslib['bool'](async)) {
				return null;
			}
			while (pyjslib['bool'](true)) {
				if (pyjslib['bool']((pyjslib['bool']($or3=pyjslib['op_eq'](((($attr9=req['status']) !== null & ($attr10=req).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'status'):
							req['status']), 200))?$or3:(pyjslib['bool']($and3=pyjslib['op_eq'](((($attr11=req['status']) !== null & ($attr12=req).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'status'):
							req['status']), 0))?((($attr13=req['responseText']) !== null & ($attr14=req).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'responseText'):
							req['responseText']):$and3)))) {
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						on_load_fn(null, req);
					}
					return req;
				}
				if (pyjslib['bool']((pyjslib['bool']($or5=!pyjslib['op_eq'](((($attr15=req['status']) !== null & ($attr16=req).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'status'):
							req['status']), 0))?$or5:!pyjslib['op_eq'](((($attr17=req['responseText']) !== null & ($attr18=req).__is_instance__) && typeof $attr17 == 'function'?
							pyjslib['getattr']($attr18, 'responseText'):
							req['responseText']), String(''))))) {
					break;
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 55};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 69;
				err = $pyjs_try_err;
			}
		}
		throw (dynamic['AjaxError'](String('Synchronous error'), ((($attr19=req['status']) !== null & ($attr20=req).__is_instance__) && typeof $attr19 == 'function'?
					pyjslib['getattr']($attr20, 'status'):
					req['status'])));
		return null;
	};
	dynamic['load'].__name__ = 'load';

	dynamic['load'].__bind_type__ = 0;
	dynamic['load'].__args__ = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
	dynamic['inject'] = function(values, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
		if ((function(){var $pyjs_dbg_1_retry = 0;
try{var $pyjs_dbg_1_res=pyjslib['bool']((namespace === null));}catch($pyjs_dbg_1_err){
    if ($pyjs_dbg_1_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 73 :\n" + $pyjs_dbg_1_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_1_retry) {
        case 1:
            $pyjs_dbg_1_res=pyjslib['bool']((namespace === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_1_err;
    }
}return $pyjs_dbg_1_res})()) {
			namespace = $pyjs.global_namespace;
		}
		values = (function(){var $pyjs_dbg_2_retry = 0;
try{var $pyjs_dbg_2_res=pyjslib['dict'](values);}catch($pyjs_dbg_2_err){
    if ($pyjs_dbg_2_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 76 :\n" + $pyjs_dbg_2_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_2_retry) {
        case 1:
            $pyjs_dbg_2_res=pyjslib['dict'](values);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_2_err;
    }
}return $pyjs_dbg_2_res})();
		if ((function(){var $pyjs_dbg_3_retry = 0;
try{var $pyjs_dbg_3_res=pyjslib['bool']((names === null));}catch($pyjs_dbg_3_err){
    if ($pyjs_dbg_3_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 77 :\n" + $pyjs_dbg_3_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_3_retry) {
        case 1:
            $pyjs_dbg_3_res=pyjslib['bool']((names === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_3_err;
    }
}return $pyjs_dbg_3_res})()) {
			$iter1_iter = (function(){var $pyjs_dbg_4_retry = 0;
try{var $pyjs_dbg_4_res=values;}catch($pyjs_dbg_4_err){
    if ($pyjs_dbg_4_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 78 :\n" + $pyjs_dbg_4_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_4_retry) {
        case 1:
            $pyjs_dbg_4_res=values;
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_4_err;
    }
}return $pyjs_dbg_4_res})();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		else {
			$iter2_iter = names;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				k = $iter2_nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		return null;
	};
	dynamic['inject'].__name__ = 'inject';

	dynamic['inject'].__bind_type__ = 0;
	dynamic['inject'].__args__ = [null,null,['values'],['namespace', null],['names', null]];
	dynamic['activate_css'] = function(targetnode) {
		var $iter3_idx,LC,$iter3_type,$attr21,$iter3_nextval,scriptnodes,$attr22,$attr23,$attr24,$iter3_iter,$iter3_array,fileref,sn;
		scriptnodes = (function(){var $pyjs_dbg_6_retry = 0;
try{var $pyjs_dbg_6_res=pyjslib['list']((function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=targetnode['getElementsByTagName'](String('link'));}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 94 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=targetnode['getElementsByTagName'](String('link'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})());}catch($pyjs_dbg_6_err){
    if ($pyjs_dbg_6_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 94 :\n" + $pyjs_dbg_6_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_6_retry) {
        case 1:
            $pyjs_dbg_6_res=pyjslib['list']((function(){var $pyjs_dbg_5_retry = 0;
try{var $pyjs_dbg_5_res=targetnode['getElementsByTagName'](String('link'));}catch($pyjs_dbg_5_err){
    if ($pyjs_dbg_5_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 94 :\n" + $pyjs_dbg_5_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_5_retry) {
        case 1:
            $pyjs_dbg_5_res=targetnode['getElementsByTagName'](String('link'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_5_err;
    }
}return $pyjs_dbg_5_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_6_err;
    }
}return $pyjs_dbg_6_res})();
		$iter3_iter = (function(){var $pyjs_dbg_9_retry = 0;
try{var $pyjs_dbg_9_res=(function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['range']((function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})());}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['range']((function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})();}catch($pyjs_dbg_9_err){
    if ($pyjs_dbg_9_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_9_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_9_retry) {
        case 1:
            $pyjs_dbg_9_res=(function(){var $pyjs_dbg_8_retry = 0;
try{var $pyjs_dbg_8_res=pyjslib['range']((function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})());}catch($pyjs_dbg_8_err){
    if ($pyjs_dbg_8_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_8_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_8_retry) {
        case 1:
            $pyjs_dbg_8_res=pyjslib['range']((function(){var $pyjs_dbg_7_retry = 0;
try{var $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);}catch($pyjs_dbg_7_err){
    if ($pyjs_dbg_7_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 95 :\n" + $pyjs_dbg_7_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_7_retry) {
        case 1:
            $pyjs_dbg_7_res=pyjslib['len'](scriptnodes);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_7_err;
    }
}return $pyjs_dbg_7_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_8_err;
    }
}return $pyjs_dbg_8_res})();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_9_err;
    }
}return $pyjs_dbg_9_res})();
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			LC = $iter3_nextval;
			sn = scriptnodes.__getitem__(LC);
			(function(){var $pyjs_dbg_10_retry = 0;
try{var $pyjs_dbg_10_res=sn['parentNode']['removeChild'](sn);}catch($pyjs_dbg_10_err){
    if ($pyjs_dbg_10_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 97 :\n" + $pyjs_dbg_10_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_10_retry) {
        case 1:
            $pyjs_dbg_10_res=sn['parentNode']['removeChild'](sn);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_10_err;
    }
}return $pyjs_dbg_10_res})();
			fileref = (function(){var $pyjs_dbg_11_retry = 0;
try{var $pyjs_dbg_11_res=dynamic['DOM']['createElement'](String('link'));}catch($pyjs_dbg_11_err){
    if ($pyjs_dbg_11_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 99 :\n" + $pyjs_dbg_11_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_11_retry) {
        case 1:
            $pyjs_dbg_11_res=dynamic['DOM']['createElement'](String('link'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_11_err;
    }
}return $pyjs_dbg_11_res})();
			if ((function(){var $pyjs_dbg_13_retry = 0;
try{var $pyjs_dbg_13_res=pyjslib['bool']((function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=dynamic.hassattr(sn, String('href'));}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 101 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=dynamic.hassattr(sn, String('href'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})());}catch($pyjs_dbg_13_err){
    if ($pyjs_dbg_13_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 101 :\n" + $pyjs_dbg_13_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_13_retry) {
        case 1:
            $pyjs_dbg_13_res=pyjslib['bool']((function(){var $pyjs_dbg_12_retry = 0;
try{var $pyjs_dbg_12_res=dynamic.hassattr(sn, String('href'));}catch($pyjs_dbg_12_err){
    if ($pyjs_dbg_12_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 101 :\n" + $pyjs_dbg_12_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_12_retry) {
        case 1:
            $pyjs_dbg_12_res=dynamic.hassattr(sn, String('href'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_12_err;
    }
}return $pyjs_dbg_12_res})());
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_13_err;
    }
}return $pyjs_dbg_13_res})()) {
				fileref.href = ((($attr21=sn['href']) !== null & ($attr22=sn).__is_instance__) && typeof $attr21 == 'function'?
							pyjslib['getattr']($attr22, 'href'):
							sn['href']);
			}
			else {
				fileref.text = ((($attr23=sn['text']) !== null & ($attr24=sn).__is_instance__) && typeof $attr23 == 'function'?
							pyjslib['getattr']($attr24, 'text'):
							sn['text']);
			}
			fileref.rel = String('stylesheet');
			fileref.type = String('text/css');
			$doc['getElementsByTagName'](String('head'))['item'](0)['appendChild'](fileref);
		}
		return null;
	};
	dynamic['activate_css'].__name__ = 'activate_css';

	dynamic['activate_css'].__bind_type__ = 0;
	dynamic['activate_css'].__args__ = [null,null,['targetnode']];
	dynamic['activate_javascript'] = function(txt) {
		var fileref;
		fileref = (function(){var $pyjs_dbg_14_retry = 0;
try{var $pyjs_dbg_14_res=dynamic['DOM']['createElement'](String('script'));}catch($pyjs_dbg_14_err){
    if ($pyjs_dbg_14_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 119 :\n" + $pyjs_dbg_14_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_14_retry) {
        case 1:
            $pyjs_dbg_14_res=dynamic['DOM']['createElement'](String('script'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_14_err;
    }
}return $pyjs_dbg_14_res})();
		fileref.text = txt;
		fileref.type = String('text/javascript');
		fileref.language = String('javascript');
		fileref = (function(){var $pyjs_dbg_15_retry = 0;
try{var $pyjs_dbg_15_res=fileref['cloneNode'](true);}catch($pyjs_dbg_15_err){
    if ($pyjs_dbg_15_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 132 :\n" + $pyjs_dbg_15_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_15_retry) {
        case 1:
            $pyjs_dbg_15_res=fileref['cloneNode'](true);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_15_err;
    }
}return $pyjs_dbg_15_res})();
		$doc['getElementsByTagName'](String('head'))['item'](0)['appendChild'](fileref);
		return null;
	};
	dynamic['activate_javascript'].__name__ = 'activate_javascript';

	dynamic['activate_javascript'].__bind_type__ = 0;
	dynamic['activate_javascript'].__args__ = [null,null,['txt']];
	dynamic['eval'] = function(str) {

		return (function(){var $pyjs_dbg_16_retry = 0;
try{var $pyjs_dbg_16_res=eval(str);}catch($pyjs_dbg_16_err){
    if ($pyjs_dbg_16_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 138 :\n" + $pyjs_dbg_16_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_16_retry) {
        case 1:
            $pyjs_dbg_16_res=eval(str);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_16_err;
    }
}return $pyjs_dbg_16_res})();
	};
	dynamic['eval'].__name__ = 'eval';

	dynamic['eval'].__bind_type__ = 0;
	dynamic['eval'].__args__ = [null,null,['str']];
	dynamic['ajax_eval'] = function(url, on_load_fn, async) {
		var onready;
		;
		onready = function(evnt, req) {
			var str,$attr25,$attr26;
			str = ((($attr25=req['responseText']) !== null & ($attr26=req).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'responseText'):
						req['responseText']);
			dynamic['activate_javascript'](str);
			if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
				on_load_fn();
			}
			return null;
		};
		onready.__name__ = 'onready';

		onready.__bind_type__ = 0;
		onready.__args__ = [null,null,['evnt'],['req']];
		dynamic['load'](url, null, onready, async);
		return null;
	};
	dynamic['ajax_eval'].__name__ = 'ajax_eval';

	dynamic['ajax_eval'].__bind_type__ = 0;
	dynamic['ajax_eval'].__args__ = [null,null,['url'],['on_load_fn'],['async']];
	dynamic['__imported__'] = (function(){var $pyjs_dbg_17_retry = 0;
try{var $pyjs_dbg_17_res=pyjslib['dict']([]);}catch($pyjs_dbg_17_err){
    if ($pyjs_dbg_17_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line None :\n" + $pyjs_dbg_17_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_17_retry) {
        case 1:
            $pyjs_dbg_17_res=pyjslib['dict']([]);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_17_err;
    }
}return $pyjs_dbg_17_res})();
	dynamic['ajax_import'] = function(url, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var e,name,err,script,$iter4_nextval,req,module,$iter4_idx,$attr28,name_getter,$pyjs_try_err,$iter4_type,$attr27,$iter4_array,$attr29,$attr30,$iter4_iter;
		;
		if (pyjslib['bool'](dynamic['__imported__']['has_key'](url))) {
			module = dynamic['__imported__'].__getitem__(url);
		}
		else {
			req = dynamic['load'](url, null, null, false);
			module = null;
			name_getter = pyjslib['list']([]);
			if (pyjslib['bool']((names === null))) {
				names = pyjslib['list']([]);
			}
			$iter4_iter = names;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				name = $iter4_nextval;
				name_getter['append'](pyjslib['sprintf'](String('$pyjs$moduleObject[\x27%s\x27] = %s\x3B'), pyjslib['tuple']([name, name])));
			}
			script = pyjslib['sprintf'](String('(function ( ) {\x0A$pyjs$moduleObject={}\x3B\x0A%s\x3B\x0A%s\x0Areturn $pyjs$moduleObject\x3B\x0A})()\x3B'), pyjslib['tuple']([((($attr27=req['responseText']) !== null & ($attr28=req).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'responseText'):
						req['responseText']), String('\x0A')['join'](name_getter)]));
			try {
				module = dynamic['eval'](script);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 177};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 180;
					err = $pyjs_try_err;
					e = dynamic['sys']['exc_info']();
					throw (dynamic['AjaxError'](pyjslib['sprintf'](String('Error in %s: %s'), pyjslib['tuple']([url, ((($attr29=e['message']) !== null & ($attr30=e).__is_instance__) && typeof $attr29 == 'function'?
								pyjslib['getattr']($attr30, 'message'):
								e['message'])]))));
				}
			}
			dynamic['__imported__'].__setitem__(url, module);
		}
		dynamic['inject'](module, namespace, names);
		return null;
	};
	dynamic['ajax_import'].__name__ = 'ajax_import';

	dynamic['ajax_import'].__bind_type__ = 0;
	dynamic['ajax_import'].__args__ = [null,null,['url'],['namespace', null],['names', null]];
	dynamic['load_script'] = function(url, onload, async) {
		var e,onload_fn,$add6,$add5;
		$wnd.status = (typeof ($add5=String('Loading '))==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			pyjslib['op_add']($add5,$add6));
		onload_fn = function() {
			var $add8,$add7;
			wnd.status = (typeof ($add7=String('Loaded '))==typeof ($add8=url) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8));
			if (pyjslib['bool'](!pyjslib['bool']((onload === null)))) {
				(function(){var $pyjs_dbg_18_retry = 0;
try{var $pyjs_dbg_18_res=dynamic['eval'](onload);}catch($pyjs_dbg_18_err){
    if ($pyjs_dbg_18_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 202 :\n" + $pyjs_dbg_18_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_18_retry) {
        case 1:
            $pyjs_dbg_18_res=dynamic['eval'](onload);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_18_err;
    }
}return $pyjs_dbg_18_res})();
			}
			return true;
		};
		onload_fn.__name__ = 'onload_fn';

		onload_fn.__bind_type__ = 0;
		onload_fn.__args__ = [null,null];
		e = (function(){var $pyjs_dbg_19_retry = 0;
try{var $pyjs_dbg_19_res=dynamic['DOM']['createElement'](String('script'));}catch($pyjs_dbg_19_err){
    if ($pyjs_dbg_19_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 205 :\n" + $pyjs_dbg_19_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_19_retry) {
        case 1:
            $pyjs_dbg_19_res=dynamic['DOM']['createElement'](String('script'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_19_err;
    }
}return $pyjs_dbg_19_res})();
		e.src = url;
		e.type = String('text/javascript');
		e.language = String('javascript');
		e.defer = async;
		e.onload = onload_fn;
		$doc['getElementsByTagName'](String('head')).__getitem__(0)['appendChild'](e);
		return null;
	};
	dynamic['load_script'].__name__ = 'load_script';

	dynamic['load_script'].__bind_type__ = 0;
	dynamic['load_script'].__args__ = [null,null,['url'],['onload'],['async']];
	dynamic['running_timeout'] = 0;
	dynamic['timeout_idname'] = null;
	dynamic['timeout_url'] = null;
	dynamic['timeout_on_load_fn'] = null;
	dynamic['redo_timeout'] = null;
	dynamic['timeout_id'] = null;
	dynamic['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {

		dynamic['timeout_idname'] = idname;
		dynamic['timeout_url'] = url;
		dynamic['timeout_on_load_fn'] = on_load_fn;
		dynamic['redo_timeout'] = timeout;
		if (pyjslib['bool']((pyjslib['cmp'](dynamic['running_timeout'], 0) == 1))) {
			return null;
		}
		dynamic['timeout_id'] = (function(){var $pyjs_dbg_20_retry = 0;
try{var $pyjs_dbg_20_res=setTimeout(dynamic.do_ajax_dlink_refresh, timeout);}catch($pyjs_dbg_20_err){
    if ($pyjs_dbg_20_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 243 :\n" + $pyjs_dbg_20_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_20_retry) {
        case 1:
            $pyjs_dbg_20_res=setTimeout(dynamic.do_ajax_dlink_refresh, timeout);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_20_err;
    }
}return $pyjs_dbg_20_res})();
		dynamic['running_timeout'] = 1;
		return null;
	};
	dynamic['ajax_dlink_refresh'].__name__ = 'ajax_dlink_refresh';

	dynamic['ajax_dlink_refresh'].__bind_type__ = 0;
	dynamic['ajax_dlink_refresh'].__args__ = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
	dynamic['do_ajax_dlink_refresh'] = function() {

		if ((function(){var $pyjs_dbg_22_retry = 0;
try{var $pyjs_dbg_22_res=pyjslib['bool'](pyjslib['op_eq']((function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=dynamic.ajax_dlink(dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn']);}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 249 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=dynamic.ajax_dlink(dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})(), 0));}catch($pyjs_dbg_22_err){
    if ($pyjs_dbg_22_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 249 :\n" + $pyjs_dbg_22_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_22_retry) {
        case 1:
            $pyjs_dbg_22_res=pyjslib['bool'](pyjslib['op_eq']((function(){var $pyjs_dbg_21_retry = 0;
try{var $pyjs_dbg_21_res=dynamic.ajax_dlink(dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn']);}catch($pyjs_dbg_21_err){
    if ($pyjs_dbg_21_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 249 :\n" + $pyjs_dbg_21_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_21_retry) {
        case 1:
            $pyjs_dbg_21_res=dynamic.ajax_dlink(dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_21_err;
    }
}return $pyjs_dbg_21_res})(), 0));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_22_err;
    }
}return $pyjs_dbg_22_res})()) {
			dynamic['timeout_id'] = null;
			dynamic['running_timeout'] = 0;
			return null;
		}
		dynamic['timeout_id'] = null;
		dynamic['running_timeout'] = 0;
		(function(){var $pyjs_dbg_23_retry = 0;
try{var $pyjs_dbg_23_res=dynamic['ajax_dlink_refresh'](dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn'], dynamic['redo_timeout']);}catch($pyjs_dbg_23_err){
    if ($pyjs_dbg_23_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 255 :\n" + $pyjs_dbg_23_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_23_retry) {
        case 1:
            $pyjs_dbg_23_res=dynamic['ajax_dlink_refresh'](dynamic['timeout_idname'], dynamic['timeout_url'], dynamic['timeout_on_load_fn'], dynamic['redo_timeout']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_23_err;
    }
}return $pyjs_dbg_23_res})();
		return null;
	};
	dynamic['do_ajax_dlink_refresh'].__name__ = 'do_ajax_dlink_refresh';

	dynamic['do_ajax_dlink_refresh'].__bind_type__ = 0;
	dynamic['do_ajax_dlink_refresh'].__args__ = [null,null];
	dynamic['ajax_dlink'] = function(idname, url, on_load_fn) {
		var body,$attr32,$attr31,xhtoj,onreadystatechange;
		body = ((($attr31=$doc['body']) !== null & ($attr32=$doc).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'body'):
					$doc['body']);
		if (pyjslib['bool'](dynamic['timeout_id'])) {
			(function(){var $pyjs_dbg_24_retry = 0;
try{var $pyjs_dbg_24_res=clearTimeout(dynamic['timeout_id']);}catch($pyjs_dbg_24_err){
    if ($pyjs_dbg_24_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 274 :\n" + $pyjs_dbg_24_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_24_retry) {
        case 1:
            $pyjs_dbg_24_res=clearTimeout(dynamic['timeout_id']);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_24_err;
    }
}return $pyjs_dbg_24_res})();
		}
		onreadystatechange = function() {
			var txt,$attr40,jsnode,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38;
			if ((function(){var $pyjs_dbg_25_retry = 0;
try{var $pyjs_dbg_25_res=pyjslib['bool'](pyjslib['op_eq'](((($attr33=dynamic.xhtoj['readyState']) !== null & ($attr34=dynamic.xhtoj).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'readyState'):
						dynamic.xhtoj['readyState']), 4));}catch($pyjs_dbg_25_err){
    if ($pyjs_dbg_25_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 277 :\n" + $pyjs_dbg_25_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_25_retry) {
        case 1:
            $pyjs_dbg_25_res=pyjslib['bool'](pyjslib['op_eq'](((($attr33=dynamic.xhtoj['readyState']) !== null & ($attr34=dynamic.xhtoj).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'readyState'):
						dynamic.xhtoj['readyState']), 4));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_25_err;
    }
}return $pyjs_dbg_25_res})()) {
				jsnode = 0;
				if ((function(){var $pyjs_dbg_26_retry = 0;
try{var $pyjs_dbg_26_res=pyjslib['bool'](pyjslib['op_eq'](((($attr35=dynamic.xhtoj['status']) !== null & ($attr36=dynamic.xhtoj).__is_instance__) && typeof $attr35 == 'function'?
							pyjslib['getattr']($attr36, 'status'):
							dynamic.xhtoj['status']), 200));}catch($pyjs_dbg_26_err){
    if ($pyjs_dbg_26_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 279 :\n" + $pyjs_dbg_26_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_26_retry) {
        case 1:
            $pyjs_dbg_26_res=pyjslib['bool'](pyjslib['op_eq'](((($attr35=dynamic.xhtoj['status']) !== null & ($attr36=dynamic.xhtoj).__is_instance__) && typeof $attr35 == 'function'?
							pyjslib['getattr']($attr36, 'status'):
							dynamic.xhtoj['status']), 200));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_26_err;
    }
}return $pyjs_dbg_26_res})()) {
					txt = ((($attr37=dynamic.xhtoj['responseText']) !== null & ($attr38=dynamic.xhtoj).__is_instance__) && typeof $attr37 == 'function'?
								pyjslib['getattr']($attr38, 'responseText'):
								dynamic.xhtoj['responseText']);
					jsnode = null;
					if ((function(){var $pyjs_dbg_27_retry = 0;
try{var $pyjs_dbg_27_res=pyjslib['bool'](idname);}catch($pyjs_dbg_27_err){
    if ($pyjs_dbg_27_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 284 :\n" + $pyjs_dbg_27_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_27_retry) {
        case 1:
            $pyjs_dbg_27_res=pyjslib['bool'](idname);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_27_err;
    }
}return $pyjs_dbg_27_res})()) {
						jsnode = (function(){var $pyjs_dbg_28_retry = 0;
try{var $pyjs_dbg_28_res=dynamic['DOM']['getElementById'](idname);}catch($pyjs_dbg_28_err){
    if ($pyjs_dbg_28_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 285 :\n" + $pyjs_dbg_28_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_28_retry) {
        case 1:
            $pyjs_dbg_28_res=dynamic['DOM']['getElementById'](idname);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_28_err;
    }
}return $pyjs_dbg_28_res})();
					}
					if ((function(){var $pyjs_dbg_29_retry = 0;
try{var $pyjs_dbg_29_res=pyjslib['bool']((jsnode === null));}catch($pyjs_dbg_29_err){
    if ($pyjs_dbg_29_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 287 :\n" + $pyjs_dbg_29_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_29_retry) {
        case 1:
            $pyjs_dbg_29_res=pyjslib['bool']((jsnode === null));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_29_err;
    }
}return $pyjs_dbg_29_res})()) {
						jsnode = (function(){var $pyjs_dbg_30_retry = 0;
try{var $pyjs_dbg_30_res=dynamic['DOM']['createElement'](String('script'));}catch($pyjs_dbg_30_err){
    if ($pyjs_dbg_30_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 288 :\n" + $pyjs_dbg_30_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_30_retry) {
        case 1:
            $pyjs_dbg_30_res=dynamic['DOM']['createElement'](String('script'));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_30_err;
    }
}return $pyjs_dbg_30_res})();
					}
					(function(){var $pyjs_dbg_31_retry = 0;
try{var $pyjs_dbg_31_res=dynamic['activate_javascript'](txt);}catch($pyjs_dbg_31_err){
    if ($pyjs_dbg_31_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 293 :\n" + $pyjs_dbg_31_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_31_retry) {
        case 1:
            $pyjs_dbg_31_res=dynamic['activate_javascript'](txt);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_31_err;
    }
}return $pyjs_dbg_31_res})();
					if ((function(){var $pyjs_dbg_32_retry = 0;
try{var $pyjs_dbg_32_res=pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)));}catch($pyjs_dbg_32_err){
    if ($pyjs_dbg_32_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 294 :\n" + $pyjs_dbg_32_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_32_retry) {
        case 1:
            $pyjs_dbg_32_res=pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_32_err;
    }
}return $pyjs_dbg_32_res})()) {
						$wnd['alert'](on_load_fn);
						(function(){var $pyjs_dbg_33_retry = 0;
try{var $pyjs_dbg_33_res=dynamic.test_fn();}catch($pyjs_dbg_33_err){
    if ($pyjs_dbg_33_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 297 :\n" + $pyjs_dbg_33_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_33_retry) {
        case 1:
            $pyjs_dbg_33_res=dynamic.test_fn();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_33_err;
    }
}return $pyjs_dbg_33_res})();
					}
					return 1;
				}
				else {
					jsnode = (function(){var $pyjs_dbg_34_retry = 0;
try{var $pyjs_dbg_34_res=dynamic['DOM']['getElementById'](idname);}catch($pyjs_dbg_34_err){
    if ($pyjs_dbg_34_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 301 :\n" + $pyjs_dbg_34_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_34_retry) {
        case 1:
            $pyjs_dbg_34_res=dynamic['DOM']['getElementById'](idname);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_34_err;
    }
}return $pyjs_dbg_34_res})();
					if ((function(){var $pyjs_dbg_35_retry = 0;
try{var $pyjs_dbg_35_res=pyjslib['bool'](!pyjslib['bool']((jsnode === null)));}catch($pyjs_dbg_35_err){
    if ($pyjs_dbg_35_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 303 :\n" + $pyjs_dbg_35_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_35_retry) {
        case 1:
            $pyjs_dbg_35_res=pyjslib['bool'](!pyjslib['bool']((jsnode === null)));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_35_err;
    }
}return $pyjs_dbg_35_res})()) {
						jsnode.innerHTML = ((($attr39=dynamic.xhtoj['status']) !== null & ($attr40=dynamic.xhtoj).__is_instance__) && typeof $attr39 == 'function'?
									pyjslib['getattr']($attr40, 'status'):
									dynamic.xhtoj['status']);
					}
				}
			}
			return null;
		};
		onreadystatechange.__name__ = 'onreadystatechange';

		onreadystatechange.__bind_type__ = 0;
		onreadystatechange.__args__ = [null,null];
		xhtoj = (function(){var $pyjs_dbg_36_retry = 0;
try{var $pyjs_dbg_36_res=dynamic['createHttpRequest']();}catch($pyjs_dbg_36_err){
    if ($pyjs_dbg_36_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 306 :\n" + $pyjs_dbg_36_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_36_retry) {
        case 1:
            $pyjs_dbg_36_res=dynamic['createHttpRequest']();
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_36_err;
    }
}return $pyjs_dbg_36_res})();
		xhtoj.onreadystatechange = onreadystatechange;
		(function(){var $pyjs_dbg_37_retry = 0;
try{var $pyjs_dbg_37_res=xhtoj['open'](String('GET'), url, true);}catch($pyjs_dbg_37_err){
    if ($pyjs_dbg_37_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 308 :\n" + $pyjs_dbg_37_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_37_retry) {
        case 1:
            $pyjs_dbg_37_res=xhtoj['open'](String('GET'), url, true);
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_37_err;
    }
}return $pyjs_dbg_37_res})();
		(function(){var $pyjs_dbg_38_retry = 0;
try{var $pyjs_dbg_38_res=xhtoj['send'](String(''));}catch($pyjs_dbg_38_err){
    if ($pyjs_dbg_38_err.__name__ != 'StopIteration') {
        var save_stack = $pyjs.__last_exception_stack__;
        sys.save_exception_stack();
        var $pyjs_msg = "";

        try {
            $pyjs_msg = "\n" + sys.trackstackstr();
        } catch (s) {};
        $pyjs.__last_exception_stack__ = save_stack;
        if ($pyjs_msg !== $pyjs.debug_msg) {
            pyjslib['debugReport']("Module dynamic at line 309 :\n" + $pyjs_dbg_38_err + $pyjs_msg);
            $pyjs.debug_msg = $pyjs_msg;
            debugger;
        }
    }
    switch ($pyjs_dbg_38_retry) {
        case 1:
            $pyjs_dbg_38_res=xhtoj['send'](String(''));
            break;
        case 2:
            break;
        default:
            throw $pyjs_dbg_38_err;
    }
}return $pyjs_dbg_38_res})();
		return 0;
	};
	dynamic['ajax_dlink'].__name__ = 'ajax_dlink';

	dynamic['ajax_dlink'].__bind_type__ = 0;
	dynamic['ajax_dlink'].__args__ = [null,null,['idname'],['url'],['on_load_fn']];
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
