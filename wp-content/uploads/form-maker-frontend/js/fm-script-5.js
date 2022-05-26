    var fm_currentDate = new Date();
    var FormCurrency_5 = 'UDS';
    var FormPaypalTax_5 = '0';
    var check_submit5 = 0;
    var check_before_submit5 = {};
    var required_fields5 = ["8","10","11","6"];
    var labels_and_ids5 = {"8":"type_text","9":"type_phone_new","10":"type_textarea","11":"type_own_select","6":"type_spinner","7":"type_textarea","1":"type_submit_reset"};
    var check_regExp_all5 = [];
    var check_paypal_price_min_max5 = [];
    var file_upload_check5 = [];
    var spinner_check5 = {"6":["",""]};
    var scrollbox_trigger_point5 = '20';
    var header_image_animation5 = 'none';
    var scrollbox_loading_delay5 = '0';
    var scrollbox_auto_hide5 = '1';
    var inputIds5 = '[]';
        var update_first_field_id5 = 0;
    var form_view_count5 = 0;
    // Occurs before the form is loaded
function before_load5() {	
}	
// Occurs just before submitting  the form
function before_submit5() {
	// IMPORTANT! If you want to interrupt (stop) the submitting of the form, this function should return true. You don\'t need to return any value if you don\'t want to stop the submission.
}	
// Occurs just before resetting the form
function before_reset5() {	
}
// Occurs after form is submitted and reloaded
function after_submit5() {
  
}
    function get_adress_fields_ids( that ) {
      var id = jQuery(that).attr("wdid");
      var disabled = [];
      if( !jQuery(that).is(':visible') ) {
          for (var i = 0; i <= 5; i++) {
            var name = jQuery(that).find(".wdform_" + id + "_address_" + i).attr("name");
            if (typeof name !== "undefined") {
              var temp = name.split("_");
              disabled.push(temp[1]);
            }
          }
      } else {
          for (var i = 0; i <= 5; i++) {
            var field = jQuery(that).find(".wdform_" + id + "_address_" + i);
            if( !field.is(':visible') ) {
              var name = field.attr("name");
              if (typeof name !== "undefined") {
                var temp = name.split("_");
                disabled.push(temp[1]);
              }
            }
          }
      }
      return disabled;
    }


    function onload_js5() {
                var telinput9 = jQuery("#wdform_9_element5");
								var iti9 = window.intlTelInput(telinput9[0], {
									nationalMode: false,
									preferredCountries: [ "w_first_val*:*" ],
									utilsScript: "http://localhost/wordpress/wp-content/plugins/form-maker/js/intlTelInput-utils.js"
								});
							
  jQuery("#form5 #wdform_6_element5")[0].spin = null;
  spinner = jQuery("#form5 #wdform_6_element5").spinner();
  if ("0" == "null" && jQuery("#form5 #wdform_6_element5").val() == "") { spinner.spinner("value", ""); }
  jQuery("#form5 #wdform_6_element5").spinner({ min: ""});
  jQuery("#form5 #wdform_6_element5").spinner({ max: ""});
  jQuery("#form5 #wdform_6_element5").spinner({ step: "1"});    }

    function condition_js5() {    }

    function check_js5(id, form_id) {
      if (id != 0) {
        x = jQuery("#" + form_id + "form_view"+id);
      }
      else {
        x = jQuery("#form"+form_id);
      }
          }

    function onsubmit_js5() {
      
    var disabled_fields = "";
    jQuery("#form5 div[wdid]").each(function() {
      if(jQuery(this).css("display") == "none") {
      
          if( jQuery(this).children().first().attr("type") === "type_address" ) {
              var ids = get_adress_fields_ids( this );
              if( ids.length > 0 ) {
                disabled_fields += ids.join(",");
                disabled_fields += ",";
              }
          } else {
              disabled_fields += jQuery(this).attr("wdid");
              disabled_fields += ",";
          }
      } else if( jQuery(this).children().first().attr("type") === "type_address" ) {
          var ids = get_adress_fields_ids( this );
          if( ids.length > 0 ) {
            disabled_fields += ids.join(",");
            disabled_fields += ",";
          }
      }
    })
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields5\" value =\""+disabled_fields+"\" />").appendTo("#form5");
    };    }

    function unset_fields5( values, id, i ) {
      rid = 0;
      if ( i > 0 ) {
        jQuery.each( values, function( k, v ) {
          if ( id == k.split('|')[2] ) {
            rid = k.split('|')[0];
            values[k] = '';
          }
        });
        return unset_fields5(values, rid, i - 1);
      }
      else {
        return values;
      }
    }

    function ajax_similarity5( obj, changing_field_id ) {
      jQuery.ajax({
        type: "POST",
        url: fm_objectL10n.form_maker_admin_ajax,
        dataType: "json",
        data: {
          nonce: fm_ajax.ajaxnonce,
          action: 'fm_reload_input',
          page: 'form_maker',
          form_id: 5,
          inputs: obj.inputs
        },
        beforeSend: function() {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              if ( val != '' && parseInt(wdid) == parseInt(changing_field_id) ) {
                jQuery("#form5 div[wdid='"+ wdid +"']").append( '<div class="fm-loading"></div>' );
              }
            });
          }
        },
        success: function (res) {
          if ( !jQuery.isEmptyObject(obj.inputs) ) {
            jQuery.each( obj.inputs, function( key, val ) {
              wdid = key.split('|')[0];
              jQuery("#form5 div[wdid='"+ wdid +"'] .fm-loading").remove();
              if ( !jQuery.isEmptyObject(res[wdid]) && ( !val || parseInt(wdid) == parseInt(changing_field_id) ) ) {
                jQuery("#form5 div[wdid='"+ wdid +"']").html( res[wdid].html );
              }
            });
          }
        },
        complete: function() {
        }
      });
    }

    function fm_script_ready5() {
      if (jQuery('#form5 .wdform_section').length > 0) {
        fm_document_ready( 5 );
      }
      else {
        jQuery("#form5").closest(".fm-form-container").removeAttr("style")
      }
      if (jQuery('#form5 .wdform_section').length > 0) {
        formOnload(5);
      }
      var ajaxObj5 = {};
      var value_ids5 = {};
      jQuery.each( jQuery.parseJSON( inputIds5 ), function( key, values ) {
        jQuery.each( values, function( index, input_id ) {
          tagName =  jQuery('#form5 [id^="wdform_'+ input_id +'_elemen"]').attr("tagName");
          type =  jQuery('#form5 [id^="wdform_'+ input_id +'_elemen"]').attr("type");
          if ( tagName == 'INPUT' ) {
            input_value = jQuery('#form5 [id^="wdform_'+ input_id +'_elemen"]').val();
            if ( jQuery('#form5 [id^="wdform_'+ input_id +'_elemen"]').is(':checked') ) {
              if ( input_value ) {
                value_ids5[key + '|' + input_id] = input_value;
              }
            }
            else if ( type == 'text' ) {
              if ( input_value ) {
                value_ids5[key + '|' + input_id] = input_value;
              }
            }
          }
          else if ( tagName == 'SELECT' ) {
            select_value = jQuery('#form5 [id^="wdform_'+ input_id +'_elemen"] option:selected').val();
            if ( select_value ) {
              value_ids5[key + '|' + input_id] = select_value;
            }
          }
          ajaxObj5.inputs = value_ids5;
          jQuery(document).on('change', '#form5 [id^="wdform_'+ input_id +'_elemen"]', function() {
          var id = '';
          var changing_field_id = '';
          if( jQuery(this).attr("tagName") == 'INPUT' ) {
            if( jQuery(this).is(':checked') ) {
              id = jQuery(this).val();
            }
            if( jQuery(this).attr('type') == 'text' ) {
              id = jQuery(this).val();
            }
          }
          else {
            id = jQuery(this).val();
          }
          value_ids5[key + '|' + input_id] = id;
          jQuery.each( value_ids5, function( k, v ) {
            key_arr = k.split('|');
            if ( input_id == key_arr[2] ) {
              changing_field_id = key_arr[0];
              count = Object.keys(value_ids5).length;
              value_ids5 = unset_fields5( value_ids5, changing_field_id, count );
            }
          });
          ajaxObj5.inputs = value_ids5;
          ajax_similarity5( ajaxObj5, changing_field_id );
          });
        });
      });
      if ( update_first_field_id5 && !jQuery.isEmptyObject(ajaxObj5.inputs) ) {
        ajax_similarity5( ajaxObj5, update_first_field_id5 );
      }
      form_load_actions();
      	  }
    jQuery(function () {
      fm_script_ready5();
    });
        