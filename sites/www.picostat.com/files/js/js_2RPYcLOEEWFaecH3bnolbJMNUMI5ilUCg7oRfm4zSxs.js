/**
 * @file
 * Javascript behaviors for MathJax.
 */

/* global MathJax, Drupal, jQuery, document */

(function ($, Drupal, document, MathJax) {

  'use strict';

  /**
   * Attaches behaviors for MathJax.
   */
  Drupal.behaviors.mathjax = {
    attach: function (context, settings) {
      $(document).ajaxComplete(function () {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
      });
      if (settings.mathjax.config_type === 0) {
        $('body').addClass('tex2jax_ignore');
      }
    }
  };

}(jQuery, Drupal, document, MathJax));
;
/**
 * @file
 * Custom JavaScript behaviors
 */

/* global Custom, Drupal, jQuery, document */
(function ($, Drupal, document, Custom) {

  'use strict';

  /**
   * Attaches behaviors for Custom.
   */
  Drupal.behaviors.custom = {
    attach: function (context, settings) {

      (function (a, k, g) {
        a.fn.tinyNav = function (l) {
          var c = a.extend({
            active: "selected",
            header: "",
            indent: "- ",
            label: ""
          }, l);
          return this.each(function () {
            g++;
            var h = a(this), b = "tinynav" + g, f = ".l_" + b,
                e = a("<select/>").attr("id", b).addClass("tinynav " + b);
            if (h.is("ul,ol")) {
              "" !== c.header && e.append(a("<option/>").text(c.header));
              var d = "";
              h.addClass("l_" + b).find("a").each(function () {
                d += '<option value="' + a(this).attr("href") + '">';
                var b;
                for (b = 0; b < a(this).parents("ul, ol").length - 1; b++) {
                  d += c.indent;
                }
                d += a(this).text() + "</option>"
              });
              e.append(d);
              c.header || e.find(":eq(" + a(f + " li").index(a(f + " li." + c.active)) + ")").attr("selected", !0);
              e.change(function () {
                $('.ui-tabs-panel').hide();
                $($(this).val()).show()
              });
              a(f).after(e);
              c.label && e.before(a("<label/>").attr("for", b).addClass("tinynav_label " + b + "_label").append(c.label))
            }
          })
        }
      })(jQuery, this, 0);

      /* Quicktabs responsive menu (tinynav.js) */
      $(function () {
        if (!$('.tinynav').length) {
          $(".block-blocktabs ul.ui-tabs-nav").tinyNav({active: 'ui-tabs-active'});
        }
      });


      $('.block-shorten input').attr('readonly', 'readonly');

      $("#edit-this-shortened").on("click", function () {
        $(this).select();
      });

      $('#edit-x-').attr('readonly', 'readonly');
      $('#edit-y-').attr('readonly', 'readonly');

      $('#search-block-form #edit-keys').val('Search');

      $('#search-block-form #edit-keys').click(function () {
        $(this).val('');
        $(this).css('color', 'black');
      });

      $('.tabs__tab a').each(function () {
        if ($(this).attr('title') == 'Tour Page') {
          $(this).css('color', 'green');
        }
      });

      $('.tabs__tab a').click(function (e) {
        if ($(this).attr('title') == 'Tour Page') {
          e.stopPropagation();
          e.preventDefault();
          $('.toolbar-tab button#picostat-tour').click();
          return false;
        }
      });

      // Add CSS for selector currently not possible with CSS3 (:not) chained.
      // Webform does not add classes for every element individually
      if ($('body.path-webform').length && !$('body.path-admin').length) {
        $('details').css('display', 'none');
      }
      if ($('form#node-operation-form').length) {
        $('.view-filters').css('display', 'none');
      }

      $('#views-exposed-form-applications-block-1').on('change', 'select', function (e) {
        var val = $(e.target).val();
        $('#views-exposed-form-applications-block-1 .ui-autocomplete-input').val(val);
      });

      $('#views-exposed-form-my-datasets-block-1').on('change', 'select', function (e) {
        var val = $(e.target).val();
        val = val.replace(/-[0-9]+$/g, '');
        $('#views-exposed-form-my-datasets-block-1 .ui-autocomplete-input').val(val);
      });

      $('#views-exposed-form-dataset-block-1').on('change', 'select', function (e) {
        var val = $(e.target).val();
        val = val.replace(/-[0-9]+$/g, '');
        $('#views-exposed-form-dataset-block-1 .ui-autocomplete-input').val(val);
      });

    }
  };
}(jQuery, Drupal, document));
;
/**
 * @file
 * Pico JavaScript behaviors
 */

/* global Drupal, jQuery, document */
(function ($, Drupal, document, Custom) {

  'use strict';

  /**
   * Attaches behaviors for Pico theme.
   */
  Drupal.behaviors.pico = {
    attach: function (context, settings) {

      //==========preloder===========
      $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
      });

      $('.block-shorten input').attr('readonly', 'readonly');

      $("#edit-this-shortened").on("click", function () {
        $(this).select();
      });

      $('#edit-x-').attr('readonly', 'readonly');
      $('#edit-y-').attr('readonly', 'readonly');       

      if ($('body.page-node-type-dataset').length) {
        var classNames = $('body').attr('class').toString().split(' ');
        $.each(classNames, function (i, className) {
          
        });
      }
    }
  };
}(jQuery, Drupal, document));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function init(i, tab) {
    var $tab = $(tab);
    var $target = $tab.find('[data-drupal-nav-tabs-target]');
    var isCollapsible = $tab.hasClass('is-collapsible');

    function openMenu(e) {
      $target.toggleClass('is-open');
    }

    function handleResize(e) {
      $tab.addClass('is-horizontal');
      var $tabs = $tab.find('.tabs');
      var isHorizontal = $tabs.outerHeight() <= $tabs.find('.tabs__tab').outerHeight();
      $tab.toggleClass('is-horizontal', isHorizontal);

      if (isCollapsible) {
        $tab.toggleClass('is-collapse-enabled', !isHorizontal);
      }

      if (isHorizontal) {
        $target.removeClass('is-open');
      }
    }

    $tab.addClass('position-container is-horizontal-enabled');
    $tab.on('click.tabs', '[data-drupal-nav-tabs-trigger]', openMenu);
    $(window).on('resize.tabs', Drupal.debounce(handleResize, 150)).trigger('resize.tabs');
  }

  Drupal.behaviors.navTabs = {
    attach: function attach(context, settings) {
      var $tabs = $(context).find('[data-drupal-nav-tabs]');

      if ($tabs.length) {
        var notSmartPhone = window.matchMedia('(min-width: 300px)');

        if (notSmartPhone.matches) {
          $tabs.once('nav-tabs').each(init);
        }
      }
    }
  };
})(jQuery, Drupal);;
