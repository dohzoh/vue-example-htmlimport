//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _vm._v(
            "\n            This card comming from a .vue component\n        "
          )
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "card-header-icon" }, [
          _c("span", { staticClass: "icon" }, [
            _c("i", { staticClass: "fa fa-angle-down" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c("div", { staticClass: "content" }, [
          _vm._v(
            "\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n\n            "
          ),
          _c("a", [_vm._v("@bulmaio")]),
          _vm._v(". "),
          _c("a", [_vm._v("#css")]),
          _vm._v(" "),
          _c("a", [_vm._v("#responsive")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("small", [_vm._v("11:09 PM - 1 Jan 2016")])
        ])
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "card-footer" }, [
        _c("a", { staticClass: "card-footer-item" }, [_vm._v("Save")]),
        _vm._v(" "),
        _c("a", { staticClass: "card-footer-item" }, [_vm._v("Edit")]),
        _vm._v(" "),
        _c("a", { staticClass: "card-footer-item" }, [_vm._v("Delete")])
      ])
    ])
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/mnt/d/work/gitclones/vue-example-htmlimport/es-modules/vue-router/component.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default component;
