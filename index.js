$vm.module_list={
    layout:                      ['--------','.../layout.html','2'],
    home:                        ['--------','.../modules/home.html','2'],
    navigation:                  ['--------','.../modules/navigation.html','2'],
    daily:                       ['--------','.A./operation/car_booking/daily.html','2',  'booking_record'],
    weekly:                      ['--------','.A./operation/car_booking/weekly.html','2', 'booking_record','daily'],
    monthly:                     ['--------','.A./operation/car_booking/monthly.html','2','booking_record','daily'],
    car:                         ['20003816','.A./operation/car_booking/car.html','2'],
    booking_record:              ['20003817','.A./operation/car_booking/booking_record.html','2'],
    upload_file:                 ['20007156','.A./document/upload_file.html','2'],
}
//--------------------------------------------------------
for(key in $vm.module_list){
    $vm.module_list[key][2]=$vm.module_list[key][1];
    $vm.module_list[key][1]=$vm.url($vm.module_list[key][1].replace('...','__BASE__/'+$vm.repository));
    $vm.module_list[key][2]=$vm.module_list[key][2].replace('...','https://github.com/'+$vm.repository+'/blob/master');
    $vm.module_list[key][1]=$vm.url($vm.module_list[key][1].replace('.A.','__BASE__/wappsystem/Common-Modules'));
    $vm.module_list[key][2]=$vm.module_list[key][2].replace('.A.','https://github.com/wappsystem/Common-Modules/blob/master');
}
//--------------------------------------------------------
var jsN=0;
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js',function(){last_last();});
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js',function(){last_last();});
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/ace/ace.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108',function(){last_last();});
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){last_last();} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 300);

}
//--------------------------------------------------------
var last_last=function(){
    //jsN++; if(jsN===7) $vm.load_demo();
}
//--------------------------------------------------------
