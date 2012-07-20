/* start module: pyjslib */
var pyjslib;
$pyjs.loaded_modules['pyjslib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjslib'].__was_initialized__) return $pyjs.loaded_modules['pyjslib'];
	pyjslib = $pyjs.loaded_modules["pyjslib"];
	pyjslib.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	var __name__ = pyjslib.__name__ = __mod_name__;
	pyjslib.__track_lines__ = new Array();
	var $add3,$add1,$add2,$add6,$add5,$add4;
	$pyjs.track.module='pyjslib';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=19;
	$pyjs.track.lineno=21;
	;
	pyjslib['platform'] = $pyjs.platform;
	pyjslib['sys'] = null;
	pyjslib['dynamic'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	pyjslib['object'] = (function(){
		var $cls_instance = $pyjs__class_instance('object');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'fb3bba827fbc7c87b91365e41b48aa7f';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array());
	})();
	pyjslib['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a.__number__ << 8) | b.__number__) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a.__v == b.__v;
            case 0x0404:
                return a.__cmp__(b) == 0;
        }
    }
    return false;

	};
	pyjslib['op_is'].__name__ = 'op_is';

	pyjslib['op_is'].__bind_type__ = 0;
	pyjslib['op_is'].__args__ = [null,null,['a'],['b']];
	pyjslib['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    switch ((a.__number__ << 8) | b.__number__) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b.__v;
        case 0x0201:
            return a.__v == b;
        case 0x0202:
            return a.__v == b.__v;
        case 0x0104:
        case 0x0204:
            a = new pyjslib['long'](a.valueOf());
        case 0x0404:
            return a.__cmp__(b) == 0;
        case 0x0402:
            return a.__cmp__(new pyjslib['long'](b.valueOf())) == 0;
    }
    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        if (typeof b.__cmp__ != 'function') {
            return false;
        }
        if (a.__cmp__ === b.__cmp__) {
            return a.__cmp__(b) == 0;
        }
        if (pyjslib['_isinstance'](a, b)) {
            return a.__cmp__(b) == 0;
        }
        return false;
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        // typeof b.__cmp__ != 'function'
        // a.__cmp__ !== b.__cmp__
        if (pyjslib['_isinstance'](a, b)) {
            return b.__cmp__(a) == 0;
        }
        return false;
    }
    return a == b;
    
	};
	pyjslib['op_eq'].__name__ = 'op_eq';

	pyjslib['op_eq'].__bind_type__ = 0;
	pyjslib['op_eq'].__args__ = [null,null,['a'],['b']];
	pyjslib['op_uadd'] = function(v) {


    switch (v.__number__) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v !== null) {
        if (typeof v['__pos__'] == 'function') return v.__pos__();
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('bad operand type for unary +: \x27%r\x27'), v)));
		return null;
	};
	pyjslib['op_uadd'].__name__ = 'op_uadd';

	pyjslib['op_uadd'].__bind_type__ = 0;
	pyjslib['op_uadd'].__args__ = [null,null,['v']];
	pyjslib['op_usub'] = function(v) {


    switch (v.__number__) {
        case 0x01:
            return -v;
        case 0x02:
            return new pyjslib['int'](-v);
    }
    if (v !== null) {
        if (typeof v['__neg__'] == 'function') return v.__neg__();
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('bad operand type for unary -: \x27%r\x27'), v)));
		return null;
	};
	pyjslib['op_usub'].__name__ = 'op_usub';

	pyjslib['op_usub'].__bind_type__ = 0;
	pyjslib['op_usub'].__args__ = [null,null,['v']];
	pyjslib['op_add'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x + y;
            case 0x0102:
                return x + y.__v;
            case 0x0201:
                return x.__v + y;
            case 0x0202:
                return new pyjslib['int'](x.__v + y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__add(y);
            case 0x0402:
                return x.__add(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__add(y);
        }
        if (!x.__number__) {
            if (typeof x == 'string' && typeof y == 'string') return x + y;
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y.__add__(x);
            if (typeof x['__add__'] == 'function') return x.__add__(y);
        }
        if (!y.__number__ && typeof y['__radd__'] == 'function') return y.__radd__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for +: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_add'].__name__ = 'op_add';

	pyjslib['op_add'].__bind_type__ = 0;
	pyjslib['op_add'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_sub'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x - y;
            case 0x0102:
                return x - y.__v;
            case 0x0201:
                return x.__v - y;
            case 0x0202:
                return new pyjslib['int'](x.__v - y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__sub(y);
            case 0x0402:
                return x.__sub(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__sub(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y.__sub__(x);
            if (typeof x['__sub__'] == 'function') return x.__sub__(y);
        }
        if (!y.__number__ && typeof y['__rsub__'] == 'function') return y.__rsub__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for -: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_sub'].__name__ = 'op_sub';

	pyjslib['op_sub'].__bind_type__ = 0;
	pyjslib['op_sub'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y);
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y.__v);
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.floor(x.__v / y);
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
                return new pyjslib['int'](Math.floor(x.__v / y.__v));
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__floordiv(y);
            case 0x0402:
                return x.__floordiv(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__floordiv(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y.__floordiv__(x);
            if (typeof x['__floordiv__'] == 'function') return x.__floordiv__(y);
        }
        if (!y.__number__ && typeof y['__rfloordiv__'] == 'function') return y.__rfloordiv__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for //: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_floordiv'].__name__ = 'op_floordiv';

	pyjslib['op_floordiv'].__bind_type__ = 0;
	pyjslib['op_floordiv'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return new pyjslib['int'](x.__v / y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__div(y);
            case 0x0402:
                return x.__div(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__div(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y.__div__(x);
            if (typeof x['__div__'] == 'function') return x.__div__(y);
        }
        if (!y.__number__ && typeof y['__rdiv__'] == 'function') return y.__rdiv__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_div'].__name__ = 'op_div';

	pyjslib['op_div'].__bind_type__ = 0;
	pyjslib['op_div'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y.__v;
            case 0x0201:
                return x.__v * y;
            case 0x0202:
                return new pyjslib['int'](x.__v * y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__mul(y);
            case 0x0402:
                return x.__mul(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__mul(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y.__mul__(x);
            if (typeof x['__mul__'] == 'function') return x.__mul__(y);
        }
        if (!y.__number__ && typeof y['__rmul__'] == 'function') return y.__rmul__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for *: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_mul'].__name__ = 'op_mul';

	pyjslib['op_mul'].__bind_type__ = 0;
	pyjslib['op_mul'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x % y;
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x % y.__v;
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x.__v % y;
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
                return new pyjslib['int'](x.__v % y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__mod(y);
            case 0x0402:
                return x.__mod(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__mod(y);
        }
        if (typeof x == 'string') {
            return pyjslib.sprintf(x, y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y.__mod__(x);
            if (typeof x['__mod__'] == 'function') return x.__mod__(y);
        }
        if (!y.__number__ && typeof y['__rmod__'] == 'function') return y.__rmod__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_mod'].__name__ = 'op_mod';

	pyjslib['op_mod'].__bind_type__ = 0;
	pyjslib['op_mod'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.pow(x, y);
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.pow(x,y.__v);
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.pow(x.__v,y);
            case 0x0202:
                return x.__pow__(y);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__pow(y);
            case 0x0402:
                return x.__pow(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__pow(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y.__pow__(x);
            if (typeof x['__pow__'] == 'function') return x.__pow__(y);
        }
        if (!y.__number__ && typeof y['__rpow__'] == 'function') return y.__rpow__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_pow'].__name__ = 'op_pow';

	pyjslib['op_pow'].__bind_type__ = 0;
	pyjslib['op_pow'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v.__invert__();
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('bad operand type for unary -: \x27%r\x27'), v)));
		return null;
	};
	pyjslib['op_invert'].__name__ = 'op_invert';

	pyjslib['op_invert'].__bind_type__ = 0;
	pyjslib['op_invert'].__args__ = [null,null,['v']];
	pyjslib['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__lshift__(y);
            case 0x0204:
                return y.__rlshift__(x);
            case 0x0402:
                return x.__lshift(y.__v);
            case 0x0404:
                return x.__lshift(y.valueOf());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x.__lshift__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y.__rlshift__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x3C\x3C: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_bitshiftleft'].__name__ = 'op_bitshiftleft';

	pyjslib['op_bitshiftleft'].__bind_type__ = 0;
	pyjslib['op_bitshiftleft'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__rshift__(y);
            case 0x0204:
                return y.__rrshift__(x);
            case 0x0402:
                return x.__rshift(y.__v);
            case 0x0404:
                return x.__rshift(y.valueOf());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x.__rshift__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y.__rrshift__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x3E\x3E: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_bitshiftright'].__name__ = 'op_bitshiftright';

	pyjslib['op_bitshiftright'].__bind_type__ = 0;
	pyjslib['op_bitshiftright'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__and__(y);
            case 0x0204:
                return y.__and(new pyjslib['long'](x));
            case 0x0402:
                return x.__and(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__and(y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x.__and__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y.__rand__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_bitand2'].__name__ = 'op_bitand2';

	pyjslib['op_bitand2'].__bind_type__ = 0;
	pyjslib['op_bitand2'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res.__and__(args[i]);
                if (res === pyjslib['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i].__rand__(r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i].__rand__(res);
            } else {
                res = null;
                break;
            }
            if (res === pyjslib['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw (pyjslib['TypeError']((typeof ($add1=String('unsupported operand type(s) for \x26: '))==typeof ($add2=String(', ')['join'](function(){
var $listcomp1 = pyjslib['list']();
	$iter1_iter = pyjslib['list'](pyjslib.args);
	if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
		$iter1_type = 0;
	} else {
		$iter1_iter = $iter1_iter.__iter__();
		$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter1_idx = 0;
	while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
		a = $iter1_nextval;
		$listcomp1['append'](pyjslib['repr'](a));
	}
return $listcomp1;}())) && (typeof $add1=='number'||typeof $add1=='string')?
		$add1+$add2:
		pyjslib['op_add']($add1,$add2))));

};

	pyjslib['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__xor__(y);
            case 0x0204:
                return y.__xor(new pyjslib['long'](x));
            case 0x0402:
                return x.__xor(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__xor(y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x.__xor__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y.__rxor__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_bitxor2'].__name__ = 'op_bitxor2';

	pyjslib['op_bitxor2'].__bind_type__ = 0;
	pyjslib['op_bitxor2'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res.__xor__(args[i]);
                if (res === pyjslib['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i].__rxor__(r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i].__rxor__(res);
            } else {
                res = null;
                break;
            }
            if (res === pyjslib['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw (pyjslib['TypeError']((typeof ($add3=String('unsupported operand type(s) for ^: '))==typeof ($add4=String(', ')['join'](function(){
var $listcomp2 = pyjslib['list']();
	$iter2_iter = pyjslib.args;
	if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
		$iter2_type = 0;
	} else {
		$iter2_iter = $iter2_iter.__iter__();
		$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter2_idx = 0;
	while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
		a = $iter2_nextval;
		$listcomp2['append'](pyjslib['repr'](a));
	}
return $listcomp2;}())) && (typeof $add3=='number'||typeof $add3=='string')?
		$add3+$add4:
		pyjslib['op_add']($add3,$add4))));

};

	pyjslib['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__or__(y);
            case 0x0204:
                return y.__or(new pyjslib['long'](x));
            case 0x0402:
                return x.__or(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__or(y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x.__or__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') return y.__ror__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['op_bitor2'].__name__ = 'op_bitor2';

	pyjslib['op_bitor2'].__bind_type__ = 0;
	pyjslib['op_bitor2'].__args__ = [null,null,['x'],['y']];
	pyjslib['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res.__or__(args[i]);
                if (res === pyjslib['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i].__ror__(r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i].__ror__(res);
            } else {
                res = null;
                break;
            }
            if (res === pyjslib['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw (pyjslib['TypeError']((typeof ($add5=String('unsupported operand type(s) for |: '))==typeof ($add6=String(', ')['join'](function(){
var $listcomp3 = pyjslib['list']();
	$iter3_iter = pyjslib.args;
	if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
		$iter3_type = 0;
	} else {
		$iter3_iter = $iter3_iter.__iter__();
		$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter3_idx = 0;
	while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
		a = $iter3_nextval;
		$listcomp3['append'](pyjslib['repr'](a));
	}
return $listcomp3;}())) && (typeof $add5=='number'||typeof $add5=='string')?
		$add5+$add6:
		pyjslib['op_add']($add5,$add6))));

};

	pyjslib['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[4][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[5][1];
		var $and8,$and5,$and9,parentName,module,$attr20,$attr21,$attr14,$attr23,$attr24,is_module_object,$attr18,in_context,$and11,$attr16,$attr11,$and6,$attr7,$attr22,objName,$sub2,$sub1,$and2,$attr9,$attr8,$and3,contextTopName,$attr1,$and1,$attr3,$attr2,$attr5,$attr4,inContextTopName,$attr6,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr17,$and7,$add18,$attr10,$attr13,$attr12,importName,$add14,$and12,path_parts,topName,$and10,$and4,depth,inContextImportName,inContextParentName,$add7,$add8,$add9,$attr19,save_track_module;
		save_track_module = $pyjs.track.module;
		sys = $pyjs.loaded_modules['sys'];
		if (pyjslib['bool'](sys.__was_initialized__ != true)) {
			module = $pyjs.loaded_modules[path];
			module();
$pyjs.track.module = save_track_module;
			if (pyjslib['bool'](pyjslib['op_eq'](path, String('sys')))) {
				module.modules = pyjslib['dict'](pyjslib['dict']([[String('pyjslib'), pyjslib.pyjslib], [String('sys'), module]]));
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split'](String('.'));
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts.length-1];
		parentName = path_parts['slice'](0, (typeof ($sub1=path_parts['length'])==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			pyjslib['op_sub']($sub1,$sub2)))['join'](String('.'));
		if (pyjslib['bool']((context === null))) {
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = (typeof ($add9=(typeof ($add7=context)==typeof ($add8=String('.')) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8)))==typeof ($add10=importName) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10));
			if (pyjslib['bool'](!pyjslib['bool'](parentName))) {
				inContextParentName = context;
			}
			else {
				inContextParentName = (typeof ($add13=(typeof ($add11=context)==typeof ($add12=String('.')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12)))==typeof ($add14=parentName) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					pyjslib['op_add']($add13,$add14));
			}
			inContextTopName = (typeof ($add17=(typeof ($add15=context)==typeof ($add16=String('.')) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16)))==typeof ($add18=topName) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				pyjslib['op_add']($add17,$add18));
			contextTopName = context.__split('.')[0];
			if (pyjslib['bool']((pyjslib['bool']($and1=(pyjslib['cmp'](depth, 1) == 1))?sys['modules']['has_key'](inContextParentName):$and1))) {
				module = sys['modules'].__getitem__(inContextParentName);
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			else if (pyjslib['bool'](sys['modules']['has_key'](inContextImportName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			else if (pyjslib['bool']((pyjslib['bool']($and3=(pyjslib['cmp'](depth, 1) == 1))?typeof (module = $pyjs.loaded_modules[inContextParentName]) != 'undefined':$and3))) {
				sys['modules'].__setitem__(inContextParentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			if (pyjslib['bool'](sys['modules']['has_key'](inContextImportName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			if (pyjslib['bool'](typeof (module = $pyjs.loaded_modules[inContextImportName]) != 'undefined')) {
				sys['modules'].__setitem__(inContextImportName, module);
module.__was_initialized__ = false;
				module(module_name);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return module;
			}
			if (pyjslib['bool'](!pyjslib['bool'](sys['modules']['has_key'](inContextTopName)))) {
				if (pyjslib['bool'](typeof (module = $pyjs.loaded_modules[inContextTopName]) != 'function')) {
					in_context = false;
					if (pyjslib['bool']($pyjs.options.dynamic_loading)) {
						module = pyjslib.__dynamic_load__(inContextTopName);
						if (pyjslib['bool'](typeof module == 'function')) {
							in_context = true;
							if (pyjslib['bool'](pyjslib['op_eq'](depth, 1))) {
								module(module_name);
$pyjs.track.module = save_track_module;
								return module;
							}
							else {
								module(null);
								if (pyjslib['bool']((pyjslib['bool']($and5=pyjslib['op_eq'](depth, 2))?typeof module[objName] != 'undefined':$and5))) {
									if (pyjslib['bool'](get_base)) {
										return $pyjs.loaded_modules[inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if (pyjslib['bool'](in_context)) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if (pyjslib['bool'](!pyjslib['bool'](in_context))) {
			if (pyjslib['bool']((pyjslib['bool']($and7=parentName)?sys['modules']['has_key'](parentName):$and7))) {
				module = sys['modules'].__getitem__(parentName);
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			else if (pyjslib['bool'](sys['modules']['has_key'](importName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			else if (pyjslib['bool']((pyjslib['bool']($and9=parentName)?typeof (module = $pyjs.loaded_modules[parentName]) != 'undefined':$and9))) {
				sys['modules'].__setitem__(parentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			if (pyjslib['bool'](sys['modules']['has_key'](importName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			if (pyjslib['bool'](typeof (module = $pyjs.loaded_modules[importName]) != 'undefined')) {
				sys['modules'].__setitem__(importName, module);
				if (pyjslib['bool']((pyjslib['bool']($and11=!pyjslib['op_eq'](importName, String('pyjslib')))?!pyjslib['op_eq'](importName, String('sys')):$and11))) {
module.__was_initialized__ = false;
				}
				module(module_name);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		if (pyjslib['bool']($pyjs.options.dynamic_loading)) {
			module = pyjslib.__dynamic_load__(importName);
			if (pyjslib['bool'](typeof module == 'function')) {
				module(module_name);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		throw (pyjslib['ImportError'](pyjslib['sprintf'](String('No module named %s, %s in context %s'), pyjslib['tuple']([importName, path, context]))));
		return null;
	};
	pyjslib['___import___'].__name__ = '___import___';

	pyjslib['___import___'].__bind_type__ = 0;
	pyjslib['___import___'].__args__ = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	pyjslib['__dynamic_load__'] = function(importName) {
		var $add28,$add30,$or1,err,$or3,$or2,$add21,$add20,$add23,$add22,$add25,$add24,module,$add26,$add29,$pyjs_try_err,$add27,$add19;
		;
		module = $pyjs.loaded_modules[importName];
		if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['sys'] === null))?$or1:(pyjslib['bool']($or2=(pyjslib['dynamic'] === null))?$or2:pyjslib['__nondynamic_modules__']['has_key'](importName))))) {
			return module;
		}
		if (pyjslib['bool'](typeof module == 'undefined')) {
			try {
				pyjslib['dynamic']['ajax_import']((typeof ($add25=(typeof ($add23=(typeof ($add21=(typeof ($add19=String('lib/'))==typeof ($add20=importName) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20)))==typeof ($add22=String('.__')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					pyjslib['op_add']($add21,$add22)))==typeof ($add24=pyjslib['platform']) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24)))==typeof ($add26=String('__.js')) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 758};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 762;
					err = $pyjs_try_err;
				}
			}
		}
		if (pyjslib['bool'](typeof module == 'undefined')) {
			try {
				pyjslib['dynamic']['ajax_import']((typeof ($add29=(typeof ($add27=String('lib/'))==typeof ($add28=importName) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					pyjslib['op_add']($add27,$add28)))==typeof ($add30=String('.js')) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					pyjslib['op_add']($add29,$add30)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 764};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 768;
					err = $pyjs_try_err;
				}
			}
			if (pyjslib['bool'](typeof module == 'undefined')) {
				pyjslib['__nondynamic_modules__'].__setitem__(importName, 1.0);
			}
		}
		return module;
	};
	pyjslib['__dynamic_load__'].__name__ = '__dynamic_load__';

	pyjslib['__dynamic_load__'].__bind_type__ = 0;
	pyjslib['__dynamic_load__'].__args__ = [null,null,['importName']];
	pyjslib['BaseException'] = (function(){
		var $cls_instance = $pyjs__class_instance('BaseException');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '25eff91d0ecc1f4c89e9886c03895e7b';
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			self.args = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31,$attr30,$attr25,$attr26,$attr27,$attr28,$attr29;
			if (pyjslib['bool']((pyjslib['len'](self['args']) === 0))) {
				return String('');
			}
			else if (pyjslib['bool']((pyjslib['len'](self['args']) === 1))) {
				return pyjslib['str'](self['args'].__getitem__(0));
			}
			return pyjslib['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add31,$attr33,$attr37,$attr36,$attr35,$attr34,$attr38;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}
			return (typeof ($add31=self['__name__'])==typeof ($add32=pyjslib['repr'](self['args'])) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				pyjslib['op_add']($add31,$add32));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjslib['Exception'] = (function(){
		var $cls_instance = $pyjs__class_instance('Exception');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c998b5e09d5d15515f68940f748474be';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['BaseException']));
	})();
	pyjslib['StandardError'] = (function(){
		var $cls_instance = $pyjs__class_instance('StandardError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '55c21e5f50c788ac196de3b795c5057d';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	pyjslib['AssertionError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AssertionError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'a898020fcd9e6a6c640abb9deeb209f8';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	pyjslib['GeneratorExit'] = (function(){
		var $cls_instance = $pyjs__class_instance('GeneratorExit');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '08a625a6fd6398a42bfa8d2fc7e8698f';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	pyjslib['TypeError'] = (function(){
		var $cls_instance = $pyjs__class_instance('TypeError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '7d36d0d91199394efffdbf809e306929';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['AttributeError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AttributeError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'd88cb9749c1f293b9c93bcb05b7ada21';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['NameError'] = (function(){
		var $cls_instance = $pyjs__class_instance('NameError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '5a760878d0f53553eac5cf16cb6ec80a';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['ValueError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ValueError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '09ad8ce541d506ce4608501422468667';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['ImportError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ImportError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'fbb6d11cc68deed63322391d40d67789';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['LookupError'] = (function(){
		var $cls_instance = $pyjs__class_instance('LookupError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '7481fb74645ee4b96997b514f0c77b71';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['RuntimeError'] = (function(){
		var $cls_instance = $pyjs__class_instance('RuntimeError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'f846b9d6403ba791fd325b48204a3109';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['ArithmeticError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ArithmeticError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'dd1af7c651254064b2bb8a4129bdb245';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['StandardError']));
	})();
	pyjslib['KeyError'] = (function(){
		var $cls_instance = $pyjs__class_instance('KeyError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '673b8c90f7c38a0fe8a30953778d4de8';
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr46,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$attr39;
			if (pyjslib['bool']((pyjslib['len'](self['args']) === 0))) {
				return String('');
			}
			else if (pyjslib['bool']((pyjslib['len'](self['args']) === 1))) {
				return pyjslib['repr'](self['args'].__getitem__(0));
			}
			return pyjslib['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['LookupError']));
	})();
	pyjslib['IndexError'] = (function(){
		var $cls_instance = $pyjs__class_instance('IndexError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'd442f92d44ea81994e785c12aba38fe2';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['LookupError']));
	})();
	pyjslib['NotImplementedError'] = (function(){
		var $cls_instance = $pyjs__class_instance('NotImplementedError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '7675ac512acc9a3e09f933cca03c869d';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['RuntimeError']));
	})();
	pyjslib['ZeroDivisionError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ZeroDivisionError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '09bdaefa51cf6b4c03f44b4c48b2064e';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['ArithmeticError']));
	})();
	pyjslib['OverflowError'] = (function(){
		var $cls_instance = $pyjs__class_instance('OverflowError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '660cec25db21c96a45e1645d6f550ead';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['ArithmeticError']));
	})();
	pyjslib['UndefinedValueError'] = (function(){
		var $cls_instance = $pyjs__class_instance('UndefinedValueError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e3da43f0ed88819371f718caf3d95d8f';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['ValueError']));
	})();
	pyjslib['init'] = function() {


pyjslib._errorMapping = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err.message;
        } catch ( e) {
        }
        return pyjslib.AttributeError(message);
    }
    return err;
};


pyjslib.TryElse = function () { };
pyjslib.TryElse.prototype = new Error();
pyjslib.TryElse.__name__ = 'TryElse';


pyjslib.StopIteration = function () { };
pyjslib.StopIteration.prototype = new Error();
pyjslib.StopIteration.__name__ = 'StopIteration';


String.prototype.rfind = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this.substring(start).lastIndexOf(sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this.lastIndexOf(sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.find = function(sub, start, end) {
    var pos=this.indexOf(sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.join = function(data) {
    var text="";

    if (data.constructor === Array) {
        return data.join(this);
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            return data.__array.join(this);
        }
        var iter=data.__iter__();
        if (typeof iter.__array == 'object') {
            return iter.__array.join(this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter.$genfunc == 'function') {
            while (typeof (item=iter.next(true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter.next();
                }
            }
            catch (e) {
                if (e.__name__ != 'StopIteration') throw e;
            }
        }
        return data.join(this);
    }

    return text;
};

String.prototype.isdigit = function() {
    return (this.match(/^\d+$/g) !== null);
};

String.prototype.isalpha = function() {
    return (this.match(/^[a-zA-Z]+$/g) !== null);
};

String.prototype.isupper = function() {
    return (this.match(/^[A-Z]+$/g) !== null);
};

String.prototype.__replace=String.prototype.replace;

String.prototype.$$replace = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this.__replace(old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this.length) {
        if (do_max && !count--) break;

        pos=this.indexOf(old, start);
        if (pos<0) break;

        new_str+=this.substring(start, pos) + replace;
        start=pos+old.length;
    }
    if (start<this.length) new_str+=this.substring(start);

    return new_str;
};

String.prototype.__contains__ = function(s){
    return this.indexOf(s)>=0;
};

String.prototype.__split = String.prototype.split;

String.prototype.$$split = function(sep, maxsplit) {
    var items=pyjslib.list();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (start<subject.length) {
        if (do_max && !maxsplit--) break;

        pos=subject.indexOf(sep, start);
        if (pos<0) break;

        items.__array.push(subject.substring(start, pos));
        start=pos+sep.length;
    }
    if (start<=subject.length) items.__array.push(subject.substring(start));

    return items;
};

if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw pyjslib.StopIteration;
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw pyjslib.StopIteration;
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String.prototype.strip = function(chars) {
    return this.lstrip(chars).rstrip(chars);
};

String.prototype.lstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/^\s+/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("^[" + chars + "]+"), "");
};

String.prototype.rstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/\s+$/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("[" + chars + "]+$"), "");
};

String.prototype.startswith = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < prefix.length) return false;
    if (this.substr(start, prefix.length) == prefix) return true;
    return false;
};

String.prototype.endswith = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < suffix.length) return false;
    if (this.substr(end - suffix.length, suffix.length) == suffix) return true;
    return false;
};

String.prototype.ljust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw pyjslib.TypeError("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw pyjslib.TypeError("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return this + new Array(width+1 - this.length).join(fillchar);
};

String.prototype.rjust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw pyjslib.TypeError("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw pyjslib.TypeError("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return new Array(width + 1 - this.length).join(fillchar) + this;
};

String.prototype.center = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw pyjslib.TypeError("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw pyjslib.TypeError("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    padlen = width - this.length;
    right = Math.ceil(padlen / 2);
    left = padlen - right;
    return new Array(left+1).join(fillchar) + this + new Array(right+1).join(fillchar);
};

String.prototype.__getslice__ = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this.length + lower;
    }
    if (upper === null) {
        upper=this.length;
    } else if (upper < 0) {
       upper = this.length + upper;
    }
    return this.substring(lower, upper);
};

String.prototype.__getitem__ = function(idx) {
    if (idx < 0) idx += this.length;
    if (idx < 0 || idx > this.length) {
        throw pyjslib.IndexError("string index out of range");
    }
    return this.charAt(idx);
};

String.prototype.__setitem__ = function(idx, val) {
    throw pyjslib.TypeError("'str' object does not support item assignment");
};

String.prototype.upper = String.prototype.toUpperCase;
String.prototype.lower = String.prototype.toLowerCase;

String.prototype.zfill = function(width) {
    return this.rjust(width, '0');
};

String.prototype.__add__ = function(y) {
    if (typeof y != "string") {
        throw pyjslib.TypeError("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String.prototype.__mul__ = function(y) {
    switch (y.__number__) {
        case 0x02:
        case 0x04:
            y = y.valueOf();
            break;
        case 0x01:
            if (Math.floor(y) == y) break;
        default:
            throw pyjslib.TypeError("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String.prototype.__rmul__ = String.prototype.__mul__;
String.prototype.__number__ = null;
String.prototype.__name__ = 'str';
String.prototype.__class__ = String.prototype;
String.prototype.__is_instance__ = null;
String.prototype.__str__ = function () {
    if (typeof this == 'string') return this.toString();
    return "<type 'str'>";
};
String.prototype.__repr__ = function () {
    if (typeof this == 'string') return "'" + this.toString() + "'";
    return "<type 'str'>";
};



Boolean.prototype.__number__ = 0x01;
Boolean.prototype.__name__ = 'bool';
Boolean.prototype.__class__ = Boolean.prototype;
Boolean.prototype.__is_instance__ = null;
Boolean.prototype.__str__= function () {
    if (typeof this == 'string') {
     	if (this === true) return "True";
    	return "False";
    }
    return "<type 'bool'>";
};
Boolean.prototype.__repr__ = Boolean.prototype.__str__;
Boolean.prototype.__and__ = function (y) {
    return this & y.valueOf();
}
Boolean.prototype.__or__ = function (y) {
    return this | y.valueOf();
}
Boolean.prototype.__xor__ = function (y) {
    return this ^ y.valueOf();
}



if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp.prototype.Exec = RegExp.prototype.exec;


pyjslib.abs = Math.abs;

	};
	pyjslib['init'].__name__ = 'init';

	pyjslib['init'].__bind_type__ = 0;
	pyjslib['init'].__args__ = [null,null];
	pyjslib['Class'] = (function(){
		var $cls_instance = $pyjs__class_instance('Class');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'd3d751387f9facc69971e8fcf3b5550e';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str___', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr47,$attr48;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjslib['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];

		throw (pyjslib['NotImplementedError'](String('open is not implemented in browsers')));
		return null;
	};
	pyjslib['open'].__name__ = 'open';

	pyjslib['open'].__bind_type__ = 0;
	pyjslib['open'].__args__ = [null,null,['fname'],['mode', String('r')]];
	pyjslib['cmp'] = function(a, b) {


    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a.__number__ << 8)|b.__number__) {
        case 0x0202:
            a = a.__v;
            b = b.__v;
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b.__cmp__ == 'function') {
                return -b.__cmp__(a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a.__cmp__ == 'function') {
                return a.__cmp__(b);
            }
            return 1;
        case 0x0102:
            return -b.__cmp__(new pyjslib['int'](a));
        case 0x0104:
            return -b.__cmp__(new pyjslib['long'](a));
        case 0x0201:
            return a.__cmp__(new pyjslib['int'](b));
        case 0x0401:
            return a.__cmp__(new pyjslib['long'](b));
        case 0x0204:
            return -b.__cmp__(new pyjslib['long'](a));
        case 0x0402:
            return a.__cmp__(new pyjslib['long'](b));
        case 0x0404:
            return a.__cmp__(b);
    }

    if (typeof a.__class__ == typeof b.__class__ && typeof a.__class__ == 'function') {
        if (a.__class__.__name__ < b.__class__.__name__) {
            return -1;
        }
        if (a.__class__.__name__ > b.__class__.__name__) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        return a.__cmp__(b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        return -b.__cmp__(a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
    
	};
	pyjslib['cmp'].__name__ = 'cmp';

	pyjslib['cmp'].__bind_type__ = 0;
	pyjslib['cmp'].__args__ = [null,null,['a'],['b']];
	pyjslib['__cmp'] = pyjslib['cmp'];
	pyjslib['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v.__nonzero__ == 'function'){
            return v.__nonzero__();
        } else if (typeof v.__len__ == 'function'){
            return v.__len__() > 0;
        }
    }
    return true;
    
	};
	pyjslib['bool'].__name__ = 'bool';

	pyjslib['bool'].__bind_type__ = 0;
	pyjslib['bool'].__args__ = [null,null,['v']];
	pyjslib['float'] = (function(){
		var $cls_instance = $pyjs__class_instance('float');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '5ec6a99338a49ad428da9c8a99683233';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method($cls_instance, '__new__', function(self, args) {


        var v = Number(args[0]);
        if (isNaN(v)) {
            throw pyjslib.ValueError("invalid literal for float(): " + args[0]);
        }
        return v;

		}
	, 0, [null,null,['self'],['args']]);
		$cls_definition['__new__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();

Number.prototype.__number__ = 0x01;
Number.prototype.__name__ = 'float';
Number.prototype.__init__ = function (value, radix) {
    return null;
};

Number.prototype.__str__ = function () {
    if (typeof this == 'number') return this.toString();
    return "<type 'float'>";
};

Number.prototype.__repr__ = function () {
    if (typeof this == 'number') return this.toString();
    return "<type 'float'>";
};

Number.prototype.__nonzero__ = function () {
    return this != 0;
};

Number.prototype.__cmp__ = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number.prototype.__hash__ = function () {
    return this;
};

Number.prototype.__oct__ = function () {
    return '0'+this.toString(8);
};

Number.prototype.__hex__ = function () {
    return '0x'+this.toString(16);
};

Number.prototype.__pos__ = function () {
    return this;
};

Number.prototype.__neg__ = function () {
    return -this;
};

Number.prototype.__abs__ = function () {
    if (this >= 0) return this;
    return -this;
};

Number.prototype.__add__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return this + y;
};

Number.prototype.__radd__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return y + this;
};

Number.prototype.__sub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return this - y;
};

Number.prototype.__rsub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return y - this;
};

Number.prototype.__floordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
    return Math.floor(this / y);
};

Number.prototype.__rfloordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (this == 0) throw pyjslib['ZeroDivisionError']('float divmod');
    return Math.floor(y / this);
};

Number.prototype.__div__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (y == 0) throw pyjslib['ZeroDivisionError']('float division');
    return this / y;
};

Number.prototype.__rdiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (this == 0) throw pyjslib['ZeroDivisionError']('float division');
    return y / this;
};

Number.prototype.__mul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return this * y;
};

Number.prototype.__rmul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return y * this;
};

Number.prototype.__mod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (y == 0) throw pyjslib['ZeroDivisionError']('float modulo');
    return this % y;
};

Number.prototype.__rmod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (this == 0) throw pyjslib['ZeroDivisionError']('float modulo');
    return y % this;
};

Number.prototype.__pow__ = function (y, z) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math.pow(this, y);
    }
    if (!z.__number__ || isNaN(z = z.valueOf())) return pyjslib['NotImplemented'];
    return Math.pow(this, y) % z;
};


	pyjslib['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments.callee.__args__[3][1];


    var v;
    if (value.__number__) {
        if (radix !== null) {
            throw pyjslib.TypeError("int() can't convert non-string with explicit base");
        }
        v = value.valueOf();
        if (v > 0) {
            v = Math.floor(v);
        } else {
            v = Math.ceil(v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        switch (value[value.length-1]) {
            case 'l':
            case 'L':
                v = value.slice(0, value.length-2);
                break;
            default:
                v = value;
        }
        v = parseInt(v, radix);
    } else {
        throw pyjslib.TypeError("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw pyjslib.ValueError("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	pyjslib['float_int'].__name__ = 'float_int';

	pyjslib['float_int'].__bind_type__ = 0;
	pyjslib['float_int'].__args__ = [null,null,['value'],['radix', null]];

(function(){
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw pyjslib.TypeError("int() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value.valueOf();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x02) return new $int(value, radix);
        if (value.__number__) {
            if (radix !== null) throw pyjslib.TypeError("int() can't convert non-string with explicit base");
            v = value.valueOf();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            v = parseInt(value, radix);
        } else {
            throw pyjslib.TypeError("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw pyjslib.ValueError("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this.__v = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int.__init__ = function () {};
    $int.__number__ = 0x02;
    $int.__v = 0;
    $int.__name__ = 'int';
    $int.prototype = $int;
    $int.__class__ = $int;

    $int.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $int.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $int.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $int.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $int.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this.__v.toString() : this.__v.toString(radix);
    };

    $int.valueOf = function () {
        return this.__v.valueOf();
    };

    $int.__str__ = function () {
        if (typeof this == 'object' && this.__number__ == 0x02) return this.__v.toString();
        return "<type 'int'>";
    };

    $int.__repr__ = function () {
        if (typeof this == 'object' && this.__number__ == 0x02) return this.__v.toString();
        return "<type 'int'>";
    };

    $int.__nonzero__ = function () {
        return this.__v != 0;
    };

    $int.__cmp__ = function (y) {
        return this.__v < y? -1 : (this.__v == y ? 0 : 1);
    };

    $int.__hash__ = function () {
        return this.__v;
    };

    $int.__invert__ = function () {
        return new $int(~this.__v);
    };

    $int.__lshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y < 32) {
            var v = this.__v << y;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new pyjslib['long'](this.__v).__lshift__(y);
    };

    $int.__rlshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v < 32) {
            var v = y << this.__v;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new pyjslib['long'](y).__lshift__(this.__v);
    };

    $int.__rshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v >> y);
    };

    $int.__rrshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y >> this.__v);
    };

    $int.__and__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v & y);
    };

    $int.__rand__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y & this.__v);
    };

    $int.__xor__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v ^ y);
    };

    $int.__rxor__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y ^ this.__v);
    };

    $int.__or__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v | y);
    };

    $int.__ror__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y | this.__v);
    };

    $int.__oct__ = function () {
        return '0x'+this.__v.toString(8);
    };

    $int.__hex__ = function () {
        return '0x'+this.__v.toString(16);
    };

    $int.__pos__ = function () {
        return this;
    };

    $int.__neg__ = function () {
        return new $int(-this.__v);
    };

    $int.__abs__ = function () {
        if (this.__v >= 0) return this;
        return new $int(-this.__v);
    };

    $int.__add__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = this.__v + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__add__(new pyjslib['long'](y));
    };

    $int.__radd__ = $int.__add__;

    $int.__sub__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = this.__v - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__sub__(new pyjslib['long'](y));
    };

    $int.__rsub__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = y -this.__v;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](y).__sub__(new pyjslib['long'](this.__v));
    };

    $int.__floordiv__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(this.__v / y));
    };

    $int.__rfloordiv__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(y / this.__v));
    };

    $int.__div__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v / y);
    };

    $int.__rdiv__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this.__v);
    };

    $int.__mul__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = this.__v * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__mul__(new pyjslib['long'](y));
    };

    $int.__rmul__ = $int.__mul__;

    $int.__mod__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v % y);
    };

    $int.__rmod__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this.__v);
    };

    $int.__pow__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = Math.pow(this.__v, y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__pow__(new pyjslib['long'](y));
    };
})();


(function(){

    var $log2 = Math.log(2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v.ob_size < 0 ? -v.ob_size:v.ob_size;
        var i = j;
        while (i > 0 && v.ob_digit[i-1] == 0) {
            i--;
        }
        if (i != j) {
            v.ob_size = v.ob_size < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv.ob_size < 0) {
            i = -vv.ob_size;
            neg = true;
        } else if (vv.ob_size > 0) {
            i = vv.ob_size;
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv.ob_digit[i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv.ob_digit[i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a.ob_digit[i] * n;
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin.length) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math.floor(rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var z = new $long(0);

        prem[0] = inplace_divrem1(z.ob_digit, a.ob_digit, 0, 0, size, n)[0];
        z.ob_size = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0".charCodeAt(0);
        var c_a = "a".charCodeAt(0);
        base = base.valueOf();

        if (aa.ob_size == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa.ob_size < 0) {
                sign = '-';
                size_a = -aa.ob_size;
            } else {
                size_a = aa.ob_size;
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math.floor(i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw pyjslib['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa.ob_digit[i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    for (;;) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit.charAt(cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str.join("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;
               
                for (;;) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa.ob_digit.slice(0);
                pin = aa.ob_digit;
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math.floor(rem / base);
                            str[--p] = $cdigit.charAt(rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str.slice(p).join("");
            }
            text = text.lstrip('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa.ob_size ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = null;

        if (size_b == 0) {
            throw pyjslib['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a.ob_digit[size_a-1] < b.ob_digit[size_b-1])) {
                // |a| < |b|
                pdiv.ob_size = 0;
                prem.ob_digit = a.ob_digit.slice(0);
                prem.ob_size = a.ob_size;
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem.ob_digit = [0];
                prem.ob_size = 1;
                z = divrem1(a, b.ob_digit[0], prem.ob_digit);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv.ob_size = 0;
        } else {
            pdiv.ob_digit = z.ob_digit.slice(0);
            pdiv.ob_size = z.ob_size;
        }
        if ((a.ob_size < 0) != (b.ob_size < 0))
                pdiv.ob_size = -(pdiv.ob_size);
        if (a.ob_size < 0 && prem.ob_size != 0)
                prem.ob_size = -prem.ob_size;
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1.ob_size < 0 ? -w1.ob_size : w1.ob_size;
        var d = Math.floor(PyLong_BASE / (w1.ob_digit[size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v.ob_size < 0 ? -v.ob_size : v.ob_size;
        k = size_v - size_w;
        a = new $long(0);
        a.ob_size = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v.ob_digit[j];
            var carry = 0;
            var q, i;

            if (vj == w.ob_digit[size_w-1])
                q = PyLong_MASK;
            else
                q = Math.floor(((vj << PyLong_SHIFT) + v.ob_digit[j-1]) /
                        w.ob_digit[size_w-1]);

            while (w.ob_digit[size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v.ob_digit[j-1]
                        - q*w.ob_digit[size_w-1]
                                                ) << PyLong_SHIFT)
                    + v.ob_digit[j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w.ob_digit[i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v.ob_digit[i+k] - z
                        + (zz << PyLong_SHIFT);
                v.ob_digit[i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v.ob_digit[i+k];
                v.ob_digit[i+k] = 0;
            }

            if (carry == 0)
                a.ob_digit[k] = q;
            else {
                a.ob_digit[k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v.ob_digit[i+k] + w.ob_digit[i];
                    v.ob_digit[i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem.ob_digit = i.ob_digit.slice(0);
        prem.ob_size = i.ob_size;
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a.ob_digit[i] + b.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a.ob_digit[i] == b.ob_digit[i])
                ;
            if (i < 0)
                return z;
            if (a.ob_digit[i] < b.ob_digit[i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a.ob_digit[i] - b.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z.ob_size = i;
        if (sign < 0)
            z.ob_size = -(z.ob_size);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i, s;

        z.ob_size = size_a + size_b;
        for (i = 0; i < z.ob_size; i++) {
            z.ob_digit[i] = 0;
        }
        if (size_a == size_b && array_eq(a.ob_digit, b.ob_digit, size_a)) {
            // Efficient squaring per HAC, Algorithm 14.16:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a.ob_digit[i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z.ob_digit[pz] + f * f;
                z.ob_digit[pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z.ob_digit[pz] + a.ob_digit[pa++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z.ob_digit[pz];
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a.ob_digit[i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z.ob_digit[pz] + b.ob_digit[pb++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        z.ob_size = z.ob_digit.length;
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div, 
            mod = $l_divmod_mod; 

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod.ob_size < 0 && w.ob_size > 0) ||
            (mod.ob_size > 0 && w.ob_size < 0)) {
                mod = mod.__add__(w);
                div = div.__sub__($const_long_1);
        }
        if (pdiv !== null) {
            pdiv.ob_digit = div.ob_digit.slice(0);
            pdiv.ob_size = div.ob_size;
        }
        if (pmod !== null) {
            pmod.ob_digit = mod.ob_digit.slice(0);
            pmod.ob_size = mod.ob_size;
        }
        return 0;
    }




    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix.valueOf() == 0) {
            if (typeof value == 'undefined') {
                throw pyjslib.TypeError("long() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x04) return new $long(value, radix);

        v = value;
        this.ob_size = 0;
        this.ob_digit = new Array();
        if (v.__number__) {
            if (radix) {
                throw pyjslib.TypeError("long() can't convert non-string with explicit base");
            }
            if (v.__number__ == 0x04) {
                var size = v.ob_size < 0 ? -v.ob_size:v.ob_size;
                for (var i = 0; i < size; i++) {
                    this.ob_digit[i] = v.ob_digit[i];
                }
                this.ob_size = v.ob_size;
                return this;
            }
            if (v.__number__ == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v.valueOf();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                t = v;
                while (t) {
                    this.ob_digit[ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            if (v.__number__ == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw pyjslib['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw pyjslib['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this.ob_digit[0] = 0;
                    this.ob_size = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math.log(v)/$log2;
                    expo = (expo < 0 ? Math.ceil(expo):Math.floor(expo)) + 1;
                    frac = v / Math.pow(2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math.floor((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math.pow(2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math.floor(frac);
                    this.ob_digit[i] = bits;
                    frac -= bits;
                    frac = frac * Math.pow(2.0, PyLong_SHIFT);
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            throw pyjslib['ValueError']('cannot convert ' + pyjslib['repr'](value) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value.lstrip();
            var i = 0;
            var neg = false;

            switch (text.charAt(0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text.slice(1).lstrip();
            }

            if (!radix) {
                if (text == '0' || text.charAt(0) != '0') {
                    radix = 10;
                } else {
                    switch (text.charAt(1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw pyjslib['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text.charAt(0) == '0' && text.length > 1) {
                switch (text.charAt(1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text.slice(2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text.slice(2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text.slice(2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text.charCodeAt(p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw pyjslib['ValueError']("long string too large to convert");
                }
                this.ob_size = n = Math.floor(n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this.ob_digit[i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text.charCodeAt(p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this.ob_digit[pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this.ob_digit[pdigit++] = accum;
                }
                while (pdigit < n) {
                    this.ob_digit[pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math.log(radix) / Math.log(PyLong_BASE);
                    for (;;) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text.charCodeAt(scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this.ob_digit[i] = 0;
                }
                this.ob_size = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text.charCodeAt(str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text.charCodeAt(str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this.ob_size;
                    for (; pz < pzstop; ++pz) {
                        c += this.ob_digit[pz] * convmult;
                        this.ob_digit[pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this.ob_size < size_z) {
                            this.ob_digit[pz] = c;
                            this.ob_size++;
                        } else {
                            this.ob_digit[this.ob_size] = c;
                        }
                    }
                }
            }
            text = text.slice(nchars);
            if (neg) this.ob_size = -this.ob_size;
            if (text.charAt(0) == 'l' || text.charAt(0) == 'L') text = text.slice(1);
            text = text.lstrip();
            if (text.length === 0) {
                return this;
            }
            throw pyjslib.ValueError("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw pyjslib.TypeError("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw pyjslib.ValueError("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long.__init__ = function () {};
    $long.__number__ = 0x04;
    $long.__name__ = 'long';
    $long.prototype = $long;
    $long.__class__ = $long;
    $long.ob_size = 0;

    $long.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $long.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $long.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $long.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $long.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long.valueOf = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math.pow(2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw pyjslib['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long.__str__ = function () {
        return Format(this, 10, false, false);
    };

    $long.__repr__ = function () {
        return Format(this, 10, true, false);
    };

    $long.__nonzero__ = function () {
        return this.ob_size != 0;
    };

    $long.__cmp__ = function (b) {
        var sign;
 
        if (this.ob_size != b.ob_size) {
            if (this.ob_size < b.ob_size) return -1;
            return 1;
        }
        var i = this.ob_size < 0 ? - this.ob_size : this.ob_size;
        while (--i >= 0 && this.ob_digit[i] == b.ob_digit[i])
            ;
        if (i < 0) return 0;
        if (this.ob_digit[i] < b.ob_digit[i]) {
            if (this.ob_size < 0) return 1;
            return -1;
        }
        if (this.ob_size < 0) return -1;
        return 1;
    };

    $long.__hash__ = function () {
        var s = this.__str__();
        var v = this.valueOf();
        if (v.toString() == s) {
            return v;
        }
        return s;
    };

    $long.__invert__ = function () {
        var x = this.__add__($const_long_1);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__neg__ = function () {
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -this.ob_size;
        return x;
    };

    $long.__abs__ = function () {
        if (this.ob_size >= 0) return this;
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__lshift = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize, 
            accum, i, j;
        if (y < 0) {
            throw pyjslib['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw pyjslib['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math.floor(y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z.ob_size = a.ob_size < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z.ob_digit[i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a.ob_digit[j] << remshift;
            z.ob_digit[i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z.ob_digit[newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long.__lshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__lshift(y);
                break;
            case 0x02:
                return this.__lshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__lshift(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rlshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__lshift(this.valueOf());
            case 0x04:
                return y.__lshift(this.valueOf());
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rshift = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y.__number__ != 0x01) {
            y = y.valueOf();
        } else {
            if (y != Math.floor(y)) {
                throw pyjslib['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw pyjslib['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw pyjslib['ValueError']('shift count too big');
        }
        a = this;
        size = this.ob_size;
        if (this.ob_size < 0) {
            size = -size;
            a = this.__add__($const_long_1);
            a.ob_size = -a.ob_size;
        }

        wordshift = Math.floor(y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z.ob_size = a.ob_size < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z.ob_digit[i] = (a.ob_digit[j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z.ob_digit[i] |=
                      (a.ob_digit[j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this.ob_size < 0) {
            z = z.__add__($const_long_1);
            z.ob_size = -z.ob_size;
        }
        return z;
    };

    $long.__rshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__rshift(y);
                break;
            case 0x02:
                return this.__rshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__rshift(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rrshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__rshift(this.valueOf());
            case 0x04:
                return y.__rshift(this.valueOf());
        }
        return pyjslib['NotImplemented'];
    };

    $long.__and = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__and__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__and(new $long(y));
                break;
            case 0x02:
                return this.__and(new $long(y.__v));
            case 0x04:
                return this.__and(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rand__ = $long.__and__;

    $long.__xor = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__xor__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__xor(new $long(y));
                break;
            case 0x02:
                return this.__xor(new $long(y.__v));
            case 0x04:
                return this.__xor(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rxor__ = $long.__xor__;

    $long.__or = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__or__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__or(new $long(y));
                break;
            case 0x02:
                return this.__or(new $long(y.__v));
            case 0x04:
                return this.__or(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__ror__ = $long.__or__;

    $long.__oct__ = function () {
        return Format(this, 8, true, false);
    };

    $long.__hex__ = function () {
        return Format(this, 16, true, false);
    };

    $long.__add = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            if (b.ob_size < 0) {
                z = x_add(a, b);
                z.ob_size = -(z.ob_size);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long.__add__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__add(new $long(y.__v));
            case 0x04:
                return this.__add(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__radd__ = $long.__add__;

    $long.__sub = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
            z.ob_size = -(z.ob_size);
        }
        else {
            z = b.ob_size < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long.__sub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rsub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__sub(this);
            case 0x04:
                return y.__sub(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__mul = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this.ob_size ^ b.ob_size) < 0)
            z.ob_size = -(z.ob_size);
        return z;
    };

    $long.__mul__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mul(new $long(y.__v));
            case 0x04:
                return this.__mul(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rmul__ = $long.__mul__;

    $long.__div = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__div__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rdiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__div(this);
            case 0x04:
                return y.__div(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__mod = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long.__mod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mod(new $long(y.__v));
            case 0x04:
                return this.__mod(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__mod(this);
            case 0x04:
                return y.__mod(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__divmod = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return pyjslib['tuple']([div, mod]);
    };

    $long.__divmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__divmod(new $long(y.__v));
            case 0x04:
                return this.__divmod(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rdivmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__divmod(this);
            case 0x04:
                return y.__divmod(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__floordiv = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__floordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__floordiv(new $long(y.__v));
            case 0x04:
                return this.__floordiv(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rfloordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__floordiv(this);
            case 0x04:
                return y.__floordiv(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__pow = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w.__number__ == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x.__number__ == 0x04 ? x : new $long(x);
        }

        if (b.ob_size < 0) {
            if (c !== null) {
                throw pyjslib['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math.pow(v.valueOf(), w.valueOf());
        }

        if (c !== null) {
            if (c.ob_size == 0) {
                throw pyjslib['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c.ob_size < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp.ob_digit = c.ob_digit.slice(0);
                temp.ob_size = -c.ob_size;
                c = temp;
            }
            if (c.ob_size == 1 && c.ob_digit[0] == 1) {
                return $const_long_0;
            }
            if (a.ob_size < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b.ob_size <= FIVEARY_CUTOFF) {
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z.__mul(z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z.ob_digit = temp.ob_digit.slice(0);
                        z.ob_size = temp.ob_size;
                    }
                    if (bi & j) {
                        z = z.__mul(a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1].__mul(a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i].ob_digit = temp.ob_digit.slice(0);
                    table[i].ob_size = temp.ob_size;
                }
            }
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z.__mul(z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                    if (index) {
                        z = z.__mul(table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput && 
            (z.ob_size != 0) && (c.ob_size != 0)) {
            z = z.__sub__(c);
        }
        return z;
    };

    $long.__pow__ = function (y, z) {
        switch (y.__number__) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this.__pow(new $long(y.__v), null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(new $long(y.__v), new $long(z));
                    case 0x04:
                        return this.__pow(new $long(y.__v), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this.__pow(y, null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(y, new $long(z));
                    case 0x04:
                        return this.__pow(y, z);
                }
                break;
        }
        return pyjslib['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();



	pyjslib['NotImplementedType'] = (function(){
		var $cls_instance = $pyjs__class_instance('NotImplementedType');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'b93f29acec3a8ce0f8805c417ccbca1a';
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return String('\x3Ctype \x27NotImplementedType\x27\x3E');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjslib['NotImplemented'] = pyjslib['NotImplementedType']();

var $iter_array = function (l) {
    this.__array = l;
    this.i = -1;
};
$iter_array.prototype.next = function (noStop) {
    if (++this.i == this.__array.length) {
        if (noStop === true) {
            return;
        }
        throw pyjslib.StopIteration;
    }
    return this.__array[this.i];
};
$iter_array.prototype.__iter__ = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this.___array = l;
    this.i = l.length;
};
$reversed_iter_array.prototype.next = function (noStop) {
    if (--this.i == -1) {
        if (noStop === true) {
            return;
        }
        throw pyjslib.StopIteration;
    }
    return this.___array[this.i];
};
$reversed_iter_array.prototype.__iter__ = function ( ) {
    return this;
};
//$reversed_iter_array.prototype.$genfunc = $reversed_iter_array.prototype.next;
var $enumerate_array = function (l) {
    this.array = l;
    this.i = -1;
    this.tuple = 
	pyjslib['tuple'](pyjslib['list']([0, String('')]));

    this.tl = this.tuple.__array;
};
$enumerate_array.prototype.next = function (noStop, reuseTuple) {
    if (++this.i == this.array.length) {
        if (noStop === true) {
            return;
        }
        throw pyjslib.StopIteration;
    }
    this.tl[1] = this.array[this.i];
    if (this.tl[0].__number__ == 0x01) {
        this.tl[0] = this.i;
    } else {
        this.tl[0] = new pyjslib['int'](this.i);
    }
    return reuseTuple === true ? this.tuple : pyjslib.tuple(this.tl);
};
$enumerate_array.prototype.__iter__ = function ( ) {
    return this;
};
$enumerate_array.prototype.$genfunc = $enumerate_array.prototype.next;

	pyjslib['list'] = (function(){
		var $cls_instance = $pyjs__class_instance('list');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '11756a5ebb52b2663353ac6251f08d02';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw (pyjslib['TypeError'](String('list objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'append', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self.__array[self.__array.length] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'extend', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        var l = self.__array;
        var j = self.__array.length;
        var n = data.length, i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self.index(value);
        if (index<0) {
            throw pyjslib.ValueError("list.remove(x): x not in list");
        }
        self.__array.splice(index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'index', function(value, start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				start = arguments[2];
			}
			if (typeof start == 'undefined') start=arguments.callee.__args__[4][1];


        start = start.valueOf();
        if (typeof value == 'number' || typeof value == 'string') {
            start = self.__array.indexOf(value, start);
            if (start >= 0)
                return start;
        } else {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if (start in self.__array &&
                    pyjslib.cmp(self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw (pyjslib['ValueError'](String('list.index(x): x not in list')));
			return null;
		}
	, 1, [null,null,['self'],['value'],['start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self.__array; self.__array=a.slice(0, index).concat(value, a.slice(index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			if (typeof index == 'undefined') index=arguments.callee.__args__[3][1];


        index = index.valueOf();
        if (index<0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            if (self.__array.length == 0) {
                throw pyjslib.IndexError("pop from empty list");
            }
            throw pyjslib.IndexError("pop index out of range");
        }
        var a = self.__array[index];
        self.__array.splice(index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['index', (typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](l, pyjslib['list'])))) {
				return (typeof ($usub3=1)=='number'?
					-$usub3:
					pyjslib['op_usub']($usub3));
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = pyjslib.cmp(a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return pyjslib.list(self.__array.slice(lower));
        return pyjslib.list(self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        var n = upper - lower;
        if (upper==null) {
            n =  self.__array.length;
        }
        if (!lower) lower = 0;
        if (n > 0) self.__array.splice(lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__setslice__', function(lower, upper, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("list index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__setitem__', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("list assignment index out of range");
        }
        self.__array[index]=value;
        
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("list assignment index out of range");
        }
        self.__array.splice(index, 1);
        
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err,err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 3841};
				if (($pyjs_try_err_name == pyjslib['ValueError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['ValueError'])) {
					$pyjs.__last_exception__.except_lineno = 3843;
					err = $pyjs_try_err;
					return false;
				} else { throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'reverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__array.reverse();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'sort', function(cmp, key, reverse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
			var thisSort1,thisSort2,$and13,$and14,thisSort3;
			if (pyjslib['bool']((cmp === null))) {
				cmp = pyjslib['__cmp'];
			}
			if (pyjslib['bool']((pyjslib['bool']($and13=key)?reverse:$and13))) {
				thisSort1 = function(a, b) {

					return (typeof ($usub4=cmp(key(a), key(b)))=='number'?
						-$usub4:
						pyjslib['op_usub']($usub4));
				};
				thisSort1.__name__ = 'thisSort1';

				thisSort1.__bind_type__ = 0;
				thisSort1.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if (pyjslib['bool'](key)) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2.__name__ = 'thisSort2';

				thisSort2.__bind_type__ = 0;
				thisSort2.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if (pyjslib['bool'](reverse)) {
				thisSort3 = function(a, b) {

					return (typeof ($usub5=cmp(a, b))=='number'?
						-$usub5:
						pyjslib['op_usub']($usub5));
				};
				thisSort3.__name__ = 'thisSort3';

				thisSort3.__bind_type__ = 0;
				thisSort3.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr50,$attr49;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr52;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self.__array.length; i++) {
            s += pyjslib.repr(self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr53,$attr54;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](y, self)))) {
				throw (pyjslib['TypeError'](String('can only concatenate list to list')));
			}
			return pyjslib['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr55,$sub3,$attr56,$sub4;
			if (pyjslib['bool'](!pyjslib['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw (pyjslib['TypeError'](String('can\x27t multiply sequence by non-int')));
			}
			a = pyjslib['list']([]);
			while (pyjslib['bool'](n)) {
				n = (typeof ($sub3=n)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					pyjslib['op_sub']($sub3,$sub4));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
pyjslib.list.__str__ = pyjslib.list.__repr__;
pyjslib.list.toString = pyjslib.list.__str__;
	pyjslib['tuple'] = (function(){
		var $cls_instance = $pyjs__class_instance('tuple');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '6166800714a1e9b2dc755989e7a357ff';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$add34,$attr57,$add33;
			return (typeof ($add33=String('$tuple$'))==typeof ($add34=pyjslib['str'](self['__array'])) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				pyjslib['op_add']($add33,$add34));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](l, pyjslib['tuple'])))) {
				return 1;
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = pyjslib.cmp(a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return pyjslib.tuple(self.__array.slice(lower));
        return pyjslib.tuple(self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("tuple index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return self.__array.indexOf(value)>=0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);

        var i = 0;
        var l = self.__array;
        return {
            'next': function() {
                if (i >= l.length) {
                    throw pyjslib.StopIteration;
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr60;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr61,$attr62;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self.__array.length; i++) {
            s += pyjslib.repr(self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        if (self.__array.length == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr64,$attr63;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](y, self)))) {
				throw (pyjslib['TypeError'](String('can only concatenate tuple to tuple')));
			}
			return pyjslib['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr65,$attr66,$sub6,$sub5;
			if (pyjslib['bool'](!pyjslib['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw (pyjslib['TypeError'](String('can\x27t multiply sequence by non-int')));
			}
			a = pyjslib['list']([]);
			while (pyjslib['bool'](n)) {
				n = (typeof ($sub5=n)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					pyjslib['op_sub']($sub5,$sub6));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
pyjslib.tuple.__str__ = pyjslib.tuple.__repr__;
pyjslib.tuple.toString = pyjslib.tuple.__str__;
	pyjslib['dict'] = (function(){
		var $cls_instance = $pyjs__class_instance('dict');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '09216d9ab1a507bfa73a7f671050a6f2';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(seq) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments.callee.__args__[3][1];
			var init;
			self.__object = {};
			init = function(data) {


        var item, i, n, sKey;
        //self.__object = {};

        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (sKey in data) {
                self.__object[sKey] = data[sKey].slice();
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                self.__object['$'+key] = [key, data[key]];
            }
            return null;
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        if (data[0].constructor === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0]
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0].__array != 'undefined') {
            while (i < n) {
                item = data[i++].__array;
                key = item[0]
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i].__getitem__(0);
            sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
            self.__object[sKey] = [key, data[i].__getitem__(1)];
        }
        return null;
        
			};
			init.__name__ = 'init';

			init.__bind_type__ = 0;
			init.__args__ = [null,null,['data']];
			init(seq);
			if (pyjslib['bool'](kwargs)) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw (pyjslib['TypeError'](String('dict objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__setitem__', function(key, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw pyjslib['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        self.__object[sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        var value=self.__object[sKey];
        if (typeof value == 'undefined'){
            throw pyjslib.KeyError(key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw (pyjslib['TypeError'](String('dict objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self.__object){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](other, pyjslib['dict'])))) {
				throw (pyjslib['TypeError'](String('dict.__cmp__(x,y) requires y to be a \x27dict\x27')));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self.__object;
            otherObj = other.__object;
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys.sort();
        other_sKeys.sort();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = pyjslib.cmp(selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = pyjslib.cmp(selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        delete self.__object[sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        return typeof self.__object[sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'keys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=pyjslib.list(),
            selfObj = self.__object,
            __array = keys.__array,
            i = 0;
        for (var sKey in self.__object) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments.callee.__args__[3][1];
			var d,i,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			d = pyjslib['dict']([]);
			$iter4_iter = iterable;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				d.__setitem__(i, v);
			}
			return d;
		}
	, 0, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=pyjslib.list();
        var i = 0;
        for (var key in self.__object) {
            values.__array[i++] = self.__object[key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = pyjslib.list();
        var i = 0;
        for (var key in self.__object) {
          var kv = self.__object[key];
          items.__array[i++] = pyjslib.list(kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'itervalues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'iteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setdefault', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        return typeof self.__object[sKey] == 'undefined' ? (self.__object[sKey]=[key, default_value])[1] : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'get', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


        var empty = true;
        for (var sKey in self.__object) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        return typeof self.__object[sKey] == 'undefined' ? default_value : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter5_nextval,v,$iter5_idx,$iter6_idx,$iter6_type,$iter5_array,$iter6_array,$iter5_iter,$iter5_type,$iter6_iter,k,$iter6_nextval;
			if (pyjslib['bool'](args)) {
				if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](args), 1) == 1))) {
					throw (pyjslib['TypeError'](pyjslib['sprintf'](String('update expected at most 1 arguments, got %d'), pyjslib['len'](args))));
				}
				$iter5_iter = args.__getitem__(0)['iteritems']();
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,true):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					k = $iter5_nextval.__array[0];
					v = $iter5_nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			if (pyjslib['bool'](kwargs)) {
				$iter6_iter = kwargs['iteritems']();
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,true):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					k = $iter6_nextval.__array[0];
					v = $iter6_nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
				var d = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = pyjslib['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var err,res,$add36,$add35,$pyjs_try_err;
			if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](d), 1) == 1))) {
				throw (pyjslib['TypeError'](pyjslib['sprintf'](String('pop expected at most 2 arguments, got %s'), (typeof ($add35=1)==typeof ($add36=pyjslib['len'](d)) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					pyjslib['op_add']($add35,$add36)))));
			}
			try {
				res = self.__getitem__(k);
				self.__delitem__(k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 4357};
				if (($pyjs_try_err_name == pyjslib['KeyError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['KeyError'])) {
					$pyjs.__last_exception__.except_lineno = 4361;
					err = $pyjs_try_err;
					if (pyjslib['bool'](d)) {
						return d.__getitem__(0);
					}
					else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							pyjslib['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'popitem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var v,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,k;
			$iter7_iter = self['iteritems']();
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,true):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				k = $iter7_nextval.__array[0];
				v = $iter7_nextval.__array[1];
				return pyjslib['tuple']([k, v]);
			}
			throw (pyjslib['KeyError'](String('popitem(): dictionary is empty')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr67,$attr68;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjslib['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr69,$attr70;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var keys = new Array();
        for (var key in self.__object)
            keys.push(key);

        var s = "{";
        for (var i=0; i<keys.length; i++) {
            var v = self.__object[keys[i]];
            s += pyjslib.repr(v[0]) + ": " + pyjslib.repr(v[1]);
            if (i < keys.length-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
pyjslib.dict.has_key = pyjslib.dict.__contains__;
pyjslib.dict.iterkeys = pyjslib.dict.__iter__;
pyjslib.dict.__str__ = pyjslib.dict.__repr__;
	pyjslib['__empty_dict'] = function() {


    var dict__init__ = pyjslib.dict.__init__;
    var d;
    pyjslib.dict.__init__ = function() {
        this.__object = {};
    }
    d = pyjslib.dict();
    d.__init__ = pyjslib.dict.__init__ = dict__init__;
    return d;

	};
	pyjslib['__empty_dict'].__name__ = '__empty_dict';

	pyjslib['__empty_dict'].__bind_type__ = 0;
	pyjslib['__empty_dict'].__args__ = [null,null];
	pyjslib['set'] = (function(){
		var $cls_instance = $pyjs__class_instance('set');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '6a4e21b76922e34bd872d7333a49e5db';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];

			if (pyjslib['bool'](pyjslib.isSet(data))) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, i, n;
        var selfObj = self.__object = {};

        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (var sKey in data) {
                selfObj[sKey] = data[sKey][0];
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                selfObj[pyjslib.hash(key)] = key;
            }
            return null;
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        while (i < n) {
            item = data[i++];
            selfObj[pyjslib.hash(item)] = item;
        }
        return null;
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return 2;
			}

        var selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        for (var sVal in selfObj) {
            if (!selfMismatch && typeof otherObj[sVal] == 'undefined') {
                selfMismatch = true;
            }
            selfLen++;
        }
        for (var sVal in otherObj) {
            if (!otherMismatch && typeof selfObj[sVal] == 'undefined') {
                otherMismatch = true;
            }
            otherLen++;
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib.isSet(value), 1))) {

            var hashes = new Array(), obj = self.__object, i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort()
            var h = hashes.join("|");
            return typeof self.__object[h] != 'undefined';

			}
return typeof self.__object[pyjslib.hash(value)] != 'undefined';
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw (pyjslib['TypeError'](String('set objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array();
        var i = 0;
        for (var key in self.__object) {
            items[i++] = self.__object[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr72,$attr71;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = pyjslib.repr(obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self.__object[pyjslib.hash(value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib.isSet(value), 1))) {
				value = pyjslib['frozenset'](value);
			}
delete self.__object[pyjslib.hash(value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw (pyjslib['KeyError'](String('pop from an empty set')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var val;
			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib.isSet(value), 1))) {
				val = pyjslib['frozenset'](value);
			}
			else {
				val = value;
			}

        var h;
        if (typeof self.__object[(h = pyjslib.hash(val))] == 'undefined') {
            throw pyjslib['KeyError'](value);
        }
        delete self.__object[pyjslib.hash(val)];
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self.__object = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = pyjslib['set']();
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(data)))) {
				data = pyjslib['frozenset'](data);
			}

        var selfObj = self.__object,
            dataObj = data.__object;
        for (var sVal in dataObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
pyjslib['set']['__str__'] = pyjslib['set']['__repr__'];
pyjslib['set']['toString'] = pyjslib['set']['__repr__'];
	pyjslib['frozenset'] = (function(){
		var $cls_instance = $pyjs__class_instance('frozenset');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '82fd137ed45ad19269353949e676aa59';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];

			if (pyjslib['bool'](typeof self.__object != 'undefined')) {
				return null;
			}
			if (pyjslib['bool'](pyjslib.isSet(data))) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, i, n;
        var selfObj = self.__object = {};

        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (var sKey in data) {
                selfObj[sKey] = data[sKey][0];
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                selfObj[pyjslib.hash(key)] = key;
            }
            return null;
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        while (i < n) {
            item = data[i++];
            selfObj[pyjslib.hash(item)] = item;
        }
        return null;
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return 2;
			}

        var selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        for (var sVal in selfObj) {
            if (!selfMismatch && typeof otherObj[sVal] == 'undefined') {
                selfMismatch = true;
            }
            selfLen++;
        }
        for (var sVal in otherObj) {
            if (!otherMismatch && typeof selfObj[sVal] == 'undefined') {
                otherMismatch = true;
            }
            otherLen++;
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib.isSet(value), 1))) {

            var hashes = new Array(), obj = self.__object, i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort()
            var h = hashes.join("|");
            return typeof self.__object[h] != 'undefined';

			}
return typeof self.__object[pyjslib.hash(value)] != 'undefined';
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self.__object, i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes.sort()
        return (self.$H = hashes.join("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array();
        var i = 0;
        for (var key in self.__object) {
            items[i++] = self.__object[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$attr73;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = pyjslib.repr(obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				return pyjslib['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw (pyjslib['KeyError'](String('pop from an empty set')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = pyjslib['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = pyjslib['set']();
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
pyjslib['frozenset']['__str__'] = pyjslib['frozenset']['__repr__'];
pyjslib['frozenset']['toString'] = pyjslib['frozenset']['__repr__'];
	pyjslib['property'] = (function(){
		var $cls_instance = $pyjs__class_instance('property');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '3f85b6677b23102aa4009d1999eb1715';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or5,$or4,$attr75,$attr76;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if (pyjslib['bool']((pyjslib['bool']($or4=!pyjslib['bool']((doc === null)))?$or4:!pyjslib['bool'](pyjslib['hasattr'](fget, String('__doc__')))))) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $attr77,$attr78;
			if (pyjslib['bool']((obj === null))) {
				return self;
			}
			if (pyjslib['bool']((self['fget'] === null))) {

				var $pyjs__raise_expr1 = pyjslib['AttributeError'];
				var $pyjs__raise_expr2 = String('unreadable attribute');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr80,$attr79;
			if (pyjslib['bool']((self['fset'] === null))) {

				var $pyjs__raise_expr1 = pyjslib['AttributeError'];
				var $pyjs__raise_expr2 = String('can\x27t set attribute');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr82,$attr81;
			if (pyjslib['bool']((self['fdel'] === null))) {

				var $pyjs__raise_expr1 = pyjslib['AttributeError'];
				var $pyjs__raise_expr2 = String('can\x27t delete attribute');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjslib['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func.apply(null,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = func.__name__;
    fnwrap.__args__ = func.__args__;
    fnwrap.__bind_type__ = 0;
    return fnwrap;
    
	};
	pyjslib['staticmethod'].__name__ = 'staticmethod';

	pyjslib['staticmethod'].__bind_type__ = 0;
	pyjslib['staticmethod'].__args__ = [null,null,['func']];
	pyjslib['$$super'] = function(type_, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments.callee.__args__[3][1];
		var i;
		if (pyjslib['bool'](!pyjslib['bool'](pyjslib._issubtype(object_or_type, type_)))) {
			i = pyjslib._issubtype(object_or_type, type_);
			throw (pyjslib['TypeError'](String('super(type, obj): obj must be an instance or subtype of type')));
		}

    if (typeof type_.__mro__ == 'undefined') {
        type_ = type_.__class__;
    }
    var fn = $pyjs_type('super', type_.__mro__.slice(1), {});
    fn.__new__ = fn.__mro__[1].__new__;
    fn.__init__ = fn.__mro__[1].__init__;
    if (object_or_type.__is_instance__ === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name].apply(object_or_type,$pyjs_array_slice.call(arguments));
        };
        fnwrap.__name__ = name;
        fnwrap.__args__ = obj[name].__args__;
        fnwrap.__bind_type__ = obj[name].__bind_type__;
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj.__is_instance__ = object_or_type.__is_instance__;
    return obj;
    
	};
	pyjslib['$$super'].__name__ = 'super';

	pyjslib['$$super'].__bind_type__ = 0;
	pyjslib['$$super'].__args__ = [null,null,['type_'],['object_or_type', null]];
	pyjslib['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr83,$attr86,$attr87,$attr84,$attr85,$attr88,rval,$assign1,nval;
		if (pyjslib['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		if (pyjslib['bool'](!pyjslib['bool'](start !== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('xrange() integer start argument expected, got %s'), start['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](stop !== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('xrange() integer end argument expected, got %s'), stop['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](step !== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('xrange() integer step argument expected, got %s'), step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    stop = start + nstep * step;
    if (nstep <= 0) nval = stop;
    var x = {
        'next': function(noStop) {
            if (nval == stop) {
                if (noStop === true) {
                    return;
                }
                throw pyjslib.StopIteration;
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this.next(true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return pyjslib['xrange'](stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start != 0) {
                s += start + ", ";
            }
            s += stop;
            if (step != 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this.toString() + "'";
        }
    };
    x['__str__'] = x.toString;
    return x;
    
	};
	pyjslib['xrange'].__name__ = 'xrange';

	pyjslib['xrange'].__bind_type__ = 0;
	pyjslib['xrange'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	pyjslib['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr94,$attr91,$attr90,$attr93,$attr92,i,items,$attr89;
		if (pyjslib['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		i = start;
		if (pyjslib['bool'](!pyjslib['bool'](start !== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('xrange() integer start argument expected, got %s'), start['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](stop !== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('xrange() integer end argument expected, got %s'), stop['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](step !== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('xrange() integer step argument expected, got %s'), step['__class__']['__name__'])));
		}
		items = new Array();

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    stop = start + nstep * step;
    if (nstep <= 0) i = stop;
    for (; i != stop; i += step)

		items['push'](i);
		return pyjslib['list'](items);
	};
	pyjslib['range'].__name__ = 'range';

	pyjslib['range'].__bind_type__ = 0;
	pyjslib['range'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	pyjslib['slice'] = function(object, lower, upper) {


    if (object === null) {
        return null;
    }
    if (typeof object.__getslice__ == 'function') {
        return object.__getslice__(lower, upper);
    }
    if (object.slice == 'function')
        return object.slice(lower, upper);

    return null;
    
	};
	pyjslib['slice'].__name__ = 'slice';

	pyjslib['slice'].__bind_type__ = 0;
	pyjslib['slice'].__args__ = [null,null,['object'],['lower'],['upper']];
	pyjslib['__delslice'] = function(object, lower, upper) {


    if (typeof object.__delslice__ == 'function') {
        return object.__delslice__(lower, upper);
    }
    if (object.__getslice__ == 'function' && object.__delitem__ == 'function') {
        if (upper == null) {
            upper = pyjslib.len(object);
        }
        for (var i = lower; i < upper; i++) {
            object.__delitem__(i);
        }
        return null;
    }
    throw pyjslib.TypeError('object does not support item deletion');
    return null;
    
	};
	pyjslib['__delslice'].__name__ = '__delslice';

	pyjslib['__delslice'].__bind_type__ = 0;
	pyjslib['__delslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	pyjslib['__setslice'] = function(object, lower, upper, value) {


    if (typeof object.__setslice__ == 'function') {
        return object.__setslice__(lower, upper, value);
    }
    throw pyjslib.TypeError('object does not support __setslice__');
    return null;
    
	};
	pyjslib['__setslice'].__name__ = '__setslice';

	pyjslib['__setslice'].__bind_type__ = 0;
	pyjslib['__setslice'].__args__ = [null,null,['object'],['lower'],['upper'],['value']];
	pyjslib['str'] = function(text) {


    if (pyjslib.hasattr(text,"__str__")) {
        return text.__str__();
    }
    return String(text);
    
	};
	pyjslib['str'].__name__ = 'str';

	pyjslib['str'].__bind_type__ = 0;
	pyjslib['str'].__args__ = [null,null,['text']];
	pyjslib['ord'] = function(x) {
		var $and16,$and15;
		if (pyjslib['bool']((pyjslib['bool']($and15=typeof x == 'string')?(pyjslib['len'](x) === 1):$and15))) {
			return x['charCodeAt'](0);
		}
		else {
throw pyjslib.TypeError("ord() expected string of length 1");
		}
		return null;
	};
	pyjslib['ord'].__name__ = 'ord';

	pyjslib['ord'].__bind_type__ = 0;
	pyjslib['ord'].__args__ = [null,null,['x']];
	pyjslib['chr'] = function(x) {


        return String.fromCharCode(x);
    
	};
	pyjslib['chr'].__name__ = 'chr';

	pyjslib['chr'].__bind_type__ = 0;
	pyjslib['chr'].__args__ = [null,null,['x']];
	pyjslib['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	pyjslib['is_basetype'].__name__ = 'is_basetype';

	pyjslib['is_basetype'].__bind_type__ = 0;
	pyjslib['is_basetype'].__args__ = [null,null,['x']];
	pyjslib['get_pyjs_classtype'] = function(x) {


        if (x !== null && typeof x.__is_instance__ == 'boolean') {
            var src = x.__name__;
            return src;
        }
        return null;
    
	};
	pyjslib['get_pyjs_classtype'].__name__ = 'get_pyjs_classtype';

	pyjslib['get_pyjs_classtype'].__bind_type__ = 0;
	pyjslib['get_pyjs_classtype'].__args__ = [null,null,['x']];
	pyjslib['repr'] = function(x) {

		if (pyjslib['bool'](pyjslib['hasattr'](x, String('__repr__')))) {
			if (pyjslib['bool'](pyjslib['callable'](x))) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (x === null)
           return "null";

       if (x === undefined)
           return "undefined";

       var t = typeof(x);

        //alert("repr typeof " + t + " : " + x);

       if (t == "boolean")
           return x.toString();

       if (t == "function")
           return "<function " + x.toString() + ">";

       if (t == "number")
           return x.toString();

       if (t == "string") {
           if (x.indexOf("'") == -1)
               return "'" + x + "'";
           if (x.indexOf('"') == -1)
               return '"' + x + '"';
           var s = x.$$replace(new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }

       if (t == "undefined")
           return "undefined";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!pyjslib.hasattr(x, "__init__"))
           return "<" + x.toString() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = pyjslib.get_pyjs_classtype(x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.

       //var s = constructor.$$replace(new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	pyjslib['repr'].__name__ = 'repr';

	pyjslib['repr'].__bind_type__ = 0;
	pyjslib['repr'].__args__ = [null,null,['x']];
	pyjslib['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (object === null) return v;
    else if (typeof object.__array != 'undefined') v = object.__array.length;
    else if (typeof object.__len__ == 'function') v = object.__len__();
    else if (typeof object.length != 'undefined') v = object.length;
    else throw pyjslib.TypeError("object has no len()");
    if (v.__number__ & 0x06) return v;
    
		return v;
	};
	pyjslib['len'].__name__ = 'len';

	pyjslib['len'].__bind_type__ = 0;
	pyjslib['len'].__args__ = [null,null,['object']];
	pyjslib['isinstance'] = function(object_, classinfo) {
		var ci,$iter8_idx,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval;

    if (typeof object_ == 'undefined') {
        return false;
    }
    if (object_ == null) {
        if (classinfo == null) {
            return true;
        }
        return false;
    }
    switch (classinfo.__name__) {
        case 'float':
            return typeof object_ == 'number' && object_.__number__ == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            return object_ !== null && object_.__number__ && (object_.__number__ != 0x01 || isFinite(object_));/* XXX TODO: check rounded? */
        case 'str':
            return typeof object_ == 'string';
        case 'bool':
            return typeof object_ == 'boolean';
        case 'long':
            return object_.__number__ == 0x04;
    }
    if (typeof object_ != 'object' && typeof object_ != 'function') {
        return false;
    }

		if (pyjslib['bool'](pyjslib._isinstance(classinfo, pyjslib['tuple']))) {
			if (pyjslib['bool'](pyjslib._isinstance(object_, pyjslib['tuple']))) {
				return true;
			}
			$iter8_iter = classinfo;
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):pyjslib['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				ci = $iter8_nextval;
				if (pyjslib['bool'](pyjslib['isinstance'](object_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			return pyjslib._isinstance(object_, classinfo);
		}
		return null;
	};
	pyjslib['isinstance'].__name__ = 'isinstance';

	pyjslib['isinstance'].__bind_type__ = 0;
	pyjslib['isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	pyjslib['_isinstance'] = function(object_, classinfo) {


    if (   object_.__is_instance__ !== true 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) return true;
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	pyjslib['_isinstance'].__name__ = '_isinstance';

	pyjslib['_isinstance'].__bind_type__ = 0;
	pyjslib['_isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	pyjslib['issubclass'] = function(class_, classinfo) {
		var ci,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$iter9_type;
		if (pyjslib['bool']( typeof class_ == 'undefined' || class_ === null || class_.__is_instance__ !== false )) {
			throw (pyjslib['TypeError'](String('arg 1 must be a class')));
		}
		if (pyjslib['bool'](pyjslib['isinstance'](classinfo, pyjslib['tuple']))) {
			$iter9_iter = classinfo;
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):pyjslib['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				ci = $iter9_nextval;
				if (pyjslib['bool'](pyjslib['issubclass'](class_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			if (pyjslib['bool']( typeof classinfo == 'undefined' || classinfo.__is_instance__ !== false )) {
				throw (pyjslib['TypeError'](String('arg 2 must be a class or tuple of classes')));
			}
			return pyjslib._issubtype(class_, classinfo);
		}
		return null;
	};
	pyjslib['issubclass'].__name__ = 'issubclass';

	pyjslib['issubclass'].__bind_type__ = 0;
	pyjslib['issubclass'].__args__ = [null,null,['class_'],['classinfo']];
	pyjslib['_issubtype'] = function(object_, classinfo) {


    if (   object_.__is_instance__ === null 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) return true;
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	pyjslib['_issubtype'].__name__ = '_issubtype';

	pyjslib['_issubtype'].__bind_type__ = 0;
	pyjslib['_issubtype'].__args__ = [null,null,['object_'],['classinfo']];
	pyjslib['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


    if (obj === null || typeof obj == 'undefined' || typeof obj[name] == 'undefined') {
        if (arguments.length != 3 || typeof obj == 'undefined'){
            throw pyjslib.AttributeError("'" + pyjslib.repr(obj) + "' has no attribute '" + name + "'");
        }
        return default_value;
    }
    var method = obj[name];
    if (method === null) return method;

    if (typeof method.__get__ == 'function') {
        if (obj.__is_instance__) {
            return method.__get__(obj, obj.__class__);
        }
        return method.__get__(null, obj.__class__);
    }
    if (   typeof method != 'function'
        || obj.__is_instance__ !== true) {
        return obj[name];
    }

    var fnwrap = function() {
        return method.apply(obj,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = name;
    fnwrap.__args__ = obj[name].__args__;
    fnwrap.__class__ = obj.__class__;
    fnwrap.__bind_type__ = obj[name].__bind_type__;
    return fnwrap;
    
	};
	pyjslib['getattr'].__name__ = 'getattr';

	pyjslib['getattr'].__bind_type__ = 0;
	pyjslib['getattr'].__args__ = [null,null,['obj'],['name'],['default_value', null]];
	pyjslib['_del'] = function(obj) {


    if (typeof obj.__delete__ == 'function') {
        obj.__delete__(obj);
    } else {
        delete obj;
    }
    
	};
	pyjslib['_del'].__name__ = '_del';

	pyjslib['_del'].__bind_type__ = 0;
	pyjslib['_del'].__args__ = [null,null,['obj']];
	pyjslib['delattr'] = function(obj, name) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (   obj !== null
        && (typeof obj == 'object' || typeof obj == 'function')
        && (typeof(obj[name]) != "undefined")&&(typeof(obj[name]) != "function") ){
        if (typeof obj[name].__delete__ == 'function') {
            obj[name].__delete__(obj);
        } else {
            delete obj[name];
        }
        return;
    }
    if (obj === null) {
        throw pyjslib.AttributeError("'NoneType' object has no attribute '"+name+"'");
    }
    if (typeof obj != 'object' && typeof obj == 'function') {
       throw pyjslib.AttributeError("'"+typeof(obj)+"' object has no attribute '"+name+"'");
    }
    throw pyjslib.AttributeError(obj.__name__+" instance has no attribute '"+ name+"'");
    
	};
	pyjslib['delattr'].__name__ = 'delattr';

	pyjslib['delattr'].__bind_type__ = 0;
	pyjslib['delattr'].__args__ = [null,null,['obj'],['name']];
	pyjslib['setattr'] = function(obj, name, value) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw pyjslib['TypeError']("attribute name must be string");
    }
    if (   typeof obj[name] != 'undefined'
        && obj[name] !== null
        && typeof obj[name].__set__ == 'function') {
        obj[name].__set__(obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	pyjslib['setattr'].__name__ = 'setattr';

	pyjslib['setattr'].__bind_type__ = 0;
	pyjslib['setattr'].__args__ = [null,null,['obj'],['name'],['value']];
	pyjslib['hasattr'] = function(obj, name) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw pyjslib['TypeError']("attribute name must be string");
    }
    if (obj === null || typeof obj[name] == 'undefined') return false;
    if (typeof obj != 'object' && typeof obj != 'function') return false;

    return true;
    
	};
	pyjslib['hasattr'].__name__ = 'hasattr';

	pyjslib['hasattr'].__bind_type__ = 0;
	pyjslib['hasattr'].__args__ = [null,null,['obj'],['name']];
	pyjslib['dir'] = function(obj) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    var properties=pyjslib.list();
    for (property in obj) properties.append(property);
    return properties;
    
	};
	pyjslib['dir'].__name__ = 'dir';

	pyjslib['dir'].__bind_type__ = 0;
	pyjslib['dir'].__args__ = [null,null,['obj']];
	pyjslib['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter11_nextval,$iter10_nextval,items,$iter10_idx,$iter11_type,$iter10_array,$iter11_array,item,$iter11_iter,$iter10_type,$iter10_iter,$iter11_idx;
		items = pyjslib['list']([]);
		if (pyjslib['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter10_iter = sequence;
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):pyjslib['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				item = $iter10_nextval;
				if (pyjslib['bool'](method(item))) {
					items['append'](item);
				}
			}
		}
		else {
			$iter11_iter = sequence;
			if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter.__iter__();
				$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):pyjslib['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				item = $iter11_nextval;
				if (pyjslib['bool'](method['$$call'](obj, item))) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	pyjslib['filter'].__name__ = 'filter';

	pyjslib['filter'].__bind_type__ = 0;
	pyjslib['filter'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	pyjslib['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter13_type,items,$iter12_type,$iter13_iter,$iter12_array,$iter12_iter,item,$iter13_array,$iter13_nextval,$iter12_idx,$iter12_nextval,$iter13_idx;
		items = pyjslib['list']([]);
		if (pyjslib['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter12_iter = sequence;
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):pyjslib['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				item = $iter12_nextval;
				items['append'](method(item));
			}
		}
		else {
			$iter13_iter = sequence;
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):pyjslib['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				item = $iter13_nextval;
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	pyjslib['map'].__name__ = 'map';

	pyjslib['map'].__bind_type__ = 0;
	pyjslib['map'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	pyjslib['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments.callee.__args__[4][1];
		var value,$iter14_array,$iter14_type,$iter14_iter,err,emtpy,$pyjs_try_err,$iter14_idx,$iter14_nextval;
		try {
			iterable = pyjslib['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5734};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 5737;
				err = $pyjs_try_err;

				var $pyjs__raise_expr1 = pyjslib['TypeError'];
				var $pyjs__raise_expr2 = String('reduce() arg 2 must support iteration');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter14_iter = iterable;
		if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
			$iter14_type = 0;
		} else {
			$iter14_iter = $iter14_iter.__iter__();
			$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter14_idx = 0;
		while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):pyjslib['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
			value = $iter14_nextval;
			emtpy = false;
			if (pyjslib['bool'](typeof initializer == 'undefined')) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if (pyjslib['bool'](pyjslib.empty)) {
			if (pyjslib['bool'](typeof initializer == 'undefined')) {

				var $pyjs__raise_expr1 = pyjslib['TypeError'];
				var $pyjs__raise_expr2 = String('reduce() of empty sequence with no initial value');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	pyjslib['reduce'].__name__ = 'reduce';

	pyjslib['reduce'].__bind_type__ = 0;
	pyjslib['reduce'].__args__ = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	pyjslib['zip'] = function() {
		var iterables = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $add38,err,i,$add37,n,lst,$pyjs_try_err,t;
		n = pyjslib['len'](iterables);
		if (pyjslib['bool'](pyjslib['op_eq'](n, 0))) {
			return pyjslib['list']([]);
		}
		lst = pyjslib['list']([]);
		iterables = function(){
var $listcomp4 = pyjslib['list']();
		$iter15_iter = iterables;
		if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
			$iter15_type = 0;
		} else {
			$iter15_iter = $iter15_iter.__iter__();
			$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter15_idx = 0;
		while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):pyjslib['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
			i = $iter15_nextval;
			$listcomp4['append'](pyjslib['iter'](i));
		}
return $listcomp4;}();
		try {
			while (pyjslib['bool'](true)) {
				t = pyjslib['list']([]);
				i = 0;
				while (pyjslib['bool']((pyjslib['cmp'](i, n) == -1))) {
					t['append'](iterables.__getitem__(i)['next']());
					i = (typeof ($add37=i)==typeof ($add38=1) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						pyjslib['op_add']($add37,$add38));
				}
				lst['append'](pyjslib['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5758};
			if (($pyjs_try_err_name == pyjslib['StopIteration'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['StopIteration'])) {
				$pyjs.__last_exception__.except_lineno = 5766;
				err = $pyjs_try_err;
			} else { throw $pyjs_try_err; }
		}
		return lst;
	};
	pyjslib['zip'].__name__ = 'zip';

	pyjslib['zip'].__bind_type__ = 0;
	pyjslib['zip'].__args__ = ['iterables',null];
	pyjslib['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
		if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
		if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
		var lst;
		lst = pyjslib['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	pyjslib['sorted'].__name__ = 'sorted';

	pyjslib['sorted'].__bind_type__ = 0;
	pyjslib['sorted'].__args__ = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	pyjslib['reversed'] = function(iterable) {
		var err,l,$pyjs_try_err,$and17,v,$and18;
		if (pyjslib['bool'](pyjslib['hasattr'](iterable, String('__reversed__')))) {
			return iterable['__reversed__']();
		}
		if (pyjslib['bool']((pyjslib['bool']($and17=pyjslib['hasattr'](iterable, String('__len__')))?pyjslib['hasattr'](iterable, String('__getitem__')):$and17))) {
			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](iterable), 0))) {
				l = pyjslib['list']([]);
				return l['__iter__']();
			}
			try {
				v = iterable.__getitem__(0);
				return pyjslib._reversed(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5784};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 5788;
					err = $pyjs_try_err;
				}
			}
		}
		throw (pyjslib['TypeError'](String('argument to reversed() must be a sequence')));
		return null;
	};
	pyjslib['reversed'].__name__ = 'reversed';

	pyjslib['reversed'].__bind_type__ = 0;
	pyjslib['reversed'].__args__ = [null,null,['iterable']];
	pyjslib['_reversed'] = function(iterable) {
		var i,$sub10,$sub9,$sub8,$sub7;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = pyjslib['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||(pyjslib['bool']((pyjslib['cmp'](i, 0) == 1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						i = (typeof ($sub9=i)==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							pyjslib['op_sub']($sub9,$sub10));
						$yield_value = iterable.__getitem__(i);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	pyjslib['_reversed'].__name__ = '_reversed';

	pyjslib['_reversed'].__bind_type__ = 0;
	pyjslib['_reversed'].__args__ = [null,null,['iterable']];
	pyjslib['enumerate'] = function(sequence) {


    if (typeof sequence.__enumerate__ == 'function') {
        return sequence.__enumerate__();
    }

		return pyjslib._enumerate(sequence);
	};
	pyjslib['enumerate'].__name__ = 'enumerate';

	pyjslib['enumerate'].__bind_type__ = 0;
	pyjslib['enumerate'].__args__ = [null,null,['sequence']];
	pyjslib['_enumerate'] = function(sequence) {
		var $iter16_array,$iter17_nextval,$iter17_array,$add39,$iter16_type,$add42,$add41,$add40,$iter16_idx,item,$iter17_iter,nextIndex,$iter17_type,$iter16_nextval,$iter16_iter,$iter17_idx;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter17_iter = sequence;
				if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter.__iter__();
					$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):pyjslib['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						item = $iter17_nextval;
						$yield_value = pyjslib['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = (typeof ($add41=nextIndex)==typeof ($add42=1) && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							pyjslib['op_add']($add41,$add42));
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	pyjslib['_enumerate'].__name__ = '_enumerate';

	pyjslib['_enumerate'].__bind_type__ = 0;
	pyjslib['_enumerate'].__args__ = [null,null,['sequence']];
	pyjslib['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments.callee.__args__[3][1];

		if (pyjslib['bool']((sentinel === null))) {
			if (pyjslib['bool'](pyjslib.isIteratable(iterable))) {
				return iterable['__iter__']();
			}
			if (pyjslib['bool'](pyjslib['hasattr'](iterable, String('__getitem__')))) {
				return pyjslib._iter_getitem(iterable);
			}
			throw (pyjslib['TypeError'](String('object is not iterable')));
		}
		if (pyjslib['bool'](pyjslib.isFunction(iterable))) {
			return pyjslib._iter_callable(iterable, sentinel);
		}
		throw (pyjslib['TypeError'](String('iter(v, w): v must be callable')));
		return null;
	};
	pyjslib['iter'].__name__ = 'iter';

	pyjslib['iter'].__bind_type__ = 0;
	pyjslib['iter'].__args__ = [null,null,['iterable'],['sentinel', null]];
	pyjslib['_iter_getitem'] = function(object) {
		var err,i,$add46,$add45,$add44,$add43,$pyjs_try_err;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state.splice(2, $generator_state.length-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||(pyjslib['bool'](true));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
								$yield_value = object.__getitem__(i);
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = (typeof ($add45=i)==typeof ($add46=1) && (typeof $add45=='number'||typeof $add45=='string')?
									$add45+$add46:
									pyjslib['op_add']($add45,$add46));
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5824};
					if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 5828;
						err = $pyjs_try_err;
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	pyjslib['_iter_getitem'].__name__ = '_iter_getitem';

	pyjslib['_iter_getitem'].__bind_type__ = 0;
	pyjslib['_iter_getitem'].__args__ = [null,null,['object']];
	pyjslib['_iter_callable'] = function(callable, sentinel) {
		var nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||(pyjslib['bool'](true));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						nextval = callable();
						if (pyjslib['bool'](pyjslib['op_eq'](nextval, sentinel))) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	pyjslib['_iter_callable'].__name__ = '_iter_callable';

	pyjslib['_iter_callable'].__bind_type__ = 0;
	pyjslib['_iter_callable'].__args__ = [null,null,['callable'],['sentinel']];
	pyjslib['min'] = function() {
		var sequence = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter18_type,$iter18_iter,$iter18_array,minValue,item,$iter18_idx,$iter18_nextval;
		if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		minValue = null;
		$iter18_iter = sequence;
		if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
			$iter18_type = 0;
		} else {
			$iter18_iter = $iter18_iter.__iter__();
			$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter18_idx = 0;
		while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):pyjslib['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
			item = $iter18_nextval;
			if (pyjslib['bool']((minValue === null))) {
				minValue = item;
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['cmp'](item, minValue), (typeof ($usub6=1)=='number'?
				-$usub6:
				pyjslib['op_usub']($usub6))))) {
				minValue = item;
			}
		}
		return minValue;
	};
	pyjslib['min'].__name__ = 'min';

	pyjslib['min'].__bind_type__ = 0;
	pyjslib['min'].__args__ = ['sequence',null];
	pyjslib['max'] = function() {
		var sequence = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter19_idx,maxValue,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,item;
		if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		maxValue = null;
		$iter19_iter = sequence;
		if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
			$iter19_type = 0;
		} else {
			$iter19_iter = $iter19_iter.__iter__();
			$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter19_idx = 0;
		while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):pyjslib['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
			item = $iter19_nextval;
			if (pyjslib['bool']((maxValue === null))) {
				maxValue = item;
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['cmp'](item, maxValue), 1))) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	pyjslib['max'].__name__ = 'max';

	pyjslib['max'].__bind_type__ = 0;
	pyjslib['max'].__args__ = ['sequence',null];
	pyjslib['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];
		var $iter20_iter,$iter20_nextval,$iter20_type,$add48,i,$add47,$iter20_idx,$iter20_array;
		if (pyjslib['bool']((start === null))) {
			start = 0;
		}
		$iter20_iter = iterable;
		if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
			$iter20_type = 0;
		} else {
			$iter20_iter = $iter20_iter.__iter__();
			$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter20_idx = 0;
		while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):pyjslib['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
			i = $iter20_nextval;
			start = (typeof ($add47=start)==typeof ($add48=i) && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				pyjslib['op_add']($add47,$add48));
		}
		return start;
	};
	pyjslib['sum'].__name__ = 'sum';

	pyjslib['sum'].__bind_type__ = 0;
	pyjslib['sum'].__args__ = [null,null,['iterable'],['start', null]];
	pyjslib['next_hash_id'] = 0;
	if (pyjslib['bool'](typeof 'a'[0] == 'undefined')) {
pyjslib.__hash = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++pyjslib.next_hash_id;
            } catch (e) {
                return obj;
            }
            return pyjslib.next_hash_id;
            return obj.$H = ++pyjslib.next_hash_id;
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++pyjslib.next_hash_id);
        return pyjslib.next_hash_id;
    }
        
pyjslib.hash = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++pyjslib.next_hash_id;
            } catch (e) {
                return obj;
            }
            return pyjslib.next_hash_id;
            return obj.$H = ++pyjslib.next_hash_id;
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++pyjslib.next_hash_id);
        return pyjslib.next_hash_id;
    }
        
	}
	else {
pyjslib.__hash = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++pyjslib.next_hash_id;
        return obj.$H;
    }
        
pyjslib.hash = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++pyjslib.next_hash_id;
        return obj.$H;
    }
        
	}
	pyjslib['isObject'] = function(a) {


    return (a !== null && (typeof a == 'object')) || typeof a == 'function';
    
	};
	pyjslib['isObject'].__name__ = 'isObject';

	pyjslib['isObject'].__bind_type__ = 0;
	pyjslib['isObject'].__args__ = [null,null,['a']];
	pyjslib['isFunction'] = function(a) {


    return typeof a == 'function';
    
	};
	pyjslib['isFunction'].__name__ = 'isFunction';

	pyjslib['isFunction'].__bind_type__ = 0;
	pyjslib['isFunction'].__args__ = [null,null,['a']];
	pyjslib['callable'] = pyjslib['isFunction'];
	pyjslib['isString'] = function(a) {


    return typeof a == 'string';
    
	};
	pyjslib['isString'].__name__ = 'isString';

	pyjslib['isString'].__bind_type__ = 0;
	pyjslib['isString'].__args__ = [null,null,['a']];
	pyjslib['isNull'] = function(a) {


    return typeof a == 'object' && !a;
    
	};
	pyjslib['isNull'].__name__ = 'isNull';

	pyjslib['isNull'].__bind_type__ = 0;
	pyjslib['isNull'].__args__ = [null,null,['a']];
	pyjslib['isArray'] = function(a) {


    return pyjslib.isObject(a) && a.constructor === Array;
    
	};
	pyjslib['isArray'].__name__ = 'isArray';

	pyjslib['isArray'].__bind_type__ = 0;
	pyjslib['isArray'].__args__ = [null,null,['a']];
	pyjslib['isUndefined'] = function(a) {


    return typeof a == 'undefined';
    
	};
	pyjslib['isUndefined'].__name__ = 'isUndefined';

	pyjslib['isUndefined'].__bind_type__ = 0;
	pyjslib['isUndefined'].__args__ = [null,null,['a']];
	pyjslib['isIteratable'] = function(a) {


    if (a === null) return false;
    return typeof a.__iter__ == 'function';
    
	};
	pyjslib['isIteratable'].__name__ = 'isIteratable';

	pyjslib['isIteratable'].__bind_type__ = 0;
	pyjslib['isIteratable'].__args__ = [null,null,['a']];
	pyjslib['isNumber'] = function(a) {


    return a !== null && a.__number__ && (a.__number__ != 0x01 || isFinite(a));
    
	};
	pyjslib['isNumber'].__name__ = 'isNumber';

	pyjslib['isNumber'].__bind_type__ = 0;
	pyjslib['isNumber'].__args__ = [null,null,['a']];
	pyjslib['isInteger'] = function(a) {


    switch (a.__number__) {
        case 0x01:
            if (a != Math.floor(a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	pyjslib['isInteger'].__name__ = 'isInteger';

	pyjslib['isInteger'].__bind_type__ = 0;
	pyjslib['isInteger'].__args__ = [null,null,['a']];
	pyjslib['isSet'] = function(a) {


    if (a === null) return false;
    if (typeof a.__object == 'undefined') return false;
    switch (a.__mro__[a.__mro__.length-2].__md5__) {
        case pyjslib['set'].__md5__:
            return 1;
        case pyjslib['frozenset'].__md5__:
            return 2;
    }
    return false;

	};
	pyjslib['isSet'].__name__ = 'isSet';

	pyjslib['isSet'].__bind_type__ = 0;
	pyjslib['isSet'].__args__ = [null,null,['a']];
	pyjslib['toJSObjects'] = function(x) {
		var $attr95,$attr97,$attr96,$attr98;
		if (pyjslib['bool'](pyjslib['isArray'](x))) {

        var result = [];
        for(var k=0; k < x.length; k++) {
           var v = x[k];
           var tv = pyjslib.toJSObjects(v);
           result.push(tv);
        }
        return result;
        
		}
		if (pyjslib['bool'](pyjslib['isObject'](x))) {
			if (pyjslib['bool'](x['__number__'])) {
				return x['valueOf']();
			}
			else if (pyjslib['bool'](pyjslib['isinstance'](x, pyjslib['dict']))) {

            var o = x.getObject();
            var result = {};
            for (var i in o) {
               result[o[i][0].toString()] = pyjslib.toJSObjects(o[i][1]);
            }
            return result;
            
			}
			else if (pyjslib['bool'](pyjslib['isinstance'](x, pyjslib['list']))) {
				return pyjslib['toJSObjects'](x['__array']);
			}
			else if (pyjslib['bool'](pyjslib['hasattr'](x, String('__class__')))) {
				return x;
			}
		}
		if (pyjslib['bool'](pyjslib['isObject'](x))) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = pyjslib.toJSObjects(v);
            result[k] = tv;
            }
            return result;
         
		}
		if (pyjslib['bool'](pyjslib['isString'](x))) {
			return pyjslib['str'](x);
		}
		return x;
	};
	pyjslib['toJSObjects'].__name__ = 'toJSObjects';

	pyjslib['toJSObjects'].__bind_type__ = 0;
	pyjslib['toJSObjects'].__args__ = [null,null,['x']];
	pyjslib['sprintf'] = function(strng, args) {


    var re_dict = /([^%]*)%[(]([^)]+)[)]([#0\x20\x2B-]*)(\d+)?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_list = /([^%]*)%([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_exp = /(.*)([+-])(.*)/;

    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision.substr(1));
        }
        if (flags.indexOf('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String.fromCharCode(parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)));
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)).toUpperCase());
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision)).toUpperCase();
                break;
            case 'g':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision));
                }
                break;
            case 'G':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision)).toUpperCase();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision)).toUpperCase().toUpperCase();
                }
                break;
            case 'r':
                numeric = false;
                subst = pyjslib['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = pyjslib['str'](param);
                break;
            case 'o':
                param = pyjslib['int'](param);
                subst = param.toString(8);
                if (subst != '0' && flags.indexOf('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = pyjslib['int'](param);
                subst = param.toString(16);
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = pyjslib['int'](param);
                subst = param.toString(16).toUpperCase();
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw pyjslib['ValueError']("unsupported format character '" + conversion + "' ("+pyjslib['hex'](conversion.charCodeAt(0))+") at index " + (strng.length - remainder.length - 1));
        }
        if (minlen && subst.length < minlen) {
            if (numeric && left_padding && flags.indexOf('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst.rjust(minlen, padchar) : subst.ljust(minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_list.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; flags = a[2];
            minlen = a[3]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            if (minlen == '*') {
                if (argidx == nargs) {
                    throw pyjslib['TypeError']("not enough arguments for format string");
                }
                minlen = args.__getitem__(argidx++);
                switch (minlen.__number__) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math.floor(minlen)) {
                            break;
                        }
                    default:
                        throw pyjslib['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (argidx == nargs) {
                    throw pyjslib['TypeError']("not enough arguments for format string");
                }
                param = args.__getitem__(argidx++);
            }
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    function sprintf_dict(strng, args) {
        var a = null,
            left = null,
            flags = null,
            precision = null,
            conversion = null,
            minlen = null,
            minlen_type = null,
            key = null,
            arg = args,
            param,
            __array = result;

        argidx++;
        while (remainder) {
            a = re_dict.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; key = a[2]; flags = a[3];
            minlen = a[4]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            param = arg.__getitem__(key);
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args.__md5__ == pyjslib.tuple.__md5__ ? 'tuple': (args.__md5__ == pyjslib.dict.__md5__ ? 'dict': 'Other'));
    if (strng.indexOf("%(") >= 0) {
        if (re_dict.exec(strng) !== null) {
            if (constructor != "dict") {
                throw pyjslib['TypeError']("format requires a mapping");
            }
            sprintf_dict(strng, args);
            return result.join("");
        }
    }
    if (constructor != "tuple") {
        args = pyjslib['tuple']([args]);
    }
    nargs = args.__array.length;
    sprintf_list(strng, args);
    if (argidx != nargs) {
        throw pyjslib['TypeError']('not all arguments converted during string formatting');
    }
    return result.join("");

	};
	pyjslib['sprintf'].__name__ = 'sprintf';

	pyjslib['sprintf'].__bind_type__ = 0;
	pyjslib['sprintf'].__args__ = [null,null,['strng'],['args']];
	pyjslib['debugReport'] = function(msg) {


    alert(msg);
    
	};
	pyjslib['debugReport'].__name__ = 'debugReport';

	pyjslib['debugReport'].__bind_type__ = 0;
	pyjslib['debugReport'].__args__ = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd.console != 'undefined'
    && typeof $wnd.console.debug == 'function') {
    $printFunc = function(s) {
        $wnd.console.debug(s);
    }
} else if (   typeof $wnd.opera != 'undefined'
           && typeof $wnd.opera.postError == 'function') {
    $printFunc = function(s) {
        $wnd.opera.postError(s);
    }
}

	pyjslib['printFunc'] = function(objs, newline) {


    if ($printFunc === null) return null;
    var s = "";
    for(var i=0; i < objs.length; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    $printFunc(s);
    
	};
	pyjslib['printFunc'].__name__ = 'printFunc';

	pyjslib['printFunc'].__bind_type__ = 0;
	pyjslib['printFunc'].__args__ = [null,null,['objs'],['newline']];
	pyjslib['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $and19,k,$iter21_nextval,$iter21_idx,$iter21_type,$iter21_iter,$iter21_array,$and20,mth;
		if (pyjslib['bool']((pyjslib['bool']($and19=(bases === null))?(methods === null):$and19))) {
			throw (pyjslib['NotImplementedError'](String('type() with single argument is not supported (use isinstance())')));
		}
 var mths = {}; 
		if (pyjslib['bool'](methods)) {
			$iter21_iter = methods['keys']();
			if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
				$iter21_type = 0;
			} else {
				$iter21_iter = $iter21_iter.__iter__();
				$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter21_idx = 0;
			while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):pyjslib['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
				k = $iter21_nextval;
				mth = methods.__getitem__(k);
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if (pyjslib['bool'](bases)) {
bss = bases.__array;
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	pyjslib['type'].__name__ = 'type';

	pyjslib['type'].__bind_type__ = 0;
	pyjslib['type'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	pyjslib['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments.callee.__args__[4][1];
		var p,$mod1,$mod2;
		p = null;
p = Math.pow(x, y);
		if (pyjslib['bool']((z === null))) {
			return pyjslib['float'](p);
		}
		return pyjslib['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			$mod1%$mod2:
			pyjslib['op_mod']($mod1,$mod2)));
	};
	pyjslib['pow'].__name__ = 'pow';

	pyjslib['pow'].__bind_type__ = 0;
	pyjslib['pow'].__args__ = [null,null,['x'],['y'],['z', null]];
	pyjslib['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return '0x' + x.toString(16);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return '0x' + x.__v.toString(16);
            case 0x04:
                return x.__hex__();
        }
    }

		throw (pyjslib['TypeError'](String('hex() argument can\x27t be converted to hex')));
		return null;
	};
	pyjslib['hex'].__name__ = 'hex';

	pyjslib['hex'].__bind_type__ = 0;
	pyjslib['hex'].__args__ = [null,null,['x']];
	pyjslib['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return x == 0 ? '0': '0' + x.toString(8);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return x.__v == 0 ? '0': '0' + x.__v.toString(8);
            case 0x04:
                return x.__oct__();
        }
    }

		throw (pyjslib['TypeError'](String('oct() argument can\x27t be converted to oct')));
		return null;
	};
	pyjslib['oct'].__name__ = 'oct';

	pyjslib['oct'].__bind_type__ = 0;
	pyjslib['oct'].__args__ = [null,null,['x']];
	pyjslib['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
		var r;
		n = pyjslib['pow'](10, n);
		r = null;
r = Math.round(n*x)/n;
		return pyjslib['float'](r);
	};
	pyjslib['round'].__name__ = 'round';

	pyjslib['round'].__bind_type__ = 0;
	pyjslib['round'].__args__ = [null,null,['x'],['n', 0]];
	pyjslib['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y);
                return pyjslib['tuple']([f, x - f * y]);
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y.__v);
                return pyjslib['tuple']([f, x - f * y.__v]);
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x.__v / y);
                return pyjslib['tuple']([f, x.__v - f * y]);
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math.floor(x.__v / y.__v);
                return pyjslib['tuple']([new pyjslib['int'](f), new pyjslib['int'](x.__v - f * y.__v)]);
            case 0x0204:
                return y.__rdivmod__(new pyjslib['long'](x.__v));
            case 0x0402:
                return x.__divmod__(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__divmod__(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y.__divmod__(x);
            if (typeof x['__divmod__'] == 'function') return x.__divmod__(y);
        }
        if (!y.__number__ && typeof y['__rdivmod__'] == 'function') return y.__rdivmod__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for divmod(): \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	pyjslib['divmod'].__name__ = 'divmod';

	pyjslib['divmod'].__bind_type__ = 0;
	pyjslib['divmod'].__args__ = [null,null,['x'],['y']];
	pyjslib['all'] = function(iterable) {
		var $iter22_array,$iter22_nextval,$iter22_idx,element,$iter22_type,$iter22_iter;
		$iter22_iter = iterable;
		if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
			$iter22_type = 0;
		} else {
			$iter22_iter = $iter22_iter.__iter__();
			$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter22_idx = 0;
		while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):pyjslib['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
			element = $iter22_nextval;
			if (pyjslib['bool'](!pyjslib['bool'](element))) {
				return false;
			}
		}
		return true;
	};
	pyjslib['all'].__name__ = 'all';

	pyjslib['all'].__bind_type__ = 0;
	pyjslib['all'].__args__ = [null,null,['iterable']];
	pyjslib['any'] = function(iterable) {
		var $iter23_type,$iter23_nextval,$iter23_iter,element,$iter23_idx,$iter23_array;
		$iter23_iter = iterable;
		if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
			$iter23_type = 0;
		} else {
			$iter23_iter = $iter23_iter.__iter__();
			$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter23_idx = 0;
		while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):pyjslib['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
			element = $iter23_nextval;
			if (pyjslib['bool'](element)) {
				return true;
			}
		}
		return false;
	};
	pyjslib['any'].__name__ = 'any';

	pyjslib['any'].__bind_type__ = 0;
	pyjslib['any'].__args__ = [null,null,['iterable']];
	pyjslib['wrapped_next'] = function (iter) {
    try {
        var res = iter.next();
    } catch (e) {
        if (e === pyjslib['StopIteration']) {
            return;
        }
        throw e;
    }
    return res;
};
	pyjslib['init']();
	pyjslib['__nondynamic_modules__'] = pyjslib['dict']([]);
	pyjslib['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments.callee.__args__[3][1];
		if (typeof locals == 'undefined') locals=arguments.callee.__args__[4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments.callee.__args__[5][1];
		if (typeof level == 'undefined') level=arguments.callee.__args__[6][1];
		var $add50,$add49,module,$and22,$and21;
		module = pyjslib['___import___'](name, null);
		if (pyjslib['bool']((pyjslib['bool']($and21=!pyjslib['bool']((module === null)))?pyjslib['hasattr'](module, String('__was_initialized__')):$and21))) {
			return module;
		}
		throw (pyjslib['ImportError']((typeof ($add49=String('No module named '))==typeof ($add50=name) && (typeof $add49=='number'||typeof $add49=='string')?
			$add49+$add50:
			pyjslib['op_add']($add49,$add50))));
		return null;
	};
	pyjslib['__import__'].__name__ = '__import__';

	pyjslib['__import__'].__bind_type__ = 0;
	pyjslib['__import__'].__args__ = [null,null,['name'],['globals', pyjslib['dict']([])],['locals', pyjslib['dict']([])],['fromlist', pyjslib['list']([])],['level', (typeof ($usub8=1)=='number'?
		-$usub8:
		pyjslib['op_usub']($usub8))]];
	pyjslib['sys'] = pyjslib['___import___']('sys', null);
	pyjslib['dynamic'] = pyjslib['___import___']('dynamic', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys', 'dynamic']
*/
