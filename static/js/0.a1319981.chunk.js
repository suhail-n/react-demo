webpackJsonp([0],{355:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),u=r.n(i),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e){function t(){var e,r,a,i;n(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={courseTitle:""},i=r,o(a,i)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.parseQueryParams()}},{key:"componentDidUpdate",value:function(){this.parseQueryParams()}},{key:"parseQueryParams",value:function(){var e=new URLSearchParams(this.props.location.search),t=!0,r=!1,n=void 0;try{for(var o,a=e.entries()[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;this.state.courseTitle!==i[1]&&this.setState({courseTitle:i[1]})}}catch(e){r=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw n}}}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h1",null,decodeURIComponent(this.state.courseTitle)),u.a.createElement("p",null,"You selected the Course with ID: ",this.props.match.params.id))}}]),t}(i.Component);t.default=l}});
//# sourceMappingURL=0.a1319981.chunk.js.map