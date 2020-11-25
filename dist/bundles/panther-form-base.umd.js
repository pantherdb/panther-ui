(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('uuid/v1'), require('lodash'), require('uuid'), require('rxjs/operators'), require('lodash/forEach'), require('@angular/common/http'), require('amigo2'), require('golr-conf'), require('bbop-rest-manager'), require('bbop-manager-golr'), require('bbop-response-golr'), require('@geneontology/curie-util-es5'), require('bbop-graph-panther'), require('bbop-response-barista'), require('minerva-requests'), require('class-expression'), require('bbop-manager-minerva')) :
    typeof define === 'function' && define.amd ? define('panther-form-base', ['exports', '@angular/core', 'rxjs', '@angular/forms', 'uuid/v1', 'lodash', 'uuid', 'rxjs/operators', 'lodash/forEach', '@angular/common/http', 'amigo2', 'golr-conf', 'bbop-rest-manager', 'bbop-manager-golr', 'bbop-response-golr', '@geneontology/curie-util-es5', 'bbop-graph-panther', 'bbop-response-barista', 'minerva-requests', 'class-expression', 'bbop-manager-minerva'], factory) :
    (global = global || self, factory(global['panther-form-base'] = {}, global.ng.core, global.rxjs, global.ng.forms, global.v1, global.lodash, global.uuid, global.rxjs.operators, global.forEach, global.ng.common.http, global.amigo2, global.golrConf, global.bbopRestManager, global.bbopManagerGolr, global.bbopResponseGolr, global.curieUtilEs5, global.bbopGraphPanther, global.bbopResponseBarista, global.minervaRequests, global.classExpression, global.bbopManagerMinerva));
}(this, (function (exports, core, rxjs, forms, v1, lodash, uuid, operators, forEach, http, amigo2, golrConf, bbopRestManager, bbopManagerGolr, bbopResponseGolr, curieUtilEs5, bbopGraphPanther, bbopResponseBarista, minervaRequests, classExpression, bbopManagerMinerva) { 'use strict';

    v1 = v1 && Object.prototype.hasOwnProperty.call(v1, 'default') ? v1['default'] : v1;
    forEach = forEach && Object.prototype.hasOwnProperty.call(forEach, 'default') ? forEach['default'] : forEach;
    amigo2 = amigo2 && Object.prototype.hasOwnProperty.call(amigo2, 'default') ? amigo2['default'] : amigo2;
    golrConf = golrConf && Object.prototype.hasOwnProperty.call(golrConf, 'default') ? golrConf['default'] : golrConf;
    bbopRestManager = bbopRestManager && Object.prototype.hasOwnProperty.call(bbopRestManager, 'default') ? bbopRestManager['default'] : bbopRestManager;
    bbopManagerGolr = bbopManagerGolr && Object.prototype.hasOwnProperty.call(bbopManagerGolr, 'default') ? bbopManagerGolr['default'] : bbopManagerGolr;
    bbopResponseGolr = bbopResponseGolr && Object.prototype.hasOwnProperty.call(bbopResponseGolr, 'default') ? bbopResponseGolr['default'] : bbopResponseGolr;
    bbopGraphPanther = bbopGraphPanther && Object.prototype.hasOwnProperty.call(bbopGraphPanther, 'default') ? bbopGraphPanther['default'] : bbopGraphPanther;
    bbopResponseBarista = bbopResponseBarista && Object.prototype.hasOwnProperty.call(bbopResponseBarista, 'default') ? bbopResponseBarista['default'] : bbopResponseBarista;
    minervaRequests = minervaRequests && Object.prototype.hasOwnProperty.call(minervaRequests, 'default') ? minervaRequests['default'] : minervaRequests;
    classExpression = classExpression && Object.prototype.hasOwnProperty.call(classExpression, 'default') ? classExpression['default'] : classExpression;
    bbopManagerMinerva = bbopManagerMinerva && Object.prototype.hasOwnProperty.call(bbopManagerMinerva, 'default') ? bbopManagerMinerva['default'] : bbopManagerMinerva;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var PantherFormUtils = /** @class */ (function () {
        function PantherFormUtils() {
        }
        PantherFormUtils.cleanID = function (dirtyId) {
            if (dirtyId) {
                return dirtyId.replace(/\W/g, '_');
            }
            return dirtyId;
        };
        PantherFormUtils.generateGUID = function () {
            function S4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return S4() + S4();
        };
        PantherFormUtils.handleize = function (text) {
            return text.toString().toLowerCase()
                .replace(new RegExp("/\s+/g"), '-') // Replace spaces with -
                .replace(new RegExp("/[^\w\-]+/g"), '') // Remove all non-word chars
                .replace(new RegExp("/\-\-+/g"), '-') // Replace multiple - with single -
                .replace(new RegExp("/^-+/"), '') // Trim - from start of text
                .replace(new RegExp("/-+$/"), ''); // Trim - from end of text
        };
        return PantherFormUtils;
    }());

    var Entity = /** @class */ (function () {
        function Entity(_id, _label, _url, _uuid, _modelId) {
            this.termHistory = [];
            this.id = _id;
            this.label = _label;
            this.url = _url;
            this.uuid = _uuid;
            this.modelId = _modelId;
        }
        Entity.createEntity = function (value) {
            var entity = new Entity(value.id, value.label);
            return entity;
        };
        Object.defineProperty(Entity.prototype, "uuid", {
            get: function () {
                return this._uuid;
            },
            set: function (uuid) {
                this._uuid = uuid;
                this.displayId = 'panther-node-' + PantherFormUtils.cleanID(uuid);
            },
            enumerable: true,
            configurable: true
        });
        Entity.prototype.hasValue = function () {
            var result = this.id !== null && this.id !== undefined && this.id.length > 0;
            return result;
        };
        return Entity;
    }());

    var edge = {
        placeholder: {
            id: null,
            label: null
        },
        enabledBy: {
            id: 'RO:0002333',
            label: 'enabled by'
        },
        hasInput: {
            id: 'RO:0002233',
            label: 'has input'
        },
        hasOutput: {
            id: 'RO:0002234',
            label: 'has output'
        },
        happensDuring: {
            id: 'RO:0002092',
            label: 'happens during'
        },
        locatedIn: {
            id: 'RO:0001025',
            label: 'located in'
        },
        occursIn: {
            id: 'BFO:0000066',
            label: 'occurs in'
        },
        partOf: {
            id: 'BFO:0000050',
            label: 'part of'
        },
        hasPart: {
            id: 'BFO:0000051',
            label: 'has part'
        },
        causallyUpstreamOf: {
            id: 'RO:0002411',
            label: 'causally upstream of',
        },
        causallyUpstreamOfOrWithin: {
            id: 'RO:0002418',
            label: 'causally upstream of or within',
        },
        causallyUpstreamOfPositiveEffect: {
            id: 'RO:0002304',
            label: 'causally upstream of, positive effect',
        },
        causallyUpstreamOfNegativeEffect: {
            id: 'RO:0002305',
            label: 'causally upstream of, negative effect',
        },
        causallyUpstreamOfOrWithinPositiveEffect: {
            id: 'RO:0004047',
            label: 'causally upstream of or within, positive effect',
        },
        causallyUpstreamOfOrWithinNegativeEffect: {
            id: 'RO:0004046',
            label: 'causally upstream of or within, negative effect',
        },
        directlyProvidesInput: {
            id: 'RO:0002413',
            label: 'directly provides input'
        },
        regulates: {
            id: 'RO:0002211',
            label: 'regulates'
        },
        positivelyRegulates: {
            id: 'RO:0002213',
            label: 'positively regulates'
        },
        negativelyRegulates: {
            id: 'RO:0002212',
            label: 'negatively regulates'
        },
        directlyRegulates: {
            id: 'RO:0002578',
            label: 'directly regulates'
        },
        directlyPositivelyRegulates: {
            id: 'RO:0002629',
            label: 'directly positively regulates'
        },
        directlyNegativelyRegulates: {
            id: 'RO:0002630',
            label: 'directly negatively regulates'
        },
    };
    var pantherFormConfig = {
        'annotonType': {
            'options': {
                'default': {
                    'name': 'default',
                    'label': 'Activity Unit'
                },
                'ccOnly': {
                    'name': 'ccOnly',
                    'label': 'CC Annotation'
                },
                'bpOnly': {
                    'name': 'bpOnly',
                    'label': 'BP Annotation'
                }
            }
        },
        'camDisplayType': {
            'options': {
                'triple': {
                    'name': 'triple',
                    'label': 'Simple Triple View'
                },
                'entity': {
                    'name': 'entity',
                    'label': 'Annotated Entity View'
                },
                'model': {
                    'name': 'model',
                    'label': 'Activity View'
                }
            }
        },
        'evidenceDB': {
            'options': {
                'pmid': {
                    'name': 'PMID',
                    'label': 'PMID:'
                },
                'doi': {
                    'name': 'DOI',
                    'label': 'DOI:'
                },
                'goRef': {
                    'name': 'GO_REF',
                    'label': 'GO_REF:'
                }
            }
        },
        'modelState': {
            'options': {
                'development': {
                    'name': 'development',
                    'label': 'Development'
                },
                'production': {
                    'name': 'production',
                    'label': 'Production'
                },
                'review': {
                    'name': 'review',
                    'label': 'Review'
                },
                'closed': {
                    'name': 'closed',
                    'label': 'Closed'
                },
                'delete': {
                    'name': 'delete',
                    'label': 'Delete'
                }
            }
        },
        'causalEffect': {
            'options': {
                'positive': {
                    'name': 'positive',
                    'label': 'Positive',
                    'scalar': 0
                },
                'neutral': {
                    'name': 'neutral',
                    'label': 'Unknown/neutral',
                    'scalar': -1
                },
                'negative': {
                    'name': 'negative',
                    'label': 'Negative',
                    'scalar': -2
                },
            }
        },
        'findReplaceCategory': {
            'options': {
                'term': {
                    'name': 'term',
                    'label': 'Ontology Term',
                },
                'gp': {
                    'name': 'gp',
                    'label': 'Gene Product',
                },
                'reference': {
                    'name': 'reference',
                    'label': 'Reference',
                },
            }
        },
        'mechanism': {
            'options': {
                'direct': {
                    'name': 'direct',
                    'label': 'direct (via direct binding or catalysis)',
                    'scalar': 1
                },
                'known': {
                    'name': 'known',
                    'label': 'via known regulatory process (e.g. transcription)',
                    'scalar': 2
                },
                'unknown': {
                    'name': 'unknown',
                    'label': 'Unknown/neutral',
                    'scalar': 3
                }
            }
        },
        'displaySection': {
            'gp': {
                id: 'gp',
                label: 'Gene Product'
            },
            'fd': {
                id: 'fd',
                label: 'Macromolecular Complex'
            },
        },
        'displayGroup': {
            'gp': {
                id: 'gp',
                shorthand: 'GP',
                label: 'Gene Product'
            },
            'mc': {
                id: 'mc',
                shorthand: 'MC',
                label: 'Macromolecular Complex'
            },
            'mf': {
                id: 'mf',
                shorthand: 'MF',
                label: 'Molecular Function'
            },
            'bp': {
                id: 'bp',
                shorthand: 'BP',
                label: 'Biological Process'
            },
            'cc': {
                id: 'cc',
                shorthand: 'CC',
                label: 'Location of Activity'
            }
        },
        edge: edge,
        noDuplicateEdges: [
            'RO:0002333',
            'RO:0002092',
            'BFO:0000066',
            'BFO:0000050'
        ],
        canDuplicateEdges: [{
                label: 'hasPart',
                id: 'BFO:0000051'
            }],
        evidenceAutoPopulate: {
            nd: {
                evidence: {
                    'id': 'ECO:0000307',
                    'label': 'no biological data found used in manual assertion'
                },
                reference: 'GO_REF:0000015'
            }
        },
        rootNode: {
            mf: {
                'id': 'GO:0003674',
                'label': 'molecular_function',
                'aspect': 'F'
            },
            bp: {
                'id': 'GO:0008150',
                'label': 'biological_process',
                'aspect': 'P'
            },
            cc: {
                'id': 'GO:0005575',
                'label': 'cellular_component',
                'aspect': 'C'
            }
        },
        closures: {
            mf: {
                'id': 'GO:0003674',
            },
            bp: {
                'id': 'GO:0008150',
            },
            cc: {
                'id': 'GO:0005575',
            },
            gp: {
                'id': 'CHEBI:33695',
            },
            gpHasInput: {
                'id': 'CHEBI:23367',
            },
            mc: {
                'id': 'GO:0032991'
            },
            tp: {
                'id': 'GO:0044848'
            },
            cl: {
                'id': 'CL:0000003'
            },
            ub: {
                'id': 'CARO:0000000'
            },
            taxon: {
                'id': 'CARO:0000000'
            },
            catalyticActivity: {
                'id': 'GO:0003824'
            }
        },
        // This array is arrange for matrice decison tree for causal edge 0-8 index, don't rearrange
        causalEdges: [
            Entity.createEntity(edge.directlyNegativelyRegulates),
            Entity.createEntity(edge.directlyRegulates),
            Entity.createEntity(edge.directlyPositivelyRegulates),
            Entity.createEntity(edge.negativelyRegulates),
            Entity.createEntity(edge.regulates),
            Entity.createEntity(edge.positivelyRegulates),
            Entity.createEntity(edge.causallyUpstreamOfNegativeEffect),
            Entity.createEntity(edge.causallyUpstreamOf),
            Entity.createEntity(edge.causallyUpstreamOfPositiveEffect),
            Entity.createEntity(edge.causallyUpstreamOfOrWithinNegativeEffect),
            Entity.createEntity(edge.causallyUpstreamOfOrWithinPositiveEffect),
            Entity.createEntity(edge.causallyUpstreamOfOrWithin),
            Entity.createEntity(edge.directlyProvidesInput),
        ],
        connectorProcesses: [{
                id: 'GO:0006351',
                label: 'transcription, DNA templated',
                edge: edge.causallyUpstreamOfPositiveEffect
            }, {
                id: 'GO:0006511',
                label: 'ubiquitin-dependent protein catabolic process',
                edge: edge.negativelyRegulates
            }, {
                id: 'GO:0031623',
                label: 'receptor internalization',
                edge: edge.negativelyRegulates
            }, {
                id: 'GO:0051170',
                label: 'nuclear import',
                edge: edge.positivelyRegulates
            }]
    };

    var globalWorkbenchesModel = [
        {
            'menu-name': 'Panther Form 2.0',
            'page-name': 'Panther Form 2.0',
            'type': 'model',
            'help-link': 'https://github.com/geneontology/panther-form/issues',
            'javascript': [
                'main.js'
            ],
            'css': [],
            'workbench-id': 'panther-form',
            'template-injectable': '../panther-form/workbenches/panther-form/public/inject.tmpl',
            'public-directory': '../panther-form/workbenches/panther-form/public'
        },
        {
            'menu-name': 'Panther form Legacy',
            'page-name': 'Panther form 1.0',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther-form-legacy/issues',
            'javascript': [
                'bundle.js'
            ],
            'css': [],
            'workbench-id': 'panther-form-legacy',
            'template-injectable': '../panther-form-legacy/workbenches/panther-form-legacy/public/inject.tmpl',
            'public-directory': '../panther-form-legacy/workbenches/panther-form-legacy/public'
        },
        {
            'menu-name': 'Annotation preview',
            'page-name': 'Annotation Preview',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'AnnPreviewBundle.js',
                'jquery.dataTables.min.js'
            ],
            'css': [
                'https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css'
            ],
            'workbench-id': 'annpreview',
            'template-injectable': 'workbenches/annpreview/public/inject.tmpl',
            'public-directory': 'workbenches/annpreview/public'
        },
        {
            'menu-name': 'Function companion',
            'page-name': 'Function Companion',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'CompanionBundle.js'
            ],
            'css': [],
            'workbench-id': 'companion',
            'template-injectable': 'workbenches/companion/public/inject.tmpl',
            'public-directory': 'workbenches/companion/public'
        },
        {
            'menu-name': 'Cytoscape layout tool',
            'page-name': 'Cytoscape Layout Tool',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'CytoViewBundle.js'
            ],
            'css': [],
            'workbench-id': 'cytoview',
            'template-injectable': 'workbenches/cytoview/public/inject.tmpl',
            'public-directory': 'workbenches/cytoview/public'
        },
        {
            'menu-name': 'Gosling (Panther\'s little GOOSE)',
            'page-name': 'Gosling (Panther\'s little GOOSE)',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'http://cdn.jsdelivr.net/yasqe/2.11.10/yasqe.bundled.min.js',
                'http://cdn.jsdelivr.net/yasr/2.10.8/yasr.bundled.min.js',
                'GoslingModelBundle.js'
            ],
            'css': [
                'http://cdn.jsdelivr.net/yasqe/2.11.10/yasqe.min.css',
                'http://cdn.jsdelivr.net/yasr/2.10.8/yasr.min.css'
            ],
            'workbench-id': 'gosling-model',
            'template-injectable': 'workbenches/gosling-model/public/inject.tmpl',
            'public-directory': 'workbenches/gosling-model/public'
        },
        {
            'menu-name': 'Inference explanations',
            'page-name': 'Inference explanations',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'InferredRelationsBundle.js',
                'jquery.dataTables.min.js'
            ],
            'css': [
                'https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css'
            ],
            'workbench-id': 'inferredrelations',
            'template-injectable': 'workbenches/inferredrelations/public/inject.tmpl',
            'public-directory': 'workbenches/inferredrelations/public'
        },
        {
            'menu-name': 'Macromolecular complex creator',
            'page-name': 'Macromolecular Complex Creator',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'MMCCBundle.js'
            ],
            'css': [
                'selectize.bootstrap3.css',
                'override-selectize.css'
            ],
            'workbench-id': 'mmcc',
            'template-injectable': 'workbenches/mmcc/public/inject.tmpl',
            'public-directory': 'workbenches/mmcc/public'
        },
        {
            'menu-name': 'Pathway view',
            'page-name': 'Pathway View',
            'type': 'model',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'PathwayViewBundle.js'
            ],
            'css': [],
            'workbench-id': 'pathwayview',
            'template-injectable': 'workbenches/pathwayview/public/inject.tmpl',
            'public-directory': 'workbenches/pathwayview/public'
        }
    ];
    var globalWorkbenchesUniversal = [
        {
            'menu-name': 'Panther Landing Page',
            'page-name': 'Panther Landing Page',
            'type': 'universal',
            'help-link': 'https://github.com/geneontology/panther-landing-page/issues',
            'workbench-id': 'panther-landing-page',
            'template-injectable': '../panther-landing-page/workbenches/panther-landing-page/public/inject.tmpl',
            'public-directory': '../panther-landing-page/workbenches/panther-landing-page/public'
        },
        {
            'menu-name': 'Panther Annotation Review',
            'page-name': 'Panther Annotation Review',
            'type': 'universal',
            'help-link': 'https://github.com/geneontology/panther-annotation-review/issues',
            'workbench-id': 'panther-annotation-review',
            'template-injectable': '../panther-annotation-review/workbenches/panther-annotation-review/public/inject.tmpl',
            'public-directory': '../panther-annotation-review/workbenches/panther-annotation-review/public'
        },
        {
            'menu-name': 'Panther Search',
            'page-name': 'Panther Search',
            'type': 'universal',
            'help-link': 'https://github.com/geneontology/panther-search/issues',
            'workbench-id': 'panther-search',
            'template-injectable': '../panther-search/workbenches/panther-search/public/inject.tmpl',
            'public-directory': '../panther-search/workbenches/panther-search/public'
        },
        {
            'menu-name': 'Model count (template)',
            'page-name': 'Model Count',
            'type': 'universal',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'http://vuejs.org/js/vue.min.js',
                'foo.js'
            ],
            'workbench-id': 'count',
            'template-injectable': 'workbenches/count/public/inject.tmpl',
            'public-directory': 'workbenches/count/public'
        },
        {
            'menu-name': 'Gosling (Panther\'s little GOOSE)',
            'page-name': 'Gosling (Panther\'s little GOOSE)',
            'type': 'universal',
            'help-link': 'http://github.com/geneontology/panther/issues',
            'javascript': [
                'http://cdn.jsdelivr.net/yasqe/2.11.10/yasqe.bundled.min.js',
                'http://cdn.jsdelivr.net/yasr/2.10.8/yasr.bundled.min.js',
                'GoslingUniversalBundle.js'
            ],
            'css': [
                'http://cdn.jsdelivr.net/yasqe/2.11.10/yasqe.min.css',
                'http://cdn.jsdelivr.net/yasr/2.10.8/yasr.min.css'
            ],
            'workbench-id': 'gosling-universal',
            'template-injectable': 'workbenches/gosling-universal/public/inject.tmpl',
            'public-directory': 'workbenches/gosling-universal/public'
        }
    ];

    // This file can be replaced during build by using the `fileReplacements` array.
    var baristaLocation = typeof global_barista_location !== 'undefined' ? global_barista_location : 'http://barista-dev.berkeleybop.org';
    var minervaDefinitionName = typeof global_minerva_definition_name !== 'undefined' ? global_minerva_definition_name : 'minerva_public_dev';
    var golrNeoServer = typeof global_golr_neo_server !== 'undefined'
        ? global_golr_neo_server
        : 'http://panther-golr.berkeleybop.org/';
    var golrServer = typeof global_golr_server !== 'undefined'
        ? global_golr_server
        : 'http://golr.berkeleybop.org/';
    var globalWorkbenchesModel$1 = typeof global_workbenches_model !== 'undefined'
        ? global_workbenches_model
        : globalWorkbenchesModel;
    var globalWorkbenchesUniversal$1 = typeof global_workbenches_universal !== 'undefined'
        ? global_workbenches_universal
        : globalWorkbenchesUniversal;
    var environment = {
        production: false,
        spaqrlApiUrl: 'http://rdf-internal.berkeleybop.io/blazegraph/sparql',
        // spaqrlApiUrl: 'http://rdf.geneontology.org/blazegraph/sparql',
        // gorestApiUrl: 'https://api.geneontology.cloud/'
        gorestApiUrl: 'http://localhost:3000/',
        globalGolrNeoServer: golrNeoServer,
        globalGolrServer: golrServer,
        globalMinervaDefinitionName: minervaDefinitionName,
        globalBaristaLocation: baristaLocation,
        globalWorkbenchesModel: globalWorkbenchesModel$1,
        globalWorkbenchesUniversal: globalWorkbenchesUniversal$1,
        searchApi: baristaLocation + "/search/",
        //Workbench
        pantherUrl: "" + window.location.origin,
        workbenchUrl: window.location.origin + "/workbench/",
        amigoTerm: 'http://amigo.geneontology.org/amigo/term/',
        wikidataSparqlUrl: 'https://query.wikidata.org/sparql',
        pubMedSummaryApi: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id='
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var AnnotonError = /** @class */ (function () {
        function AnnotonError(category, type, message, meta) {
            this.category = category;
            this.type = type;
            this.message = message;
            this.meta = meta;
        }
        return AnnotonError;
    }());

    var EntityLookup = /** @class */ (function () {
        function EntityLookup(category, requestParams) {
            this.results = [];
            this.category = category;
            this.requestParams = requestParams;
        }
        return EntityLookup;
    }());


    (function (AnnotonNodeType) {
        AnnotonNodeType["GoProteinContainingComplex"] = "GoProteinContainingComplex";
        AnnotonNodeType["GoCellularComponent"] = "GoCellularComponent";
        AnnotonNodeType["GoBiologicalProcess"] = "GoBiologicalProcess";
        AnnotonNodeType["GoMolecularFunction"] = "GoMolecularFunction";
        AnnotonNodeType["GoMolecularEntity"] = "GoMolecularEntity";
        AnnotonNodeType["GoChemicalEntity"] = "GoChemicalEntity";
        AnnotonNodeType["GoEvidence"] = "GoEvidence";
        AnnotonNodeType["GoCellTypeEntity"] = "GoCellTypeEntity";
        AnnotonNodeType["GoAnatomicalEntity"] = "GoAnatomicalEntity";
        AnnotonNodeType["GoOrganism"] = "GoOrganism";
        AnnotonNodeType["GoBiologicalPhase"] = "GoBiologicalPhase";
        // extra internal use
        AnnotonNodeType["GoCatalyticActivity"] = "GoCatalyticActivity";
        AnnotonNodeType["GoChemicalEntityHasInput"] = "GoChemicalEntityHasInput";
        AnnotonNodeType["GoChemicalEntityHasOutput"] = "GoChemicalEntityHasOutput";
    })(exports.AnnotonNodeType || (exports.AnnotonNodeType = {}));
    var AnnotonNode = /** @class */ (function () {
        function AnnotonNode(annotonNode) {
            this.rootTypes = [];
            this.term = new Entity('', '');
            this.termLookup = new EntityLookup();
            this.isExtension = false;
            this.nodeGroup = {};
            this.ontologyClass = [];
            this.isComplement = false;
            this.closures = [];
            this.assignedBy = null;
            this.contributor = null;
            this.isCatalyticActivity = false;
            this.isKey = false;
            this.treeLevel = 1;
            this.required = false;
            this.termRequired = false;
            this.visible = true;
            this.skipEvidence = false;
            this.errors = [];
            this.warnings = [];
            this.status = '0';
            this.relationEditable = false;
            this.showInMenu = false;
            this.insertMenuNodes = [];
            this.linkedNode = false;
            this.familyNodes = [];
            if (annotonNode) {
                this.overrideValues(annotonNode);
            }
        }
        AnnotonNode.prototype.getTerm = function () {
            return this.term;
        };
        Object.defineProperty(AnnotonNode.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
                this.displayId = PantherFormUtils.cleanID(id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AnnotonNode.prototype, "classExpression", {
            get: function () {
                return this.term.classExpression;
            },
            set: function (classExpression) {
                this.term.classExpression = classExpression;
            },
            enumerable: true,
            configurable: true
        });
        AnnotonNode.prototype.setTermOntologyClass = function (value) {
            this.ontologyClass = value;
        };
        AnnotonNode.prototype.toggleIsComplement = function () {
            var self = this;
            self.isComplement = !self.isComplement;
            self.nodeGroup.isComplement = self.isComplement;
        };
        AnnotonNode.prototype.setIsComplement = function (complement) {
            var self = this;
            self.isComplement = complement;
        };
        AnnotonNode.prototype.hasValue = function () {
            var self = this;
            return self.term.hasValue();
        };
        AnnotonNode.prototype.hasRootType = function (inRootType) {
            return lodash.find(this.rootTypes, function (rootType) {
                return rootType.id === inRootType.category;
            });
        };
        AnnotonNode.prototype.hasRootTypes = function (inRootTypes) {
            var found = false;
            for (var i = 0; i < this.rootTypes.length; i++) {
                for (var j = 0; j < inRootTypes.length; j++) {
                    if (this.rootTypes[i].id === inRootTypes[j].category) {
                        found = true;
                        break;
                    }
                }
            }
            return found;
        };
        AnnotonNode.prototype.clearValues = function () {
            var self = this;
            self.term.id = null;
            self.term.label = null;
            self.predicate.resetEvidence();
        };
        AnnotonNode.prototype.copyValues = function (node) {
            var self = this;
            self.uuid = node.uuid;
            self.term = node.term;
            self.assignedBy = node.assignedBy;
            self.isComplement = node.isComplement;
            self.isCatalyticActivity = node.isCatalyticActivity;
        };
        AnnotonNode.prototype.setTermLookup = function (value) {
            this.termLookup.requestParams = value;
        };
        AnnotonNode.prototype.setDisplay = function (value) {
            if (value) {
                this.displaySection = value.displaySection;
                this.displayGroup = value.displayGroup;
            }
        };
        AnnotonNode.prototype.enableRow = function () {
            var self = this;
            var result = true;
            if (self.nodeGroup) {
                if (self.nodeGroup.isComplement && self.treeLevel > 0) {
                    result = false;
                }
            }
            return result;
        };
        AnnotonNode.prototype.enableSubmit = function (errors) {
            var self = this;
            var result = true;
            if (self.termRequired && !self.term.id) {
                self.required = true;
                var meta = {
                    aspect: self.label
                };
                var error = new AnnotonError('error', 1, "\"" + self.label + "\" is required", meta);
                errors.push(error);
                result = false;
            }
            else {
                self.required = false;
            }
            if (!self.skipEvidence && self.hasValue()) {
                lodash.each(self.predicate.evidence, function (evidence, key) {
                    result = evidence.enableSubmit(errors, self, key + 1) && result;
                });
            }
            return result;
        };
        AnnotonNode.prototype.overrideValues = function (override) {
            if (override === void 0) { override = {}; }
            Object.assign(this, override);
        };
        return AnnotonNode;
    }());
    function categoryToClosure(categories) {
        return categories.map(function (category) {
            return category.categoryType + ":\"" + category.category + "\"";
        }).join(' OR ');
    }
    function compareTerm(a, b) {
        return a.term.id === b.term.id;
    }

    var Evidence = /** @class */ (function () {
        function Evidence() {
            this.evidence = new Entity('', '');
            this.assignedBy = new Entity('', '');
            this.evidenceRequired = false;
            this.referenceRequired = false;
            this.ontologyClass = [];
        }
        Evidence.prototype.hasValue = function () {
            var self = this;
            return self.evidence.id && self.reference;
        };
        Evidence.prototype.setEvidenceOntologyClass = function (value) {
            this.ontologyClass = value;
        };
        Evidence.prototype.setEvidence = function (value, classExpression) {
            this.evidence = value;
            if (classExpression) {
                this.classExpression = classExpression;
            }
        };
        Evidence.prototype.clearValues = function () {
            var self = this;
            self.setEvidence(new Entity('', ''));
            self.reference = '';
            self.with = '';
            self.assignedBy = new Entity('', '');
        };
        Evidence.prototype.copyValues = function (evidence, except) {
            var self = this;
            self.setEvidence(evidence.evidence);
            !lodash.includes(except, 'reference') ? self.reference = evidence.reference : null;
            !lodash.includes(except, 'with') ? self.with = evidence.with : null;
            !lodash.includes(except, 'assignedBy') ? self.assignedBy = evidence.assignedBy : null;
        };
        Evidence.prototype.isEvidenceEqual = function (evidence) {
            var self = this;
            var result = true;
            result = result && lodash.isEqual(self.evidence, evidence.evidence);
            result = result && lodash.isEqual(self.reference, evidence.reference);
            result = result && lodash.isEqual(self.with, evidence.with);
            return result;
        };
        Evidence.prototype.enableSubmit = function (errors, node, position) {
            var self = this;
            var result = true;
            var meta = {
                aspect: node.label
            };
            if (self.evidence.id) {
                self.evidenceRequired = false;
            }
            else {
                self.evidenceRequired = true;
                var error = new AnnotonError('error', 1, "No evidence for \"" + node.label + "\": on evidence(" + position + ")", meta);
                errors.push(error);
                result = false;
            }
            if (self.evidence.id && !self.reference) {
                var error = new AnnotonError('error', 1, "You provided an evidence for \"" + node.label + "\" but no reference: on evidence(" + position + ")", meta);
                errors.push(error);
                self.referenceRequired = true;
                result = false;
            }
            else {
                self.referenceRequired = false;
            }
            if (self.reference) {
                result = self._enableReferenceSubmit(errors, self.reference, node, position);
            }
            return result;
        };
        Evidence.prototype._enableReferenceSubmit = function (errors, reference, node, position) {
            var meta = {
                aspect: node.label
            };
            if (!reference.includes(':')) {
                var error = new AnnotonError('error', 1, "Use DB:accession format for reference \"" + node.label + "\" on evidence(" + position + ")", meta);
                errors.push(error);
                return false;
            }
            var DBAccession = reference.split(':');
            var db = DBAccession[0].trim().toLowerCase();
            var accession = DBAccession[1].trim().toLowerCase();
            var dbs = ['pmid', 'go_ref', 'doi'];
            /*
            if (!dbs.includes(db)) {
              const error = new AnnotonError('error', 1,
                `Please enter either PMID, DOI or GO_REF for "${node.label}" on evidence(${position})`,
                meta);
              errors.push(error);
              return false;
            } */
            if (accession === '') {
                var error = new AnnotonError('error', 1, "\"" + db + "\" accession is required \"" + node.label + "\" on evidence(" + position + ")", meta);
                errors.push(error);
                return false;
            }
            return true;
        };
        return Evidence;
    }());
    function compareEvidence(a, b) {
        return a.evidence.id === b.evidence.id
            && a.reference === b.reference
            && a.with === b.with;
    }
    function compareEvidenceEvidence(a, b) {
        return a.evidence.id === b.evidence.id;
    }
    function compareEvidenceReference(a, b) {
        return a.reference === b.reference;
    }
    function compareEvidenceWith(a, b) {
        return a.with === b.with;
    }

    var Predicate = /** @class */ (function () {
        function Predicate(edge, evidence) {
            // Because there is one predicate and multiple evidence
            this.evidenceLookup = new EntityLookup();
            this.referenceLookup = new EntityLookup();
            this.withLookup = new EntityLookup();
            this._evidenceMeta = {
                lookupBase: '',
                ontologyClass: 'eco'
            };
            this.edge = edge;
            this.evidence = evidence ? evidence : [];
        }
        Predicate.prototype.setEvidenceMeta = function (ontologyClass, lookupBase) {
            this._evidenceMeta.lookupBase = lookupBase;
            this._evidenceMeta.ontologyClass = ontologyClass;
            this.evidenceLookup.requestParams = JSON.parse(JSON.stringify(lookupBase));
            this.addEvidence();
        };
        Predicate.prototype.setEvidence = function (evidences, except) {
            var self = this;
            self.evidence = [];
            lodash.each(evidences, function (srcEvidence, i) {
                self.addEvidence(srcEvidence);
                //destEvidence.copyValues(srcEvidence, except);
            });
        };
        Predicate.prototype.addEvidence = function (srcEvidence) {
            var self = this;
            var evidence = srcEvidence ? lodash.cloneDeep(srcEvidence) : new Evidence();
            evidence.setEvidenceOntologyClass(self._evidenceMeta.ontologyClass);
            self.evidence.push(evidence);
            return evidence;
        };
        Predicate.prototype.removeEvidence = function (index) {
            var self = this;
            if (index === 0 && self.evidence.length === 1) {
                self.evidence[0].clearValues();
            }
            else {
                self.evidence.splice(index, 1);
            }
        };
        Predicate.prototype.resetEvidence = function () {
            var self = this;
            self.evidence = [self.evidence[0]];
            self.evidence[0].clearValues();
        };
        Predicate.prototype.getEvidenceById = function (id) {
            var self = this;
            return lodash.find(self.evidence, function (evidence) {
                return evidence.uuid === id;
            });
        };
        return Predicate;
    }());

    var baseRequestParams = {
        defType: 'edismax',
        indent: 'on',
        qt: 'standard',
        wt: 'json',
        rows: '50',
        start: '0',
        fl: '*,score',
        'facet': true,
        'facet.mincount': 1,
        'facet.sort': 'count',
        'facet.limit': '50',
        'json.nl': 'arrarr',
        packet: '1',
        callback_type: 'search',
        'facet.field': [
            'source',
            'subset',
            'isa_closure_label',
            'is_obsolete'
        ],
        qf: [
            'annotation_class^3',
            'annotation_class_label_searchable^5.5',
            'description_searchable^1',
            'comment_searchable^0.5',
            'synonym_searchable^1',
            'alternate_id^1',
            'isa_closure^1',
            'isa_closure_label_searchable^1'
        ],
        _: Date.now()
    };
    var GoProteinContainingComplex = {
        id: exports.AnnotonNodeType.GoProteinContainingComplex,
        category: 'GO:0032991',
        categoryType: 'isa_closure',
    };
    var GoCellularComponent = {
        id: exports.AnnotonNodeType.GoCellularComponent,
        category: 'GO:0005575',
        categoryType: 'isa_closure',
    };
    var GoBiologicalProcess = {
        id: exports.AnnotonNodeType.GoBiologicalProcess,
        category: 'GO:0008150',
        categoryType: 'isa_closure',
    };
    var GoMolecularFunction = {
        id: exports.AnnotonNodeType.GoMolecularFunction,
        category: 'GO:0003674',
        categoryType: 'isa_closure',
    };
    var GoMolecularEntity = {
        id: exports.AnnotonNodeType.GoMolecularEntity,
        category: 'CHEBI:33695',
        categoryType: 'isa_closure',
    };
    var GoChemicalEntity = {
        id: exports.AnnotonNodeType.GoChemicalEntity,
        category: 'CHEBI:24431',
        categoryType: 'isa_closure',
    };
    var GoEvidence = {
        id: exports.AnnotonNodeType.GoEvidence,
        category: 'ECO:0000352',
        categoryType: 'isa_closure',
    };
    var GoCellTypeEntity = {
        id: exports.AnnotonNodeType.GoCellTypeEntity,
        category: 'CL:0000003',
        categoryType: 'isa_closure',
    };
    var GoAnatomicalEntity = {
        id: exports.AnnotonNodeType.GoAnatomicalEntity,
        category: 'CARO:0000000',
        categoryType: 'isa_closure',
    };
    var GoOrganism = {
        id: exports.AnnotonNodeType.GoOrganism,
        category: 'NCBITaxon',
        categoryType: 'idspace',
    };
    var GoBiologicalPhase = {
        id: exports.AnnotonNodeType.GoBiologicalPhase,
        category: 'GO:0044848',
        categoryType: 'isa_closure',
    };
    var GoCatalyticActivity = {
        id: exports.AnnotonNodeType.GoCatalyticActivity,
        category: 'GO:0003824',
        categoryType: 'isa_closure',
    };
    var EntityCategories = [
        [GoProteinContainingComplex],
        [GoCellularComponent],
        [GoBiologicalProcess],
        [GoMolecularFunction],
        [GoMolecularEntity],
        [GoChemicalEntity],
        [GoEvidence],
        [GoCellTypeEntity],
        [GoAnatomicalEntity],
        [GoOrganism],
        [GoBiologicalPhase],
        [GoChemicalEntity, GoProteinContainingComplex],
        [GoChemicalEntity, GoAnatomicalEntity, GoProteinContainingComplex]
        // [GoCatalyticActivity]
    ];
    var generateBaseTerm = function (goCategories, override) {
        if (override === void 0) { override = {}; }
        var annotonNode = new AnnotonNode();
        var predicate = new Predicate(null);
        var fqTermCategory = categoryToClosure(goCategories);
        var fqEvidenceCategory = categoryToClosure([GoEvidence]);
        predicate.setEvidenceMeta('eco', Object.assign({}, JSON.parse(JSON.stringify(baseRequestParams)), {
            fq: [
                'document_category:"ontology_class"',
                fqEvidenceCategory
            ],
        }));
        annotonNode.predicate = predicate;
        if (goCategories && goCategories.length > 0) {
            annotonNode.termLookup = new EntityLookup(null, Object.assign({}, JSON.parse(JSON.stringify(baseRequestParams)), {
                fq: [
                    'document_category:"ontology_class"',
                    fqTermCategory
                ],
            }));
        }
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateGoTerm = function () {
        var annotonNode = generateBaseTerm();
        annotonNode.id = 'goterm';
        annotonNode.ontologyClass = ['go'];
        annotonNode.termLookup = new EntityLookup(null, Object.assign({}, JSON.parse(JSON.stringify(baseRequestParams)), {
            fq: [
                'document_category:"ontology_class"',
                'isa_closure:"GO:0003674" OR isa_closure:"GO:0008150" OR isa_closure:"GO:0005575"',
            ],
        }));
        return annotonNode;
    };
    var generateProteinContainingComplex = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoProteinContainingComplex]);
        annotonNode.id = GoProteinContainingComplex.id;
        annotonNode.type = GoProteinContainingComplex.id;
        annotonNode.category = [GoProteinContainingComplex];
        annotonNode.label = 'Macromolecular Complex';
        annotonNode.displaySection = pantherFormConfig.displaySection.gp;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.mc;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateMolecularEntity = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoMolecularEntity]);
        annotonNode.id = GoMolecularEntity.id;
        annotonNode.type = GoMolecularEntity.id;
        annotonNode.category = [GoMolecularEntity];
        annotonNode.label = 'Gene Product';
        annotonNode.displaySection = pantherFormConfig.displaySection.gp;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.gp;
        annotonNode.ontologyClass = [];
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateMolecularFunction = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoMolecularFunction]);
        annotonNode.id = GoMolecularFunction.id;
        annotonNode.category = [GoMolecularFunction];
        annotonNode.label = 'Molecular Function';
        annotonNode.aspect = 'F';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.mf;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateBiologicalProcess = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoBiologicalProcess]);
        annotonNode.id = GoBiologicalProcess.id;
        annotonNode.category = [GoBiologicalProcess];
        annotonNode.label = 'MF part of Biological Process';
        annotonNode.aspect = 'P';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.bp;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateCellularComponent = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoCellularComponent]);
        annotonNode.id = GoCellularComponent.id;
        annotonNode.category = [GoCellularComponent];
        annotonNode.label = 'MF occurs in Cellular Component';
        annotonNode.aspect = 'C';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.cc;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateChemicalEntity = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoChemicalEntity]);
        annotonNode.id = GoChemicalEntity.id;
        annotonNode.category = [GoChemicalEntity];
        annotonNode.label = 'Has Input (GP/Chemical)';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.mf;
        annotonNode.isExtension = true;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateBiologicalPhase = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoBiologicalPhase]);
        annotonNode.id = GoBiologicalPhase.id;
        annotonNode.category = [GoBiologicalPhase];
        annotonNode.label = 'Happens During (Temporal Phase)';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.mf;
        annotonNode.isExtension = true;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateCellTypeEntity = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoCellTypeEntity]);
        annotonNode.id = GoCellTypeEntity.id;
        annotonNode.category = [GoCellTypeEntity];
        annotonNode.label = 'Part Of (Cell Type)';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.cc;
        annotonNode.isExtension = true;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateAnatomicalEntity = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoAnatomicalEntity]);
        annotonNode.id = GoAnatomicalEntity.id;
        annotonNode.category = [GoAnatomicalEntity];
        annotonNode.label = 'Part Of (Anatomy)';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.cc;
        annotonNode.isExtension = true;
        annotonNode.overrideValues(override);
        return annotonNode;
    };
    var generateOrganism = function (override) {
        if (override === void 0) { override = {}; }
        var annotonNode = generateBaseTerm([GoOrganism]);
        annotonNode.id = GoOrganism.id;
        annotonNode.category = [GoOrganism];
        annotonNode.label = 'Part Of (Organism)';
        annotonNode.displaySection = pantherFormConfig.displaySection.fd;
        annotonNode.displayGroup = pantherFormConfig.displayGroup.cc;
        annotonNode.treeLevel = 5;
        annotonNode.isExtension = true;
        annotonNode.overrideValues(override);
        return annotonNode;
    };

    var entityDefinition = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GoProteinContainingComplex: GoProteinContainingComplex,
        GoCellularComponent: GoCellularComponent,
        GoBiologicalProcess: GoBiologicalProcess,
        GoMolecularFunction: GoMolecularFunction,
        GoMolecularEntity: GoMolecularEntity,
        GoChemicalEntity: GoChemicalEntity,
        GoEvidence: GoEvidence,
        GoCellTypeEntity: GoCellTypeEntity,
        GoAnatomicalEntity: GoAnatomicalEntity,
        GoOrganism: GoOrganism,
        GoBiologicalPhase: GoBiologicalPhase,
        GoCatalyticActivity: GoCatalyticActivity,
        EntityCategories: EntityCategories,
        generateBaseTerm: generateBaseTerm,
        generateGoTerm: generateGoTerm,
        generateProteinContainingComplex: generateProteinContainingComplex,
        generateMolecularEntity: generateMolecularEntity,
        generateMolecularFunction: generateMolecularFunction,
        generateBiologicalProcess: generateBiologicalProcess,
        generateCellularComponent: generateCellularComponent,
        generateChemicalEntity: generateChemicalEntity,
        generateBiologicalPhase: generateBiologicalPhase,
        generateCellTypeEntity: generateCellTypeEntity,
        generateAnatomicalEntity: generateAnatomicalEntity,
        generateOrganism: generateOrganism
    });

    var Triple = /** @class */ (function () {
        function Triple(subject, predicate, object) {
            this._grid = [];
            this.id = v1();
            this.subject = subject;
            this.object = object;
            this.predicate = predicate;
        }
        Object.defineProperty(Triple.prototype, "grid", {
            get: function () {
                var self = this;
                if (self._grid.length === 0) {
                    this.generateGrid();
                }
                return this._grid;
            },
            enumerable: true,
            configurable: true
        });
        Triple.prototype.generateGrid = function () {
            var self = this;
            this._grid = [];
            this._grid.push({
                subject: this.subject.getTerm(),
                relationship: this.predicate,
                object: this.object.getTerm(),
                aspect: '',
                evidence: this.predicate.evidence.length > 0 ? this.predicate[0].evidence : {},
                reference: this.predicate.evidence.length > 0 ? this.predicate[0].reference : '',
                with: this.predicate.evidence.length > 0 ? this.predicate[0].with : '',
                assignedBy: this.predicate.evidence.length > 0 ? this.predicate[0].assignedBy : '',
                subjectNode: this.subject,
                objectNode: this.object,
            });
            for (var i = 1; i < this.predicate.evidence.length; i++) {
                self._grid.push({
                    evidence: this.predicate[i].evidence,
                    reference: this.predicate[i].reference,
                    with: this.predicate[i].with,
                    assignedBy: this.predicate[i].assignedBy,
                    subjectNode: this.subject,
                    objectNode: this.object,
                });
            }
        };
        return Triple;
    }());

    var empty = function () { return ({ _nodes: {}, _edges: {} }); };
    function addNode(graph, node, key) {
        graph._nodes[key] = node;
        graph._edges[key] = [];
        return graph;
    }
    function findNode(graph, key) {
        return graph._nodes[key];
    }
    function removeNode(graph, key) {
        delete graph._nodes[key];
    }
    function getNodes(graph) {
        return graph._nodes;
    }
    function getEdges(graph, id) {
        if (id) {
            return graph._edges[id];
        }
        var edges = [];
        Object.keys(graph._edges).forEach(function (key) {
            edges.push.apply(edges, __spread(graph._edges[key]));
        });
        return edges;
    }
    function addEdge(graph, edge) {
        graph._edges[edge.subjectId].push(edge);
        return graph;
    }
    function findEdge(graph, edge) {
        return lodash.find(graph._edges[edge.subjectId], function (e) {
            return e.objectId === edge.objectId;
        });
    }
    function removeEdge(graph, edge) {
        lodash.remove(graph._edges[edge.subjectId], function (e) {
            return e.objectId === edge.objectId;
        });
        return graph;
    }
    function compareNode(a, b) {
        return a.uuid === b.uuid;
    }
    function compareTriple(a, b) {
        return a.subjectId === b.subjectId && a.objectId === b.objectId;
    }
    function addGraph(graph1, graph2, toNodeId, fromNodeId) {
        var keys1 = Object.keys(getNodes(graph1));
        var nodes2 = getNodes(graph2);
        var edges1 = getEdges(graph1);
        var edges2 = getEdges(graph2);
        lodash.each(nodes2, function (node, key) {
            //   const node = findNode(graph1, key);        
            addNode(graph1, node, key);
        });
        lodash.each(edges2, function (edge) {
            if (edge.objectId === toNodeId) {
            }
            addEdge(graph1, edge);
        });
    }
    function subtractNodes(graph1, graph2) {
        var keys1 = Object.values(getNodes(graph1));
        var keys2 = Object.values(getNodes(graph2));
        return lodash.differenceWith(keys1, keys2, compareNode);
    }
    function subtractEdges(graph1, graph2) {
        var edges1 = getEdges(graph1);
        var edges2 = getEdges(graph2);
        var edges = lodash.differenceWith(edges1, edges2, compareTriple);
        return edges.map(function (edge) {
            return edge.metadata;
        });
    }
    function subtractGraph(graph1, graph2) {
        var result = { _nodes: {}, _edges: {} };
        var keys1 = Object.keys(getNodes(graph1));
        var keys2 = Object.keys(getNodes(graph2));
        var edges1 = getEdges(graph1);
        var edges2 = getEdges(graph2);
        var nodeIds = lodash.difference(keys1, keys2);
        var edgeIds = lodash.differenceWith(edges1, edges2, compareTriple);
        lodash.each(nodeIds, function (nodeId) {
            var node = findNode(graph1, nodeId);
            addNode(result, node, nodeId);
        });
        lodash.each(edgeIds, function (edge) {
            // addEdge(result, edge);
        });
        return result;
    }

    var SaeGraph = /** @class */ (function () {
        function SaeGraph() {
            this.graph = { _nodes: {}, _edges: {} };
        }
        Object.defineProperty(SaeGraph.prototype, "nodes", {
            get: function () {
                var keyNodes = getNodes(this.graph);
                return Object.values(keyNodes);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SaeGraph.prototype, "edges", {
            get: function () {
                return this.getEdges(null);
            },
            enumerable: true,
            configurable: true
        });
        SaeGraph.prototype.getNode = function (id) {
            return findNode(this.graph, id);
        };
        SaeGraph.prototype.addNode = function (node) {
            return addNode(this.graph, node, node.id);
        };
        SaeGraph.prototype.addNodes = function () {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            var self = this;
            nodes.forEach(function (node) {
                self.addNode(node);
            });
        };
        SaeGraph.prototype.removeNode = function (node) {
            removeNode(this.graph, node.id);
        };
        SaeGraph.prototype.addEdge = function (subjectNode, objectNode, predicate) {
            var triple = new Triple(subjectNode, predicate, objectNode);
            var edge = { subjectId: subjectNode.id, objectId: objectNode.id, metadata: triple };
            addEdge(this.graph, edge);
        };
        SaeGraph.prototype.addEdgeById = function (sourceId, objectId, predicate) {
            var source = this.getNode(sourceId);
            var object = this.getNode(objectId);
            this.addEdge(source, object, predicate);
        };
        SaeGraph.prototype.editEdge = function (subjectId, objectId, srcEdge) {
            var destEdge = this.getEdge(subjectId, objectId);
        };
        SaeGraph.prototype.getEdge = function (subjectId, objectId) {
            var srcEdge = { subjectId: subjectId, objectId: objectId, metadata: null };
            var destEdge = findEdge(this.graph, srcEdge);
            return destEdge ? destEdge.metadata : null;
        };
        SaeGraph.prototype.getEdges = function (id) {
            var edges = getEdges(this.graph, id);
            return edges.map(function (edge) {
                return edge.metadata;
            });
        };
        SaeGraph.prototype.removeEdge = function (subjectNode, objectNode, predicate) {
            var triple = new Triple(subjectNode, predicate, objectNode);
            var edge = { subjectId: subjectNode.id, objectId: objectNode.id, metadata: triple };
            removeEdge(this.graph, edge);
        };
        SaeGraph.prototype.addSubGraph = function (graph, toNodeId, fromNodeId) {
            var self = this;
            var fromEdges = self.getEdges(fromNodeId);
            var fromNode = self.getNode(fromNodeId);
            var startingEdges = self.getEdges(toNodeId);
            lodash.each(startingEdges, function (triple) {
                self._subgraphGraphDFS(self.graph, triple.subject, triple.object, triple.predicate, triple.predicate);
            });
            return self.graph;
        };
        SaeGraph.prototype.getTrimmedGraph = function (startNodeId) {
            var self = this;
            var graph = { _nodes: {}, _edges: {} };
            var startingEdges = self.getEdges(startNodeId);
            var startingNode = self.getNode(startNodeId);
            addNode(graph, startingNode, startingNode.id);
            lodash.each(startingEdges, function (triple) {
                self._trimGraphDFS(graph, triple.subject, triple.object, triple.predicate, triple.predicate);
            });
            return graph;
        };
        SaeGraph.prototype.edgeTypeExist = function (id, edgeId, subjectType, objectType) {
            var self = this;
            var result = lodash.find(self.getEdges(id), function (triple) {
                return triple.predicate.edge.id === edgeId &&
                    triple.subject.type === subjectType &&
                    triple.object.type === objectType;
            });
            return result;
        };
        SaeGraph.prototype.resetGraph = function () {
            this.graph = this.graph = { _nodes: {}, _edges: {} };
        };
        SaeGraph.prototype._trimGraphDFS = function (graph, subjectNode, objectNode, subjectPredicate, objectPredicate) {
            var self = this;
            if (objectNode.hasValue()) {
                var destPredicate = new Predicate(subjectPredicate.edge, objectPredicate.evidence);
                var triple = new Triple(subjectNode, destPredicate, objectNode);
                var edge = { subjectId: subjectNode.id, objectId: objectNode.id, metadata: triple };
                addNode(graph, objectNode, objectNode.id);
                addEdge(graph, edge);
            }
            lodash.each(self.getEdges(objectNode.id), function (triple) {
                self._trimGraphDFS(graph, objectNode.hasValue() ? objectNode : subjectNode, triple.object, objectNode.hasValue() ? triple.predicate : subjectPredicate, triple.predicate);
            });
        };
        SaeGraph.prototype._subgraphGraphDFS = function (graph, subjectNode, objectNode, subjectPredicate, objectPredicate) {
            var self = this;
            if (objectNode.hasValue()) {
                var destPredicate = new Predicate(subjectPredicate.edge, objectPredicate.evidence);
                var triple = new Triple(subjectNode, destPredicate, objectNode);
                var edge = { subjectId: subjectNode.id, objectId: objectNode.id, metadata: triple };
                addNode(graph, objectNode, objectNode.id);
                addEdge(graph, edge);
            }
            lodash.each(self.getEdges(objectNode.id), function (triple) {
                self._subgraphGraphDFS(graph, objectNode.hasValue() ? objectNode : subjectNode, triple.object, objectNode.hasValue() ? triple.predicate : subjectPredicate, triple.predicate);
            });
        };
        return SaeGraph;
    }());

    var AnnotonNodeClosure = /** @class */ (function () {
        function AnnotonNodeClosure(term, closure) {
            this.term = term;
            this.closure = closure;
        }
        return AnnotonNodeClosure;
    }());

    var Rule = /** @class */ (function () {
        function Rule(name, label, description, url) {
            this.name = name;
            this.label = label;
            this.description = description;
            this.url = url;
        }
        return Rule;
    }());

    var ConditionRule = /** @class */ (function (_super) {
        __extends(ConditionRule, _super);
        function ConditionRule(name, label, description, url) {
            var _this = _super.call(this, name, label, description, url) || this;
            _this.condition = false;
            return _this;
        }
        return ConditionRule;
    }(Rule));

    var DirectionRule = /** @class */ (function (_super) {
        __extends(DirectionRule, _super);
        function DirectionRule(name, label, description, url) {
            return _super.call(this, name, label, description, url) || this;
        }
        return DirectionRule;
    }(Rule));

    var MechanismRule = /** @class */ (function (_super) {
        __extends(MechanismRule, _super);
        function MechanismRule(name, label, description, url) {
            return _super.call(this, name, label, description, url) || this;
        }
        return MechanismRule;
    }(Rule));

    var ConnectorRule = /** @class */ (function () {
        function ConnectorRule() {
            this.mechanism = new MechanismRule('mechanism', 'Do you know the mechanism for how the upstream activity affects the downstream activity?');
            this.effectDirection = new DirectionRule('effectDirection', 'Direction of Effect?');
            this.subjectMFCatalyticActivity = new ConditionRule('subjectMFCatalyticActivity', 'Is upstream MF a Catalytic Activity');
            this.objectMFCatalyticActivity = new ConditionRule('objectMFCatalyticActivity', 'Is downstream MF a Catalytic Activity');
            this.activityRegulatingProcess = new ConditionRule('activityRegulatingProcess', 'Activity regulating process');
            this.notes = [
                this.subjectMFCatalyticActivity,
                this.objectMFCatalyticActivity,
                this.mechanism,
                this.activityRegulatingProcess
            ];
            this.displaySection = {
                mechanism: true,
                causalEffect: true,
                process: false,
            };
            this.mechanism.mechanism = pantherFormConfig.mechanism.options.direct;
            this.effectDirection.direction = pantherFormConfig.causalEffect.options.positive;
        }
        return ConnectorRule;
    }());


    (function (ConnectorState) {
        ConnectorState[ConnectorState["creation"] = 1] = "creation";
        ConnectorState[ConnectorState["editing"] = 2] = "editing";
    })(exports.ConnectorState || (exports.ConnectorState = {}));

    (function (ConnectorType) {
        ConnectorType[ConnectorType["basic"] = 1] = "basic";
        ConnectorType[ConnectorType["intermediate"] = 2] = "intermediate";
    })(exports.ConnectorType || (exports.ConnectorType = {}));
    var ConnectorAnnoton = /** @class */ (function (_super) {
        __extends(ConnectorAnnoton, _super);
        function ConnectorAnnoton(upstreamNode, downstreamNode, state) {
            var _this = _super.call(this) || this;
            _this.type = exports.ConnectorType.basic;
            _this.graphPreview = {
                nodes: [],
                edges: []
            };
            _this.id = v1();
            _this.upstreamNode = upstreamNode;
            _this.downstreamNode = downstreamNode;
            _this.state = state ? state : exports.ConnectorState.creation;
            _this.rule = new ConnectorRule();
            if (upstreamNode) {
                _this.rule.subjectMFCatalyticActivity.condition = upstreamNode.isCatalyticActivity;
                _this.rule.objectMFCatalyticActivity.condition = downstreamNode.isCatalyticActivity;
            }
            return _this;
        }
        ConnectorAnnoton.prototype.setRule = function () {
            var self = this;
            var question = self.getEffectDirectionByEdge(self.rule.r1Edge);
            self.rule.effectDirection.direction = question.effectDirection;
            self.rule.mechanism.mechanism = question.mechanism;
            if (self.type === exports.ConnectorType.basic) {
                self.rule.displaySection.process = false;
            }
            else if (self.type === exports.ConnectorType.intermediate) {
                self.rule.displaySection.process = true;
            }
        };
        ConnectorAnnoton.prototype.checkConnection = function (value) {
            var self = this;
            self.rule.mechanism.mechanism = value.mechanism;
            self.rule.displaySection.causalEffect = true;
            if (value.mechanism === pantherFormConfig.mechanism.options.known) {
                self.rule.displaySection.process = true;
                self.type = exports.ConnectorType.intermediate;
            }
            else {
                self.rule.displaySection.process = false;
                self.type = exports.ConnectorType.basic;
            }
            if (value.process) {
                self.processNode.term = new Entity(value.process.id, value.process.label);
                self.rule.r2Edge = value.process.edge;
            }
            self.rule.r1Edge = this.getCausalConnectorEdge(value.causalEffect, value.mechanism);
            self.setPreview();
        };
        ConnectorAnnoton.prototype.getEffectDirectionByEdge = function (edge) {
            var effectDirection = null;
            var mechanism = null;
            var index = lodash.findIndex(pantherFormConfig.causalEdges, { id: edge.id }) + 1;
            if (index < 10 && index > 0) {
                var x = (index % 3) - 3;
                var y = (index - x) / 3;
                effectDirection = lodash.find(pantherFormConfig.causalEffect.options, { scalar: x });
                mechanism = lodash.find(pantherFormConfig.mechanism.options, { scalar: y });
            }
            return { effectDirection: effectDirection, mechanism: mechanism };
        };
        ConnectorAnnoton.prototype.getCausalConnectorEdge = function (causalEffect, mechanism) {
            var self = this;
            var result;
            var index = causalEffect.scalar + (mechanism.scalar * 3) - 1;
            result = pantherFormConfig.causalEdges[index];
            return result;
        };
        ConnectorAnnoton.prototype.setPreview = function () {
            this.graphPreview.nodes = __spread(this._getPreviewNodes());
            this.graphPreview.edges = __spread(this._getPreviewEdges());
        };
        ConnectorAnnoton.prototype._getPreviewNodes = function () {
            var self = this;
            var nodes = [];
            var annotonNodes = [self.upstreamNode, self.downstreamNode];
            if (self.type === exports.ConnectorType.intermediate) {
                annotonNodes.push(self.processNode);
                if (self.hasInputNode.hasValue()) {
                    annotonNodes.push(self.hasInputNode);
                }
            }
            nodes = annotonNodes.map(function (node) {
                return {
                    id: node.id,
                    label: node.term.label ? node.term.label : '',
                };
            });
            return nodes;
        };
        ConnectorAnnoton.prototype.copyValues = function (currentConnectorAnnoton) {
            var self = this;
            self.processNode.term = lodash.cloneDeep(currentConnectorAnnoton.processNode.term);
            self.hasInputNode.term = lodash.cloneDeep(currentConnectorAnnoton.hasInputNode.term);
            self.rule = lodash.cloneDeep(currentConnectorAnnoton.rule);
            self.type = currentConnectorAnnoton.type;
            self.state = currentConnectorAnnoton.state;
        };
        ConnectorAnnoton.prototype.createSave = function () {
            var self = this;
            var saveData = {
                title: '',
                nodes: [],
                triples: [],
                graph: null
            };
            var graph = self.getTrimmedGraph('upstream');
            var keyNodes = getNodes(graph);
            var edges = getEdges(graph);
            var triples = edges.map(function (edge) {
                return edge.metadata;
            });
            saveData.nodes = Object.values(keyNodes);
            saveData.triples = triples;
            saveData.graph = graph;
            return saveData;
        };
        ConnectorAnnoton.prototype.createEdit = function (srcAnnoton) {
            var self = this;
            var srcSaveData = srcAnnoton.createSave();
            var destSaveData = self.createSave();
            var saveData = {
                srcNodes: srcSaveData.nodes,
                destNodes: destSaveData.nodes,
                srcTriples: srcSaveData.triples,
                destTriples: destSaveData.triples,
                removeIds: subtractNodes(srcSaveData.graph, destSaveData.graph).map(function (node) {
                    return node.uuid;
                }),
                removeTriples: subtractEdges(srcSaveData.graph, destSaveData.graph)
            };
            return saveData;
        };
        ConnectorAnnoton.prototype.createDelete = function () {
            var self = this;
            var uuids = [];
            var deleteData = {
                uuids: [],
                triples: [],
                nodes: []
            };
            if (this.type === exports.ConnectorType.basic) {
                deleteData.triples.push(new Triple(self.upstreamNode, self.predicate, self.downstreamNode));
            }
            else if (this.type === exports.ConnectorType.intermediate) {
                uuids.push(self.processNode.uuid);
                if (self.hasInputNode.hasValue()) {
                    uuids.push(self.hasInputNode.uuid);
                }
            }
            deleteData.uuids = uuids;
            return deleteData;
        };
        ConnectorAnnoton.prototype.createGraph = function (srcEvidence) {
            var self = this;
            var evidence = srcEvidence ? srcEvidence : self.predicate.evidence;
            if (this.type === exports.ConnectorType.basic) {
                this.addNodes(self.upstreamNode, self.downstreamNode);
                self.addEdge(self.upstreamNode, self.downstreamNode, new Predicate(this.rule.r1Edge, evidence));
            }
            else if (this.type === exports.ConnectorType.intermediate) {
                self.addNodes(self.upstreamNode, self.downstreamNode, self.processNode);
                self.addEdge(self.upstreamNode, self.processNode, new Predicate(this.rule.r1Edge, evidence));
                self.addEdge(self.processNode, self.downstreamNode, new Predicate(this.rule.r2Edge, evidence));
                if (this.hasInputNode.hasValue()) {
                    self.addNodes(self.hasInputNode);
                    self.addEdge(self.processNode, self.hasInputNode, new Predicate(new Entity(pantherFormConfig.edge.hasInput.id, pantherFormConfig.edge.hasInput.label), evidence));
                }
            }
        };
        ConnectorAnnoton.prototype.prepareSave = function (value) {
            var self = this;
            var evidence = value.evidenceFormArray.map(function (evidence) {
                var result = new Evidence();
                result.uuid = evidence.uuid;
                result.evidence = new Entity(evidence.evidence.id, evidence.evidence.label);
                result.reference = evidence.reference;
                result.with = evidence.with;
                return result;
            });
            if (this.type === exports.ConnectorType.intermediate) {
                self.processNode.term = new Entity(value.process.id, value.process.label);
                self.hasInputNode.term = new Entity(value.hasInput.id, value.hasInput.label);
            }
            this.createGraph(evidence);
        };
        ConnectorAnnoton.prototype._getPreviewEdges = function () {
            var self = this;
            var edges = [];
            if (self.type === exports.ConnectorType.basic) {
                edges = [
                    {
                        source: 'upstream',
                        target: 'downstream',
                        label: self.rule.r1Edge ? self.rule.r1Edge.label : ''
                    }
                ];
            }
            else if (self.type === exports.ConnectorType.intermediate) {
                edges = [
                    {
                        source: 'upstream',
                        target: 'process',
                        label: self.rule.r1Edge ? self.rule.r1Edge.label : ''
                    }, {
                        source: 'process',
                        target: 'downstream',
                        label: self.rule.r2Edge ? self.rule.r2Edge.label : ''
                    }
                ];
                if (this.hasInputNode.hasValue()) {
                    edges.push({
                        source: 'process',
                        target: 'has-input',
                        label: pantherFormConfig.edge.hasInput.label
                    });
                }
            }
            return edges;
        };
        return ConnectorAnnoton;
    }(SaeGraph));

    var CamQueryMatch = /** @class */ (function () {
        function CamQueryMatch() {
            this.terms = [];
            this.reference = [];
        }
        return CamQueryMatch;
    }());
    var CamStats = /** @class */ (function () {
        function CamStats() {
            this.totalChanges = 0;
            this.camsCount = 0;
            this.termsCount = 0;
            this.gpsCount = 0;
            this.evidenceCount = 0;
            this.referencesCount = 0;
            this.relationsCount = 0;
        }
        CamStats.prototype.updateTotal = function () {
            this.totalChanges =
                this.termsCount
                    + this.gpsCount
                    + this.evidenceCount
                    + this.referencesCount
                    + this.relationsCount;
        };
        return CamStats;
    }());
    var Cam = /** @class */ (function () {
        function Cam() {
            this.groups = [];
            this.contributors = [];
            this.expanded = false;
            this.connectorAnnotons = [];
            this.triples = [];
            this.error = false;
            this.modified = false;
            this.modifiedStats = new CamStats();
            this.matchedCount = 0;
            this.filter = {
                contributor: null,
                uuids: [],
                terms: []
            };
            this.goterms = [];
            this.queryMatch = new CamQueryMatch();
            this.dateReviewAdded = Date.now();
            this.moreDetail = false;
            this.displayNumber = '0';
            this.grid = [];
            this.graphPreview = {
                nodes: [],
                edges: []
            };
            this.loading = {
                status: false,
                message: ''
            };
            this._filteredAnnotons = [];
            this._annotons = [];
            this.displayType = pantherFormConfig.camDisplayType.options.model;
        }
        Object.defineProperty(Cam.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
                this.displayId = PantherFormUtils.cleanID(id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cam.prototype, "annotons", {
            get: function () {
                switch (this.displayType) {
                    case pantherFormConfig.camDisplayType.options.entity:
                        return this._filteredAnnotons.sort(this._compareMolecularFunction);
                    default:
                        return this._annotons.sort(this._compareMolecularFunction);
                }
            },
            set: function (srcAnnotons) {
                var _this = this;
                var prevAnnotons = this._annotons;
                lodash.each(srcAnnotons, function (annoton) {
                    var prevAnnoton = _this.findAnnotonById(annoton.id);
                    if (prevAnnoton) {
                        annoton.expanded = prevAnnoton.expanded;
                    }
                });
                this._annotons = srcAnnotons;
            },
            enumerable: true,
            configurable: true
        });
        Cam.prototype.toggleExpand = function () {
            this.expanded = !this.expanded;
        };
        Cam.prototype.expandAllAnnotons = function (expand) {
            var self = this;
            lodash.each(self.annotons, function (annoton) {
                annoton.expanded = expand;
            });
        };
        Cam.prototype.getConnectorAnnoton = function (upstreamId, downstreamId) {
            var self = this;
            return lodash.find(self.connectorAnnotons, function (connectorAnnoton) {
                return connectorAnnoton.upstreamNode.uuid === upstreamId &&
                    connectorAnnoton.downstreamNode.uuid === downstreamId;
            });
        };
        Cam.prototype.configureDisplayType = function () {
            if (this.filter.uuids.length > 0) {
                this.displayType = pantherFormConfig.camDisplayType.options.entity;
            }
        };
        Cam.prototype.clearFilter = function () {
            var self = this;
            lodash.each(self._annotons, function (annoton) {
                lodash.each(annoton.nodes, function (node) {
                    node.term.highlight = false;
                });
            });
        };
        Cam.prototype.findAnnotonById = function (id) {
            var self = this;
            return lodash.find(self.annotons, function (annoton) {
                return annoton.id === id;
            });
        };
        Cam.prototype.findAnnotonByNodeId = function (nodeId) {
            var self = this;
            var result = lodash.filter(self.annotons, function (annoton) {
                return lodash.find(annoton.nodes, function (annotonNode) {
                    return annotonNode.uuid === nodeId;
                });
            });
            return result;
        };
        Cam.prototype.applyFilter = function () {
            var self = this;
            self.clearFilter();
            if (self.queryMatch && self.queryMatch.terms.length > 0) {
                self._filteredAnnotons = [];
                self.matchedCount = 0;
                //  this.displayType = pantherFormConfig.camDisplayType.options.entity;
                lodash.each(self._annotons, function (annoton) {
                    var match = false;
                    lodash.each(annoton.nodes, function (node) {
                        node.term.highlight = false;
                        lodash.each(self.queryMatch.terms, function (term) {
                            if (node.term.uuid === term.uuid) {
                                node.term.highlight = true;
                                self.matchedCount += 1;
                                match = true;
                            }
                        });
                    });
                    if (match) {
                        self._filteredAnnotons.push(annoton);
                    }
                });
            }
        };
        Cam.prototype.replace = function (findEntities, replaceWith) {
            var self = this;
            lodash.each(self._annotons, function (annoton) {
                lodash.each(annoton.nodes, function (node) {
                    // node.term.highlight = false;
                    lodash.each(findEntities, function (entity) {
                        if (node.term.uuid === entity.uuid) {
                            node.term.termHistory.push(new Entity(node.term.id, node.term.label));
                            node.term.modified = true;
                            node.term.id = replaceWith.id;
                            node.term.label = replaceWith.label;
                        }
                    });
                });
            });
        };
        Cam.prototype.reviewTermChanges = function (stat) {
            var self = this;
            var result = [];
            self.modifiedStats = new CamStats();
            lodash.each(self._annotons, function (annoton) {
                lodash.each(annoton.nodes, function (node) {
                    if (node.term.modified) {
                        result.push(node.term);
                        self.modifiedStats.termsCount++;
                        stat.termsCount++;
                        annoton.modified = true;
                        self.modified = true;
                    }
                });
            });
            self.modifiedStats.updateTotal();
            return result;
        };
        Cam.prototype.getAnnotonByConnectionId = function (connectionId) {
            var self = this;
            var result = lodash.find(self.annotons, function (annoton) {
                return annoton.id === connectionId;
            });
            return result;
        };
        Cam.prototype.getNodesByType = function (type) {
            var self = this;
            var result = [];
            lodash.each(self.annotons, function (annoton) {
                result.push({
                    annoton: annoton,
                    title: annoton.title,
                    annotonNodes: annoton.getNodesByType(type)
                });
            });
            return result;
        };
        Cam.prototype.getNodesByTypeFlat = function (type) {
            var self = this;
            var result = [];
            lodash.each(self.annotons, function (annoton) {
                result.push.apply(result, __spread(annoton.getNodesByType(type)));
            });
            return result;
        };
        Cam.prototype.getTerms = function (formAnnoton) {
            var self = this;
            var result = [];
            if (formAnnoton && formAnnoton.nodes) {
                lodash.each(formAnnoton.nodes, function (node) {
                    result.push(node);
                });
            }
            lodash.each(self.annotons, function (annoton) {
                lodash.each(annoton.nodes, function (node) {
                    result.push(node);
                });
            });
            return result;
        };
        Cam.prototype.getEvidences = function (formAnnoton) {
            var self = this;
            var result = [];
            if (formAnnoton && formAnnoton.nodes) {
                lodash.each(formAnnoton.nodes, function (node) {
                    lodash.each(node.predicate.evidence, function (evidence) {
                        if (evidence.hasValue()) {
                            result.push(evidence);
                        }
                    });
                });
            }
            lodash.each(self.annotons, function (annoton) {
                lodash.each(annoton.edges, function (triple) {
                    lodash.each(triple.predicate.evidence, function (evidence) {
                        if (evidence.hasValue()) {
                            result.push(evidence);
                        }
                    });
                });
            });
            return result;
        };
        Cam.prototype.setPreview = function () {
            var self = this;
            self.graphPreview.edges = [];
            self.graphPreview.nodes = self.annotons.map(function (annoton) {
                return {
                    id: annoton.id,
                    label: annoton.presentation.mfText,
                    data: {
                        annoton: annoton
                    }
                };
            });
            lodash.each(self.connectorAnnotons, function (connectorAnnoton) {
                if (connectorAnnoton.type === exports.ConnectorType.basic) {
                    self.graphPreview.edges.push({
                        source: connectorAnnoton.upstreamNode.uuid,
                        target: connectorAnnoton.downstreamNode.uuid,
                        label: connectorAnnoton.rule.r1Edge.label,
                        data: {
                            connectorAnnoton: connectorAnnoton
                        }
                    });
                }
                else if (connectorAnnoton.type === exports.ConnectorType.intermediate) {
                    self.graphPreview.nodes.push({
                        id: connectorAnnoton.processNode.uuid,
                        label: connectorAnnoton.processNode.term.label,
                        data: {
                            connectorAnnoton: connectorAnnoton
                        }
                    });
                    self.graphPreview.edges.push({
                        source: connectorAnnoton.upstreamNode.uuid,
                        target: connectorAnnoton.processNode.uuid,
                        label: connectorAnnoton.rule.r1Edge.label,
                        data: {
                            connectorAnnoton: connectorAnnoton
                        }
                    });
                    self.graphPreview.edges.push({
                        source: connectorAnnoton.processNode.uuid,
                        target: connectorAnnoton.downstreamNode.uuid,
                        label: connectorAnnoton.rule.r2Edge.label,
                        data: {
                            connectorAnnoton: connectorAnnoton
                        }
                    });
                }
            });
            /*
                self.graphPreview.edges = <NgxEdge[]>triples.map((triple: Triple<AnnotonNode>) => {
                  return {
                    source: triple.subject.id,
                    target: triple.object.id,
                    label: triple.predicate.edge.label
                  };
                });*/
        };
        Cam.prototype.generateTripleGrid = function () {
            var grid = __spread(this.triples.map(function (triple) {
                return triple.grid;
            }));
            return grid;
            //return flattenDeep(grid);
        };
        Cam.prototype.generateGridRow = function (annoton, node) {
            var self = this;
            var term = node.getTerm();
            self.grid.push({
                displayEnabledBy: self.tableCanDisplayEnabledBy(node),
                treeLevel: node.treeLevel,
                relationship: node.isExtension ? '' : self.tableDisplayExtension(node),
                relationshipExt: node.isExtension ? node.predicate.edge.label : '',
                term: node.isExtension ? {} : term,
                extension: node.isExtension ? term : {},
                aspect: node.aspect,
                /*  evidence: node.evidence.length > 0 ? node.evidence[0].evidence : {},
                 reference: node.evidence.length > 0 ? node.evidence[0].reference : {},
                 with: node.evidence.length > 0 ? node.evidence[0].with : {},
                 assignedBy: node.evidence.length > 0 ? node.evidence[0].assignedBy : {}, */
                annoton: annoton,
                node: node
            });
            /*
                for (let i = 1; i < node.evidence.length; i++) {
                  self.grid.push({
                    treeLevel: node.treeLevel,
                    evidence: node.evidence[i].evidence,
                    reference: node.evidence[i].reference,
                    with: node.evidence[i].with.control,
                    assignedBy: node.evidence[i].assignedBy,
                    node: node,
                  })
                }*/
        };
        Cam.prototype.tableCanDisplayEnabledBy = function (node) {
            var self = this;
            return node.predicate.edge && node.predicate.edge.id === pantherFormConfig.edge.enabledBy.id;
        };
        Cam.prototype.tableDisplayExtension = function (node) {
            var self = this;
            if (node.id === 'mf') {
                return '';
            }
            else if (node.isComplement) {
                return 'NOT ' + node.predicate.edge.label;
            }
            else {
                return node.predicate.edge.label;
            }
        };
        Cam.prototype.updateAnnotonDisplayNumber = function () {
            var self = this;
            lodash.each(self.annotons, function (annoton, key) {
                annoton.displayNumber = self.displayNumber + '.' + (key + 1).toString();
            });
        };
        Cam.prototype._compareMolecularFunction = function (a, b) {
            if (a.presentation.gpText.toLowerCase() < b.presentation.gpText.toLowerCase()) {
                return -1;
            }
            else {
                return 1;
            }
        };
        return Cam;
    }());

    var SimpleAnnoton = /** @class */ (function (_super) {
        __extends(SimpleAnnoton, _super);
        function SimpleAnnoton() {
            var _this = _super.call(this) || this;
            _this.expanded = false;
            _this.visible = true;
            _this.errors = [];
            _this.submitErrors = [];
            _this.id = v1();
            return _this;
        }
        return SimpleAnnoton;
    }(SaeGraph));

    //
    var AnnotonParser = /** @class */ (function () {
        function AnnotonParser() {
            this.rules = [];
            this.errors = [];
            this.warnings = [];
            this.clean = true;
        }
        AnnotonParser.prototype.parseCardinality = function (graph, node, sourceEdges) {
            var self = this;
            var edges = [];
            var result = true;
            var error;
            lodash.each(sourceEdges, function (edge) {
                var predicateId = edge.predicate_id();
                var predicateLabel = self.getPredicateLabel(predicateId);
                if (lodash.includes(pantherFormConfig.noDuplicateEdges, predicateId)) {
                    if (lodash.includes(edges, predicateId)) {
                        var meta = {
                            aspect: node.label,
                            subjectNode: {
                                label: node.term.label
                            },
                            edge: {
                                label: predicateLabel
                            },
                            objectNode: {
                                label: self.getNodeLabel(graph, edge.object_id())
                            },
                        };
                        error = new AnnotonError('warning', 3, "More than 1 " + predicateLabel + " found", meta);
                        self.errors.push(error);
                        node.errors.push(error);
                        self.warnings.push(error);
                        node.warnings.push(error);
                        result = false;
                    }
                    else {
                        edges.push(predicateId);
                    }
                }
            });
            self.clean = self.clean && result;
            return result;
        };
        AnnotonParser.prototype.getPredicateLabel = function (id) {
            var self = this;
            var predicate = lodash.find(pantherFormConfig.edge, function (val) {
                return val.id === id;
            });
            return predicate ? predicate.label : id;
        };
        AnnotonParser.prototype.parseNodeOntology = function (node) {
            var self = this;
            var result = true;
            var error;
            if (!lodash.includes(node.closures, node.category)) {
                var meta = {
                    aspect: node.label,
                    subjectNode: {
                        label: node.label
                    }
                };
                error = new AnnotonError('error', 4, "Wrong ontology class. Expected " + JSON.stringify(node.category), meta);
                self.errors.push(error);
                node.errors.push(error);
                result = false;
            }
            self.clean = self.clean && result;
            return result;
        };
        AnnotonParser.prototype.parseNodeOntologyAll = function (node, ontologyId) {
            var self = this;
            var result = true;
            var error;
            var prefix = ontologyId.split(":")[0].toLowerCase();
            lodash.each(node.ontologyClass, function (ontologyClass) {
                if (ontologyClass !== prefix) {
                    var meta = {
                        aspect: node.label,
                        subjectNode: {
                            label: node.term.label
                        }
                    };
                    error = new AnnotonError('error', 4, "Wrong ontology class " + prefix + ". Expected " + JSON.stringify(node.ontologyClass), meta);
                    self.errors.push(error);
                    node.errors.push(error);
                    result = false;
                }
            });
            self.clean = self.clean && result;
            return result;
        };
        AnnotonParser.prototype.setCardinalityError = function (subjectNode, objectNodeTerm, predicateId) {
            var self = this;
            var result = true;
            var meta = {
                aspect: '',
                subjectNode: {
                    label: subjectNode.term.label
                },
                edge: {
                    label: self.getPredicateLabel(predicateId)
                },
                objectNode: {
                    label: objectNodeTerm.label
                },
            };
            var error = new AnnotonError('error', 2, "Incorrect relationship between " +
                meta.subjectNode.label + ' and ' + meta.objectNode.label, meta);
            self.errors.push(error);
            subjectNode.errors.push(error);
            self.clean = false;
        };
        AnnotonParser.prototype.setNodeOntologyError = function (node) {
            var self = this;
            var result = true;
            var meta = {
                aspect: node.label,
                subjectNode: {
                    label: node.term.label
                }
            };
            var error = new AnnotonError('error', 4, "Incorrect association between term and relationship" + JSON.stringify(node.category), meta);
            self.errors.push(error);
            node.errors.push(error);
            self.clean = false;
        };
        AnnotonParser.prototype.setNodeWarning = function (node) {
            var self = this;
            var result = true;
            var meta = {
                aspect: '',
                subjectNode: {
                    label: node.term.label
                }
            };
            var error = new AnnotonError('warning', 1, "There was an error above ", meta);
            self.errors.push(error);
            node.errors.push(error);
            self.warnings.push(error);
            node.warnings.push(error);
            self.clean = false;
        };
        AnnotonParser.prototype.printErrors = function () {
            var self = this;
        };
        AnnotonParser.prototype.allowedEdge = function (predicateId) {
            var self = this;
            return lodash.find(pantherFormConfig.causalEdges, function (edge) {
                return edge.id === predicateId;
            });
        };
        AnnotonParser.prototype.parseCardinalityTemp = function (graph, node, sourceEdges, objectEdges) {
            var self = this;
            var edges2 = [];
            var result = true;
            var error;
            lodash.each(sourceEdges, function (edge) {
                var predicateId = edge.predicate_id();
                var predicateLabel = self.getPredicateLabel(predicateId);
                var allowedEdge = self.allowedEdge(predicateId);
                if (!allowedEdge) {
                    if (lodash.includes(edges2, predicateId)) {
                        var meta = {
                            aspect: node.label,
                            subjectNode: {
                                label: node.term.label
                            },
                            edge: {
                                label: predicateLabel
                            },
                            objectNode: {
                                label: self.getNodeLabel(graph, edge.object_id())
                            },
                        };
                        error = new AnnotonError('warning', 3, "More than 1 " + predicateLabel + " found.", meta);
                        self.errors.push(error);
                        result = false;
                    }
                    var v = lodash.find(objectEdges, function (node) {
                        return node.edge.id === predicateId;
                    });
                    if (v) {
                        if (!self.canDuplicateEdge(predicateId)) {
                            edges2.push(predicateId);
                        }
                    }
                    else {
                        var meta = {
                            aspect: node.label,
                            subjectNode: {
                                label: node.term.label
                            },
                            edge: {
                                label: predicateLabel
                            },
                            objectNode: {
                                label: self.getNodeLabel(graph, edge.object_id())
                            },
                        };
                        error = new AnnotonError('error', 2, "Not accepted triple ", meta);
                        self.errors.push(error);
                        node.errors.push(error);
                        result = false;
                    }
                }
            });
            self.clean = self.clean && result;
            return result;
        };
        AnnotonParser.prototype.canDuplicateEdge = function (predicateId) {
            var self = this;
            return lodash.find(pantherFormConfig.canDuplicateEdges, function (edge) {
                return edge.id === predicateId;
            });
        };
        AnnotonParser.prototype.getNodeLabel = function (graph, object) {
            var self = this;
            var label = '';
            var node = graph.get_node(object);
            if (node) {
                lodash.each(node.types(), function (in_type) {
                    var type;
                    if (in_type.type() === 'complement') {
                        type = in_type.complement_class_expression();
                    }
                    else {
                        type = in_type;
                    }
                    label += type.class_label() +
                        ' (' + type.class_id() + ')';
                });
            }
            return label;
        };
        return AnnotonParser;
    }());

    var AnnotonRules = /** @class */ (function () {
        function AnnotonRules() {
            this.rules = [];
            this.errors = [];
            this.allowedEdges = '';
        }
        AnnotonRules.prototype.populateAllowedEdges = function () {
        };
        return AnnotonRules;
    }());

    var _a;
    var CardinalityType;
    (function (CardinalityType) {
        CardinalityType["none"] = "none";
        CardinalityType["oneToOne"] = "oneToOne";
        CardinalityType["oneToMany"] = "oneToMany";
    })(CardinalityType || (CardinalityType = {}));
    var addCausalEdges = function (edges) {
        var causalShapeDescriptions = [];
        lodash.each(edges, function (edge) {
            causalShapeDescriptions.push({
                id: exports.AnnotonNodeType.GoBiologicalProcess,
                node: {
                    type: exports.AnnotonNodeType.GoBiologicalProcess,
                    category: [GoBiologicalProcess],
                    aspect: 'P',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.bp,
                    isKey: true,
                    relationEditable: true,
                    weight: 10,
                },
                predicate: edge,
                cardinality: CardinalityType.oneToOne
            });
        });
        return causalShapeDescriptions;
    };
    var ɵ0 = addCausalEdges;
    var canInsertEntity = (_a = {},
        _a[exports.AnnotonNodeType.GoMolecularEntity] = [
            {
                label: 'Add Part Of (Cellular Component)',
                id: exports.AnnotonNodeType.GoCellularComponent,
                node: {
                    type: exports.AnnotonNodeType.GoCellularComponent,
                    category: [GoCellularComponent],
                    label: 'MF part of Cellular Component',
                    aspect: 'C',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    weight: 10,
                    isKey: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
        ],
        _a[exports.AnnotonNodeType.GoMolecularFunction] = __spread([
            {
                label: 'Add Enabled by GP',
                id: exports.AnnotonNodeType.GoMolecularEntity,
                node: {
                    id: GoMolecularEntity.id,
                    type: exports.AnnotonNodeType.GoMolecularEntity,
                    category: [GoMolecularEntity],
                    label: 'Gene Product',
                    skipEvidence: true,
                    displaySection: pantherFormConfig.displaySection.gp,
                    displayGroup: pantherFormConfig.displayGroup.gp,
                    termRequired: true,
                    weight: 2,
                    isKey: true
                },
                predicate: pantherFormConfig.edge.enabledBy,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Part Of (Biological Process)',
                id: exports.AnnotonNodeType.GoBiologicalProcess,
                node: {
                    type: exports.AnnotonNodeType.GoBiologicalProcess,
                    category: [GoBiologicalProcess],
                    label: 'MF part of Biological Process',
                    aspect: 'P',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.bp,
                    weight: 10,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Occurs In (Cellular Component)',
                id: exports.AnnotonNodeType.GoCellularComponent,
                node: {
                    type: exports.AnnotonNodeType.GoCellularComponent,
                    category: [GoCellularComponent],
                    label: 'MF occurs in Cellular Component',
                    aspect: 'C',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    weight: 20,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.occursIn,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Occurs In (Cell Type)',
                id: exports.AnnotonNodeType.GoCellTypeEntity,
                node: {
                    category: [GoCellTypeEntity],
                    type: exports.AnnotonNodeType.GoCellTypeEntity,
                    label: 'Occurs In (Cell Type)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: false,
                    weight: 30,
                },
                predicate: pantherFormConfig.edge.occursIn,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Occurs In (Anatomy)',
                id: exports.AnnotonNodeType.GoAnatomicalEntity,
                node: {
                    category: [GoAnatomicalEntity],
                    type: exports.AnnotonNodeType.GoAnatomicalEntity,
                    label: 'Occurs In (Anatomy)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 40,
                },
                predicate: pantherFormConfig.edge.occursIn,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Occurs In (Organism)',
                id: exports.AnnotonNodeType.GoOrganism,
                node: {
                    category: [GoOrganism],
                    type: exports.AnnotonNodeType.GoOrganism,
                    label: 'Part Of (Organism)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 50,
                },
                predicate: pantherFormConfig.edge.occursIn,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Has Input (Chemical/Protein Containing Complex)',
                id: exports.AnnotonNodeType.GoChemicalEntityHasInput,
                node: {
                    category: [GoChemicalEntity, GoProteinContainingComplex],
                    type: exports.AnnotonNodeType.GoChemicalEntityHasInput,
                    label: 'Has Input (Chemical/Protein Containing Complex)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.mf,
                    isExtension: true,
                    weight: 4,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.hasInput,
                cardinality: CardinalityType.oneToMany
            },
            {
                label: 'Add Has Output (Chemical/Protein Containing Complex)',
                id: exports.AnnotonNodeType.GoChemicalEntityHasOutput,
                node: {
                    category: [GoChemicalEntity, GoProteinContainingComplex],
                    type: exports.AnnotonNodeType.GoChemicalEntityHasOutput,
                    label: 'Has Output (Chemical/Protein Containing Complex)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.mf,
                    isExtension: true,
                    weight: 5,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.hasOutput,
                cardinality: CardinalityType.oneToMany
            },
            {
                label: 'Add Happens During (Biological Phase)',
                id: exports.AnnotonNodeType.GoBiologicalPhase,
                node: {
                    category: [GoBiologicalPhase],
                    type: exports.AnnotonNodeType.GoBiologicalPhase,
                    label: 'Happens During (Biological Phase)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.mf,
                    isExtension: true,
                    weight: 3,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.happensDuring,
                cardinality: CardinalityType.oneToOne
            }
        ], addCausalEdges([
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfOrWithin),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOf),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfNegativeEffect),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfPositiveEffect),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfOrWithinPositiveEffect),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfOrWithinNegativeEffect),
        ])),
        _a[exports.AnnotonNodeType.GoBiologicalProcess] = [
            {
                label: 'Add Part Of (Biological Process)',
                id: exports.AnnotonNodeType.GoBiologicalProcess,
                node: {
                    category: [GoBiologicalProcess],
                    type: exports.AnnotonNodeType.GoBiologicalProcess,
                    label: 'Part Of (Biological Process)',
                    aspect: 'P',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.bp,
                    isExtension: true,
                    weight: 10,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Occurs In (Cellular Component)',
                id: exports.AnnotonNodeType.GoCellularComponent,
                node: {
                    category: [GoCellularComponent],
                    type: exports.AnnotonNodeType.GoCellularComponent,
                    aspect: 'C',
                    label: 'Occurs In Cellular Component',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.bp,
                    isExtension: true,
                    weight: 20
                },
                predicate: pantherFormConfig.edge.occursIn,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Has Input (Chemical/Anatomical Entity/Protein Containing Complex)',
                id: exports.AnnotonNodeType.GoChemicalEntityHasInput,
                node: {
                    category: [
                        GoChemicalEntity,
                        GoAnatomicalEntity,
                        GoProteinContainingComplex
                    ],
                    type: exports.AnnotonNodeType.GoChemicalEntityHasInput,
                    label: 'Has Input (Chemical/Anatomical Entity/Protein Containing Complex)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.bp,
                    isExtension: true,
                    weight: 14,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.hasInput,
                cardinality: CardinalityType.oneToMany
            },
            {
                label: 'Add Has Output (Chemical/Anatomical Entity/Protein Containing Complex)',
                id: exports.AnnotonNodeType.GoChemicalEntityHasInput,
                node: {
                    category: [
                        GoChemicalEntity,
                        GoAnatomicalEntity,
                        GoProteinContainingComplex
                    ],
                    type: exports.AnnotonNodeType.GoChemicalEntityHasOutput,
                    label: 'Has Output (Chemical/Anatomical Entity/Protein Containing Complex)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.bp,
                    isExtension: true,
                    weight: 14,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.hasOutput,
                cardinality: CardinalityType.oneToMany
            },
        ],
        _a[exports.AnnotonNodeType.GoCellularComponent] = [
            {
                label: 'Add Part Of (Cellular Component)',
                id: exports.AnnotonNodeType.GoCellularComponent,
                node: {
                    category: [GoCellularComponent],
                    type: exports.AnnotonNodeType.GoCellularComponent,
                    aspect: 'C',
                    label: 'Part Of Cellular Component',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 20,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Part Of (Cell Type)',
                id: exports.AnnotonNodeType.GoCellTypeEntity,
                node: {
                    category: [GoCellTypeEntity],
                    type: exports.AnnotonNodeType.GoCellTypeEntity,
                    label: 'Part Of (Cell Type)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 30,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Part Of (Anatomy)',
                id: exports.AnnotonNodeType.GoAnatomicalEntity,
                node: {
                    category: [GoAnatomicalEntity],
                    type: exports.AnnotonNodeType.GoAnatomicalEntity,
                    label: 'Part Of (Anatomy)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 40,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Part Of (Organism)',
                id: exports.AnnotonNodeType.GoOrganism,
                node: {
                    category: [GoOrganism],
                    type: exports.AnnotonNodeType.GoOrganism,
                    label: 'Part Of (Organism)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 50,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            }
        ],
        _a[exports.AnnotonNodeType.GoCellTypeEntity] = [
            {
                label: 'Add Part Of (Anatomy)',
                id: exports.AnnotonNodeType.GoAnatomicalEntity,
                node: {
                    category: [GoAnatomicalEntity],
                    type: exports.AnnotonNodeType.GoAnatomicalEntity,
                    label: 'Part Of (Anatomy)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 40,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            },
            {
                label: 'Add Part Of (Organism)',
                id: exports.AnnotonNodeType.GoOrganism,
                node: {
                    category: [GoOrganism],
                    type: exports.AnnotonNodeType.GoOrganism,
                    label: 'Part Of (Organism)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 50,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            }
        ],
        _a[exports.AnnotonNodeType.GoAnatomicalEntity] = [
            {
                label: 'Add Part Of (Organism)',
                id: exports.AnnotonNodeType.GoOrganism,
                node: {
                    category: [GoOrganism],
                    type: exports.AnnotonNodeType.GoOrganism,
                    label: 'Part Of (Organism)',
                    displaySection: pantherFormConfig.displaySection.fd,
                    displayGroup: pantherFormConfig.displayGroup.cc,
                    isExtension: true,
                    weight: 50,
                    showInMenu: true,
                },
                predicate: pantherFormConfig.edge.partOf,
                cardinality: CardinalityType.oneToOne
            }
        ],
        _a);

    var shapeDefinition = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get CardinalityType () { return CardinalityType; },
        canInsertEntity: canInsertEntity,
        ɵ0: ɵ0
    });


    (function (AnnotonState) {
        AnnotonState[AnnotonState["creation"] = 1] = "creation";
        AnnotonState[AnnotonState["editing"] = 2] = "editing";
    })(exports.AnnotonState || (exports.AnnotonState = {}));

    (function (AnnotonType) {
        AnnotonType["default"] = "default";
        AnnotonType["bpOnly"] = "bpOnly";
        AnnotonType["ccOnly"] = "ccOnly";
    })(exports.AnnotonType || (exports.AnnotonType = {}));
    var Annoton = /** @class */ (function (_super) {
        __extends(Annoton, _super);
        function Annoton() {
            var _this = _super.call(this) || this;
            _this.modified = false;
            _this.expanded = false;
            _this.visible = true;
            _this.graphPreview = {
                nodes: [],
                edges: []
            };
            _this.displayNumber = '0';
            _this._grid = [];
            _this.annotonType = 'default';
            _this.id = uuid.v4();
            _this.errors = [];
            _this.submitErrors = [];
            return _this;
        }
        Object.defineProperty(Annoton.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
                this.displayId = PantherFormUtils.cleanID(id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Annoton.prototype, "annotonConnections", {
            get: function () {
                throw new Error('Method not implemented');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Annoton.prototype, "rootNodeType", {
            get: function () {
                return this.annotonType === exports.AnnotonType.ccOnly ?
                    exports.AnnotonNodeType.GoMolecularEntity :
                    exports.AnnotonNodeType.GoMolecularFunction;
            },
            enumerable: true,
            configurable: true
        });
        Annoton.prototype.postRunUpdate = function () {
            var self = this;
            if (this.annotonType !== exports.AnnotonType.ccOnly) {
                var mfNode = self.getMFNode();
                var edge = self.getEdge(exports.AnnotonNodeType.GoMolecularFunction, exports.AnnotonNodeType.GoMolecularEntity);
                if (mfNode && edge) {
                    mfNode.predicate = edge.predicate;
                }
            }
        };
        Object.defineProperty(Annoton.prototype, "rootNode", {
            get: function () {
                return this.getNode(this.rootNodeType);
            },
            enumerable: true,
            configurable: true
        });
        Annoton.prototype.updateEntityInsertMenu = function () {
            var self = this;
            lodash.each(self.nodes, function (node) {
                var canInsertNodes = canInsertEntity[node.type] || [];
                var insertNodes = [];
                lodash.each(canInsertNodes, function (nodeDescription) {
                    if (nodeDescription.cardinality === CardinalityType.oneToOne) {
                        var edgeTypeExist = self.edgeTypeExist(node.id, nodeDescription.predicate.id, node.type, nodeDescription.node.type);
                        if (!edgeTypeExist) {
                            insertNodes.push(nodeDescription);
                        }
                    }
                    else {
                        insertNodes.push(nodeDescription);
                    }
                });
                node.canInsertNodes = insertNodes;
                node.insertMenuNodes = lodash.filter(insertNodes, function (insertNode) {
                    return insertNode.node.showInMenu;
                });
            });
            // remove the subject menu
            lodash.each(self.edges, function (triple) {
                if (triple.subject.type === triple.object.type) {
                    triple.subject.canInsertNodes = [];
                    triple.subject.insertMenuNodes = [];
                }
            });
        };
        Annoton.prototype.updateEdges = function (subjectNode, insertNode, predicate) {
            var self = this;
            var canInsertSubjectNodes = canInsertEntity[subjectNode.type] || [];
            var updated = false;
            lodash.each(canInsertSubjectNodes, function (nodeDescription) {
                if (predicate.edge.id === nodeDescription.predicate.id) {
                    if (nodeDescription.cardinality === CardinalityType.oneToOne) {
                        var edgeTypeExist = self.edgeTypeExist(subjectNode.id, nodeDescription.predicate.id, subjectNode.type, nodeDescription.node.type);
                        if (edgeTypeExist) {
                            edgeTypeExist.object.treeLevel++;
                            self.removeEdge(edgeTypeExist.subject, edgeTypeExist.object, edgeTypeExist.predicate);
                            self.addEdge(edgeTypeExist.subject, insertNode, edgeTypeExist.predicate);
                            self.addEdge(insertNode, edgeTypeExist.object, predicate);
                            updated = true;
                            return false;
                        }
                    }
                }
            });
            if (!updated) {
                self.addEdgeById(subjectNode.id, insertNode.id, predicate);
            }
        };
        Annoton.prototype.getNodesByType = function (type) {
            var self = this;
            var result = lodash.filter(self.nodes, function (annotonNode) {
                return annotonNode.type === type;
            });
            return result;
        };
        Annoton.prototype.getGPNode = function () {
            var self = this;
            return self.getNode(exports.AnnotonNodeType.GoMolecularEntity);
        };
        Annoton.prototype.getMFNode = function () {
            var self = this;
            return self.getNode(exports.AnnotonNodeType.GoMolecularFunction);
        };
        Annoton.prototype.adjustCC = function () {
            var self = this;
            var ccNode = self.getNode(exports.AnnotonNodeType.GoCellularComponent);
            if (ccNode && !ccNode.hasValue()) {
                var ccEdges = this.getEdges(ccNode.id);
                if (ccEdges.length > 0) {
                    var firstEdge = ccEdges[0];
                    var rootCC = pantherFormConfig.rootNode.cc;
                    ccNode.term = new Entity(rootCC.id, rootCC.label);
                    ccNode.predicate.evidence = firstEdge.predicate.evidence;
                }
            }
        };
        Annoton.prototype.adjustAnnoton = function () {
            var self = this;
            switch (self.annotonType) {
                case pantherFormConfig.annotonType.options.bpOnly.name:
                    var rootMF = pantherFormConfig.rootNode.mf;
                    var mfNode = self.getMFNode();
                    var bpNode = self.getNode(exports.AnnotonNodeType.GoBiologicalProcess);
                    var bpEdge = this.getEdge(mfNode.id, bpNode.id);
                    mfNode.term = new Entity(rootMF.id, rootMF.label);
                    mfNode.predicate.evidence = bpNode.predicate.evidence;
                    if (this.bpOnlyEdge) {
                        bpEdge.predicate.edge.id = bpNode.predicate.edge.id = this.bpOnlyEdge.id;
                        bpEdge.predicate.edge.label = bpNode.predicate.edge.label = this.bpOnlyEdge.label;
                    }
                    break;
            }
        };
        Annoton.prototype.copyValues = function (srcAnnoton) {
            var self = this;
            lodash.each(self.nodes, function (destNode) {
                var srcNode = srcAnnoton.getNode(destNode.id);
                if (srcNode) {
                    destNode.copyValues(srcNode);
                }
            });
        };
        Annoton.prototype.setAnnotonType = function (type) {
            this.annotonType = type;
        };
        Object.defineProperty(Annoton.prototype, "grid", {
            get: function () {
                var self = this;
                if (self._grid.length === 0) {
                    this.generateGrid();
                }
                return this._grid;
            },
            enumerable: true,
            configurable: true
        });
        Annoton.prototype.enableSubmit = function () {
            var self = this;
            var result = true;
            self.submitErrors = [];
            lodash.each(self.nodes, function (node) {
                result = node.enableSubmit(self.submitErrors) && result;
            });
            if (self.annotonType === exports.AnnotonType.bpOnly) {
                if (!self.bpOnlyEdge) {
                    var meta = {
                        aspect: 'Molecular Function'
                    };
                    var error = new AnnotonError('error', 1, "Causal relation is required", meta);
                    self.submitErrors.push(error);
                    result = false;
                }
            }
            return result;
        };
        Annoton.prototype.createSave = function () {
            var self = this;
            var saveData = {
                title: 'enabled by ' + self.getNode(exports.AnnotonNodeType.GoMolecularEntity).term.label,
                triples: [],
                nodes: [],
                graph: null
            };
            self.adjustCC();
            self.adjustAnnoton();
            var graph = self.getTrimmedGraph(this.rootNodeType);
            var keyNodes = getNodes(graph);
            var edges = getEdges(graph);
            saveData.nodes = Object.values(keyNodes);
            saveData.triples = edges.map(function (edge) {
                return edge.metadata;
            });
            saveData.graph = graph;
            return saveData;
        };
        Annoton.prototype.createEdit = function (srcAnnoton) {
            var self = this;
            var srcSaveData = srcAnnoton.createSave();
            var destSaveData = self.createSave();
            var saveData = {
                srcNodes: srcSaveData.nodes,
                destNodes: destSaveData.nodes,
                srcTriples: srcSaveData.triples,
                destTriples: destSaveData.triples,
                removeIds: subtractNodes(srcSaveData.graph, destSaveData.graph).map(function (node) {
                    return node.uuid;
                }),
                removeTriples: []
            };
            return saveData;
        };
        Annoton.prototype.createDelete = function () {
            var self = this;
            var deleteData = {
                uuids: [],
                triples: []
            };
            var uuids = [];
            lodash.each(self.nodes, function (node) {
                if (node.hasValue()) {
                    uuids.push(node.uuid);
                }
            });
            deleteData.uuids = uuids;
            return deleteData;
        };
        Annoton.prototype.setPreview = function () {
            var self = this;
            var saveData = self.createSave();
            self.graphPreview.nodes = saveData.nodes.map(function (node) {
                return {
                    id: node.id,
                    label: node.term.label ? node.term.label : '',
                };
            });
            self.graphPreview.edges = saveData.triples.map(function (triple) {
                return {
                    source: triple.subject.id,
                    target: triple.object.id,
                    label: triple.predicate.edge.label
                };
            });
        };
        Annoton.prototype.insertSubgraph = function (annoton, toNode, fromNode) {
            var self = this;
            var graph = annoton.getTrimmedGraph(fromNode.id);
            // self.addSubGraph(graph, toNode.id, fromNode.id);
        };
        Annoton.prototype.insertSubgraph2 = function (annoton, startNodeId) {
            var self = this;
            var graph = annoton.getTrimmedGraph(startNodeId);
            // self.addSubGraph(graph);
        };
        Object.defineProperty(Annoton.prototype, "title", {
            get: function () {
                var self = this;
                var gp = self.getNode(exports.AnnotonNodeType.GoMolecularEntity);
                var gpText = gp ? gp.getTerm().label : '';
                var title = '';
                if (self.annotonType === exports.AnnotonType.ccOnly) {
                    title = gpText;
                }
                else {
                    title = "enabled by " + gpText;
                }
                return title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Annoton.prototype, "presentation", {
            get: function () {
                var self = this;
                if (this._presentation) {
                    return this._presentation;
                }
                var gp = self.getNode(exports.AnnotonNodeType.GoMolecularEntity);
                var mf = self.getNode(exports.AnnotonNodeType.GoMolecularFunction);
                var gpText = gp ? gp.getTerm().label : '';
                var mfText = mf ? mf.getTerm().label : '';
                var qualifier = '';
                var title = '';
                if (self.annotonType === exports.AnnotonType.ccOnly) {
                    title = gpText;
                }
                else {
                    qualifier = mf.isComplement ? 'NOT' : '';
                    title = "enabled by " + gpText;
                }
                var result = {
                    qualifier: qualifier,
                    title: title,
                    gpText: gpText,
                    mfText: mfText,
                    gp: {},
                    fd: {},
                    extra: []
                };
                var sortedNodes = self.nodes.sort(self._compareNodeWeight);
                lodash.each(sortedNodes, function (node) {
                    if (node.displaySection && node.displayGroup) {
                        if (!result[node.displaySection.id][node.displayGroup.id]) {
                            result[node.displaySection.id][node.displayGroup.id] = {
                                shorthand: node.displayGroup.shorthand,
                                label: node.displayGroup.label,
                                nodes: []
                            };
                        }
                        result[node.displaySection.id][node.displayGroup.id].nodes.push(node);
                        node.nodeGroup = result[node.displaySection.id][node.displayGroup.id];
                        if (node.isComplement) {
                            node.nodeGroup.isComplement = true;
                        }
                    }
                });
                this._presentation = result;
                return this._presentation;
            },
            enumerable: true,
            configurable: true
        });
        Annoton.prototype.resetPresentation = function () {
            this._presentation = null;
        };
        Annoton.prototype.generateGrid = function () {
            var self = this;
            self._grid = [];
            lodash.each(self.presentation.fd, function (nodeGroup) {
                lodash.each(nodeGroup.nodes, function (node) {
                    var term = node.getTerm();
                    if (node.id !== exports.AnnotonNodeType.GoMolecularEntity && term.id) {
                        self.generateGridRow(node);
                    }
                });
            });
        };
        Annoton.prototype.generateGridRow = function (node) {
            var self = this;
            var term = node.getTerm();
            self._grid.push({
                treeLevel: node.treeLevel,
                gp: self.tableDisplayGp(node),
                qualifier: node.isExtension ? '' : self.tableDisplayQualifier(node),
                relationship: node.isExtension ? '' : self.tableDisplayRelationship(node),
                relationshipExt: node.isExtension ? node.predicate.edge.label : '',
                term: node.isExtension ? null : term,
                extension: node.isExtension ? term : null,
                aspect: node.aspect,
                evidence: node.predicate.evidence.length > 0 ? node.predicate.evidence[0].evidence : {},
                reference: node.predicate.evidence.length > 0 ? node.predicate.evidence[0].reference : {},
                referenceUrl: node.predicate.evidence.length > 0 ? node.predicate.evidence[0].referenceUrl : {},
                with: node.predicate.evidence.length > 0 ? node.predicate.evidence[0].with : {},
                assignedBy: node.predicate.evidence.length > 0 ? node.predicate.evidence[0].assignedBy : {},
                evidenceIndex: 0,
                relationEditable: node.relationEditable,
                node: node
            });
            for (var i = 1; i < node.predicate.evidence.length; i++) {
                self._grid.push({
                    treeLevel: node.treeLevel,
                    evidence: node.predicate.evidence[i].evidence,
                    reference: node.predicate.evidence[i].reference,
                    referenceUrl: node.predicate.evidence[i].referenceUrl,
                    with: node.predicate.evidence[i].with,
                    assignedBy: node.predicate.evidence[i].assignedBy,
                    evidenceIndex: i,
                    node: node,
                });
            }
        };
        Annoton.prototype.tableDisplayGp = function (node) {
            var self = this;
            var display = false;
            switch (self.annotonType) {
                case pantherFormConfig.annotonType.options.default.name:
                case pantherFormConfig.annotonType.options.bpOnly.name:
                    display = node.id === exports.AnnotonNodeType.GoMolecularFunction;
                    break;
                case pantherFormConfig.annotonType.options.ccOnly.name:
                    display = node.id === 'cc';
                    break;
            }
            return display ? self.gp : '';
        };
        Annoton.prototype.tableCanDisplayEnabledBy = function (node) {
            return node.predicate.edge && node.predicate.edge.id === pantherFormConfig.edge.enabledBy.id;
        };
        Annoton.prototype.tableDisplayQualifier = function (node) {
            if (node.id === exports.AnnotonNodeType.GoMolecularFunction) {
                return '';
            }
            else if (node.isComplement) {
                return 'NOT';
            }
            else {
                return '';
            }
        };
        Annoton.prototype.tableDisplayRelationship = function (node) {
            if (node.id === exports.AnnotonNodeType.GoMolecularFunction) {
                return '';
            }
            else {
                return node.predicate.edge.label;
            }
        };
        Annoton.prototype._compareNodeWeight = function (a, b) {
            if (a.weight < b.weight) {
                return -1;
            }
            else {
                return 1;
            }
        };
        Annoton.prototype.print = function () {
            var result = [];
            this.nodes.forEach(function (node) {
                var a = [];
                node.predicate.evidence.forEach(function (evidence) {
                    a.push({
                        evidence: evidence.evidence,
                        reference: evidence.reference,
                        with: evidence.with
                    });
                });
                result.push({
                    id: node.id,
                    term: node.term,
                    evidence: a
                });
            });
            return result;
        };
        return Annoton;
    }(SaeGraph));

    var _a$1, _b, _c, _d, _e, _f, _g;
    var _this = this;

    var activityUnitBaseDescription = {
        type: exports.AnnotonType.default,
        nodes: (_a$1 = {},
            _a$1[exports.AnnotonNodeType.GoMolecularFunction] = {
                id: GoMolecularFunction.id,
                type: exports.AnnotonNodeType.GoMolecularFunction,
                category: [GoMolecularFunction],
                label: 'Molecular Function',
                aspect: 'F',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                termRequired: true,
                weight: 1
            },
            _a$1),
        triples: [],
    };
    var bpOnlyAnnotationBaseDescription = {
        type: exports.AnnotonType.bpOnly,
        nodes: (_b = {},
            _b[exports.AnnotonNodeType.GoMolecularFunction] = {
                id: GoMolecularFunction.id,
                type: exports.AnnotonNodeType.GoMolecularFunction,
                category: [GoMolecularFunction],
                label: 'Molecular Function',
                aspect: 'F',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                visible: false,
                weight: 1
            },
            _b),
        triples: []
    };
    var ccOnlyAnnotationBaseDescription = {
        type: exports.AnnotonType.ccOnly,
        nodes: (_c = {},
            _c[exports.AnnotonNodeType.GoMolecularEntity] = {
                id: GoMolecularEntity.id,
                type: exports.AnnotonNodeType.GoMolecularEntity,
                category: [GoMolecularEntity],
                label: 'Gene Product',
                skipEvidence: true,
                termRequired: true,
                displaySection: pantherFormConfig.displaySection.gp,
                displayGroup: pantherFormConfig.displayGroup.gp,
                weight: 1
            },
            _c),
        triples: [],
    };
    var activityUnitDescription = {
        type: exports.AnnotonType.default,
        nodes: (_d = {},
            _d[exports.AnnotonNodeType.GoMolecularFunction] = {
                id: GoMolecularFunction.id,
                type: exports.AnnotonNodeType.GoMolecularFunction,
                category: [GoMolecularFunction],
                label: 'Molecular Function',
                aspect: 'F',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                termRequired: true,
                weight: 1
            },
            _d[exports.AnnotonNodeType.GoMolecularEntity] = {
                id: GoMolecularEntity.id,
                type: exports.AnnotonNodeType.GoMolecularEntity,
                category: [GoMolecularEntity],
                label: 'Gene Product',
                skipEvidence: true,
                displaySection: pantherFormConfig.displaySection.gp,
                displayGroup: pantherFormConfig.displayGroup.gp,
                termRequired: true,
                weight: 2
            },
            _d[exports.AnnotonNodeType.GoBiologicalProcess] = {
                id: GoBiologicalProcess.id,
                type: exports.AnnotonNodeType.GoBiologicalProcess,
                category: [GoBiologicalProcess],
                label: 'MF part of Biological Process',
                aspect: 'P',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                weight: 10
            },
            _d[exports.AnnotonNodeType.GoCellularComponent] = {
                id: GoCellularComponent.id,
                type: exports.AnnotonNodeType.GoCellularComponent,
                category: [GoCellularComponent],
                label: 'MF occurs in Cellular Component',
                aspect: 'C',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                weight: 20
            },
            _d),
        triples: [{
                subject: exports.AnnotonNodeType.GoMolecularFunction,
                object: exports.AnnotonNodeType.GoMolecularEntity,
                predicate: pantherFormConfig.edge.enabledBy
            }, {
                subject: exports.AnnotonNodeType.GoMolecularFunction,
                object: exports.AnnotonNodeType.GoBiologicalProcess,
                predicate: pantherFormConfig.edge.partOf
            }, {
                subject: exports.AnnotonNodeType.GoMolecularFunction,
                object: exports.AnnotonNodeType.GoCellularComponent,
                predicate: pantherFormConfig.edge.occursIn
            }],
    };
    var bpOnlyAnnotationDescription = {
        type: exports.AnnotonType.bpOnly,
        nodes: (_e = {},
            _e[exports.AnnotonNodeType.GoMolecularFunction] = {
                id: GoMolecularFunction.id,
                type: exports.AnnotonNodeType.GoMolecularFunction,
                category: [GoMolecularFunction],
                label: 'Molecular Function',
                aspect: 'F',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                visible: false,
                weight: 1
            },
            _e[exports.AnnotonNodeType.GoMolecularEntity] = {
                id: GoMolecularEntity.id,
                type: exports.AnnotonNodeType.GoMolecularEntity,
                category: [GoMolecularEntity],
                label: 'Gene Product',
                skipEvidence: true,
                displaySection: pantherFormConfig.displaySection.gp,
                displayGroup: pantherFormConfig.displayGroup.gp,
                termRequired: true,
                weight: 2
            },
            _e[exports.AnnotonNodeType.GoBiologicalProcess] = {
                id: GoBiologicalProcess.id,
                type: exports.AnnotonNodeType.GoBiologicalProcess,
                category: [GoBiologicalProcess],
                label: 'Biological Process',
                aspect: 'P',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                termRequired: true,
                weight: 10
            },
            _e[exports.AnnotonNodeType.GoCellularComponent] = {
                id: GoCellularComponent.id,
                type: exports.AnnotonNodeType.GoCellularComponent,
                category: [GoCellularComponent],
                label: 'occurs in Cellular Component',
                aspect: 'C',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                weight: 20
            },
            _e),
        triples: [{
                subject: exports.AnnotonNodeType.GoMolecularFunction,
                object: exports.AnnotonNodeType.GoMolecularEntity,
                predicate: pantherFormConfig.edge.enabledBy
            }, {
                subject: exports.AnnotonNodeType.GoMolecularFunction,
                object: exports.AnnotonNodeType.GoBiologicalProcess,
                predicate: pantherFormConfig.edge.causallyUpstreamOfOrWithin
            }, {
                subject: exports.AnnotonNodeType.GoBiologicalProcess,
                object: exports.AnnotonNodeType.GoCellularComponent,
                predicate: pantherFormConfig.edge.occursIn
            }],
        overrides: (_f = {},
            _f[exports.AnnotonNodeType.GoBiologicalProcess] = {
                label: 'Biological Process',
            },
            _f[exports.AnnotonNodeType.GoCellularComponent] = {},
            _f)
    };
    var ccOnlyAnnotationDescription = {
        type: exports.AnnotonType.ccOnly,
        nodes: (_g = {},
            _g[exports.AnnotonNodeType.GoMolecularEntity] = {
                id: GoMolecularEntity.id,
                type: exports.AnnotonNodeType.GoMolecularEntity,
                category: [GoMolecularEntity],
                label: 'Gene Product',
                skipEvidence: true,
                termRequired: true,
                displaySection: pantherFormConfig.displaySection.gp,
                displayGroup: pantherFormConfig.displayGroup.gp,
                weight: 1
            },
            _g[exports.AnnotonNodeType.GoCellularComponent] = {
                id: GoCellularComponent.id,
                type: exports.AnnotonNodeType.GoCellularComponent,
                category: [GoCellularComponent],
                aspect: 'C',
                termRequired: true,
                label: 'Part Of Cellular Component',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                weight: 2
            },
            _g),
        triples: [{
                subject: exports.AnnotonNodeType.GoMolecularEntity,
                object: exports.AnnotonNodeType.GoCellularComponent,
                predicate: pantherFormConfig.edge.partOf
            }],
    };
    var createActivity = function (activityDescription) {
        var self = _this;
        var annoton = new Annoton();
        annoton.annotonType = activityDescription.type;
        lodash.each(activityDescription.nodes, function (node) {
            var annotonNode = generateBaseTerm(node.category, node);
            annoton.addNode(annotonNode);
        });
        lodash.each(activityDescription.triples, function (triple) {
            var objectNode = annoton.getNode(triple.object);
            var predicate = objectNode.predicate;
            predicate.edge = Entity.createEntity(triple.predicate);
            objectNode.treeLevel++;
            annoton.addEdgeById(triple.subject, triple.object, predicate);
        });
        annoton.postRunUpdate();
        annoton.updateEntityInsertMenu();
        annoton.enableSubmit();
        return annoton;
    };
    var insertNode = function (annoton, subjectNode, nodeDescription) {
        var objectNode = generateBaseTerm(nodeDescription.node.category, nodeDescription.node);
        objectNode.id = nodeDescription.node.isKey ?
            nodeDescription.node.type :
            nodeDescription.node.type + "'@@'" + v1();
        objectNode.type = nodeDescription.node.type;
        annoton.addNode(objectNode);
        objectNode.treeLevel = subjectNode.treeLevel + 1;
        var predicate = annoton.getNode(objectNode.id).predicate;
        predicate.edge = Entity.createEntity(nodeDescription.predicate);
        annoton.updateEdges(subjectNode, objectNode, predicate);
        annoton.resetPresentation();
        return objectNode;
    };

    var Article = /** @class */ (function () {
        function Article() {
        }
        return Article;
    }());

    var Contributor = /** @class */ (function () {
        function Contributor() {
            this.group = {};
            this._groups = [];
        }
        Object.defineProperty(Contributor.prototype, "groups", {
            get: function () {
                return this._groups;
            },
            set: function (groups) {
                this._groups = groups;
                if (groups && groups.length > 0) {
                    this.group = groups[0];
                }
            },
            enumerable: true,
            configurable: true
        });
        return Contributor;
    }());
    function compareContributor(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        else {
            return 1;
        }
    }

    var Page = /** @class */ (function () {
        function Page() {
            this.size = 0;
            this.total = 0;
            this.pageNumber = 0;
        }
        return Page;
    }());
    var CamPage = /** @class */ (function (_super) {
        __extends(CamPage, _super);
        function CamPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CamPage;
    }(Page));

    function compareGroup(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        else {
            return 1;
        }
    }

    var Organism = /** @class */ (function () {
        function Organism() {
        }
        return Organism;
    }());
    function compareOrganism(a, b) {
        if (a.taxonName < b.taxonName) {
            return -1;
        }
        else {
            return 1;
        }
    }

    function evidenceValidator(termNode) {
        return function (control) {
            var _a, _b;
            if (termNode && termNode.hasValue()) {
                if (control.value) {
                    if (!control.value.id) {
                        return _a = {}, _a["Selevt correct evidence for \"" + termNode.label + "\" correct value"] = { value: control.value }, _a;
                    }
                }
                else {
                    return _b = {}, _b["Evidence for \"" + termNode.label + "\" is required"] = { value: control.value }, _b;
                }
            }
            return null;
        };
    }

    var EvidenceForm = /** @class */ (function () {
        function EvidenceForm(metadata, term, evidence) {
            this.evidence = new forms.FormControl();
            this.reference = new forms.FormControl();
            this.with = new forms.FormControl();
            this._metadata = metadata;
            this._term = term;
            if (evidence) {
                this.uuid = evidence.uuid;
                this.evidence.setValue(evidence.evidence);
                this.reference.setValue(evidence.reference);
                this.with.setValue(evidence.with);
            }
            this.setEvidenceValidator();
        }
        EvidenceForm.prototype.populateEvidence = function (evidence) {
            evidence.evidence = new Entity(this.evidence.value.id, this.evidence.value.label);
            evidence.reference = this.reference.value;
            evidence.with = this.with.value;
        };
        EvidenceForm.prototype.onValueChanges = function (predicate) {
            var self = this;
            self.evidence.valueChanges.pipe(operators.distinctUntilChanged(), operators.debounceTime(400)).subscribe(function (data) {
                self._metadata.lookupFunc.termLookup(data, predicate.evidenceLookup.requestParams).subscribe(function (response) {
                    predicate.evidenceLookup.results = response;
                });
            });
            self.reference.valueChanges.pipe(operators.distinctUntilChanged(), operators.debounceTime(400)).subscribe(function (data) {
                predicate.referenceLookup.results = self._metadata.lookupFunc.evidenceLookup(data, 'reference');
            });
            self.with.valueChanges.pipe(operators.distinctUntilChanged(), operators.debounceTime(400)).subscribe(function (data) {
                predicate.withLookup.results = self._metadata.lookupFunc.evidenceLookup(data, 'with');
            });
        };
        EvidenceForm.prototype.setEvidenceValidator = function () {
            this.evidence.setValidators(evidenceValidator(this._term));
        };
        EvidenceForm.prototype.getErrors = function (error) {
            if (this.evidence.errors) {
                error.push(this.evidence.errors);
            }
            if (this.reference.errors) {
                error.push(this.reference.errors);
            }
            if (this.with.errors) {
                error.push(this.with.errors);
            }
        };
        return EvidenceForm;
    }());

    var AnnotonConnectorForm = /** @class */ (function () {
        function AnnotonConnectorForm(metadata) {
            this.edge = new forms.FormControl();
            this.mechanism = new forms.FormControl();
            this.causalEffect = new forms.FormControl();
            this.evidenceForms = [];
            this.evidenceFormArray = new forms.FormArray([]);
            this.process = new forms.FormControl();
            this.hasInput = new forms.FormControl();
            this._fb = new forms.FormBuilder();
            this._metadata = metadata;
        }
        AnnotonConnectorForm.prototype.createEntityForms = function (predicate, hasInput) {
            var self = this;
            this.hasInput.setValue(hasInput.getTerm());
            predicate.evidence.forEach(function (evidence) {
                var evidenceForm = new EvidenceForm(self._metadata, null, evidence);
                self.evidenceForms.push(evidenceForm);
                evidenceForm.onValueChanges(predicate);
                self.evidenceFormArray.push(self._fb.group(evidenceForm));
            });
        };
        AnnotonConnectorForm.prototype.updateEvidenceForms = function (predicate) {
            var self = this;
            self.evidenceForms = [];
            self.evidenceFormArray = new forms.FormArray([]);
            predicate.evidence.forEach(function (evidence) {
                var evidenceForm = new EvidenceForm(self._metadata, null, evidence);
                self.evidenceForms.push(evidenceForm);
                evidenceForm.onValueChanges(predicate);
                self.evidenceFormArray.push(self._fb.group(evidenceForm));
            });
        };
        AnnotonConnectorForm.prototype.populateConnectorForm = function () {
            var self = this;
            var evidences = [];
            self.evidenceForms.forEach(function (evidenceForm) {
                var evidence = new Evidence();
                evidenceForm.populateEvidence(evidence);
                evidences.push(evidence);
            });
        };
        AnnotonConnectorForm.prototype.onValueChanges = function (lookup) {
            var self = this;
            self.hasInput.valueChanges.pipe(operators.distinctUntilChanged(), operators.debounceTime(400)).subscribe(function (data) {
                self._metadata.lookupFunc.termLookup(data, lookup.requestParams).subscribe(function (response) {
                    lookup.results = response;
                });
            });
        };
        return AnnotonConnectorForm;
    }());

    function termValidator(termNode) {
        return function (control) {
            var _a, _b;
            if (control.value) {
                if (!control.value.id) {
                    return _a = {}, _a["Selevt " + termNode.label + " correct value"] = { value: control.value }, _a;
                }
            }
            else {
                return _b = {}, _b[termNode.label + " is required"] = { value: control.value }, _b;
            }
            return null;
        };
    }

    var EntityForm = /** @class */ (function () {
        function EntityForm(metadata, entity) {
            this.relationship = new forms.FormControl();
            this.term = new forms.FormControl();
            this.evidenceForms = [];
            this.evidenceFormArray = new forms.FormArray([]);
            this._fb = new forms.FormBuilder();
            this._metadata = metadata;
            this.id = entity.id;
            this.node = entity;
            this.term.setValue(entity.getTerm());
            this.relationship.setValue(entity.predicate.edge);
            this._onValueChanges(entity.termLookup);
        }
        EntityForm.prototype.createEvidenceForms = function (entity) {
            var self = this;
            this.setTermValidator(entity);
            entity.predicate.evidence.forEach(function (evidence) {
                var evidenceForm = new EvidenceForm(self._metadata, entity, evidence);
                self.evidenceForms.push(evidenceForm);
                evidenceForm.onValueChanges(entity.predicate);
                //  evidenceForm.setTermValidator(termValidator(this.term, entity));
                self.evidenceFormArray.push(self._fb.group(evidenceForm));
            });
        };
        EntityForm.prototype.populateTerm = function () {
            var self = this;
            if (self.relationship.value && self.node.relationEditable) {
                self.node.predicate.edge = self.relationship.value;
            }
            if (self.term.value && self.term.value.id) {
                self.node.term = new Entity(self.term.value.id, self.term.value.label);
                self.evidenceForms.forEach(function (evidenceForm, index) {
                    var evidence = self.node.predicate.evidence[index];
                    if (evidence) {
                        evidenceForm.populateEvidence(evidence);
                    }
                });
            }
        };
        EntityForm.prototype._onValueChanges = function (lookup) {
            var self = this;
            self.term.valueChanges.pipe(operators.distinctUntilChanged(), operators.debounceTime(400)).subscribe(function (data) {
                self._metadata.lookupFunc.termLookup(data, lookup.requestParams).subscribe(function (response) {
                    lookup.results = response;
                });
            });
        };
        EntityForm.prototype.setTermValidator = function (entity) {
            this.term.setValidators(entity.id === 'mf' ? termValidator(entity) : null);
            //  this.term.setValidators([validatorFn])
        };
        EntityForm.prototype.getErrors = function (error) {
            var self = this;
            if (self.term.errors) {
                error.push(self.term.errors);
            }
            self.evidenceForms.forEach(function (evidenceForm) {
                evidenceForm.getErrors(error);
            });
        };
        return EntityForm;
    }());

    var EntityGroupForm = /** @class */ (function () {
        function EntityGroupForm(metadata) {
            this.name = '';
            this.isComplement = false;
            this.entityForms = [];
            this.entityGroup = new forms.FormArray([]);
            this._fb = new forms.FormBuilder();
            this._metadata = metadata;
        }
        EntityGroupForm.prototype.createEntityForms = function (entities) {
            var self = this;
            this.entityForms = [];
            entities.forEach(function (entity) {
                if (entity.visible) {
                    var entityForm = new EntityForm(self._metadata, entity);
                    if (!entity.skipEvidence) {
                        entityForm.createEvidenceForms(entity);
                    }
                    self.entityForms.push(entityForm);
                    self.entityGroup.push(self._fb.group(entityForm));
                }
            });
        };
        EntityGroupForm.prototype.populateAnnotonNodes = function (annoton) {
            var self = this;
            self.entityForms.forEach(function (entityForm) {
                entityForm.populateTerm();
            });
        };
        EntityGroupForm.prototype.getErrors = function (error) {
            var self = this;
            self.entityForms.forEach(function (entityForm) {
                entityForm.getErrors(error);
            });
        };
        return EntityGroupForm;
    }());

    var AnnotonForm = /** @class */ (function () {
        function AnnotonForm(metadata) {
            this.entityGroupForms = [];
            this.bpOnlyEdge = new forms.FormControl();
            this.gp = new forms.FormArray([]);
            this.fd = new forms.FormArray([]);
            this._fb = new forms.FormBuilder();
            this._metadata = metadata;
        }
        AnnotonForm.prototype.createMolecularEntityForm = function (gpData) {
            var _this = this;
            var self = this;
            lodash.each(gpData, function (nodeGroup, nodeKey) {
                var entityGroupForm = new EntityGroupForm(_this._metadata);
                _this.entityGroupForms.push(entityGroupForm);
                entityGroupForm.name = nodeKey;
                entityGroupForm.createEntityForms(nodeGroup.nodes);
                self.gp.push(self._fb.group(entityGroupForm));
            });
        };
        AnnotonForm.prototype.createFunctionDescriptionForm = function (fdData) {
            var _this = this;
            var self = this;
            lodash.each(fdData, function (nodeGroup, nodeKey) {
                var entityGroupForm = new EntityGroupForm(_this._metadata);
                _this.entityGroupForms.push(entityGroupForm);
                entityGroupForm.name = nodeKey;
                entityGroupForm.isComplement = nodeGroup.isComplement;
                entityGroupForm.createEntityForms(nodeGroup.nodes);
                self.fd.push(self._fb.group(entityGroupForm));
            });
        };
        AnnotonForm.prototype.populateAnnoton = function (annoton) {
            this.entityGroupForms.forEach(function (entityGroupForm) {
                entityGroupForm.populateAnnotonNodes(annoton);
            });
            if (this.bpOnlyEdge.value) {
                annoton.bpOnlyEdge = new Entity(this.bpOnlyEdge.value.id, this.bpOnlyEdge.value.label);
            }
        };
        AnnotonForm.prototype.getErrors = function (error) {
            this.entityGroupForms.forEach(function (entityGroupForm) {
                entityGroupForm.getErrors(error);
            });
        };
        return AnnotonForm;
    }());

    var AnnotonFormMetadata = /** @class */ (function () {
        function AnnotonFormMetadata(lookupFunc) {
            this._lookupFunc = lookupFunc;
        }
        Object.defineProperty(AnnotonFormMetadata.prototype, "lookupFunc", {
            get: function () {
                return this._lookupFunc();
            },
            enumerable: true,
            configurable: true
        });
        return AnnotonFormMetadata;
    }());

    var TripleForm = /** @class */ (function () {
        function TripleForm(metadata) {
            this.subject = new forms.FormControl();
            this.object = new forms.FormControl();
            this.evidenceForms = [];
            this.evidenceFormArray = new forms.FormArray([]);
            this._fb = new forms.FormBuilder();
            this._metadata = metadata;
        }
        TripleForm.prototype.createTripleForm = function (triple) {
            var self = this;
            this.subject.setValue(triple.subject.getTerm());
            this.object.setValue(triple.object.getTerm());
            this.onValueChanges(triple.subject.termLookup);
            triple.predicate.evidence.forEach(function (evidence) {
                var evidenceForm = new EvidenceForm(self._metadata, triple.subject, evidence);
                self.evidenceForms.push(evidenceForm);
                evidenceForm.onValueChanges(triple.predicate);
                self.evidenceFormArray.push(self._fb.group(evidenceForm));
            });
        };
        TripleForm.prototype.populateAnnotonEntityForm = function (annotonNode) {
            var self = this;
            annotonNode.term = new Entity(this.subject.value.id, this.subject.value.label);
            self.evidenceForms.forEach(function () {
                // const evidenceFound = annotonNode.getEvidenceById(evidenceForm.uuid);
                // const evidence = evidenceFound ? evidenceFound : new Evidence();
                //  evidenceForm.populateEvidence(evidence);
                //  evidences.push(evidence)
            });
            // annotonNode.setEvidence(evidences);
        };
        TripleForm.prototype.onValueChanges = function (lookup) {
            var self = this;
            self.subject.valueChanges.pipe(operators.distinctUntilChanged(), operators.debounceTime(400)).subscribe(function (data) {
                self._metadata.lookupFunc.termLookup(data, lookup.requestParams).subscribe(function (response) {
                    lookup.results = response;
                });
            });
        };
        return TripleForm;
    }());

    var CamForm = /** @class */ (function () {
        function CamForm(metadata) {
            this.title = new forms.FormControl();
            this.state = new forms.FormControl();
            this.group = new forms.FormControl();
            this._metadata = metadata;
        }
        CamForm.prototype.createCamForm = function (cam, user) {
            var self = this;
            if (cam) {
                self.title.setValue(cam.title);
                self.state.setValue(cam.state);
                self.group.setValue(user ? user.group : '');
            }
        };
        CamForm.prototype.getError = function () {
        };
        CamForm.prototype.populateConnectorForm = function (cam) {
            var self = this;
            cam.title = self.title.value;
            cam.state = self.state.value;
        };
        return CamForm;
    }());

    var PantherUserService = /** @class */ (function () {
        function PantherUserService(httpClient) {
            this.httpClient = httpClient;
            this.baristaUrl = environment.globalBaristaLocation;
            this.contributors = [];
            this.groups = [];
            this.onUserChanged = new rxjs.BehaviorSubject(undefined);
        }
        Object.defineProperty(PantherUserService.prototype, "baristaToken", {
            get: function () {
                return this._baristaToken;
            },
            set: function (value) {
                this._baristaToken = value;
            },
            enumerable: true,
            configurable: true
        });
        PantherUserService.prototype.getUser = function (baristaTokenParam) {
            var _this = this;
            var self = this;
            var baristaToken = baristaTokenParam ? baristaTokenParam : localStorage.getItem('barista_token');
            if (!baristaToken) {
                this.baristaToken = null;
                this.user = null;
                this.onUserChanged.next(this.user);
            }
            else {
                return this.httpClient.get(self.baristaUrl + "/user_info_by_token/" + baristaToken)
                    .subscribe(function (response) {
                    if (response) {
                        if (response.token) {
                            _this.user = new Contributor();
                            _this.user.name = response.nickname;
                            _this.user.groups = response.groups;
                            _this.user.token = _this.baristaToken = response.token;
                            localStorage.setItem('barista_token', _this.baristaToken);
                            _this.onUserChanged.next(_this.user);
                        }
                        else {
                            _this.user = null;
                            _this.baristaToken = null;
                            localStorage.removeItem('barista_token');
                            _this.onUserChanged.next(_this.user);
                        }
                        var url = new URL(window.location.href);
                        url.searchParams.delete('barista_token');
                        window.history.replaceState(null, null, url.href);
                    }
                });
            }
        };
        PantherUserService.prototype.getUsers = function () {
            var self = this;
            return this.httpClient.get(self.baristaUrl + "/users");
        };
        PantherUserService.prototype.getUserInfo = function (uri) {
            var self = this;
            var encodedUrl = encodeURIComponent(uri);
            return this.httpClient.get(self.baristaUrl + "/user_info_by_id/" + encodedUrl);
        };
        PantherUserService.prototype.getGroups = function () {
            var self = this;
            return this.httpClient.get(self.baristaUrl + "/groups");
        };
        PantherUserService.prototype.getGroupInfo = function (uri) {
            var self = this;
            var encodedUrl = encodeURIComponent(uri);
            return this.httpClient.get(self.baristaUrl + "/group_info_by_id/" + encodedUrl);
        };
        PantherUserService.prototype.filterContributors = function (value) {
            var filterValue = value.toLowerCase();
            return this.contributors.filter(function (contributor) { return contributor.name.toLowerCase().indexOf(filterValue) === 0; });
        };
        PantherUserService.prototype.filterGroups = function (value) {
            var filterValue = value.toLowerCase();
            return this.groups.filter(function (group) { return group.name.toLowerCase().indexOf(filterValue) === 0; });
        };
        PantherUserService.prototype.getGroupName = function (url) {
            var self = this;
            var group = lodash.find(self.groups, function (inGroup) {
                return inGroup.url === url;
            });
            return group ? group.name : url;
        };
        PantherUserService.prototype.distinctUser = function (prev, curr) {
            if (prev && curr) {
                return prev.token === curr.token;
            }
            else {
                return prev === curr;
            }
        };
        PantherUserService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        PantherUserService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherUserService_Factory() { return new PantherUserService(core.ɵɵinject(http.HttpClient)); }, token: PantherUserService, providedIn: "root" });
        PantherUserService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherUserService);
        return PantherUserService;
    }());

    var PantherFormConfigService = /** @class */ (function () {
        function PantherFormConfigService(pantherUserService) {
            this.pantherUserService = pantherUserService;
            this.globalUrl = {};
            this._parameterize = function (params) {
                return Object.keys(params).map(function (key) { return key + '=' + params[key]; }).join('&');
            };
            this.onSetupReady = new rxjs.BehaviorSubject(null);
        }
        Object.defineProperty(PantherFormConfigService.prototype, "edges", {
            get: function () {
                return pantherFormConfig.edge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "modelState", {
            get: function () {
                var options = [
                    pantherFormConfig.modelState.options.development,
                    pantherFormConfig.modelState.options.production,
                    pantherFormConfig.modelState.options.review,
                    pantherFormConfig.modelState.options.closed,
                    pantherFormConfig.modelState.options.delete
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        PantherFormConfigService.prototype.findModelState = function (name) {
            var self = this;
            return lodash.find(self.modelState.options, function (modelState) {
                return modelState.name === name;
            });
        };
        Object.defineProperty(PantherFormConfigService.prototype, "evidenceDBs", {
            get: function () {
                var options = [
                    pantherFormConfig.evidenceDB.options.pmid,
                    pantherFormConfig.evidenceDB.options.doi,
                    pantherFormConfig.evidenceDB.options.goRef,
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "annotonType", {
            get: function () {
                var options = [
                    pantherFormConfig.annotonType.options.default,
                    pantherFormConfig.annotonType.options.bpOnly,
                    pantherFormConfig.annotonType.options.ccOnly,
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "bpOnlyEdges", {
            get: function () {
                var options = [
                    pantherFormConfig.edge.causallyUpstreamOfOrWithin,
                    pantherFormConfig.edge.causallyUpstreamOf,
                    pantherFormConfig.edge.causallyUpstreamOfPositiveEffect,
                    pantherFormConfig.edge.causallyUpstreamOfNegativeEffect,
                    pantherFormConfig.edge.causallyUpstreamOfOrWithinPositiveEffect,
                    pantherFormConfig.edge.causallyUpstreamOfOrWithinNegativeEffect,
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "camDisplayType", {
            get: function () {
                var options = [
                    pantherFormConfig.camDisplayType.options.model,
                    pantherFormConfig.camDisplayType.options.triple,
                    pantherFormConfig.camDisplayType.options.entity
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "causalEffect", {
            get: function () {
                var options = [
                    pantherFormConfig.causalEffect.options.positive,
                    pantherFormConfig.causalEffect.options.negative,
                    pantherFormConfig.causalEffect.options.neutral
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "findReplaceCategories", {
            get: function () {
                var options = [
                    pantherFormConfig.findReplaceCategory.options.term,
                    pantherFormConfig.findReplaceCategory.options.gp,
                    pantherFormConfig.findReplaceCategory.options.reference,
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "mechanism", {
            get: function () {
                var options = [
                    pantherFormConfig.mechanism.options.direct,
                    pantherFormConfig.mechanism.options.known,
                    pantherFormConfig.mechanism.options.unknown
                ];
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PantherFormConfigService.prototype, "connectorProcess", {
            get: function () {
                var options = pantherFormConfig.connectorProcesses;
                return {
                    options: options,
                    selected: options[0]
                };
            },
            enumerable: true,
            configurable: true
        });
        PantherFormConfigService.prototype.setupUrls = function () {
            var self = this;
            var baristaToken = self.pantherUserService.baristaToken;
            var url = new URL(window.location.href);
            url.searchParams.delete('barista_token');
            var returnUrl = url.href;
            var baristaParams = { 'barista_token': baristaToken };
            var returnUrlParams = { 'return': returnUrl };
            this.loginUrl = environment.globalBaristaLocation + '/login?' +
                self._parameterize(Object.assign({}, returnUrlParams));
            this.logoutUrl = environment.globalBaristaLocation + '/logout?' +
                self._parameterize(Object.assign({}, baristaParams, returnUrlParams));
            this.pantherUrl = environment.pantherUrl + '?' + (baristaToken ? self._parameterize(Object.assign({}, baristaParams)) : '');
            this.homeUrl = window.location.href;
        };
        PantherFormConfigService.prototype.setUniversalUrls = function () {
            var self = this;
            self.globalUrl = {};
            var params = new http.HttpParams();
            if (self.pantherUserService.baristaToken) {
                params = params.append('barista_token', self.pantherUserService.baristaToken);
            }
            var paramsString = params.toString();
            self.globalUrl.goUrl = 'http://www.geneontology.org/';
            self.globalUrl.pantherUrl = environment.pantherUrl + '?' + paramsString;
            self.globalUrl.universalWorkbenches = environment.globalWorkbenchesUniversal.map(function (workbench) {
                return {
                    label: workbench['menu-name'],
                    url: environment.workbenchUrl + workbench['workbench-id'] + '?' + paramsString,
                };
            });
            return self.globalUrl;
        };
        PantherFormConfigService.prototype.getModelUrls = function (modelId) {
            var self = this;
            var modelInfo = {};
            var params = new http.HttpParams();
            if (self.pantherUserService.baristaToken) {
                params = params.append('barista_token', self.pantherUserService.baristaToken);
            }
            modelInfo.graphEditorUrl = environment.pantherUrl + '/editor/graph/' + modelId + '?' + params.toString();
            if (modelId) {
                params = params.append('model_id', modelId);
            }
            var paramsString = params.toString();
            modelInfo.owlUrl = environment.pantherUrl + '/download/' + modelId + '/owl';
            modelInfo.gpadUrl = environment.pantherUrl + '/download/' + modelId + '/gpad';
            modelInfo.pantherFormUrl = environment.workbenchUrl + 'panther-form?' + paramsString;
            modelInfo.modelWorkbenches = environment.globalWorkbenchesModel.map(function (workbench) {
                return {
                    label: workbench['menu-name'],
                    url: environment.workbenchUrl + workbench['workbench-id'] + '?' + paramsString,
                };
            });
            return modelInfo;
        };
        PantherFormConfigService.prototype.createAnnotonConnectorModel = function (upstreamAnnoton, downstreamAnnoton, srcProcessNode, srcHasInputNode) {
            var self = this;
            var srcUpstreamNode = upstreamAnnoton.getMFNode();
            var srcDownstreamNode = downstreamAnnoton ? downstreamAnnoton.getMFNode() : new AnnotonNode();
            var upstreamNode = generateBaseTerm([GoMolecularEntity], { id: 'upstream', isKey: true });
            var downstreamNode = generateBaseTerm([GoMolecularEntity], { id: 'downstream', isKey: true });
            var processNode = srcProcessNode ?
                srcProcessNode :
                generateBaseTerm([GoBiologicalProcess], { id: 'process', isKey: true });
            var hasInputNode = srcHasInputNode ?
                srcHasInputNode :
                generateBaseTerm([GoChemicalEntity], { id: 'has-input', isKey: true });
            upstreamNode.copyValues(srcUpstreamNode);
            downstreamNode.copyValues(srcDownstreamNode);
            var connectorAnnoton = new ConnectorAnnoton(upstreamNode, downstreamNode);
            connectorAnnoton.predicate = new Predicate(null);
            connectorAnnoton.predicate.setEvidence(srcUpstreamNode.predicate.evidence);
            connectorAnnoton.upstreamAnnoton = upstreamAnnoton;
            connectorAnnoton.downstreamAnnoton = downstreamAnnoton;
            connectorAnnoton.processNode = processNode;
            connectorAnnoton.hasInputNode = hasInputNode;
            return connectorAnnoton;
        };
        PantherFormConfigService.prototype.createAnnotonBaseModel = function (modelType) {
            switch (modelType) {
                case exports.AnnotonType.default:
                    return createActivity(activityUnitBaseDescription);
                case exports.AnnotonType.bpOnly:
                    return createActivity(bpOnlyAnnotationBaseDescription);
                case exports.AnnotonType.ccOnly:
                    return createActivity(ccOnlyAnnotationBaseDescription);
            }
        };
        PantherFormConfigService.prototype.createAnnotonModel = function (modelType) {
            switch (modelType) {
                case exports.AnnotonType.default:
                    return createActivity(activityUnitDescription);
                case exports.AnnotonType.bpOnly:
                    return createActivity(bpOnlyAnnotationDescription);
                case exports.AnnotonType.ccOnly:
                    return createActivity(ccOnlyAnnotationDescription);
            }
        };
        PantherFormConfigService.prototype.insertAnnotonNode = function (annoton, subjectNode, nodeDescription) {
            return insertNode(annoton, subjectNode, nodeDescription);
        };
        PantherFormConfigService.prototype.createAnnotonModelFakeData = function (nodes) {
            var self = this;
            var annoton = self.createAnnotonModel(exports.AnnotonType.default);
            nodes.forEach(function (node) {
                var annotonNode = annoton.getNode(node.id);
                var destEvidences = [];
                annotonNode.term = new Entity(node.term.id, node.term.label);
                lodash.each(node.evidence, function (evidence) {
                    var destEvidence = new Evidence();
                    destEvidence.evidence = new Entity(evidence.evidence.id, evidence.evidence.label);
                    destEvidence.reference = evidence.reference;
                    destEvidence.with = evidence.with;
                    destEvidences.push(destEvidence);
                });
                annotonNode.predicate.setEvidence(destEvidences);
            });
            annoton.enableSubmit();
            return annoton;
        };
        PantherFormConfigService.prototype.findEdge = function (predicateId) {
            lodash.find(pantherFormConfig.edge, {
                id: predicateId
            });
        };
        PantherFormConfigService.prototype.getAspect = function (id) {
            var rootNode = lodash.find(pantherFormConfig.rootNode, { id: id });
            return rootNode ? rootNode.aspect : '';
        };
        PantherFormConfigService.prototype.getModelId = function (url) {
            return 'gomodel:' + url.substr(url.lastIndexOf('/') + 1);
        };
        PantherFormConfigService.prototype.getIndividalId = function (url) {
            return 'gomodel:' + url.substr(url.lastIndexOf('/') + 2);
        };
        PantherFormConfigService.ctorParameters = function () { return [
            { type: PantherUserService }
        ]; };
        PantherFormConfigService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherFormConfigService_Factory() { return new PantherFormConfigService(core.ɵɵinject(PantherUserService)); }, token: PantherFormConfigService, providedIn: "root" });
        PantherFormConfigService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherFormConfigService);
        return PantherFormConfigService;
    }());

    var gconf = new golrConf.conf(amigo2.data.golr);
    var gserv = environment.globalGolrServer; // "http://golr.berkeleybop.org/";
    var impl_engine = bbopRestManager.jquery;


    var engine = new impl_engine(bbopResponseGolr);
    engine.use_jsonp(true);
    var PantherLookupService = /** @class */ (function () {
        function PantherLookupService(httpClient, pantherFormConfigService) {
            this.httpClient = httpClient;
            this.pantherFormConfigService = pantherFormConfigService;
            this.evidenceList = [];
            this.termList = [];
            this.name = 'DefaultLookupName';
            this.linker = new amigo2.linker();
            this.golrURLBase = environment.globalGolrNeoServer + "select?";
            // this.trusted = this.$sce.trustAsResourceUrl(this.golrURLBase);
            this.localClosures = [];
            //  this.golrLookupManager();
        }
        PantherLookupService.prototype.lookupFunc = function () {
            return {
                termLookup: this.termLookup.bind(this),
                evidenceLookup: this.evidenceLookup.bind(this)
            };
        };
        PantherLookupService.prototype.escapeGolrValue = function (str) {
            var pattern = /([\!\*\+\-\=\<\>\&\|\(\)\[\]\{\}\^\~\?\:\\/"])/g;
            return str.replace(pattern, "\\$1");
        };
        PantherLookupService.prototype.buildQ = function (str) {
            var manager = new bbopManagerGolr(gserv, gconf, engine, 'async');
            manager.set_comfy_query(str);
            return manager.get_query(str);
        };
        PantherLookupService.prototype.termLookup = function (searchText, requestParams) {
            var self = this;
            requestParams.q = self.buildQ(searchText);
            var params = new http.HttpParams({
                fromObject: requestParams
            });
            var url = this.golrURLBase + params.toString();
            return this.httpClient.jsonp(url, 'json.wrf').pipe(operators.map(function (response) { return self._lookupMap(response); }));
        };
        PantherLookupService.prototype.termPreLookup = function (type) {
            var self = this;
            var filtered = lodash.filter(self.termList, function (annotonNode) {
                return annotonNode.type === type;
            });
            return filtered.map(function (annotonNode) {
                return annotonNode.term;
            });
        };
        PantherLookupService.prototype.evidencePreLookup = function () {
            var self = this;
            var filtered = lodash.uniqWith(this.evidenceList, compareEvidenceEvidence);
            return filtered.map(function (evidence) {
                return evidence.evidence;
            });
        };
        PantherLookupService.prototype.referencePreLookup = function () {
            var self = this;
            var filtered = lodash.uniqWith(self.evidenceList, compareEvidenceReference);
            return filtered.map(function (evidence) {
                return evidence.reference;
            });
        };
        PantherLookupService.prototype.withPreLookup = function () {
            var self = this;
            var filtered = lodash.uniqWith(self.evidenceList, compareEvidenceWith);
            return filtered.map(function (evidence) {
                return evidence.with;
            });
        };
        PantherLookupService.prototype.evidenceLookup = function (searchText, category) {
            var self = this;
            var filterValue = searchText.toLowerCase();
            var filteredResults = [];
            switch (category) {
                case 'reference':
                    filteredResults = self.referencePreLookup().filter(function (option) { return option ? option.toLowerCase().includes(filterValue) : false; });
                    break;
                case 'with':
                    filteredResults = self.withPreLookup().filter(function (option) { return option ? option.toLowerCase().includes(filterValue) : false; });
                    break;
            }
            return filteredResults;
        };
        PantherLookupService.prototype.companionLookup = function (gp, aspect, extraParams) {
            var golrUrl = environment.globalGolrServer + "select?";
            var requestParams = {
                defType: 'edismax',
                qt: 'standard',
                indent: 'on',
                wt: 'json',
                sort: 'annotation_class_label asc',
                rows: '100',
                start: '0',
                fl: '*,score',
                facet: 'true',
                'facet.mincount': '1',
                'facet.sort': 'count',
                'json.nl': 'arrarr',
                'facet.limit': '100',
                fq: [
                    'document_category: "annotation"',
                    'aspect: "' + aspect + '"',
                    'bioentity: "' + gp + '"'
                ],
                'facet.field': [
                    'source',
                    'assigned_by',
                    'aspect',
                    'evidence_type_closure',
                    // 'panther_family_label',
                    // 'qualifier',
                    // 'taxon_label',
                    'annotation_class_label',
                ],
                q: '*:*',
            };
            if (extraParams.term) {
                requestParams.fq.push('annotation_class:"' + extraParams.term + '"');
            }
            if (extraParams.evidence) {
                requestParams.fq.push('evidence:"' + extraParams.evidence + '"');
            }
            var params = new http.HttpParams({
                fromObject: requestParams
            });
            // .set('callback', 'JSONP_CALLBACK')
            //.set('jsonpCallbackParam', 'json.wrf')
            // .set('params', requestParams);
            var url = golrUrl + params.toString();
            return this.httpClient.jsonp(url, 'json.wrf').pipe(operators.map(function (response) {
                var docs = response['response'].docs;
                var result = [];
                lodash.each(docs, function (doc) {
                    var annotonNode;
                    var evidence = new Evidence();
                    evidence.setEvidence(new Entity(doc.evidence, doc.evidence_label));
                    if (doc.reference && doc.reference.length > 0) {
                        evidence.reference = doc.reference[0];
                    }
                    if (doc.evidence_with && doc.evidence_with.length > 0) {
                        evidence.with = doc.evidence_with[0];
                    }
                    evidence.assignedBy = new Entity(null, doc.assigned_by);
                    annotonNode = lodash.find(result, function (srcAnnotonNode) {
                        return srcAnnotonNode.getTerm().id === doc.annotation_class;
                    });
                    if (annotonNode) {
                        annotonNode.predicate.addEvidence(evidence);
                    }
                    else {
                        annotonNode = new AnnotonNode();
                        annotonNode.predicate = new Predicate(null);
                        annotonNode.term = new Entity(doc.annotation_class, doc.annotation_class_label);
                        annotonNode.predicate.addEvidence(evidence);
                        result.push(annotonNode);
                    }
                });
                return result;
            }));
        };
        PantherLookupService.prototype.categoryToClosure = function (categories) {
            return categories.map(function (category) {
                return category.categoryType + ":\"" + category.category + "\"";
            }).join(' OR ');
        };
        PantherLookupService.prototype.isaClosure = function (a, b) {
            var self = this;
            var requestParams = {
                q: self.buildQ(a),
                defType: 'edismax',
                indent: 'on',
                qt: 'standard',
                wt: 'json',
                rows: '2',
                start: '0',
                fl: '*,score',
                'facet': 'true',
                'facet.mincount': '1',
                'facet.sort': 'count',
                'facet.limit': '25',
                'json.nl': 'arrarr',
                packet: '1',
                callback_type: 'search',
                'facet.field': [
                    'source',
                    'subset',
                    'idspace',
                    'is_obsolete'
                ],
                fq: [
                    'document_category:"ontology_class"',
                    b
                ],
                qf: [
                    'annotation_class^3',
                    'isa_closure^1',
                ]
            };
            var params = new http.HttpParams({
                fromObject: requestParams
            });
            var url = this.golrURLBase + params.toString();
            return this.httpClient.jsonp(url, 'json.wrf').pipe(operators.map(function (response) {
                var docs = response['response'].docs;
                var result = false;
                if (docs.length > 0) {
                    result = docs[0].annotation_class === a;
                }
                return result;
            }));
        };
        // Closures
        PantherLookupService.prototype.addLocalClosure = function (term, closure, isaClosure) {
            var self = this;
            var data = {
                term: term,
                closure: closure,
                isaClosure: isaClosure
            };
            if (!self.localClosureExist(term, closure)) {
                self.localClosures.push(data);
            }
        };
        PantherLookupService.prototype.localClosureExist = function (term, closure) {
            var self = this;
            var data = new AnnotonNodeClosure(term, closure);
            return (lodash.find(self.localClosures, data));
        };
        PantherLookupService.prototype.getLocalClosurex = function (term, categories) {
            var self = this;
            var closure = self.categoryToClosure(categories);
            var data = self.localClosureExist(term, closure);
            if (data) {
                return data.isaClosure;
            }
            else {
                // we don't know locally
                return undefined;
            }
        };
        PantherLookupService.prototype.getLocalClosures = function (term) {
            var self = this;
            return lodash.filter(self.localClosures, { term: term, isaClosure: true });
        };
        PantherLookupService.prototype.getTermURL = function (id) {
            var self = this;
            if (id.startsWith('ECO')) {
                return 'http://www.evidenceontology.org/term/' + id;
            }
            else if (id.startsWith('PMID')) {
                var idAccession = id.split(':');
                if (idAccession.length > 1) {
                    return 'https://www.ncbi.nlm.nih.gov/pubmed/' + idAccession[1].trim();
                }
                else {
                    return null;
                }
            }
            else {
                return self.linker.url(id);
            }
        };
        PantherLookupService.prototype.getPubmedInfo = function (pmid) {
            var _this = this;
            var url = environment.pubMedSummaryApi + pmid;
            return this.httpClient
                .get(url)
                .pipe(operators.map(function (res) { return res['result']; }), operators.map(function (res) { return res[pmid]; }), operators.map(function (res) { return _this._addArticles(res, pmid); }));
        };
        PantherLookupService.prototype._addArticles = function (res, pmid) {
            var self = this;
            if (!res) {
                return;
            }
            var article = new Article();
            article.title = res.title;
            article.link = self.linker.url(pantherFormConfig.evidenceDB.options.pmid.name + ":" + pmid);
            article.date = res.pubdate;
            if (res.authors && Array.isArray(res.authors)) {
                article.author = res.authors.map(function (author) {
                    return author.name;
                }).join(', ');
            }
            return article;
        };
        PantherLookupService.prototype._lookupMap = function (response) {
            var self = this;
            var data = response.response.docs;
            var result = data.map(function (item) {
                var xref;
                if (item.database_xref && item.database_xref.length > 0) {
                    var xrefDB = item.database_xref[0].split(':');
                    xref = xrefDB.length > 1 ? xrefDB[1] : xrefDB[0];
                }
                return {
                    id: item.annotation_class,
                    label: item.annotation_class_label,
                    link: self.getTermURL(item.annotation_class),
                    description: item.description,
                    isObsolete: item.is_obsolete,
                    rootTypes: self._makeEntitiesArray(item.isa_closure, item.isa_closure_label),
                    xref: xref
                };
            });
            console.log(result);
            return result;
        };
        PantherLookupService.prototype._makeEntitiesArray = function (ids, labels) {
            var result = [];
            if (ids.length === labels.length) {
                result = ids.map(function (id, key) {
                    return new Entity(id, labels[key]);
                });
            }
            return lodash.filter(result, function (item) {
                return !item.id.startsWith('BFO');
            });
        };
        PantherLookupService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: PantherFormConfigService }
        ]; };
        PantherLookupService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherLookupService_Factory() { return new PantherLookupService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(PantherFormConfigService)); }, token: PantherLookupService, providedIn: "root" });
        PantherLookupService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherLookupService);
        return PantherLookupService;
    }());

    var goContextConfig = {
        "@context": {
            "gomodel": "http://model.geneontology.org/",
            "BIOMD": "http://www.ebi.ac.uk/compneur-srv/biomodels-main/publ-model.do?mid=",
            "COG_Function": "http://www.ncbi.nlm.nih.gov/COG/grace/shokog.cgi?fun=",
            "WB": "http://identifiers.org/wormbase/",
            "FBbt": "http://purl.obolibrary.org/obo/FBbt_",
            "KEGG_LIGAND": "http://www.genome.jp/dbget-bin/www_bget?cpd:",
            "PSO_GIT": "https://github.com/Planteome/plant-stress-ontology/issues/",
            "MaizeGDB_stock": "http://maizegdb.org/data_center/stock?id=",
            "EMAPA": "http://purl.obolibrary.org/obo/EMAPA_",
            "GO": "http://purl.obolibrary.org/obo/GO_",
            "NCBI_GP": "http://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=protein&val=",
            "NMPDR": "http://www.nmpdr.org/linkin.cgi?id=",
            "CASSPC": "http://research.calacademy.org/research/ichthyology/catalog/getname.asp?rank=Species&id=",
            "TGD_REF": "http://db.ciliate.org/cgi-bin/reference/reference.pl?dbid=",
            "NCBIGene": "http://identifiers.org/ncbigene/",
            "KEGG_REACTION": "http://www.genome.jp/dbget-bin/www_bget?rn:",
            "PseudoCAP": "http://v2.pseudomonas.com/getAnnotation.do?locusID=",
            "UniPathway": "http://www.grenoble.prabi.fr/obiwarehouse/unipathway/upa?upid=",
            "MEROPS_fam": "http://merops.sanger.ac.uk/cgi-bin/famsum?family=",
            "GO_REF": "http://purl.obolibrary.org/obo/go/references/",
            "VEGA": "http://vega.sanger.ac.uk/id/",
            "ZFIN": "http://identifiers.org/zfin/",
            "AspGD_REF": "http://www.aspergillusgenome.org/cgi-bin/reference/reference.pl?dbid=",
            "RO": "http://purl.obolibrary.org/obo/RO_",
            "Pfam": "http://pfam.xfam.org/family/",
            "UBERON": "http://purl.obolibrary.org/obo/UBERON_",
            "GR": "http://www.gramene.org/db/searches/browser?search_type=All&RGN=on&query=",
            "PDB": "http://www.rcsb.org/pdb/cgi/explore.cgi?pdbId=",
            "CORIELL": "http://ccr.coriell.org/Sections/Search/Sample_Detail.aspx?Ref=",
            "JCVI_GenProp": "http://cmr.jcvi.org/cgi-bin/CMR/shared/GenomePropDefinition.cgi?prop_acc=",
            "SGN": "http://identifiers.org/sgn/",
            "BFO": "http://purl.obolibrary.org/obo/BFO_",
            "Genesys-pgr": "https://www.genesys-pgr.org/acn/search?q=",
            "UniMod": "http://www.unimod.org/modifications_view.php?editid1=",
            "UM-BBD_reactionID": "http://eawag-bbd.ethz.ch/servlets/pageservlet?ptype=r&reacID=",
            "PubChem_Substance": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?CMD=search&DB=pcsubstance&term=",
            "EcoCyc": "http://biocyc.org/ECOLI/NEW-IMAGE?type=PATHWAY&object=",
            "Reactome": "http://identifiers.org/reactome/",
            "InterPro": "http://identifiers.org/interpro/",
            "UniRule": "http://www.uniprot.org/unirule/",
            "MGCSC_GENETIC_STOCKS": "http://www.maizegdb.org/cgi-bin/displaystockrecord.cgi?id=",
            "dictyBase": "http://identifiers.org/dictybase/",
            "PO_GIT": "https://github.com/Planteome/plant-ontology/issues/",
            "AspGD_LOCUS": "http://identifiers.org/aspgd.locus/",
            "SGD": "http://identifiers.org/sgd/",
            "COG_Pathway": "http://www.ncbi.nlm.nih.gov/COG/new/release/coglist.cgi?pathw=",
            "ENZYME": "http://www.expasy.ch/cgi-bin/nicezyme.pl?",
            "PAMGO_MGG": "http://scotland.fgl.ncsu.edu/cgi-bin/adHocQuery.cgi?adHocQuery_dbName=smeng_goannotation&Action=Data&QueryName=Functional+Categorization+of+MGG+GO+Annotation&P_KeyWord=",
            "AgBase": "http://www.agbase.msstate.edu/cgi-bin/getEntry.pl?db_pick=[ChickGO/MaizeGO]&uid=",
            "AraCyc": "http://www.arabidopsis.org:1555/ARA/NEW-IMAGE?type=NIL&object=",
            "EcoCyc_REF": "http://biocyc.org/ECOLI/reference.html?type=CITATION-FRAME&object=",
            "CHEBI": "http://purl.obolibrary.org/obo/CHEBI_",
            "HGNC": "http://identifiers.org/hgnc/",
            "dictyBase_gene_name": "http://dictybase.org/gene/",
            "TAIR": "http://identifiers.org/tair.locus/",
            "EnsemblFungi": "http://www.ensemblgenomes.org/id/",
            "Wikipedia": "http://en.wikipedia.org/wiki/",
            "SUPERFAMILY": "http://supfam.cs.bris.ac.uk/SUPERFAMILY/cgi-bin/scop.cgi?ipid=SSF",
            "SWALL": "http://ca.expasy.org/cgi-bin/sprot-search-de?S=1&amp;T=1&amp;SEARCH=",
            "PSI-MOD": "http://www.ebi.ac.uk/ontology-lookup/?termId=MOD:",
            "FYPO": "http://purl.obolibrary.org/obo/FYPO_",
            "RGD": "http://identifiers.org/rgd/",
            "UM-BBD_enzymeID": "http://eawag-bbd.ethz.ch/servlets/pageservlet?ptype=ep&enzymeID=",
            "Broad_MGG": "http://www.broad.mit.edu/annotation/genome/magnaporthe_grisea/GeneLocus.html?sp=S",
            "Swiss-Prot": "http://www.ebi.uniprot.org/uniprot-srv/uniProtView.do?proteinac=",
            "PMID": "http://www.ncbi.nlm.nih.gov/pubmed/",
            "Xenbase": "http://identifiers.org/xenbase/",
            "PR": "http://purl.obolibrary.org/obo/PR_",
            "MIPS_funcat": "http://mips.gsf.de/cgi-bin/proj/funcatDB/search_advanced.pl?action=2&wert=",
            "GR_REF": "http://www.gramene.org/db/literature/pub_search?ref_id=",
            "MaizeGDB": "http://maizegdb.org/gene_center/gene/",
            "HAMAP": "http://hamap.expasy.org/unirule/",
            "SGN_ref": "http://www.sgn.cornell.edu/chado/publication.pl?pub_id=",
            "TO_GIT": "https://github.com/Planteome/plant-trait-ontology/issues/",
            "MeSH": "http://n2t.net/MESH:",
            "GR_PROTEIN": "http://identifiers.org/gramene.protein/",
            "MaizeGDB_REF": "http://maizegdb.org/data_center/reference?id=",
            "GEO": "http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=",
            "PO": "http://purl.obolibrary.org/obo/PO_",
            "PomBase": "http://identifiers.org/pombase/",
            "ENA": "http://www.ebi.ac.uk/ena/data/view/",
            "PIRSF": "http://pir.georgetown.edu/cgi-bin/ipcSF?id=",
            "EMBL": "http://www.ebi.ac.uk/cgi-bin/emblfetch?style=html&Submit=Go&id=",
            "Prosite": "http://www.expasy.ch/cgi-bin/prosite-search-ac?",
            "H-invDB_cDNA": "http://www.h-invitational.jp/hinv/spsoup/transcript_view?acc_id=",
            "EC": "http://www.expasy.org/enzyme/",
            "MACSC_REF": "http://www.maizegdb.org/cgi-bin/displaytraitrecord.cgi?id=",
            "PAMGO_VMD": "http://vmd.vbi.vt.edu/cgi-bin/browse/go_detail.cgi?gene_id=",
            "IRGC": "https://www.genesys-pgr.org/acn/search?q=IRGC+",
            "NASC_code": "http://seeds.nottingham.ac.uk/NASC/stockatidb.lasso?code=",
            "COG_Cluster": "http://www.ncbi.nlm.nih.gov/COG/new/release/cow.cgi?cog=",
            "TreeGenes": "http://dendrome.ucdavis.edu/treegenes/protein/view_protein.php?id=",
            "WB_REF": "http://www.wormbase.org/db/misc/paper?name=",
            "TGD_LOCUS": "http://db.ciliate.org/cgi-bin/locus.pl?locus=",
            "MA": "http://purl.obolibrary.org/obo/MA_",
            "UniProtKB": "http://identifiers.org/uniprot/",
            "MGI": "http://identifiers.org/mgi/",
            "GRINDesc": "https://npgsweb.ars-grin.gov/gringlobal/descriptordetail.aspx?id=",
            "DDANAT": "http://purl.obolibrary.org/obo/DDANAT_",
            "RAP-DB": "http://rapdb.dna.affrc.go.jp/tools/search/run?id=on&attr=desc&attr=cgs&attr=cgn&attr=cgss&attr=cgns&attr=rgss&attr=rgns&keyword=",
            "KEGG_PATHWAY": "http://identifiers.org/kegg.pathway/",
            "JCVI_CMR": "http://cmr.jcvi.org/cgi-bin/CMR/shared/GenePage.cgi?locus=",
            "dictyBase_REF": "http://dictybase.org/db/cgi-bin/dictyBase/reference/reference.pl?refNo=",
            "DOI": "http://dx.doi.org/",
            "LIFEdb": "http://www.dkfz.de/LIFEdb/LIFEdb.aspx?ID=",
            "PANTHER": "http://identifiers.org/panther.family/",
            "Gene3D": "http://gene3d.biochem.ucl.ac.uk/search?mode=family&sterm=",
            "PATRIC": "http://patric.vbi.vt.edu/gene/overview.php?fid=",
            "FB": "http://identifiers.org/flybase/",
            "PAINT_REF": "http://www.pantherdb.org/panther/lookupId.jsp?id=PTHR",
            "CASREF": "http://research.calacademy.org/research/ichthyology/catalog/getref.asp?id=",
            "ENSEMBL": "http://identifiers.org/ensembl/",
            "SMART": "http://smart.embl-heidelberg.de/smart/do_annotation.pl?BLAST=DUMMY&DOMAIN=",
            "RefSeq": "http://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?val=",
            "WBls": "http://purl.obolibrary.org/obo/WBls_",
            "MaizeGDB_QTL": "http://www.maizegdb.org/data_center/trait?id=",
            "SOY_ref": "http://www.soybase.org/sbt/search/search_results.php?category=Soybase_ID&search_term=",
            "ECO": "http://purl.obolibrary.org/obo/ECO_",
            "CGD_REF": "http://www.candidagenome.org/cgi-bin/reference/reference.pl?dbid=",
            "ECK": "http://www.ecogene.org/geneInfo.php?eck_id=",
            "CGD": "http://identifiers.org/cgd/",
            "GR_GENE": "http://identifiers.org/gramene.gene/",
            "RNAmods": "http://s59.cas.albany.edu/RNAmods/cgi-bin/rnashow.cgi?",
            "KEGG_ENZYME": "http://identifiers.org/kegg.enzyme/",
            "CACAO": "http://gowiki.tamu.edu/wiki/index.php/",
            "IUPHAR_GPCR": "http://www.iuphar-db.org/DATABASE/FamilyMenuForward?familyId=",
            "JCVI_TIGRFAMS": "http://search.jcvi.org/search?p&q=",
            "SOY_QTL": "http://soybase.org/sbt/search/search_results.php?category=QTLName&search_term=",
            "DDBJ": "http://arsa.ddbj.nig.ac.jp/arsa/ddbjSplSearch?KeyWord=",
            "PRINTS": "http://www.bioinf.manchester.ac.uk/cgi-bin/dbbrowser/sprint/searchprintss.cgi?display_opts=Prints&category=None&queryform=false&regexpr=off&prints_accn=",
            "PO_REF": "http://planteome.org/po_ref/",
            "IMG": "http://img.jgi.doe.gov/cgi-bin/pub/main.cgi?section=GeneDetail&page=geneDetail&gene_oid=",
            "CL": "http://purl.obolibrary.org/obo/CL_",
            "UniProtKB-SubCell": "http://www.uniprot.org/locations/",
            "NIF_Subcellular": "http://www.neurolex.org/wiki/",
            "GeneDB": "http://identifiers.org/genedb/",
            "ApiDB_PlasmoDB": "http://www.plasmodb.org/gene/",
            "RNAcentral": "http://rnacentral.org/rna/",
            "CGD_LOCUS": "http://www.candidagenome.org/cgi-bin/locus.pl?locus=",
            "Rfam": "http://rfam.sanger.ac.uk/family/",
            "Broad_NEUROSPORA": "http://www.broadinstitute.org/annotation/genome/neurospora/GeneDetails.html?sp=S",
            "AGI_LocusCode": "http://arabidopsis.org/servlets/TairObject?type=locus&name=",
            "OBO_SF2_PO": "http://sourceforge.net/p/obo/plant-ontology-po-term-requests/",
            "FMA": "http://purl.obolibrary.org/obo/FMA_",
            "CDD": "http://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?uid=",
            "PubChem_Compound": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?CMD=search&DB=pccompound&term=",
            "HGNC_gene": "http://identifiers.org/hgnc.gene/",
            "PharmGKB": "http://www.pharmgkb.org/do/serve?objId=",
            "VMD": "http://vmd.vbi.vt.edu/cgi-bin/browse/browserDetail_new.cgi?gene_id=",
            "UniParc": "http://www.uniprot.org/uniparc/",
            "MEROPS": "http://merops.sanger.ac.uk/cgi-bin/pepsum?mid=",
            "GDB": "http://www.gdb.org/gdb-bin/genera/accno?accessionNum=GDB:",
            "SEED": "http://www.theseed.org/linkin.cgi?id=",
            "SO": "http://purl.obolibrary.org/obo/SO_",
            "Soy_gene": "http://www.soybase.org/sbt/search/search_results.php?category=FeatureName&search_term=",
            "CORUM": "http://mips.gsf.de/genre/proj/corum/complexdetails.html?id=",
            "RHEA": "http://www.rhea-db.org/reaction.xhtml?id=",
            "dbSNP": "http://identifiers.org/dbsnp/",
            "MaizeGDB_Locus": "http://identifiers.org/maizegdb.locus/",
            "MO": "http://mged.sourceforge.net/ontologies/MGEDontology.php#",
            "PLANA_REF": "http://purl.obolibrary.org/obo/plana/references/",
            "BRENDA": "http://www.brenda-enzymes.info/php/result_flat.php4?ecno=",
            "ASAP": "https://asap.ahabs.wisc.edu/annotation/php/feature_info.php?FeatureID=",
            "CAS": "http://identifiers.org/cas/",
            "H-invDB_locus": "http://www.h-invitational.jp/hinv/spsoup/locus_view?hix_id=",
            "UM-BBD_ruleID": "http://eawag-bbd.ethz.ch/servlets/rule.jsp?rule=",
            "NCBITaxon": "http://purl.obolibrary.org/obo/NCBITaxon_",
            "ComplexPortal": "https://www.ebi.ac.uk/complexportal/complex/",
            "JSTOR": "http://www.jstor.org/stable/",
            "GRIMS": "https://www.genesys-pgr.org/acn/search2?q=IRGC+",
            "PATO": "http://purl.obolibrary.org/obo/PATO_",
            "GR_QTL": "http://identifiers.org/gramene.qtl/",
            "ECOGENE": "http://www.ecogene.org/geneInfo.php?eg_id=",
            "HPA_antibody": "http://www.proteinatlas.org/antibody_info.php?antibody_id=",
            "VBRC": "http://vbrc.org/query.asp?web_id=VBRC:",
            "EO_GIT": "https://github.com/Planteome/plant-environment-ontology/issues/",
            "EchoBASE": "http://www.biolws1.york.ac.uk/echobase/Gene.cfm?recordID=",
            "CASGEN": "http://research.calacademy.org/research/ichthyology/catalog/getname.asp?rank=Genus&id=",
            "IUPHAR_RECEPTOR": "http://www.iuphar-db.org/DATABASE/ObjectDisplayForward?objectId=",
            "IRIC": "http://oryzasnp.org/_variety.zul?irisid=",
            "GenBank": "http://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=nucleotide&val=",
            "TGD": "http://identifiers.org/tgd/",
            "JCVI_EGAD": "http://cmr.jcvi.org/cgi-bin/CMR/EgadSearch.cgi?search_string=",
            "PubChem_BioAssay": "http://pubchem.ncbi.nlm.nih.gov/assay/assay.cgi?aid=",
            "TC": "http://www.tcdb.org/tcdb/index.php?tc=",
            "SABIO-RK": "http://sabio.villa-bosch.de/reacdetails.jsp?reactid=",
            "OBO_SF2_PECO": "https://sourceforge.net/p/obo/plant-environment-ontology-eo/",
            "MetaCyc": "http://identifiers.org/metacyc/",
            "PAMGO_GAT": "http://agro.vbi.vt.edu/public/servlet/GeneEdit?&Search=Search&level=2&genename=",
            "ModBase": "http://salilab.org/modbase/searchbyid?databaseID=",
            "OMIM": "http://omim.org/entry/",
            "GR_MUT": "http://www.gramene.org/db/genes/search_gene?acc=",
            "HPA": "http://www.proteinatlas.org/tissue_profile.php?antibody_id=",
            "IntAct": "http://identifiers.org/intact/",
            "ProDom": "http://prodom.prabi.fr/prodom/current/cgi-bin/request.pl?question=DBEN&query=",
            "GRIN": "https://npgsweb.ars-grin.gov/gringlobal/accessiondetail.aspx?id=",
            "WBPhenotype": "http://purl.obolibrary.org/obo/WBPhenotype_",
            "BioCyc": "http://biocyc.org/META/NEW-IMAGE?type=PATHWAY&object=",
            "ENSEMBL_GeneID": "http://www.ensembl.org/id/",
            "PIR": "http://pir.georgetown.edu/cgi-bin/pirwww/nbrfget?uid=",
            "UniProtKB-KW": "http://www.uniprot.org/keywords/",
            "Planteome_gene": "https://www.google.com/search?q=",
            "AspGD": "http://www.aspergillusgenome.org/cgi-bin/locus.pl?dbid=",
            "JCVI_Medtr": "http://medicago.jcvi.org/cgi-bin/medicago/search/shared/ORF_infopage.cgi?orf=",
            "EuPathDB": "http://eupathdb.org/gene/",
            "PMCID": "http://www.ncbi.nlm.nih.gov/sites/entrez?db=pmc&cmd=search&term="
        }
    };

    var CurieService = /** @class */ (function () {
        function CurieService(httpClient) {
            this.httpClient = httpClient;
            var map = curieUtilEs5.parseContext(goContextConfig);
            this._curie = new curieUtilEs5.CurieUtil(map);
        }
        CurieService.prototype.getCurieUtil = function () {
            return this._curie;
        };
        CurieService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        CurieService.ɵprov = core.ɵɵdefineInjectable({ factory: function CurieService_Factory() { return new CurieService(core.ɵɵinject(http.HttpClient)); }, token: CurieService, providedIn: "root" });
        CurieService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CurieService);
        return CurieService;
    }());

    var jquery_engine = bbopRestManager.jquery;


    var PantherGraphService = /** @class */ (function () {
        function PantherGraphService(pantherUserService, pantherFormConfigService, pantherLookupService) {
            this.pantherUserService = pantherUserService;
            this.pantherFormConfigService = pantherFormConfigService;
            this.pantherLookupService = pantherLookupService;
            this.baristaLocation = environment.globalBaristaLocation;
            this.minervaDefinitionName = environment.globalMinervaDefinitionName;
            this.linker = new amigo2.linker();
        }
        PantherGraphService.prototype.registerManager = function () {
            var engine = new jquery_engine(bbopResponseBarista);
            engine.method('POST');
            var manager = new bbopManagerMinerva(this.baristaLocation, this.minervaDefinitionName, this.pantherUserService.baristaToken, engine, 'async');
            var managerError = function (resp) {
                console.log('There was a manager error (' +
                    resp.message_type() + '): ' + resp.message());
            };
            var warning = function (resp) {
                alert('Warning: ' + resp.message() + '; ' +
                    'your operation was likely not performed');
            };
            var error = function (resp) {
                var perm_flag = 'InsufficientPermissionsException';
                var token_flag = 'token';
                if (resp.message() && resp.message().indexOf(perm_flag) !== -1) {
                    alert('Error: it seems like you do not have permission to ' +
                        'perform that operation. Did you remember to login?');
                }
                else if (resp.message() && resp.message().indexOf(token_flag) !== -1) {
                    alert('Error: it seems like you have a bad token...');
                }
                else {
                    console.log('error:', resp, resp.message_type(), resp.message());
                    if (resp.message().includes('UnknownIdentifierException')) {
                        //  cam.error = true
                    }
                }
            };
            var shieldsUp = function () { };
            var shieldsDown = function () { };
            manager.register('prerun', shieldsUp);
            manager.register('postrun', shieldsDown, 9);
            manager.register('manager_error', managerError, 10);
            manager.register('warning', warning, 10);
            manager.register('error', error, 10);
            return manager;
        };
        PantherGraphService.prototype.getGraphInfo = function (cam, modelId) {
            var self = this;
            cam.onGraphChanged = new rxjs.BehaviorSubject(null);
            cam.id = modelId;
            cam.manager = this.registerManager();
            cam.individualManager = this.registerManager();
            cam.groupManager = this.registerManager();
            var rebuild = function (resp) {
                var panther_graph = bbopGraphPanther.graph;
                cam.loading.status = true;
                cam.loading.message = 'Loading Model Entities Metadata...';
                cam.graph = new panther_graph();
                cam.id = resp.data().id;
                cam.graph.load_data_basic(resp.data());
                var titleAnnotations = cam.graph.get_annotations_by_key('title');
                var stateAnnotations = cam.graph.get_annotations_by_key('state');
                var dateAnnotations = cam.graph.get_annotations_by_key('date');
                if (dateAnnotations.length > 0) {
                    cam.date = dateAnnotations[0].value();
                }
                if (titleAnnotations.length > 0) {
                    cam.title = titleAnnotations[0].value();
                }
                if (stateAnnotations.length > 0) {
                    cam.state = self.pantherFormConfigService.findModelState(stateAnnotations[0].value());
                }
                self.populateContributors(cam);
                self.populateGroups(cam);
                self.loadCam(cam);
                cam.loading.status = false;
                cam.loading.message = '';
            };
            cam.manager.register('rebuild', function (resp) {
                rebuild(resp);
            }, 10);
            cam.manager.get_model(modelId);
        };
        PantherGraphService.prototype.loadCam = function (cam) {
            var self = this;
            cam.annotons = self.graphToAnnotons(cam);
            cam.applyFilter();
            cam.onGraphChanged.next(cam.annotons);
            cam.connectorAnnotons = self.getConnectorAnnotons(cam);
            cam.setPreview();
        };
        PantherGraphService.prototype.populateContributors = function (cam) {
            var self = this;
            var contributorAnnotations = cam.graph.get_annotations_by_key('contributor');
            cam.contributors = contributorAnnotations.map(function (contributorAnnotation) {
                var orcid = contributorAnnotation.value();
                var contributor = lodash.find(self.pantherUserService.contributors, function (user) {
                    return user.orcid === orcid;
                });
                return contributor ? contributor : { orcid: orcid };
            });
        };
        PantherGraphService.prototype.populateGroups = function (cam) {
            var self = this;
            var groupAnnotations = cam.graph.get_annotations_by_key('providedBy');
            cam.groups = groupAnnotations.map(function (groupAnnotation) {
                var url = groupAnnotation.value();
                var group = lodash.find(self.pantherUserService.groups, function (inGroup) {
                    return inGroup.url === url;
                });
                return group ? group : { url: url };
            });
        };
        PantherGraphService.prototype.getNodeInfo = function (node) {
            var result = {};
            forEach(node.types(), function (srcType) {
                var type = srcType.type() === 'complement' ? srcType.complement_class_expression() : srcType;
                result.id = type.class_id();
                result.label = type.class_label();
                result.classExpression = type;
            });
            return result;
        };
        PantherGraphService.prototype.getNodeRootInfo = function (node) {
            var result = node.root_types().map(function (srcType) {
                var type = srcType.type() === 'complement' ? srcType.complement_class_expression() : srcType;
                return new Entity(type.class_id(), type.class_label());
            });
            return result;
        };
        PantherGraphService.prototype.getNodeLocation = function (node) {
            var result = {
                x: 0,
                y: 0
            };
            var x_annotations = node.get_annotations_by_key('hint-layout-x');
            var y_annotations = node.get_annotations_by_key('hint-layout-y');
            if (x_annotations.length === 1) {
                result.x = parseInt(x_annotations[0].value());
            }
            if (y_annotations.length === 1) {
                result.y = parseInt(y_annotations[0].value());
            }
            return result;
        };
        PantherGraphService.prototype.getNodeIsComplement = function (node) {
            var result = true;
            if (node) {
                forEach(node.types(), function (in_type) {
                    var t = in_type.type();
                    result = result && (t === 'complement');
                });
            }
            return result;
        };
        PantherGraphService.prototype.nodeToAnnotonNode = function (graph, objectId) {
            var self = this;
            var node = graph.get_node(objectId);
            var nodeInfo = self.getNodeInfo(node);
            var result = {
                uuid: objectId,
                term: new Entity(nodeInfo.id, nodeInfo.label, self.linker.url(nodeInfo.id), objectId),
                rootTypes: self.getNodeRootInfo(node),
                classExpression: nodeInfo.classExpression,
                location: self.getNodeLocation(node),
                isComplement: self.getNodeIsComplement(node),
            };
            //if (result.uuid === 'gomodel:R-HSA-9679509/R-COV-9686310_R-HSA-9686174') {
            //  console.log(result.term.label, result.rootTypes, result.uuid)
            //}
            return new AnnotonNode(result);
        };
        PantherGraphService.prototype.edgeToEvidence = function (graph, edge) {
            var self = this;
            var evidenceAnnotations = edge.get_annotations_by_key('evidence');
            var result = [];
            forEach(evidenceAnnotations, function (evidenceAnnotation) {
                var annotationId = evidenceAnnotation.value();
                var annotationNode = graph.get_node(annotationId);
                var evidence = new Evidence();
                evidence.edge = new Entity(edge.predicate_id(), '');
                evidence.uuid = annotationNode.id();
                if (annotationNode) {
                    var nodeInfo = self.getNodeInfo(annotationNode);
                    evidence.setEvidence(new Entity(nodeInfo.id, nodeInfo.label, self.pantherLookupService.getTermURL(nodeInfo.id)), nodeInfo.classExpression);
                    var sources = annotationNode.get_annotations_by_key('source');
                    var withs = annotationNode.get_annotations_by_key('with');
                    var assignedBys = annotationNode.get_annotations_by_key('providedBy');
                    if (sources.length > 0) {
                        evidence.reference = sources[0].value();
                        evidence.referenceUrl = self.pantherLookupService.getTermURL(evidence.reference);
                    }
                    if (withs.length > 0) {
                        if (withs[0].value().startsWith('gomodel')) {
                            evidence.with = withs[0].value();
                        }
                        else {
                            evidence.with = withs[0].value();
                        }
                    }
                    if (assignedBys.length > 0) {
                        evidence.assignedBy = new Entity(null, self.pantherUserService.getGroupName(assignedBys[0].value()), assignedBys[0].value());
                    }
                    result.push(evidence);
                }
            });
            return result;
        };
        PantherGraphService.prototype.graphPreParse = function (graph) {
            var self = this;
            var promises = [];
            forEach(graph.get_nodes(), function (node) {
                var termNodeInfo = self.getNodeInfo(node);
                forEach(EntityCategories, function (category) {
                    promises.push(self.isaClosurePreParse(termNodeInfo.id, category));
                });
            });
            return rxjs.forkJoin(promises);
        };
        PantherGraphService.prototype.graphPostParse = function (cam) {
            var self = this;
            var promises = [];
            forEach(cam.annotons, function (annoton) {
                var mfNode = annoton.getMFNode();
                if (mfNode && mfNode.hasValue()) {
                    promises.push(self.isaClosurePostParse(mfNode.getTerm().id, [GoCatalyticActivity], mfNode));
                }
            });
            return rxjs.forkJoin(promises);
        };
        PantherGraphService.prototype.isaClosurePreParse = function (a, b) {
            var self = this;
            var closure = self.pantherLookupService.categoryToClosure(b);
            return self.pantherLookupService.isaClosure(a, closure)
                .pipe(operators.map(function (response) {
                self.pantherLookupService.addLocalClosure(a, closure, response);
            }));
        };
        PantherGraphService.prototype.isaClosurePostParse = function (a, b, node) {
            var self = this;
            var closure = self.pantherLookupService.categoryToClosure(b);
            return self.pantherLookupService.isaClosure(a, closure).pipe(operators.map(function (result) {
                node.isCatalyticActivity = result;
                return result;
            }));
        };
        PantherGraphService.prototype.getActivityPreset = function (subjectNode, predicateId, bbopSubjectEdges) {
            var self = this;
            var annotonType = exports.AnnotonType.default;
            if (predicateId === pantherFormConfig.edge.partOf.id &&
                subjectNode.hasRootType(GoMolecularEntity)) {
                annotonType = exports.AnnotonType.ccOnly;
            }
            else if (subjectNode.term.id === pantherFormConfig.rootNode.mf.id) {
                forEach(bbopSubjectEdges, function (subjectEdge) {
                    if (lodash.find(pantherFormConfig.causalEdges, { id: subjectEdge.predicate_id() })) {
                        annotonType = exports.AnnotonType.bpOnly;
                    }
                });
            }
            return self.pantherFormConfigService.createAnnotonBaseModel(annotonType);
        };
        PantherGraphService.prototype.graphToAnnotons = function (cam) {
            var self = this;
            var annotons = [];
            cam.loading.message = 'Generating activities...';
            forEach(cam.graph.all_edges(), function (bbopEdge) {
                var bbopSubjectId = bbopEdge.subject_id();
                var subjectNode = self.nodeToAnnotonNode(cam.graph, bbopSubjectId);
                if (bbopEdge.predicate_id() === pantherFormConfig.edge.enabledBy.id ||
                    (bbopEdge.predicate_id() === pantherFormConfig.edge.partOf.id &&
                        subjectNode.hasRootType(GoMolecularEntity))) {
                    var subjectEdges = cam.graph.get_edges_by_subject(bbopSubjectId);
                    var annoton = self.getActivityPreset(subjectNode, bbopEdge.predicate_id(), subjectEdges);
                    var subjectAnnotonNode = annoton.rootNode;
                    subjectAnnotonNode.term = subjectNode.term;
                    subjectAnnotonNode.classExpression = subjectNode.classExpression;
                    subjectAnnotonNode.setIsComplement(subjectNode.isComplement);
                    subjectAnnotonNode.uuid = bbopSubjectId;
                    self._graphToAnnotonDFS(cam, annoton, subjectEdges, subjectAnnotonNode);
                    annoton.id = bbopSubjectId;
                    annoton.postRunUpdate();
                    annotons.push(annoton);
                }
            });
            return annotons;
        };
        PantherGraphService.prototype.getConnectorAnnotons = function (cam) {
            var _this = this;
            var self = this;
            var connectorAnnotons = [];
            forEach(cam.annotons, function (subjectAnnoton) {
                forEach(cam.graph.get_edges_by_subject(subjectAnnoton.id), function (bbopEdge) {
                    var predicateId = bbopEdge.predicate_id();
                    var evidence = self.edgeToEvidence(cam.graph, bbopEdge);
                    var objectId = bbopEdge.object_id();
                    var objectInfo = self.nodeToAnnotonNode(cam.graph, objectId);
                    var causalEdge = lodash.find(pantherFormConfig.causalEdges, {
                        id: predicateId
                    });
                    if (causalEdge) {
                        if (objectInfo.hasRootType(GoMolecularFunction)) {
                            var downstreamAnnoton = cam.getAnnotonByConnectionId(objectId);
                            var connectorAnnoton = _this.pantherFormConfigService.createAnnotonConnectorModel(subjectAnnoton, downstreamAnnoton);
                            connectorAnnoton.state = exports.ConnectorState.editing;
                            connectorAnnoton.type = exports.ConnectorType.basic;
                            connectorAnnoton.rule.r1Edge = causalEdge;
                            connectorAnnoton.predicate = new Predicate(causalEdge, evidence);
                            connectorAnnoton.setRule();
                            connectorAnnoton.createGraph();
                            connectorAnnotons.push(connectorAnnoton);
                        }
                        else if (objectInfo.hasRootType(GoBiologicalProcess)) {
                            var processNodeInfo = self.nodeToAnnotonNode(cam.graph, objectId);
                            var processNode = generateBaseTerm([GoBiologicalProcess], { id: 'process', isKey: true });
                            var connectorAnnotonDTO = _this._getConnectAnnotonIntermediate(cam, objectId);
                            if (connectorAnnotonDTO.downstreamAnnoton) {
                                processNode.uuid = objectId;
                                processNode.term = processNodeInfo.term;
                                // processNode.setEvidence(self.edgeToEvidence(cam.graph, e));
                                var connectorAnnoton = _this.pantherFormConfigService.createAnnotonConnectorModel(subjectAnnoton, connectorAnnotonDTO.downstreamAnnoton, processNode, connectorAnnotonDTO.hasInputNode);
                                connectorAnnoton.state = exports.ConnectorState.editing;
                                connectorAnnoton.type = exports.ConnectorType.intermediate;
                                connectorAnnoton.rule.r1Edge = new Entity(causalEdge.id, causalEdge.label);
                                connectorAnnoton.rule.r2Edge = connectorAnnotonDTO.rule.r2Edge;
                                connectorAnnoton.predicate = new Predicate(causalEdge, evidence);
                                connectorAnnoton.setRule();
                                connectorAnnoton.createGraph();
                                connectorAnnotons.push(connectorAnnoton);
                            }
                        }
                    }
                });
            });
            return connectorAnnotons;
        };
        PantherGraphService.prototype.graphToAnnotonDFSError = function (annoton, annotonNode) {
            var self = this;
            var edge = annoton.getEdges(annotonNode.id);
            forEach(edge.nodes, function (node) {
                node.object.status = 2;
                self.graphToAnnotonDFSError(annoton, node.object);
            });
        };
        PantherGraphService.prototype.evidenceUseGroups = function (reqs, evidence) {
            var self = this;
            var assignedBy = evidence.assignedBy;
            if (assignedBy) {
                reqs.use_groups(['http://purl.obolibrary.org/go/groups/' + assignedBy]);
            }
            else if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
                reqs.use_groups([self.pantherUserService.user.group.id]);
            }
            else {
                reqs.use_groups([]);
            }
        };
        PantherGraphService.prototype.saveModelGroup = function (cam, groupId) {
            cam.manager.use_groups([groupId]);
            cam.groupId = groupId;
        };
        PantherGraphService.prototype.saveCamAnnotations = function (cam, annotations) {
            var self = this;
            var titleAnnotations = cam.graph.get_annotations_by_key('title');
            var stateAnnotations = cam.graph.get_annotations_by_key('state');
            var reqs = new minervaRequests.request_set(self.pantherUserService.baristaToken, cam.id);
            forEach(titleAnnotations, function (annotation) {
                reqs.remove_annotation_from_model('title', annotation.value());
            });
            forEach(stateAnnotations, function (annotation) {
                reqs.remove_annotation_from_model('state', annotation.value());
            });
            reqs.add_annotation_to_model('title', annotations.title);
            reqs.add_annotation_to_model('state', annotations.state);
            reqs.store_model(cam.id);
            cam.manager.request_with(reqs);
        };
        PantherGraphService.prototype.saveAnnoton = function (cam, triples, title) {
            var self = this;
            var reqs = new minervaRequests.request_set(self.pantherUserService.baristaToken, cam.model.id);
            if (!cam.title) {
                reqs.add_annotation_to_model('title', title);
            }
            self.addFact(reqs, triples);
            if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
                reqs.use_groups([self.pantherUserService.user.group.id]);
            }
            reqs.store_model(cam.id);
            return cam.manager.request_with(reqs);
        };
        PantherGraphService.prototype.editAnnoton = function (cam, srcNodes, destNodes, srcTriples, destTriples, removeIds, removeTriples) {
            var self = this;
            var reqs = new minervaRequests.request_set(self.pantherUserService.baristaToken, cam.id);
            forEach(destNodes, function (destNode) {
                var srcNode = lodash.find(srcNodes, function (node) {
                    return node.uuid === destNode.uuid;
                });
                if (srcNode) {
                    self.editIndividual(reqs, cam, srcNode, destNode);
                }
            });
            self.editFact(reqs, srcTriples, destTriples);
            self.addFact(reqs, destTriples);
            forEach(removeTriples, function (triple) {
                reqs.remove_fact([
                    triple.subject.uuid,
                    triple.object.uuid,
                    triple.predicate.edge.id
                ]);
            });
            forEach(removeIds, function (uuid) {
                reqs.remove_individual(uuid);
            });
            if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
                reqs.use_groups([self.pantherUserService.user.group.id]);
            }
            reqs.store_model(cam.id);
            return cam.manager.request_with(reqs);
        };
        PantherGraphService.prototype.replaceAnnoton = function (manager, modelId, entities, replaceWithTerm) {
            var self = this;
            var reqs = new minervaRequests.request_set(self.pantherUserService.baristaToken, modelId);
            forEach(entities, function (entity) {
                self.replaceIndividual(reqs, modelId, entity, replaceWithTerm);
            });
            // self.editFact(reqs, cam, srcTriples, destTriples);
            if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
                reqs.use_groups([self.pantherUserService.user.group.id]);
            }
            // reqs.store_model(modelId);
            return manager.request_with(reqs);
        };
        PantherGraphService.prototype.bulkEditAnnoton = function (cam) {
            var self = this;
            var reqs = new minervaRequests.request_set(self.pantherUserService.baristaToken, cam.id);
            forEach(cam.annotons, function (annoton) {
                forEach(annoton.nodes, function (node) {
                    self.bulkEditIndividual(reqs, cam, node);
                    //self.bulkEditFact(reqs, cam, srcTriples, destTriples);
                    //  self.bulkAddFact(reqs, destTriples);
                });
            });
            if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
                reqs.use_groups([self.pantherUserService.user.group.id]);
            }
            reqs.store_model(cam.id);
            return cam.manager.request_with(reqs);
        };
        PantherGraphService.prototype.deleteAnnoton = function (cam, uuids, triples) {
            var self = this;
            var success = function () {
                var reqs = new minervaRequests.request_set(self.pantherUserService.baristaToken, cam.model.id);
                forEach(triples, function (triple) {
                    reqs.remove_fact([
                        triple.subject.uuid,
                        triple.object.uuid,
                        triple.predicate.edge.id
                    ]);
                });
                forEach(uuids, function (uuid) {
                    reqs.remove_individual(uuid);
                });
                reqs.store_model(cam.id);
                if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
                    reqs.use_groups([self.pantherUserService.user.group.id]);
                }
                return cam.manager.request_with(reqs);
            };
            return success();
        };
        PantherGraphService.prototype._graphToAnnotonDFS = function (cam, annoton, bbopEdges, subjectNode) {
            var _this = this;
            var self = this;
            forEach(bbopEdges, function (bbopEdge) {
                var bbopPredicateId = bbopEdge.predicate_id();
                var bbopObjectId = bbopEdge.object_id();
                var evidence = self.edgeToEvidence(cam.graph, bbopEdge);
                var partialObjectNode = self.nodeToAnnotonNode(cam.graph, bbopObjectId);
                var objectNode = _this._insertNode(annoton, bbopPredicateId, subjectNode, partialObjectNode);
                annoton.updateEntityInsertMenu();
                if (objectNode) {
                    var triple = annoton.getEdge(subjectNode.id, objectNode.id);
                    if (triple) {
                        triple.object.uuid = partialObjectNode.uuid;
                        triple.object.term = partialObjectNode.term;
                        triple.object.classExpression = partialObjectNode.classExpression;
                        triple.object.setIsComplement(partialObjectNode.isComplement);
                        triple.predicate.evidence = evidence;
                        triple.predicate.uuid = bbopEdge.id();
                        self._graphToAnnotonDFS(cam, annoton, cam.graph.get_edges_by_subject(bbopObjectId), triple.object);
                    }
                }
            });
            return annoton;
        };
        PantherGraphService.prototype._insertNode = function (annoton, bbopPredicateId, subjectNode, partialObjectNode) {
            var nodeDescriptions = subjectNode.canInsertNodes;
            var objectNode;
            forEach(nodeDescriptions, function (nodeDescription) {
                if (bbopPredicateId === nodeDescription.predicate.id) {
                    if (partialObjectNode.hasRootTypes(nodeDescription.node.category)) {
                        objectNode = insertNode(annoton, subjectNode, nodeDescription);
                        return false;
                    }
                }
            });
            return objectNode;
        };
        PantherGraphService.prototype._getConnectAnnotonIntermediate = function (cam, bpSubjectId) {
            var self = this;
            var connectorAnnoton = new ConnectorAnnoton();
            forEach(cam.graph.get_edges_by_subject(bpSubjectId), function (e) {
                var predicateId = e.predicate_id();
                var objectId = e.object_id();
                var objectInfo = self.nodeToAnnotonNode(cam.graph, objectId);
                var causalEdge = lodash.find(pantherFormConfig.causalEdges, {
                    id: predicateId
                });
                if (causalEdge) {
                    if (objectInfo.hasRootType(GoMolecularFunction)) {
                        var downstreamAnnoton = cam.getAnnotonByConnectionId(objectId);
                        connectorAnnoton.rule.r2Edge = new Entity(causalEdge.id, causalEdge.label);
                        ;
                        connectorAnnoton.downstreamAnnoton = downstreamAnnoton;
                    }
                }
                if (e.predicate_id() === pantherFormConfig.edge.hasInput.id) {
                    if (objectInfo.hasRootType(GoChemicalEntity)) {
                        var hasInputNodeInfo = self.nodeToAnnotonNode(cam.graph, objectId);
                        var hasInputNode = generateBaseTerm([GoChemicalEntity], { id: 'has-input', isKey: true });
                        hasInputNode.uuid = objectId;
                        hasInputNode.term = hasInputNodeInfo.term;
                        hasInputNode.predicate.setEvidence(self.edgeToEvidence(cam.graph, e));
                        connectorAnnoton.hasInputNode = hasInputNode;
                    }
                }
            });
            return connectorAnnoton;
        };
        PantherGraphService.prototype.addFact = function (reqs, triples) {
            var self = this;
            forEach(triples, function (triple) {
                var subject = self.addIndividual(reqs, triple.subject);
                var object = self.addIndividual(reqs, triple.object);
                if (subject && object) {
                    triple.predicate.uuid = reqs.add_fact([
                        subject,
                        object,
                        triple.predicate.edge.id
                    ]);
                    forEach(triple.predicate.evidence, function (evidence) {
                        var evidenceReference = evidence.reference;
                        var evidenceWith = evidence.with;
                        reqs.add_evidence(evidence.evidence.id, evidenceReference, evidenceWith, triple.predicate.uuid);
                    });
                }
            });
        };
        PantherGraphService.prototype.editFact = function (reqs, srcTriples, destTriples) {
            forEach(destTriples, function (destTriple) {
                var srcTriple = lodash.find(srcTriples, function (triple) {
                    return triple.subject.uuid === destTriple.subject.uuid && triple.object.uuid === destTriple.object.uuid;
                });
                if (srcTriple) {
                    reqs.remove_fact([
                        srcTriple.subject.uuid,
                        srcTriple.object.uuid,
                        srcTriple.predicate.edge.id
                    ]);
                }
            });
        };
        PantherGraphService.prototype.deleteFact = function (reqs, triples) {
            var self = this;
            forEach(triples, function (triple) {
                forEach(triple.predicate.evidence, function (evidence) {
                    reqs.remove_individual(evidence.uuid);
                });
                reqs.remove_individual(triple.subject.uuid);
            });
        };
        PantherGraphService.prototype.addIndividual = function (reqs, node) {
            if (node.uuid) {
                return node.uuid;
            }
            if (node.hasValue()) {
                if (node.isComplement) {
                    var ce = new classExpression();
                    ce.as_complement(node.term.id);
                    node.uuid = reqs.add_individual(ce);
                }
                else {
                    node.uuid = reqs.add_individual(node.term.id);
                }
                return node.uuid;
            }
            return null;
        };
        PantherGraphService.prototype.editIndividual = function (reqs, cam, srcNode, destNode) {
            if (srcNode.hasValue() && destNode.hasValue()) {
                reqs.remove_type_from_individual(srcNode.classExpression, srcNode.uuid, cam.id);
                reqs.add_type_to_individual(classExpression.cls(destNode.getTerm().id), srcNode.uuid, cam.id);
            }
        };
        PantherGraphService.prototype.bulkEditIndividual = function (reqs, cam, node) {
            if (node.hasValue() && node.term.modified) {
                reqs.remove_type_from_individual(node.classExpression, node.uuid, cam.id);
                reqs.add_type_to_individual(classExpression.cls(node.getTerm().id), node.uuid, cam.id);
            }
        };
        PantherGraphService.prototype.replaceIndividual = function (reqs, modelId, entity, replaceWithTerm) {
            reqs.remove_type_from_individual(classExpression.cls(entity.id), entity.uuid, modelId);
            reqs.add_type_to_individual(classExpression.cls(replaceWithTerm.id), entity.uuid, modelId);
        };
        PantherGraphService.prototype.deleteIndividual = function (reqs, node) {
            if (node.uuid) {
                reqs.remove_individual(node.uuid);
            }
        };
        PantherGraphService.ctorParameters = function () { return [
            { type: PantherUserService },
            { type: PantherFormConfigService },
            { type: PantherLookupService }
        ]; };
        PantherGraphService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherGraphService_Factory() { return new PantherGraphService(core.ɵɵinject(PantherUserService), core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(PantherLookupService)); }, token: PantherGraphService, providedIn: "root" });
        PantherGraphService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherGraphService);
        return PantherGraphService;
    }());

    var CamService = /** @class */ (function () {
        function CamService(pantherFormConfigService, _fb, pantherUserService, pantherGraphService, pantherLookupService, _pantherGraphService, curieService) {
            this.pantherFormConfigService = pantherFormConfigService;
            this._fb = _fb;
            this.pantherUserService = pantherUserService;
            this.pantherGraphService = pantherGraphService;
            this.pantherLookupService = pantherLookupService;
            this._pantherGraphService = _pantherGraphService;
            this.curieService = curieService;
            this.baseUrl = environment.spaqrlApiUrl;
            this.loading = false;
            this.onCamChanged = new rxjs.BehaviorSubject(null);
            this.onCamTermsChanged = new rxjs.BehaviorSubject(null);
            this.curieUtil = this.curieService.getCurieUtil();
            this.camFormGroup = new rxjs.BehaviorSubject(null);
            this.camFormGroup$ = this.camFormGroup.asObservable();
        }
        CamService.prototype.initializeForm = function (cam) {
            var self = this;
            if (cam) {
                this.cam = cam;
            }
            self.camForm = this.createCamForm();
            self.camFormGroup.next(this._fb.group(this.camForm));
        };
        CamService.prototype.createCamForm = function () {
            var self = this;
            var formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
            var camForm = new CamForm(formMetadata);
            camForm.createCamForm(this.cam, this.pantherUserService.user);
            return camForm;
        };
        CamService.prototype.getCam = function (modelId) {
            var cam = new Cam();
            cam.loading.status = true;
            cam.loading.message = 'Sending Request...';
            //cam.id = uuid();
            cam.graph = null;
            cam.model = Object.assign({}, {
                id: modelId,
                title: '',
                modelInfo: this.pantherFormConfigService.getModelUrls(modelId)
            });
            cam.expanded = true;
            this.pantherGraphService.getGraphInfo(cam, modelId);
            this.cam = cam;
            this.onCamChanged.next(cam);
            return cam;
        };
        CamService.prototype.loadCam = function (cam, filter) {
            cam.loading.status = true;
            cam.loading.message = 'Sending Request...';
            cam.graph = null;
            cam.modified = false;
            cam.modifiedStats = new CamStats();
            cam.model = Object.assign({}, {
                id: cam.id,
                title: '',
                modelInfo: this.pantherFormConfigService.getModelUrls(cam.id)
            });
            if (filter) {
                cam.filter = filter;
            }
            this.pantherGraphService.getGraphInfo(cam, cam.id);
            this.cam = cam;
        };
        CamService.prototype.deleteAnnoton = function (annoton) {
            var self = this;
            var deleteData = annoton.createDelete();
            return self.pantherGraphService.deleteAnnoton(self.cam, deleteData.uuids, deleteData.triples);
        };
        CamService.prototype.updateTermList = function (formAnnoton, entity) {
            this.pantherLookupService.termList = this.getUniqueTerms(formAnnoton);
            entity.termLookup.results = this.pantherLookupService.termPreLookup(entity.type);
        };
        CamService.prototype.updateEvidenceList = function (formAnnoton, entity) {
            this.pantherLookupService.evidenceList = this.getUniqueEvidence(formAnnoton);
            entity.predicate.evidenceLookup.results = this.pantherLookupService.evidencePreLookup();
        };
        CamService.prototype.updateReferenceList = function (formAnnoton, entity) {
            this.pantherLookupService.evidenceList = this.getUniqueEvidence(formAnnoton);
            entity.predicate.referenceLookup.results = this.pantherLookupService.referencePreLookup();
        };
        CamService.prototype.updateWithList = function (formAnnoton, entity) {
            this.pantherLookupService.evidenceList = this.getUniqueEvidence(formAnnoton);
            entity.predicate.withLookup.results = this.pantherLookupService.withPreLookup();
        };
        CamService.prototype.getNodesByType = function (annotonType) {
            return this.cam.getNodesByType(annotonType);
        };
        CamService.prototype.getNodesByTypeFlat = function (annotonType) {
            return this.cam.getNodesByTypeFlat(annotonType);
        };
        CamService.prototype.replaceAnnotonInternal = function (cam, entities, replaceWithTerm) {
            var self = this;
            cam.replace(entities, replaceWithTerm);
        };
        CamService.prototype.getUniqueTerms = function (formAnnoton) {
            var annotonNodes = this.cam.getTerms(formAnnoton);
            var result = lodash.uniqWith(annotonNodes, compareTerm);
            return result;
        };
        CamService.prototype.getUniqueEvidence = function (formAnnoton) {
            var evidences = this.cam.getEvidences(formAnnoton);
            var result = lodash.uniqWith(evidences, compareEvidence);
            return result;
        };
        CamService.prototype.bulkEdit = function (cam) {
            var self = this;
            return self._pantherGraphService.bulkEditAnnoton(cam);
        };
        CamService.prototype.reviewChanges = function (cam, stats) {
            var terms = cam.reviewTermChanges(stats);
            if (terms.length > 0) {
                return {
                    terms: terms
                };
            }
            return null;
        };
        CamService.ctorParameters = function () { return [
            { type: PantherFormConfigService },
            { type: forms.FormBuilder },
            { type: PantherUserService },
            { type: PantherGraphService },
            { type: PantherLookupService },
            { type: PantherGraphService },
            { type: CurieService }
        ]; };
        CamService.ɵprov = core.ɵɵdefineInjectable({ factory: function CamService_Factory() { return new CamService(core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(forms.FormBuilder), core.ɵɵinject(PantherUserService), core.ɵɵinject(PantherGraphService), core.ɵɵinject(PantherLookupService), core.ɵɵinject(PantherGraphService), core.ɵɵinject(CurieService)); }, token: CamService, providedIn: "root" });
        CamService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CamService);
        return CamService;
    }());

    var PantherAnnotonConnectorService = /** @class */ (function () {
        function PantherAnnotonConnectorService(_fb, pantherFormConfigService, camService, pantherLookupService, pantherGraphService) {
            var _this = this;
            this._fb = _fb;
            this.pantherFormConfigService = pantherFormConfigService;
            this.camService = camService;
            this.pantherLookupService = pantherLookupService;
            this.pantherGraphService = pantherGraphService;
            this.connectors = [];
            this.panel = {
                selectConnector: {
                    id: 1
                }, annotonConnectorForm: {
                    id: 2
                },
            };
            this.onAnnotonChanged = new rxjs.BehaviorSubject(null);
            this.connectorFormGroup = new rxjs.BehaviorSubject(null);
            this.connectorFormGroup$ = this.connectorFormGroup.asObservable();
            this.camService.onCamChanged.subscribe(function (cam) {
                if (!cam) {
                    return;
                }
                _this.cam = cam;
                if (_this.annoton) {
                    _this.getConnections();
                }
            });
        }
        PantherAnnotonConnectorService.prototype.selectPanel = function (panel) {
            this.selectedPanel = panel;
        };
        PantherAnnotonConnectorService.prototype.getConnections = function () {
            var _this = this;
            var self = this;
            var connectors = [];
            lodash.each(this.cam.annotons, function (annoton) {
                if (self.annoton.id !== annoton.id && annoton.annotonType !== exports.AnnotonType.ccOnly) {
                    connectors.push(Object.assign({
                        annoton: annoton,
                        connectorAnnoton: _this.cam.getConnectorAnnoton(self.annoton.id, annoton.id)
                    }));
                }
            });
            self.connectors = connectors;
        };
        PantherAnnotonConnectorService.prototype.initializeForm = function (upstreamId, downstreamId) {
            var upstreamAnnoton = this.cam.getAnnotonByConnectionId(upstreamId);
            var downstreamAnnoton = this.cam.getAnnotonByConnectionId(downstreamId);
            this.connectorAnnoton = this.pantherFormConfigService.createAnnotonConnectorModel(upstreamAnnoton, downstreamAnnoton);
            this.currentConnectorAnnoton = this.cam.getConnectorAnnoton(upstreamId, downstreamId);
            if (this.currentConnectorAnnoton) {
                this.currentConnectorAnnoton.setPreview();
                this.connectorAnnoton.copyValues(this.currentConnectorAnnoton);
            }
            this.connectorForm = this.createConnectorForm();
            this.connectorFormGroup.next(this._fb.group(this.connectorForm));
            this.connectorForm.causalEffect.setValue(this.connectorAnnoton.rule.effectDirection.direction);
            this.connectorForm.mechanism.setValue(this.connectorAnnoton.rule.mechanism.mechanism);
            this._onAnnotonFormChanges();
            // just to trigger the on Changes event
            this.connectorForm.causalEffect.setValue(this.connectorAnnoton.rule.effectDirection.direction);
            this.selectPanel(this.panel.annotonConnectorForm);
        };
        PantherAnnotonConnectorService.prototype.updateEvidence = function (node) {
            this.connectorForm.updateEvidenceForms(node.predicate);
            this.connectorFormGroup.next(this._fb.group(this.connectorForm));
        };
        PantherAnnotonConnectorService.prototype.createConnectorForm = function () {
            var self = this;
            var formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
            var connectorForm = new AnnotonConnectorForm(formMetadata);
            connectorForm.createEntityForms(self.connectorAnnoton.predicate, self.connectorAnnoton.hasInputNode);
            connectorForm.onValueChanges(self.connectorAnnoton.hasInputNode.termLookup);
            return connectorForm;
        };
        PantherAnnotonConnectorService.prototype.saveAnnoton = function () {
            var self = this;
            var value = this.connectorFormGroup.getValue().value;
            this.connectorAnnoton.prepareSave(value);
            if (self.connectorAnnoton.state === exports.ConnectorState.editing) {
                var saveData = self.connectorAnnoton.createEdit(self.currentConnectorAnnoton);
                return self.pantherGraphService.editAnnoton(self.cam, saveData.srcNodes, saveData.destNodes, saveData.srcTriples, saveData.destTriples, saveData.removeIds, saveData.removeTriples);
            }
            else { // creation
                var saveData = self.connectorAnnoton.createSave();
                return self.pantherGraphService.saveAnnoton(self.cam, saveData.triples, saveData.title);
            }
        };
        PantherAnnotonConnectorService.prototype.deleteAnnoton = function (connectorAnnoton) {
            var self = this;
            var deleteData = connectorAnnoton.createDelete();
            return self.pantherGraphService.deleteAnnoton(self.cam, deleteData.uuids, deleteData.triples);
        };
        PantherAnnotonConnectorService.prototype._onAnnotonFormChanges = function () {
            var _this = this;
            this.connectorFormGroup.getValue().valueChanges.subscribe(function (value) {
                //  this.errors = this.getAnnotonFormErrors();
                _this.connectorAnnoton.checkConnection(value);
            });
        };
        PantherAnnotonConnectorService.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: PantherFormConfigService },
            { type: CamService },
            { type: PantherLookupService },
            { type: PantherGraphService }
        ]; };
        PantherAnnotonConnectorService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherAnnotonConnectorService_Factory() { return new PantherAnnotonConnectorService(core.ɵɵinject(forms.FormBuilder), core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(CamService), core.ɵɵinject(PantherLookupService), core.ɵɵinject(PantherGraphService)); }, token: PantherAnnotonConnectorService, providedIn: "root" });
        PantherAnnotonConnectorService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherAnnotonConnectorService);
        return PantherAnnotonConnectorService;
    }());

    var PantherAnnotonEntityService = /** @class */ (function () {
        function PantherAnnotonEntityService(_fb, pantherFormConfigService, pantherGraphService, camService, pantherLookupService) {
            var _this = this;
            this._fb = _fb;
            this.pantherFormConfigService = pantherFormConfigService;
            this.pantherGraphService = pantherGraphService;
            this.camService = camService;
            this.pantherLookupService = pantherLookupService;
            this.entityFormGroup = new rxjs.BehaviorSubject(null);
            this.entityFormGroup$ = this.entityFormGroup.asObservable();
            this.camService.onCamChanged.subscribe(function (cam) {
                if (!cam) {
                    return;
                }
                _this.cam = cam;
            });
        }
        PantherAnnotonEntityService.prototype.initializeForm = function (annoton, entity) {
            this.currentAnnoton = lodash.cloneDeep(annoton);
            this.annoton = annoton;
            this.entity = entity;
            this.entityForm = this.createAnnotonEntityForm(this.entity);
            this.entityFormGroup.next(this._fb.group(this.entityForm));
            this._onAnnotonFormChanges();
        };
        PantherAnnotonEntityService.prototype.createAnnotonEntityForm = function (entity) {
            var self = this;
            var formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
            var entityForm = new EntityForm(formMetadata, entity);
            if (!entity.skipEvidence) {
                entityForm.createEvidenceForms(entity);
            }
            return entityForm;
        };
        PantherAnnotonEntityService.prototype.annotonEntityFormToAnnoton = function () {
            var self = this;
            self.entityForm.populateTerm();
        };
        PantherAnnotonEntityService.prototype._onAnnotonFormChanges = function () {
            this.entityFormGroup.getValue().valueChanges.subscribe(function () {
                // this.errors = this.getAnnotonFormErrors();
                //  this.annotonEntityFormToAnnoton();
                // this.annoton.enableSubmit();
            });
        };
        PantherAnnotonEntityService.prototype.saveAnnoton = function () {
            var self = this;
            self.annotonEntityFormToAnnoton();
            var saveData = self.annoton.createEdit(self.currentAnnoton);
            return self.pantherGraphService.editAnnoton(self.cam, saveData.srcNodes, saveData.destNodes, saveData.srcTriples, saveData.destTriples, saveData.removeIds, saveData.removeTriples);
        };
        PantherAnnotonEntityService.prototype.saveAnnotonInternal = function () {
            var self = this;
            self.annotonEntityFormToAnnoton();
            var saveData = self.annoton.createEdit(self.currentAnnoton);
            return self.pantherGraphService.editAnnoton(self.cam, saveData.srcNodes, saveData.destNodes, saveData.srcTriples, saveData.destTriples, saveData.removeIds, saveData.removeTriples);
        };
        PantherAnnotonEntityService.prototype.searchModels = function () {
            var self = this;
            self.annotonEntityFormToAnnoton();
            var saveData = self.annoton.createEdit(self.currentAnnoton);
        };
        PantherAnnotonEntityService.prototype.clearForm = function () {
        };
        PantherAnnotonEntityService.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: PantherFormConfigService },
            { type: PantherGraphService },
            { type: CamService },
            { type: PantherLookupService }
        ]; };
        PantherAnnotonEntityService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherAnnotonEntityService_Factory() { return new PantherAnnotonEntityService(core.ɵɵinject(forms.FormBuilder), core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(PantherGraphService), core.ɵɵinject(CamService), core.ɵɵinject(PantherLookupService)); }, token: PantherAnnotonEntityService, providedIn: "root" });
        PantherAnnotonEntityService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherAnnotonEntityService);
        return PantherAnnotonEntityService;
    }());

    var PantherAnnotonFormService = /** @class */ (function () {
        function PantherAnnotonFormService(_fb, pantherFormConfigService, camService, pantherGraphService, pantherLookupService) {
            var _this = this;
            this._fb = _fb;
            this.pantherFormConfigService = pantherFormConfigService;
            this.camService = camService;
            this.pantherGraphService = pantherGraphService;
            this.pantherLookupService = pantherLookupService;
            this.errors = [];
            this.camService.onCamChanged.subscribe(function (cam) {
                if (!cam) {
                    return;
                }
                _this.cam = cam;
            });
            this.annoton = this.pantherFormConfigService.createAnnotonModel(exports.AnnotonType.default);
            this.annotonFormGroup = new rxjs.BehaviorSubject(null);
            this.annotonFormGroup$ = this.annotonFormGroup.asObservable();
            this.initializeForm();
        }
        PantherAnnotonFormService.prototype.initializeForm = function (annoton) {
            var self = this;
            self.errors = [];
            if (annoton) {
                self.state = exports.AnnotonState.editing;
                self.currentAnnoton = annoton;
                self.annoton = lodash.cloneDeep(annoton);
            }
            else {
                self.state = exports.AnnotonState.creation;
                self.currentAnnoton = null;
            }
            self.annoton.resetPresentation();
            self.annotonForm = this.createAnnotonForm();
            self.annotonFormGroup.next(this._fb.group(this.annotonForm));
            self.annoton.updateEntityInsertMenu();
            self.annoton.enableSubmit();
            self._onAnnotonFormChanges();
        };
        PantherAnnotonFormService.prototype.initializeFormData = function () {
            this.fakester(this.annoton);
            this.initializeForm();
        };
        PantherAnnotonFormService.prototype.createAnnotonForm = function () {
            var self = this;
            var formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
            var annotonForm = new AnnotonForm(formMetadata);
            annotonForm.createFunctionDescriptionForm(self.annoton.presentation.fd);
            annotonForm.createMolecularEntityForm(self.annoton.presentation.gp);
            return annotonForm;
        };
        PantherAnnotonFormService.prototype.annotonFormToAnnoton = function () {
            this.annotonForm.populateAnnoton(this.annoton);
        };
        PantherAnnotonFormService.prototype._onAnnotonFormChanges = function () {
            var _this = this;
            this.annotonFormGroup.getValue().valueChanges.subscribe(function () {
                _this.annotonFormToAnnoton();
                _this.annoton.enableSubmit();
            });
        };
        PantherAnnotonFormService.prototype.getAnnotonFormErrors = function () {
            var errors = [];
            this.annotonForm.getErrors(errors);
            return errors;
        };
        PantherAnnotonFormService.prototype.setAnnotonType = function (annotonType) {
            this.annoton = this.pantherFormConfigService.createAnnotonModel(annotonType);
            this.initializeForm();
        };
        PantherAnnotonFormService.prototype.linkFormNode = function (entity, srcNode) {
            entity.uuid = srcNode.uuid;
            entity.term = srcNode.getTerm();
        };
        PantherAnnotonFormService.prototype.cloneForm = function (srcAnnoton, filterNodes) {
            this.annoton = this.pantherFormConfigService.createAnnotonModel(srcAnnoton.annotonType);
            if (filterNodes) {
                lodash.each(filterNodes, function (srcNode) {
                    var destNode = this.annoton.getNode(srcNode.id);
                    if (destNode) {
                        destNode.copyValues(srcNode);
                    }
                });
            }
            else {
                // this.annoton.copyValues(srcAnnoton);
            }
            this.initializeForm();
        };
        PantherAnnotonFormService.prototype.saveAnnoton = function () {
            var self = this;
            self.annotonFormToAnnoton();
            if (self.state === exports.AnnotonState.editing) {
                var saveData = self.annoton.createEdit(self.currentAnnoton);
                return self.pantherGraphService.editAnnoton(self.cam, saveData.srcNodes, saveData.destNodes, saveData.srcTriples, saveData.destTriples, saveData.removeIds, saveData.removeTriples);
            }
            else { // creation
                var saveData = self.annoton.createSave();
                return self.pantherGraphService.saveAnnoton(self.cam, saveData.triples, saveData.title);
            }
        };
        PantherAnnotonFormService.prototype.clearForm = function () {
            this.annoton = this.pantherFormConfigService.createAnnotonModel(this.annoton.annotonType);
            this.initializeForm();
        };
        PantherAnnotonFormService.prototype.fakester = function (annoton) {
            var self = this;
            lodash.each(annoton.nodes, function (node) {
                self.pantherLookupService.termLookup('a', Object.assign({}, node.termLookup.requestParams, { rows: 100 })).subscribe(function (response) {
                    if (response && response.length > 0) {
                        var termsCount = response.length;
                        node.term = Entity.createEntity(response[Math.floor(Math.random() * termsCount)]);
                        lodash.each(node.predicate.evidence, function (evidence) {
                            self.pantherLookupService.termLookup('a', Object.assign({}, node.predicate.evidenceLookup.requestParams, { rows: 100 })).subscribe(function (response) {
                                if (response && response.length > 0) {
                                    var evidenceCount = response.length;
                                    evidence.evidence = Entity.createEntity(response[Math.floor(Math.random() * evidenceCount)]);
                                    evidence.reference = "PMID:" + (Math.floor(Math.random() * 1000000) + 1000);
                                }
                            });
                        });
                    }
                });
            });
        };
        PantherAnnotonFormService.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: PantherFormConfigService },
            { type: CamService },
            { type: PantherGraphService },
            { type: PantherLookupService }
        ]; };
        PantherAnnotonFormService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherAnnotonFormService_Factory() { return new PantherAnnotonFormService(core.ɵɵinject(forms.FormBuilder), core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(CamService), core.ɵɵinject(PantherGraphService), core.ɵɵinject(PantherLookupService)); }, token: PantherAnnotonFormService, providedIn: "root" });
        PantherAnnotonFormService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherAnnotonFormService);
        return PantherAnnotonFormService;
    }());

    var CamsService = /** @class */ (function () {
        function CamsService(pantherFormConfigService, _pantherGraphService, camService, curieService) {
            var _this = this;
            this.pantherFormConfigService = pantherFormConfigService;
            this._pantherGraphService = _pantherGraphService;
            this.camService = camService;
            this.curieService = curieService;
            this.loading = false;
            this.cams = [];
            this.onCamsChanged = new rxjs.BehaviorSubject(null);
            this.onCamsCheckoutChanged = new rxjs.BehaviorSubject(null);
            this.onSelectedCamChanged = new rxjs.BehaviorSubject(null);
            this.onSelectedNodeChanged = new rxjs.BehaviorSubject(null);
            this.curieUtil = this.curieService.getCurieUtil();
            this.onSelectedCamChanged.subscribe(function (uuid) {
                if (uuid) {
                    _this.selectedCamUuid = uuid;
                }
            });
            this.onSelectedNodeChanged.subscribe(function (uuid) {
                if (uuid) {
                    _this.selectedNodeUuid = uuid;
                }
            });
        }
        CamsService.prototype.setup = function () {
        };
        CamsService.prototype.loadCams = function (filter) {
            var self = this;
            lodash.each(this.cams, function (cam) {
                self.camService.loadCam(cam, filter);
            });
            self.onCamsChanged.next(this.cams);
        };
        CamsService.prototype.addCamsToReview = function (cams) {
            var _this = this;
            var self = this;
            lodash.each(cams, function (metaCam) {
                var cam = new Cam();
                var found = lodash.find(_this.cams, { id: metaCam.id });
                if (!found) {
                    cam.id = metaCam.id;
                    cam.expanded = true;
                    cam.dateReviewAdded = metaCam.dateAdded;
                    cam.title = metaCam.title;
                    self.cams.push(cam);
                    self.camService.loadCam(cam);
                }
            });
            self.sortCams();
            self.updateDisplayNumber(self.cams);
            self.onCamsChanged.next(self.cams);
        };
        CamsService.prototype.addCamToReview = function (camId, metaCam) {
            var self = this;
            var cam = new Cam();
            var found = lodash.find(this.cams, { id: camId });
            if (!found) {
                cam.id = camId;
                cam.expanded = true;
                cam.dateReviewAdded = Date.now();
                if (metaCam) {
                    cam.title = metaCam.title;
                }
                self.cams.push(cam);
                self.camService.loadCam(cam);
                self.sortCams();
                self.updateDisplayNumber(self.cams);
                self.onCamsChanged.next(self.cams);
            }
        };
        CamsService.prototype.removeCamFromReview = function (cam) {
            lodash.remove(this.cams, { id: cam.id });
            this.updateDisplayNumber(this.cams);
            this.onCamsChanged.next(this.cams);
        };
        CamsService.prototype.findInCams = function (filter) {
            var self = this;
            lodash.each(self.cams, function (cam) {
                if (filter) {
                    cam.filter = filter;
                }
            });
            self.onCamsChanged.next(this.cams);
        };
        CamsService.prototype.expandMatch = function (nodeId) {
            var self = this;
            lodash.each(self.cams, function (cam) {
                cam.expanded = true;
                var annotons = cam.findAnnotonByNodeId(nodeId);
                lodash.each(annotons, function (annoton) {
                    annoton.expanded = true;
                });
            });
        };
        CamsService.prototype.replace = function (entities, replaceWithTerm) {
            var _this = this;
            var self = this;
            var groupedEntities = lodash.groupBy(entities, 'modelId');
            lodash.each(groupedEntities, function (values, key) {
                var cam = lodash.find(_this.cams, { id: key });
                cam.replace(entities, replaceWithTerm);
                // this.camService.replaceAnnotonInternal(cam)
            });
            self.reviewChanges();
        };
        CamsService.prototype.bulkEdit = function () {
            var self = this;
            var promises = [];
            lodash.each(this.cams, function (cam) {
                promises.push(self._pantherGraphService.bulkEditAnnoton(cam));
            });
            return rxjs.forkJoin(promises);
        };
        CamsService.prototype.reviewChanges = function () {
            var self = this;
            var details = [];
            var stats = new CamStats();
            lodash.each(this.cams, function (cam) {
                var changes = self.camService.reviewChanges(cam, stats);
                if (changes) {
                    details.push({
                        cam: cam,
                        changes: changes
                    });
                }
            });
            stats.camsCount = details.length;
            stats.updateTotal();
            var result = {
                stats: stats,
                details: details
            };
            this.onCamsCheckoutChanged.next(result);
        };
        CamsService.prototype.reset = function () {
            this.cams = [];
            this.onCamsChanged.next(this.cams);
        };
        CamsService.prototype.resetMatch = function () {
            var self = this;
            lodash.each(this.cams, function (cam) {
                cam.queryMatch = new CamQueryMatch();
            });
        };
        CamsService.prototype.sortCams = function () {
            this.cams.sort(this._compareDateReviewAdded);
        };
        CamsService.prototype.updateDisplayNumber = function (cams) {
            var self = this;
            lodash.each(cams, function (cam, key) {
                cam.displayNumber = (key + 1).toString();
                cam.updateAnnotonDisplayNumber();
            });
        };
        CamsService.prototype._compareDateReviewAdded = function (a, b) {
            if (a.dateReviewAdded > b.dateReviewAdded) {
                return -1;
            }
            else {
                return 1;
            }
        };
        CamsService.ctorParameters = function () { return [
            { type: PantherFormConfigService },
            { type: PantherGraphService },
            { type: CamService },
            { type: CurieService }
        ]; };
        CamsService.ɵprov = core.ɵɵdefineInjectable({ factory: function CamsService_Factory() { return new CamsService(core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(PantherGraphService), core.ɵɵinject(CamService), core.ɵɵinject(CurieService)); }, token: CamsService, providedIn: "root" });
        CamsService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CamsService);
        return CamsService;
    }());

    var PantherFormMenuService = /** @class */ (function () {
        function PantherFormMenuService() {
            this.panel = {
                camForm: {
                    id: 1
                }, annotonForm: {
                    id: 2
                }, annotonEntityForm: {
                    id: 3
                }, tripleForm: {
                    id: 4
                }, camDiagram: {
                    id: 5
                }, camPreview: {
                    id: 6
                }, camTable: {
                    id: 7
                }, connectorForm: {
                    id: 8
                }
            };
            // this.selectedLeftPanel = this.panel.annotonForm;
            this.selectedMiddlePanel = this.panel.camTable;
            // this.selectedRightPanel = this.panel.tripleForm;
        }
        PantherFormMenuService.prototype.selectLeftPanel = function (panel) {
            this.selectedLeftPanel = panel;
        };
        PantherFormMenuService.prototype.selectMiddlePanel = function (panel) {
            this.selectedMiddlePanel = panel;
        };
        PantherFormMenuService.prototype.selectRightPanel = function (panel) {
            this.selectedRightPanel = panel;
        };
        PantherFormMenuService.prototype.setLeftDrawer = function (leftDrawer) {
            this.leftDrawer = leftDrawer;
        };
        PantherFormMenuService.prototype.closeLeftDrawer = function () {
            return this.leftDrawer.close();
        };
        PantherFormMenuService.prototype.setRightDrawer = function (rightDrawer) {
            this.rightDrawer = rightDrawer;
        };
        PantherFormMenuService.prototype.openMiddlePanel = function (panel) {
            this.selectMiddlePanel(panel);
        };
        PantherFormMenuService.prototype.openLeftDrawer = function (panel) {
            this.selectLeftPanel(panel);
            return this.leftDrawer.open();
        };
        PantherFormMenuService.prototype.openRightDrawer = function (panel) {
            this.selectRightPanel(panel);
            return this.rightDrawer.open();
        };
        PantherFormMenuService.prototype.closeRightDrawer = function () {
            return this.rightDrawer.close();
        };
        PantherFormMenuService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherFormMenuService_Factory() { return new PantherFormMenuService(); }, token: PantherFormMenuService, providedIn: "root" });
        PantherFormMenuService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherFormMenuService);
        return PantherFormMenuService;
    }());

    var PantherTripleFormService = /** @class */ (function () {
        function PantherTripleFormService(_fb, pantherFormConfigService, camService, pantherLookupService) {
            var _this = this;
            this._fb = _fb;
            this.pantherFormConfigService = pantherFormConfigService;
            this.camService = camService;
            this.pantherLookupService = pantherLookupService;
            this.tripleFormGroup = new rxjs.BehaviorSubject(null);
            this.tripleFormGroup$ = this.tripleFormGroup.asObservable();
            this.camService.onCamChanged.subscribe(function (cam) {
                if (!cam)
                    return;
                _this.cam = cam;
            });
        }
        PantherTripleFormService.prototype.initializeForm = function (triple) {
            this.triple = triple;
            this.tripleForm = this.createTripleForm(triple);
            this.tripleFormGroup.next(this._fb.group(this.tripleForm));
            this._onAnnotonFormChanges();
        };
        PantherTripleFormService.prototype.createTripleForm = function (triple) {
            var self = this;
            var formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
            var tripleForm = new TripleForm(formMetadata);
            tripleForm.createTripleForm(triple);
            return tripleForm;
        };
        PantherTripleFormService.prototype.tripleFormToAnnoton = function () {
            var self = this;
            // self.tripleForm.populateAnnotonEntityForm(this.termNode);
        };
        PantherTripleFormService.prototype._onAnnotonFormChanges = function () {
            var _this = this;
            this.tripleFormGroup.getValue().valueChanges.subscribe(function (value) {
                // this.errors = this.getAnnotonFormErrors();
                _this.tripleFormToAnnoton();
            });
        };
        PantherTripleFormService.prototype.clearForm = function () {
        };
        PantherTripleFormService.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: PantherFormConfigService },
            { type: CamService },
            { type: PantherLookupService }
        ]; };
        PantherTripleFormService.ɵprov = core.ɵɵdefineInjectable({ factory: function PantherTripleFormService_Factory() { return new PantherTripleFormService(core.ɵɵinject(forms.FormBuilder), core.ɵɵinject(PantherFormConfigService), core.ɵɵinject(CamService), core.ɵɵinject(PantherLookupService)); }, token: PantherTripleFormService, providedIn: "root" });
        PantherTripleFormService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], PantherTripleFormService);
        return PantherTripleFormService;
    }());

    var withfrom = [
        'AgBase',
        'AGI_LocusCode',
        'ApiDB_PlasmoDB',
        'AraCyc',
        'ASAP',
        'AspGD',
        'AspGD_LOCUS',
        'AspGD_REF',
        'BFO',
        'BioCyc',
        'BIOMD',
        'BRENDA',
        'Broad_MGG',
        'Broad_NEUROSPORA',
        'CACAO',
        'CAS',
        'CASGEN',
        'CASREF',
        'CASSPC',
        'CDD',
        'CGD',
        'CGD_LOCUS',
        'CGD_REF',
        'CHEBI',
        'CL',
        'COG_Cluster',
        'COG_Function',
        'COG_Pathway',
        'ComplexPortal',
        'CORIELL',
        'CORUM',
        'dbSNP',
        'DDANAT',
        'DDBJ',
        'dictyBase',
        'dictyBase_gene_name',
        'dictyBase_REF',
        'DOI',
        'EC',
        'EchoBASE',
        'ECK',
        'ECO',
        'EcoCyc',
        'EcoCyc_REF',
        'ECOGENE',
        'EMAPA',
        'EMBL',
        'ENA',
        'ENSEMBL',
        'ENSEMBL_GeneID',
        'EnsemblFungi',
        'ENZYME',
        'EO_GIT',
        'EuPathDB',
        'FB',
        'FBbt',
        'FMA',
        'FYPO',
        'GDB',
        'GenBank',
        'Gene3D',
        'GeneDB',
        'Genesys-pgr',
        'GEO',
        'GO',
        'GO_REF',
        'GR',
        'GR_GENE',
        'GR_MUT',
        'GR_PROTEIN',
        'GR_QTL',
        'GR_REF',
        'GRIMS',
        'GRIN',
        'GRINDesc',
        'H-invDB_cDNA',
        'H-invDB_locus',
        'HAMAP',
        'HGNC',
        'HGNC_gene',
        'HPA',
        'HPA_antibody',
        'IMG',
        'IntAct',
        'InterPro',
        'IRGC',
        'IRIC',
        'IUPHAR_GPCR',
        'IUPHAR_RECEPTOR',
        'JCVI_CMR',
        'JCVI_EGAD',
        'JCVI_GenProp',
        'JCVI_Medtr',
        'JCVI_TIGRFAMS',
        'JSTOR',
        'KEGG_ENZYME',
        'KEGG_LIGAND',
        'KEGG_PATHWAY',
        'KEGG_REACTION',
        'LIFEdb',
        'MA',
        'MACSC_REF',
        'MaizeGDB',
        'MaizeGDB_Locus',
        'MaizeGDB_QTL',
        'MaizeGDB_REF',
        'MaizeGDB_stock',
        'MEROPS',
        'MEROPS_fam',
        'MeSH',
        'MetaCyc',
        'MGCSC_GENETIC_STOCKS',
        'MGI',
        'MIPS_funcat',
        'MO',
        'ModBase',
        'NASC_code',
        'NCBI_GP',
        'NCBIGene',
        'NCBITaxon',
        'NIF_Subcellular',
        'NMPDR',
        'OBO_SF2_PECO',
        'OBO_SF2_PO',
        'OMIM',
        'PAINT_REF',
        'PAMGO_GAT',
        'PAMGO_MGG',
        'PAMGO_VMD',
        'PANTHER',
        'PATO',
        'PATRIC',
        'PDB',
        'Pfam',
        'PharmGKB',
        'PIR',
        'PIRSF',
        'PLANA_REF',
        'Planteome_gene',
        'PMCID',
        'PMID',
        'PO',
        'PO_GIT',
        'PO_REF',
        'PomBase',
        'PR',
        'PRINTS',
        'ProDom',
        'Prosite',
        'PseudoCAP',
        'PSI-MOD',
        'PSO_GIT',
        'PubChem_BioAssay',
        'PubChem_Compound',
        'PubChem_Substance',
        'RAP-DB',
        'Reactome',
        'RefSeq',
        'Rfam',
        'RGD',
        'RHEA',
        'RNAcentral',
        'RNAmods',
        'RO',
        'SABIO-RK',
        'SEED',
        'SGD',
        'SGN',
        'SGN_ref',
        'SMART',
        'SO',
        'Soy_gene',
        'SOY_QTL',
        'SOY_ref',
        'SUPERFAMILY',
        'SWALL',
        'Swiss-Prot',
        'TAIR',
        'TC',
        'TGD',
        'TGD_LOCUS',
        'TGD_REF',
        'TO_GIT',
        'TreeGenes',
        'UBERON',
        'UM-BBD_enzymeID',
        'UM-BBD_reactionID',
        'UM-BBD_ruleID',
        'UniMod',
        'UniParc',
        'UniPathway',
        'UniProtKB',
        'UniProtKB-KW',
        'UniProtKB-SubCell',
        'UniRule',
        'VBRC',
        'VEGA',
        'VMD',
        'WB',
        'WB_REF',
        'WBls',
        'WBPhenotype',
        'Wikipedia',
        'Xenbase',
        'ZFIN'
    ];

    var PantherFormModule = /** @class */ (function () {
        function PantherFormModule() {
        }
        PantherFormModule = __decorate([
            core.NgModule({
                imports: [],
                providers: [
                //  PantherAnnotonFormService,
                //  CamService,
                // PantherAnnotonConnectorService
                ],
                exports: [
                //  PantherAnnotonFormService,
                // CamService,
                //  PantherAnnotonConnectorService
                ],
            })
        ], PantherFormModule);
        return PantherFormModule;
    }());

    exports.Annoton = Annoton;
    exports.AnnotonConnectorForm = AnnotonConnectorForm;
    exports.AnnotonError = AnnotonError;
    exports.AnnotonForm = AnnotonForm;
    exports.AnnotonFormMetadata = AnnotonFormMetadata;
    exports.AnnotonNode = AnnotonNode;
    exports.AnnotonNodeClosure = AnnotonNodeClosure;
    exports.AnnotonParser = AnnotonParser;
    exports.AnnotonRules = AnnotonRules;
    exports.Article = Article;
    exports.Cam = Cam;
    exports.CamForm = CamForm;
    exports.CamPage = CamPage;
    exports.CamQueryMatch = CamQueryMatch;
    exports.CamService = CamService;
    exports.CamStats = CamStats;
    exports.CamsService = CamsService;
    exports.ConnectorAnnoton = ConnectorAnnoton;
    exports.ConnectorRule = ConnectorRule;
    exports.Contributor = Contributor;
    exports.Entity = Entity;
    exports.EntityDefinition = entityDefinition;
    exports.EntityForm = EntityForm;
    exports.EntityGroupForm = EntityGroupForm;
    exports.EntityLookup = EntityLookup;
    exports.Evidence = Evidence;
    exports.EvidenceForm = EvidenceForm;
    exports.PantherAnnotonConnectorService = PantherAnnotonConnectorService;
    exports.PantherAnnotonEntityService = PantherAnnotonEntityService;
    exports.PantherAnnotonFormService = PantherAnnotonFormService;
    exports.PantherFormConfigService = PantherFormConfigService;
    exports.PantherFormMenuService = PantherFormMenuService;
    exports.PantherFormModule = PantherFormModule;
    exports.PantherGraphService = PantherGraphService;
    exports.PantherLookupService = PantherLookupService;
    exports.PantherTripleFormService = PantherTripleFormService;
    exports.PantherUserService = PantherUserService;
    exports.Organism = Organism;
    exports.Predicate = Predicate;
    exports.Rule = Rule;
    exports.ShapeDefinition = shapeDefinition;
    exports.SimpleAnnoton = SimpleAnnoton;
    exports.Triple = Triple;
    exports.TripleForm = TripleForm;
    exports.compareContributor = compareContributor;
    exports.compareGroup = compareGroup;
    exports.compareOrganism = compareOrganism;
    exports.pantherFormConfig = pantherFormConfig;
    exports.withfrom = withfrom;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=panther-form-base.umd.js.map
