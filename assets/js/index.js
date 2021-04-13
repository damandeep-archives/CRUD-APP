$('#add_user').submit(function (event){
    alert('Data Inserted successfully');
})


$('#update_user').submit(function (event){
    event.preventDefault();
    var unindexed_array=$(this).serializeArray();
    var data={};

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value'];
    })

    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done((responce)=>{
        alert('data updated successfully')
    })
})


if(window.location.pathname=="/"){
    $ondelte=$('.table tbody td a.delete');
    $ondelte.click((e)=>{
        var id=$(e.target).attr("data");
        console.log(id);

        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
            
        } 

        if(confirm("Do you really want to delete this record")){
            $.ajax(request).done((responce)=>{
                alert('data delted successfully')
                location.reload();
            })
        }

    })
}