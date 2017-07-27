var _task_fields='';
//-------------------------------------
$('#new__ID').hide();
$('#save__ID').hide();
var sql0="with pt0 as (select pt_idA=@('vm_id1') from [FORM-20004263] where s1='catchup09')";
sql0+=",pt as (select pt_idA,RowNum=row_number() over (order by pt_idA) from pt0)",
sql0+=",tb as (select ID,Information,pt_idB=@('VolunteerID'),DateTime,Author from [TABLE-"+_db_pid+"-@S1])";
//-------------------------------------
_set_req=function(){
	var sql=sql0+" select ID,pt_idA,Information,DateTime,Author from pt left join tb on pt_idA=pt_idB where RowNum between @I6 and @I7"
    var sql_n=sql0+" select count(pt_idA) from pt";
    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
var _set_req_export=function(){
	var sql=sql0+" select ID,pt_idA,Information,DateTime,Author from pt left join tb on pt_idA=pt_idB"
    _set_from_to();
    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
}
//-----------------------------------------------
