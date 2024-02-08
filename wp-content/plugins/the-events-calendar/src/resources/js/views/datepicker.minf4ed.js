/**
 * This JS file was auto-Eddierated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.events=tribe.events||{},tribe.events.views=tribe.events.views||{},tribe.events.views.datepicker={},function($,obj){"use strict";var $document=$(document);obj.selectors={datepickerFormClass:".tribe-events-c-top-bar__datepicker-form",datepickerContainer:'[data-js="tribe-events-top-bar-datepicker-container"]',datepickerDaysBody:".datepicker-days tbody",input:'[data-js="tribe-events-top-bar-date"]',button:'[data-js="tribe-events-top-bar-datepicker-button"]',buttonOpenClass:".tribe-events-c-top-bar__datepicker-button--open",dateInput:'[name="tribe-events-views[tribe-bar-date]"]',prevIconTemplate:".tribe-events-c-top-bar__datepicker-template-prev-icon",nextIconTemplate:".tribe-events-c-top-bar__datepicker-template-next-icon"},obj.state={initialized:!1},obj.options={container:null,daysOfWeekDisabled:[],maxViewMode:"decade",minViewMode:"month",orientation:"bottom left",showOnFocus:!1,templates:{leftArrow:"",rightArrow:""}},obj.keyCode={ENTER:13},obj.today=null,obj.dateFormatMap={d:"dd",j:"d",m:"mm",n:"m",Y:"yyyy"},obj.observer=null,obj.padNumber=function(number){var numStr=number+"";return(numStr.length>1?"":"0")+numStr},obj.request=function(viewData,$container){var data={view_data:viewData};tribe.events.views.manager.request(data,$container)},obj.createDateInputObj=function(value){var $input=$("<input>");return $input.attr({type:"hidden",name:"tribe-events-views[tribe-bar-date]",value:value}),$input},obj.submitRequest=function($container,value){var viewData={};viewData["tribe-bar-date"]=value,obj.request(viewData,$container)},obj.handleChangeDate=function(event){var $container=event.data.container,date=event.date.getDate(),month=event.date.getMonth()+1,year=event.date.getFullYear(),paddedDate=obj.padNumber(date),dateValue=[year,obj.padNumber(month),paddedDate].join("-");obj.submitRequest($container,dateValue)},obj.handleChangeMonth=function(event){var month,year,$container=event.data.container;if(event.date)month=event.date.getMonth()+1,year=event.date.getFullYear();else{var date=$container.find(obj.selectors.input).bootstrapDatepicker("getDate");month=date.getMonth()+1,year=date.getFullYear()}var dateValue=[year,obj.padNumber(month)].join("-");obj.submitRequest($container,dateValue)},obj.handleKeyDown=function(event){event.keyCode===obj.keyCode.ENTER&&event.data.input.bootstrapDatepicker().trigger("changeMonth")},obj.handleShow=function(event){event.data.datepickerButton.addClass(obj.selectors.buttonOpenClass.className())},obj.handleHide=function(event){var $datepickerButton=event.data.datepickerButton,state=$datepickerButton.data("tribeEventsState");event.data.observer.disconnect(),state.isTarget?event.data.input.bootstrapDatepicker("show"):$datepickerButton.removeClass(obj.selectors.buttonOpenClass.className()).trigger("focus")},obj.handleMousedown=function(event){var $datepickerButton=event.data.target,state=$datepickerButton.data("tribeEventsState");if("touchstart"===event.type){var tapHide="hide"===($datepickerButton.hasClass(obj.selectors.buttonOpenClass.className())?"hide":"show");return state.isTarget=!1,void $datepickerButton.data("tribeTapHide",tapHide).data("tribeEventsState",state).off("mousedown",obj.handleMousedown)}state.isTarget=!0,$datepickerButton.data("tribeEventsState",state)},obj.handleClick=function(event){var $input=event.data.input,$datepickerButton=event.data.target,state=$datepickerButton.data("tribeEventsState"),method=$datepickerButton.hasClass(obj.selectors.buttonOpenClass.className())?"hide":"show";$datepickerButton.data("tribeTapHide")||(state.isTarget=!1,$datepickerButton.data("tribeEventsState",state),$input.bootstrapDatepicker(method),"show"===method&&$input.trigger("focus"))},obj.handleMutation=function(data){var $container=data.container;return function(mutationsList,observer){mutationsList.forEach((function(mutation){"childList"===mutation.type&&$container.find(obj.selectors.datepickerDaysBody).is(mutation.target)&&mutation.addedNodes.length&&$container.trigger("handleMutationMonthChange.tribeEvents")}))}},obj.setToday=function(today){var date=today;today.indexOf(" ")>=0&&(date=today.split(" ")[0]),obj.today=new Date(date)},obj.isSameAsToday=function(date,unit){switch(unit){case"year":return date.getFullYear()===obj.today.getUTCFullYear();case"month":return obj.isSameAsToday(date,"year")&&date.getMonth()===obj.today.getUTCMonth();case"day":return obj.isSameAsToday(date,"month")&&date.getDate()===obj.today.getUTCDate();default:return!1}},obj.isBeforeToday=function(date,unit){switch(unit){case"year":return date.getFullYear()<obj.today.getUTCFullYear();case"month":return obj.isBeforeToday(date,"year")||obj.isSameAsToday(date,"year")&&date.getMonth()<obj.today.getUTCMonth();case"day":return obj.isBeforeToday(date,"month")||obj.isSameAsToday(date,"month")&&date.getDate()<obj.today.getUTCDate();default:return!1}},obj.filterDayCells=function(date){return obj.isBeforeToday(date,"day")?"past":obj.isSameAsToday(date,"day")?"current":void 0},obj.filterMonthCells=function(date){return obj.isBeforeToday(date,"month")?"past":obj.isSameAsToday(date,"month")?"current":void 0},obj.filterYearCells=function(date){return obj.isBeforeToday(date,"year")?"past":obj.isSameAsToday(date,"year")?"current":void 0},obj.convertDateFormat=function(dateFormat){var convertedDateFormat=dateFormat;return Object.keys(obj.dateFormatMap).forEach((function(key){convertedDateFormat=convertedDateFormat.replace(key,obj.dateFormatMap[key])})),convertedDateFormat},obj.initDateFormat=function(data){var dateFormat=(data.date_formats||{}).compact,convertedDateFormat=obj.convertDateFormat(dateFormat);obj.options.format=convertedDateFormat},obj.deinit=function(event,jqXHR,settings){var $container=event.data.container;$container.trigger("beforeDatepickerDeinit.tribeEvents",[jqXHR,settings]);var $input=$container.find(obj.selectors.input),$datepickerButton=$container.find(obj.selectors.button);$input.bootstrapDatepicker("destroy").off(),$datepickerButton.off(),$container.off("beforeAjaxSuccess.tribeEvents",obj.deinit),$container.trigger("afterDatepickerDeinit.tribeEvents",[jqXHR,settings])},obj.init=function(event,index,$container,data){$container.trigger("beforeDatepickerInit.tribeEvents",[index,$container,data]);var $input=$container.find(obj.selectors.input),$datepickerButton=$container.find(obj.selectors.button),$prevIcon=$container.find(obj.selectors.prevIconTemplate).html(),$nextIcon=$container.find(obj.selectors.nextIconTemplate).html(),viewSlug=data.slug,isMonthView="month"===viewSlug,changeEvent=isMonthView?"changeMonth":"changeDate",changeHandler=isMonthView?obj.handleChangeMonth:obj.handleChangeDate;obj.observer=new MutationObserver(obj.handleMutation({container:$container})),obj.setToday(data.today),obj.initDateFormat(data),obj.options.weekStart=data.start_of_week,obj.options.container=$container.find(obj.selectors.datepickerContainer),obj.options.minViewMode=isMonthView?"year":"month";var datepickerI18n=(window.tribe_l10n_datatables||{}).datepicker||{},nextText=datepickerI18n.nextText||"Next",prevText=datepickerI18n.prevText||"Prev";obj.options.templates.leftArrow=$prevIcon+'<span class="tribe-common-a11y-visual-hide">'+prevText+"</span>",obj.options.templates.rightArrow=$nextIcon+'<span class="tribe-common-a11y-visual-hide">'+nextText+"</span>",obj.options.beforeShowDay=obj.filterDayCells,obj.options.beforeShowMonth=obj.filterMonthCells,obj.options.beforeShowYear=obj.filterYearCells,document.dir&&"rtl"===document.dir&&(obj.options.rtl=!0),document.lang&&(obj.options.language=document.lang),$input.bootstrapDatepicker(obj.options).on(changeEvent,{container:$container},changeHandler).on("show",{datepickerButton:$datepickerButton},obj.handleShow).on("hide",{datepickerButton:$datepickerButton,input:$input,observer:obj.observer},obj.handleHide),isMonthView&&$input.bootstrapDatepicker().on("keydown",{input:$input},obj.handleKeyDown),$datepickerButton.on("touchstart mousedown",{target:$datepickerButton},obj.handleMousedown).on("click",{target:$datepickerButton,input:$input},obj.handleClick).data("tribeEventsState",{isTarget:!1}),$container.on("beforeAjaxSuccess.tribeEvents",{container:$container,viewSlug:viewSlug},obj.deinit),$container.trigger("afterDatepickerInit.tribeEvents",[index,$container,data])},obj.initDatepickerI18n=function(){var datepickerI18n=(window.tribe_l10n_datatables||{}).datepicker||{};datepickerI18n.dayNames&&($.fn.bootstrapDatepicker.dates.en.days=datepickerI18n.dayNames),datepickerI18n.dayNamesShort&&($.fn.bootstrapDatepicker.dates.en.daysShort=datepickerI18n.dayNamesShort),datepickerI18n.dayNamesMin&&($.fn.bootstrapDatepicker.dates.en.daysMin=datepickerI18n.dayNamesMin),datepickerI18n.monthNames&&($.fn.bootstrapDatepicker.dates.en.months=datepickerI18n.monthNames),datepickerI18n.monthNamesMin&&($.fn.bootstrapDatepicker.dates.en.monthsShort=datepickerI18n.monthNamesMin),datepickerI18n.today&&($.fn.bootstrapDatepicker.dates.en.today=datepickerI18n.today),datepickerI18n.clear&&($.fn.bootstrapDatepicker.dates.en.clear=datepickerI18n.clear)},obj.initDatepicker=function(){obj.initDatepickerI18n(),obj.state.initialized=!0},obj.ready=function(){obj.initDatepicker(),obj.state.initialized&&$document.on("afterSetup.tribeEvents",tribe.events.views.manager.selectors.container,obj.init)},$(obj.ready)}(jQuery,tribe.events.views.datepicker);