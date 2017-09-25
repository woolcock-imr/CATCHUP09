var _task_fields='';
//-------------------------------------
$('#new__ID').hide();
$('#save__ID').hide();
var sql0="with pt as (select VolunteerID_A=S2,RowNum=row_number() over (order by UID)  from [TABLE-"+_mlist[_ids.participant].table_id+"] where s1='catchup09')";
sql0+=",task0 as (select VolunteerID_B=S2,Information,ID,PID,UID,PUID,DateTime,Author from [TABLE-"+_db_pid+"-@S1] )";
sql0+=",task as (select VolunteerID_A,Information,ID,PID,UID,PUID,DateTime,Author,RowNum from pt left join task0 on VolunteerID_A=VolunteerID_B)";
//-------------------------------------
_set_req=function(){
	var sql=sql0+" select ID,VolunteerID_A,Information,DateTime,Author from task where RowNum between @I6 and @I7"
    var sql_n=sql0+" select count(VolunteerID_A) from task";
    _req={cmd:'query_records',sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
}
//-------------------------------------
var _set_req_export=function(){
	var sql=sql0+" select ID,VolunteerID_A,Information,DateTime,Author from task"
    _set_from_to();
    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
}
//-----------------------------------------------
