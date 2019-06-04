<script>

function search()
{
    var name=document.getElementById("name").value.toUpperCase();
    var tr=document.getElementsByTagName("tr");
    for(var i=0;i<tr.length;i++)
    {
        var td=tr[i].getElementsByTagName("td")[1];
        if(td){
        var data= td.textContent || td.innerText;
        if(data.toUpperCase().indexOf(name)>-1)
        tr[i].style.display = "";
        else
        tr[i].style.display= "none";
        }
    }
}

</script>